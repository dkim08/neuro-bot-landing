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
          {/* Верхняя строка — сами шаги */}
          <div className="step-block">
            <div className="step-title">Создание за пару<br />минут</div>
          </div>
          <div className="step-block">
            <div className="step-title">Добавьте ваши<br />знания</div>
          </div>
          <div className="step-block">
            <div className="step-title">Интеграция<br />сразу</div>
          </div>

          {/* Нижняя строка — точки между шагами */}
          <div className="dots-row">
            <div className="dot-spacer" />
            <div className="step-dot" />
            <div className="dot-spacer" />
            <div className="step-dot" />
            <div className="dot-spacer" />
          </div>
        </div>

        <div className="integration-content">
          <div className="photo-box">
            <div className="photo">Фото</div>
          </div>
          <div className="steps-list">
            <ol>
              <li>Дайте нейросотруднику имя и опишите его функциональные обязанности и особенности поведения – всё простым языком.</li>
              <li>Добавьте вашу базу знаний: загрузите документы Word, Excel, PDF.</li>
              <li>Моментально подключите свой сервис.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
