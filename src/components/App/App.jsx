import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import Catalog from "../../pages/Catalog/Catalog.jsx";
import Details from "../../pages/Details/Details.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import Features from "../Features/Features.jsx";
import Layout from "../Layout/Layout.jsx";

const App = () => {

  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}  />
          <Route path="/catalog/:id" element={<Details />} >
            <Route path="reviews" element={<Reviews />} />
            <Route path="features" element={<Features />} />
          </Route>
          <Route path="*" element={<NotFound />}  />
        </Routes>
    </Layout>
    
  )
}

export default App
