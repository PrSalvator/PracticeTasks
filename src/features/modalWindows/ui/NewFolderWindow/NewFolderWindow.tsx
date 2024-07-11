import { TextField } from "@mui/material";
import { ModalWindow } from "../../../../shared/ui/ModalWidnow/ModalWindow"
import { useEffect, useState } from "react";
import { WindowProps } from "../../model/types";

interface Props extends WindowProps{
    handleCreate: (folderName: string) => void;
    defaultValue: string;
    header: string;
    positiveButtonLabel: string;
}

export const NewFolderWindow = ({handleClose, open, handleCreate, isLoading, defaultValue, header, positiveButtonLabel}: Props) => {
    const [folderName, setFolderName] = useState<string | undefined>(undefined);

    useEffect(() => {
        setFolderName(undefined);
    }, [open])

    return(
        <ModalWindow isLoading={isLoading} header={header} handlePositive={() => handleCreate(folderName? folderName : defaultValue)} handleClose={handleClose} open={open} positiveButtonLabel={positiveButtonLabel} >
                <TextField disabled={isLoading} defaultValue={defaultValue} value={folderName} onChange={(e) => setFolderName(e.target.value)} sx={{width: '100%'}} label="Folder name"/>
        </ModalWindow>
    )
}