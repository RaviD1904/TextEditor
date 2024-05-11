import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./components/common/Loader";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import BlogDetailPage from "./pages/Blog/DetailedPage";
import Kiosk from "./pages/Category/SelfServiceKiosk";
import Signage from "./pages/Category/DigitalSignage";
import KioskProducts from "./pages/Category/SelfServiceKiosk/products";
import PosMachines from "./pages/HomePage/PosMachines";
import ThermalPrinter from "./pages/Category/ThermalPrinters";
import BarcodePrinter from "./pages/Category/BarcodePrinters";
import BarcodeScanner from "./pages/Category/BarcodeScanners";
import BarcodeScanners from "./pages/Category/BarcodeScanners/products";
import CashCountingMachine from "./pages/Category/CashCountingMachines";
import CashDrawer from "./pages/Category/CashDrawers";
import TermsAndConditions from "./pages/Support/TermsAndConditions";
import PrivacyPolicy from "./pages/Support/PrivacyPolicy";
import PageNotFound from "./pages/Support/PageNotFound";
import ThermalPrinters from "./pages/Category/ThermalPrinters/products";
export const RouteNavigation = {
  home: "/",
  about: "/about",
  blog: "/blog",
  blogDetails: "/blog/:id",
  contact: "/contact-us",
  kiosk: "/category/kiosk",
  kioskDevice: "/category/kiosk/:id",
  signage: "/category/signage",
  signageDevice: "/category/signage/:id",
  posMachine: "/category/pos-machine",
  thermalPrinter: "/category/thermal-printer",
  thermalPrinterDevice: "/category/thermal-printer/:id",
  barcodePrinterDevice: "/category/barcode-printer",
  barcodeScanner: "/category/barcode-scanner",
  barcodeScannerDevice: "/category/barcode-scanner/:id",
  cashCountingDevice: "/category/cash-counting-device",
  cashDrawers: "/category/cash-drawers",
  termsAndConditions: "/terms-and-conditions",
  privacy: "/privacy-policy",
  pagenotfound: "*",
};

const GenericRoutes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("no-scroll");
    }, 600);

    document.body.classList.add("no-scroll");

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [location]);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path={RouteNavigation.home} element={<Home />} />
        <Route path={RouteNavigation.about} element={<AboutUs/>} />
        <Route path={RouteNavigation.contact} element={<ContactUs/>} />
        <Route path={RouteNavigation.blog} element={<Blog/>} />
        <Route
          path={RouteNavigation.blogDetails}
          element={<BlogDetailPage />}
        />
        <Route path={RouteNavigation.kiosk} element={<Kiosk />} />
        <Route path={RouteNavigation.signage} element={<Signage />} />
        <Route
          path={RouteNavigation.kioskDevice}
          element={<KioskProducts />}
        />
        <Route
          path={RouteNavigation.posMachine}
          element={<PosMachines />}
        />
        <Route
          path={RouteNavigation.thermalPrinter}
          element={<ThermalPrinter />}
        />
        <Route
          path={RouteNavigation.thermalPrinterDevice}
          element={<ThermalPrinters />}
        />
        <Route
          path={RouteNavigation.barcodePrinterDevice}
          element={<BarcodePrinter />}
        />
        <Route
          path={RouteNavigation.barcodeScanner}
          element={<BarcodeScanner />}
        />
        <Route
          path={RouteNavigation.barcodeScannerDevice}
          element={<BarcodeScanners />}
        />
        <Route
          path={RouteNavigation.cashCountingDevice}
          element={<CashCountingMachine />}
        />
        <Route
          path={RouteNavigation.cashDrawers}
          element={<CashDrawer />}
        />
        <Route
          path={RouteNavigation.termsAndConditions}
          element={<TermsAndConditions />}
        />
        <Route
          path={RouteNavigation.privacy}
          element={<PrivacyPolicy />}
        />
        <Route
          path={RouteNavigation.pagenotfound}
          element={<PageNotFound />}
        />
      </Routes>
    </>
  );
};
export default GenericRoutes;
