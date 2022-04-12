import React from 'react';
import './Footer.css';
// Get Current Year
const getYear = () => {
    return new Date().getFullYear();
}
const Footer = () => {
    return (
       <footer className='text-center mt-5 bg-dark text-white'>
           <p><small>Copyright &copy; Rakibul Hassan Robin | {getYear()}</small></p>
       </footer>
    );
};

export default Footer;