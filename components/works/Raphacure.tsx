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
        Freelance Frontend Developer
        <span className="text-[#6E8E59] tracking-wide">@Raphacure</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2024 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#6E8E59] mt-1">
            <TiArrowForward />
          </span>
          Developed multiple Responsive pages from figma design using
          Typescript, ReactJS and Javascript.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#6E8E59] mt-1">
            <TiArrowForward />
          </span>
          Implemented seamless API integration using Redux Toolkit for efficient
          state management and optimized data flow in web applications.
        </li>
      </ul>
    </motion.div>
  );
};

export default Raphacure;
