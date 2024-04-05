function Footer() {
  return (
    <div className="pt-20">
      <div className="w-[90%] m-auto flex justify-between mb-[100px]">
        <div className="w-[446.65px]">
          <img src="/footer-logo.png" alt="" />
          <p className="text-[#9D9D9E] text-[16px] font-[400]">
            At Choose Life, we understand that what goes into your body is the
            most important part of your health.{" "}
          </p>
        </div>
        <div className="flex justify-between w-[550px]">
            <div>
                <p className="text-[20.89px] font-500] text-[#FDB913] mb-3">Site Links</p>
                <div className="flex mb-3">
                   <div><img src="/home-icon.png" alt="" /></div>
                    <a href="#Home"className="text-[13.66px] text-[#000000B0] font-[400] pt-1 mx-2">Home</a>
                </div>
                <div className="flex mb-3">
                   <div><img src="/pillar-icon.png" alt="" /></div>
                    <a href="#Home"className="text-[13.66px] text-[#000000B0] font-[400] pt-1 mx-2">Choose Life Pillars</a>
                </div>
                <div className="flex mb-3">
                   <div><img src="/about-us-icon.png" alt="" /></div>
                    <a href="#Home"className="text-[13.66px] text-[#000000B0] font-[400] pt-1 mx-2">About Us</a>
                </div>
            </div>
            <div>
                <p className="text-[20.89px] font-500] text-[#FDB913] mb-3">Contact Us</p>
                <div className="flex mb-3">
                   <div><img src="/phone-icon.png" alt="" /></div>
                    <a href="#Home"className="text-[13.66px] text-[#000000B0] font-[400] pt-1 mx-2">0815 345 7789</a>
                </div>
                <div className="flex mb-3">
                   <div><img src="/at-icon.png" alt="" /></div>
                    <a href="#Home"className="text-[13.66px] text-[#000000B0] font-[400] pt-1 mx-2">Info@chooselife.com</a>
                </div>
                <div className="flex mb-3">
                   <div><img src="/address-icon.png" alt="" /></div>
                    <a href="#Home"className="text-[13.66px] text-[#000000B0] font-[400] pt-1 mx-2">1 , Ajayi Road , Owerri</a>
                </div>
            </div>
            <div>
                <p className="text-[20.89px] font-500] text-[#FDB913] mb-3">Social Media</p>
                <div className="flex mb-3">
                   <div><img src="/twitter-icon.png" alt="" /></div>
                    <a href="#Home"className="text-[13.66px] text-[#000000B0] font-[400] pt-1 mx-2">Twitter</a>
                </div>
                <div className="flex mb-3">
                   <div><img src="/facebook-icon.png" alt="" /></div>
                    <a href="#Home"className="text-[13.66px] text-[#000000B0] font-[400] pt-1 mx-2">Facebook</a>
                </div>
                <div className="flex mb-3">
                   <div><img src="/instagram-icon.png" alt="" /></div>
                    <a href="#Home"className="text-[13.66px] text-[#000000B0] font-[400] pt-1 mx-2">Instagram</a>
                </div>
            </div>
        </div>
      </div>
      <div className="bg-[#2EC4B6] text-center text-white p-10">
        <p>&copy; 2020 Choose Life Ltd. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
