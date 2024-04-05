import TopNavigation from "./TopNavigation";


function NutritionHero(props) {
    return (
        <div className="bg-[#8DB93E05] h-[736px]">
        <TopNavigation color="#9ECD43"/>
        <div className="flex w-[90%] m-auto mt-10">
          <div className=" w-[55%] px-5 py-10">
            <div className="w-[236px] rounded-3xl bg-white h-[40px] text-[12px] p-3 flex">
              <div className="pt-1 mx-1">
                {" "}
                <img src="/green-star.png" alt="" />
              </div>
              <p>
                Your No 1{" "}
                <span className="text-[#9ECD43]">preventive health tool</span>
              </p>
            </div>
            <div>
              <p className="text-[90px] font-bold leading-[98.1px]">
                <span className="text-[#9ECD43]">Fuel </span> 
                Your  <span className="text-[#9ECD43]">Body</span> Just Right
              </p>
              <div className="pr-[150px] mt-5">
              <p className="text-[#4D4D4D] ">
                Take charge of your health with our comprehensive preventive
                care solutions. Start your journey towards a healthier you
                today."
              </p> </div>
            </div>
            <div className="flex mt-[70px]">
              <div className="text-center mr-[60px]">
                <img src="/health-logo.png" alt=""/>
                <p>Health</p>
              </div>
              <div className="text-center mr-[60px]">
                <img src="/fitness-logo.png" alt=""/>
                <p>Fitness</p>
              </div>
              <div className="text-center mr-[60px]">
                <img src="/lifestyle-logo-inactive.png" alt=""/>
                <p>Lifestyle</p>
              </div>
              <div className="text-center mr-[60px]">
                <img src="/nutrition-logo.png" alt=""/>
                <p>Nutrition</p>
              </div>
            </div>
          </div>
          <div className="w-[45%]">
            <img src="/nutrition-image.png" alt="" className="h-[576.77px] w-[576.77px]" />
          </div>
        </div>
      </div>
    );
}

export default NutritionHero;