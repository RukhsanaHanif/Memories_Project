import React from "react";
import {
  TexrFeild,
  Grid,
  InputAdornment,
  IconButton,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";


const Input = ({
  name,
  handelChange,
  label,
  half,
  autoFocus,
  type,
  handelShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handelChange}
        variant="outlined"
        required
        label={label}
        autoFocus={autoFocus}
        type={type}
        inputProps={
          name === "passoword" && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handelShowPassword}>
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Grid>
  );
};

export default Input;
