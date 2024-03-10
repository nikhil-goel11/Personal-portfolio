import Links from './links/Links';
import './sidebar.scss';
import { motion } from 'framer-motion';
import ToggleButton from './toggleButton/ToggleButton';
import { useState } from 'react';
const variants = {
    open: { clipPath: 'circle(1200px at 50px 50px)', transition: { type: "spring", stifness: 20 },}, 
    closed: { clipPath: 'circle(30px at 50px 50px)', transition: { type: "spring", stifness: 20, damping: 20 }, },
};
const Sidebar = () => {
    const [open, setOpen] = useState(false);


    return <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className='bg' variants={variants}>
            <Links />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
};
export default Sidebar; 