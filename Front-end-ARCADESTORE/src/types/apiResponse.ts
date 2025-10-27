

export type apiResponse<T> = {
    status: string,
    message?: string,
    data?: T,
    count?: number
}