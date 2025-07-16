import {featuresSectionContent, sectionTitle, buttonText} from './meta.js';
import './style.css';
import CardsContentSection from "../../components/Sections/CardsContent/index.jsx";

const FeaturesSection = () => {
    const sectionAction = () => {
        console.log(`Click to button of section ${sectionTitle}`)
    }

    
    return (
        <CardsContentSection
            title={sectionTitle}
        >
            <div className="futures-cards-container">
                {featuresSectionContent.map((card, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-card-content">
                            <h3>{card.title}</h3>
                            <div className="feature-card-content-text">
                                <h5>{card.subtitle}</h5>
                                <p>{card.description}</p>
                            </div>
                        </div>
                        <button onClick={sectionAction}>{card.buttonText}</button>
                    </div>
                ))}
            </div>
        </CardsContentSection>
    );
};

export default FeaturesSection;