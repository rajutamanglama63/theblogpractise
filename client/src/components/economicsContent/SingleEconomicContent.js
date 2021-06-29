import React from 'react'
import {useSelector} from 'react-redux'
import{Button, Paper, Typography, TextField, Card} from '@material-ui/core'
import useStyles from './style'

const SingleEconomicContent = ({eco}) => {
    const classes = useStyles();
    const user = useSelector(state => state.auth);
    return (
        <div>
            <div className="container">
                <div className="singlePage_content">
                    <Paper style={{marginBottom : "15px"}} className={classes.paper}>
                        <img style={{marginBottom : "1rem"}} src={eco.picture} alt="foto" />
                        <h1>{eco.title}</h1>
                        {user._id ? (
                            <>
                                <div className="authRendering">
                                    <span>{eco.date}</span>
                                </div>
                                <p>{user.username}</p>
                            </>
                        ) : (
                            <>
                                <span>{eco.date}</span>
                            </>
                        )}
                        <p className={classes.singleParagraph}>
                            {eco.blogDescription}
                        </p>
                        <div className={classes.line}></div>
                        <p className={classes.more}>More Articles</p>
                        <div className={classes.boderline}></div>
                        <div className={classes.more_section}>
                            <Card className={classes.more_links}>
                                <div className={classes.card_content}>
                                    <img className={classes.pic} width="100%" src="https://images.pexels.com/photos/21264/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                    <h3>Kasthamandav art festival held in pokhara.</h3>
                                </div>
                            </Card>
                            <Card className={classes.more_links}>
                                <div className={classes.card_content}>
                                    <img className={classes.pic}  width="100%" src="https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                    <h3>Himalayan art festival held in solokhumbu.</h3>
                                </div>
                            </Card>
                            <Card className={classes.more_links}>
                                <div className={classes.card_content}>
                                    <img className={classes.pic}  width="100%" src="https://images.pexels.com/photos/7606161/pexels-photo-7606161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                    <h3>Himalayan art festival held in solokhumbu.</h3>
                                </div>
                            </Card>
                        </div>
                        <div className={classes.boderline}></div>
                        <form autoComplete="off" noValidate>
                            <Typography style={{marginBottom : "15px"}} variant="h4">Leave a comment</Typography>
                            <TextField label="Name" variant="outlined" type="text" style={{margin : "10px 0"}} fullWidth />
                            <TextField label="Email" variant="outlined" type="text" style={{margin : "10px 0"}} fullWidth />
                            <TextField label="Comment" variant="outlined" type="text" multiline rows={4} style={{margin : "10px 0"}} fullWidth />
                            <Button variant="contained" style={{color : "#9924ff"}}>Post comment</Button>
                        </form>
                        <p className={classes.more}>2 Comment</p>
                        <div className={classes.boderline}></div>
                        <div className={classes.comment_section}>
                            <Paper className={classes.paper}>
                                <h3>Haris Chandra</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry.Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s, when an unknown 
                                    printer took a galley of type and scrambled it to make 
                                    a type specimen book.
                                </p>
                            </Paper>
                            <div className={classes.line}></div>
                            <Paper className={classes.paper}>
                                <h3>Prakash Chandra</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry.Lorem Ipsum has been the industry's 
                                    standard dummy text ever since the 1500s, when an unknown 
                                    printer took a galley of type and scrambled it to make 
                                    a type specimen book.
                                </p>
                            </Paper>
                        </div>
                        
                    </Paper>
                </div>
            </div>
        </div>
    )
}

export default SingleEconomicContent
