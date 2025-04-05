import React from "react";
import rep from "../../assets/iconos/services/resp.png";
import inter from "../../assets/iconos/services/interface.png";
import speed from "../../assets/iconos/services/speed.png";
import social from "../../assets/iconos/services/social-media.png";
import checked from "../../assets/iconos/services/checked.png";
import seo from "../../assets/iconos/services/seo.png";

export const Services = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
    </section>
  );
};
