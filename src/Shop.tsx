// src/Shop.tsx
import Header from "./components/Header";
import "./Shop.css";

export default function Shop() {
  return (
    <>
      <Header />
      <main className="shop">
        <div className="shop__wrap">
          <h1 className="shop__soon">Coming Soon</h1>
          <p className="shop__text">Mağazamız çok yakında sizlerle 🌿</p>
        </div>
      </main>
    </>
  );
}
