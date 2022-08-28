import AnimatedLetters from '../AnimatedLetters/letters'
import './about.scss'
// import Logo from './Logo/logo'
import Loader from 'react-loaders'

const About = () => {
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>
            Personal growth and development are extremely valuable to me. My whole life has been around 
            studying and developing on my personal growth and it is important for me to continue doing so 
            in my next job. Work becomes enjoyable when i am continuously learning and developing; and i do 
            not see any better way to do this than in an industry i find so fascinating to learn about.
            </p>
            <p align="LEFT">
            I also enjoy working as part of a team, therefore i value being apart of a collaborative team-focused environment. 
            I am a strong believer that in order to generate the best results there needs to be effective collaboration and equal 
            ownership of work within teams. I believe that this will not only generate effective results but will also provide a stronger 
            foundation for a positive work culture.
            </p>
            <p>
            Lastly i value space and support to work on my leadership skills. Ultimately, my greater ambitions are to become a leader 
            within the tech industry. I believe my drive, personality and work ethic gives me the foundation i need to have the potential 
            to become a successful leader.
            </p>
            </div>
            
            {/* <Logo /> */}
            </div>
            <Loader type="pacman" />
            </>
    )
}

export default About 