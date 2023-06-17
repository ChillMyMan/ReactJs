import './Header.css';

function Header() {
    return (
        <div className="container">
            <div className="logo"><img src="./public/public/logo.png" alt="logo" width={100} /></div>
            <div className="menu">
                <ul>
                    <li><a href="">Residencies</a></li>
                    <li><a href="">Our Value</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Get Started</a></li>
                    <li><button type="button">Contact</button></li>
                </ul>
                
            </div>
        </div>
    );
}

export default Header;
