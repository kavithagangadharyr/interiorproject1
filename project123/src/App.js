import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WineryDryBuilding from "./components/WineryDryBuilding";
import CreativeWorkplaceDesign from "./components/CreativeWorkplaceDesign";
import BedroomInteriorPotWork from "./components/BedroomInteriorPotWork";
import LightAmbienceSepiaDesign from "./components/LightAmbienceSepiaDesign";
import AboutUs from "./components/AboutUs";
import InteriorPainting from './components/InteriorPainting';
import FurnitureSelection from './components/FurnitureSelection';
import LightingDesign from './components/LightingDesign';
import SpacePlanning from './components/SpacePlanning';
import LogoRow from "./components/LogoRow";
import RecentBlogs from './components/RecentBlogs';
import ResidentialInteriorDesigner from './components/ResidentialInteriorDesigner';
import BestWallArtDecor from './components/BestWallArtDecor';
import Protected from './components/Protected'; 
import IncreaseInteriorValue from './components/IncreaseInteriorValue';
import Licenses from './components/Licenses';
import Changelog from './components/Change';




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/winery-dry-building" element={<WineryDryBuilding />} />
          <Route path="/creative-workplace-design" element={<CreativeWorkplaceDesign />} />
          <Route path="/bedroom-interior-pot-work" element={<BedroomInteriorPotWork />} />
          <Route path="/light-ambience-sepia-design" element={<LightAmbienceSepiaDesign />} />
          <Route path="/interior-painting" element={<InteriorPainting />} />
          <Route path="/furniture-selection" element={<FurnitureSelection />} />
          <Route path="/lighting-design" element={<LightingDesign />} />
          <Route path="/space-planning" element={<SpacePlanning />} />
          <Route path="/recent-blogs" element={<RecentBlogs />} />
          <Route path="/protected" element={<Protected/>} />
          <Route path="/licenses" element={<Licenses/>} />
          <Route path="/Changelog" element={<Changelog/>} />
<Route path="/residential-interior-designer-new-york" element={<ResidentialInteriorDesigner />} />
<Route path="/best-wall-art-decor" element={<BestWallArtDecor />} />
<Route path="/increase-interior-value" element={<IncreaseInteriorValue />} />


          
        </Routes>
        
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <LogoRow />
        <RecentBlogs/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
