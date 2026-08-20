import '../css/components/Testimony.css';
import ImgTestimony from '../assets/images/bg-quotes.png';

const Testimony = () => {

    const infoTestimony = [
        {
            id: 1,
            image: "src/assets/images/profile-1.jpg",
            name: "Satish Patel",
            post: "Founder & CEO, Huddle",
            description:
            "Fylo has improved our team produtivity by an order of magnitude. Since making the switch our team has become a well-oilled collaboration machine.",
        },
        {
            id: 2,
            image: "src/assets/images/profile-2.jpg",
            name: "Bruce McKenzie",
            post: "Founder & CEO, Huddle",
            description:
            "Fylo has improved our team produtivity by an order of magnitude. Since making the switch our team has become a well-oilled collaboration machine.",
        },
        {
            id: 3,
            image: "src/assets/images/profile-3.jpg",
            name: "Iva Boyd",
            post: "Founder & CEO, Huddle",
            description:
            "Fylo has improved our team produtivity by an order of magnitude. Since making the switch our team has become a well-oilled collaboration machine.",
        }
    ];

    return (  
        <div className="container__testimony">
            <img src={ImgTestimony} className='quotes' alt="ImgTestimony" />
            {infoTestimony.map((testimony) => (
                <div className="card__testimony" key={testimony.id}>
                    <p>
                        {testimony.description}
                    </p>
                    <div className="profile">
                        <img src={testimony.image} alt="user"/>
                        <div className="info__user">
                            <h4>
                                {testimony.name}
                            </h4>
                            <sub>
                                {testimony.post}
                            </sub>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Testimony;