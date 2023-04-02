import React from 'react';

import { Header } from "./components/Header/Header";
import { AnimatedRoutes } from './components/AnimatedRoutes';
import './app.scss'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div>
      <div className="hero">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
