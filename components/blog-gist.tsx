import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import BlogMetadata from '../lib/BlogMetadata';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
    data: BlogMetadata
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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


export default function Layout(props) {


    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const keywords = props.data.keywords && props.data.keywords.split(',');

    return <Card className={classes.root}>
        <CardContent>
            <h4>
                {props.data.title}
            </h4>
            <h5>
                {keywords[0]}{bull}{keywords[1]}{bull}{keywords[2]}
            </h5>
            <h6>
                Author: {props.data.author}
            </h6>
            <h6>
                {props.data.description}
            </h6>
        </CardContent>
        <CardActions>
            <Link href={`/blogs/${props.data.slug}`}>Let's read</Link>
        </CardActions>
    </Card >
}