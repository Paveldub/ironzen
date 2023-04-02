import React from 'react';
import { motion } from "framer-motion"

const divStyle = {
  position: 'absolute',
  top: 0,
  left: 0
};

export const About = () => {
    return (
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={divStyle}
      >
          <div>About page</div>
          <div>OLEG PITYX</div>
      </motion.div>
    );
}