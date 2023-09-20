import Image from "next/image";
import React from "react";

export default function CardProject(props) {
  const { img, title, link, describe, skills } = props;

  return (
    <div className="flex gap-5 flex-col md:flex-row mb-12">
      <div className="w-[22%]">
        <Image
          className="rounded border-2 border-t-slate-200/10 transition sm:order-last"
          alt="Asset Management"
          width="200"
          height="480"
          src={img}
          loading="lazy"
          layout="responsive"
        />
      </div>
      <div className="w-[100%] flex flex-col gap-4">
        <a href={link}>
          <span>{title}</span>
        </a>
        <p className="text-sm leading-normal text-slate-400">{describe}</p>
        <div className="flex gap-2 flex-wrap justify-start">
          {skills?.map((skill) => {
            return (
              <div
                className="bg-indigo-400/10 text-violet-500 rounded-full items-center flex font-medium text-xs leading-5 px-3 py-1"
                key={skill}
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
