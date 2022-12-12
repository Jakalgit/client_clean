import {$host} from "../index";

/* Работа с товарами в корзине */
export const createBasketItem = async (itemId, basketId, count, image, name, price, itemColorId) => {
    const {data} = await $host.post('api/basketitem/', {itemId, itemColorId, basketId, count, image, name, price})
    return data
}

export const incrementBasketItem = async (itemId, itemColorId, basketId) => {
    const {data} = await $host.post('api/basketitem/increment/', {itemId, itemColorId, basketId})
    return data
}

export const decrementBasketItem = async (itemId, itemColorId, basketId) => {
    const {data} = await $host.post('api/basketitem/decrement/', {itemId, itemColorId, basketId})
    return data
}

export const deleteOneBasketItem = async (id) => {
    const {data} = await $host.post('api/basketitem/deleteone/', {id})
    return data
}

export const deleteAllBasketItem = async (basketId) => {
    const {data} = await $host.post('api/basketitem/delete/', {basketId})
    return data
}

export const getAllBasketItems = async (basketId) => {
    const {data} = await $host.get('api/basketitem/', {params: {basketId}})
    return data
}