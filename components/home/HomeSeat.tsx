import React from "react";

function HomeSeat() {
  return (
    <div className="relative max-w-screen-xl mx-auto px-6 mb-40">
      <div className="hidden md:block">
        <iframe
          loading="lazy"
          className="w-full h-[695px] border-black border-x-2"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFmERQQUFQ&#x2F;view?embed"
        ></iframe>
      </div>
      <div>
        <div className="block md:hidden">
          <iframe
            loading="lazy"
            className="w-full h-[663px] border-black border-x-2"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFs1Ecr9HY&#x2F;view?embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default HomeSeat;
