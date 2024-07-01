import { Link, TextField } from "@mui/material"
import { useState } from "react";
import { SpinButton } from "../../../shared/ui/SpinButton/SpinButton";

export const Page = () => {
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onPasswordChange(e:any){
        setPassword(e.target.value);
    }

    function onLoginChange(e:any){
        setLogin(e.target.value);
    }

    function handleSubmit(e: any){
        e.preventDefault();
        setIsLoading(true);
    }

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit} className="row col-11 col-xl-3 border rounded-3 px-4 py-3">
                <h3 className="text-center mb-3">Register</h3>
                <TextField onChange={onLoginChange} required name="login" label="Login"></TextField>
                <TextField onChange={onPasswordChange} required name="password" className="mt-3" label="Password"></TextField>
                <SpinButton type='submit' isLoading={isLoading}>register</SpinButton>
                <p className="p-0 mt-2 mb-0">Already have an account? <Link href="login" underline="none">Login</Link></p>
            </form>
        </div>
    )
}