import {$host} from "../index"

export const createRepairRequest = async (name, phone, message) => {
    const {data} = await $host.post('api/repair/create/', {name, phone, message})
    return data
}