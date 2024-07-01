
import { ContainerChildrenTypes } from "../../../widgets/container";
import { IFile } from "../../file";

export interface INewFolder{
    parentId: string;
    name: string;
}

export interface IFolder{
    id: string;
    name: string;
}

export interface ResponseFolder{
    id: string;
    name: string;
    children: IFolderChildren[];
}

export interface IFolderChildren{
    id: string;
    name: string;
    type: ContainerChildrenTypes;
    file?: IFile;
}