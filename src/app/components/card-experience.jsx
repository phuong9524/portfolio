import React from "react";

export default function CardExperience(props) {
  const { startOn, endOn, position, company, describe, skills } = props;
  return (
    <div className="flex gap-2 flex-col md:flex-row">
      <div className="md:w-[25%] sm:w-[100%]">
        <span className="text-xs font-semibold uppercase text-slate-500">
          {startOn} &#8211; {endOn}
        </span>
      </div>

      <div className="w-[100%] flex flex-col gap-4">
        <span>
          {position} · {company}
        </span>
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
