import { Alert, Link, Snackbar, TextField } from "@mui/material"
import { useState } from "react";
import { SpinButton } from "../../../shared/ui/SpinButton/SpinButton";
import { Register } from "../../../entities/user";
import { useAuth } from "../../../app/providers/AuthProvider/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const Page = () => {
    const [passwordInputValue, setPassword] = useState('');
    const [loginInputValue, setLogin] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {login} = useAuth();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    function onPasswordChange(e:any){
        setPassword(e.target.value);
    }

    function onLoginChange(e:any){
        setLogin(e.target.value);
    }

    function handleSubmit(e: any){
        e.preventDefault();
        setIsLoading(true);
        Register(loginInputValue, passwordInputValue).then((response) => {
            login({
                login: loginInputValue,
                password: passwordInputValue,
                token: response.data.token
            })
            navigate('/');
        }, (error) => {
            try{
                console.log(error)
                setMessage((error as AxiosError).message);
            }
            catch{
                setMessage('Registration Error');
            }
            finally{
                setOpen(true);
            }
        }).finally(() => setIsLoading(false))
    }

    function handelCloseAlert(){
        setOpen(false);
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="row col-11 col-xl-3 border rounded-3 px-4 py-3">
                <h3 className="text-center mb-3">Register</h3>
                <TextField onChange={onLoginChange} required name="login" label="Login"></TextField>
                <TextField onChange={onPasswordChange} required name="password" className="mt-3" label="Password"></TextField>
                <SpinButton className="p-0 mt-3" type="submit" isLoading={isLoading} variant="contained">register</SpinButton>
                <p className="p-0 mt-2 mb-0">Already have an account? <Link href="login" underline="none">Login</Link></p>
                <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"center"}} open={open} autoHideDuration={3000} onClose={handelCloseAlert}>
                    <Alert variant="filled" severity='error'>
                        {message}
                    </Alert>
                </Snackbar>
            </form>
        </div>
    )
}