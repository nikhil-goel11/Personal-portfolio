import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 variants={textVariants}>Nikhil Goel</motion.h2>
            <motion.h1 variants={textVariants}>
              Web Developer and UI Designer.{" "}
            </motion.h1>
            <motion.div variants={textVariants} className="buttons">
              <motion.button
                variants={textVariants}
                whileHover={{ backgroundColor: "white", color: "black" }}
              >
                {" "}
                See the Latest Works
              </motion.button>
              <motion.button
                variants={textVariants}
                whileHover={{ backgroundColor: "white", color: "black" }}
              >
                Contact Me
              </motion.button>
            </motion.div>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Web Developer
        </motion.div>
        <div className="imageContainer">
          <img src="/copy1.png" alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
