import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/letters'
// import Logo from './Logo/logo'
import Loader from 'react-loaders'
// import { useEffect, useState } from 'react'
// import my_website from '../../assets/images/contact.png'
import mail from '../../assets/images/contact.png'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'ibrahim_pala',
            'template_5zqfwjf',
            refForm.current,
            'iTEPqAkJBLVMIj03F'
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.replace('/')
            },
            () => {
                alert('Failed to send message')
            }
        )
    }
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
                <form ref={refForm} onSubmit={sendEmail}>
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
                            <input type="submit" className='flat-button' value="SEND" id='send-button'></input>
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
// const btn = document.getElementById('send-button');
// const form = document.getElementById('form')

//  btn.addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'ibrahim_pala';
//    const templateID = 'template_5zqfwjf';

//    emailjs.sendForm(serviceID, templateID, form)
//     .then(() => {
//       btn.value = 'SEND';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'SEND';
//       alert(JSON.stringify(err));
//     });
// });


export default Contact

//goes above return render 
    // const [letterClass, setLetterClass] = useState('text-animate')
    

    //  useEffect(() => {
    //      return setTimeout(() => {
    //        setLetterClass('text-animate-hover')
    //      }, 3000)
    //    }, [])