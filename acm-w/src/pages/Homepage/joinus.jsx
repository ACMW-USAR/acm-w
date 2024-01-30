import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { PageTitle, Footer } from "@/widgets/layout";
import { useState, useEffect } from "react";
import axios from "axios";

export const Joinus = () => {
  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   year: "",
  //   branch: "",
  // });

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      console.log(fullname,email,year,branch);
      const response = await axios.post("http://localhost:8080/create", {
        fullname: fullname,
        email: email,
        year: year,
        branch: branch,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      {/* *******join us section**** */}

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
        <PageTitle
          heading="Want to work with us?"
          className="text-center text-white"
        >
          Complete this form and we will get back to you in 24 hours.
        </PageTitle>

        <div className="text-white-700 mx-auto mt-12 max-w-3xl bg-transparent">
          <div className="mb-8 space-y-4">
            <Input
              // type="text"
              variant="standard"
              size="lg"
              label={<span className="text-pink-500">Full Name</span>}
              onChange={(e) => setFullname(e.target.value)}
            />
            <Input
              // type="text"
              variant="standard"
              size="lg"
              label={<span className="text-pink-500">Email Address</span>}
              // onBlur={validate}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              // type="year"
              variant="standard"
              size="lg"
              label={<span className="text-pink-500">Year</span>}
              onChange={(e) => setYear(e.target.value)}
            />
            <Input
              // type="text"
              variant="standard"
              size="lg"
              label={<span className="text-pink-500">Branch</span>}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>

          <div className="mb-4 flex justify-center ">
            <Button
              variant="gradient"
              size="lg"
              className=" z-10 margin-left-70px mx-auto mb-4 mt-8 bg-pink-500 bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-md shadow-pink-500/20 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/40"
              type="submit"
              onClick={() => {
                handleSubmit();
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Joinus;
