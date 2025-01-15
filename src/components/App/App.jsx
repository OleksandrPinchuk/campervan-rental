import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import Catalog from "../../pages/Catalog/Catalog.jsx";
import Details from "../../pages/Details/Details.jsx";
import NotFound from "../../pages/NotFound/NotFound.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}  />
        <Route path="/catalog/:id" element={<Details />}  />
        <Route path="*" element={<NotFound />}  />
      </Routes>
    </div>
  )
}

export default App
