import { AxiosError, AxiosResponse } from "axios"
import { getApi } from "utils/axios"
import { buildResponse } from "utils/responseBuilder"

export const doSignup = async (payload: {
    email: string,
    userName: string,
    password: string,
}) => {
    return await getApi().post("/auth/signups", payload)
        .then((res: AxiosResponse) => {
            return buildResponse(true, res.data)
        })
        .catch((err: AxiosError) => {
            return buildResponse(false, err.response?.data, err.response?.status)
        })
}

export const doLogin = async (payload: {
    userName: string,
    password: string,
}) => {
    return await getApi().post("/auth/login", payload)
        .then((res: AxiosResponse) => {
            return buildResponse(true, res.data)
        })
        .catch((err: AxiosError) => {
            return buildResponse(false, err.response?.data, err.response?.status)
        })
}