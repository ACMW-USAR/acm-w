import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export const Team = () => {
  return (
    <>
          {/* *********team members******* */}

          <section
        className="px-4 pb-32 pt-32"
        style={{
          backgroundImage: "url('/img/19110.jpg')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto ">
          <h1 className="font-new-bold hover:text-black-600 mb-8 transform text-center text-6xl font-bold uppercase text-black transition-transform duration-300 ease-in-out hover:scale-110">
            Meet our heroes
          </h1>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <div
                key={name}
                className="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-200 hover:text-blue-600"
              >
                <TeamCard
                  img={img}
                  name={
                    <h2 className="mb-2 text-2xl font-bold">
                      {name.toUpperCase()}
                    </h2>
                  }
                  position={
                    <h2 className="text-xl font-semibold">{position}</h2>
                  }
                  socials={
                    <div className="flex items-center gap-2">
                      {socials.map(({ color, name, link }) => (
                        <IconButton
                          key={name}
                          color={color}
                          variant="text"
                          className="transform transition-transform duration-300 ease-in-out hover:text-gray-600"
                        >
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-${color}`}
                          >
                            <i className={`fa-brands text-3xl fa-${name}`} />
                          </a>
                        </IconButton>
                      ))}
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  )
}

export default Team