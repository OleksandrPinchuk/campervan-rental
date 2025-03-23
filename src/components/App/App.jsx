import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../Layout/Layout.jsx";
const Home = lazy(() => import("../../pages/Home/Home.jsx"));
const Catalog = lazy(() => import("../../pages/Catalog/Catalog.jsx"));
const Details = lazy(() => import("../../pages/Details/Details.jsx"));
const NotFound = lazy(() => import("../../pages/NotFound/NotFound.jsx"));
const Reviews = lazy(() => import("../Reviews/Reviews.jsx"));
const Features = lazy(() => import("../Features/Features.jsx"));

const App = () => {

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}  />
          <Route path="/catalog/:id" element={<Details />} >
            <Route path="reviews" element={<Reviews />} />
            <Route path="features" element={<Features />} />
          </Route>
          <Route path="*" element={<NotFound />}  />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App;
