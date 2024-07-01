import { IFile } from "../../../../entities/file";
import { Folder, IFolder } from "../../../../entities/folder";
import { ChildrenType } from "../../../../shared/model/types";

interface Props{
    header: string;
    children?: IFile[] | IFolder[];
    type: ChildrenType;
}

export const Container = ({header, children, type}: Props) => {
    return (
        <div>
            <h5>{header}</h5>
            <div className="row row-cols-auto g-2">
                {type === 'file' && children && (
                    <>
                        {(children as IFile[]).map(file => {
                            return <div>{file.name}</div>
                        })}
                    </>
                )}
                {type === 'folder' && children && (
                    <>
                        {(children as IFolder[]).map(folder => {
                            return (
                                <div className="col">
                                    <Folder folder={folder}/>
                                </div> 
                            )
                        })}
                    </>
                )}
                {children?.length == 0 && (
                    <p>Здесь пока ничего нет</p>
                )}
            </div>
        </div>
    )
}