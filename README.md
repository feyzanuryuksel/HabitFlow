# 🎯 Alışkanlık Edinme Süreçlerini Kolaylaştırmaya Yönelik Dijital Platform


## 📖 Proje Tanıtımı ve Problem Sahası (Özet)

Modern yaşamın beraberinde getirdiği yoğun iş temposu, günlük koşturmacalar, asenkron iş süreçleri ve dijital ortamların (sosyal medya, anlık bildirimler vb.) yarattığı sürekli dikkat dağınıklığı, bireylerin kişisel hedeflerine odaklanmalarını ciddi ölçüde zorlaştırmaktadır. Bireyler; düzenli su tüketimi, kitap okuma, spor yapma veya yazılım geliştirme gibi hayat kalitelerini doğrudan artıracak rutinleri edinmek isteseler de, bunları sistematik bir düzene oturtmakta ve sürdürülebilir kılmakta başarısız olmaktadırlar. Davranış psikolojisi ve nörobilim alanında yapılan çalışmalar, bir eylemin kalıcı bir alışkanlığa dönüşebilmesi için mekanik bir hatırlatıcıdan çok daha fazlasına; yani **sistematik bir takip mekanizmasına, somut/görsel geri bildirimlere ve sürdürülebilir bir içsel motivasyon döngüsüne** ihtiyaç duyulduğunu açıkça göstermektedir.

