// src/Hizmetler.tsx
import { useEffect } from "react";
import Header from "./components/Header";
import "./Hizmetler.css";

declare global {
  interface Window {
    AOS?: { init: (opts?: any) => void };
    feather?: { replace: () => void };
  }
}

function useHeadAssets() {
  useEffect(() => {
    // AOS CSS
    if (!document.getElementById("aos-css")) {
      const link = document.createElement("link");
      link.id = "aos-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/aos@2.3.1/dist/aos.css";
      document.head.appendChild(link);
    }
    // Google Fonts (Playfair + Poppins)
    if (!document.getElementById("gf-playfair-poppins")) {
      const l = document.createElement("link");
      l.id = "gf-playfair-poppins";
      l.rel = "stylesheet";
      l.href =
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@300;400;500;600&display=swap";
      document.head.appendChild(l);
    }
    // AOS JS
    if (!window.AOS && !document.getElementById("aos-js")) {
      const s = document.createElement("script");
      s.id = "aos-js";
      s.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
      s.defer = true;
      s.onload = () => window.AOS?.init({ duration: 800, easing: "ease-in-out", once: true });
      document.body.appendChild(s);
    } else {
      window.AOS?.init({ duration: 800, easing: "ease-in-out", once: true });
    }
    // Feather
    if (!window.feather && !document.getElementById("feather-js")) {
      const f = document.createElement("script");
      f.id = "feather-js";
      f.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
      f.defer = true;
      f.onload = () => window.feather?.replace();
      document.body.appendChild(f);
    } else {
      window.feather?.replace();
    }
  }, []);
}

