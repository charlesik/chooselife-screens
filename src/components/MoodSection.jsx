import React from 'react';
import MoodCard from './MoodCard';

function MoodSection(props) {
    return (
        <div className="pt-10">
        <div className="w-[90%] m-auto mb-[100px]">
          <div className="m-auto w-[449px] text-center">
            <div className="w-[135px] rounded-3xl bg-white h-[40px] text-[12px] p-3 flex m-auto shadow-lg ">
              <div className="pt-1 mx-1">
                {" "}
                <img src="/orange-star.png" alt="" />
              </div>
              <p>
                Mood <span className="text-[#F37920]">tracker</span>
              </p>
            </div>
            <div className="text-[48px] leading-[50.4px] mt-10">
              <p>What is your</p>
              <p>
                <span className="text-[#F37920]">mood</span> today?
              </p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mt-10">
              <MoodCard
                title="Sad"
                description="Feeling down or unhappy in response to grief, discouragement or disappointment; if ongoing, may indicate depression."
                image="sad.png"
              />
              <MoodCard
                title="Unhappy"
                description="Overthinking is a common habit that can lead to stress, anxiety, and decision-making paralysis"
                image="unhappy.png"
              />
              <MoodCard
                title="Detached"
                description="The lack of one's ability to put themselves in someone else's shoes and share their emotional state"
                image="detached.png"
              />
            </div>
            <div className="flex justify-center mt-10">
              <MoodCard
                title="Confident"
                description="A feeling of having little doubt about yourself and your abilities, or a feeling of trust in someone or something"
                image="confident.png"
              />
              <MoodCard
                title="Excited"
                description="Having, showing, or characterized by a heightened state of energy, enthusiasm, eagerness,"
                image="excited.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default MoodSection;