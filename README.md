## ❗ Bilgi
Bu proje, HTML & CSS & JS dilleri kullanılarak yazılmış ve Node.js sayesinde hostlanan çanta firmasına ait stok işleme ve ürün takip sistemi için Web Sitesi denemesidir.

## 🖥️ İçindekiler
- Ana Sayfa
- Giriş Sayfası (Sadece yetkililer için)
- Ürünleri Görüntüleme Sayfası (Her ürün Kategorisi için 1 tane.)
- Ürün & Stok Kontrol Sayfası (Ürün Sil, Ekle, Güncelle ve Stok Yönetimi)

## 📥 Giriş Sayfası
Giriş sayfası, site yetkililerinin giriş için kullanıcı adı ve şifre yazdığı sayfadır. Sadece yetkili olarak giriş yapmak mevcuttur.

```
const user = { username: "admin", password: "12345678" };
```

## 🏠 Ana Sayfa
Ana sayfa, diğer sayfalar arasında gezinmeyi sağlayan ana menü sayfasıdır. Bu sayfadan ürünleri takip etmek için ürün sayfaları arasında gezinilebilir.

## 👜 Ürün & Stok Kontrol Sayfası
Ürün ve stok kontrol sayfası, ürünleri eklediğimiz, sildiğimiz, güncellediğimiz ve stokları yönettiğimiz sayfalardır. Ana sayfa da bulunan "Giriş" düğmesinin yönlendirdiği Login Sayfasından sonra yetkili olarak giriş yapılır ve bu sayfalara ulaşılır.
