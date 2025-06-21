import Navbar from "../components/Navbar";
import Home from "../pages/Home";

export default function LayoutHome() {
  return (
    <>
      <Navbar /> {/* Memanggil komponen Navbar */}
      <Home /> {/* Memanggil komponen Home */}
    </>
  );
}
