import {$host} from "../index";

/* Работа с товарами */
export const fetchItems = async () => {
    const {data} = await $host.get('api/item/')
    return data
}

export const fetchPageItems = async (availability, visibility, discount_flag, page, tags) => {
    const {data} = await $host.get('api/item/page', {params: {
            availability, visibility, discount_flag, page, tags
        }})
    return data
}

export const fetchOneItem = async (id) => {
    const {data} = await $host.get('api/item/' + id)
    return data
}

export const fetchAllInfo = async (itemId) => {
    const {data} = await $host.get('api/info', {params: {itemId}})
    return data
}