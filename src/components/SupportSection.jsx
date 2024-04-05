import SupportCard from "./SupportCard";

function SupportSection(props) {
  return (
    <div className="bg-[#fcf8f5] pt-10">
      <div className="w-[90%] m-auto flex ">
        <div className="w-[50%]  p-[100px]">
          <img src="/support.png" alt="" />
        </div>

        <div className="w-[50%] p-[100px]">
          <div className="w-[253px] rounded-3xl bg-white h-[40px] text-[12px] p-3 flex  shadow-lg ">
            <div className="pt-1 mx-1">
              {" "}
              <img src="/orange-star.png" alt="" />
            </div>
            <p>
              Speak to a{" "}
              <span className="text-[#F37920]">recommended specialist</span>
            </p>
          </div>
          <div className="text-[48px] leading-[50.4px] mt-5">
            <p>We are here to</p>
            <p>
              <span className="text-[#F37920]">offer support</span>
            </p>
          </div>
          <p className="text-[#797979] text-[10px] font-[500] mt-3">
            Lifestyle medicine encompasses a broad spectrum of factors,
            including diet, exercise, stress management, sleep patterns, social
            connections, and substance use.
          </p>
          <div className="mt-10">
            <SupportCard
            title={"Trained Professionals"}
            description={"Lifestyle medicine encompasses a broad spectrum of factors, including diet, exercise, stress "}
            />
            <SupportCard
            title={"24/7hr Support"}
            description={"Lifestyle medicine encompasses a broad spectrum of factors, including diet, exercise, stress  "}
            />
            <SupportCard
            title={"Follow ups and Recommendations"}
            description={"Lifestyle medicine encompasses a broad spectrum of factors, including diet, exercise, stress "}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportSection;
