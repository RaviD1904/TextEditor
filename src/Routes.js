import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./components/common/Loader";
import Home from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
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
        <Route path={RouteNavigation.blog} element={<Page.Blog />} />
        <Route
          path={RouteNavigation.blogDetails}
          element={<Page.BlogDetailPage />}
        />
        <Route path={RouteNavigation.kiosk} element={<Page.Kiosk />} />
        <Route path={RouteNavigation.signage} element={<Page.Signage />} />
        <Route
          path={RouteNavigation.kioskDevice}
          element={<Page.KioskProducts />}
        />
        <Route
          path={RouteNavigation.posMachine}
          element={<Page.PosMachine />}
        />
        <Route
          path={RouteNavigation.thermalPrinter}
          element={<Page.ThermalPrinter />}
        />
        <Route
          path={RouteNavigation.thermalPrinterDevice}
          element={<Page.ThermalPrinterDevice />}
        />
        <Route
          path={RouteNavigation.barcodePrinterDevice}
          element={<Page.BarcodePrinter />}
        />
        <Route
          path={RouteNavigation.barcodeScanner}
          element={<Page.BarcodeScanner />}
        />
        <Route
          path={RouteNavigation.barcodeScannerDevice}
          element={<Page.BarcodeScannerDevice />}
        />
        <Route
          path={RouteNavigation.cashCountingDevice}
          element={<Page.CashCountingMachines />}
        />
        <Route
          path={RouteNavigation.cashDrawers}
          element={<Page.CashDrawers />}
        />
        <Route
          path={RouteNavigation.termsAndConditions}
          element={<Page.TermsAndConditions />}
        />
        <Route
          path={RouteNavigation.privacy}
          element={<Page.PrivacyPolicy />}
        />
        <Route
          path={RouteNavigation.pagenotfound}
          element={<Page.PageNotFound />}
        />
      </Routes>
    </>
  );
};
export default GenericRoutes;
