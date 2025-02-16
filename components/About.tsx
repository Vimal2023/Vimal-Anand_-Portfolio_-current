import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-5 lgl:py-16 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hey, I am Vimal Anand. My strong technical skills and hands-on
            experience in full-stack development, particularly with the MERN
            stack, which aligns closely with the requirements of this role. I
            Have successfully developed and deployed several applications,
            including a fundraising platform and a real-time blogging site,
            where I utilized {" "}
            <span className="text-[#E2E0C8]">
              React.js, Node.js, Express, and MongoDB
            </span>{" "}
            to create scalable and efficient solutions.
          </p>
          <p>
            My experience working in fast-paced hackathons has honed my ability
            to deliver high-quality work under tight deadlines, and my
            collaborative approach has enabled me to work effectively in diverse
            team environments.{" "}
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-[#E2E0C8]">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E2E0C8]">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E2E0C8]">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E2E0C8]">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E2E0C8]">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E2E0C8]">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E2E0C8]">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#E2E0C8]">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-100 object-cover w-full"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute  w-full h-100 bg-[#E2E0C8]/40 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-[#E2E0C8] rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
