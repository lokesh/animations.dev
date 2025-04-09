import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="home-container"
    >
      <div className="experiment-list">
     
      </div>
    </motion.div>
  );
};

export default Home; 