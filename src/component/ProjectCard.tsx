import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
  imgSrc: string;
  title: string;
  tags: string[];
  projectLink: string;
  classes?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
}) => {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <i>
            <FiArrowUpRight />
          </i>
        </div>

        <a href={projectLink} target="_blank" className="absolute inset-0"></a>
      </div>
    </div>
  );
};

export default ProjectCard;