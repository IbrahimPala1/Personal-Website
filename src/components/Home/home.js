import { Link } from 'react-router-dom';
import './home.scss';
import FirstLetter from '../../assets/images/letter_i2.png';
import AnimatedLetters from '../AnimatedLetters/letters'
import { useState, useEffect }  from 'react'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['b', 'r', 'a', 'h', 'i', 'm']

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass} >H</span>
                <span className={`${letterClass} _12`} >i,</span>
                <br/>
                <span className={`${letterClass} _13`} >I</span>
                <span className={`${letterClass} _14`} >'m</span>
                <img src={FirstLetter} alt="developer"/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                </h1>
                <br/>
                <h2>Full Stack Engineer</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home