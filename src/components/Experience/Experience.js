import React from "react";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { works } from "../../data/DataPortafolio";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export const Experience = () => {
  const COLORS = [
    "#9C27B0",
    "#673AB7",
    "#FF9800",
    "#607D8B",
    "#2196F3",
    "#4CAF50",
  ];
  const ICONS = [
    "pi pi-briefcase",
    "pi pi-building",
    "pi pi-building",
    "pi pi-building",
  ];
  const TAG_COLORS = [
    "#e91e63",
    "#3f51b5",
    "#009688",
    "#ff5722",
    "#4caf50",
    "#2196f3",
  ];
  const workEvents = works.map((work, index) => {
    const technologiesWithColors = work.technologies
      ? work.technologies.map((tech, i) => ({
          name: tech,
          color: TAG_COLORS[i % TAG_COLORS.length],
        }))
      : [];

    return {
      ...work,
      color: COLORS[index % COLORS.length],
      icon: ICONS[index % ICONS.length],
      technologiesWithColors,
    };
  });
  const customizedMarker = (item) => (
    <span
      className="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-md"
      style={{ backgroundColor: item.color }}
    >
      <i className={item.icon}></i>
    </span>
  );
  const desktopContent = (item) => (
    <Card
      title={item.company}
      subTitle={`${item.position} | ${item.startDate} - ${item.endDate}`}
      className="mb-4 shadow-md w-full"
      pt={{
        content: { className: "p-3 md:p-4" },
        title: { className: "text-lg md:text-xl font-bold text-blue-600" },
        subTitle: { className: "text-sm md:text-base" },
      }}
    >
      {renderResponsibilities(item.responsibilities)}

      {renderTechnologies(item.technologiesWithColors)}
    </Card>
  );

  const renderResponsibilities = (responsibilities) => {
    if (!responsibilities || responsibilities.length === 0) return null;

    return (
      <div className="mt-2">
        <h4 className="font-semibold text-sm md:text-base">
          Responsibilities:
        </h4>
        <ul className="list-disc pl-5 text-xs md:text-sm">
          {responsibilities.map((resp, index) => (
            <li key={index} className="mb-1">
              {resp}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderTechnologies = (technologies) => {
    if (!technologies || technologies.length === 0) return null;

    return (
      <div className="mt-3">
        <h4 className="font-semibold text-sm md:text-base">Technologies:</h4>
        <div className="flex flex-wrap gap-1 mt-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs text-white rounded-full"
              style={{ backgroundColor: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="h-auto flex flex-col justify-center pt-10 p-4">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Work Experience
        </h2>
        <p className="leading-relaxed text-lg">
          My professional journey and the skills I've developed along the way.
        </p>
      </div>

      <div className="card">
        <div className="hidden md:block">
          <Timeline
            value={workEvents}
            align="alternate"
            className="w-full md:w-10/12 mx-auto customized-timeline"
            marker={customizedMarker}
            content={desktopContent}
            pt={{
              event: { className: "p-0" },
              connector: { className: "bg-gray-300 w-0.5" },
            }}
          />
        </div>

        <div className="block md:hidden">
          {workEvents.map((item, index) => (
            <div key={index} className="flex mb-8">
              <div className="w-1/12 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <span
                    className="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-md"
                    style={{ backgroundColor: item.color }}
                  >
                    <i className={item.icon}></i>
                  </span>
                </div>

                {index < workEvents.length - 1 && (
                  <div className="absolute top-8 bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-0.5"></div>
                )}
              </div>

              <div className="w-11/12 pl-2">
                <Card
                  title={item.company}
                  subTitle={`${item.position} | ${item.startDate} - ${item.endDate}`}
                  className="shadow-md w-full"
                  pt={{
                    content: { className: "p-2" },
                    title: { className: "text-base font-bold text-blue-600" },
                    subTitle: { className: "text-xs" },
                  }}
                >
                  {renderResponsibilities(item.responsibilities)}
                  {renderTechnologies(item.technologiesWithColors)}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
