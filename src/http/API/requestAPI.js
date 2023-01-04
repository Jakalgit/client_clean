import {$host} from "../index"

export const createRequest = async (name, phone) => {
    const {data} = await $host.post('/api/request/', {name, phone})
    return data
}