import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { AnimatePresence } from "framer-motion";

import LandingPage from "@/pages/LandingPage";
import AboutPage from "@/pages/AboutSession";
import ServicesPage from "@/pages/ServiceSession";
import PageTransition from "./components/animations/PageTransition";
import ProjectsPage from "@/pages/ProjetSession";
import Contact from "@/pages/ContactSession";

export default function AppRouter() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<PageTransition><LandingPage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
