import Link from 'next/link';

const Header = () => {
    return (
        <div className="header-items">
            <Link className='header-item' href='/'>Home</Link>
            <Link className='header-item' href='/about'>About</Link>
            <Link className='header-item' href='/contact'>Contact</Link>
        </div>
    )
}

export default Header;
