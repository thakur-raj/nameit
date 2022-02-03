import React from 'react';
import './Header.css';
const Header = ({ headTitle, headerExpanded }) => {
    return (
        <div className="head-container">
            <img
                src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="HeaderImage"
                className={`head-image ${
                    headerExpanded
                        ? 'head-image-expanded'
                        : 'head-image-contracted'
                }`}
            />
            <h1
                className={`head-text ${
                    headerExpanded
                        ? 'head-text-expanded'
                        : 'head-text-contracted'
                }`}
            >
                {headTitle}
            </h1>
            {headerExpanded ? (
                <h3>
                    Welcome to Name It! <br />
                    You can use this app to generate cool names for you new
                    projects.
                    <br /> Just type in your keywords.
                </h3>
            ) : null}
        </div>
    );
};

export default Header;
