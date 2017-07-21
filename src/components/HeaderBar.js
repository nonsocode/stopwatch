import React, { Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = createStyleSheet('HeaderBar',{
    width : "100%"
})


class HeaderBar extends Component {
    constructor(props){
        super(props)
        this.proptypes = {
            title : PropTypes.string.isRequired,
            classes: PropTypes.object.isRequired
        }
    }

    render(){
        const {classes, title} = this.props
        return(
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                    <Typography type="title" color="inherit">
                        { title }
                    </Typography>
                    </Toolbar>
                </AppBar>
            </div>        
        )
    }
}

export default withStyles(styles)(HeaderBar)