import React from "react";

// Define a reusable Card component
const Card = ({ imageSrc, title, writtenBy, readMoreUrl }) => (
  <div className="card">
    <a href={readMoreUrl} target="_blank" rel="noopener noreferrer">
      <div className="card_image"><img src={imageSrc} alt="" /></div>
      <div className="card_panel">
      <div className="card_main_title "><h2 className="font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl">{title}</h2></div>
        <div className="card_buttons flex justify-between ">
        <div className="flex-grow" style={{marginTop:"100px"}}>
          <button className=" bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">{writtenBy}</button>
        </div>
        <div className="card_readmore ml-9">
          <a href={readMoreUrl} className=" bg-blue-400 hover:bg-blue-500 text-white  py-2 px-4 ">
            Read More</a></div>
            </div>
      </div>
    </a>
  </div>
);

export const Blog = () => {
  return (
    <>
      <div 
      style={{backgroundImage: "url('/img/blog_.jpeg')",
      backgroundSize: 'cover' ,
      backgroundRepeat: 'no-repeat' ,
      backgroundPosition: 'center' ,
      minHeight: '100vh',
      padding: '20px'
            }}
            >
        <div className="text-center mb-8 ">
          <h2 className="text-6xl font-bold text-black ">BLOGS SECTION</h2>
          {/* <p className="text-white">Discover the latest insights and trends in the world of finance and investments.</p> */}
        </div>
        <div className="card_container">
          <div className="card_section">
            {/* Render Card component for each blog */}
            <Card
              imageSrc="/img/Screenshot (1220).png"
              title="Web Design with tailwind css"
              writtenBy="Gauranshi Gupta"
              readMoreUrl="https://medium.com/@gauranshigupta2000/mastering-responsive-web-design-with-tailwind-css-a-complete-guide-for-beginners-d620538aec0d"
            />
            <Card
              imageSrc="/img/Screenshot (1224).png"
              title="RoadMap to Learn AI"
              writtenBy="Benedict Neo"
              readMoreUrl="https://medium.com/bitgrit-data-science-publication/a-roadmap-to-learn-ai-in-2024-cc30c6aa6e16"
            />
              <Card
              imageSrc="/img/Screenshot (1219).png"
              title=" Supervised Learning"
              writtenBy="Gauranshi Gupta"
              readMoreUrl="https://medium.com/acm-usict/understanding-supervised-learning-a-comprehensive-guide-to-classification-and-regression-models-4d82c35a70ea"
            />
            {/* <Card
              imageSrc="\img\photos4.jpg"
              title="Digital marketing strategies"
              writtenBy="Bob Thompson"
              readMoreUrl="https://example.com/future-cyber-security"
            /> */}
            {/* <Card
              imageSrc="\img\photos2.jpg"
              title="7 strategies to manage "
              writtenBy="Emily Davis"
              readMoreUrl="https://example.com/future-cyber-security"
            /> */}
            {/* <Card
              imageSrc="\img\photos5.jpg"
              title="To manage your business"
              writtenBy="Michael Brown"
              readMoreUrl="https://example.com/future-cyber-security"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;


