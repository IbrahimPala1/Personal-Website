import AnimatedLetters from '../AnimatedLetters/letters'
import './about.scss'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>
                Paragraph
            </p>
            <p align="LEFT">
                Paragraph
            </p>
            <p>
                Paragraph
            </p>
            </div>
            </div>
    )
}

export default About 