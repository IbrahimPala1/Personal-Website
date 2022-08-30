import AnimatedLetters from '../AnimatedLetters/letters'
import './project.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import acebook from '../../assets/images/acebook.jpeg'
import my_website from '../../assets/images/my-website.png'
import makersbnb from '../../assets/images/makersbnb.png'
import bean from '../../assets/images/bean.jpg'
// import Logo from './Logo/logo'
import Loader from 'react-loaders'
import bank from '../../assets/images/bank-tech.png'

const Projects = () => {
    return (
        <>
        <div2 className='mains'>
        <div2 className="container about-page">
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
            <Button href={'https://github.com/IbrahimPala1/acebook-node-priceless'} className='button' variant="primary">View Code!</Button>
        </Card.Body>
        </Card>
        <Card className='card_2'>
        <Card.Title className='title'>Loyal Bean</Card.Title>
        <Card.Img className='image' variant="top" src={bean} />
        <Card.Body>
            <Card.Text className='text'>
            Had enough of loyalty cards? So have we! Welcomne to loyal bean where
             you can collect beans from your local coffee shops and earn rewards!
            </Card.Text>
            <Button href={'https://github.com/IbrahimPala1/bean-app'}className='button' variant="primary">View Code!</Button>
        </Card.Body>
        </Card>
        <Card className='card_4'>
        <Card.Title className='title'>MakersBnB</Card.Title>
        <Card.Img className='image' variant="top" src={makersbnb} />
        <Card.Body>
            <Card.Text className='text'>
            Need a place to stay during your holiday? Welcome to MakersBnB, where you can rent beautiful rooms and apartments with the click of a button!
            </Card.Text>
            <Button className='button' href='https://github.com/IbrahimPala1/makersbnb' variant="primary" >View Code!</Button>
        </Card.Body>
        </Card>
          <Card className='card_3'>
          <Card.Title className='title'>My Website</Card.Title>
        <Card.Img className='image' variant="top" src={my_website} />
        <Card.Body>
            <Card.Text className='text'>
            My very own website!
            </Card.Text>
            <Button className='button' href='https://github.com/IbrahimPala1/personal-website' variant="primary" >View Code!</Button>
        </Card.Body>
        </Card>
        <Card className='card_5'>
        <Card.Title className='title'>Gilded Rose</Card.Title>
        <Card.Img className='image' variant="top" src={acebook} />
        <Card.Body>
            <Card.Text className='text'>
            Need a place to stay during your holiday? Welcome to MakersBnB, where you can rent beautiful rooms and apartments with the click of a button!
            </Card.Text>
            <Button className='button' href='https://github.com/IbrahimPala1/makersbnb' variant="primary" >View Code!</Button>
        </Card.Body>
        </Card>
        <Card className='card_6'>
        <Card.Title className='title'>Bank Tech test</Card.Title>
        <Card.Img className='image' variant="top" src={bank} />
        <Card.Body>
            <Card.Text className='text'>
            A TDD app simulating creation of a bank account for a tech test.
            </Card.Text>
            <Button className='button' href='https://github.com/IbrahimPala1/bank-tech-test' variant="primary" >View Code!</Button>
        </Card.Body>
        </Card>
         {/* <Logo/> */}
    </div2>
    </div2>
    <Loader type='pacman'/>
    </>
    );
}

export default Projects 