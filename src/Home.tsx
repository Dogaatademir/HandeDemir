// src/Home.tsx
import { useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import "./Home.css";

declare global {
  interface Window {
    feather?: { replace: () => void };
    AOS?: { init: (opts?: any) => void };
  }
}

function useHeadAssets() {
  const added = useRef(false);

  useEffect(() => {
    if (added.current) return;
    added.current = true;

    // Google Fonts & AOS CSS
    const addLink = (id: string, href: string, rel = "stylesheet") => {
      if (document.getElementById(id)) return;
      const l = document.createElement("link");
      l.id = id;
      l.rel = rel;
      l.href = href;
      document.head.appendChild(l);
    };
    addLink(
      "gf-playfair-poppins",
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@300;400;500&display=swap"
    );
    addLink("aos-css", "https://unpkg.com/aos@2.3.1/dist/aos.css");

    // Feather & AOS
    const addScript = (id: string, src: string) =>
      new Promise<void>((resolve) => {
        if (document.getElementById(id)) return resolve();
        const s = document.createElement("script");
        s.id = id;
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });

    addScript("feather-icons", "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js")
      .then(() => addScript("aos-js", "https://unpkg.com/aos@2.3.1/dist/aos.js"))
      .then(() => {
        window.AOS?.init({ duration: 800, easing: "ease-in-out", once: true });
        window.feather?.replace();
      });

    // Anchor'lara yumuşak kaydırma
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link) return;
      const selector = link.getAttribute("href");
      if (!selector) return;
      const el = document.querySelector(selector);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

export default function Home() {
  useHeadAssets();

  return (
    <>
      <Header />

      {/* HERO */}
      <section id="home" className="hero" data-aos="fade-in">
        <div className="container hero__inner">
          <div className="hero__content" data-aos="fade-right">
            <h1 className="hero__title">Duygusal Uyum Yolunuzu Keşfedin</h1>
            <p className="hero__text">
              Numeroloji bilgeliği ve Bach çiçeklerinin şifa gücüyle, gerçek potansiyelinizi ortaya çıkarın ve hayat yolculuğunuzda dengeyi bulun.
            </p>
            <div className="hero__actions">
              <a href="/booking" className="btn btn--primary btn--lg">Seans Rezervasyonu Yapın</a>
              <a href="/services" className="btn btn--outline btn--lg">Daha Fazla Bilgi Edinin</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section" data-aos="fade-up">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">Hakkımda</h2>
            <div className="section-divider" />
            <p className="section__lead">
              15 yılı aşkın tecrübemle, kişiselleştirilmiş şifa yolculukları yaratmak için numeroloji ve Bach çiçek terapisini birleştiriyorum.
            </p>
          </div>

          <div className="about">
            <div className="about__media" data-aos="fade-right">
              <div className="badge">
                <img className="about__img" src="http://static.photos/people/640x360/23" alt="Terapist" />
                <div className="badge__label">Sertifikalı Terapist</div>
              </div>
            </div>

            <div className="about__content" data-aos="fade-left">
              <h3 className="about__title">Şifa Felsefem</h3>
              <p className="about__text">
                Gerçek şifanın, her bireyin kendine özgü enerjik haritasını anlamaktan geçtiğine inanıyorum. Numeroloji haritayı sunarken, Bach çiçekleri duygusal dönüşüm için gereken nazik desteği sağlar.
              </p>

              <div className="features">
                <div className="feature">
                  <div className="feature__icon"><i data-feather="heart" /></div>
                  <div>
                    <h4 className="feature__title">Şefkatli Yaklaşım</h4>
                    <p className="feature__text">Her seans, benzersiz ihtiyaçlarınıza göre uyarlanır ve empatiyle sunulur.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature__icon"><i data-feather="book-open" /></div>
                  <div>
                    <h4 className="feature__title">Derin Bilgi</h4>
                    <p className="feature__text">Hem numeroloji hem de Bach çiçekleri terapisinde yılların deneyimi ve birikimi.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature__icon"><i data-feather="shield" /></div>
                  <div>
                    <h4 className="feature__title">Güvenli Alan</h4>
                    <p className="feature__text">Duygularınızı özgürce keşfedebileceğiniz, yargıdan uzak bir ortam.</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature__icon"><i data-feather="trending-up" /></div>
                  <div>
                    <h4 className="feature__title">Bütünsel Gelişim</h4>
                    <p className="feature__text">Duygusal, ruhsal ve kişisel gelişime odaklanma.</p>
                  </div>
                </div>
              </div>

              <a href="/services" className="link">
                Hizmetleri keşfedin <i data-feather="arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section--alt" data-aos="fade-up">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">Hizmetler</h2>
            <div className="section-divider" />
            <p className="section__lead">
              Hayatınıza netlik, şifa ve dönüşüm getirmek için tasarlanmış kişiselleştirilmiş seanslar.
            </p>
          </div>

          <div className="cards">
            <article className="card" data-aos="fade-up" data-aos-delay="100">
              <div className="card__icon"><i data-feather="hash" /></div>
              <h3 className="card__title">Numeroloji Analizi</h3>
              <p className="card__text">
                Doğum tarihiniz ve adınızdaki gizli kalıpları ve anlamları ortaya çıkararak yaşam amacınızı, zorluklarınızı ve fırsatlarınızı keşfedin.
              </p>
              <ul className="list">
                <li><i data-feather="check" /> Kapsamlı doğum tarihi analizi</li>
                <li><i data-feather="check" /> İsim titreşimi yorumu</li>
                <li><i data-feather="check" /> Kişisel yıl tahmini</li>
                <li><i data-feather="check" /> Uyum içgörüleri</li>
              </ul>
              <div className="card__cta">
                <div>
                  <p className="price">₺1200</p>
                  <p className="muted">90 dakikalık seans</p>
                </div>
                <a href="/booking" className="btn btn--primary"> Randevu Oluştur</a>
              </div>
            </article>

            <article className="card" data-aos="fade-up" data-aos-delay="200">
              <div className="card__icon"><i data-feather="feather" /></div>
              <h3 className="card__title">Bach Çiçeği Terapisi</h3>
              <p className="card__text">
                Duygusal durumları dengelemeye, kişisel gelişimi ve şifayı desteklemeye yardımcı olan nazik ancak güçlü çiçek özleri.
              </p>
              <ul className="list">
                <li><i data-feather="check" /> Kişiselleştirilmiş ilaç seçimi</li>
                <li><i data-feather="check" /> Duygusal kalıp analizi</li>
                <li><i data-feather="check" /> Takip desteği</li>
                <li><i data-feather="check" /> Özel karışım hazırlığı</li>
              </ul>
              <div className="card__cta">
                <div>
                  <p className="price">₺950</p>
                  <p className="muted">60 dakikalık seans</p>
                </div>
                <a href="/booking" className="btn btn--primary"> Randevu Oluştur</a>
              </div>
            </article>

            <article className="card" data-aos="fade-up" data-aos-delay="300">
              <div className="card__icon"><i data-feather="layers" /></div>
              <h3 className="card__title">Birleşik Seanslar</h3>
              <p className="card__text">
                Numeroloji içgörülerini Bach çiçeklerinin nazik desteğiyle birleştiren bütünsel bir seansla her iki dünyanın da en iyisini elde edin.
              </p>
              <ul className="list">
                <li><i data-feather="check" /> Her iki hizmetin de tüm faydaları</li>
                <li><i data-feather="check" /> Entegre yaşam yolu rehberliği</li>
                <li><i data-feather="check" /> Özelleştirilmiş Bach çiçeği karışımı</li>
                <li><i data-feather="check" /> Kapsamlı destek</li>
              </ul>
              <div className="card__cta">
                <div>
                  <p className="price">₺1950</p>
                  <p className="muted">120 dakikalık seans</p>
                </div>
                <a href="/booking" className="btn btn--primary"> Randevu Oluştur</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section" data-aos="fade-up">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">Müşteri Deneyimleri</h2>
            <div className="section-divider" />
            <p className="section__lead">Şifa ve keşif yolculuğuna çıkanların hikayelerini dinleyin.</p>
          </div>

          <div className="grid-3">
            <div className="tcard" data-aos="fade-up" data-aos-delay="100">
              <div className="tcard__head">
                <img className="avatar" src="http://static.photos/people/200x200/1" alt="Müşteri" />
                <div>
                  <h4>Sarah J.</h4>
                  <div className="stars">
                    <i data-feather="star" /><i data-feather="star" /><i data-feather="star" /><i data-feather="star" /><i data-feather="star" />
                  </div>
                </div>
              </div>
              <p className="tcard__text">
                "Numeroloji okuması, yaşam amacım hakkında bana büyük bir netlik sağladı..."
              </p>
            </div>

            <div className="tcard" data-aos="fade-up" data-aos-delay="200">
              <div className="tcard__head">
                <img className="avatar" src="http://static.photos/people/200x200/2" alt="Müşteri" />
                <div>
                  <h4>Michael T.</h4>
                  <div className="stars">
                    <i data-feather="star" /><i data-feather="star" /><i data-feather="star" /><i data-feather="star" /><i data-feather="star" />
                  </div>
                </div>
              </div>
              <p className="tcard__text">
                "Bach çiçekleri, kaygım için dönüştürücü oldu..."
              </p>
            </div>

            <div className="tcard" data-aos="fade-up" data-aos-delay="300">
              <div className="tcard__head">
                <img className="avatar" src="http://static.photos/people/200x200/3" alt="Müşteri" />
                <div>
                  <h4>Priya K.</h4>
                  <div className="stars">
                    <i data-feather="star" /><i data-feather="star" /><i data-feather="star" /><i data-feather="star" /><i data-feather="star" />
                  </div>
                </div>
              </div>
              <p className="tcard__text">
                "Numerolojiyi Bach çiçekleri terapisiyle birleştirmek, çok güçlü bir şifa deneyimi yarattı..."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section section--alt" data-aos="fade-up">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">Blogdan</h2>
            <div className="section-divider" />
            <p className="section__lead">Numeroloji, duygusal şifa ve çiçek özlerinin bilgeliği üzerine makaleleri keşfedin.</p>
          </div>

          <div className="grid-3">
            <article className="bcard" data-aos="fade-up" data-aos-delay="100">
              <div className="bcard__media">
                <img src="http://static.photos/nature/640x360/10" alt="Blog yazısı" />
              </div>
              <div className="bcard__body">
                <div className="meta"><span>15 Mayıs 2023</span><span>•</span><span>Numeroloji</span></div>
                <h3 className="bcard__title">Yaşam Yolu Numaranızı Anlamak</h3>
                <p className="bcard__text">...</p>
                <a className="link" href="#">Devamını Oku <i data-feather="arrow-right" /></a>
              </div>
            </article>

            <article className="bcard" data-aos="fade-up" data-aos-delay="200">
              <div className="bcard__media">
                <img src="http://static.photos/nature/640x360/11" alt="Blog yazısı" />
              </div>
              <div className="bcard__body">
                <div className="meta"><span>28 Nisan 2023</span><span>•</span><span>Bach Çiçekleri</span></div>
                <h3 className="bcard__title">Stres Atmak İçin 5 Bach Çiçeği</h3>
                <p className="bcard__text">...</p>
                <a className="link" href="#">Devamını Oku <i data-feather="arrow-right" /></a>
              </div>
            </article>

            <article className="bcard" data-aos="fade-up" data-aos-delay="300">
              <div className="bcard__media">
                <img src="http://static.photos/nature/640x360/12" alt="Blog yazısı" />
              </div>
              <div className="bcard__body">
                <div className="meta"><span>10 Mart 2023</span><span>•</span><span>Şifa</span></div>
                <h3 className="bcard__title">Sayılar ve Duygular Arasındaki Bağlantı</h3>
                <p className="bcard__text">...</p>
                <a className="link" href="#">Devamını Oku <i data-feather="arrow-right" /></a>
              </div>
            </article>
          </div>

          <div className="center mt-48">
            <a className="btn btn--outline btn--lg" href="#">Tüm Makaleleri Görüntüle</a>
          </div>
        </div>
      </section>

     {/* CONTACT */}
<section id="contact" className="section">
  <div className="container">
    <div className="section__head">
      <h2 className="section__title">İletişim</h2>
      <div className="section-divider" />
      <p className="section__lead">
        Soruların, işbirliği taleplerin veya seans hakkında bilgi almak istersen yazabilirsin.
      </p>
    </div>

    <div className="contact">
      {/* Sol kutu: iletişim kartı */}
      <aside className="info" data-aos="fade-right">
        <h3 className="contact__title">Bağlantıda Kalalım</h3>

        <div className="info__row">
          <div className="info__icon"><i data-feather="mail" /></div>
          <div>
            <strong>E-posta</strong>
            <div><a className="link" href="mailto:hello@example.com">hello@example.com</a></div>
          </div>
        </div>

        <div className="info__row">
          <div className="info__icon"><i data-feather="phone" /></div>
          <div>
            <strong>Telefon</strong>
            <div><a className="link" href="tel:+905555555555">+90 555 555 55 55</a></div>
          </div>
        </div>

        <div className="info__row">
          <div className="info__icon"><i data-feather="map-pin" /></div>
          <div>
            <strong>Konum</strong>
            <div>Ankara / Türkiye</div>
          </div>
        </div>

        <h4 className="follow__title">Sosyal Medya</h4>
        <div className="socials">
          <a className="social" href="#" aria-label="Instagram"><i data-feather="instagram" /></a>
          <a className="social" href="#" aria-label="Twitter"><i data-feather="twitter" /></a>
          <a className="social" href="#" aria-label="Youtube"><i data-feather="youtube" /></a>
        </div>
      </aside>

      {/* Sağ kutu: form */}
      <form
        className="contact__form"
        data-aos="fade-left"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement & {
            name: HTMLInputElement;
            email: HTMLInputElement;
            topic: HTMLSelectElement;
            message: HTMLTextAreaElement;
            consent: HTMLInputElement;
          };
          if (!form.consent.checked) {
            alert("Lütfen KVKK & Gizlilik onayını işaretleyin.");
            return;
          }
          const subject = `[İletişim] ${form.topic.value || "Genel"} - ${form.name.value}`;
          const body =
            `Ad Soyad: ${form.name.value}\n` +
            `E-posta: ${form.email.value}\n` +
            `Konu: ${form.topic.value}\n\n` +
            `${form.message.value}`;
          const mailto = `mailto:hello@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailto;
        }}
      >
        <div className="grid grid--2">
          <label className="field">
            <span>Ad Soyad</span>
            <input type="text" name="name" placeholder="Adınız Soyadınız" required />
          </label>

          <label className="field">
            <span>E-posta</span>
            <input type="email" name="email" placeholder="ornek@mail.com" required />
          </label>

          <label className="field field--full">
            <span>Konu</span>
            <select name="topic" defaultValue="">
              <option value="" disabled>Seçiniz</option>
              <option>Randevu / Rezervasyon</option>
              <option>Hizmet Detayı</option>
              <option>İşbirliği / Teklif</option>
              <option>Diğer</option>
            </select>
          </label>

          <label className="field field--full">
            <span>Mesaj</span>
            <textarea name="message" rows={6} placeholder="Kısaca talebinizi veya sorunuzu yazın..." required />
          </label>

          <label className="consent field--full">
            <input type="checkbox" name="consent" />
            <span>KVKK &amp; Gizlilik metnini okudum ve onaylıyorum.</span>
          </label>
        </div>

        <button type="submit" className="btn btn--primary btn--lg btn--block">Mesajı Gönder</button>
        <p className="form-hint">Genellikle 24 saat içinde dönüş yaparım.</p>
      </form>
    </div>
  </div>
</section>


      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <h3>Hande Demir</h3>
            <p>Numeroloji ve Bach çiçeği terapisiyle sizi duygusal uyuma yönlendirme.</p>
          </div>

          <div className="footer__cols">
            <div className="fcol">
              <h4>Navigasyon</h4>
              <a href="#home">Anasayfa</a>
              <a href="#about">Hakkımda</a>
              <a href="#services">Hizmetler</a>
              <a href="#testimonials">Referanslar</a>
              <a href="#blog">Blog</a>
              <a href="#contact">İletişim</a>
            </div>
            <div className="fcol">
              <h4>Hizmetler</h4>
              <a href="#services">Numeroloji Analizi</a>
              <a href="#services">Bach Çiçeği Terapisi</a>
              <a href="#services">Birleşik Seanslar</a>
              <a href="#services">Takip Desteği</a>
            </div>
            <div className="fcol">
              <h4>Yasal</h4>
              <a href="#">Gizlilik Politikası</a>
              <a href="#">Hizmet Şartları</a>
              <a href="#">Yasal Uyarı</a>
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
    </>
  );
}
