// src/App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="mt-16">
        <Suspense
          fallback={<div className="text-center py-20">Loading...</div>}
        >
          <Routes>
            {AppRoutes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
          {/* Footer */}
          <Footer />
        </Suspense>
        <ScrollIndicator />
      </div>
    </Router>
  );
};

export default App;
