import { FAQs } from "../components/FAQs";
import Footer from "../components/Footer";
import GetStartedSection from "../components/GetStartedSection";
import LifestyleHero from "../components/LifestyleHero";
import MoodSection from "../components/MoodSection";
import ResourcesSection from "../components/ResourcesSection";
import SupportSection from "../components/SupportSection";

function Lifestyle(props) {
  return (
    <div>
      <LifestyleHero />
      <MoodSection/>
      <SupportSection/>
      <FAQs color="#F37920" star={'/orange-star.png'}/>
      <ResourcesSection color={'#F37920'} star={'/orange-star.png'} />
      <GetStartedSection color={'#F37920'} img1={'/lifestyle-art.png'} img2={'/lifestyle-art-2.png'}/> 
      <Footer/>
      
    </div>
  );
}

export default Lifestyle;
