import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "OtakuWorld",
    img: "/OW.png",
    desc: "Welcome to our OtakuWorld, an immersive portal designed for anime enthusiasts to embark on a journey through the captivating world of animated storytelling. Our platform is a haven for fans, offering a seamless, user-friendly experience that brings the best of anime directly to your screens.",
    link: "#",
  },
  {
    id: 2,
    title: "Your's Truly",
    img: "/Eat.png",
    desc: "Restaurant Website, where we blend culinary excellence with the art of digital innovation to create an immersive dining experience for our online visitors. Our website is not just a virtual menu; it's a gateway to the heart of our culinary identity and a platform designed to tantalize taste buds and captivate food enthusiasts.",
    link: "#",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    img: "/portfolio.png",
    desc: "My Personal Portfolio - a digital canvas that reflects my journey, skills, and passion in the world of Development. This platform is not just a collection of achievements but a dynamic space where my professional identity comes to life. ",
    link: "#",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
