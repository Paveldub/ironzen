import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from "react-router-dom";

import { Home } from '../pages/Home/Home'
import { Contact } from '../pages/Contact/Contact'

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}> 
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  )
};