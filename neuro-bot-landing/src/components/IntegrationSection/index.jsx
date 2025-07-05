import './style.css';

const IntegrationSection = () => {
  return (
    <section className="integration-section">
      <div className="integration-inner">
        <h2>Лёгкая интеграция в ваш бизнес</h2>
        <p className="integration-subtitle">
          Бота можно встроить в сайт, соцсети или CRM. Не требует сложной настройки и оплаты специалиста за 300к в месяц — готов к работе уже в первый день.
        </p>

        <div className="integration-steps">
          <div className="step-block">
            <div className="step-title">Создание за пару<br />минут</div>
          </div>
          <div className="step-block">
            <div className="step-title">Добавьте ваши<br />знания</div>
          </div>
          <div className="step-block">
            <div className="step-title">Интеграция<br />сразу</div>
          </div>

          <div className="step-dot dot-1" />
          <div className="step-dot dot-2" />
        </div>

        <div className="integration-content">
          <div className="photo-box">
            <div className="photo">Фото</div>
          </div>
          <div className="steps-list">
            <ol>
              <li>Дайте нейросотруднику имя и опишите его <br></br> функциональные обязанности и <br></br> особенности поведения – всё простым <br></br> языком.</li>
              <li>Добавьте вашу базу знаний: загрузите <br></br> документы Word, Excel, PDF.</li>
              <li>Моментально подключите свой сервис.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
