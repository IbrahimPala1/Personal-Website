import { Link } from 'react-router-dom';
import './home.scss';
import FirstLetter from '../../assets/images/letter_i2.png';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br />I'm
                <img src={FirstLetter} alt="developer"/>
                brahim
                </h1>
                <br/>
                <h2>Full Stack Engineer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home