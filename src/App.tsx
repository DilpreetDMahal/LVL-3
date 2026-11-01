// This is your storefront. Each ticket adds a piece to it.
// Start with tickets/day-1/1.1-product-type-and-card.md
import { products } from "./data/products";
import { ProductGrid } from "./components/ProductGrid";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
const navLinks = [
  { label: "Shop", href: "#" },
  { label: "Favourites", href: "#" },
  { label: "Cart", href: "#" },
];
function App() {
  return (
    <main className="min-h-screen bg-gray-100 ">
      <Navbar title="SummitGear Market" nav={navLinks} />
      <ProductGrid products={products} />
      <Footer companyName="SummitGear Market" />
    </main>
  );
}

export default App;
