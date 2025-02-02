// src/app/page.tsx
import Banner from "../components/section/Banner";
import Categories from "@/components/section/Categories";
import FeaturedProducts from "@/components/section/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Banner />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: 16,
        }}
      >
        <Categories />
        <FeaturedProducts />
      </div>
    </div>
  );
}
