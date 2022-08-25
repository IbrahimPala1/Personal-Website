import AnimatedLetters from '../AnimatedLetters/letters'
import React from 'react';
import './portfolio.scss'

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
                />
            </h1>
            </div>
            </div>
    )
    
}

export default About 