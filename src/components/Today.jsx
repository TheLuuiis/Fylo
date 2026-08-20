import '../css/components/Today.css';

const Today = () => {
    return (  
        <div className="container__today">
            <h1>
                Get early acess today
            </h1>
            <p>
                It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
            </p>
            <div className="search">
                <input type="email" placeholder='email@example.com' required/>
                <button type='submit'>Get started for free</button>
            </div>
        </div>
    );
}
 
export default Today;