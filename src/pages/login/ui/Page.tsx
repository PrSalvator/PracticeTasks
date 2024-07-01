import { VisibilityOff, Visibility } from "@mui/icons-material"
import { Alert, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Snackbar, TextField } from "@mui/material"
import { useState } from "react";
import { Login } from "../../../entities/user";
import { useAuth } from "../../../app/providers/AuthProvider/hooks/useAuth";
import { SpinButton } from "../../../shared/ui/SpinButton/SpinButton";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordInputValue, setPassword] = useState('');
    const [loginInputValue, setLogin] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {login} = useAuth();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

    function onPasswordChange(e:any){
        setPassword(e.target.value);
    }

    function onLoginChange(e:any){
        setLogin(e.target.value);
    }

    function handleSubmit(e: any){
        e.preventDefault();
        setIsLoading(true);
        Login(loginInputValue, passwordInputValue).then((response: any) => {
            login({
                login: loginInputValue,
                password: passwordInputValue,
                token: response.data.token
            })
            navigate('/');
        }, (error) => {
            try{
                if((error as AxiosError).response?.status === 404){
                    setMessage('Incorrect username or password');
                    return;
                }
                setMessage('Authorisation Error');
            }
            catch{
                setMessage('Authorisation Error');
            }
            finally{
                setOpen(true);
            }
        }).finally(() => setIsLoading(false))
    }

    function handelCloseAlert(){
        setOpen(false);
    }

    return(
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="row col-11 col-xl-3 border rounded-3 px-4 py-3">
                <h3 className="text-center mb-3">Login</h3>
                <TextField disabled={isLoading} required onChange={onLoginChange} label="Login"></TextField>
                <FormControl className="mt-3" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        disabled={isLoading}
                        required
                        onChange={onPasswordChange}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                        />
                </FormControl>
                <SpinButton isLoading={isLoading} type="submit">log in</SpinButton>
                <p className="p-0 mt-2 mb-0">Don`t you have an account? <Link href="register" underline="none">Register</Link></p>
                <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"center"}} open={open} autoHideDuration={3000} onClose={handelCloseAlert}>
                    <Alert variant="filled" severity='error'>
                        {message}
                    </Alert>
                </Snackbar>
            </form>
        </div>

    )
}