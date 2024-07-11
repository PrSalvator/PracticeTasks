import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import styles from "./styles.module.css";
import { Button } from '@mui/material';
import { useAuth } from '../../../../app/providers/AuthProvider/hooks/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const {user, logout} = useAuth();
    const navigate = useNavigate();
    function handleLogOut(){
        logout();
        navigate('/login')
    }
    return (
        <header className='d-flex p-xl-3 p-1 align-items-center border-bottom'>
            <SpaceDashboardIcon sx={{fontSize: 62}} className={styles.image} color="primary"/>
            <h4 className="ms-2">FileManager</h4>
            {user != null && (
                <div className='ms-auto d-flex align-items-center'>
                    <AccountCircleIcon sx={{fontSize: 40}}/>
                    <h4 className='ms-2'>{user.login}</h4>
                    <Button onClick={handleLogOut} className="ms-3" variant="outlined">Log out</Button>
                </div>

            )}
        </header>
    )
}