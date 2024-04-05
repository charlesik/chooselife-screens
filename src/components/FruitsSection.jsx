import React from 'react';

function FruitsSection(props) {
    return (
        <div className='pt-10 bg-[#FDFEFB]'>
           <div className='w-[90%] m-auto'>
           <div className="m-auto w-[449px] text-center">
            <div className="w-[206px] rounded-3xl bg-white h-[40px] text-[12px] p-3 flex m-auto shadow-lg ">
              <div className="pt-1 mx-1">
                {" "}
                <img src="/green-star.png" alt="" />
              </div>
              <p>
                Healthy <span className="text-[#9ECD43]">meal</span> options
              </p>
            </div>
            <div className="text-[48px] leading-[50.4px] mt-10">
              <p className="text-[##9ECD43]">Fruits & Veggies</p>
              <p>
                For the week
              </p>
            </div>
          </div>
          <div className='flex justify-between mt-10 mb-[100px]'>
            <div className='text-center w-[335px] h-[445px] mt-10'>
                <img src="/brocolli.png" alt="" className='m-auto'/>
                <div className='bg-[#8DB93E1A] w-[66px] m-auto my-5  h-[66px] rounded-[30px] pt-3 text-center font-[700] text-[24px] text-[#9ECD43]'>01</div>
                <p className='text-[#4D4D4D] text-[24px] font-[700]'>Brocolli</p>
            </div>
            <div className='text-center w-[335px] h-[445px]'>
                <img src="/carrot.png" alt="" className='m-auto'/>
                <div className='bg-[#8DB93E1A] w-[66px] m-auto my-5  h-[66px] rounded-[30px] pt-3 text-center font-[700] text-[24px] text-[#9ECD43]'>02</div>
                <p className='text-[#4D4D4D] text-[24px] font-[700]'>Carrot</p>
            </div>
            <div className='text-center w-[335px] h-[445px]'>
                <img src="/chicken-and-veggies.png" alt="" className='m-auto'/>
                <div className='bg-[#8DB93E1A] w-[66px] m-auto my-5  h-[66px] rounded-[30px] pt-3 text-center font-[700] text-[24px] text-[#9ECD43]'>03</div>
                <p className='text-[#4D4D4D] text-[24px] font-[700]'>Chicken and Veggies</p>
            </div>
          </div>
          <div>
            <div className='m-auto w-[726px] mt-[300px]'><img src="/video-frame.png" alt="" /></div>
            <div className='mt-10 mb-[200px]'>
              <p className='border-l border-l-[#9ECD43] text-[20px] font-[500] text-[#9ECD43] pl-5'> Calculate your BMI</p>
              <div className='flex justify-between mt-10'>
                <div className=''>
                  <p className='text-[40px] font-[700] text-[#000000]'>Calculate Body</p>
                  <p className='text-[40px] font-[700] text-[#000000]'>Mass Index</p>
                </div>
                <div>
                  <input type="text" className='border w-[182px] h-[73px] mx-2 border-[#8DB93E1A] rounded-sm'/>
                  <input type="text" className='border w-[182px] h-[73px] mx-2 border-[#8DB93E1A] rounded-sm'/>
                  <p className='text-[24px] font-[700] mt-10'>Your BMI is:</p>
                </div>
                <div>
                  <button className='bg-[#9ECD43] text-white w-[182px] h-[73px] rounded-lg'>Calculate</button>
                </div>
              </div>
            </div>
          </div>
            </div> 
        </div>
    );
}

export default FruitsSection;