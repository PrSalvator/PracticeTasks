import { useRef, useState } from "react";
import { IFile } from "../../../../entities/file";
import { Folder, IFolder, IFolderChildren } from "../../../../entities/folder";
import { DataType } from "../../../../shared/model/types";

interface Props{
    header: string;
    items?: IFolderChildren[];
    type: DataType;
    getSelectedValue: (value?: IFile | IFolder) => void;
}

export const Container = ({header, items, type, getSelectedValue}: Props) => {
    const root = useRef<HTMLDivElement>(null);
    const [selectedValue, setSelectedValue] = useState<IFolderChildren | undefined>(undefined);

    function handleClick(item: IFolder | IFile, selectedItem: IFolderChildren){
        setSelectedValue(selectedItem);
        getSelectedValue(item);
    }

    function handleDoubleClick(folder: IFolder){
        setSelectedValue(undefined);
        getSelectedValue(undefined);

        //navigate(`/${folder.id}&parentId=`);
    }
    return (
        <div ref={root}>
            <h5>{header}</h5>
            <div className="row row-cols-auto g-2">
                {type === 'file' && items && (
                    <>
                        {items.map(item => {
                            return <div></div>
                        })}
                    </>
                )}
                {type === 'folder' && items && (
                    <>
                        {items.map((item, index) => {
                            let folder: IFolder = {id: item.id, name: item.name};
                            return(
                                <div key={index} className="col">
                                    <Folder onDoubleClick={() => handleDoubleClick(folder)} isSelected={selectedValue?.id === item.id} onClick={() => handleClick(folder, item)} folder={folder}/>
                                </div> 
                            )
                        })}
                    </>
                )}
                {items?.length == 0 && (
                    <p>Здесь пока ничего нет</p>
                )}
            </div>
        </div>
    )
}