import CardExperience from "./components/card-experience";
import CardProject from "./components/card-project";
import Scrollspy from "./components/scrollspy";
import TwinkleStar from "./components/twinkle-star";

export default function Home() {
  const array = [...Array(300)];
  return (
    <div className=" bg-slate-900">
      {array.map((_) => (
        <TwinkleStar />
      ))}

      <div className="bg-gradient-to-tl from-blue-600/[.1] via-transparent to-purple-400/[.1]">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 ">
          <div className="lg:flex lg:justify-between lg:gap-4 selection:bg-violet-500 selection:text-slate-100">
            <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div className="space-y-2">
                <h3>Hello there,</h3>
                <h1 className="text-2xl font-bold sm:text-4xl">
                  I'm Do Nguyen Phuong
                </h1>
                <h2 className="text-xl">A Web Developer</h2>
                <p className=" max-w-xs leading-normal text-slate-400">
                  I'm a passionate and dedicated web developer who specializes
                  in creating modern, user-friendly, and well-optimized
                  websites.
                </p>
                <div>
                  <a
                    className=" text-slate-200 font-semibold hover:text-violet-500 items-center gap-1 group inline-flex"
                    href="/CV.pdf"
                    aria-label="View Full CV"
                  >
                    <span>View Full CV</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      className="w-4 h-4 fill-current transition group-hover:translate-x-2"
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </a>
                </div>
              </div>

              <Scrollspy />

              <div className="flex justify-start gap-2 mt-5 lg:mt-0">
                <a
                  className="block hover:text-slate-300 text-slate-400"
                  href="https://github.com/phuong9524"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 30 30"
                    className="w-8 h-8 fill-current "
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
                <a
                  className="block hover:text-slate-300 text-slate-400"
                  href="https://www.linkedin.com/in/phuong9524/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 30 30"
                    className="w-8 h-8 fill-current"
                  >
                    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-24 lg:w-1/2 lg:py-24">
              <div className="space-y-28">
                <section id="about" className="lg: scroll-m-24">
                  <h3 className="text-sm font-bold lg:sr-only pb-6 text-slate-200">
                    ABOUT
                  </h3>
                  <p className=" font-medium leading-relaxed text-gray-400 mb-4">
                    Hi! I'm Phuong. As a new developer, I bring a strong work
                    ethic, a keen eye for detail, and a passion for solving
                    complex problems. I thrive in dynamic environments and
                    embrace opportunities to learn and grow. My goal is to
                    contribute to a team that shares my dedication to creating
                    impactful and user-centric solutions.
                  </p>
                  <p className="  font-medium leading-relaxed text-gray-400 mb-4">
                    I believe that a successful website goes beyond its visual
                    appeal. It should be intuitive to navigate, responsive
                    across devices, and optimized for performance. By leveraging
                    the latest web technologies and best practices, I ensure
                    that every website I create is not only visually stunning
                    but also fast-loading and accessible to a wide range of
                    users.
                  </p>
                  <p className=" font-medium leading-relaxed text-gray-400  ">
                    If you're seeking a passionate and detail-oriented web
                    developer who can bring your vision to life, I would be
                    thrilled to collaborate with you.
                  </p>
                </section>
                <section id="experience" className="scroll-mt-24">
                  <h3 className="text-sm font-semibold lg:sr-only pb-6 text-slate-200">
                    EXPERIENCE
                  </h3>
                  <div>
                    <CardExperience
                      startOn="Sep"
                      endOn="Dec 2022"
                      position="Intern Fullstack developer"
                      company="NashTech"
                      describe="Intern as a fullstack developer with Spring and React, learn communication english, Srum, testing with unit test and integration test. Join in a simulation project as a fullstack developer with QC, PM, PO and Scrum Master."
                      skills={[
                        "Java",
                        "Spring Boot",
                        "Unit Testing",
                        "React",
                        "Git",
                        "Azure DevOps",
                      ]}
                    />
                  </div>
                </section>
                <section id="projects" className="scroll-mt-24">
                  <h3 className="text-sm font-semibold lg:sr-only pb-6">
                    PROJECTS
                  </h3>
                  <ul>
                    <li>
                      <CardProject
                        img={
                          "https://res.cloudinary.com/dwsae4gmt/image/upload/v1695148301/image1_lhvapl.png"
                        }
                        title="E-commerce website for pharmaceutical company"
                        describe="An e-commerce website for pharmaceutical products. Buying and selling pharmaceutical products, managing customer information, products, orders, and employee management"
                        skills={[
                          ".NET",
                          "React",
                          "MUI",
                          "SQL Server",
                          "Rest API",
                        ]}
                      />
                    </li>
                    <li>
                      <CardProject
                        img={
                          "https://res.cloudinary.com/dwsae4gmt/image/upload/v1695146085/US8_AC1_xzwfho.png"
                        }
                        title="Asset Management"
                        describe="A company asset management page. The functionalities include employee management, asset management, creating asset registration sessions for employees, creating asset return requests, managing asset return requests, and generating asset registration statistics."
                        skills={[
                          "Spring Boot",
                          "React",
                          "Ant Design",
                          "PostgreSQL",
                          "Rest API",
                        ]}
                      />
                    </li>
                  </ul>
                </section>
                <p className="  text-sm leading-6 text-slate-500">
                  The design was inspired by{" "}
                  <a
                    href="https://github.com/bchiang7"
                    className="font-medium text-slate-400 hover:text-violet-500 focus-visible:text-violet-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Brittany Chiang
                  </a>
                  . Built with{" "}
                  <a
                    href="https://nextjs.org/"
                    className="font-medium text-slate-400 hover:text-violet-500 focus-visible:text-violet-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Next.js{" "}
                  </a>
                  and{" "}
                  <a
                    href="https://tailwindcss.com/"
                    className="font-medium text-slate-400 hover:text-violet-500 focus-visible:text-violet-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tailwind CSS
                  </a>
                  . Deployed with{" "}
                  <a
                    href="https://vercel.com/"
                    className="font-medium text-slate-400 hover:text-violet-500 focus-visible:text-violet-600"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vercel
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
