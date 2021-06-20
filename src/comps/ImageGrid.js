import { useFireStore } from "../hooks/useFireStore";
import { motion } from "framer-motion";

export const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
            key={doc.id}
            className="img-wrap"
          >
            <motion.img
              src={doc.url}
              alt="Img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
