import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import styles from './styles.module.css'
import { SpinButton } from '../SpinButton/SpinButton';
interface Props{
    handleClose: () => void;
    open: boolean;
    children: React.ReactNode;
    handlePositive: () => void;
    positiveButtonLabel: string;
    header: string;
    isLoading: boolean;
}

export const ModalWindow = ({open, children, handleClose, handlePositive, positiveButtonLabel, header, isLoading}: Props) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <div className={`${styles.container} px-3 py-4 rounded-3 row col-xl-4 col-10`}>
                <h3 className='mb-4'>{header}</h3>
                {children}
                <div className="mt-5 d-flex">
                    <SpinButton variant='contained' className='me-2 ms-auto' onClick={handlePositive} isLoading={isLoading}>{positiveButtonLabel}</SpinButton>
                    <Button disabled={isLoading} onClick={handleClose} variant='outlined'>cancel</Button>
                </div>
            </div>
        </Modal>
    )
}