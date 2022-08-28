import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/letters'
// import Logo from './Logo/logo'
import Loader from 'react-loaders'
// import { useEffect, useState } from 'react'
// import my_website from '../../assets/images/contact.png'
import mail from '../../assets/images/contact.png'

const Contact = () => {
    // const [letterClass, setLetterClass] = useState('text-animate')
    

    //  useEffect(() => {
    //      return setTimeout(() => {
    //        setLetterClass('text-animate-hover')
    //      }, 3000)
    //    }, [])
    return (
        <>
        <div className="container contact-page"> 
        <div className='text-zone'>
            <h1>
                <AnimatedLetters strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                idx={15}
                />
            </h1>
            <p>
                Want to have a chat? Fill in the form and ill get back to you as soon as possible!
            </p>
            <div className="contact-form">
                <form>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name='subject' required />
                        </li>
                        <li>
                            <textarea placeholder="Message" name ="message" required ></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="SEND"></input>
                        </li>
                    </ul>
                </form>
                <img className='image-contact' src={mail} alt="mail"/>
            </div>
            
        </div>
        {/* <Logo /> */}
        {/* <img className='image-contact' variant="top" src={my_website} /> */}
        </div>
        <Loader type='pacman'/>
        </>
        
    )
}

export default Contact 