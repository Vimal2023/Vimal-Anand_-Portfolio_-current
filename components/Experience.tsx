import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Raphacure from "./works/Raphacure";
import Cyberlence from "./works/Cyberlence";


const Experience = () => {
  const [workReactbd, setWorkReactbd] = useState(true);

  const handleReactbd = () => {
    setWorkReactbd(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-5 lgl:py-16 flex flex-col gap-8"
    >
      <SectionTitle title="Work Experience"/>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-[#98D8EF] text-[#98D8EF]"
                : "border-l-[#6E8E59] text-[#6E8E59]"
            } border-l-2 bg-transparent hover:bg-[#112240] py-2 text-sm  cursor-pointer duration-300 px-3 font-medium`}
          >
            r.cure
          </li>
          
        </ul>
        {workReactbd && <Raphacure />}
      </div>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactbd}
            className={`${
              workReactbd
                ? "border-l-[#98D8EF] text-[#98D8EF]"
                : "border-l-[#6E8E59] text-[#6E8E59]"
            } border-l-2 bg-transparent hover:bg-[#112240] py-2 text-sm  cursor-pointer duration-300 px-3 font-medium`}
          >
            Cyberlence
          </li>
          
        </ul>
        {workReactbd && <Cyberlence />}
      </div>
    </section>
  );
};

export default Experience;
