export default defineEventHandler((event) => {
    const authHeader = getHeader(event, 'authorization')
    if(!authHeader || authHeader !== 'Bearer xyz') {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Não autorisado'
        }))
    }

    return {
        id: 1,
        name: 'Edson Bastos',
        email: 'edson_bastos@xmen.com'
    }
})