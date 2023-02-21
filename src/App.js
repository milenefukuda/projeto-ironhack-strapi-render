import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Form";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import ViewForm from "./pages/ViewForm";
import DetailsForm from "./pages/DetailsForm";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/viewForm" element={<ViewForm />} />
        <Route path="/detailsForm/:formID" element={<DetailsForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
