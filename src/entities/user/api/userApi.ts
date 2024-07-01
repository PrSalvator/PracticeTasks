import {instance} from "../../../shared/api/instance"

const SLUG = "auth"

export async function login(login: string, password: string){
    return await instance.post(`${SLUG}/login`, {login, password});
}