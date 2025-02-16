import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto mdl:py-20 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 px-20 py-20"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-[#A7B49E]"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Vimal Anand.
        <span className="text-textDark mt-2 lgl:mt-4">
          I build things for the web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I&apos;m a passionate coding and programming enthusiast. I find immense
        joy in unraveling the complexities of algorithms, solving intricate
        problems through code, and crafting innovative solutions that bridge the
        gap between imagination and technology.{" "}
        <a
          href="https://www.linkedin.com/in/vimal-anand-9917a1212/"
          target="_blank"
        >
          {" "}
          <span className="text-textDark inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-textDark left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <a href="https://github.com/Vimal2023?tab=repositories" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-[#818C78] rounded-md text-[#5C7285] tracking-wide hover:bg-[#818C78] duration-300"
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
