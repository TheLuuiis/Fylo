import '../css/components/Productive.css';
import Arrow from '../assets/images/icon-arrow.svg';
import ImgProductive from '../assets/images/illustration-stay-productive.png';

const Productive = () => {
    return (  
        <div className="container__productive">
            <img src={ImgProductive} alt="img__productive" />
            <div className="description__productive">
                <h1>
                    Stay productive, wherever you are
                </h1>
                <div className="text__productive">
                    <p>
                        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storae needs.
                    </p>
                    <p>
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                    </p>
                </div>
                <a href="#">
                    See how Fylo works
                    <img src={Arrow} alt="Icon__arrow" />
                </a>
            </div>
        </div>
    );
}
 
export default Productive;