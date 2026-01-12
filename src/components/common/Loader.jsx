import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
console.log("🚀 ~ motion:", motion)

const Loader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/home"), 6000);
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-5xl font-heading text-gold"
      >
        THE HISTORY OF BHARAT
      </motion.h1>
    </div>
  );
};

export default Loader;
