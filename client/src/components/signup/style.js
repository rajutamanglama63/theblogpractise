import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    card : {
        margin : "2rem 0"
    },
    cardContent : {
        display : "flex",
        alignItems : "center"
    },
    left : {
        width : "50%",
    },
    right : {
        width : "50%",
    },
    form : {
        padding : "4rem"
    },
    intro : {
        display : "flex",
        justifyContent : "space-between",
    }
}))