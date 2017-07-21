import React, { PropTypes } from 'react'
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import { withStyles, createStyleSheet} from 'material-ui/styles'
import { AvTimer, Timer, AccessTime, Alarm } from 'material-ui-icons'

const styles = createStyleSheet('Navigatable',{
    root:{
        // maxWidth: 900,
        width : "100%",
        marginLeft: "auto",
        bottom : '0',
        position : 'absolute'
    }
});

class Navigatable extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <BottomNavigation value={1} showLabels>
                    <BottomNavigationButton label="Stopwatch" icon={<AvTimer />} />
                    <BottomNavigationButton label="Clock" icon={<AccessTime />} />
                    <BottomNavigationButton label="Timer" icon={<Timer />} />
                </BottomNavigation>
            </div>
        )
    }
    
}

Navigatable.propTypes = {

}



export default withStyles(styles)(Navigatable)