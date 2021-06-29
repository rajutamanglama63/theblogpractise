import React,{useState} from 'react'
import FileBase from 'react-file-base64'
import {useHistory} from 'react-router-dom'
import {Button, Card, TextField} from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'
import {createEcoBlog} from '../../redux/actions/economics'
import useStyles from './style';

const FormContent = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);
    const [blog, setBlog] = useState({
        title : "",
        blogDescription : "",
        picture : ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createEcoBlog(blog));
        history.push('/economics');
        setBlog({
            title : "",
            blogDescription : "",
            picture : ""
        });
    } 
    return (
        <div>
            <div className={classes.adminContent}>
            <Card className={classes.card}>
                <h1 className={classes.title}>Create a blog {user.username}!</h1>
                <p className={classes.subTitle}>Now you can create your blogs.</p>
                    <form noValidate autoComplete="off" className={classes.form} onSubmit={submitHandler}>
                        <div className={classes.fileInput}>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setBlog({ ...blog, picture : base64 })}/>
                        </div>
                        <TextField 
                         style={{margin : "1rem 0"}} 
                         variant="outlined" 
                         type="text" 
                         label="Title" 
                         fullWidth 
                         value={blog.title}
                         onChange={(e) => setBlog({...blog, title : e.target.value})}
                        />
                        <TextField 
                         style={{margin : "1rem 0"}} 
                         variant="outlined" 
                         type="text" fullWidth 
                         label="Your Blog" 
                         multiline 
                         rows="10" 
                         value={blog.blogDescription}
                         onChange={(e) => setBlog({...blog, blogDescription : e.target.value})}
                        /> 
                        <Button type="submit" variant="contained" className={classes.btn} size="medium" >Submit</Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default FormContent
