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
    singleParagraph : {
        marginTop :"15px",
        fontSize : "large",
        color : "#616A6B",
        lineHeight : "25px"
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
    },
    more : {
        marginTop : "15px",
        backgroundColor : "#9924ff",
        marginBottom : "0px",
        padding : "10px",
        width : "20%",
        // borderBottom: "2px solid #9924ff"
    },
    boderline : {
        marginBottom : "15px",
        border : "2px solid #9924ff",
        marginTop : "0"
    },
    card_content : {
        padding : "10px",
    },
    pic : {
        height : "50vh"
    },
    more_section : {
        display : "flex",
        justifyContent : "space-between",
        width : "100%",
        marginBottom : "20px"
    },
    more_links : {
        width : "30%",
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-between"
    }
}))