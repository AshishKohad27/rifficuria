// "use client"
// import React, { useState } from "react";
// import Link from "next/link";
// import { HiXMark } from "react-icons/hi2";
// import Signup from "../signup/page";
// const Login = ({closePopup}) => {
//   const [signupopen , setsignupopen] = useState(false)
//   const closesignup = ()=>{
//     setsignupopen(false)
//   }
//   return (
//     <>
//       <section className="bg-gray-50 ">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 fixed inset-0 z-50 overflow-x-hidden overflow-y-auto  backdrop-blur bg-background2 bg-opacity-50">
//           <div className="w-full bg-background rounded-2xl shadow dark:border md:mt-0 sm:max-w-[557px] xl:p-0 dark:bg-gray-800 dark:border-gray-700 border border-textColor">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//           <div className="float-right">
//           {/* onClick={closePopup} */}
         
//           <Link href='/'> <HiXMark className="w-6 h-6 text-textColor cursor-pointer" /></Link>
//           </div>
//               <form className="space-y-4 md:space-y-6" action="#">
//                 <div>
//                   <label
//                     for="username"
//                     className="block mb-2 text-sm font-medium text-textColor dark:text-white"
//                   >
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     className="bg-background2 border-gray-300 text-gray-900 rounded-[80px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required=""
//                   />
//                 </div>
//                 <div>
//                   <label
//                     for="password"
//                     className="block mb-2 text-sm font-medium text-textColo dark:text-white"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     className="bg-background2  text-gray-900 rounded-[80px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required=""
//                   />
//                 </div>
//                 <div className="flex items-center justify-center">
//                   <Link
//                     href="#"
//                     className="text-sm font-medium text-alertColor underline dark:text-primary-500"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>
//                 <Link
//                   href="#"
//                   className="  block  text-background2  rounded-[80px] bg-btn1 dark:text-primary-500"
//                 >
//                   <div className="flex items-center justify-center p-3">LOGIN</div>
//                 </Link>
//                 {/* onClick={()=>setsignupopen(true)} */}
//                 <p className="text-center text-sm font-light text-textColor">
//                 New to Riffcuria? <Link href='./signup'><span className="text-btn1 underline" >Click here to create account</span></Link>
                  
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     {signupopen &&
//     <Signup closesignuppopup={closesignup} />
//     }
//     </>
//   );
// };

// export default Login;

