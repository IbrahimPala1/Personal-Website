import AnimatedLetters from '../AnimatedLetters/letters'
import './project.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import acebook from '../../assets/images/ibrahim.jpg'

const Projects = () => {
    return (
        <div className='mains'>
        <div className="container about-page">
            <h1 className='text-animate-project'>
                <AnimatedLetters
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
                />
            </h1>
        <Card className='card_1'>
        <Card.Title className="title">AceBook</Card.Title>
        <Card.Img className='image'variant="top" src={acebook} />
        <Card.Body>
            <Card.Text className='text'>
            Sign up and view your friends and families latest posts! View and 
            like all the latest posts; and be sure to leave a comments to let the world know your thoughts ! 
            </Card.Text>
            <Button className='button' variant="primary">View Code!</Button>
        </Card.Body>
        </Card>
        <Card className='card_2'>
        <Card.Title className='title'>Loyal Bean</Card.Title>
        <Card.Img className='image' variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Text className='text'>
            Had enough of loyalty cards? So have we! Welcomne to loyal bean where
             you can collect beans from your local coffee shops and earn rewards!
            </Card.Text>
            <Button className='button' variant="primary">View Code!</Button>
        </Card.Body>
        </Card>
        <Card className='card_3'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        {/* <Card className='card_4'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        <Card className='card_5'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        <Card className='card_6'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card> */}
    </div>
    </div>
    );
}

export default Projects 