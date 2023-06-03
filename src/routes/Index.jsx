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
      <Header title={"Shop"} />
      <ProductSlider />
      <ProductGrid category={"electronics"} title={"Electronics"} />
      <ProductGrid category={"men's clothing"} title={"Mens Wear"} />
      <ProductGrid category={"women's clothing"} title={"Women's Wear"} />
      <ProductGrid category={"jewelery"} title={"Jewelery"} />
    </div>
  );
};

export default Index;
