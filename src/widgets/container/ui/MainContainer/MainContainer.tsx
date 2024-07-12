import { Folder, IFolder, ResponseFolder, UpdateFolder } from "../../../../entities/folder";
import { IFile, File } from "../../../../entities/file";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Alert, AlertColor, Skeleton, Snackbar } from "@mui/material";

interface Props{
    folder?: ResponseFolder;
    setFolder: React.Dispatch<React.SetStateAction<ResponseFolder | undefined>>; 
    selectedValue?: IFile | IFolder;
    setSelectedValue: React.Dispatch<React.SetStateAction<IFolder | IFile | undefined>>; 
}

export const MainContainer = ({folder, setSelectedValue, selectedValue, setFolder}: Props) => {
    const [movedFolder, setMovedFolder] = useState<IFolder | undefined>(undefined);
    const [folders, setFolders] = useState<IFolder[] | undefined>(undefined);
    const [files, setFiles] = useState<IFile[] | undefined>(undefined);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const parentFolder = getParentFolder();
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState<AlertColor>('success')

    useEffect(() => {
        const folders: IFolder[] = [];
        const files: IFile[] = [];
        if(folder){
            folder.children.forEach(item => {
                if(item.type === 'folder') folders.push({id: item.id, name: item.name});
                if(item.type === 'file') files.push({id: item.id, name: item.file!.name, filePath: item.file!.filepath});
            })
        }
        setFolders(folders);
        setFiles(files);
    }, [folder])

    function getParentFolder(): IFolder | undefined{
        const parentId = searchParams.get("parentId");
        if(parentId){
            return {id: parentId, name: "..."};
        }
        return undefined;
    }

    function handleDoubleClick(selectedFolder: IFolder){
        setSelectedValue(undefined);
        navigate(`/${selectedFolder.id}?parentId=${folder?.id}`);

    }

    function dragStartHandler(folder: IFolder){
        setMovedFolder(folder);
    }

    function dropHandler(folder: IFolder){
        if(movedFolder && folder.id !== movedFolder.id){
            showAlert("Mooving", 'info');
            UpdateFolder(movedFolder, folder.id).then(() => {
                showAlert("Folder successfully moved", 'success');
                deleteFolder(movedFolder);
                setSelectedValue(undefined);
            }, () => {
                showAlert("Folder cannot moved", 'error');
            })
        }
    }

    function deleteFolder(folder: IFolder){
        setFolder((prev) => {
            const index = prev?.children.indexOf(prev?.children.find(x => x.id === folder.id)!);
            if(index !== undefined) prev?.children.splice(index, 1);
            return {...prev!};
        });
    }

    function dragOverHandler(e :React.DragEvent<HTMLDivElement>){
        e.preventDefault();
    }

    function showAlert(message: string, severity: AlertColor){
        setAlertMessage(message);
        setAlertSeverity(severity);
        setOpenAlert(true);
    }

    return (
        <div className="border rounded-3 px-4 py-3">
            <Snackbar autoHideDuration={3000} open={openAlert} onClose={() => setOpenAlert(false)}>
                <Alert onClose={() => setOpenAlert(false)} severity={alertSeverity} variant="filled">{alertMessage}</Alert>
            </Snackbar>
            {folder ? (
                <h2 className="mb-3">{folder?.name}</h2>
            ): <Skeleton className="mb-3" width={'80%'} height={40}/>}
            <h5>Folders</h5>
            {folder ? (
                <div className="mb-3 row row-cols-auto g-2">
                    {parentFolder && (
                        <Folder
                        onDragOver={dragOverHandler} 
                        onDrop={() => dropHandler(parentFolder)} 
                        folder={parentFolder} onDoubleClick={() => navigate(-1)}/>
                    )}
                    {folders && (    
                        folders.map((folder, index) => 
                            <Folder
                            onDragOver={dragOverHandler} 
                            onDoubleClick={() => handleDoubleClick(folder)} key={index}
                            onClick={() => setSelectedValue(folder)} 
                            isSelected={selectedValue?.id == folder.id} folder={folder}
                            onDrop={() => dropHandler(folder)} onDragStart={() => dragStartHandler(folder)}/>
                        )
                    )}
                    {folders?.length === 0 && folder.name === "root" && (
                        <p>There’s nothing here yet</p>
                    )}
                </div>
            ): <Skeleton width={'50%'} height={100}/>}
            <h5>Files</h5>
            {folder ? (
                <div className="mb-3 row row-cols-auto g-2">
                    {files && (
                        files.map((file, index) =>
                            <File onClick={() => setSelectedValue(file)} file={file} isSelected={selectedValue?.id == file.id} key={index}/>
                        )
                    )}
                    {files?.length === 0 && (
                        <p>There’s nothing here yet</p>
                    )}
                </div>
            ): <Skeleton width={'50%'} height={100}/>}
        </div>
    )
}