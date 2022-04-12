import React from 'react';

// Get Current Year
const getYear = () => {
    return new Date().getFullYear();
}
const Footer = () => {
    return (
       <footer>
           <p><small>Copyright &copy;{getYear()}</small></p>
       </footer>
    );
};

export default Footer;