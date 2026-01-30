import AppRoutes from "./routes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}
