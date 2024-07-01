import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import styles from "./styles.module.css";
import { Button } from '@mui/material';

export const Header = () => {
    return (
        <header className='d-flex p-xl-3 p-1 align-items-center border-bottom'>
            <SpaceDashboardIcon sx={{fontSize: 62}} className={styles.image} color="primary"/>
            <h4 className="ms-2">FileManager</h4>
            <Button className='ms-auto' variant="outlined">Log out</Button>
        </header>
    )
}