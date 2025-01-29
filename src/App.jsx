import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import FormLogin from "./components/Fragments/FormLogin";
import Beranda from "./pages/beranda";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title="Login">
              <FormLogin />
            </Layout>
          }
        />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
