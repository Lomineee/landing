import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      
      <div
        className={`mx-auto flex justify-between items-center py-4 px-6 transition-all duration-300
        ${
          scrolled
            ? "max-w-6xl mt-4 bg-[#2F80ED] rounded-full shadow-[0_8px_0px_#000]"
            : "w-full bg-[#2F80ED]"
        }`}
      >
        <h1 className="text-white text-2xl font-bold tracking-wide">
          Lomine
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
        </div>

        <div className="hidden md:block">
          <a
            href="https://wa.me/628123456789?text=Halo%20bang"
  target="_blank"
  rel="noopener noreferrer"
            className="bg-[#FFC700] text-black px-5 py-2 rounded-full font-semibold border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition inline-block"
          >
            Contact
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 px-6">
          <div className="bg-[#2F80ED] rounded-2xl shadow-[0_6px_0px_#000] p-6 flex flex-col gap-4 text-white font-medium">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a
              href="https://wa.me/6281937851418"
              className="bg-[#FFC700] text-black px-5 py-2 rounded-full font-semibold border-2 border-black shadow-[4px_4px_0px_#000] w-fit"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
