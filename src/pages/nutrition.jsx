import React from 'react';
import NutritionHero from '../components/NutritionHero';
import FruitsSection from '../components/FruitsSection';
import { FAQs } from '../components/FAQs';
import ResourcesSection from '../components/ResourcesSection';
import GetStartedSection from '../components/GetStartedSection';
import Footer from '../components/Footer';

function Nutrition(props) {
    return (
        <div>
            <NutritionHero/>
            <FruitsSection/>
            <FAQs color="#9ECD43" star={'/green-star.png'}/>
            <ResourcesSection color="#9ECD43" star={'/green-star.png'}/>
            <GetStartedSection color="#9ECD43" img1='/nutrition-art.png' img2='/nutrition-art-2.png'/>
            <Footer/>
        </div>
    );
}

export default Nutrition;