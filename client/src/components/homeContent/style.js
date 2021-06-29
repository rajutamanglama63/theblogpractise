import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    paper : {
        padding : "15px",
        display : "flex",
        flexDirection : "column"
    },
    rightParagraph : {
        marginTop :"15px",
        fontSize : "medium",
        color : "#616A6B"
    },
    paragraph : {
        marginTop : "10px",
        fontSize : "small",
        color : "#616A6B"
    },
    button : {
        marginTop : "10px",
        marginBottom : "25px"
    },
    line : {
        border : "1px solid #F8F9F9",
        margin : "15px",
    },
    load : {
        marginTop : "5px",
        marginBottom : '5px',
        textAlign : "center"
    }
}))