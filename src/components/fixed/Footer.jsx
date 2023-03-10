import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <nav className='footer-nav'>
          <ul className="footer-nav__list">
            <Link className='footer-nav__link' to='/'>Home</Link>
            <Link className='footer-nav__link' to='/post'>Post</Link>
            <Link className='footer-nav__link' to='/about'>About</Link>
          </ul>
        </nav>
        <p className='footer__copyright'>&copy; Copyright. 2023</p>
    </footer>
  )
}

export default Footer
