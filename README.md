## ❗ Bilgi
Bu proje, HTML & CSS & JS dilleri kullanılarak yazılmış ve Node.js sayesinde hostlanan çanta firmasına ait stok işleme ve ürün takip sistemi için Web Sitesi denemesidir. Siteye bağlı herhangi bir Database bulunmamaktadır. Eklenen ürünler JSON dosyasında saklanmaktadır.

## 🖥️ İçindekiler
- Ana Sayfa
- Giriş Sayfası (Sadece yetkililer için)
- Ürünleri Görüntüleme Sayfası (Her ürün Kategorisi için 1 tane.)
- Ürün & Stok Kontrol Sayfası (Ürün Sil, Ekle, Güncelle ve Stok Yönetimi)

## 🔌 Çalışma Mantığı
Bu siteyi çalıştırmak için Node.js kullanılmaktadır. Visual Studio Code uygulamasında projemizi açtıktan sonra bir terminal oluşturmalı ve terminale `node server.js` yazılmalıdır. Bu sayede sitemiz Local olarak hostlanı. Terminal de size döndürülen site URL'si ile siteye ulaşabilirsiniz!

<img src="https://github.com/ahmetalpcinar/ahmetalpcinar/blob/main/PNG/Images/imageBSIW4.png">

## 📥 Giriş Sayfası
Giriş sayfası, site yetkililerinin giriş için kullanıcı adı ve şifre yazdığı sayfadır. Sadece yetkili olarak giriş yapmak mevcuttur.

```js
const user = { username: "admin", password: "12345678" };
```

<img src="https://github.com/ahmetalpcinar/ahmetalpcinar/blob/main/PNG/Images/imageBSIW1.png">

## 🏠 Ana Sayfa
Ana sayfa, diğer sayfalar arasında gezinmeyi sağlayan ana menü sayfasıdır. Bu sayfadan ürünleri takip etmek için ürün sayfaları arasında gezinilebilir.

<img src="https://github.com/ahmetalpcinar/ahmetalpcinar/blob/main/PNG/Images/imageBSIW2.png">

## 👜 Ürün & Stok Kontrol Sayfası
Ürün ve stok kontrol sayfası, ürünleri eklediğimiz, sildiğimiz, güncellediğimiz ve stokları yönettiğimiz sayfalardır. Ana sayfa da bulunan "Giriş" düğmesinin yönlendirdiği Login Sayfasından sonra yetkili olarak giriş yapılır ve bu sayfalara ulaşılır.


<img src="https://github.com/ahmetalpcinar/ahmetalpcinar/blob/main/PNG/Images/imageBSIW3.png">
