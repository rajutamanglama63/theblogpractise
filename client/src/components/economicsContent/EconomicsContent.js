import React from 'react'
import {Link} from 'react-router-dom'
import{Button, Paper} from '@material-ui/core'
import useStyles from './style'
import SideList from '../../pages/sideList/SideList'

const EconomicsContent = ({economic}) => {
    const classes = useStyles();
    return (
        <div>
            <div className="container">
                <div className="home_content">
                    <div className="left">
                        <Paper className={classes.paper}>
                            <Link to="/singleeco" className="link">
                                <h1>{economic.title}</h1>
                            </Link>
                            <img style={{margin : "1rem 0"}} src={economic.picture} alt="foto" />
                            <span>{economic.date}</span>
                            <p className={classes.rightParagraph}>{economic.blogDescription}
                            </p>
                            <div className={classes.line}></div>

                            
                        </Paper>
                        <div className={classes.load}>
                            <Button variant="text" size="medium" color="default" >Load more...</Button>
                        </div>
                    </div>
                    <div className="right">
                        <SideList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EconomicsContent
