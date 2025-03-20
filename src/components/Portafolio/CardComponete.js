import React from "react";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Tag } from "primereact/tag";

export const CardComponete = ({ data }) => {
  const severities = [
    "info",
    "success",
    "warning",
    "danger",
    "secondary",
    "primary",
    "contrast",
  ];

  const getSeverity = (index) => {
    return severities[index % severities.length];
  };

  const itemTemplate = (project, index) => {
    return (
      <div className="col-12 bg-transparent" key={index}>
        {index !== 0 && <hr className="border-t-2 border-white my-6 w-full" />}
        <div
          className="flex flex-col xl:flex-row xl:items-center p-4 gap-4 bg-transparent"
        >
          <img
            alt={project.name}
            src={project.img}
            className="w-52 h-52 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round rounded-lg"
          />

          <div className="flex flex-col sm:flex-row justify-between items-center xl:items-center flex-1 gap-4">
            <div className="flex flex-col items-center justify-center sm:items-start gap-3 my-4">
              <div className="text-2xl font-bold text-900 mb-2">{project.name}</div>
              <div className="flex items-center">
                <div className="flex flex-wrap gap-2 justify-center mb-2 h-auto">
                  {project.technology.map((tech, idx) => (
                    <Tag
                      severity={getSeverity(idx)}
                      value={tech}
                      key={idx}
                      rounded
                      className="text-sm h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col justify-center items-center sm:items-end gap-3 sm:gap-2">
              <Button
                icon="pi pi-link"
                rounded
                outlined
                aria-label="Filter"
                onClick={() => window.open(project.web, "_blank")}
              />
              <Button
                icon="pi pi-github"
                severity="secondary"
                rounded
                outlined
                aria-label="Filter"
                onClick={() => window.open(project.repositori, "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-transparent p-0 m-0">
      <DataView 
        value={data} 
        itemTemplate={itemTemplate} 
        layout="grid" 
        pt={{
          grid: { className: 'bg-transparent border-none w-full p-0 m-0' },
          content: { className: 'bg-transparent border-none w-full p-0 m-0' },
          container: { className: 'bg-transparent border-none w-full p-0 m-0' },
          item: { className: 'bg-transparent border-none w-full p-0 m-0' }
        }}
        className="bg-transparent border-none w-full p-0 m-0"
      />
    </div>
  );
};
