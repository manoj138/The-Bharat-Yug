import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Loader() {
 const nav = useNavigate();
 useEffect(() => {
 setTimeout(() => nav("/home"), 6000);
 }, []);
 return (
 <div className="h-screen flex flex-col items-center justify-center bg-black">
 <motion.h1
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 2 }}
 className="text-5xl font-heading text-white"
 >
 THE HISTORY OF BHARAT
 </motion.h1>
 <motion.p
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 2 }}
 className="mt-4 text-lg text-gray-300"
 >
 From Dharma to Swarajya
 </motion.p>
 </div>
 );
}