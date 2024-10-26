# Kart Uygulaması Projesi

## Proje Açıklaması
Bu proje, 3 farklı kart tasarımı ve kartların içerisine verilerin eklenip çıkarılabildiği bir uygulamadır. Veriler, fake HTTP isteği ile yaratılmakta ve rastgele geri dönütler sağlamaktadır.

## Adımlar
1. **Proje Kurulumu**:
   - Angular CLI kullanarak yeni bir proje oluşturuldu.
   - PrimeNG kütüphanesi projeye eklendi.

2. **Kart Bileşenleri**:
   - `src/app/components` dizininde `a-kartı`, `b-kartı`, `c-kartı` bileşenleri oluşturuldu.

3. **Model ve Interface Tanımlamaları**:
   - `src/app/model` dizininde `kart-model`, `a-kart-model`, `b-kart-model`, `c-kart-model` dosyaları oluşturuldu ve gerekli model ve interface'ler tanımlandı.

4. **Fake HTTP Servisi**:
   - `src/app/data-access` dizininde bir fake HTTP servisi oluşturuldu. Bu servis, rastgele veriler dönecek şekilde yapılandırıldı.

5. **UI ve Listeleme**:
   - `src/app/ui` dizininde `kart` ve `list` bileşenleri oluşturuldu. Bu bileşenler, kartların ve verilerin gösterimini sağladı.

6. **İşlevsellik**:
   - Uygulama ilk açıldığında, fake HTTP servisi kullanarak rastgele 5 veri ile 3 kart dolduruldu.
   - Kartlara veri ekleme ve çıkarma işlemleri için butonlar eklendi ve bu işlemler kart özelinde yapıldı.

7. **Responsive Tasarım**:
   - PrimeNG bileşenleri ve CSS kullanılarak tasarımlar responsive hale getirildi.

## Sonuç
Bu adımları takip ederek proje tamamlandı ve istenen işlevsellik sağlandı.
