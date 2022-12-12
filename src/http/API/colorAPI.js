import {$host} from "../index";

/* Работа с цветами */

export const fetchAllColor = async (itemId) => {
    const {data} = await $host.get('api/color/', {params: {itemId}})
    return data
}