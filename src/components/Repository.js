import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '85%',
      marginBottom: '2%'
    },
    media: {
      height: '10%',
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


const Repository = ({ repo }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
    //console.log("props in repository js", repo.id);
    return (
      
           <div> 
<Card className={classes.root} variant="outlined">
      <CardHeader
      <a>
        avatar={<Avatar alt={repo.owner.login} src={repo.owner.avatar_url} />}
        </a>
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={repo.name}
        subheader={repo.created_at}
      />
      

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Repository ID: {repo.id}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Goals:</Typography>
          <Typography paragraph>
            goal 1
          </Typography>
          <Typography paragraph>
            goal 2
          </Typography>
          <Typography paragraph>
            goal 3
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>


            
       </div>
    )
}

export default Repository

