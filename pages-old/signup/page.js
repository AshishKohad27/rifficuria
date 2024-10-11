// import React from "react";
// import { HiXMark } from "react-icons/hi2";
// import Link from "next/link";

// const Signup = ({closesignuppopup}) => {
//   return (
//     <>
//       <section class="bg-gray-50 ">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 fixed inset-0 z-[100] flex  overflow-x-hidden overflow-y-auto justify-center backdrop-blur bg-background2 bg-opacity-50">
//           <div class="w-full bg-background rounded-2xl shadow dark:border md:mt-0 sm:max-w-[557px] xl:p-0 dark:bg-gray-800 dark:border-gray-700 border border-textColor">
//             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <div className="float-right">
//               {/* onClick={closesignuppopup} */}
//                 <Link href='/'><HiXMark className="w-6 h-6 text-textColor" /></Link>
//               </div>
//               <form class="space-y-4 md:space-y-6" action="#">
//                 <div>
//                   <label
//                     for="username"
//                     class="block mb-2 text-sm font-medium text-textColor dark:text-white"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     class="bg-background2 border-gray-300 text-gray-900 rounded-[80px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required=""
//                   />
//                 </div>

//                 <div>
//                   <label
//                     for="email"
//                     class="block mb-2 text-sm font-medium text-textColor dark:text-white"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     class="bg-background2 border-gray-300 text-gray-900 rounded-[80px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required=""
//                   />
//                 </div>

//                 <div>
//                   <label
//                     for="password"
//                     class="block mb-2 text-sm font-medium text-textColo dark:text-white"
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     class="bg-background2  text-gray-900 rounded-[80px] focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required=""
//                   />
//                 </div>
//                 <div className="">
//                   <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
//                     <input
//                       className="relative float-left bg-background2 -ml-[1.5rem] mr-1 mt-0.5 h-5 w-4 "
//                       type="radio"
//                       name="flexRadioDefault"
//                       id="radioDefault01"
//                     />
//                     <label
//                       className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
//                       htmlFor="radioDefault01"
//                     >
//                       Sign up for our newsletters and updates
//                     </label>
//                     <p>If you check this box, Riffcuria will send you cool and useful emails now and then. You can unsubscribe anytime. </p>
//                   </div>

//                   <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
//                     <input
//                       className="relative float-left bg-background2 -ml-[1.5rem] mr-1 mt-0.5 h-5 w-4 "
//                       type="radio"
//                       name="flexRadioDefault2"
//                       id="radioDefault02"
//                     />
//                     <label
//                       className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
//                       htmlFor="radioDefault01"
//                     >
//                      I have read and agree to the <Link href="#" className="underline">Terms</Link> & <Link href="#"className="underline">Privacy Policy</Link>
//                     </label>
//                   </div>
//                 </div>
//                 <Link
//                   href="#"
//                   class="  block  text-background2  rounded-[80px] bg-btn1 dark:text-primary-500"
//                 >
//                   <div class="flex items-center justify-center p-3">
//                     CREATE ACCOUNT
//                   </div>
//                 </Link>

//                 <p class="text-center text-sm font-light text-textColor">
//                   Already have an account?{" "}
//                   <Link href="./login"><span className="text-btn1 underline">Login</span></Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Signup;
