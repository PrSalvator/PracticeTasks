import {axios} from "../../../shared/api/index"

const SLUG = 'drive/folder/';

export async function getFolder(id = 'root'){
    return await axios.get(`${SLUG}${id}`)
}

export async function createFolder(name: string, parentId = 'root') {
    return await axios.post(SLUG, {parentId, name})
}