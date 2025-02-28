import { amazonImg, articleone, articleTwo, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <section id="articles" className="max-w-container mx-auto lgl:px-20 py-15">
      <SectionTitle title="Articles" />
      <div className="w-full flex flex-col items-center justify-center gap-20 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://medium.com/@Coder_Shelby_7/21-days-of-ninja-slayground-675f48788ad4"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-80 object-contain"
                src={articleone}
                alt="articleone"
              />
              <div className="absolute w-full h-full bg-[#FFF5E4]/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-[#FF8000] text-sm tracking-wide">
                Featured Article 01
              </p>
              <h3 className="text-2xl font-bold">
                || 21 days of NINJA SLAYGROUND ||
              </h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Coding challenge, organized by{" "}
              <span className="text-[#FF8000]">Coding Ninjas</span> in
              collaboration with{" "}
              <span className="text-[#FF8000]">Slay Coffee.</span> It includes
              daily coding problems along with solutions and Twitter links for
              each day&rsquo;s submission.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>DSA</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-[#FF8000] duration-300"
                href="https://medium.com/@Coder_Shelby_7/21-days-of-ninja-slayground-675f48788ad4"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://medium.com/@Coder_Shelby_7/-152e99ea6551"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-80 object-contain"
                src={articleTwo}
                alt="articleTwo"
              />
              <div className="absolute w-full h-full bg-[#FF8000]/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-[#FF8000] text-sm tracking-wide">
                Featured Article 02
              </p>
              <h3 className="text-2xl font-bold">
                Attributes _ ER Model _ DBMS
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              The article explains the concept of{" "}
              <span className="text-[#FF8000]">Attributes</span> in the ER Model
              of DBMS, describing how they define the properties of an entity.
              It outlines six types of attributes:{" "}
              <span className="text-[#FF8000]">
                Simple, Composite, Single-Valued, Multi-Valued, Derived, and
                Null,{" "}
              </span>{" "}
              with examples for each.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>ER Model</li>
              <li>DBMS</li>
              <li>Attributes</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-[#FF8000] duration-300"
                href="https://medium.com/@Coder_Shelby_7/-152e99ea6551"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}

        <a href="https://medium.com/@Coder_Shelby_7" target="_blank">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="w-52 h-14 text-sm font-titleFont border border-[#818C78] rounded-md text-[#5C7285] tracking-wide hover:bg-[#818C78] duration-300"
          >
            Check out more articles!
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Articles;
