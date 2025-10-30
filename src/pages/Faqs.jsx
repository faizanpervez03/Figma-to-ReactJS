import React from "react";
import GeneralInfo from "../components/Faqs/GeneralInfo";
import AskQuestionForm from "../components/Faqs/AskQuestionForm";
import Breadcrumb from "../components/Breadcrumb";

const Faqs = () => {
  return (
    <>
    <Breadcrumb />

    <div className="flex flex-col sm:w-7xl sm:!mx-auto md:flex-row justify-between gap-10 !px-6 sm:!mt-12 md:!px-20 !py-10 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2">
        <GeneralInfo />
      </div>

      {/* Right Section */}
      <div className="md:w-[38%] bg-[#f9f9ff] p-6 rounded-sm shadow-sm">
        <AskQuestionForm />
      </div>
    </div>
    
      <div className=' !mt-8 !mb-8 flex justify-center !p-2'>

        <img src="./images/companies-image.png" alt="" className="w-[80%] sm:w-[60%]" />
      </div>
    </>
  );
};

export default Faqs;
