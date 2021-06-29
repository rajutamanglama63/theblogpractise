import React from 'react';
import './header.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram'; 
import YouTubeIcon from '@material-ui/icons/YouTube';

const Header = ({click}) => {
    return (
        <div>
            <div className="header">
                <div className="header_container">
                    <div className="header_content">
                        <div className="hamburger_icon">
                            <div className="hamburger_menu" onClick={click}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="social_media">
                            <FacebookIcon size="small" color="primary" />
                            <TwitterIcon size="small" color="primary" />
                            <InstagramIcon size="small" color="primary" />
                            <YouTubeIcon size="small" color="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
