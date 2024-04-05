
function MoodCard({title,description,image}) {
    return (
        <div className="w-[393px] h-[167px] border rounded-[16px] border-[#fcf8f5] flex p-10 mx-2">
              <div className="pt-2 mr-1"><img src={image} alt=""/></div>
              <div>
                <p className="text-[24px] text-[#000000] font-[700]">{title}</p>
                <p className="text-[#797979] text-[10px] font-[500]">{description}</p>
              </div>

            </div>
    );
}

export default MoodCard;