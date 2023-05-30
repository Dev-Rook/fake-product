
// Styles Import: 
import "../styles/global.scss"

// Components Import:
import Header from "../components/Header"
import ProductGrid from '../sections/ProductGrid'

const Index = () => {
  return (
    <div className="page">
      <Header />
      <ProductGrid />
    </div>
  )
}

export default Index