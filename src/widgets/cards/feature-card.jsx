import PropTypes from "prop-types";
import { Card, CardBody } from "@material-tailwind/react";

export function FeatureCard({ imgSrc, title, description }) {
  const gradientClass = "../public/img/OIP(1).jpeg";
  const transitionClass =
    "transition-opacity duration-1000 ease-out opacity-100   ";

  return (
    <div>
      <Card
        className={`mb-5 md:mr-5 ${gradientClass}`}
        style={{
          width:"80%",
          height:"auto",
          backgroundImage: "url('/img/fc.jpeg')",
          background: "cover",
          margin: "0 auto",
          marginBottom: "1rem",
          marginTop: "5rem",
        }}
      >
        <div className={transitionClass}></div>
        <CardBody className={`px-4 text-center md:px-8 ${transitionClass}`}>
          <div className="flex flex-col md:flex-row">
            <img
              src={imgSrc}
              alt={title}
              className="mb-4 w-full rounded-l-2xl md:mb-0 md:mr-4 md:w-1/2"
            />
            <div className="w-full md:w-1/2">
              <h1 className="mb-2 text-xl font-bold md:text-2xl lg:text-3xl xl:text-4xl">
                {title}
              </h1>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl">
                {description}
              </p>
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
