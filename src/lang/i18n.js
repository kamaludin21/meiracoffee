import { createI18n } from "vue3-i18n";

const messages = {
  en: {
    lang: "English",
    menu: ["Home", "Products", "About Us", "Contact"],
    contactButton: "Contact Now",
    address: "Merbau Street, Selatpanjang Kota",
    city: "Kab. Kepulauan Meranti, Riau, Indonesia",
    productsNav: "Explore Products",
    heroSection: {
      title: "Trusted Quality Liberica Exporter",
      subtitle:
        "We are exporters of products in the Meranti Islands. One of them is Liberica coffee beans, typical of the peat land of the Meranti Islands",
      getStartedButton: "Get Started",
      ExploreButton: "Explore",
    },
    chooseSection: {
      title: "Why Choose Us?",
      interestedSection: "Are you interested in working together?",
      cardOne: {
        title: "Legal",
        subtitle:
          "We are legal and certified from our government for business activity and export industries",
      },
      cardTwo: {
        title: "Best Price",
        subtitle:
          "We are legal and certified from our government for business activity and export industries",
      },
      cardThree: {
        title: "Trusted",
        subtitle:
          "We are legal and certified from our government for business activity and export industries",
      },
    },
    productSection: {
      smallTitle: "Let's check",
      bigTitle: "Our Product",
      productSmallTitle: "Our main product are",
      productTitle: "Liberica Coffee Beans",
      description:
        "Liberica coffee is a type of coffee originating from Liberia and West Africa. This coffee grows well in the Meranti Islands area with a geographical peat soil. That's why Liberica coffee beans have their own distinctive taste and aroma and are different from other types of coffee",
      variantTitle: "We export one of kind",
      variant: "Green Beans Coffe",
      variantDescription:
        "The results of this roasting produce shiny black beans with an oily surface and a very bitter taste when tasted. The darker the roast color, the less acidity you will find in your coffee.",
      getProductTitle: "Get our liberica green beans now",
    },
    getTouchSection: {
      mainTitle: "Get in Touch",
      title: "Have an inquiry?",
      subtitle:
        "Get in touch and ask something. Or visit or social media below",
      name: "Name",
      mail: "Email",
      message: "Message",
      submit: "Send",
    },
    contactPage: {
      mainTitleSub: "Contact us if your have any inquiry or anything about business",
      contactInformation: "Contact Information",
      regency: "Riau Province, Indonesia",
      phone: "+628 0000 0000",
      mail: "alamat@email.com",
    },
    aboutPage: {
      title: "Know",
      description: "MEIRA Coffee are exporters of leading commodities in one of the regencies in Riau, namely the Meranti Islands. built by people who share the same vision, and manage to serve clients professionally.",
      thankGreeting: "We are very grateful for all our partners and clients, Following the moment and will always serve the best for all.",
      visi: {
        title: "Vision",
        desc: "Become an exporter with world quality customer service and advance the economy together",
      },
      misi: {
        title: "Mision",
        misi1: "Build good relationships with clients and partners",
        misi2: "Always provide requests with good quality and guaranteed",
        misi3: "Build and have a professional team"
      }
    }
  },
  id: {
    lang: "Indonesia",
    menu: ["Beranda", "Produk", "Tentang Kami", "Kontak"],
    contactButton: "Hubungi Sekarang",
    address: "Jalan Merbau, Selatpanjang Kota",
    city: "Kab. Kepulauan Meranti, Riau, Indonesia",
    productsNav: "Jelajahi Produk",
    heroSection: {
      title: "Eksportir Liberika Kualitas Terpercaya",
      subtitle:
        "Kami adalah eksportir produk-produk di kepulauan meranti. Salah satunya biji kopi liberika khas tanah gambut kepulauan meranti",
      getStartedButton: "Ayo Mulai",
      ExploreButton: "Eksplor",
    },
    chooseSection: {
      title: "Kenapa Memilih Kami?",
      interestedSection: "Apakah tertarik untuk bekerja sama?",
      cardOne: {
        title: "Resmi dan Bersertifikat",
        subtitle:
          "Kami legal dan bersertifikat dari pemerintah kami untuk kegiatan bisnis dan industri ekspor",
      },
      cardTwo: {
        title: "Harga Terbaik",
        subtitle:
          "Kami menawarkan harga yang kompetitif dan nilai terbaik untuk bisnis Anda. Hubungi untuk informasi lebih lanjut",
      },
      cardThree: {
        title: "Terpercaya",
        subtitle:
          "Anda akan mendapatkan produk terbaik dengan kualitas terbaik yang pernah kami miliki, dan nilai terbaik untuk harga berapa pun",
      },
    },
    productSection: {
      smallTitle: "Ayo periksa",
      bigTitle: "Produk Kami",
      productSmallTitle: "Produk utama kami adalah",
      productTitle: "Biji Kopi Liberika",
      description:
        "Kopi Liberika adalah jenis kopi yang berasal dari Liberia, Dan Afrika Barat. Kopi ini tumbuh sumbur di daerah kepulauan meranti dengan geografis tanah gambut. Karena itulah biji kopi liberika memiliki rasa dan aroma khas tersendiri dan berbeda dari jenis kopi lainnya",
      variantTitle: "Kami mengekspor salah satu jenis",
      variant: "Biji Hijau Kopi Liberika",
      variantDescription:
        "Hasil roasting ini menghasilkan biji berwarna hitam mengkilap dengan permukaan biji yang berminyak dan rasa sangat pahit ketika dikecap. Semakin gelap warna roasting, maka semakin sedikit tingkat keasaman yang kamu temukan pada minuman kopimu.",
      getProductTitle: "Dapatkan biji kopi liberika kami sekarang",
    },
    getTouchSection: {
      mainTitle: "Hubungi Kami",
      title: "Mempunyai pertanyaan?",
      subtitle:
        "Hubungi kami dan tanyakan sesuatu. Atau hubungi kami di link sosial media dibawah",
      name: "Nama",
      mail: "Alamat Email",
      message: "Pesan",
      submit: "Kirim",
    },
    contactPage: {
      mainTitleSub: "Hubungi kami jika Anda memiliki pertanyaan atau apa pun tentang bisnis",
      contactInformation: "Informasi Kontak",
      regency: "Provinsi Riau, Indonesia",
      phone: "+628 0000 0000",
      mail: "alamat@email.com",
    },
    aboutPage: {
      title: "Ketahui",
      description: "MEIRA Coffee adalah pengekspor komoditas unggulan di salah satu kabupaten di Provinsi Riau, yaitu Kepulauan Meranti. dibangun oleh orang-orang yang memiliki visi yang sama, dan mengelola untuk melayani klien dengan profesional.",
      thankGreeting: "Kami sangat berterima kasih untuk semua mitra dan klien kami, Mengikuti momen dan akan selalu melayani yang terbaik untuk semua.",
      visi: {
        title: "Visi",
        desc: "Menjadi pengekspor dengan layanan pelanggan kualitas dunia dan memajukan ekonomi bersama",
      },
      misi: {
        title: "Misi",
        misi1: "Membangun hubungan baik bersama client dan partner",
        misi2: "Selalu menyediakan permintaan dengan kualitas baik dan terjamin",
        misi3: "Membangun dan memiliki tim yang profesional"
      }
    }
  },
};

const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n;
