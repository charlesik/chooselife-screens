

function ResourcesCards({color}) {
    return (
        <div className="w-[391px] border border-[#F379201A] mb-10">
            <div>
              <img src="/resource-image-2.png" alt="" />
            </div>
            <div className="p-3">
              <p className="text-[18px] text-[#4D4D4D] font-[700] leading-[26px]">
                Myths and Facts Related to the Pillars of Lifestyle Nutrition
              </p>
              <p className="text-[#797979] font-[400] leading-[27.72px]">
                Using our algorithm, we carry out a preliminary assessment to
                understand the state of your health and determine how best to
                serve you!
              </p>

              <div className=" flex mt-5 justify-between">
                <p className="text-[14px] text-[#9D9D9E] font-[400]">March 10, 2024</p>
                <a href="/" className={`text-[${color}] underline`}>Read More</a>
              </div>
            </div>
          </div>
    );
}

export default ResourcesCards;