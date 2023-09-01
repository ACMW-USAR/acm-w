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
import CardComponent from './CardComponent'; // Import the CardComponent from the same directory


export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
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
                <strong>ACM-W : Supporting, Celebrating, and Advocating for Women in Computing</strong>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4 bg-image">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ title, imgSrc, description }) => (
              <FeatureCard
                key={title}

                title={title}
                imgSrc={imgSrc}
                description={description}
              />
            ))}
          
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
<<<<<<< HEAD
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="outlined">read more</Button>
=======
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
Research cell
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
The ACM-W Research Cell at USAR College is a dynamic hub for students to engage in cutting-edge research 
across various domains of computer science. Embracing diversity and inclusion, the cell empowers students through hands-on 
experiences and align their research with real-world industry challenges. 
</Typography>
</div>
           
<CardComponent
              imageSrc="/img/research.jpeg.jpg"
              memberName="Shubhangi Mishra"
              position="Lead"
            />




                {/* end of the row */}

                <CardComponent
              imageSrc="/img/icpc.jpeg.jpg"
              memberName="Sia Gupta"
              position="Lead"
            />


            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>

ICPC
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
Immerse yourself in the dynamic world of competitive programming through the ICPC chapter at ACM-W USAR. 
Enhance critical thinking, problem-solving, and algorithmic mastery by participating in thrilling coding 
challenges. Connect with a vibrant community of programmers.
</Typography>

              
              
              
>>>>>>> clubs
            </div>

                {/* //end of the row */}

                </div>
          <div className="mt-8 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
  Innovate AI
</Typography>
<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
Innovative AI at ACM-W USAR College emerges as a dynamic nucleus, propelling students towards the forefront 
of AI exploration across various domains. Fueled by diversity and inclusion, Innovative AI empowers individuals 
from all backgrounds to harness their intellectual curiosity and contribute to transformative projects. 
</Typography>
</div>
           
<CardComponent
              imageSrc="/img/ai.jpeg.jpg"
              memberName="Tejasvi Arneja"
              position="Lead"
            />

          


                {/* end of the row */}
                <CardComponent
              imageSrc="/img/robo.jpg"
              memberName="Priyasvi Sharma"
              position="Lead"
            />


            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
RobIOTics
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
RobIOTics, a vibrant division of ACM-W at USAR College, unites the worlds of robotics, information technology 
(IT), and robotic process automation. Our goal is to cultivate a strong electronic community by sharing insights 
and hosting events that delve into these cutting-edge fields.
</Typography>

              
              
              
            </div>
            {/* end of the row */}

            </div>
          <div className="mt-8 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
  DevSource
</Typography>
<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
ACM-W USAR's DevSource stands as a dynamic haven, propelling students into the forefront of computer science 
exploration. Rooted in diversity and inclusivity, Dev Source emboldens students of every background to pursue 
their inquisitiveness and contribute to impactful ventures. 
</Typography>
</div>
           
<CardComponent
              imageSrc="/img/devsource.jpeg"
              memberName="Khushbu Rai"
              position="Lead"
            />


                {/* end of the row */}

                <CardComponent
              imageSrc="/img/cyberchain.jpeg.jpg"
              memberName="------"
              position="Lead"
            />



            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
CyberChain
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
CyberChain, a vital arm of ACM at USAR, focuses on cryptography, cybersecurity, and blockchain. We believe in
 proactive education, imparting cybersecurity knowledge to children and equipping them to navigate the digital 
 realm safely. Through hands-on learning, we nurture expertise in cryptography and blockchain, laying a robust foundation for students. 
              </Typography>
            </div>

            {/* end of the row */}
            </div>
          <div className="mt-8 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
<<<<<<< HEAD
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>

            
=======
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
Canvas
</Typography>
<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
Within ACM-W USAR College, Canvas serves as an interactive masterpiece, guiding students through a dynamic 
learning journey. Rooted in accessibility, Canvas empowers learners of all backgrounds to engage with educational
 content seamlessly, fostering a collaborative environment. 
</Typography>
</div>
           
<CardComponent
              imageSrc="/img/canvas.jpg"
              memberName="Vanshika Gupta"
              position="Lead"
            />



                {/* end of the row */}
                <CardComponent
              imageSrc="/img/game.jpeg.jpg"
              memberName="-------"
              position="Lead"
            />


            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
  enGame
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
EnGame at ACM-W USAR College stands as a spirited arena, propelling students towards the forefront of game
 development and design. Rooted in inclusivity, EnGame empowers individuals from diverse backgrounds to unleash 
 their creative passion and contribute to immersive gaming projects. 
</Typography>

              
              
              
            </div>
            {/* end of the row */}
            </div>
          <div className="mt-8 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
Lens
</Typography>
<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
Lens at ACM-W USAR College serves as a vibrant focal point, guiding students into the realm of advanced research
 across diverse fields of computer science. Embracing inclusivity, Lens empowers individuals from diverse 
 backgrounds to nurture their intellectual inquisitiveness and actively contribute to transformative undertakings.
 
</Typography>
</div>
           

<CardComponent
              imageSrc="/img/lens.jpg"
              memberName="------"
              position="Lead"
            />

                {/* end of the row */}
>>>>>>> clubs
          </div>
         
        </div>
        
      </section>
      <section className="px-4 pt-32 pb-32" style={{ backgroundImage: "url('/img/19110.jpg')", backgroundRepeat: "repeat" }}>
        <div className="container mx-auto ">
        <h1 className="text-6xl font-bold mb-8 text-black text-center uppercase font-new-bold hover:text-black-600 transform transition-transform duration-300 ease-in-out hover:scale-110">
          Meet our heroes</h1>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <div
              key={name}
              className="transform hover:bg-gray-200 hover:scale-105 hover:text-blue-600 transition-transform duration-300 ease-in-out"
              >
              <TeamCard
                img={img}
                name={<h2 className="text-2xl font-bold mb-2">{name.toUpperCase()}</h2>} 
                position={<h2 className="text-xl font-semibold">{position}</h2>}
                socials={
                  <div className="flex items-center gap-2">
                  {socials.map(({ color, name, link }) => (
                <IconButton
                   key={name}
                   color={color}
                    variant="text"
                  className="transform hover:text-gray-600 transition-transform duration-300 ease-in-out"
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
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
