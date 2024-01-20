export default defineEventHandler((event) => {
    const authHeader = getHeader(event, 'authorization')
    if(!authHeader || authHeader !== 'Bearer xyz') {
        return sendError(event, createError({
            statusCode: 401,
            statusMessage: 'Não autorizado'
        }))
    }

    return [
        {
            id: 1,
            name: 'Produto 1',
            price: 180
        },
        {
            id: 2,
            name: 'Produto 2',
            price: 150
        },
        {
            id: 3,
            name: 'Produto 3',
            price: 100
        },
        {
            id: 4,
            name: 'Produto 4',
            price: 80
        },
    ]
})