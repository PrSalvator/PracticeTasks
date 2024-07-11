import { Alert, AlertColor, IconButton, Snackbar, Tooltip } from "@mui/material"
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { Delete, DriveFileMove} from "@mui/icons-material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { CreateFolder, DeleteFolder, IFolder, ResponseFolder, UpdateFolder } from "../../../../entities/folder";
import { DeleteFile, IFile, UploadFile } from "../../../../entities/file";import { DeleteWindow, NewFileWindow, NewFolderWindow } from "../../../../features/modalWindows";
import { Dispatch, SetStateAction, useState } from "react";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
import styles from './styles.module.css'

interface Props{
    setFolder: Dispatch<SetStateAction<ResponseFolder | undefined>>;
    folder?: ResponseFolder;
    selectedItem?: IFolder | IFile;
}

export const ToolBar = ({folder, selectedItem, setFolder}: Props) => {
    const [newFolderWindowOpen, setNewFolderWindowOpen] = useState(false);
    const [updateFolderWindowOpen, setUpdateFolderWindowOpen] = useState(false);
    const [deleteWindowOpen, setDeleteWindowOpen] = useState(false);
    const [loadFilesWindowOpen, setLoadFilesWindowOpen] = useState(false);

    const [isloading, setIsLoading] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState<AlertColor>('success')

    const { enqueueSnackbar } = useSnackbar();

    function handleUpdateFolder(folderName: string){
        setIsLoading(true);
        
        const selectedFolder = selectedItem as IFolder
        selectedFolder.name = folderName;

        UpdateFolder(selectedFolder, folder?.id).then((response) => {
            const {data} = response.data;
            setFolder((prev) => {
                const index = prev?.children.indexOf(prev?.children.find(x => x.id === selectedFolder.id)!);
                if(index !== undefined){
                    prev!.children[index].id = data.id;
                    prev!.children[index].name = data.name;
                } 
                return {...prev!};
            })

            setUpdateFolderWindowOpen(false);
            showAlert("Folder renamed", "success");
        }, () => {
            showAlert("Failure to create folder", "error");
        }).finally(() => setIsLoading(false));
    }

    function handleCreateNewFolder(folderName: string){
        setIsLoading(true);

        CreateFolder(folderName, folder?.id).then((response) => {
            const { data } = response.data;
            setFolder((prev) => {
                return {
                  ...prev!,
                  children: [
                    ...prev!.children,
                    { id: data.id, name: data.name, type: 'folder'}
                  ]
                };
            });

            setNewFolderWindowOpen(false);
            showAlert("Folder created", "success");
        }, () => {
            showAlert("Failure to rename folder", "error");
        }).finally(() => setIsLoading(false));
    }

    function handleDeleteSelectedItem(){
        setIsLoading(true);
        if((selectedItem as IFile).filePath){
            const selectedFile = (selectedItem as IFile);

            DeleteFile(selectedFile.id).then(() => {
                setFolder((prev) => {
                    const index = prev?.children.indexOf(prev?.children.find(x => x.id === selectedFile.id)!);
                    if(index !== undefined) prev?.children.splice(index, 1);
                    return {...prev!};
                });

                setDeleteWindowOpen(false);
                showAlert("Successfully deleted", "success");
            }, () => {
                showAlert("Failure to delete file", "error");
            }).finally(() => setIsLoading(false))
        }
        else {
            const selectedFolder = (selectedItem as IFolder);
            DeleteFolder(selectedFolder.id).then(() => {        
                setFolder((prev) => {
                    const index = prev?.children.indexOf(prev?.children.find(x => x.id === selectedFolder.id)!);
                    if(index !== undefined) prev?.children.splice(index, 1);
                    return {...prev!};
                });

                setDeleteWindowOpen(false);
                showAlert("Successfully deleted", "success");
            }, () => {
                showAlert("Failure to delete folder", "error"); 
            }).finally(() => setIsLoading(false))
        }
    }

    function showAlert(message: string, severity: AlertColor){
        enqueueSnackbar(message, { variant: severity });
    }

    function handleUploadFiles(files: File[]){
        setIsLoading(true);
        Promise.allSettled(files.map(file => UploadFile(folder!.id, file).then((response) => {
            setFolder((prev) => {
                const data = response.data;
                return {
                  ...prev!,
                  children: [
                    ...prev!.children,
                    {...data}
                  ]
                };
            });
            showAlert(`File ${file.name} upload successfully`, "success");
        }, () => showAlert(`Failure to upload file ${file.name}`, "error")))).finally(() => {
            setIsLoading(false);
            setLoadFilesWindowOpen(false);
        })
    }
    return (
        <div className="border rounded-3">
            <Snackbar autoHideDuration={3000} open={openAlert} onClose={() => setOpenAlert(false)}>
                <Alert onClose={() => setOpenAlert(false)} severity={alertSeverity} variant="filled">{alertMessage}</Alert>
            </Snackbar>

            <NewFolderWindow positiveButtonLabel="create" header="New folder" defaultValue='Untitled' isLoading={isloading} handleCreate={(folderName) => handleCreateNewFolder(folderName)} handleClose={() => setNewFolderWindowOpen(false)} open={newFolderWindowOpen}/>
            <NewFolderWindow positiveButtonLabel="rename" header="Rename folder" defaultValue={selectedItem ? (selectedItem as IFolder).name : ''} isLoading={isloading} handleCreate={(folderName) => handleUpdateFolder(folderName)} handleClose={() => setUpdateFolderWindowOpen(false)} open={updateFolderWindowOpen}/>
            <DeleteWindow open={deleteWindowOpen} name={selectedItem? selectedItem.name : ''} handleClose={() => setDeleteWindowOpen(false)} isLoading={false} handleDelete={handleDeleteSelectedItem}/>
            <NewFileWindow handleUploadFiles={handleUploadFiles} open={loadFilesWindowOpen} handleClose={() => setLoadFilesWindowOpen(false)} isLoading={isloading}/>

            <Tooltip title="Create folder">
                <IconButton onClick={() => setNewFolderWindowOpen(true)} disabled={!!!folder} color="primary">
                    <CreateNewFolderIcon sx={{fontSize: 32}}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Move folder">
                <IconButton color="primary" disabled={selectedItem ? !(selectedItem as IFolder).id : true}>
                    <DriveFileMove sx={{fontSize: 32}}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton onClick={() => setDeleteWindowOpen(true)} color="primary" disabled={!selectedItem}>
                    <Delete sx={{fontSize: 32}}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Rename folder">
                <IconButton onClick={() => setUpdateFolderWindowOpen(true)} color="primary" disabled={selectedItem ? !(selectedItem as IFolder).id : true}>
                    <DriveFileRenameOutlineIcon sx={{fontSize: 32}}/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Load new file">
                <IconButton color="primary" disabled={!!!folder} onClick={() => setLoadFilesWindowOpen(true)}>
                    <UploadFileIcon sx={{fontSize: 32}}/>
                </IconButton>
            </Tooltip>
            <h3 className={`d-inline-block align-middle ms-4 mb-0 ${styles.name}`}>{selectedItem?.name}</h3>
        </div>
    )
}