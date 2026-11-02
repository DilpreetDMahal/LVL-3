// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProductSection } from "./components/ProductSection";

const navLinks = [
  { label: "Shop", href: "#" },
  { label: "Favourites", href: "#" },
  { label: "Cart", href: "#" },
];
const dealSection = products.filter((product) => product.price < 20);
const topRatedSection = products.filter(
  (product) => product.stock > 0 && product.rating >= 4.5,
);
const furnitureSection = products.filter(
  (product) => product.category === "furniture",
);
function App() {
  return (
    <main className="min-h-screen bg-gray-100 ">
      <Navbar title="SummitGear Market" nav={navLinks} />
      <div className="p-5">
        <ProductSection title={"Deal Under $20"} products={dealSection} />
        <ProductSection title={"Top Rated"} products={topRatedSection} />
        <ProductSection title={"Furniture"} products={furnitureSection} />
      </div>
      <Footer companyName="SummitGear Market" />
    </main>
  );
}

export default App;
