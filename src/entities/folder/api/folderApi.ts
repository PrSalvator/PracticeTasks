import {instance} from "../../../shared/api/instance"
import { IFolder } from "../model/types";

const SLUG = 'drive/folder';

export async function getFolder(id = 'root'){
    return await instance.get(`${SLUG}/${id}`)
}

export async function createFolder(name: string, parentId = 'root') {
    return await instance.post<{data: IFolder}>(SLUG, {parentId, name})
}

export async function updateFolder(folder: IFolder, parentId = 'root') {
    return await instance.patch<{data: IFolder}>(`${SLUG}/${folder.id}`, {parentId: parentId, name: folder.name});
}

export async function deleteFolder(folderId: string) {
    return await instance.delete(`${SLUG}/${folderId}`);
}