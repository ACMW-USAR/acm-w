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
import CardComponent from "./CardComponent"; // Import the CardComponent from the same directory

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/public/img/event1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Your story starts with us.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                <strong>
                  ACM-W : Supporting, Celebrating, and Advocating for Women in
                  Computing
                </strong>
              </Typography>
            </div>
          </div>
        </div>
      </div>

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
      <section
        className="from-gray bg-gradient-to-r to-black px-4 pb-48 pt-20"
        style={{ backgroundColor: "white", backgroundRepeat: "repeat" }}
      >
        <div className="container mx-auto">
          <PageTitle heading="EVENTS">
            Reflecting on significant past events by ACM-W.
          </PageTitle>
          <br></br>

          <div className="b-container">
            <div className="box mt-8">
              <div className="b-card-container">
                <div className="b-card">
                  <img
                    src="public/img/WhatsApp Image 2023-08-27 at 22.00.55.jpeg"
                    alt="dapps.co & hutlers.in"
                  />

                  <div className="b-infos transition-transform hover:scale-105">
                    <span class="b-text text-center font-bold">
                      <p>Journey into deccentraliazation world & careers </p>
                    </span>
                    <p class="text-center transition-colors duration-300 hover:text-gray-700">
                      <br />
                      <span class="block">
                        A tech seminar in association with dapps.co &
                        hustlers.in
                      </span>
                      <br />

                      <span class="block">DATE - 26 June 2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="box mt-8">
              <div className="b-card-container">
                <div className="b-card">
                  <img
                    src="public/img/WhatsApp Image 2023-08-27 at 22.01.44.jpeg"
                    alt="CARVAAN"
                  />

                  <div className="b-infos transition-transform hover:scale-105">
                    <span class="text-center font-bold">
                      <p>
                        CARVAAN cultural event <br></br>(PRAVEGA){" "}
                      </p>
                    </span>
                    <p class="text-center transition-colors duration-300 hover:text-gray-700">
                      <br />
                      <span class="block">By IISC BANGALORE</span>
                      <br />

                      <span class="block">DATE-10 June 2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="box mt-8">
              <div className="b-card-container">
                <div className="b-card">
                  <img
                    src="public/img/WhatsApp Image 2023-08-27 at 22.01.08.jpeg"
                    alt="Xploring Matlab"
                  />

                  <div className="b-infos transition-transform hover:scale-105">
                    <span class="text-center font-bold">
                      <p>XPLORING MATLAB </p>
                    </span>
                    <p class="text-center transition-colors duration-300 hover:text-gray-700">
                      <br />
                      <span class="block">
                        With Mr. Manoj Kumar,Sr. Application Engineer at Design
                        Tech System Pvt.Ltd
                      </span>
                      <br />

                      <span class="block">DATE-05 June 2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative"
        style={{
          backgroundImage:
            "url(https://user-images.githubusercontent.com/88860081/129482195-66030814-527a-46b7-a09d-780ca3626f4a.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-10"></div>
        <div className="relative z-10"></div>
        <PageTitle heading="Want to work with us?">
          Complete this form and we will get back to you in 24 hours.
        </PageTitle>
        <form className="text-white-700 mx-auto mt-12 max-w-3xl bg-transparent text-center">
          <div className="mb-8 flex gap-8">
            <Input
              variant="standard"
              size="lg"
              label={<span className="text-pink-500">Full Name</span>}
            />
            <Input
              variant="standard"
              size="lg"
              label={<span className="text-pink-500">Email Address</span>}
              onBlur={validate}
            />
            <Input
              variant="standard"
              size="lg"
              label={<span className="text-pink-500">Year</span>}
            />
            <Input
              variant="standard"
              size="lg"
              label={<span className="text-pink-500">Branch</span>}
            />
          </div>

          <Textarea
            variant="standard"
            size="lg"
            label={<span className="text-pink-500">Any message for us?</span>}
            rows={8}
          />

          <Button
            variant="gradient"
            size="lg"
            className="mt-8 bg-pink-500 bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-md shadow-pink-500/20 hover:bg-pink-600  hover:shadow-lg hover:shadow-pink-500/40"
          >
            Register
          </Button>
        </form>
      </section>

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}
// useEffect(() => {
//   const onclicksubmit = () => {
//     window.location.replace =
//       "https://docs.google.com/forms/d/e/1FAIpQLSfnqkBT-eNIJm7y8rXKfhtKgEV588aF4KoG4QyzYgIH_G5s3w/viewform?usp=sf_link";
//   };
//   return () => onclicksubmit;
// });

const validate = (value) => {
  const error = "";
  if (value == "") {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  if (error != "") alert(errors);
};

export default Home;
