import { DataType } from "../../../shared/model/types";
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
    type: DataType;
    file?: {
        name: string;
        filepath: string;
    };
}

export class Folder implements IFolder{
    id = '';
    name = '';
}