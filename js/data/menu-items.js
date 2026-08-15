/**
 * MAÏZ - Culinary Menu Dataset
 * Authentic Hawawshi, Charcoal Hearth & Artisanal Beverages
 */

const MENU_DATA = [
  // --- HAWAWSHI ---
  {
    id: 'haw-classic',
    category: 'hawawshi',
    name: 'Baladi Prime Heritage Hawawshi',
    nameArabic: 'حواوشي بلدي أصيل',
    price: 14.50,
    tags: ['chef', 'signature'],
    spiceLevel: 2,
    description: 'Pasture-raised coarsely ground beef chuck & brisket, minced sweet onions, cracked coriander, sumac, and heritage 7-spice blend enclosed in artisan stone-ground whole wheat baladi pita, flame-baked over hardwood embers until blistered and crisp.',
    ingredients: 'Prime Beef Chuck & Brisket, Stone-Milled Wheat, Heritage 7-Spice, Fresh Parsley, Roasted Chili, Clarified Ghee',
    pairing: 'Charred Lime Limonana & Silky Garlic Toum',
    image: 'assets/images/hero_hawawshi.jpg',
    featured: true
  },
  {
    id: 'haw-brisket',
    category: 'hawawshi',
    name: 'Smoked Brisket & Aged Akawi Hawawshi',
    nameArabic: 'حواوشي بريسكت وجبنة عكاوي',
    price: 18.00,
    tags: ['signature'],
    spiceLevel: 1,
    description: '14-hour oak-smoked shredded brisket blended with mild brine-aged Akawi cheese, caramelized shallots, and crushed green peppercorns in a blistered charred crust with a brush of bone marrow ghee.',
    ingredients: 'Oak-Smoked Beef Brisket, Aged Akawi Cheese, Caramelized Shallots, Green Peppercorns, Bone Marrow Ghee',
    pairing: 'Smoked Hibiscus Cold Brew',
    image: 'assets/images/hero_hawawshi.jpg',
    featured: true
  },
  {
    id: 'haw-sujuk',
    category: 'hawawshi',
    name: 'Lamb Sujuk & Charred Pepper Hawawshi',
    nameArabic: 'حواوشي سجق ضأن وفلفل مشوي',
    price: 16.50,
    tags: ['spicy'],
    spiceLevel: 3,
    description: 'House-cured artisanal spiced lamb sujuk sausage, charred sweet bell peppers, Aleppo chili flakes, garlic toum drizzle, baked crisp in live charcoal fire.',
    ingredients: 'Artisanal Lamb Sujuk, Charred Red Peppers, Aleppo Chili, Garlic Toum, Baladi Bread, Nigella Seeds',
    pairing: 'Tamarind Fizz with Orange Blossom',
    image: 'assets/images/hero_hawawshi.jpg',
    featured: true
  },
  {
    id: 'haw-wagyu',
    category: 'hawawshi',
    name: 'Truffle Wagyu & Caramelized Leek Hawawshi',
    nameArabic: 'حواوشي واغيو بالكمأة والكرات',
    price: 24.00,
    tags: ['chef'],
    spiceLevel: 1,
    description: 'Rich Wagyu beef mincemeat infused with black summer truffle paste, slow-melted caramelized leeks, and roasted garlic folded in artisanal sesame-crusted pita.',
    ingredients: 'Wagyu Mincemeat, Black Summer Truffle, Melted Leeks, Roasted Garlic, White Sesame, Ghee',
    pairing: 'Sparkling Damascus Rose Water',
    image: 'assets/images/hero_hawawshi.jpg',
    featured: false
  },
  {
    id: 'haw-portobello',
    category: 'hawawshi',
    name: 'Portobello & Halloumi Hearth Hawawshi',
    nameArabic: 'حواوشي بورتوبيلو وحلوم مشوي',
    price: 15.00,
    tags: ['veg'],
    spiceLevel: 1,
    description: 'Wood-fired portobello mushrooms, grilled Cypriot halloumi, wild thyme (za’atar), sun-ripened tomatoes, and walnut paste in golden charcoal-baked flatbread.',
    ingredients: 'Wood-Fired Portobello, Grilled Halloumi, Fresh Za’atar, Sun-Dried Tomato, Walnut Puree, Olive Oil',
    pairing: 'Charred Lime & Mint Limonana',
    image: 'assets/images/hero_hawawshi.jpg',
    featured: false
  },

  // --- FROM THE HEARTH GRILLS ---
  {
    id: 'grill-chops',
    category: 'hearth',
    name: 'Charcoal Smoked Lamb Chops',
    nameArabic: 'ريش ضأن مدخنة بالفحم',
    price: 29.00,
    tags: ['chef', 'signature'],
    spiceLevel: 1,
    description: 'Prime Australian grass-fed lamb chops marinated in pomegranate molasses, crushed rosemary, wild sumac, and sea salt, seared over screaming hardwood charcoal.',
    ingredients: 'Grass-Fed Lamb Ribs, Pomegranate Molasses, Dried Wild Sumac, Rosemary, Garlic Confit',
    pairing: 'Smoked Hibiscus Cold Brew',
    image: 'assets/images/grill_fire.jpg',
    featured: true
  },
  {
    id: 'grill-kofta',
    category: 'hearth',
    name: 'Pistachio-Crusted Kofta Meshweya',
    nameArabic: 'كفتة مشوية بالفستق الحلبي',
    price: 21.00,
    tags: ['signature'],
    spiceLevel: 2,
    description: 'Minced lamb and milk-fed veal skewers seasoned with hand-ground spices and roasted Aleppo pistachios, served over hearth-charred flatbread with sumac onions.',
    ingredients: 'Minced Lamb & Veal, Roasted Aleppo Pistachios, Sumac Onions, Grilled Long Peppers, Fresh Mint',
    pairing: 'Charred Lime Limonana',
    image: 'assets/images/grill_fire.jpg',
    featured: true
  },
  {
    id: 'grill-tawook',
    category: 'hearth',
    name: 'Charred Shish Tawook Skewers',
    nameArabic: 'شيش طاووق على الفحم',
    price: 19.50,
    tags: [],
    spiceLevel: 1,
    description: 'Corn-fed tender chicken thighs steeped for 24 hours in smoked paprika, labneh, roasted garlic, and preserved lemon, flame-charred on iron skewers.',
    ingredients: 'Free-Range Chicken Thighs, Greek Labneh, Preserved Lemon, Garlic Toum, Smoked Paprika',
    pairing: 'Tamarind Fizz with Orange Blossom',
    image: 'assets/images/grill_fire.jpg',
    featured: false
  },
  {
    id: 'grill-seabass',
    category: 'hearth',
    name: 'Whole Flame-Seared Sea Bass',
    nameArabic: 'قاروص كامل مشوي على اللهب',
    price: 32.00,
    tags: ['chef'],
    spiceLevel: 1,
    description: 'Fresh wild Mediterranean sea bass stuffed with fresh dill, coriander, and charred citrus slices, flame-grilled on the hearth grate with sumac-brown butter.',
    ingredients: 'Wild Sea Bass, Sumac Brown Butter, Fresh Dill, Charred Citrus, Sea Salt Flakes',
    pairing: 'Sparkling Damascus Rose Water',
    image: 'assets/images/grill_fire.jpg',
    featured: false
  },

  // --- MEZZE & DIPS ---
  {
    id: 'mezze-feta',
    category: 'mezze',
    name: 'Whipped Smoked Feta & Hot Honey',
    nameArabic: 'فيتا مدخنة مخفوقة بالعسل الحار',
    price: 11.50,
    tags: ['veg', 'signature'],
    spiceLevel: 2,
    description: 'Creamy whipped sheep’s milk feta infused with smoked olive oil, drizzled with artisan Aleppo chili hot honey and roasted pine nuts, served with hot baladi crisps.',
    ingredients: 'Sheep Feta, Smoked EVOO, Aleppo Chili Hot Honey, Toasted Pine Nuts, Fresh Thyme',
    pairing: 'Hot Fire-Baked Baladi Bread',
    image: 'assets/images/craft_spices.jpg',
    featured: true
  },
  {
    id: 'mezze-baba',
    category: 'mezze',
    name: 'Charcoal Roasted Baba Ghanoush',
    nameArabic: 'بابا غنوج بالفحم والرمان',
    price: 10.00,
    tags: ['veg'],
    spiceLevel: 1,
    description: 'Whole eggplants charred directly in fire embers until silky and smoky, folded with raw tahini, fresh lemon juice, pomegranate pearls, and virgin olive oil.',
    ingredients: 'Ember-Charred Eggplant, Raw Sesame Tahini, Garlic, Fresh Lemon, Pomegranate Arils',
    pairing: 'Fresh Herbs and Baladi Bread',
    image: 'assets/images/craft_spices.jpg',
    featured: false
  },
  {
    id: 'mezze-batata',
    category: 'mezze',
    name: 'Charred Batata Harra',
    nameArabic: 'بطاطا حرة مقرمشة',
    price: 9.50,
    tags: ['veg', 'spicy'],
    spiceLevel: 3,
    description: 'Crispy golden potato cubes tossed in searing garlic, fresh coriander leaves, red chili paste, and a generous squeeze of charred lime.',
    ingredients: 'Crispy Potatoes, Coriander, Garlic Confit, Red Chili Paste, Charred Lime',
    pairing: 'Silky Tahini Dip',
    image: 'assets/images/craft_spices.jpg',
    featured: false
  },

  // --- ARTISANAL ELIXIRS & BEVERAGES ---
  {
    id: 'bev-hibiscus',
    category: 'elixirs',
    name: 'Smoked Hibiscus & Pomegranate Fizz',
    nameArabic: 'كركديه مدخن بالرمان الفوار',
    price: 8.50,
    tags: ['signature'],
    spiceLevel: 0,
    description: 'Slow cold-brewed Upper Egyptian Karkadeh (hibiscus flowers) infused with smoked orange wood syrup, fresh pomegranate juice, sparkling water, and charred orange wheel.',
    ingredients: 'Cold-Brewed Egyptian Karkadeh, Pomegranate Reduction, Smoked Citrus Syrup, Sparkling Water, Dried Citrus',
    pairing: 'Baladi Prime Heritage Hawawshi',
    image: 'assets/images/craft_beverage.jpg',
    featured: true
  },
  {
    id: 'bev-limonana',
    category: 'elixirs',
    name: 'Charred Lime & Mint Limonana',
    nameArabic: 'ليموناضة بالنعناع والليمون المشوي',
    price: 7.50,
    tags: [],
    spiceLevel: 0,
    description: 'Freshly pressed Egyptian lime juice blended with fresh garden spearmint, crushed mountain ice, a dash of orange blossom water, and charred caramelized lime wheel.',
    ingredients: 'Fresh Lime, Spearmint, Orange Blossom Water, Cane Sugar, Crushed Crystal Ice',
    pairing: 'Pistachio Kofta Meshweya',
    image: 'assets/images/craft_beverage.jpg',
    featured: true
  },
  {
    id: 'bev-tamarind',
    category: 'elixirs',
    name: 'Tamarind Craft Cold Brew',
    nameArabic: 'تمر هندي بالتوابل الدافئة',
    price: 8.00,
    tags: [],
    spiceLevel: 0,
    description: 'Artisanal sweet and tart wild tamarind infusion simmered with cinnamon bark, clove, and rose essence, poured over hand-carved ice.',
    ingredients: 'Wild Tamarind, Ceylon Cinnamon, Cloves, Rose Hydrosol, Raw Brown Sugar',
    pairing: 'Lamb Sujuk Hawawshi',
    image: 'assets/images/craft_beverage.jpg',
    featured: false
  },
  {
    id: 'bev-tea',
    category: 'elixirs',
    name: 'Smoked Bedouin Charcoal Tea',
    nameArabic: 'شاي بدوي على الجمر',
    price: 6.00,
    tags: [],
    spiceLevel: 0,
    description: 'Robust black Ceylon tea brewed directly in a copper kettle over live embers, infused with wild Sinai habaq (desert mint) and crushed green cardamom pods.',
    ingredients: 'Black Ceylon Tea, Sinai Habaq Mint, Green Cardamom, Fresh Mint Leaves',
    pairing: 'Cardamom Pistachio Knafeh Tart',
    image: 'assets/images/craft_beverage.jpg',
    featured: false
  },

  // --- SWEET ENDINGS ---
  {
    id: 'sweet-knafeh',
    category: 'sweets',
    name: 'Cardamom Pistachio Knafeh Tart',
    nameArabic: 'تارت كنافة بالفستق والهيل',
    price: 12.00,
    tags: ['chef', 'signature'],
    spiceLevel: 0,
    description: 'Crisp golden spun kataifi crust stuffed with molten sweet Akkawi & ashta cream, finished with warm orange blossom syrup and freshly crushed Aleppo pistachios.',
    ingredients: 'Kataifi Pastry, Fresh Ashta Cream, Sweet Akkawi, Aleppo Pistachios, Orange Blossom Syrup',
    pairing: 'Smoked Bedouin Charcoal Tea',
    image: 'assets/images/craft_spices.jpg',
    featured: true
  },
  {
    id: 'sweet-ummali',
    category: 'sweets',
    name: 'Flame-Charred Umm Ali Brioche',
    nameArabic: 'أم علي بريوش مكرملة بالفرن',
    price: 11.50,
    tags: [],
    spiceLevel: 0,
    description: 'Buttery French brioche soaked in rich vanilla-infused buffalo milk and double cream, baked in terracotta clay pot until caramelized and topped with toasted hazelnuts and raisins.',
    ingredients: 'Artisan Brioche, Buffalo Milk, Pure Cream, Vanilla Bean, Toasted Hazelnuts, Golden Sultanas',
    pairing: 'Tamarind Craft Cold Brew',
    image: 'assets/images/craft_spices.jpg',
    featured: false
  }
];

// Helper to retrieve dishes by category
function getDishesByCategory(category) {
  if (category === 'all') return MENU_DATA;
  return MENU_DATA.filter(item => item.category === category);
}

// Helper to get featured items for home page
function getFeaturedDishes() {
  return MENU_DATA.filter(item => item.featured);
}
