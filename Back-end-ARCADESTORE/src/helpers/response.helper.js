

export const responseSuccesAll = (message, data) =>{
    return {
        status: "success",
        message: message,
        data: data,
        count: data.length
    }
}

export const responseSucces = (message, data) =>{
    return {
        status: "success",
        message: message,
        data: data,
    }
}

export const responseError = (message) =>{
    return {
        status: "success",
        message: message,
        data: null,
    }
}