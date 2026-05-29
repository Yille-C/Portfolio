import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './Hero'
import Clients from './Clients'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  const contactRef = useRef(null);

  // Track the scroll position relative to the Contact section
  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "start 30%"]
  });

  // Smoothly interpolate background, text, and border colors
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", "#000000"]);
  const textColor = useTransform(scrollYProgress, [0, 1], ["#000000", "#ffffff"]);
  const textMuted = useTransform(scrollYProgress, [0, 1], ["#444444", "#a3a3a3"]);
  const borderColor = useTransform(scrollYProgress, [0, 1], ["rgba(0, 0, 0, 0.15)", "rgba(255, 255, 255, 0.15)"]);

  return (
    <>
      <Hero />
      <Clients />
      <motion.div 
        className="scroll-bg-wrapper"
        style={{ 
          backgroundColor,
          color: textColor,
          "--text-color": textColor,
          "--bg-color": backgroundColor,
          "--text-muted": textMuted,
          "--border-color": borderColor
        }}
      >
        <AboutMe />
        <Projects />
        <Contact ref={contactRef} />
      </motion.div>
    </>
  )
}

export default App