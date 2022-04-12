import React from 'react';

// Get Current Year
let getYear = () => {
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