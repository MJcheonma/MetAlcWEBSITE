import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import TeamMember from "../TeamMember";
import Link from 'next/link';
import { fadeIn } from "../../variants";
import Head from 'next/head';


const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
    <Head>
        <title>MetAlc Productions</title>
    </Head>
    <div 
      className="h-screen py-8 md:py-12 text-center xl:text-left flex flex-col overflow-hidden relative"
      style={{
        backgroundImage: "url('/bg2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >

      <div className="flex-1 container mx-auto flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-2xl md:text-3xl lg:text-4xl mb-4"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[700px] mx-auto xl:mx-0 mb-4 xl:mb-6 px-2 xl:px-0 text-sm md:text-base"
          >
            10 years ago, I began freelancing as a developer. Since then, I've done remote work for agencies, consulted for startups, and collaborated on digital products for business and consumer use.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex justify-between w-full max-w-3xl mx-auto mb-8 text-center"
          >
            {/* experience */}
            <div className="flex-1 border-r border-gray-700 last:border-r-0">
              <div className="text-4xl font-bold text-red-500 mb-2">
                <CountUp start={0} end={10} duration={5} />
              </div>
              <div className="text-xs uppercase tracking-wider">
                Years of<br />experience.
              </div>
            </div>

            {/* clients */}
            <div className="flex-1 border-r border-gray-700 last:border-r-0">
              <div className="text-4xl font-bold text-red-500 mb-2">
                <CountUp start={0} end={243} duration={5} />
              </div>
              <div className="text-xs uppercase tracking-wider">
                Satisfied<br />clients.
              </div>
            </div>

            {/* projects */}
            <div className="flex-1 border-r border-gray-700 last:border-r-0">
              <div className="text-4xl font-bold text-red-500 mb-2">
                <CountUp start={0} end={631} duration={5} />
              </div>
              <div className="text-xs uppercase tracking-wider">
                Finished<br />projects.
              </div>
            </div>

            {/* awards */}
            <div className="flex-1 border-r border-gray-700 last:border-r-0">
              <div className="text-4xl font-bold text-red-500 mb-2">
                <CountUp start={0} end={8} duration={5} />
              </div>
              <div className="text-xs uppercase tracking-wider">
                Winning<br />awards.
              </div>
            </div>
          </motion.div>

          {/* meet the team section */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
            Meet the <span className="text-accent">Team</span>
          </h2>
          <div className="flex justify-center gap-4">
            <TeamMember
              key={1}
              name="Mudit Jain"
              description="Founder and CEO"
              imageSrc="https://tse1.mm.bing.net/th?id=OIP.cxcqa9RvhGnRd8x3N2oBdgHaHn&pid=Api&P=0&h=180"
            />
            <TeamMember
              key={2}
              name="Ayush Pandey"
              description="Co-founder and CTO"
              imageSrc="https://tse1.mm.bing.net/th?id=OIP.cxcqa9RvhGnRd8x3N2oBdgHaHn&pid=Api&P=0&h=180"
            />
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <Link href="/services" passHref>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-24 md:bottom-8 left-1/2 transform -translate-x-1/2"
          whileHover={{ y: [-5, 2], transition: { yoyo: Infinity, duration: 0.5 } }}
        >
          <img
            src="/arrow.png"
            alt="Down Arrow"
            className="rotate-90 w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform"
          />
        </motion.a>
      </Link>
    </div>
    </>
  );
};

export default About;
