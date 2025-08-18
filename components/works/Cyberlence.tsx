import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Cyberlence = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        UI Developer Intern
        <a
          className="text-[#6E8E59] tracking-wide"
          href="https://www.linkedin.com/company/cyberlence/"
          target="_blank"
        >
          @Cyberlence
        </a>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2025 - Aug 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#6E8E59] mt-1">
            <TiArrowForward />
          </span>
          Designed and developed user interface components, enhancing overall
          user experience and reducing UI-related bug reports by 20%
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-[#6E8E59] mt-1">
            <TiArrowForward />
          </span>
          Collaborated with cross-functional teams, contributing to 30% faster
          delivery of UI development projects through streamlined workflows.
        </li>
      </ul>
    </motion.div>
  );
};

export default Cyberlence;
