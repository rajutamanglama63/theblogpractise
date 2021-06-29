import React from 'react'
import './artsContent.css'
import {Link} from 'react-router-dom'
import{Button, Paper} from '@material-ui/core'
import useStyles from './style'

const ArtsContent = ({art}) => {
    const classes = useStyles();
    return (
        <div>
            <div className="container">
                <div className="home_content">
                    <div className="left">
                        <Paper className={classes.paper}>
                            <Link to="/singleart" className="link">
                                <h1>{art.title}</h1>
                            </Link>
                            <img style={{margin : "1rem 0"}} src={art.picture} alt="foto" />
                            <span>{art.date}</span>
                            <p className={classes.rightParagraph}>
                                {art.blogDescription}
                            </p>
                            <div className={classes.line}></div>
                            
                        </Paper>
                        <div className={classes.load}>
                            <Button variant="text" size="medium" color="default" >Load more...</Button>
                        </div>
                    </div>
                    <div className="right">
                        <Paper className={classes.paper}>
                            <h2>Nepal's stock Market</h2>
                            <img style={{margin : "1rem 0"}} src="https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=300" />
                            <p className={classes.paragraph}>
                                Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make 
                                a type specimen book.
                            </p>
                            <div className={classes.line}></div>
                            <h2>Nepal  Book festival</h2>
                            <img style={{margin : "1rem 0"}} src="https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <p className={classes.paragraph}>
                                Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make 
                                a type specimen book.
                            </p>
                            <div className={classes.line}></div>
                        </Paper>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ArtsContent
