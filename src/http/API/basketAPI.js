import {$host} from "../index";

/* Работа с корзиной */
export const initBasket = async (id) => {
    const {data} = await $host.post('api/basket/', {userId: id})
    return data
}