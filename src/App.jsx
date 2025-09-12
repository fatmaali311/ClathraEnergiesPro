import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Suspense, lazy } from "react";
import Loader from "./components/common/Loader";
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const JoinUs = lazy(() => import("./pages/JoinUs"));
const NotFound = lazy(() => import("./pages/NotFound"));


export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<JoinUs />} />
           

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}