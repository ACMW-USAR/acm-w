import React from "react";


import { PageTitle, Footer } from "@/widgets/layout";


export const Event = () => {
  return (
    <>
          {/* **********event******** */}


          <section
        className="from-gray bg-gradient-to-r to-black px-4 pb-48 pt-20"
        style={{ backgroundColor: "white", backgroundRepeat: "repeat" }}
      >
        <div className="container mx-auto">
          <PageTitle heading="EVENTS">
            Reflecting on significant past events by ACM-W.
          </PageTitle>
          <br></br>

          <div className="b-container">
            {/* <div className="box mt-8"> */}
              {/* <div className="b-card-container"> */}
                <div className="b-card">
                  <img
                    src="/img/WhatsApp Image 2023-08-27 at 22.00.55.jpeg"
                    alt="dapps.co & hutlers.in"
                  />

                  <div className="b-infos transition-transform hover:scale-105">
                    <span class="b-text text-center font-bold">
                      <p>Journey into deccentraliazation world & careers </p>
                    </span>
                    <p class="text-center transition-colors duration-300 hover:text-gray-700">
                      <br />
                      <span class="block">
                        A tech seminar in association with dapps.co &
                        hustlers.in
                      </span>
                      <br />

                      <span class="block">DATE - 26 June 2023</span>
                    </p>
                  </div>
                </div>
              {/* </div> */}
            {/* </div> */}
            {/* <div class="box mt-8"> */}
              {/* <div className="b-card-container"> */}
                <div className="b-card">
                  <img
                    src="/img/WhatsApp Image 2023-08-27 at 22.01.44.jpeg"
                    alt="CARVAAN"
                  />

                  <div className="b-infos transition-transform hover:scale-105">
                    <span class="text-center font-bold">
                      <p>
                        CARVAAN cultural event <br></br>(PRAVEGA){" "}
                      </p>
                    </span>
                    <p class="text-center transition-colors duration-300 hover:text-gray-700">
                      <br />
                      <span class="block">By IISC BANGALORE</span>
                      <br />

                      <span class="block">DATE-10 June 2023</span>
                    </p>
                  </div>
                </div>
              {/* </div> */}
            {/* </div> */}
            {/* <div class="box mt-8"> */}
              {/* <div className="b-card-container"> */}
                <div className="b-card">
                  <img
                    src="/img/WhatsApp Image 2023-08-27 at 22.01.08.jpeg"
                    alt="Xploring Matlab"
                  />

                  <div className="b-infos transition-transform hover:scale-105">
                    <span class="text-center font-bold">
                      <p>XPLORING MATLAB </p>
                    </span>
                    <p class="text-center transition-colors duration-300 hover:text-gray-700">
                      <br />
                      <span class="block">
                        With Mr. Manoj Kumar,Sr. Application Engineer at Design
                        Tech System Pvt.Ltd
                      </span>
                      <br />

                      <span class="block">DATE-05 June 2023</span>
                    </p>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default Event