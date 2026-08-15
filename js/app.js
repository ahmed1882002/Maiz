/**
 * MAÏZ - Global Application Logic
 * Shared across Home, Menu, Story, and Reservations
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initGlobalBagDrawer();
  initNewsletter();
});

/* Sticky Header Scroll Effect */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Mobile Menu Drawer Toggle */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = navLinks.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', isExpanded);
    toggleBtn.innerHTML = isExpanded 
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8h16M4 16h16"/></svg>';
  });

  // Close when link clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8h16M4 16h16"/></svg>';
    });
  });
}

/* Global Order Bag / Cart Management */
window.MaizBag = {
  items: JSON.parse(localStorage.getItem('maiz_bag') || '[]'),

  save() {
    localStorage.setItem('maiz_bag', JSON.stringify(this.items));
    this.updateCountBadge();
    this.renderDrawer();
  },

  addItem(itemId, qty = 1) {
    const itemData = MENU_DATA ? MENU_DATA.find(i => i.id === itemId) : null;
    if (!itemData) return;

    const existing = this.items.find(i => i.id === itemId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.items.push({
        id: itemData.id,
        name: itemData.name,
        price: itemData.price,
        qty: qty
      });
    }

    this.save();
    showToast(`Added "${itemData.name}" to your pick-up bag.`);
  },

  updateQty(itemId, delta) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      this.items = this.items.filter(i => i.id !== itemId);
    }
    this.save();
  },

  getTotal() {
    return this.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  },

  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  updateCountBadge() {
    const badges = document.querySelectorAll('.cart-count-badge');
    const count = this.getCount();
    badges.forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  renderDrawer() {
    const listEl = document.getElementById('bagItemsList');
    const subtotalEl = document.getElementById('bagSubtotal');
    const checkoutBtn = document.getElementById('bagCheckoutBtn');

    if (!listEl) return;

    if (this.items.length === 0) {
      listEl.innerHTML = `
        <div class="empty-bag-state">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:12px;opacity:0.5;">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          <p>Your pick-up bag is currently empty.</p>
          <a href="menu.html" class="btn btn-outline btn-sm" style="margin-top:10px;">Explore Menu</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '$0.00';
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    listEl.innerHTML = this.items.map(item => `
      <div class="bag-item">
        <div class="bag-item-info">
          <h5>${item.name}</h5>
          <span>$${(item.price * item.qty).toFixed(2)}</span>
        </div>
        <div class="bag-qty-controls">
          <button class="qty-btn" onclick="MaizBag.updateQty('${item.id}', -1)" aria-label="Decrease quantity">−</button>
          <span style="font-size:0.85rem;font-weight:600;min-width:18px;text-align:center;">${item.qty}</span>
          <button class="qty-btn" onclick="MaizBag.updateQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
        </div>
      </div>
    `).join('');

    if (subtotalEl) {
      subtotalEl.textContent = `$${this.getTotal().toFixed(2)}`;
    }
    if (checkoutBtn) {
      checkoutBtn.disabled = false;
    }
  }
};

/* Global Bag Drawer & Backdrop Setup */
function initGlobalBagDrawer() {
  const backdrop = document.querySelector('.drawer-backdrop');
  const drawer = document.getElementById('bagDrawer');
  const openButtons = document.querySelectorAll('.cart-toggle-btn');
  const closeBtn = document.getElementById('closeBagDrawer');
  const checkoutBtn = document.getElementById('bagCheckoutBtn');

  const openDrawer = () => {
    if (drawer && backdrop) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      MaizBag.renderDrawer();
    }
  };

  const closeDrawer = () => {
    if (drawer && backdrop) {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
    }
  };

  openButtons.forEach(btn => btn.addEventListener('click', openDrawer));
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      showToast('Order prepared for pick-up! Pick-up ready in 20 minutes at our Downtown Atelier.');
      MaizBag.items = [];
      MaizBag.save();
      setTimeout(closeDrawer, 1200);
    });
  }

  // Initial badge setup
  MaizBag.updateCountBadge();
}

/* Toast Notifications */
function showToast(message, duration = 3600) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-ember-primary)" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/* Newsletter Subscription */
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      showToast('Welcome to the Maiz Hearth Circle. We have received your email.');
      input.value = '';
    }
  });
}
