import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Raphacure = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Developer Intern
        <a
          className="text-[#6E8E59] tracking-wide"
          href="https://www.linkedin.com/company/rapha-cure/posts/?feedView=all"
          target="_blank"
        >
          @r.cure
        </a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2024 - Feb 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#6E8E59] mt-1">
            <TiArrowForward />
          </span>
          Developed multiple Responsive pages from figma design using
          Typescript, ReactJS and Javascript, reducing UI development time by
          30% through efficient component reuse.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#6E8E59] mt-1">
            <TiArrowForward />
          </span>
          Implemented seamless API integration using Redux Toolkit, optimizing
          data flow and improving application performance by 25% for state
          management tasks.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#6E8E59] mt-1">
            <TiArrowForward />
          </span>
          Extensively utilized ReactJS to build dynamic and interactive UI
          components, enhancing user engagement by 40% through improved
          interface responsiveness.
        </li>
      </ul>
    </motion.div>
  );
};

export default Raphacure;
