import '../css/components/Access.css';

const Access = () => {

    const accessCards = [
        {
            id: 1,
            image: "src/assets/images/icon-access-anywhere.svg",
            title: "Access your files, anywhere",
            description:
            "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        },
        {
            id: 2,
            image: "src/assets/images/icon-security.svg",
            title: "Security you can trust",
            description:
            "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        },
        {
            id: 3,
            image: "src/assets/images/icon-collaboration.svg",
            title: "Real-time collaboration",
            description:
            "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        },
        {
            id: 4,
            image: "src/assets/images/icon-any-file.svg",
            title: "Store any type of file",
            description:
            "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        },
    ];

    return (  
        <div className="container_options">
            <div className="container__cards">
                {accessCards.map((card) => (
                    <div className="card" key={card.id}>
                        <img src={card.image} alt="Image" />
                        <h2>
                            {card.title}
                        </h2>
                        <p>
                            {card.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Access;