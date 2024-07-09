import React from "react";
import kitapland from "../../Assets/kitapland.jpg";

const About = () => {
  return (
    <div className="about container mx-auto flex flex-col md:flex-row items-center my-32 min-h-screen">
      <div className="side-1 md:w-1/2">
        <img
          src={kitapland}
          className="w-full rounded-lg md:rounded-l-lg md:rounded-r-none"
          alt="Hero"
        />
      </div>
      <div className="side-2 md:w-1/2 md:px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left md:text-left">
          Kitapland Hakkında
        </h2>
        <p className="text-lg md:text-xl text-center md:text-left leading-relaxed">
          Kitapland, okuma tutkunları için özel olarak tasarlanmış bir
          platformdur. Amacımız, her türden okuyucunun ilgisini çekecek geniş
          bir kitap koleksiyonu sunmak ve edebiyatın derinliklerine yolculuk
          yapmalarını sağlamaktır. Her biri özenle seçilmiş kitaplarımız
          arasında klasiklerden çağdaş eserlere, romanlardan bilimsel
          çalışmalara kadar geniş bir yelpaze bulunmaktadır. Okuyucularımız,
          farklı zevklere hitap eden ve dünya çapında tanınmış yazarların
          eserlerini keşfetme fırsatı bulacaklardır. Kitapland'ı özel kılan bir
          diğer özellik ise kullanıcı dostu arayüzümüz ve kişiselleştirilmiş
          öneri sistemimizdir. Her okur, ilgi alanlarına göre önerilen kitapları
          görebilir ve kendi okuma listelerini oluşturabilir. Ayrıca,
          yazarlarımızla yapılan röportajlar ve etkinlikler aracılığıyla edebi
          dünyaya daha yakından tanıklık etme şansını yakalayabilirsiniz. Biz
          Kitapland ekibi olarak, herkesin edebiyatla dolu bir hayat yaşamasını
          teşvik ediyoruz.
        </p>
      </div>
    </div>
  );
};

export default About;
