import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-[#FF8000] font-semibold flex items-center tracking-wide">
        What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I’m actively looking for a full-time position as a Frontend Developer or
        Full Stack Web Developer. If you have an opportunity or just want to
        connect, feel free to reach out. I’ll do my best to get back to you!
      </p>

      <a href="https://www.linkedin.com/in/vimal-anand-9917a1212/" target="_blank">
        <button className="w-40 h-14 border border-[#FF8000] mt-6 font-titleFont text-sm text-[#FF8000] tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
