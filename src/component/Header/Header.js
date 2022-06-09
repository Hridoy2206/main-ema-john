import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth); 

    const handleSignOut=() =>{
        signOut(auth)
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-link'>
                <CustomLink to='/'>Shop</CustomLink>
                <CustomLink to='/order'>Order</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                {
                    user?
                    <button onClick={handleSignOut}>Sign out</button>:
                    <CustomLink to='/login'>Login</CustomLink>}
            </div>
        </nav>
    );
};

export default Header;