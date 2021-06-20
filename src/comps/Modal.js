import { motion } from "framer-motion";

export const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="backdrop"
        onClick={handleClose}
      >
        {/* property "y" from framer-motion, not css */}
        <motion.img
          src={selectedImg}
          alt="enlarged img"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        />
      </motion.div>
    </div>
  );
};
