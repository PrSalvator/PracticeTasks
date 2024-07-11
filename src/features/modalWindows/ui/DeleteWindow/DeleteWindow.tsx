import { ModalWindow } from "../../../../shared/ui/ModalWidnow/ModalWindow"
import { WindowProps } from "../../model/types"
import styles from "../NewFileWindow/styles.module.css"

interface Props extends WindowProps{
    name: string;
    handleDelete: () => void;
}

export const DeleteWindow = ({open, handleClose, isLoading, name, handleDelete} : Props) => {
    return(
        <ModalWindow header="Delete" handlePositive={handleDelete} positiveButtonLabel="Delete" open={open} handleClose={handleClose} isLoading={isLoading}>
            <h3 className={styles.name}>Are you sure you want to delete "{name}"?</h3>
        </ModalWindow>    
    )
}