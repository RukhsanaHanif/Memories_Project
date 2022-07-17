import React,{useState,useEffect} from 'react';
// import {BrowserRouter, Swich, Route} from 'rect-router-dom'
import {Container, Grow,Grid} from '@material-ui/core'

import Posts from '../Posts/Posts';
import Form from '../Form/Form'

import { useDispatch } from 'react-redux';
import { getPost } from '../../actions/posts';

import useStyles from './style'

const Home = () => {
    const [currentId ,setCurrentId]=useState(null)
    const classes= useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPost())
    },[dispatch])
  return (
    <Grow in>
            <Container>
                <Grid className={classes.gridContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
  )
}

export default Home