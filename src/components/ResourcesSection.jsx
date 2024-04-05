import ResourcesCards from "./ResourcesCards";

function ResourcesSection({color,star}) {
  return (
    <div className="pt-[200px]">
      <div className="w-[90%] m-auto mb-[100px]">
        <div className="w-[186px] rounded-3xl bg-white h-[40px] text-[12px] p-3 flex  shadow-lg ">
          <div className="pt-1 mx-1">
            {" "}
            <img src={star} alt="" />
          </div>
          <p>
            Read up on <span className={`text-[${color}]`}>helpful tips</span>
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-[48px] leading-[50.4px] mt-5">
              <p>
                Access <span className={`text-[${color}]`}>useful tips</span>
              </p>
              <p>
                and
                <span className={`text-[${color}]`}> resources</span>
              </p>
            </div>
          </div>
          <div className="w-[525px]">
            <p className=" text-[#797979] font-[500] text-[16px] ">
              Prioritizing your health today can lead to a better quality of
              life, as well as improved performance in both your personal and
              professional endeavors
            </p>
          </div>
        </div>
        <div className="mt-[80px] flex flex-wrap justify-between">
          <ResourcesCards color={color}/>
          <ResourcesCards color={color}/>
          <ResourcesCards color={color}/>
          <ResourcesCards color={color}/>
          <ResourcesCards color={color}/>
          <ResourcesCards color={color}/>
        </div>
      </div>
    </div>
  );
}

export default ResourcesSection;
