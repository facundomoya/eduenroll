export const mixParams = (req) => {
    let data = {}
    const { params, query, body, file } = req
    const headers = req["headers"] ? req["headers"] : null
    if (params) data = { ...data, ...params }
    if (file) data = { ...data, file }
    if (query) data = { ...data, ...query }
    if (body) data = { ...data, ...body }
    return data;
}
