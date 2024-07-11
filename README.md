# Restoran Sipariş Sistemi

Bu proje, bir restoranın dijitalleşmesini sağlayan bir sistemdir. QR kodlar aracılığıyla müşteriler, menüye erişip siparişlerini online olarak verebilirler. Garsonlar ve restoran görevlileri, bu siparişleri sistem üzerinden takip edip yönetebilirler. Ayrıca, admin sayfası ile menü ve görevli ayarları yapılabilir.

## Proje Yapısı

- **Backend**: Node.js ve Express.js kullanılarak geliştirilmiştir.
- **Veritabanı**: MongoDB
- **Frontend**: (Frontend teknolojilerini belirtebilirsin)
- **Diğer**: QR kod entegrasyonu

## Özellikler

- **Müşteri Arayüzü**:
  - QR kod ile menüye erişim
  - Online sipariş verebilme

- **Garson/Görevli Arayüzü**:
  - Siparişleri görüntüleyebilme
  - Masalara göre siparişleri yönetebilme

- **Admin Arayüzü**:
  - Menü ayarları
  - Görevli ayarları

## Kurulum

1. **Depoyu Klonla**:
    ```bash
    git clone https://github.com/kullanici_adi/restoran-siparis-sistemi.git
    cd restoran-siparis-sistemi
    ```

2. **Bağımlılıkları Yükle**:
    ```bash
    npm install
    ```

3. **Ortam Değişkenlerini Ayarla**:
    Projenin kök dizininde `.env` dosyası oluştur ve gerekli ortam değişkenlerini ekle. Örnek:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/restoran-siparis-sistemi
    ```

4. **Sunucuyu Başlat**:
    ```bash
    npm start
    ```

5. **QR Kod Entegrasyonu**:
    QR kod entegrasyonu için gerekli kütüphaneleri ve ayarları yap.

## Kullanım

1. **Müşteri**:
   - Restoran masasında bulunan QR kodu tarar.
   - Menüyü görüntüler ve siparişini verir.

2. **Garson/Görevli**:
   - Sistem üzerinden gelen siparişleri görüntüler.
   - Siparişleri yönetir ve masalara göre organize eder.

3. **Admin**:
   - Menü ve görevli ayarlarını yapar.
   - Sistem genel ayarlarını yönetir.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request gönderin. Her türlü katkı değerlidir.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.