Bu doğrultuda geliştirilen "Alışkanlık Edinme Süreçlerini Kolaylaştırmaya Yönelik Dijital Platform", insan davranışlarını ve günlük pratikleri veri odaklı algoritmalar ve oyunlaştırma (gamification) dinamikleriyle optimize etmeyi amaçlayan bütüncül bir yazılım ekosistemidir. Platform, klasik alışkanlık takip uygulamalarının sunduğu katı "yaptım/yapmadım" mantığının ötesine geçerek; kullanıcılara kendi gelişim süreçlerini, tamamen kendi belirledikleri birimler (litre, sayfa, dakika vb.) ve kriterlerle yönetebileceği esnek, özelleştirilebilir ve asenkron bir veri paneli sunar. "Zinciri kırmama" (Don't break the chain) psikolojisini temel alan dinamik seri hesaplama motoru ve renk skalasına dayalı etkileşimli takvim sistemi sayesinde, kullanıcının bilişsel olarak ilerlemesini somutlaştırmakta ve platformda kalma/tutunma oranını sistematik olarak artırmaktadır.

---

## 🛠️ Detaylı Teknolojik Mimari ve Sistem Bileşenleri

Proje, istemci ve sunucu katmanları arasında homojen veri transferi sağlayan, esnek şema yetenekleri ve olay güdümlü (event-driven) yapısıyla yüksek performans sunan asenkron **MERN (MongoDB, Express.js, React.js, Node.js)** mimari yığını üzerine inşa edilmiştir.

### 🌐 Önyüz (Frontend) Mimarisi
- **React.js (v18):** Bileşen tabanlı (component-based) Single Page Application (SPA) mimarisi kullanılarak sayfa yenilenmesine gerek duyulmayan, kullanıcı deneyimi (UX) optimize edilmiş asenkron bir arayüz geliştirilmiştir. Durum yönetimi (State Management) ve modüler bileşen hiyerarşisi sayesinde kod tabanı sürdürülebilir hale getirilmiştir.
- **Recharts:** Tamamlanan eylemlere ait ham veri loglarını arka planda işleyerek tarayıcı tarafında minimum donanım yüküyle çizen SVG tabanlı gelişmiş bir grafik kütüphanesidir. Kullanıcının performans eğrilerini, bar grafiklerini ve devamlılık süreçlerini dinamik olarak görselleştirir.
- **React-Calendar:** Kullanıcıların gün bazlı ilerlemelerini takip ettikleri, hücreleri dinamik CSS sınıfları (`tileClassName`) üzerinden renk kodlu (Hex renk paletleri) hale getirilmiş etkileşimli ana takvim modülüdür.
- **Axios:** Tarayıcı (istemci) ile Express.js sunucusu arasında asenkron HTTP talepleri (RESTful API) üzerinden haberleşmeyi sağlayan, JSON dönüşümlerini otomatik gerçekleştiren verimli bir HTTP istemci kütüphanesidir.
- **React Icons (Feather & FontAwesome):** Minimalist ve modern arayüz çizgisine uyum sağlayan, kullanıcı algısını güçlendiren geniş vektörel ikon setleridir.

### 🗄️ Arkayüz (Backend) & Veritabanı Mimarisi
- **Node.js:** Bloklanmayan g/ç (non-blocking I/O) modeli ve olay güdümlü (event-driven) asenkron yapısı sayesinde yüksek istek trafiğini ve eşzamanlı veri operasyonlarını darboğaz yaratmadan yöneten çalışma zamanı ortamıdır.
- **Express.js:** Sunucu üzerindeki HTTP istek ağını, yönlendirmelerini (routing) ve ara yazılımları (middleware) minimum eforla organize eden, API katmanının temel iskeletini oluşturan hafif ve hızlı bir framework'tür.
- **MongoDB Atlas:** Kullanıcıların esnek alt hedeflerini, renk tercihlerini ve günlük ilerleme birimlerini katı şema kısıtlamaları olmadan bulut üzerinde saklayabilen dağıtık NoSQL veritabanı mimarisidir. Küresel ağ erişim konfigürasyonları (0.0.0.0/0) ve bağlantı havuzu (connection pooling) mekanizmaları devreye alınarak yüksek erişilebilirlik (high availability) garanti altına alınmıştır.
- **Mongoose ODM:** Nesne-Doküman eşleme (Object Document Mapper) kütüphanesi kullanılarak, NoSQL dünyasının getirdiği esneklik uygulama düzeyinde katı veri şeması doğrulama (validation) ve nesne yönelimli programlama (OOP) prensipleriyle kontrol altına alınmıştır.

---

## 🚀 Öne Çıkan Mühendislik ve Algoritma Çözümleri

### 1. Dinamik Seri (Streak) ve Rekor Hesaplama Motoru
Uygulamanın oyunlaştırma motorunu oluşturan günlük kesintisiz seri hesaplamaları, sunucu tarafındaki (backend) işlemci yükünü hafifletmek amacıyla istemci tarafında optimize edilmiş matematiksel döngülerle gerçekleştirilmektedir. Kullanıcının serisinin devam edip etmediği veya zinciri kırıp kırmadığı, ardışık tarihler arasındaki milisaniye farkı hesaplanarak bulunur. İki farklı tarih parametresi ($T_1$ ve $T_2$) arasındaki gün bazlı net fark ($D$), milisaniye dönüşüm katsayıları kullanılarak aşağıdaki matematiksel modelle hesaplanmaktadır:

$$D = \text{Math.round}\left( \frac{|T_2 - T_1|}{1000 \times 60 \times 60 \times 24} \right)$$

* Kullanıcının tamamlanmış log kayıtlarına ait tüm tarihler `Set` veri yapısına aktarılarak tekilleştirilir ve kronolojik olarak (eskiden yeniye) sıralanır.
* Bugünün tarihi ($T_{\text{bugün}}$) ile kullanıcının girdiği en son log tarihi ($T_{\text{son}}$) arasındaki fark $D$ değeri kontrol edilir.
* Eğer elde edilen gün farkı değerleri birden büyükse ($D > 1$), kullanıcının araya gün koyduğu ve seriyi bozduğu anlaşılarak `streak` değişkeni sıfırlanır. Eğer ardışık günler arasındaki fark tam olarak bire eşitse ($D = 1$), seri kaldığı yerden artarak devam eder ve en yüksek kırılan rekor kalıcı olarak veritabanındaki `maxStreak` alanına yazılır.

### 2. Küresel Zaman Dilimi (Timezone) Standardizasyonu
JavaScript'in yerel tarih nesnesi (`new Date()`), sistemin çalıştığı bilgisayarın yerel saat dilimini baz aldığından, sunucu ve veritabanı kayıtlarında kaymalara neden olabilmektedir. Bu durum, özellikle gece yarısına yakın yapılan girişlerde serilerin bozulmasına ve "gün kayması" hatalarına yol açar. Bu yapısal problemin önüne geçmek amacıyla, girilen tüm tarih parametreleri istemci tarafında asenkron HTTP isteğine dönüştürülmeden hemen önce `date.toLocaleDateString('en-CA')` fonksiyonundan geçirilerek kesin olarak ISO standartlarında, yani `YYYY-AA-GG` (Örn: 2026-06-02) formatında string veri tipine sabitlenmiştir. Böylece sunucu hangi coğrafi konumda olursa olsun veri bütünlüğü korunur.

### 3. Kullanıcı Tanımlı Dinamik Veri Modellemesi
İlişkisel veritabanlarının (RDBMS) katı şema kısıtlamalarının aksine, MongoDB NoSQL yapısı kullanılarak her bir alışkanlık dokümanının altında dinamik iki farklı alt dizi (`Goals` ve `Logs` sub-arrays) kurgulanmıştır. Bu tasarım, veritabanından tek bir istekte (query) ilgili alışkanlığa ait tüm geçmiş loglara ve hedeflere ulaşılmasını sağlayarak harika bir performans optimizasyonu sunar:
* **Alışkanlık Ana Gövdesi:** `_id` (ObjectId), `title` (String), `streak` (Number), `createdAt` (Date)
* **Goals Dizisi (Hedefler):** `[{ id, targetValue, color }]` yapısı.
* **Logs Dizisi (Kayıtlar):** Kullanıcının geçmişte eylemi tamamladığı günleri tutan `[{ date, value }]` yapısı. Alışkanlık takip süreçlerindeki en kritik operasyon olan "Log Verisi Girişi" işleminde veritabanı üzerinde mükerrer kayıt oluşmasını engellemek amacıyla koşullu bir güncelleme mantığı uygulanmıştır. İstemciden gelen log verisi işlenirken, ilgili tarihte daha önce yapılmış bir kayıt olup olmadığı sorgulanır; eğer o güne ait kayıt varsa Mongoose üzerindeki `$set` operatörü ile mevcut kayıt güncellenir, kayıt yoksa `$push` operatörü ile log dizisine yeni bir eleman eklenir.

---

## 🗺️ RESTful API Uç Noktaları (Endpoints)

Sunucu katmanı, `/api/habits` kök dizini üzerinden istemciye asenkron (async/await) yapıya sahip Express yönlendiricileri (`routers`) ile hizmet vermektedir:

| Metot | URL / Endpoint | İstek Gövdesi (Request Body) | Açıklama |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/habits/:userId` | *Yok* | Giriş yapmış kullanıcının tüm alışkanlık listesini, log geçmişini ve streak verilerini veritabanından asenkron olarak çeker. |
| **POST** | `/api/habits` | `{ userId, title, icon, goals, streak, lastCompleted, createdAt }` | Kullanıcı tarafından manuel girilen veya önerilenler panelinden seçilen yeni bir alışkanlığı sisteme kaydeder. |
| **DELETE** | `/api/habits/:habitId` | *Yok* | Belirtilen alışkanlığı ve ona bağlı alt dizilerdeki tüm geçmiş log serilerini veritabanından kalıcı olarak siler. |

---

## 📁 Proje Klasör Yapısı ve Modüler Dağılım

```text
📁 mainhabit-guncel
│
├── 📁 client (Frontend - React)
│   ├── 📁 public             # Statik varlıklar, logolar, manifest ve web ikonları
│   ├── 📁 src
│   │   ├── 📁 components    
│   │   │   ├── 📄 Dashboard.jsx   # Alışkanlık listeleme, hızlı ekleme formu ve yukarıda ortalanmış popup bildirimler
│   │   │   └── 📄 Statistics.jsx  # Recharts grafik entegrasyonu, zaman analizi ve başarı sıralaması ekranı
│   │   ├── 📄 App.jsx             # Ana uygulama bileşeni, oturum kontrolü ve global state yönetimi
│   │   └── 📄 index.css           # Merkezi CSS değişkenleri, koyu/açık tema ve global animasyon tanımları
│   ├── 📄 index.html
│   ├── 📄 package.json            # İstemci tarafı paket bağımlılıkları ve scriptler (Vite)
│   └── 📄 vite.config.js          # Vite derleme, optimizasyon ve proxy konfigürasyonu
│
├── 📁 server (Backend - Node/Express)
│   ├── 📁 models             
│   │   ├── 📄 User.js             # Kullanıcı kimlik doğrulama, profil ve şifreleme şeması
│   │   └── 📄 Habit.js            # Alt dizileri barındıran hiyerarşik esnek Alışkanlık veri şeması
│   ├── 📁 routes             
│   │   └── 📄 habits.js           # Express asenkron API rotaları ve Mongoose CRUD operasyonları
│   ├── 📄 index.js                # Uygulama giriş noktası, CORS ayarları ve DB bağlantı havuzu yönetimi
│   └── 📄 package.json            # Arkayüz bağımlılıkları (Mongoose, Express, Kripto paketleri, Nodemon)
│
└── 📄 README.md                   # Proje geniş ölçekli ana dokümantasyonu
```
⚙️ Kurulum ve Yerel Ortamda Çalıştırma
Projeyi yerel bilgisayarınızda veya geliştirme ortamınızda ayağa kaldırmak için aşağıdaki adımları sırasıyla uygulayınız:

Ön Gereksinimler
Bilgisayarınızda Node.js (v16.0.0 veya üzeri) ve npm paket yöneticisi kurulu olmalıdır.

Sunucu tarafında MongoDB bulut bağlantısının kurulabilmesi için geçerli bir MongoDB Atlas kümesine (Cluster) erişiminiz olmalıdır.

1. Depoyu İndirin ve Klasöre Giriş Yapın
```text
git clone <repository-url>
cd HabitFlow
```
2. Arkayüz (Server) Sunucusunu Başlatın
Sunucu klasörüne giderek gerekli bağımlılıkları yükleyin ve geliştirici modunda (nodemon ile) sunucuyu çalıştırın:
```text
cd server
npm install
npx nodemon index.js
```
Sunucu varsayılan olarak http://localhost:5000 portunda dinlemeye başlayacaktır. Terminalde 🚀 Sunucu 5000 portunda çalışıyor... ve başarılı veritabanı bağlantı mesajını görmelisiniz.

3. Önyüz (Client) Uygulamasını Başlatın
VS Code üzerinde yeni bir terminal penceresi açın ve istemci (React) dizinine geçiş yaparak projeyi çalıştırın:
```text
cd client
npm install
npm run dev
```
Vite yerel geliştirme sunucusu http://localhost:5173 (veya terminalde belirtilen dinamik port) adresinde kullanıcı arayüzünü tarayıcınızda otomatik veya manuel olarak açacaktır.

