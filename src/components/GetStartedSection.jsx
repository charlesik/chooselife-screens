

function GetStartedSection({color,img1,img2}) {
    return (
        <div className="flex justify-between bg-[#fcf8f5]">
            <div><img src={img1} alt="" /></div>
            <div className="p-[100px] text-center">
                <p className="text-[40px] font-[700]">Ready to <span className={`text-[${color}]`}>improve</span> all round <span className={`text-[${color}]`}>wellness</span></p>
                <p className="text-[18px] text-[#797979] mt-5">We got you covered</p>
            <button className={`bg-[${color}] h-[52px] w-[125px] rounded-lg mt-10`}>Get Started</button>
            </div>
            <div><img src={img2} alt="" /></div>
            
        </div>
    );
}

export default GetStartedSection;