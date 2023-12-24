import React, { useState } from "react";

export const Event = () => {
  const [activeTab, setActiveTab] = useState("second"); // Default to Full Stack Projects

  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };

  const isTabActive = (tabKey) => {
    return activeTab === tabKey;
  };

  return (
    <>
      <section className="project" id="project">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <div className="animated_animated animate__slideInUp">
                  <h2>EVENTS</h2>
                  <p>Reflecting on significant past events by ACM-W.</p>
                </div>
              </div>
              <div className="nav-pills mb-5 justify-content-center align-items-center nav nav-pills" id="pills-tab" role="tablist">
                <div className="nav-item">
                  <a
                    role="tab"
                    data-rr-ui-event-key="first"
                    id="projects-tabs-tab-first"
                    aria-controls="projects-tabs-tabpane-first"
                    aria-selected={isTabActive("first")}
                    className={`nav-link ${isTabActive("first") ? "active" : ""}`}
                    tabIndex={isTabActive("first") ? 0 : -1}
                    href="javascript:void(0)"
                    onClick={() => handleTabClick("first")}
                  >
                    Tech 
                  </a>
                </div>
                <div className="nav-item">
                  <a
                    role="tab"
                    data-rr-ui-event-key="second"
                    id="projects-tabs-tab-second"
                    aria-controls="projects-tabs-tabpane-second"
                    aria-selected={isTabActive("second")}
                    className={`nav-link ${isTabActive("second") ? "active" : ""}`}
                    tabIndex={isTabActive("second") ? 0 : -1}
                    href="javascript:void(0)"
                    onClick={() => handleTabClick("second")}
                  >
                    Non-Tech
                  </a>
                </div>
                
              </div>
              <div className="tab-content">
                
                {isTabActive("first") && (
                  <div role="tabpanel" id="projects-tabs-tabpane-first" aria-labelledby="projects-tabs-tab-first" className="fade tab-pane">
                    <div className="row">
                      
                      <div className="col-md-4 col-sm-6">
                        <div className="proj-imgbx">
                          <img src="/img/eigen.jpeg" alt="eigen"></img>
                          <div className="proj-txtx">
                            <h4>IOT Workshop</h4>
                            <span>ACM and ACM-W joined hands with @eigen_technologies_pvt_ltd to present an immersive workshop experience on the Internet of Things (IOT). Held on September 16 at the GGSIPU East Delhi campus, USAR, this workshop provided students with hands-on exposure to a world of interconnected technologies, data-driven insights, and top-notch innovation.</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="proj-imgbx">
                          <img src="/img/python.jpeg" alt="Chat Dapp"></img>
                          <div className="proj-txtx">
                            <h4>Data Preprocessing workshop</h4>
                            <span>ACM-W proudly present an online event featuring Mr. Abhijeet Tripathy, CEO at Presear Softwares Pvt Ltd. In this 2-hour workshop, Mr. Tripathy will engage with students from all branches and years, providing insights into feature engineering and data preprocessing. Get ready for a live simulation using a dataset!</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="proj-imgbx">
                          <img src="/img/matlab.jpeg" alt="Chat Dapp"></img>
                          <div className="proj-txtx">
                            <h4>Xploring Matlab</h4>
                            <span>An immersive session where Mr. Manoj Kumar, the Sr. Application Engineer at DesignTech Systems Pvt. Ltd. (New Delhi office) for the past 4+ years will ignite your knowledge with his unrivaled skills in training customers on MathWorks products, tailored to their unique applications!!</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="proj-imgbx">
                          <img src="/img/dapp.jpeg" ></img>
                          <div className="proj-txtx">
                            <h4>Journey into Decentralization World & Careers</h4>
                            <span>We recently had an online session regarding web3 on 26th June this amazing session with Tarusha Mittal, COO and Co-Founder of Dapps.Co and Meghana Jain, Senior HR at Dapps.Co. It tremendously helped us to discover the future of internet and explore the limitless possibilities of Web3 technology.</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="proj-imgbx">
                          <img src="/img/cyber.jpeg" ></img>
                          <div className="proj-txtx">
                            <h4>Cyber Security Workshop</h4>
                            <span>Workshop session on Cybersecurity with the best speakers we know - Nidhi Bansal and Rajni Bagga To learn Cyber security awareness training can also help employees: Be vigilant against cyber threats In collaboration with IBM SKILLSBUILD</span>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}

                
                {isTabActive("second") && (
                  <div role="tabpanel" id="projects-tabs-tabpane-second" aria-labelledby="projects-tabs-tab-second" className="fade tab-pane active show">
                    <div className="row">
                      <div className="col-md-4 col-sm-6">
                        <div className="proj-imgbx">
                          <img src="/img/carvaan.jpeg" alt="Algosage"></img>
                          <div className="proj-txtx">
                            <h4>Carvaan</h4>
                            <span>CARVAAN cultural event in collaboration with IISC Bangalore Organised By ACM and ACM-W Chapter.This event brought together a diverse community of students, researchers, and professionals to celebrate the power of creativity, technology, and innovation.</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="proj-imgbx">
                          <img src="/img/vd.jpeg" alt="Algosage"></img>
                          <div className="proj-txtx">
                            <h4>VidyaMitra</h4>
                            <span>A career event in collaboration with VidyaMitra, a non-profit vision to bridge the gap that often stands between ambition and available resources. The event focuses in supporting candidates from middle and lower-income backgrounds, enabling them to pursue their dreams of entering a renowned MBA/MS institution.</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="proj-imgbx">
                          <img src="/img/civil.jpeg" alt="Algosage"></img>
                          <div className="proj-txtx">
                            <h4>Talk on Career Prospects in Civil Services </h4>
                            <span>Engaging Talk on Career Prospects in Civil Services on April 28th 2023. It was an inspiring and informative talk, Shri Bhupesh Chaudhary shared his expert insights on the exciting world of Civil Services. From unlocking the path to success, to discovering tips and tricks for preparation, attendees gained valuable knowledge and inspiration to help them chart their course to a thriving career.</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6">
                        <div className="proj-imgbx">
                          <img src="/img/orientation.jpeg" alt="Algosage"></img>
                          <div className="proj-txtx">
                            <h4>ACM & ACM-w Orientation</h4>
                            <span>On September 22nd, we embarked on a journey to discover the incredible world of ACM and ACM-W! Our informative session shed light on the myriad of activities and clubs within ACM, while highlighting the fantastic benefits of joining this empowering community.</span>
                          </div>
                        </div>
                      </div>
                      
                      
                      {/* Add more Full Stack projects here */}
                    </div>
                  </div>
                )}

                
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-right" src="\img\evve.png" alt="Background"></img>
      </section>
    </>
  );
};

export default Event;
