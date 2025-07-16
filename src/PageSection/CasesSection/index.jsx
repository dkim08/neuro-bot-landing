import CardsContentSection from "../../components/Sections/CardsContent/index.jsx";
import {buttonText, casesSectionContent, sectionSubTitle, sectionTitle} from "./meta.js";
import './style.css';

const CasesSection = () => {
    const sectionAction = () => {
        console.log(`Click to button of section ${sectionTitle}`)
    }

    return (
        <CardsContentSection
            title={sectionTitle}
            subtitle={sectionSubTitle}
            action={sectionAction}
            buttonText={buttonText}
        >
            <div className="futures-cards-container">
                {casesSectionContent.map((card, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-card-content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CardsContentSection>
    );
};

export default CasesSection;