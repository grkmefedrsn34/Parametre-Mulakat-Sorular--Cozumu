# Harita Uygulaması Projesi

## Proje Adımları

1. **Mevcut Kodları İnceleme**
   - Verilen kodları inceleyip, Angular platformuna nasıl entegre edileceğini belirledik.

2. **Angular Projesi Başlatma**
   - Angular CLI kullanarak yeni bir proje oluşturduk:
     ```bash
     ng new harita-uygulamasi
     cd harita-uygulamasi
     ```

3. **ESRI JavaScript API Entegrasyonu**
   - `esri-loader` paketini projeye ekledik:
     ```bash
     npm install --save esri-loader
     ```

4. **Harita ve Tablo Oluşturma**
   - Harita bileşenini oluşturduk ve verileri gösterecek tabloyu ekledik.

5. **Popup Ekleme**
   - Harita üzerindeki tıklama operasyonları ile popup açılmasını sağladık.

6. **Servis Verilerini Okuma**
   - REST servis üzerinden veri sorgulayıp, bu verileri tabloya yansıttık.

7. **Ekstra Özellikler**
   - Tıklanan objenin popup’ını açma ve tablo üzerinde seçili olarak gösterme gibi ekstra özellikler ekledik.

8. **Responsive Tasarım**
   - Tüm tasarımları responsive olarak kodladık.

## Kullanılan Teknolojiler
- Angular
- ESRI JavaScript API
- PrimeNG
- CSS

## Sonuç
Bu adımları takip ederek, harita uygulamasını Angular platformuna başarıyla çevirdik ve gerekli tüm özellikleri ekledik.
