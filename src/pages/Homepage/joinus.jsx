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
// import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
// import { FeatureCard, TeamCard } from "@/widgets/cards";

export const Joinus = () => {
  return (
    <>
      {/* *******join us  section**** */}

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
        <PageTitle heading="Want to work with us?" className="text-center text-white">
          Complete this form and we will get back to you in 24 hours.
        </PageTitle>
        <form className="text-white-700 mx-auto mt-12 max-w-3xl bg-transparent">
          <div className="mb-8 space-y-4">
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
            rows={6}
          />
          <div className="flex justify-center mb-4">
            
          <Button
            variant="gradient"
            size="lg"
            className="mt-8 mx-auto margin-left-70px mb-4 bg-pink-500 bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-md shadow-pink-500/20 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/40"
          >
            Register
          </Button>
          </div>
          

        </form>
      </section>
    </>
  );
};

const validate = (value) => {
  let error = "";
  if (value === "") {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  if (error !== "") alert(error);
};

export default Joinus;
