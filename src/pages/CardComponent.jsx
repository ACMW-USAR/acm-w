import React from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

function CardComponent({ imageSrc, memberName, position }) {
  return (
    <div className="mx-auto mt-21 flex justify-center px-4 md:w-4/12 lg:mt-0">
      <Card className="shadow-lg shadow-gray-500/10 transform hover:scale-105 transition-transform duration-300">
        <CardHeader className="relative h-56">
                <img
                  alt="Card Image"
                  src={imageSrc}
                  className="h-full w-full"
                />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-3 font-bold text-center"
            style={{ color: '#880e4f' }}
          >
            {`Lead: ${memberName}`}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComponent;
