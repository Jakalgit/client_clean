import {$host} from "../index";

/* Работа с товарами заказов */
export const createOrderItem = async (id, name, price, img, count, orderId) => {
    const {data} = await $host.post('api/orderitem/', {id, name, price, img, count, orderId})
    return data
}

export const fetchOrderItems = async (orderId) => {
    const {data} = await $host.get('api/orderitem/', {params: {orderId}})
    return data
}

export const fetchOrderItem = async (id) => {
    const {data} = await $host.get('api/orderitem/one/', {params: {id}})
    return data
}

export const incrementOrderItem = async (role, id) => {
    const {data} = await $host.post('api/orderitem/increment/', {id}, {headers: {authorization: role}})
    return data
}

export const decrementOrderItem = async (role, id) => {
    const {data} = await $host.post('api/orderitem/decrement/', {id}, {headers: {authorization: role}})
    return data
}

export const deleteOrderItem = async (role, id) => {
    const {data} = await $host.post('api/orderitem/delete/', {id}, {headers: {authorization: role}})
    return data
}