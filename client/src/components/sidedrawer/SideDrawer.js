import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import {Button} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from 'react-redux'
import {signout} from '../../redux/actions/authAction'
import './sideDrawer.css'

const SideDrawer = ({ show, click }) => {
    const SideDrawerClass = ["side-drawer"];

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);

    if(show) {
        SideDrawerClass.push("show");
    }

    const logoutHandler = () => {
        dispatch(signout());
        history.push('/signin');
    }
    return (
        <div className={SideDrawerClass.join(" ")}>
            <div className="sidedrawer_container">
                <div className="sidedrawer_header">
                    <h1>THE BLOG</h1>
                    <Button variant="text" size="small" color="default" onClick={click}>
                        <CloseIcon size="small" color="primary" />
                    </Button>
                </div>
                {user._id ? (
                    <>
                        <ul className="sidedrawer-links" onClick={click}>
                            <li className="nav_item"><a to="#" className="nav_link">About</a></li>
                            <li className="nav_item"><a href="#" className="nav_link">Contact</a></li>
                            <li className="nav_item"><a href="#" className="nav_link">Profile</a></li>
                            <li className="nav_item">
                                <Button onClick={logoutHandler} variant="contained" color="default" size="small">
                                    Logout
                                </Button>
                            </li>
                        </ul>
                    </>
                ) : (
                    <>
                        <ul className="sidedrawer-links" onClick={click}>
                            <li className="nav_item"><a to="#" className="nav_link">About</a></li>
                            <li className="nav_item"><a href="#" className="nav_link">Contact</a></li>
                        </ul>
                    </>
                )}

                <ul className="sidedrawer-link" onClick={click}>
                    <li className="nav_item"><Link to="/" className="nav_link">Home</Link></li>
                    <li className="nav_item"><Link to="/literature" className="nav_link">Literature</Link></li>
                    <li className="nav_item"><Link to="/education" className="nav_link">Education</Link></li>
                    <li className="nav_item"><Link to="/arts" className="nav_link">Arts</Link></li>
                    <li className="nav_item"><Link to="/tourism" className="nav_link">Tourism</Link></li>
                    <li className="nav_item"><Link to="/politics" className="nav_link">Politics</Link></li>
                    <li className="nav_item"><Link to="/technology" className="nav_link">Technology</Link></li>
                    <li className="nav_item"><Link to="/economics" className="nav_link">Economics</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default SideDrawer
