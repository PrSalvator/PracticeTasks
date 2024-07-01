import { useEffect, useState } from "react";
import { IFile } from "../../../../entities/file";
import { GetFolder, IFolder, ResponseFolder } from "../../../../entities/folder";
import { Container } from "../Container/Container";

export const MainContainer = () => {
    const [folders, setFolders] = useState<IFolder[] | undefined>(undefined);
    const [files, setFiles] = useState<IFile[] | undefined>(undefined);

    useEffect(() => {
        GetFolder().then(function (response){
            const folder = response.data.data as ResponseFolder;
            setFiles(folder.children.filter((children) => children.type == 'file').map((childrenFile) => {
                return childrenFile.file!;
            }))
            setFolders(folder.children.filter((children) => children.type == 'folder').map((childrenFolder) => {
                return {
                    id: childrenFolder.id,
                    name: childrenFolder.name
                };
            }))
        }).catch(function (error){
            console.log(error);
        })
        
    }, [])

    return (
        <div className="row col-8 offset-2 border rounded-3 px-4 py-3">
            <div className="mb-3">
                <Container header="Folders" children={folders} type="folder"/>
            </div>
            <div>
                <Container header="Files" children={files} type="file"/>
            </div>
        </div>
    )
}