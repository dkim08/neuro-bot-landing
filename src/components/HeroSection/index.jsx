import './style.css';
import avatar from '../../assets/avatar.svg'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Создайте своего нейросотрудника за пару мгновений</h1>
        <p>Он работает 24/7, сократит ваши расходы на персонал и повысит конверсию клиентов на 50%.</p>
        <button className="hero-button">Создать нейросотрудника</button>
      </div>

      <div className="hero-image">
        <img src={avatar} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
