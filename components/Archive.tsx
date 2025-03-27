import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Projects
        </h2>
        {/* <p className="text-sm font-titleFont text-[#9CDBA6]">
          view the archive
        </p> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="3x3 Matrix Game"
          des="A 3x3 matrix game where players can select a number from the grid and try to match it with the target number. "
          listItem={["Javascript", "ReactJS", "CSS", "Vercel"]}
          link="https://3x3-matrix-gamevimal.vercel.app/"
        />
        <ArchiveCard
          title="PinItUp"
          des="Design unique and expressive notes with diverse fonts, themes, and vibes.
                  "
          listItem={["Typescript", "TailwindCSS", "Loading", "Vercel"]}
          link="https://pin-it-up.vercel.app/"
        />
        <ArchiveCard
          title="Modern Landing Page"
          des="I created a modern landing page for the startup growing eco-system.
                  "
          listItem={["ReactJS", "TailwindCSS", "Framer Motion", "Vercel"]}
          link="https://landing-page-seven-puce.vercel.app/"
        />
        <ArchiveCard
          title="Calculater App"
          des="I created a calculator app with a user-friendly
                 interface for performing basic arithmetic operations.
                  "
          listItem={["Html", "Css", "Javascript", "Github Pages"]}
          link="https://calculator07-nine.vercel.app/"
        />
        <ArchiveCard
          title="Covid-Tantra"
          des="I developed a COVID-19 awareness web app to provide
           reliable information about the pandemic."
          listItem={["Html", "Css", "Javascript", "Github Pages"]}
          link="https://www.noormohmmad.com/"
        />
        <ArchiveCard
          title="Rock-Paper-Scissor Game"
          des=" Developed an interactive Rock-Paper-Scissors game using modern web technologies, featuring a sleek UI with emoji-based buttons."
          listItem={["Html", "Css", "Javascript", "Github Pages"]}
          link="https://vimal2023.github.io/RockPaperScissorGame_VimalAnand.github.io/"
        />
        <ArchiveCard
          title="TipCalculator App"
          des="I developed a tip calculator app with a sleek and 
          modern UI for calculating tips and splitting bills. 
          It allows users to input the bill amount, select a tip percentage."
          listItem={["Html", "Css", "Javascript", "Netlify"]}
          link="https://tipcalculator-vimal.netlify.app/"
        />
        {/* <ArchiveCard
          title="JSON data (example data api for test projects)"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Nextjs", "Tailwind CSS", "next-router"]}
          link="https://jsondata.reactbd.com/"
        />
        <ArchiveCard
          title="Dynamic Responsive Portfolio"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
          link="https://portfolioone.reactbd.com/"
        /> */}

        {/* {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Calculater App"
                des="I created a calculator app with a user-friendly
                 interface for performing basic arithmetic operations.
                  "
                listItem={["HTML", "CSS", "JAVASCRIPT", "Github Pages"]}
                link="https://calculator07-nine.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Noor Online Shopping Store"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                link="https://noorshop.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Personalized Blog"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                link="https://my-blog-delta-eight.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Shoppers Online Shopping Market"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                link="https://shoppersyt.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Single Page Personalized Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliotwo.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Nextjs Dynamic Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliothree.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Bazaar - A Modern Shopping app"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://bazar.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Blog101 Application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="https://blog101.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Todo application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://youtubetodo.vercel.app/"
              />
            </motion.div>
          </>
        )} */}
        <a href="https://github.com/Vimal2023?tab=repositories" target="_blank">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-52 h-14 text-sm font-titleFont border border-[#818C78] rounded-md text-[#5C7285] tracking-wide hover:bg-[#818C78] duration-300"
          >
            Check out more project!
          </motion.button>
        </a>
      </div>
      {/* <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-[#9CDBA6] text-[13px] border border-[#9CDBA6] hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-[#9CDBA6] text-[13px] border border-[#9CDBA6] hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div> */}
    </div>
  );
};

export default Archive;
