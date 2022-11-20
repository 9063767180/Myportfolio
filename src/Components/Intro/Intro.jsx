import React, { useContext } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () =>
{
    // Transition
  const transition = { duration: 2, type: "spring" };

    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return(
        <div className="intro" id="Intro">
            {/* left name side */}
            <div className="i-left">
                <div className="i-name">
                    {/* Here the change is of Darkmode */}
                    <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am </span>
                    <span>krishna kumar</span>
                    <span>Front-End Developer with high level of exprience in web desiging and development, production the quality work.</span>
                </div>


                <Link to="contact" smooth={true} spy={true}>
                    <button className="button i-button">Hire me</button>
                </Link>

                {/* social icons */} 
                <div className= "i-icons">
                    <a href='https://github.com/9063767180/bloglife'>
                    <img src={Github} alt="github"/>
                    </a>
                    <a href='http://linkedin.com/in/krishnakumar-rednam-53350b221'><img src={LinkedIn} alt="linkedin"/>
                    </a>
                    <a href='https://www.instagram.com/krishna_kittu_rednam/'><img src={Instagram} alt="instagram"/>
                    </a>
                </div>
            </div>
            {/* right image side */}
            <div className="i-right">
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={boy} alt="boy"/>

            {/* animation */}
            <motion.img
                 initial={{ left: "-36%" }}
                 whileInView={{ left: "-24%" }}
                 transition={transition}
                 src={glassesimoji}
                 alt=""
                    />
            <motion.div
                 initial={{ top: "-4%", left: "74%" }}
                 whileInView={{ left: "68%" }}
                 transition={transition}
                 className="floating-div"
                >
                <FloatingDiv image={crown} txt1='web' txt2='Developer'/>
            </motion.div>
            {/* animation */}
            <motion.div
                initial={{ top: "18rem",left: "9rem", }}
                whileInView={{ left: "1rem" }}
                transition={transition}
                className="floating-div"
            >
                <FloatingDiv image={thumbup} txt1='Bext Design' txt2='Award'/>
            </motion.div>
            {/*blur divs*/}
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{
                background:'#C1F5FF',
                top: '17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
            }}></div>

            </div>
        </div>
    )
}

export default Intro;