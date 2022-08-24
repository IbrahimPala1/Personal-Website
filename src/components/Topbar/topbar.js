import './topbar.scss'
import { Link } from 'react-router-dom' 
import LogoS from '../../assets/images/logo_sub.png'

const Topbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
        </Link>
    </div>
)

export default Topbar