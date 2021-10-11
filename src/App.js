import './app.scss';
import Catalog from "./components/catalog";
import Category from './components/category';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <div className="page-content">
        <Catalog />
        <Category />
      </div>
      <Footer />
    </div>
  );
}

export default App;
