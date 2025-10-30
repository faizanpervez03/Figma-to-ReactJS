import React from "react";

const infoData = [
  {
    title: "Eu dictumst cum at sed euismod condimentum?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
  {
    title: "Magna bibendum est fermentum eros.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
  {
    title: "Odio muskana hak eris conseekin sceleton?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
  {
    title: "Elit id blandit sabara boi velit gua mara?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
  },
];

const GeneralInfo = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#2b1a9e] !mb-6 font-[josefin_Sans]">
        General Information
      </h2>

      <div className="!space-y-8">
        {infoData.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold text-[#1a1442] !mb-4">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralInfo;
