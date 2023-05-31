// Styles Import:
import "../styles/global.scss";

// Components Import:
import Header from "../components/Header";
import ProductSlider from "../components/ProductSlider";
import ProductGrid from "../sections/ProductGrid";

const Index = () => {
  // Url Category:
  // const category = `electronics`
  return (
    <div className="page">
      <Header />
      <ProductSlider />
      <ProductGrid category={"electronics"} title={"Electronics"} />
      <ProductGrid category={"men's clothing"} title={"Mens Wear"} />
      <ProductGrid category={"women's clothing"} title={"Women's Wear"} />
    </div>
  );
};

export default Index;
