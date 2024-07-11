export interface FileResponse{
    id: string;
    file: IFile;
}

export interface IFile{
    id: string;
    name: string;
    filePath: string;
} 

export class File{
    name = '';
    filePath = '';
}