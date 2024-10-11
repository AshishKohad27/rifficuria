// "use client";
// import Link from "next/link";
// // import Login from "./login/page";
// import { useState } from "react";
// import logo from "@/assets/Logo.png";
// import mobilelogo from "@/assets/Mobile-Logo.png";
// import usericon from "@/assets/icon/user-icon.png"
// import { HiMenu, HiX } from "react-icons/hi";
// import Image from "next/image";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [loginpopup , setloginpopup] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeLoginPopup = () => {
//     setloginpopup(false);
//   };
//   return (
//     <>
//     <header className="bg-background mx-w-[1300px] m-auto px-[33px] md:px-[148px] py-[40px] md:py-[60px]">
//       <div className="container mx-auto flex items-center justify-between pb-[60px]">
//         <div className="flex-shrink-0">
//           <Image
//             src={logo}
//             alt="logo"
//             title="logo"
//             className="hidden md:inline-block w-[200px] lg:w-auto"
//           />
//           <Image
//             src={mobilelogo}
//             alt="logo"
//             title="logo"
//             className="md:hidden inline-block"
//           />
//         </div>

//         {/* Menu for larger screens */}
//         <div className="flex gap-4 sm:gap-12 ">
//           <nav className="hidden lg:flex gap-12 items-center">
//             <Link
//               href="/"
//               className="text-textColor font-medium hover:scale-105 transition-all duration-50 ease-in-out"
//             >
//               HOME
//             </Link>
//             <Link
//               href="/about"
//               className="text-textColor font-medium hover:scale-105 transition-all duration-50 ease-in-out"
//             >
//               ABOUT
//             </Link>
//             <Link
//               href="/services"
//               className="text-textColor font-medium hover:scale-105 transition-all duration-50 ease-in-out"
//             >
//               THE SCENE
//             </Link>
//             <Link
//               href="/contact"
//               className="text-textColor font-medium hover:scale-105 transition-all duration-50 ease-in-out"
//             >
//               SEARCH
//             </Link>
//           </nav>

//           {/* Login button, visible on all screen sizes */}
//           {/* onClick={()=>setloginpopup(true)} */}
//           <div     
//             className="hover:scale-105 transition-all duration-50 ease-in-out" >
//            <Link href='./login'> <div className=" text-white rounded-[24px] text-[10px] sm:text-[16px] p-2 px-3 bg-btn1" 
//             >
//               LOGIN / SIGN UP
//             </div></Link>
//             <div className="hidden">
//             <Image src={usericon} alt="logo" title="logo" className="" />
//             </div>
//           </div>


//              {/* Menu icon for smaller screens */}
//         <div className="lg:hidden" onClick={toggleMenu}>
//           {isMenuOpen ? (
//             <HiX className="w-8 h-8" />
//           ) : (
//             <HiMenu className="w-8 h-8" />
//           )}
//         </div>
//         </div>

       
//       </div>

//       {/* Dropdown menu for mobile view */}
//       {isMenuOpen && (
//         <nav className="lg:hidden flex flex-col items-center space-y-6 pb-[40px] md:pb-[60px]">
//           <Link
//             href="/"
//             className="text-textColor font-medium hover:scale-105 transition-all duration-50 ease-in-out"
//           >
//             HOME
//           </Link>
//           <Link
//             href="/about"
//             className="text-textColor font-medium hover:scale-105 transition-all duration-50 ease-in-out"
//           >
//             ABOUT
//           </Link>
//           <Link
//             href="/services"
//             className="text-textColor font-medium hover:scale-105 transition-all duration-50 ease-in-out"
//           >
//             THE SCENE
//           </Link>
//           <Link
//             href="/contact"
//             className="text-textColor font-medium hover:scale-105 transition-all duration-50 ease-in-out"
//           >
//             SEARCH
//           </Link>
//         </nav>
//       )}

//       <div className="gredient-btn my-4 sm:my-0 h-[64px] text-[14px] p-3 md:p-0 md:text-[16px] rounded-[60px] bg-[#FBF0EC] bg-gradient-to-r from-[#FF8EA066] to-[#AA98FE99] text-center flex items-center justify-center underline font-bold">
//         Missing Your Favourite Artist or Album? Submit it here!
//       </div>
//     </header>
   
//     {/* {loginpopup &&
//        <Login closePopup={closeLoginPopup}/>
//     } */}
   
//     </>
//   );
// };

// export default Header;
