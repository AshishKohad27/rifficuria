import React from 'react'
import footerlogo from "./assets/footer-logo.png"
import instagram from './assets/social-icon/Instagram Circle.png'
import facebook from './assets/social-icon/Cib Facebook.png'
import twitter from './assets/social-icon/Twitter X.png'
import youtube from './assets/social-icon/Youtube Circle.png'
import Image from "next/image";
const Footer = () => {
  return (
    <footer className='bg-background2 relative'>
        <div className='flex justify-center pb-[24px] relative bottom-[20px]'>
          <Image src={footerlogo} alt="logo" title="logo" className=""/> 
          </div>
          <div className='w-full text-center '>
            <p className='pb-[24px] text-[12px] text-textColor'>© 2024 • Riffcuria • All Rights Reserved</p>
            <div className='social-icons flex justify-center gap-2 mb-[24px]'>
                <div>
                <Image src={instagram} alt="instagram" title="instagram" className="hover:scale-125 transition-all ease-in-out duration-150"/>
                </div>
                <div>
                <Image src={facebook} alt="instagram" title="facebook" className="hover:scale-125 transition-all ease-in-out duration-150"/>
                </div>
                <div>
                <Image src={twitter} alt="instagram" title="twitter" className="hover:scale-125 transition-all ease-in-out duration-150"/>
                </div>
                <div>
                <Image src={youtube} alt="instagram" title="youtube" className="hover:scale-125 transition-all ease-in-out duration-150"/>
                </div>
            </div>
            <div className='flex justify-center pb-[24px]'>
                <ul className='flex gap-3 flex-wrap justify-center p-4 md:p-0 font-semibold text-[12px]'>
                    <li>ABOUT</li>
                    <li>|</li>
                    <li>SUBMIT MUSIC</li>
                    <li>|</li>
                    <li>CAREERS</li>
                    <li>|</li>
                    <li>CONTACT</li>
                    <li>|</li>
                    <li>TERMS & CONDITIONS</li>
                    <li>|</li>
                    <li>PRIVACY POLICY</li>
                </ul>
            </div>
          </div>

    </footer>
  )
}

export default Footer
