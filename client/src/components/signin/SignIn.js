import login from '../../images/login.png'
import {signin} from '../../redux/actions/authAction'
import {Link, Redirect} from 'react-router-dom'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Card, TextField, Typography} from '@material-ui/core'
import useStyles from './style'

const SignIn = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const [credentials, setCredentials] = useState({
        email : "",
        password : ""
    });

    const signinHandler = (e) => {
        e.preventDefault();
        dispatch(signin(credentials.email, credentials.password));
        setCredentials({
            email : "",
            password : ""
        });
    };

    if(auth._id) {
        return <Redirect to='/admin' />
    }
    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.cardContent}>
                    <div className={classes.left}>
                        <img src={login} alt="loginPic" width="100%" />
                    </div>
                    <div className={classes.right}>
                        <form noValidate autoComplete="off" className={classes.form} onSubmit={signinHandler}>
                            <Typography style={{marginBottom : "15px", textAlign : "center"}} variant="h6">Login</Typography>
                            <TextField 
                             style={{margin : "5px 0"}} 
                             label="Email" 
                             variant="outlined" 
                             type="text" 
                             fullWidth
                             value={credentials.email}
                             onChange={(e) => setCredentials({...credentials, email : e.target.value})} 
                            />
                            <TextField 
                             style={{margin : "5px 0"}}
                             label="Password" 
                             variant="outlined" 
                             type="text" 
                             fullWidth 
                             value={credentials.password}
                             onChange={(e) => setCredentials({...credentials, password : e.target.value})}
                            />
                            <Button type="submit" variant="contained" color="primary" style={{backgroundColor : "#9924ff"}} fullWidth size="large">
                                Sign In
                            </Button>
                            <p style={{margin : "5px 0", fontSize : "small"}}>Not registered yet. <Link to="/signup">Signup</Link></p>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SignIn
