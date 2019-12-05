import React from 'react';

export default function Header() {
    return (
        <div className='header'>
            {/* first line             */}            
                <div className='phone'>Позвонить: (800) 111 11 11</div>
                <div className='info'>
                    <a href='/about' className='topbar'>О Нас |</a>
                    <a href='/contacts' className='topbar'> Контакты |</a>
                    <a href='/track' className='topbar'> Отследить</a></div>
                <div className='upMiddle'><div className='upMiddleContent'>
                    <div className='rotateLeft'/>
                    <div className='text'>ЗАПЧАСТИ ДЛЯ АВТО</div> 
                    <div className='rotateRight' />
                </div></div>
                <div className='upHeaderRight'/>                       
            {/* second line */}
                <div className='menu'>Меню | Домой | Магазин | Блог</div>
                <div className='logo'>LOGO HERE</div>
                <div className='account'>Профиль</div>
                <div className='cart'>Корзина</div>
            </div>        
        )
};