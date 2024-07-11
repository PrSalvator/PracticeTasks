import styles from "./styles.module.css"
import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DataType } from "../../model/types";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import React, {DOMAttributes, HTMLAttributes, useRef} from "react";

interface Props extends DOMAttributes<HTMLDivElement>, HTMLAttributes<HTMLDivElement>{
    name: string,
    type: DataType;
    handleButtonClick?: (elem: HTMLElement | null) => void;
    isSelected: boolean;
}

export const Wrapper = ({
    name, type, handleButtonClick, isSelected, onClick, id,
    onDragEnd, onDragStart, onDragLeave, onDragOver, onDrop, onDoubleClick, ...props}:Props) => {

    const buttonRef = useRef(null);
    const root = useRef<HTMLDivElement>(null);

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        if(onDragOver) onDragOver(e);
    }
    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        if(onDragLeave) onDragLeave(e);
    }
    function dragStartHandler(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        if(onDragStart) onDragStart(e);
    }
    function dragEndHandler(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        if(onDragEnd) onDragEnd(e);
    }
    function dropHandler(e: React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        if(onDrop) onDrop(e);
    }
    return (
        <div
        onDoubleClick={onDoubleClick}
        onDragStart={onDragStart}
        onDragLeave={onDragLeave}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
        onDrop={onDrop}
        draggable={type === 'folder'}
        onClick={onClick}
        ref={root}
        id={id}
        className={`d-flex align-items-center p-2 border border-primary rounded-2 ${styles.wrapper} ${isSelected? styles.selected : ''}`}>
            {type === 'file' && (
                <InsertDriveFileIcon sx={{fontSize: 48}} color="primary"/>
            )}
            {type === 'folder' && (
                <FolderIcon sx={{fontSize: 48}} color="primary"/>
            )}
            <h5 className={`mb-0 ms-2 ${styles.name}`}>{name}</h5>
            {/* <IconButton ref={buttonRef} className="ms-auto" onClick={() => handleButtonClick(buttonRef.current)}>
                <MoreVertIcon/>
            </IconButton> */}
        </div>
    )

}