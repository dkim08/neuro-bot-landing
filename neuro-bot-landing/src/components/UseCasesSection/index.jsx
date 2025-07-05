import './style.css';

const UseCasesSection = () => {
    return (
        <section className="usecases-section">
            <h2>Зачем нейросотрудники вашему бизнесу?</h2>
            <p className="usecases-subtitle">
                Он работает 24/7 и требует минимального внимания с вашей стороны
            </p>
            <div className="usecases-cards">
                <div className="usecase-card">
                    <h3>Сократит расходы на сотрудников</h3>
                    <p>
                        Заменяет целую команду: один бот может выполнять задачи консультанта, продавца, оператора и помощника. Оплата — фиксированная и в разы ниже затрат на персонал.
                    </p>
                </div>
                <div className="usecase-card">
                    <h3>Большой обхват клиентуры</h3>
                    <p>
                        Обрабатывает десятки запросов одновременно. Без очередей, без потерь. Ваш бизнес масштабируется без потерь в качестве сервиса.
                    </p>
                </div>
                <div className="usecase-card">
                    <h3>Ускоряет процессы</h3>
                    <p>
                        Убирает лишние шаги: сразу направляет клиента к нужному решению, минуя ожидания и пересылки. Быстрые заявки - быстрые сделки.
                    </p>
                </div>
            </div>
            <button className='usecase-btn'>Попробовать</button>

        </section>
    );
};

export default UseCasesSection;
