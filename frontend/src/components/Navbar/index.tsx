import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>JH DSMovie</h1>
                    <a href="https://github.com/joabehenrique" className="link-unstyled">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/joabehenrique</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;