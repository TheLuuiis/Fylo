import '../css/components/Welcome.css';
import ImgWelcome from '../assets/images/illustration-intro.png';

const Welcome = () => {
    return (  
        <div className="container__welcome">
            <img src={ImgWelcome} alt="ilustration-intro"/>
            <div className="description__welcome">
                <h1>
                    All your files in one secure location. accesible anywhere.
                </h1>
                <p>
                    Fylo stores all your most important files in one sescure location. Acces them whereveryou need, share and collaborate with friends family, and co-workers.
                </p>
                <button>Get started</button>
            </div>
        </div>
    );
}
 
export default Welcome;