// src/components/Header.tsx
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Header.css";

declare global {
  interface Window {
    feather?: { replace: () => void };
  }
}

export default function Header() {
  useEffect(() => {
    window.feather?.replace();
  }, []);

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <div className="brand">Hande Demir</div>
        <div className="nav__links">
          <a className="nav-link" href="/#home">Anasayfa</a>
          <a className="nav-link" href="/#about">Hakkımda</a>
          <a className="nav-link" href="/services">Hizmetler</a>
          <a className="nav-link" href="/shop">Shop</a>
          <a className="nav-link" href="/#contact">İletişim</a>
          <Link className="btn btn--primary" to="/booking">Randevu Oluştur</Link>
        </div>
        <button className="nav__menu-btn" aria-controls="mobile-menu" aria-expanded="false">
          <i data-feather="menu" />
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className="mobile-menu">
        <a href="/#home" className="mobile-menu__link">Anasayfa</a>
        <a href="/#about" className="mobile-menu__link">Hakkımda</a>
        <a href="/#services" className="mobile-menu__link">Hizmetler</a>
        <a href="/shop" className="mobile-menu__link">Shop</a>
        <a href="/#testimonials" className="mobile-menu__link">Referanslar</a>
        <a href="/#blog" className="mobile-menu__link">Blog</a>
        <a href="/#contact" className="mobile-menu__link">İletişim</a>
        <Link to="/booking" className="mobile-menu__cta">Randevu Oluştur</Link>
      </div>
    </nav>
  );
}
