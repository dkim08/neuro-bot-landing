import './style.css';

const featuresSectionContent = [
    {
        title: 'Консультант по сбору ПК',
        description: 'Собери идеальный ПК за минуты, а не часы. ' +
            'Нейробот моментально подберёт комплектующие под твой бюджет и задачи — без ошибок, без "впаривания", 24/7. ' +
            'Забудь о бесконечных форумах и сомнительных советах.',
        buttonText: 'Попробовать',
    },
    {
        title: 'Фитнес-гайд',
        description: 'Твой персональный тренер — без абонемента и перерывов. ' +
            'Бот создаст тренировочный план под твои цели: сжигание жира, набор массы или просто тонус. ' +
            'Без шаблонов, без воды — чётко, быстро и под тебя. Всегда на связи, даже в 5 утра. ',
        buttonText: 'Попробовать',
    },
    {
        title: 'Психолог',
        description: 'Разговор, который не осудит. И не опоздает. ' +
            'Наш психолог-бот всегда рядом, когда нужен. Он не устает, не перебивает и не навязывает советы. ' +
            'Просто помогает разобраться в себе — спокойно, конфиденциально и эффективно.',
        buttonText: 'Попробовать',
    },
];

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <h2>Протестируйте наших нейросотрудников</h2>
            <div className="features-container">
                {featuresSectionContent.map((card) => (
                    <div className="feature-card">
                        <div className="feature-card-content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                        <button>{card.buttonText}</button>
                    </div>

                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
