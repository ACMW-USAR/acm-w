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
import "./events.css";

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
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
  DevSource
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
  DevSource - The Development Group is a community of students highly enthusiastic about OpenSource, app, and Web Development. The club provides an opportunity for students with a common interest in development and open source to gather and develop together. DevSource organizes various events and workshops for the students to learn new technologies and build hands-on projects.
</Typography>
</div>
           
<CardComponent
              imageSrc="/img/teamwork.jpeg"
              memberName="Shubhangi ji"
              position="Lead"
            />




                {/* end of the row */}

                <CardComponent
              imageSrc="/img/teamwork.jpeg"
              memberName="Shubhangi ji"
              position="Lead"
            />


            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
  DevSource
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
  DevSource - The Development Group is a community of students highly enthusiastic about OpenSource, app, and Web Development. The club provides an opportunity for students with a common interest in development and open source to gather and develop together. DevSource organizes various events and workshops for the students to learn new technologies and build hands-on projects.
</Typography>

              
              
              
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
  DevSource
</Typography>
<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
  DevSource - The Development Group is a community of students highly enthusiastic about OpenSource, app, and Web Development. The club provides an opportunity for students with a common interest in development and open source to gather and develop together. DevSource organizes various events and workshops for the students to learn new technologies and build hands-on projects.
</Typography>
</div>
           
<CardComponent
              imageSrc="/img/teamwork.jpeg"
              memberName="Shubhangi ji"
              position="Lead"
            />

          


                {/* end of the row */}
                <CardComponent
              imageSrc="/img/teamwork.jpeg"
              memberName="Shubhangi ji"
              position="Lead"
            />


            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
  DevSource
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
  DevSource - The Development Group is a community of students highly enthusiastic about OpenSource, app, and Web Development. The club provides an opportunity for students with a common interest in development and open source to gather and develop together. DevSource organizes various events and workshops for the students to learn new technologies and build hands-on projects.
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
  DevSource - The Development Group is a community of students highly enthusiastic about OpenSource, app, and Web Development. The club provides an opportunity for students with a common interest in development and open source to gather and develop together. DevSource organizes various events and workshops for the students to learn new technologies and build hands-on projects.
</Typography>
</div>
           
<CardComponent
              imageSrc="/img/teamwork.jpeg"
              memberName="Shubhangi ji"
              position="Lead"
            />


                {/* end of the row */}

                <CardComponent
              imageSrc="/img/teamwork.jpeg"
              memberName="Shubhangi ji"
              position="Lead"
            />



            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
  DevSource
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
  DevSource - The Development Group is a community of students highly enthusiastic about OpenSource, app, and Web Development. The club provides an opportunity for students with a common interest in development and open source to gather and develop together. DevSource organizes various events and workshops for the students to learn new technologies and build hands-on projects.
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
  DevSource - The Development Group is a community of students highly enthusiastic about OpenSource, app, and Web Development. The club provides an opportunity for students with a common interest in development and open source to gather and develop together. DevSource organizes various events and workshops for the students to learn new technologies and build hands-on projects.
</Typography>
</div>
           
<CardComponent
              imageSrc="/img/teamwork.jpeg"
              memberName="Shubhangi ji"
              position="Lead"
            />



                {/* end of the row */}
                <CardComponent
              imageSrc="/img/teamwork.jpeg"
              memberName="Shubhangi ji"
              position="Lead"
            />


            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              
            <Typography
  variant="h2"
  className="mb-3 font-bold text-center"
  style={{ fontFamily: 'Georgia', color: '#880e4f' }}
>
  DevSource
</Typography>

<Typography className="mb-8 font-georgia text-blue-gray-500 flex items-center h-full">
  DevSource - The Development Group is a community of students highly enthusiastic about OpenSource, app, and Web Development. The club provides an opportunity for students with a common interest in development and open source to gather and develop together. DevSource organizes various events and workshops for the students to learn new technologies and build hands-on projects.
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
  DevSource - The Development Group is a community of students highly enthusiastic about OpenSource, app, and Web Development. The club provides an opportunity for students with a common interest in development and open source to gather and develop together. DevSource organizes various events and workshops for the students to learn new technologies and build hands-on projects.
</Typography>
</div>
           

<CardComponent
              imageSrc="/img/teamwork.jpeg"
              memberName="Shubhangi ji"
              position="Lead"
            />

                {/* end of the row */}
          </div>
         
        </div>
        
      </section>
      <section className="px-4 pt-20 pb-48 bg-gradient-to-r from-pink-400 to-white">
        <div className="container mx-auto ">
        <h1 className="text-6xl font-bold mb-8 text-black text-center uppercase font-new-bold">
          Here are our heroes</h1>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <div
              key={name}
              className="transform hover:bg-gray-200 transition duration-300 ease-in-out"
              >
              <TeamCard
                img={img}
                name={name.toUpperCase()}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-2xl fa-${name}`} />
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
      {<section className="px-4 pt-20 pb-48 bg-gradient-to-r from-gray to-black"style={{ backgroundImage: "url('public/img/WhatsApp Image 2023-09-01 at 23.35.09.jpeg')", backgroundRepeat: "repeat" }}>
        <div className="container mx-auto">

          <PageTitle heading="EVENTS">
            Reflecting on significant past events by ACM-W.
          </PageTitle>
          
          <div className="outer-box">
          <div className="box mt-8">
  
            <div className="all-box">
              <div
                className="left">
                <img src="public/img/WhatsApp Image 2023-08-27 at 22.00.55.jpeg" alt="dapps.co & hutlers.in" />
                
              </div>

              <div className="right transition-transform hover:scale-105">
              <span class="text-1xl font-bold"><p>Journey into deccentraliazation world & careers </p></span>
              <p class="text-black transition-colors duration-300 hover:text-gray-700"><br />
    <span class="block">A tech seminar in association with dapps.co & hustlers.in</span><br />

    <span class="block">DATE - 26 June 2023</span></p>
              </div>
            </div>
          </div>
          <div class="box mt-8">
            <div className="all-box">
              <div
                className="left">
                <img src="public/img/WhatsApp Image 2023-08-27 at 22.01.44.jpeg" alt="CARVAAN" />
              </div>

              <div className="right transition-transform hover:scale-105" >
              <span class="text-1xl font-bold"><p>CARVAAN cultural event (PRAVEGA) </p></span>
              <p class="text-black transition-colors duration-300 hover:text-gray-700"><br />
    <span class="block">By IISC BANGALORE</span><br />

    <span class="block">DATE-10nth June 2023</span></p>
                
              </div>
            </div>
          </div>
          <div class="box mt-8">
            <div className="all-box">
              <div
                className="left">
                <img src="public/img/WhatsApp Image 2023-08-27 at 22.01.08.jpeg" alt="Xploring Matlab" />
              </div>

              <div className="right transition-transform hover:scale-105">
              <span class="text-1xl font-bold"><p>XPLORING MATLAB </p></span>
              <p class="text-black transition-colors duration-300 hover:text-gray-700"><br />
    <span class="block">With Mr. Manoj Kumar,Sr. Application Engineer at Design Tech System Pvt.Ltd</span><br />

    <span class="block">DATE-05 June 2023</span></p>
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>
      /* <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto h-100 w-100">
          <PageTitle heading="PAST EVENTS">
            Reflecting on significant past events by ACM-W.
          </PageTitle>
          <div className="mx-auto mt-10 mb-24  grid grid-cols-1 gap-20  md:grid-cols-2 lg:grid-cols-3" 
>

            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="pink"
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
          </div>
      </section> */}
      
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
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
