import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ imgSrc, title, description }) {
  const gradientClass = "../public/img/pink2.jpeg";
  const transitionClass = "transition-opacity duration-1000 ease-out opacity-100 hover:opacity-0  ";



  return (


    <div className="flex justify-center items-center h-screen">



      <Card className={`rounded-2xl shadow-lg shadow-gray-500/10 ${gradientClass}`}
        style={{
          width: "280px", // Change the width here
          height: "300px",
          margin: "90px",
          backgroundImage: "url('/img/pink2.jpg')"
        }}>

        <div className={transitionClass}></div>
        <CardBody className={`px-8 text-center ${transitionClass}`}>





          <img src={imgSrc}></img>
          <Typography variant="h5" className="mb-2" color="blue-gray">
            {title}
          </Typography>
          <Typography className="font-normal text-blue-gray-600">
            {description}
          </Typography>
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
  icon: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
