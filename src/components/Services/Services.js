import React from "react";
import rep from "../../assets/iconos/services/resp.png";
import inter from "../../assets/iconos/services/interface.png";
import speed from "../../assets/iconos/services/speed.png";
import social from "../../assets/iconos/services/social-media.png";
import checked from "../../assets/iconos/services/checked.png";
import seo from "../../assets/iconos/services/seo.png";
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { works } from "../../data/DataPortafolio";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
export const Services = () => {
  const workEvents = works.map((work, index) => {
    const colors = ['#9C27B0', '#673AB7', '#FF9800', '#607D8B', '#2196F3', '#4CAF50'];
    const icons = ['pi pi-briefcase', 'pi pi-building', 'pi pi-building', 'pi pi-building'];
    const tagColors = ['#e91e63', '#3f51b5', '#009688', '#ff5722', '#4caf50', '#2196f3'];
    const technologiesWithColors = work.technologies ? work.technologies.map((tech, i) => ({
      name: tech,
      color: tagColors[i % tagColors.length]
    })) : [];
    
    return {
      ...work,
      color: colors[index % colors.length],
      icon: icons[index % icons.length],
      technologiesWithColors
    };
  });

  const customizedMarker = (item) => {
    return (
      <span className="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-md" style={{ backgroundColor: item.color }}>
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <Card 
        title={item.company} 
        subTitle={`${item.position} | ${item.startDate} - ${item.endDate}`}
        className="mb-4 shadow-md"
      >
        {item.responsibilities && item.responsibilities.length > 0 && (
          <div className="mt-2">
            <h4 className="font-semibold">Responsibilities:</h4>
            <ul className="list-disc pl-5 text-sm">
              {item.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        )}
        
        {item.technologiesWithColors && item.technologiesWithColors.length > 0 && (
          <div className="mt-3">
            <h4 className="font-semibold">Technologies:</h4>
            <div className="flex flex-wrap gap-1 mt-1">
              {item.technologiesWithColors.map((tech, index) => (
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
        )}
      </Card>
    );
  };

  return (
    <section className="h-auto flex flex-col justify-center pt-10 p-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Services
          </h2>
          <p className="leading-relaxed text-lg">
            My goal is to provide customized and quality solutions to meet the
            needs of my clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold">Responsive</h3>
            <img
              src={rep}
              alt="Icono de responsivo"
              className="w-16 transition-transform duration-200 hover:scale-110"
            />
            <p className="text-sm md:text-base">
              Web system that adapts and works optimally on any device. It is
              essential that your website provides a smooth and attractive user
              experience, both on smartphones, tablets, and desktop computers.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold">Interactive interfaces</h3>
            <img
              src={inter}
              alt="Icono de interacción"
              className="w-16 transition-transform duration-200 hover:scale-110"
            />
            <p className="text-sm md:text-base">
              Creation of interactive interfaces that captivate and delight
              users with a focus on intuitive and engaging design, providing a
              unique and satisfying experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold">
              Optimization of performance
            </h3>
            <img
              src={speed}
              alt="Icono de rendimiento"
              className="w-16 transition-transform duration-200 hover:scale-110"
            />
            <p className="text-sm md:text-base">
              Performance optimization service is focused on improving the speed
              and efficiency of your website to deliver an exceptional user
              experience.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold">
              Interaction in social networks
            </h3>
            <img
              src={social}
              alt="Icono de social"
              className="w-16 transition-transform duration-200 hover:scale-110"
            />
            <p className="text-sm md:text-base">
              Social media interaction service designed to enhance your
              customers' presence and participation on digital platforms.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold">Maintenance and updating</h3>
            <img
              src={checked}
              alt="Icono de actualización"
              className="w-16 transition-transform duration-200 hover:scale-110"
            />
            <p className="text-sm md:text-base">
              Maintenance and updating to give our users peace of mind and
              ensure that your website is always up to date and working
              optimally.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold">SEO</h3>
            <img
              src={seo}
              alt="Icono de SEO"
              className="w-16 transition-transform duration-200 hover:scale-110"
            />
            <p className="text-sm md:text-base">
              Improve the visibility of your website in search engines and offer
              a quality user experience to increase the ranking in relevant
              search results.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Work Experience
          </h2>
          <div className="card">
            <Timeline 
              value={workEvents} 
              align="alternate" 
              className="w-full md:w-10/12 mx-auto customized-timeline" 
              marker={customizedMarker} 
              content={customizedContent}
              pt={{
                event: { className: 'p-0' },
                connector: { className: 'bg-gray-300 w-0.5' }
              }}
            />
          </div>
        </div>
    </section>
  );
};
