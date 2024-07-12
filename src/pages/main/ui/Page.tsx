import { useEffect, useState } from "react";
import { Container } from "../../../widgets/container"
import { ToolBar } from "../../../widgets/toolBar";
import { GetFolder, IFolder, ResponseFolder } from "../../../entities/folder";
import { IFile } from "../../../entities/file";
import { useParams} from "react-router-dom";

export const Page = () => {
    const [folder, setFolder] = useState<ResponseFolder | undefined>(undefined);
    const [selectedValue, setSelectedValue] = useState<IFolder | IFile | undefined>(undefined);
    const params = useParams();

    useEffect(() => {
        const folderId = getFolderId();
        GetFolder(folderId).then(function (response){
            const folder = response.data.data as ResponseFolder;
            setFolder(folder);
        }).catch(function (error){
            console.log(error);
        })
    }, [params])

    function getFolderId(){
        setFolder(undefined);
        const folderId = params.id;
        return folderId;
    }

    return (
        <div className="row col-10 offset-1 col-xl-8 offset-xl-2 gy-3">
            <ToolBar setSelectedValue={setSelectedValue} setFolder={setFolder} selectedValue={selectedValue} folder={folder}/>
            <Container setFolder={setFolder} selectedValue={selectedValue} setSelectedValue={setSelectedValue} folder={folder}/>
        </div>
    )
}