import React from "react";

const Title = ({ subTitle }) => {
  return (
    <div className=" py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black text-center">
          {subTitle}
        </h2>
        <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
      </div>
    </div>
  );
};

export default Title;
