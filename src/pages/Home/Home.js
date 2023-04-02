import React from 'react';
import { motion } from "framer-motion"
import mobileScreen from '../../utils/images/reflectly_screens.png'
import './home.scss'

const divStyle = {
  position: 'absolute',
  top: 0,
  left: 0
};

export const Home = () => {

    return (
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={divStyle}
      >
          <div className="home-page">
            <div className="home-page__background-decoration" />

            <div className="home-page__container">
              <div className="container">
                  <div className="home-page__left">
                  <h1>The World's First Intelligent Journal</h1>
                  <p>Reflectly is a journal utilizing artificial intelligence to help you structure and reflect upon your daily thoughts and problems.</p>
                  <span>Your personal mental health companion.</span>
              </div>

              <div className="home-page__right">
                <img src={mobileScreen} alt={'mobileScreen'} className="home-page__right-img" />
              </div>
              </div>
             
            </div>

            </div>
      </motion.div>
    );
}