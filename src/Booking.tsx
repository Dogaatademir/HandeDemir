import { useEffect, useState } from "react";
import "./Booking.css";
import Header from "./components/Header";

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

    // AOS JS
    const aosReady = !!window.AOS;
    if (!aosReady && !document.getElementById("aos-js")) {
      const s = document.createElement("script");
      s.id = "aos-js";
      s.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
      s.defer = true;
      s.onload = () => window.AOS?.init({ duration: 800, easing: "ease-in-out", once: true });
      document.head.appendChild(s);
    } else if (aosReady) {
      window.AOS?.init({ duration: 800, easing: "ease-in-out", once: true });
    }

    // Feather
    const featherReady = !!window.feather;
    if (!featherReady && !document.getElementById("feather-js")) {
      const f = document.createElement("script");
      f.id = "feather-js";
      f.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
      f.defer = true;
      f.onload = () => window.feather?.replace();
      document.head.appendChild(f);
    } else if (featherReady) {
      window.feather?.replace();
    }
  }, []);
}

export default function Booking() {
  useHeadAssets();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget as HTMLFormElement & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      phone: HTMLInputElement;
      service: HTMLSelectElement;
      date: HTMLInputElement;
      time: HTMLInputElement;
      notes: HTMLTextAreaElement;
    };

    const whatsappText =
      `Merhaba, Serene Path! Randevu almak istiyorum.\n\n` +
      `Ad Soyad: ${form.name.value}\n` +
      `E-posta: ${form.email.value}\n` +
      `Telefon: ${form.phone.value}\n` +
      `Hizmet: ${form.service.value}\n` +
      `Tercih Edilen Tarih: ${form.date.value}\n` +
      `Tercih Edilen Saat: ${form.time.value}\n\n` +
      `Notlar: ${form.notes.value}`;

    const whatsappUrl = `https://wa.me/905054782200?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <>
      {/* Header global kalsın; Booking stilleri yalnız Booking alanında geçerli */}
      <Header />

      {/* Tüm içerik .booking altında: */}
      <main className="booking">
        {/* HERO */}
        <section className="hero hero--sub" data-aos="fade-in">
          <div className="container hero__inner">
            <div className="hero__content" data-aos="fade-right">
              <h1 className="hero__title">Seans Rezervasyonu Yap</h1>
              <p className="hero__text">
                Numeroloji ve Bach çiçekleriyle, size özel bir yol haritası. Uygun zamanı seçin, randevunuzu oluşturun.
              </p>
              <div className="hero__actions">
                <a href="#booking" className="btn btn--primary btn--lg">Randevu Oluştur</a>
                <a href="/services" className="btn btn--ghost btn--lg">Hizmetleri Gör</a>
              </div>
            </div>

            <div className="hero__media" data-aos="fade-left">
              <div className="hero__image">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                  alt="Booking"
                />
              </div>
            </div>
          </div>
        </section>

        

        {/* BOOKING FORM */}
        <section id="booking" className="section" data-aos="fade-up">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Randevu Formu</h2>
              <div className="section-divider" />
              <p className="section__lead">
                Temel bilgilerinizi paylaşın; uygun tarih/saatleri belirtin. 24 saat içinde geri dönüş yapılır.
              </p>
            </div>

            <form className="contact__form" onSubmit={handleBookingSubmit}>
              <div className="grid grid--2">
                <label className="field">
                  <span>Ad Soyad</span>
                  <input type="text" name="name" placeholder="Adınız Soyadınız" required />
                </label>
                <label className="field">
                  <span>E-posta</span>
                  <input type="email" name="email" placeholder="ornek@mail.com" required />
                </label>

                <label className="field">
                  <span>Telefon</span>
                  <input type="tel" name="phone" placeholder="+90 ..." />
                </label>
                <label className="field">
                  <span>Hizmet</span>
                  <select name="service" defaultValue="">
                    <option value="" disabled>Seçiniz</option>
                    <option>Numeroloji Analizi</option>
                    <option>Bach Çiçeği Terapisi</option>
                    <option>Kombine Seans</option>
                  </select>
                </label>

                <label className="field">
                  <span>Tercih Edilen Tarih</span>
                  <input type="date" name="date" />
                </label>
                <label className="field">
                  <span>Tercih Edilen Saat</span>
                  <input type="time" name="time" />
                </label>
              </div>

              <label className="field field--full">
                <span>Notlar / Hedefler</span>
                <textarea
                  name="notes"
                  rows={5}
                  placeholder="Kısaca beklentilerinizi ve mevcut durumunuzu yazabilirsiniz."
                />
              </label>

              <div className="form__actions">
                <button type="submit" className="btn btn--primary btn--lg" disabled={isSubmitting}>
                  {isSubmitting ? "Gönderiliyor..." : "Randevu İste"}
                </button>
              </div>

              <p className="form__fine">
                Gönderimle birlikte KVKK & Gizlilik metnini okuduğunuzu kabul etmiş olursunuz.
              </p>
            </form>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="section section--tint" data-aos="fade-up">
          <div className="container trust">
            <div className="trust__item"><i data-feather="award" /> 15+ yıl deneyim</div>
            <div className="trust__item"><i data-feather="shield" /> Gizlilik & Güvenlik</div>
            <div className="trust__item"><i data-feather="clock" /> Esnek saatler</div>
            <div className="trust__item"><i data-feather="heart" /> Kişiye özel yaklaşım</div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" data-aos="fade-up">
          <div className="container">
            <div className="section__head">
              <h2 className="section__title">Sık Sorulan Sorular</h2>
              <div className="section-divider" />
            </div>

            <div className="accordion">
              <details className="acc">
                <summary className="acc__head">Seanslar online mı yüz yüze mi?</summary>
                <div className="acc__body">Duruma göre her ikisi de mümkün; tercih ve lokasyona göre planlanır.</div>
              </details>
              <details className="acc">
                <summary className="acc__head">Seans süresi ne kadar?</summary>
                <div className="acc__body">Genellikle 60–90 dakika. Kombine seanslar 90 dakikaya kadar çıkabilir.</div>
              </details>
              <details className="acc">
                <summary className="acc__head">İptal/erteleme şartları?</summary>
                <div className="acc__body">En az 24 saat önceden haber verilmesi rica olunur.</div>
              </details>
              <details className="acc">
                <summary className="acc__head">Ödeme yöntemleri?</summary>
                <div className="acc__body">Havale/EFT ve online ödeme seçenekleri mevcut.</div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section--cta" data-aos="fade-up">
          <div className="container cta">
            <h3 className="cta__title">Hazırsanız ilk adımı atalım.</h3>
            <p className="cta__text">Formu doldurun; en uygun tarih için dönüş yapayım.</p>
            <a href="#booking" className="btn btn--primary btn--lg">Randevu Oluştur</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer__inner">
            <div className="footer__brand">
              <h3>Serene Path</h3>
              <p>Numeroloji ve Bach çiçekleriyle sizi duygusal huzura yönlendiriyorum.</p>
            </div>

            <div className="footer__cols">
              <div className="fcol">
                <h4>Gezinti</h4>
                <a href="/#home">Ana Sayfa</a>
                <a href="/#about">Hakkımda</a>
                <a href="/#services">Hizmetler</a>
                <a href="/#testimonials">Yorumlar</a>
                <a href="/#blog">Blog</a>
                <a href="/#contact">İletişim</a>
              </div>
              <div className="fcol">
                <h4>Hizmetler</h4>
                <a href="/#services">Numeroloji Analizi</a>
                <a href="/#services">Bach Çiçeği Terapisi</a>
                <a href="/#services">Kombine Seanslar</a>
                <a href="/#services">Takip Desteği</a>
              </div>
              <div className="fcol">
                <h4>İletişim</h4>
                <a href="mailto:hello@example.com">hello@example.com</a>
                <a href="tel:+905555555555">+90 555 555 55 55</a>
                <p>Ankara / Türkiye</p>
              </div>
            </div>
          </div>

          <div className="container footer__bar">
            <p>© 2025 Serene Path. Tüm hakları saklıdır.</p>
            <div className="socials">
              <a className="social" href="#"><i data-feather="facebook" /></a>
              <a className="social" href="#"><i data-feather="instagram" /></a>
              <a className="social" href="#"><i data-feather="twitter" /></a>
              <a className="social" href="#"><i data-feather="youtube" /></a>
            </div>
          </div>
        </footer>

        {showSuccess && (
          <div className="form__success visible">
            Randevu isteğiniz gönderiliyor... WhatsApp'a yönlendiriliyorsunuz.
          </div>
        )}
      </main>
    </>
  );
}
