import Cookies from "js-cookie"

export const TOKEN = 'access_token'

export const removeToken = () => {
    Cookies.remove(TOKEN);
}