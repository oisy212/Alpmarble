// AOS Animasyon Kütüphanesi Başlatılıyor
AOS.init({
  duration: 1000,
  once: true
});

// Çoklu Dil Çeviri Verileri
const translations = {
  tr: {
    home: "Anasayfa",
    products: "Ürünler",
    about: "Hakkımızda",
    contact: "İletişim",
    heroTitle: "Alp Marble - Mermerin Zarafeti",
    heroDescription: "Doğal taşın eşsiz güzelliğiyle mekanlarınıza değer katın.",
    discover: "Ürünlerimizi Keşfedin",
    productsTitle: "Ürünlerimiz",
    product1Title: "Ürün Adı 1",
    product1Description: "Ürün açıklaması.",
    contactTitle: "İletişim / Destek",
    footer: "&copy; 2025 Alp Marble"
  },
  en: {
    home: "Home",
    products: "Products",
    about: "About Us",
    contact: "Contact",
    heroTitle: "Alp Marble - The Elegance of Marble",
    heroDescription: "Add value to your spaces with the unique beauty of natural stone.",
    discover: "Discover Our Products",
    productsTitle: "Our Products",
    product1Title: "Product Name 1",
    product1Description: "Product description.",
    contactTitle: "Contact / Support",
    footer: "&copy; 2025 Alp Marble"
  },
  pt: {
    home: "Início",
    products: "Produtos",
    about: "Sobre Nós",
    contact: "Contato",
    heroTitle: "Alp Marble - A Elegância do Mármore",
    heroDescription: "Agregue valor aos seus espaços com a beleza única da pedra natural.",
    discover: "Descubra Nossos Produtos",
    productsTitle: "Nossos Produtos",
    product1Title: "Nome do Produto 1",
    product1Description: "Descrição do produto.",
    contactTitle: "Contato / Suporte",
    footer: "&copy; 2025 Alp Marble"
  }
};

// Fonksiyon: Seçilen dile göre sayfadaki metinleri güncelleme
function translatePage(lang) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

// Dil seçimi değiştiğinde çalışması için
document.getElementById("language-selector").addEventListener("change", function () {
  translatePage(this.value);
});

// Mobil menü toggle işlemi
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

// Varsayılan dil: Türkçe
translatePage("tr");

//
// EmailJS Entegrasyonu
//
// Aşağıdaki satırlarda EmailJS entegrasyon bilgileri yer alıyor.
// Sağladığınız public anahtar, servis ID ve template ID kullanılarak form gönderimi sağlanır.
(function(){
  emailjs.init("FaReOpkABYtAOmQBj"); // EmailJS Public (Kullanıcı) Anahtarınız
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const formData = {
    user_name: this.user_name.value,
    user_email: this.user_email.value,
    subject: this.subject.value,
    message: this.message.value,
  };

  emailjs.send("service_m3j2ces", "template_wmyv3d2", formData) // Servis ve Template ID'leriniz
    .then(function (response) {
      alert("Mesajınız başarıyla gönderildi!");
      document.getElementById("contact-form").reset();
    }, function (error) {
      alert("Mesaj gönderilemedi, lütfen daha sonra tekrar deneyin.");
    });
});
