import {$host} from "../index";

export const createDialog = async (chatId, name, lastMessage) => {
    const {data} = await $host.post('api/dialog/', {chatId, name, lastMessage})
    return data
}

export const getOneDialog = async (chatId) => {
    const {data} = await $host.get('api/dialog/one/', {params: {chatId}})
    return data
}

export const changeNameDialog = async (role, chatId, name) => {
    const {data} = await $host.post('api/dialog/change-name/', {chatId, name}, {headers: {authorization: role}})
    return data
}

export const changeLastMessage = async (chatId, lastMessage) => {
    const {data} = await $host.post('api/dialog/change-last-message/', {chatId, lastMessage})
    return data
}