import styles from "./styles.module.css"
import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ChildrenType } from "../../model/types";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import { useRef } from "react";

interface Props{
    name: string,
    type: ChildrenType;
    handleButtonClick: (elem: HTMLElement | null) => void;
}

export const Wrapper = ({name, type, handleButtonClick}:Props) => {
    const buttonRef = useRef(null);

    return (
        <div className={`d-flex align-items-center p-2 border border-primary rounded-2 ${styles.wrapper}`}>
            {type === 'file' && (
                <InsertDriveFileIcon sx={{fontSize: 48}} color="primary"/>
            )}
            {type === 'folder' && (
                <FolderIcon sx={{fontSize: 48}} color="primary"/>
            )}
            <h5 className="mb-0 ms-2">{name}</h5>
            <IconButton ref={buttonRef} className="ms-auto" onClick={() => handleButtonClick(buttonRef.current)}>
                <MoreVertIcon/>
            </IconButton>
        </div>
    )

}