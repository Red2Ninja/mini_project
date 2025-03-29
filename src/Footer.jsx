import React from "react";



const curdate = new Date();
const year = curdate.getFullYear();

function Footer(){
    return (
    <footer>
    <p>Created by bleh</p>
    <p>Copyright {year}</p>
    </footer>
    );
}
export default Footer;
