

function SupportCard({title,description}) {
    return (
        <div className="w-[308px] h-[94px] flex justify-between">
              <div className="pt-2 mr-5"><img src="/support-heart.png" alt=""/></div>
              <div>
                <p className="text-[16px] text-[#000000] font-[700]">{title}</p>
                <p className="text-[#797979] text-[10px] font-[500]">{description}</p>
              </div>

            </div>
    );
}

export default SupportCard;