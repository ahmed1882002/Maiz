/**
 * MAÏZ - Interactive Menu Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initMenuRenderer();
});

let currentCategory = 'all';
let activeDietary = 'all';
let searchQuery = '';

function initMenuRenderer() {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  renderCategories();
  initCategoryButtons();
  initDietaryPills();
  initSearchInput();
}

function initCategoryButtons() {
  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderCategories();
    });
  });
}

function initDietaryPills() {
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeDietary = pill.dataset.diet;
      renderCategories();
    });
  });
}

function initSearchInput() {
  const searchInput = document.getElementById('menuSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderCategories();
  });
}

function filterDish(dish) {
  // Category filter
  if (currentCategory !== 'all' && dish.category !== currentCategory) {
    return false;
  }

  // Dietary / tag filter
  if (activeDietary !== 'all') {
    if (activeDietary === 'spicy' && !dish.tags.includes('spicy') && dish.spiceLevel < 2) return false;
    if (activeDietary === 'chef' && !dish.tags.includes('chef') && !dish.tags.includes('signature')) return false;
    if (activeDietary === 'veg' && !dish.tags.includes('veg')) return false;
  }

  // Search filter
  if (searchQuery) {
    const matchName = dish.name.toLowerCase().includes(searchQuery);
    const matchDesc = dish.description.toLowerCase().includes(searchQuery);
    const matchIngredients = dish.ingredients.toLowerCase().includes(searchQuery);
    if (!matchName && !matchDesc && !matchIngredients) return false;
  }

  return true;
}

function renderCategories() {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  const categories = [
    { id: 'hawawshi', title: 'Signature Hawawshi', subtitle: 'Stone-milled crust, prime spiced cuts, flame-baked over hardwood embers.' },
    { id: 'hearth', title: 'From The Charcoal Hearth', subtitle: 'Slow wood-smoked and flame-charred meat, seafood, and poultry.' },
    { id: 'mezze', title: 'Mezze, Spreads & Crisps', subtitle: 'Silky dips, hot baladi bread, smoked sheep feta, and charred aromatics.' },
    { id: 'elixirs', title: 'Artisanal Elixirs & Teas', subtitle: 'Smoked Upper Egyptian hibiscus, wild tamarind, and bedouin ember teas.' },
    { id: 'sweets', title: 'Sweet Endings', subtitle: 'Warm heritage desserts infused with cardamom, ashta cream, and Aleppo pistachios.' }
  ];

  let html = '';
  let totalVisible = 0;

  categories.forEach(cat => {
    if (currentCategory !== 'all' && currentCategory !== cat.id) return;

    const catItems = MENU_DATA.filter(dish => dish.category === cat.id && filterDish(dish));
    if (catItems.length === 0) return;

    totalVisible += catItems.length;

    html += `
      <div class="menu-category-group" id="cat-${cat.id}">
        <div class="category-group-header">
          <div>
            <span class="eyebrow"><span class="eyebrow-line"></span> Section</span>
            <h3 class="category-group-title">${cat.title}</h3>
          </div>
          <p class="category-group-desc">${cat.subtitle}</p>
        </div>

        <div class="menu-cards-grid">
          ${catItems.map(dish => renderDishCard(dish)).join('')}
        </div>
      </div>
    `;
  });

  if (totalVisible === 0) {
    html = `
      <div style="text-align:center; padding: 4rem 1rem; color: var(--color-text-secondary);">
        <p style="font-size: 1.25rem; font-family: var(--font-serif-display); margin-bottom: 0.5rem;">No dishes match your selected filter.</p>
        <p style="font-size: 0.9rem; color: var(--color-text-tertiary);">Try clearing your search query or selecting a different dietary filter.</p>
        <button class="btn btn-outline btn-sm" onclick="resetFilters()" style="margin-top:1rem;">Reset Filters</button>
      </div>
    `;
  }

  container.innerHTML = html;
}

function renderDishCard(dish) {
  let badgeHtml = '';
  if (dish.tags.includes('chef')) {
    badgeHtml += `<span class="badge badge-gold">Chef's Selection</span>`;
  } else if (dish.tags.includes('signature')) {
    badgeHtml += `<span class="badge badge-ember">Atelier Signature</span>`;
  } else if (dish.tags.includes('spicy')) {
    badgeHtml += `<span class="badge badge-spicy">Fire Spiced</span>`;
  } else if (dish.tags.includes('veg')) {
    badgeHtml += `<span class="badge badge-veg">Vegetarian</span>`;
  }

  return `
    <div class="menu-item-card" data-id="${dish.id}">
      <div>
        <div class="item-top-meta">
          <div class="item-badge-wrap">${badgeHtml}</div>
          <span class="dish-notes">${dish.spiceLevel > 0 ? '🔥'.repeat(dish.spiceLevel) : ''}</span>
        </div>

        <div class="item-title-row">
          <h4 class="item-name">${dish.name}</h4>
          <span class="item-price">$${dish.price.toFixed(2)}</span>
        </div>

        <p class="item-description">${dish.description}</p>
        <div class="item-ingredients">Key Ingredients: ${dish.ingredients}</div>
      </div>

      <div class="item-action-row">
        <span class="item-flavor-note">Pairs with: ${dish.pairing}</span>
        <button class="btn-add-quick" onclick="MaizBag.addItem('${dish.id}', 1)" aria-label="Add ${dish.name} to order">
          + Add to Bag
        </button>
      </div>
    </div>
  `;
}

function resetFilters() {
  currentCategory = 'all';
  activeDietary = 'all';
  searchQuery = '';
  
  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
  const firstCat = document.querySelector('.category-btn[data-category="all"]');
  if (firstCat) firstCat.classList.add('active');

  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  const firstPill = document.querySelector('.filter-pill[data-diet="all"]');
  if (firstPill) firstPill.classList.add('active');

  renderCategories();
}
