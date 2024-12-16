import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WeKnow from './pages/WeKnow';
import Services from './pages/Services';
import Clients from './pages/Clients';
import QuoteTool from './pages/QuoteTool';
import Contact from './pages/Contact';
import Sectors from './pages/Sectors';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weknow" element={<WeKnow />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/quote_tool" element={<QuoteTool />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sectors" element={<Sectors />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
