import React from 'react'

import instagram from '../../utils/images/instagram-icon.svg'
import twitter from '../../utils/images/twitter-icon.jpg'
import tiktok from '../../utils/images/tiktok-icon.jpg'

import './footer.scss'

const SOCIAL_MEDIA = [
    {
        "url": "https://www.instagram.com/ironzenapp/",
        "image": instagram,
        "alt": "instagram",
        "width": "20px",
        "height": "20px",
    },
    {
        "url": "https://twitter.com/ironzenapp",
        "image": twitter,
        "alt": "twitter",
        "width": "20px",
        "height": "20px",
    },
    {
        "url": "https://www.tiktok.com/search?q=ironzenapp&t=1680455252182",
        "image": tiktok,
        "alt": "tiktok",
        "width": "20px",
        "height": "20px",
    },
]

export const Footer = () => {

  return (
    <footer className="footer">
        <div className="footer__left">
            <span>Made with ☕️ and 🤘🏼 in Stuttgart</span>
        </div>
        <div className="footer__right">
            <ul>
                {SOCIAL_MEDIA.map((item) => (
                    <li>
                        <a href={item.url} target="_blank" rel="noreferrer">
                            <img src={item.image} alt={item.alt} style={{width: item.width, height: item.height}}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </footer>
  )
}

export default Footer