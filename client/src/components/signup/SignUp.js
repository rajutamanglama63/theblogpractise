import picture from '../../images/picture.png'
import {signup} from '../../redux/actions/authAction'
import {Link, Redirect} from 'react-router-dom'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Card, TextField, Typography} from '@material-ui/core'
import useStyles from './style'

const SignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    console.log(auth);
    const [adminData, setAdminData] = useState({
        username : "",
        email : "",
        password : ""
    });

    const signupHandler = (e) => {
        e.preventDefault();
        dispatch(signup(adminData));
        setAdminData({
            username : "",
            email : "",
            password : ""
        });
    }

    if(auth._id) {
        return <Redirect to='/admin' />
    }
    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.cardContent}>
                    <div className={classes.left}>
                        <img src={picture} alt="loginPic" width="100%" />
                    </div>
                    <div className={classes.right}>
                        <form noValidate autoComplete="off" className={classes.form} onSubmit={signupHandler}>
                            <Typography style={{marginBottom : "15px", textAlign : "center"}} variant="h6">Create account</Typography>
                            <div className={classes.intro}>
                                <TextField label="First" variant="outlined" type="text" style={{margin : "5px 0"}} />
                                <TextField label="Last" variant="outlined" type="text" style={{margin : "5px 0 5px 5px"}} />
                            </div>
                            <TextField 
                             style={{margin : "5px 0"}}
                             label="Username" 
                             variant="outlined" 
                             type="text" 
                             fullWidth 
                             value={adminData.username}
                             onChange={(e) => setAdminData({...adminData, username : e.target.value})}
                            />
                            <TextField 
                             style={{margin : "5px 0"}} 
                             label="Email" 
                             variant="outlined" 
                             type="text" 
                             fullWidth 
                             value={adminData.email}
                             onChange={(e) => setAdminData({...adminData, email : e.target.value})}
                            />
                            <TextField 
                             style={{margin : "5px 0"}}
                             label="Password" 
                             variant="outlined" 
                             type="text" 
                             fullWidth 
                             value={adminData.password}
                             onChange={(e) => setAdminData({...adminData, password : e.target.value})}
                            />
                            <TextField label="Address" variant="outlined" type="text" style={{margin : "5px 0"}} fullWidth />
                            <TextField label="Phone" variant="outlined" type="text" style={{margin : "5px 0"}} fullWidth />
                            <TextField label="Occupation" variant="outlined" type="text" style={{margin : "5px 0"}} fullWidth />
                            <TextField label="Age" variant="outlined" type="text" style={{margin : "5px 0"}} fullWidth />
                            <TextField label="Sex" variant="outlined" type="text" style={{margin : "5px 0"}} fullWidth />
                            <Button type="submit" variant="contained" color="primary" style={{backgroundColor : "#9924ff"}} fullWidth size="large">
                                Sign up
                            </Button>
                            <p style={{margin : "5px 0", fontSize : "small"}}>Already have an account.<Link to="/signin">Signin</Link> </p>
                        </form>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SignUp
