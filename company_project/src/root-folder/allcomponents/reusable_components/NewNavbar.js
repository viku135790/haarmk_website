import React, { useState } from 'react';
import { links, social } from "./Navdata";
import "./NewNavbar.css";

const NewNavbar = () => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show);
        window.scrollTo(0, 0);
    };



return (
    <div className='conta-nav-bg'>
        <header className={show ? 'header-white' : 'nav-main-header'}>
            <div className={show ? 'logo-black' : 'logo-white'}>
                <h1>HAARMK</h1>
            </div>
            <nav className={`${show ? "mobile-nav" : "list"}`}>
                <ul>
                    {links.map((link) => {
                        const { id, url, text } = link
                        return (
                            <li key={id}>
                                <a className={show ? 'navigation-head-mob' : 'navigation-head'} href={url}>{text}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <div className='socialIcons'>
                <ul>
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon
                        return (
                            <li key={id}>
                                <a className='icon-color-nav' href={url}>{icon}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='toggleBtn'>
                <button onClick={handleClick} className='nav-btn-nav'>
                    {show ? (
                        <i className={show ? 'fa fa-times nav-icon-sp-black' : 'fa fa-times nav-icon-sp-white'}></i>
                    ) : (
                        <i className={show ? 'fa fa-bars nav-icon-sp-black' : 'fa fa-bars nav-icon-sp-white'}></i>
                    )}
                </button>
            </div>
        </header>
    </div>
)
}

export default NewNavbar