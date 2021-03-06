import React,{useState} from 'react';
import { Avatar,Button ,Paper,Grid,Typography,Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './style'
import Input from "./Input";

const Auth = () => {
  const   [showPassword,setshowPassword]=useState(false)
    const isSignup =true
    const classes =useStyles()
    const handleShowPassword=()=>setshowPassword((prevShowPassword)=>!prevShowPassword)
    const handleSubmit=()=>{

    }
    const handleChange=()=>{

    }
  return (
    <Container component='main' maxWidth="xs">
      <Paper className={classes.paper} evaluation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/> 
        </Avatar>
        <Typography variant='h5'>{isSignup?'Sign Up':'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                <Input name="firstName" label="First Name" handleChange={handleChange}  half/>
                </>
              )
            }
            <Input name="email" label="Email Address" handleChange={handleChange} type='email' />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword} />
         {isSignup&&<Input  name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
         <Button type="submit" variant="contained" fullWidth color="primary" className={classes.submit}>
          {isSignup?'Sign Up':'Sign In'}
         </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth

// is ki kisi b bt ka ans ni dena warna bs hmari khtm