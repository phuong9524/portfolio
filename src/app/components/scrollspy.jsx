"use client";
import React, { useEffect, useState } from "react";

export default function Scrollspy() {
  const [active, setActive] = useState("");
  const sections = ["about", "experience", "projects"];
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop - 128;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sr-only lg:not-sr-only">
      <ul className=" space-y-5 inline-flex flex-col">
        {sections.map((section) => {
          return (
            <li>
              <a
                href={`#${section}`}
                className={`group flex items-center gap-2 py-0.5 text-sm font-medium uppercase leading-6 text-slate-400 hover:text-violet-500 ${
                  active === String(section) && "text-violet-500"
                }`}
              >
                {active === String(section) && (
                  <span className="bg-gradient-to-r from-indigo-500 to-violet-500  blur-md absolute rounded-lg ">
                    ---
                  </span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className=" fill-current relative "
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>{" "}
                {section}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
