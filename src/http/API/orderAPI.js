import {$host} from "../index";

/* Работа с заказами */
export const createOrder = async (token, number, firstName, lastName, secondName, phoneNumber, email, index, street, house, flat, price, typePay, typeDelivery, typeSubmit) => {
    const {data} = await $host.post('api/order/', {token, number, firstName, lastName, secondName, phoneNumber, email, index, street, house, flat, price, typePay, typeDelivery, typeSubmit})
    return data
}

export const fetchOneOrderByNumber = async (number) => {
    const {data} = await $host.get('api/order/number/' + number)
    return data
}

export const fetchOrdersByPhone = async (phone) => {
    const {data} = await $host.get('api/order/phone/' + phone)
    return data
}