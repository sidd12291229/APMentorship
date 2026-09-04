import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <div className="skip">
        <a href="#main">Skip to content</a>
      </div>

      <Header />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
