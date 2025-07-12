import React from 'react';
import './style.css';

const CardsContent = ({title, subtitle, children, action, buttonText}) => {
    const handleSubmit = () => {
        console.log(1);
        if (action) {
            action();
        }
    }

    return (
        <section className="cards-content-section">
            <h2>{title && title}</h2>
            <h3>{subtitle && subtitle}</h3>
            <div className="cards-content-container">
                {children}
            </div>
            {buttonText && action(
                <div className="cards-content-button-container">
                    <button onClick={handleSubmit}>{buttonText}</button>
                </div>
            )}
        </section>
    );
};

export default CardsContent;