export default function Hizmetler() {
  useHeadAssets();

  return (
    <>
      <Header />

      <main className="services">
        {/* HERO */}
        <section className="hero" data-aos="fade-in">
          <div className="container hero__inner">
            <div className="hero__content" data-aos="fade-right">
              <h1 className="hero__title">Hizmetler</h1>
              <p className="hero__text">
                Numeroloji ve Bach çiçekleriyle, kişisel yolculuğunuza netlik ve şifa getiren bütünsel seanslar.
                Aşağıda, her hizmetin kapsamını, kimlere uygun olduğunu ve süreç adımlarını detaylıca bulabilirsiniz.
              </p>
              <div className="hero__actions">
                <a href="#numerology" className="btn btn--primary btn--lg">Numeroloji’yi İncele</a>
                <a href="#bach" className="btn btn--ghost btn--lg">Bach Çiçekleri</a>
              </div>
            </div>
            <div className="hero__media" data-aos="fade-left">
              <div className="hero__image">
                <img
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
                  alt="Services cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ÖNE ÇIKANLAR */}
        <section className="section section--alt" data-aos="fade-up">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Neden Benimle Çalışmalısınız?</h2>
              <div className="section-divider" />
              <p className="section__lead">Şefkatli yaklaşım, derin analiz ve somut eylem planları.</p>
            </div>

            <div className="highlights">
              <div className="hitem" data-aos="fade-up" data-aos-delay="50">
                <div className="hitem__icon"><i data-feather="target" /></div>
                <h3>Hedefe Yönelik</h3>
                <p>Seans sonunda uygulanabilir, net adımlar ve kişisel yol haritası.</p>
              </div>
              <div className="hitem" data-aos="fade-up" data-aos-delay="120">
                <div className="hitem__icon"><i data-feather="heart" /></div>
                <h3>Şefkatli Alan</h3>
                <p>Yargısız, güvenli ve destekleyici bir paylaşım ortamı.</p>
              </div>
              <div className="hitem" data-aos="fade-up" data-aos-delay="190">
                <div className="hitem__icon"><i data-feather="layers" /></div>
                <h3>Bütünsel Bakış</h3>
                <p>Numeroloji ve çiçek özlerini entegre eden kapsamlı yaklaşım.</p>
              </div>
              <div className="hitem" data-aos="fade-up" data-aos-delay="260">
                <div className="hitem__icon"><i data-feather="clock" /></div>
                <h3>Esnek Zamanlar</h3>
                <p>Online ve yüz yüze seçenekleri, hafta içi/sonu esnek randevular.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NUMEROLOJİ DETAY */}
        <section id="numerology" className="section" data-aos="fade-up">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Numeroloji Analizi</h2>
              <div className="section-divider" />
              <p className="section__lead">
                Doğum tarihi ve isim üzerinden ruhsal mimarini, yaşam derslerini ve fırsat pencerelerini okuruz.
              </p>
            </div>

            <div className="split">
              <div className="split__media" data-aos="fade-right">
                <img
                  className="split__img"
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                  alt="Numeroloji"
                />
              </div>
              <div className="split__content" data-aos="fade-left">
                <div className="pill">90 dk • Önerilen</div>
                <h3 className="split__title">Seans İçeriği</h3>
                <ul className="bullets">
                  <li><i data-feather="check" /> Yaşam Yolu ve Ruh Amacı analizi</li>
                  <li><i data-feather="check" /> İsim titreşimi, gölge ve armağanlar</li>
                  <li><i data-feather="check" /> Kişisel yıl döngüleri ve zamanlama</li>
                  <li><i data-feather="check" /> İlişki/uyum göstergelerine kısa bakış</li>
                  <li><i data-feather="check" /> 2 haftalık eylem önerileri</li>
                </ul>

                <div className="tags">
                  <span className="tag">Yeni başlangıç eşiği</span>
                  <span className="tag">Kariyer kararı</span>
                  <span className="tag">Kendini keşif</span>
                </div>

                <div className="cta-row">
                  <div className="price">
                    <strong>₺1200</strong>
                    <span> / 90 dakika</span>
                  </div>
                  <a className="btn btn--primary" href="/booking">Randevu Al</a>
                  <a className="btn btn--ghost" href="https://wa.me/905054782200" target="_blank" rel="noopener">WhatsApp</a>
                </div>
              </div>
            </div>

            <details className="acc">
              <summary className="acc__head">
                <span>Kimler için uygundur?</span>
                <i data-feather="chevron-down" />
              </summary>
              <div className="acc__body">
                Yön duygusunu tazelemek isteyenler, kariyer/geçiş döneminde olanlar, ilişkilerde tekrar eden döngüleri
                anlamak isteyenler ve ruhsal yolculuğunu haritalamak isteyenler için idealdir.
              </div>
            </details>
          </div>
        </section>

        {/* BACH DETAY */}
        <section id="bach" className="section section--tint" data-aos="fade-up">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Bach Çiçeği Terapisi</h2>
              <div className="section-divider" />
              <p className="section__lead">
                Duygusal dengesizlikleri nazikçe regüle etmek ve içsel uyumu güçlendirmek için kişisel karışımlar.
              </p>
            </div>

            <div className="split split--rev">
              <div className="split__media" data-aos="fade-left">
                <img
                  className="split__img"
                  src="https://images.unsplash.com/photo-1498842812179-c81beecf902c?q=80&w=1200&auto=format&fit=crop"
                  alt="Bach Remedy"
                />
              </div>
              <div className="split__content" data-aos="fade-right">
                <div className="pill">60 dk • Nazik & Derin</div>
                <h3 className="split__title">Seans İçeriği</h3>
                <ul className="bullets">
                  <li><i data-feather="check" /> Duygusal durum haritalama</li>
                  <li><i data-feather="check" /> 5–7 özden kişisel karışım önerisi</li>
                  <li><i data-feather="check" /> Kullanım protokolü (3–4 hafta)</li>
                  <li><i data-feather="check" /> Takip mesajı ve mini düzenlemeler</li>
                </ul>

                <div className="tags">
                  <span className="tag">Kaygı • Huzursuzluk</span>
                  <span className="tag">Odak • Sabır</span>
                  <span className="tag">Kendine Şefkat</span>
                </div>

                <div className="cta-row">
                  <div className="price">
                    <strong>₺950</strong>
                    <span> / 60 dakika</span>
                  </div>
                  <a className="btn btn--primary" href="/booking">Randevu Al</a>
                  <a className="btn btn--ghost" href="https://wa.me/905054782200" target="_blank" rel="noopener">WhatsApp</a>
                </div>
              </div>
            </div>

            <details className="acc">
              <summary className="acc__head">
                <span>Karışım nasıl belirlenir?</span>
                <i data-feather="chevron-down" />
              </summary>
              <div className="acc__body">
                Görüşmede ifade ettiğiniz duygu durumları, tetikleyiciler ve hedefleriniz doğrultusunda özler seçilir;
                kullanım sürecinde geri bildirimlerinize göre küçük ayarlamalar yapılır.
              </div>
            </details>
          </div>
        </section>



        {/* SÜREÇ ADIMLARI */}
        <section className="section section--alt" data-aos="fade-up">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Süreç Nasıl İşler?</h2>
              <div className="section-divider" />
            </div>

            <ol className="steps">
              <li className="step">
                <div className="step__icon"><i data-feather="calendar" /></div>
                <div className="step__body">
                  <h4>Randevu</h4>
                  <p>Size uygun gün/saat için hızlıca talep oluşturun.</p>
                </div>
              </li>
              <li className="step">
                <div className="step__icon"><i data-feather="message-circle" /></div>
                <div className="step__body">
                  <h4>Ön Görüşme</h4>
                  <p>Kısa ihtiyaç analizi ve hedeflerin netleştirilmesi.</p>
                </div>
              </li>
              <li className="step">
                <div className="step__icon"><i data-feather="compass" /></div>
                <div className="step__body">
                  <h4>Seans</h4>
                  <p>Derin analiz, duygusal düzenleme ve pratik öneriler.</p>
                </div>
              </li>
              <li className="step">
                <div className="step__icon"><i data-feather="repeat" /></div>
                <div className="step__body">
                  <h4>Takip</h4>
                  <p>Mini kontrol ve gerekiyorsa ufak ayarlamalar.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* SSS */}
        <section className="section" data-aos="fade-up">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Sık Sorulan Sorular</h2>
              <div className="section-divider" />
            </div>

            <div className="accordion">
              <details className="acc">
                <summary className="acc__head">Seanslar online mı yüz yüze mi?</summary>
                <div className="acc__body">Her iki seçenek de mevcut. Ön görüşmede tercihinize göre planlıyoruz.</div>
              </details>
              <details className="acc">
                <summary className="acc__head">Bach karışımı fiziksel olarak veriliyor mu?</summary>
                <div className="acc__body">Evet, kişisel karışımınız hazırlanır; kargo/teslimat seçenekleri konuşulur.</div>
              </details>
              <details className="acc">
                <summary className="acc__head">İptal/erteleme politikası?</summary>
                <div className="acc__body">En az 24 saat önce bildirmenizi rica ederim.</div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section--cta" data-aos="fade-up">
          <div className="container cta">
            <h3 className="cta__title">Hazırsanız, ilk adımı birlikte atalım.</h3>
            <p className="cta__text">Randevu formunu doldurun; uygun saatler için en kısa sürede dönüş yapayım.</p>
            <a href="/booking" className="btn btn--primary btn--lg">Randevu Oluştur</a>
          </div>
        </section>

        {/* FOOTER (sayfa içi) */}
        <footer className="footer">
          <div className="container footer__inner">
            <div className="footer__brand">
              <h3>Hande Demir</h3>
              <p>Numeroloji & Bach çiçeği terapisi ile duygusal uyum.</p>
            </div>

            <div className="footer__cols">
              <div className="fcol">
                <h4>Gezinti</h4>
                <a href="/">Ana Sayfa</a>
                <a href="/#about">Hakkımda</a>
                <a href="/#contact">İletişim</a>
              </div>
              <div className="fcol">
                <h4>Hizmetler</h4>
                <a href="#numerology">Numeroloji</a>
                <a href="#bach">Bach Çiçekleri</a>
                <a href="#combo">Kombine</a>
              </div>
              <div className="fcol">
                <h4>İletişim</h4>
                <a href="mailto:hello@example.com">hello@example.com</a>
                <a href="tel:+905555555555">+90 555 555 55 55</a>
              </div>
            </div>
          </div>

          <div className="container footer__bar">
            <p>© 2025 Hande Demir. Tüm hakları saklıdır.</p>
            <div className="socials">
              <a className="social" href="#"><i data-feather="facebook" /></a>
              <a className="social" href="#"><i data-feather="instagram" /></a>
              <a className="social" href="#"><i data-feather="twitter" /></a>
              <a className="social" href="#"><i data-feather="youtube" /></a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
