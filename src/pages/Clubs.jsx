import React from 'react';
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
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  import { PageTitle, Footer } from "@/widgets/layout";
  import { FeatureCard, TeamCard } from "@/widgets/cards";
  import { featuresData, teamData, contactData } from "@/data";
  import CardComponent from "./CardComponent"; // Import the CardComponent from the same directory

export default function Clubs() {
  return (
    <>
    {/* ***** mentors***** */}

    <section className="bg-image -mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1  grid-cols-2">
            {featuresData.map(({ title, imgSrc, description }) => (
              <FeatureCard
                key={title}
                title={title}
                imgSrc={imgSrc}
                description={description}
              />
            ))}
          </div>

          {/* *****clubs section ****** */}

          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 text-center font-bold"
                style={{ fontFamily: "Georgia", color: "#880e4f" }}
              >
                Research cell
              </Typography>

              <Typography className="font-georgia mb-8 flex h-full items-center text-blue-gray-500">
                The ACM-W Research Cell at USAR College is a dynamic hub for
                students to engage in cutting-edge research across various
                domains of computer science. Embracing diversity and inclusion,
                the cell empowers students through hands-on experiences and
                align their research with real-world industry challenges.
              </Typography>
            </div>

            <CardComponent
              imageSrc="/img/research.jpeg.jpg"
              memberName="Shubhangi Mishra"
            />
          </div>

          {/* end of the row */}

          <div className="mt-32 flex flex-wrap items-center">
            <CardComponent
              imageSrc="/img/icpc.jpeg.jpg"
              memberName="Sia Gupta"
            />
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 text-center font-bold"
                style={{ fontFamily: "Georgia", color: "#880e4f" }}
              >
                ICPC
              </Typography>

              <Typography className="font-georgia mb-8 flex h-full items-center text-blue-gray-500">
                Immerse yourself in the dynamic world of competitive programming
                through the ICPC chapter at ACM-W USAR. Enhance critical
                thinking, problem-solving, and algorithmic mastery by
                participating in thrilling coding challenges. Connect with a
                vibrant community of programmers.
              </Typography>
            </div>
          </div>

          {/* //end of the row */}

          <div className="mt-8 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 text-center font-bold"
                style={{ fontFamily: "Georgia", color: "#880e4f" }}
              >
                Innovate AI
              </Typography>
              <Typography className="font-georgia mb-8 flex h-full items-center text-blue-gray-500">
                Innovative AI at ACM-W USAR College emerges as a dynamic
                nucleus, propelling students towards the forefront of AI
                exploration across various domains. Fueled by diversity and
                inclusion, Innovative AI empowers individuals from all
                backgrounds to harness their intellectual curiosity and
                contribute to transformative projects.
              </Typography>
            </div>

            <CardComponent
              imageSrc="/img/ai.jpeg.jpg"
              memberName="Tejasvi Arneja"
            />
          </div>
          {/* end of the row */}

          <div className="mt-8 flex flex-wrap items-center">
            <CardComponent
              imageSrc="/img/robo.jpg"
              memberName="Priyasvi Sharma"
            />
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 text-center font-bold"
                style={{ fontFamily: "Georgia", color: "#880e4f" }}
              >
                RobIOTics
              </Typography>

              <Typography className="font-georgia mb-8 flex h-full items-center text-blue-gray-500">
                RobIOTics, a vibrant division of ACM-W at USAR College, unites
                the worlds of robotics, information technology (IT), and robotic
                process automation. Our goal is to cultivate a strong electronic
                community by sharing insights and hosting events that delve into
                these cutting-edge fields.
              </Typography>
            </div>
          </div>

          {/* end of the row */}

          <div className="mt-8 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 text-center font-bold"
                style={{ fontFamily: "Georgia", color: "#880e4f" }}
              >
                DevSource
              </Typography>
              <Typography className="font-georgia mb-8 flex h-full items-center text-blue-gray-500">
                ACM-W USAR's DevSource stands as a dynamic haven, propelling
                students into the forefront of computer science exploration.
                Rooted in diversity and inclusivity, Dev Source emboldens
                students of every background to pursue their inquisitiveness and
                contribute to impactful ventures.
              </Typography>
            </div>

            <CardComponent
              imageSrc="/img/devsource.jpg"
              memberName="Khushbu Rai"
            />

            {/* end of the row */}
          </div>

          <div className="mt-8 flex flex-wrap items-center">
            <CardComponent
              imageSrc="/img/cyberchain.jpeg.jpg"
              memberName="------"
            />
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 text-center font-bold"
                style={{ fontFamily: "Georgia", color: "#880e4f" }}
              >
                CyberChain
              </Typography>

              <Typography className="font-georgia mb-8 flex h-full items-center text-blue-gray-500">
                CyberChain, a vital arm of ACM at USAR, focuses on cryptography,
                cybersecurity, and blockchain. We believe in proactive
                education, imparting cybersecurity knowledge to children and
                equipping them to navigate the digital realm safely. Through
                hands-on learning, we nurture expertise in cryptography and
                blockchain, laying a robust foundation for students.
              </Typography>
            </div>
          </div>

          {/* end of the row */}
          <div className="mt-8 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 text-center font-bold"
                style={{ fontFamily: "Georgia", color: "#880e4f" }}
              >
                Canvas
              </Typography>
              <Typography className="font-georgia mb-8 flex h-full items-center text-blue-gray-500">
                Within ACM-W USAR College, Canvas serves as an interactive
                masterpiece, guiding students through a dynamic learning
                journey. Rooted in accessibility, Canvas empowers learners of
                all backgrounds to engage with educational content seamlessly,
                fostering a collaborative environment.
              </Typography>
            </div>

            <CardComponent
              imageSrc="/img/canvas.jpg"
              memberName="Vanshika Gupta"
            />
          </div>

          {/* end of the row */}

          <div className="mt-8 flex flex-wrap items-center">
            <CardComponent imageSrc="/img/game.jpeg.jpg" memberName="-------" />
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 text-center font-bold"
                style={{ fontFamily: "Georgia", color: "#880e4f" }}
              >
                enGame
              </Typography>

              <Typography className="font-georgia mb-8 flex h-full items-center text-blue-gray-500">
                EnGame at ACM-W USAR College stands as a spirited arena,
                propelling students towards the forefront of game development
                and design. Rooted in inclusivity, EnGame empowers individuals
                from diverse backgrounds to unleash their creative passion and
                contribute to immersive gaming projects.
              </Typography>
            </div>
          </div>
          {/* end of the row */}
          <div className="mt-8 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h2"
                className="mb-3 text-center font-bold"
                style={{ fontFamily: "Georgia", color: "#880e4f" }}
              >
                Lens
              </Typography>
              <Typography className="font-georgia mb-8 flex h-full items-center text-blue-gray-500">
                Lens at ACM-W USAR College serves as a vibrant focal point,
                guiding students into the realm of advanced research across
                diverse fields of computer science. Embracing inclusivity, Lens
                empowers individuals from diverse backgrounds to nurture their
                intellectual inquisitiveness and actively contribute to
                transformative undertakings.
              </Typography>
            </div>

            <CardComponent
              imageSrc="/img/lens.jpg"
              memberName="------"
              position="Lead"
            />
          </div>
          {/* end of the row */}
        </div>
      </section>
    </>
  )
}

