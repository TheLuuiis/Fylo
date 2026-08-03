import '../css/components/Header.css';
import Logo from '../assets/images/logo.svg';

const Header = () => {
    return (  
        <header>
            <nav>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <ul>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Team</a>
                    </li>
                    <li>
                        <a href="#">Sign In</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;