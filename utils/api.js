const iller = ['Osmaniye', 'Adana', 'Gaziantep', 'Hatay', 'Ankara', 'İstanbul'];
const turkIsimleri = ['Salih Aktaş', 'Metin Özşahin', 'Ayşe Kaya', 'Fatma Şahin'];

const yorumHavuzu = [
  "Harika bir kare olmuş!",
  "Osmaniye'nin havası bir başka.",
  "Çok güzel görünüyor, eline sağlık.",
  "Burası neresi? Çok beğendim.",
  "Mükemmel çekim!",
  "Yönetim Bilişim Sistemleri"
];

export const fetchImages = async () => {
  try {
    const response = await fetch('https://picsum.photos/v2/list?limit=10');
    const data = await response.json();
    
    return data.map((item, index) => {
      let gorselUri = `https://picsum.photos/id/${item.id}/600/600`;
      let yazarIsmi = turkIsimleri[index % turkIsimleri.length];
      let konumBilgisi = iller[index % iller.length];

      if (index === 0) {
        yazarIsmi = 'Salih Aktaş';
        konumBilgisi = 'Osmaniye / Korkut Ata Üniversitesi';
        gorselUri = 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSw0qPfZ-fBcm6Te6SCjH2GIuOGUOeZ2Pkc1XS4aARlqjeHU4gQx2g85vI5sd-LLxOUWoxlnA4aaICfZUCPEGt5ik4zXysPXxy5SxvDlzzJRKIwlAPpqCqsqfvUo9HkciHOaaBBW=s1360-w1360-h1020-rw';
      } else if (index === 1) {
        yazarIsmi = 'Metin Özşahin';
        konumBilgisi = 'Osmaniye / Zorkun Yaylası';
        gorselUri = 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxEzyTrYldPRlrD5KLLiX7bcrOFkEcGZcL2d5dNXzOZ7E0xos9gsXf9Zj1Hx44h5eOSjKhtFt882HG5FdGSBipQSzBw0WYCkD7T9g6hLdqJk5CMh4UpTSlA-sG3Hy7OOhGqU0-yfw=s1360-w1360-h1020-rw';
      }

      return {
        id: item.id,
        yazar: yazarIsmi,
        konum: konumBilgisi,
        uri: gorselUri,
        // Gönderi paylaşım saati: "3 saat önce" formatında
        paylasimSaati: `${Math.floor(Math.random() * 22) + 2} saat önce`,
        varsayilanYorumlar: [
          { 
            id: '1', 
            kisi: 'Ahmet', 
            metin: yorumHavuzu[Math.floor(Math.random() * yorumHavuzu.length)],
            zaman: `${Math.floor(Math.random() * 59) + 1} dk. önce` // Rastgele dakika
          },
          { 
            id: '2', 
            kisi: 'Zeynep', 
            metin: yorumHavuzu[Math.floor(Math.random() * yorumHavuzu.length)],
            zaman: '1 saat önce' 
          }
        ]
      };
    });
  } catch (error) {
    return [];
  }
};