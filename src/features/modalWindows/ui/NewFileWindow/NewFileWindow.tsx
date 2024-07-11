import { Button, IconButton } from "@mui/material"
import { ModalWindow } from "../../../../shared/ui/ModalWidnow/ModalWindow"
import { WindowProps } from "../../model/types"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CloseIcon from '@mui/icons-material/Close';

interface Props extends WindowProps{
    handleUploadFiles: (files: File[]) => void;
}

export const NewFileWindow = ({isLoading, open, handleClose, handleUploadFiles}: Props) => {
    const [files, setFiles] = useState<File[]>([]);

    useEffect(() => {
        setFiles([]);
    }, [open])

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        if(files.length !== 5){
            setFiles(prev => {
                return [...prev, ...e.target.files!]
            })
        }
    }

    function handleDelete(index: number){
        setFiles(prev => {
            prev.splice(index, 1);
            return [...prev];
        })
    }

    return(
        <ModalWindow isLoading={isLoading} header="New file" handlePositive={() => handleUploadFiles(files)} handleClose={handleClose} open={open} positiveButtonLabel="Load files">
                <Button disabled={isLoading} className="mb-2" variant="contained">
                    Choose file
                    <input className={styles.input} onChange={handleChange} type='file'/>
                </Button>
                <p style={{color: files.length === 5 ? "red" : "gray"}}>*Number of files should not exceed 5</p>
                {files.map((file, index) =>
                    <div key={index} className="d-flex align-items-center">
                        <InsertDriveFileIcon sx={{fontSize: 48}}/>
                        <h5 className={`mb-0 ms-3 ${styles.name}`}>{file.name}</h5>
                        <IconButton disabled={isLoading} onClick={() => handleDelete(index)} className="ms-auto">
                            <CloseIcon sx={{fontSize: 38}}/>
                        </IconButton>
                    </div> 
                )}
        </ModalWindow>
    )
}