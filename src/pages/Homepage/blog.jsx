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
      <div style={{backgroundImage: "url('/img/Screenshot (1089).png')",padding:"100px"}}>
        <div className="text-center mb-8 ">
          <h2 className="text-6xl font-bold text-black ">BLOGS SECTION</h2>
          {/* <p className="text-white">Discover the latest insights and trends in the world of finance and investments.</p> */}
        </div>
        <div className="card_container">
          <div className="card_section">
            {/* Render Card component for each blog */}
            <Card
              imageSrc="\img\stonks1.jpg"
              title="Beginners Guide to Azure ML"
              writtenBy="Gauranshi Gupta"
              readMoreUrl="https://medium.com/@gauranshigupta2000/beginners-guide-to-azure-machine-learning-designer-fcfa4cbbbf30"
            />
            <Card
              imageSrc="\img\photos1.jpg"
              title="Future Of Cyber-Security"
              writtenBy="Jane Smith"
              readMoreUrl="https://example.com/future-cyber-security"
            />
              <Card
              imageSrc="\img\photos3.jpg"
              title="AI Changing The World"
              writtenBy="Alice Johnson"
              readMoreUrl="https://example.com/future-cyber-security"
            />
            <Card
              imageSrc="\img\photos4.jpg"
              title="Digital marketing strategies"
              writtenBy="Bob Thompson"
              readMoreUrl="https://example.com/future-cyber-security"
            />
            <Card
              imageSrc="\img\photos2.jpg"
              title="7 strategies to manage "
              writtenBy="Emily Davis"
              readMoreUrl="https://example.com/future-cyber-security"
            />
            <Card
              imageSrc="\img\photos5.jpg"
              title="To manage your business"
              writtenBy="Michael Brown"
              readMoreUrl="https://example.com/future-cyber-security"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;


