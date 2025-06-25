import './style.css';

const Header = () => {
    return (
        <header className='header-container '>
            <div className="container">
                <div className='logo-container'>
                    <p className='logo'>Logo</p>
                    <p className='brand'>NeiroAI</p>
                </div>
                <div className='nav-container'>
                    <a href="">Стоимость</a>
                    <a href="">Партнерам</a>
                    <a href="">FAQ</a>
                </div>
            </div>
        </header>
    )
}

export default Header;