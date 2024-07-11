import {instance} from "../../../shared/api/instance";
import { IFolderChildren } from "../../folder";

const SLUG = 'drive/files';

export function uploadFile(folderId: string, file: File){
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folderId', folderId);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return instance.post<IFolderChildren>(SLUG, formData, config);
}

export function deleteFile(fileId: string){
    return instance.delete(`${SLUG}/${fileId}`);
}
