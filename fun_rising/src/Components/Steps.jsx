import React from "react";
import step1 from "../Assets/img/step-1.png";
import step2 from "../Assets/img/step-2.png";
import step3 from "../Assets/img/step-3.png";
import step4 from "../Assets/img/step-4.png";

function Steps() {
  return (
    <div>
      <section className="step-bg mt-5">
        <div id="step-bg-color" className="p-3">
          <div className="container">
            <h2 className="pt-5 tittle">
              Apply in four easy steps <br />{" "}
              <span className="text-white">
                Fast & Easy Application Process.
              </span>
            </h2>
            <div className="row pt-5">
              <div className="col-md-3 mt-3">
                <div className="bg-white cards ">
                  <div className="py-3 px-4">
                    <p className="fs-3 font-style">Step 1</p>
                    <img src={step1} className="pt-2" alt="" />
                    <p className="fs-5 pt-3 fw-semibold font-style font-color">
                      Contact us first Reach us @ 73973 12482
                    </p>
                    <div className="justify-content-center d-flex pt-5">
                      <button className="py-2 px-3 border-0 bg-primary rounded-3 text-white font-style button-color ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="bg-white cards ">
                  <div className="py-3 px-4">
                    <p className="fs-3 font-style">Step 2</p>
                    <img src={step4} className="pt-2" alt="" />
                    <p className="fs-5 pt-2 fw-semibold font-style font-color">
                      Consult with us We'll ask you all the right questions
                    </p>
                    <div className="justify-content-center d-flex pt-3">
                      <button className="py-2 px-3 border-0 bg-primary rounded-3 text-white font-style button-color ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="bg-white cards ">
                  <div className="py-3 px-4">
                    <p className="fs-3 font-style">Step 3</p>
                    <img src={step2} className="pt-2" alt="" />
                    <p className="fs-5 pt-2 fw-semibold font-style font-color">
                      Submit your documents. We wil finalize your loan Amount
                    </p>
                    <div className="justify-content-center d-flex ">
                      <button className="py-2 px-3 border-0 bg-primary rounded-3 text-white font-style button-color ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="bg-white cards ">
                  <div className="py-3 px-4">
                    <p className="fs-3 font-style">Step 4</p>
                    <img src={step3} className="pt-2" alt="" />
                    <p className="fs-5 pt-2 fw-semibold font-style font-color">
                      Get Approval Become one of us by joining thousands of our
                      happy clients
                    </p>
                    <div className="justify-content-center d-flex ">
                      <button className="py-2 px-3 border-0 bg-primary rounded-3 text-white font-style button-color ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps;
