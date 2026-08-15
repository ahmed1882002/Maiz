# MAÏZ | مَيْز — Hawawshi, Charcoal Hearth & Artisanal Elixirs

<div align="center">
  <h3>The Alchemy of Flame, Flour & Heritage Spices</h3>
  <p>An upscale, minimal, and stylish web application celebrating the authentic craft of Egyptian Hawawshi and wood-charcoal grilling.</p>
</div>

---

## 📖 About The Project / عن المشروع

**MAÏZ (مَيْز)** is an upscale culinary brand that elevates traditional Egyptian street food—specifically **Hawawshi** and charcoal-grilled specialties—into a fine dining atelier experience. 

The digital experience is designed with a **minimalist, modern, and uncluttered aesthetic**, highlighting:
- **Heritage Ingredients**: 100% pasture-raised cuts, single-origin Egyptian spices, stone-milled ancient wheat.
- **The Charcoal Hearth**: Live-fire temperature calibration (450°C sear / 220°C render) with natural citrus and oak wood lump charcoal.
- **Artisanal Beverages**: Slow cold-brewed Upper Egyptian Karkadeh, charred citrus limonana, and Bedouin ember teas.

---

## ✨ Features & Architecture / المميزات والصفحات

### 1. 🏠 Home Page (`index.html`)
- **Editorial Hero Section**: Captivating typography, ambient ember glow, and key stats.
- **The Three Pillars**: Prime Cuts, Stone-Milled Heritage Dough, and Live Fire Mastery.
- **The Live Hearth Showcase**: Interactive breakdown of fat rendering and flash blistering.
- **Curated Menu Highlights**: Direct interactive "+ Add to Bag" ordering.
- **The 4-Step Craft Timeline**: The Grind &rarr; The Dough &rarr; The Embers &rarr; The Blister.
- **Dining Atelier Banner**: Travertine dining salon with fast-booking CTA.

### 2. 📜 Full Interactive Menu (`menu.html`)
- **Category Filter Tabs**: Signature Hawawshi, Charcoal Hearth, Mezze & Dips, Artisanal Elixirs, Sweet Endings.
- **Dietary Filter System**: All, Chef's Selection, Fire Spiced, and Vegetarian.
- **Instant Live Search**: Real-time filtering across titles, ingredients, and descriptions.
- **Slide-out Pick-up Bag**: Dynamic quantity controls (+ / −), subtotal calculations, and checkout preview.

### 3. 🌿 Story & The Craft (`story.html`)
- **The Culinary Manifesto**: Philosophy of restraint, ancient grains, and living flame.
- **Terroir & Provenance Archive**: Single-origin wild Sinai sumac, Minya coriander, Aswan dark hibiscus, and Aleppo silk chili.
- **Hearth Engineering Anatomy**: Multi-zone heat grids, cast iron contact presses, and herbal smoke infusions.

### 4. 📍 Reservations & Flagships (`reserve.html`)
- **Interactive Multi-Step Booking Engine**: Party size picker, date & time slot selector, and atmosphere preference (*The Hearth Counter*, *Dining Salon*, *Garden Terrace*).
- **Instant Confirmation Voucher**: Generates dynamic booking code (`MZ-XXXXXX`).
- **Flagships Directory**: Downtown Cairo, Marina Promenade, and The Garden Quarter.

---

## 🛠️ Tech Stack / التقنيات المستخدمة

- **Frontend**: Semantic HTML5 & Vanilla JavaScript (ES6+ Modular Architecture).
- **Styling**: Vanilla CSS3 with Custom Design Tokens (`design-tokens.css`), Fluid Typography, and HSL/Hex Color Palettes.
- **Typography**: Google Fonts (`DM Serif Display` / `Playfair Display` + `Plus Jakarta Sans`).
- **Assets**: Bespoke studio-grade generated food and atmosphere photography.
- **Responsiveness**: Fully responsive across mobile, tablet, and ultra-wide displays with zero external UI bloat.

---

## 🚀 Getting Started / تشغيل المشروع محلياً

No build tools or heavy dependencies required:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ahmed1882002/Maiz.git
   cd Maiz
   ```

2. **Open the project:**
   - Double click `index.html` to open in any web browser, OR
   - Run a local server:
     ```bash
     # Using Python
     python -m http.server 3000
     
     # Or using Node
     npx serve .
     ```

3. **Visit:** `http://localhost:3000`

---

## 📂 Project Structure / هيكل الملفات

```
Maiz/
├── index.html              # Main Landing Page
├── menu.html               # Interactive Menu & Order Drawer
├── story.html              # Heritage Story & Craft Showcase
├── reserve.html            # Table Booking & Flagship Locations
├── README.md               # Project Documentation
├── css/
│   ├── design-tokens.css   # Color palette, typography, and spacing variables
│   ├── styles.css          # Global layout, animations, navigation, footer
│   ├── menu.css            # Menu-specific styling and filters
│   ├── story.css           # Editorial typography and timeline styles
│   └── reserve.css         # Reservation engine & location cards
├── js/
│   ├── app.js              # Header scroll, mobile nav, global bag drawer
│   ├── menu.js             # Menu filters, search, and dynamic rendering
│   ├── reserve.js          # Interactive reservation booking engine
│   └── data/
│       └── menu-items.js   # Rich menu catalog & pairing data
└── assets/
    └── images/             # Studio-grade food and dining photography
```

---

<div align="center">
  <p>© 2026 <b>MAÏZ (مَيْز)</b>. Crafted with Flame & Stone-Milled Flour.</p>
</div>
