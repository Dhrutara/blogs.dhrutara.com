import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '100%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function BlogGist(props) {


    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const keywords = props.data.keywords && props.data.keywords.split(',');

    return <React.Fragment>
        <Card className={classes.root} elevation={2} >
            <CardContent>
                <Typography className={classes.title} color="textPrimary" >
                    {keywords[0]}{bull}{keywords[1]}{bull}{keywords[2]}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.data.title}
                </Typography>
                <Typography className={classes.pos} color="textPrimary">
                    Author: {props.data.author}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/blogs/${props.data.slug}`}>Let's read</Link>
            </CardActions>
        </Card>
    </React.Fragment>
}