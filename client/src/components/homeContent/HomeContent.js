import React from 'react'
import './homeContent.css'
import{Button, Paper} from '@material-ui/core'
import useStyles from './style'

const HomeContent = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="container">
                <div className="home_content">
                    <div className="left">
                        <Paper className={classes.paper}>
                            <h1>Nepal's most beautiful palces to visit.</h1>
                            <img style={{margin : "1rem 0"}} src="https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <span>18 july, 2021</span>
                            <p className={classes.rightParagraph}>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make 
                                a type specimen book. It has survived not only five 
                                centuries, but also the leap into electronic typesetting, 
                                emaining essentially unchanged. It was popularised in the 
                                1960s with the release of Letraset sheets containing Lorem 
                                Ipsum passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className={classes.line}></div>

                            <h1>Nepal's most beautiful palces to visit.</h1>
                            <img style={{margin : "1rem 0"}} src="https://images.pexels.com/photos/574314/pexels-photo-574314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <span>18 july, 2021</span>
                            <p className={classes.rightParagraph}>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make 
                                a type specimen book. It has survived not only five 
                                centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 
                                1960s with the release of Letraset sheets containing Lorem 
                                Ipsum passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className={classes.line}></div>

                            <h1>Nepal's most beautiful palces to visit.</h1>
                            <img style={{margin : "1rem 0"}} src="https://images.pexels.com/photos/3419791/pexels-photo-3419791.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <span>18 july, 2021</span>
                            <p className={classes.rightParagraph}>Lorem Ipsum is simply dummy text of the printing and 
                                typesetting industry.Lorem Ipsum has been the industry's 
                                standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make 
                                a type specimen book. It has survived not only five 
                                centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 
                                1960s with the release of Letraset sheets containing Lorem 
                                Ipsum passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of Lorem Ipsum.
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

export default HomeContent
