import {instance} from "../../../shared/api/instance"

const SLUG = 'drive/folder/';

export async function getFolder(id = 'root'){
    return await instance.get(`${SLUG}${id}`)
}

export async function createFolder(name: string, parentId = 'root') {
    return await instance.post(SLUG, {parentId, name})
}