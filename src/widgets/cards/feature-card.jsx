import PropTypes from "prop-types";
import {
  Card,
  CardBody,

} from "@material-tailwind/react";

export function FeatureCard({ imgSrc, title, description }) {
  const gradientClass = "../public/img/OIP(1).jpeg";
  const transitionClass = "transition-opacity duration-1000 ease-out opacity-100   ";



  return (


    <div className="flex justify-center items-center ">



      <Card className={`rounded-2xl shadow-lg shadow-gray-500/10 ${gradientClass}`}
        style={{
          width: "450px", // Change the width here
          height: "250px",
          margin: "90px",
          backgroundImage: "url('/img/fc.jpeg')",
          background:"cover",
          
          // backgroundColor:"white"
        }}>

        <div className={transitionClass}></div>
        <CardBody className={`px-8 text-center ${transitionClass}`}>





        <div className="flex">
      <img src={imgSrc} alt={title} className=" w-1/1.75 lg:w-1/2" />
      <div className="w-1/1.2 p-10 lg:w-1/2 p-10">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
        </CardBody>
      </Card>
    </div>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
 
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
