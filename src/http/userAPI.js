import {$host} from './index'
import Cookies from 'universal-cookie'

export const init = async () => {
    const cookies = new Cookies()

    if (!cookies.get('user_id')) {
        const cookieDate = new Date().getTime()
        cookies.set('user_id', cookieDate, {path: '/'})
    }

    const token = cookies.get('user_id')

    const {data} = await $host.post('api/user/init', {token})

    return {data}
}