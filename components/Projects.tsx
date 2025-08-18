import {
  weatherproject,
  dashboard,
  fourthOne
} from "@/public/assets";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://coin-pilot-an-expense-tracker-finan.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={dashboard}
                alt="dashboard"
              />
              <div className="absolute w-full h-full bg-[#FFF5E4]/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-[#FF8000] text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">CoinPilot</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              An AI-driven personal finance advisor app built with Next.js,
              Tailwind CSS, and Shadcn UI. It offers budget tracking, expense
              management, and AI-powered financial advice using -{" "}
              <span className="text-[#FF8000]">Open AI&#39;s GPT-4</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>NextJS</li>
              <li>Neon(PostgreSQL)</li>
              <li>Clerk</li>
              <li>Open-AI-API(GPT-4)</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-[#FF8000] duration-300"
                href="https://github.com/Vimal2023/CoinPilot__an-Expense-Tracker-Financial-Advisor-App"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-[#FF8000] duration-300"
                href="https://coin-pilot-an-expense-tracker-finan.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://mausam-vimal.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={weatherproject}
                alt="weatherproject"
              />
              <div className="absolute w-full h-full bg-[#FF8000]/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-[#FF8000] text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Mausam - Weather App</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              It is a modern, responsive weather app that delivers real-time
              weather updates and 5-day forecasts in an elegant UI.{" "}
              <span className="text-[#FF8000]">
                Users can search by city or use geolocation to instantly view
                detailed weather metrics.
              </span>{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Typescript</li>
              <li>ReactJS</li>
              <li>TailwindCSS</li>
              <li>ShadcnUI</li>
              <li>WeatherAPI</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-[#FF8000] duration-300"
                href="https://github.com/Vimal2023/Weather-App__Mausam"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-[#FF8000] duration-300"
                href="https://mausam-vimal.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Vimal2023/Contact-Book-_-Backend"
            target="_blank"
          >
            <div>
              <Image
                className="w-fit h-fit object-contain"
                src={fourthOne}
                alt="fourthOne"
              />
              <div className="absolute w-full h-full bg-[#FF8000]/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-[#FF8000] text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">
                Contact_Management_App - Backend
              </h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A full-stack web application built with Node.js, Express, and
              MongoDB to manage contacts with user authentication. The project
              features{" "}
              <span className="text-[#FF8000]">
                User registration and login with JWT authentication, CRUD
                operations for managing contacts (Create, Read, Update, Delete)
              </span>{" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>ExpressJS</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Thunder</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-[#FF8000] duration-300"
                href="https://github.com/Vimal2023/Contact-Book-_-Backend"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-[#FF8000] duration-300"
                href="https://github.com/Vimal2023/Contact-Book-_-Backend"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
