import React from 'react';

export default function Header() {
    return (
        <div className='header'>
            {/* first line             */}            
                <div className='phone'>Call Us: (800) 111 11 11</div>
                <div className='info'>
                    <a href='/about' className='topbar'>About Us |</a>
                    <a href='/contacts' className='topbar'> Contacts |</a>
                    <a href='/track' className='topbar'> Track Order</a></div>
                
                <div className='upMiddle'><div className='rotateRight'></div>AUTOPARTS FOR YOUR CAR<div className='rotateLeft'></div></div>
                <div className='rotateLeft'></div>                
                <div className='upHeaderRight'></div>                       
            {/* second line */}
                <div className='menu'>Menu | Home | Shop | Blog | Account</div>
                <div className='logo'>LOGO HERE</div>
                <div className='account'>My Account</div>
                <div className='cart'>CART</div>
            </div>        
        )
};