const translations = {
    "tr": {
        "home": "Anasayfa",
        "products": "Ürünler",
        "about": "Hakkımızda",
        "contact": "İletişim",
        "heroTitle": "Alp Marble - Mermerin Zarafeti",
        "heroDescription": "Doğal taşın eşsiz güzelliğiyle mekanlarınıza değer katın.",
        "discover": "Ürünlerimizi Keşfedin",
        "productsTitle": "Ürünlerimiz",
        "product1Title": "Ürün Adı 1",
        "product1Description": "Ürün açıklaması.",
        "aboutTitle": "Hakkımızda",
        "aboutDescription": "Alp Marble olarak...",
        "footer": "&copy; 2025 Alp Marble"
    },
    "en": {
        "home": "Home",
        "products": "Products",
        "about": "About Us",
        "contact": "Contact",
        "heroTitle": "Alp Marble - The Elegance of Marble",
        "heroDescription": "Add value to your spaces with the unique beauty of natural stone.",
        "discover": "Discover Our Products",
        "productsTitle": "Our Products",
        "product1Title": "Product Name 1",
        "product1Description": "Product description.",
        "aboutTitle": "About Us",
        "aboutDescription": "As Alp Marble...",
        "footer": "&copy; 2025 Alp Marble"
    },
    "pt": {
        "home": "Início",
        "products": "Produtos",
        "about": "Sobre Nós",
        "contact": "Contato",
        "heroTitle": "Alp Marble - A Elegância do Mármore",
        "heroDescription": "Agregue valor aos seus espaços com a beleza única da pedra natural.",
        "discover": "Descubra Nossos Produtos",
        "productsTitle": "Nossos Produtos",
        "product1Title": "Nome do Produto 1",
        "product1Description": "Descrição do produto.",
        "aboutTitle": "Sobre Nós",
        "aboutDescription": "Como Alp Marble...",
        "footer": "&copy; 2025 Alp Marble"
    }
};

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.dataset.lang;
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    translatePage(selectedLanguage);
});

// Sayfa yüklendiğinde varsayılan dil olarak Türkçe'yi ayarla
translatePage('tr');
