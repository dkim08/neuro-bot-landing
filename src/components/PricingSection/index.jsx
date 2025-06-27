import './style.css';

const plans = [
  {
    title: 'Start',
    subtitle: 'Идеален для малого бизнеса и тестирования',
    price: 'От X т / месяц',
    features: [
      'Подключение неограниченного количества чатов: Telegram, WhatsApp',
      'Управление ботами через личный кабинет',
      'Простая настройка: просто напиши инструкцию поведения текстом'
    ],
    note: 'Отличный выбор для малого бизнеса, консультантов и тестирования идей.'
  },
  {
    title: 'Business',
    subtitle: 'Для растущих компаний, которым нужен контроль и масштаб',
    price: 'От X т / месяц',
    features: [
      'Всё из тарифа Start',
      'Загрузка вашей Базы Знаний через документы Word, Excel или Google Drive',
      'Расширенные настройки логики диалогов',
      'Приоритезированная поддержка 24/7'
    ],
    note: 'Оптимально для интернет-магазинов, сервисных компаний и многоканального бизнеса.'
  },
  {
    title: 'Enterprise',
    subtitle: 'Максимальная гибкость и интеграции под ваш стек',
    price: 'От X т / месяц',
    features: [
      'Всё из тарифа Business',
      'Подключение вашей собственной базы данных',
      'Доступ к API: подключайте бота к своим системам, CRM, аналитике, внутренним платформам',
      'Возможность кастомных решений под ваш бизнес',
      'Личный менеджер и техподдержка'
    ],
    note: 'Выбор для крупного бизнеса, проектов с высоким трафиком или нестандартными требованиями.'
  }
];

const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h2>Сами выбирайте за что платить</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <div className="card-header">
              <h3>{plan.title}</h3>
              <p className="subtitle">{plan.subtitle}</p>
              <p className="price">{plan.price}</p>
            </div>
            <ul className="features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="buy-button">Купить</button>
            <p className="note">{plan.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;