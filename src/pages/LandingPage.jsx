import React from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const yugs = [
  {title:"Ramayan Yug", path : "/ramayan"},
  {title:"Mahabharat Yug", path : "/mahabharat"},
  {title:"Swarajya Yug", path : "/swarajya"},
];

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className='min-h-screen px-10 py-10 bg-black'>
      <h1 className="text-center text-5xl font-heading text-yellow-300 mb-20">
 Choose a Yug
 </h1>
 <div className="grid md:grid-cols-3 gap-10">
 {
 yugs.map((yug, id) => (
 <motion.div
 key={id}
 whileHover={{ scale: 1.05 }}
 whileTap={{ scale: 0.95 }}
 onClick={() => navigate(yug.path)}
 className="cursor-pointer h-80 rounded-xl bg-glass backdrop-blur-md flex
items-end p-6 border border-yellow-300"
 >
  <h2 className="text-2xl font-heading text-yellow-300">
 {yug.title}
 </h2>
 </motion.div>
 ))}
    </div>
    </div>
  )
}

export default LandingPage
