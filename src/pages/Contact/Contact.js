import React from 'react';
import { motion } from "framer-motion"

const divStyle = {
  position: 'absolute',
  top: 0,
  left: 0
};

export const Contact = () => {

    return (
        <motion.main
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={divStyle}
        >
          <div>Contact page</div>
          <div>OLEG PITYX</div>
        </motion.main>
      );
}