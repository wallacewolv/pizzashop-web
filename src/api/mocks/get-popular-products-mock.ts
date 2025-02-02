/* eslint-disable prettier/prettier */
import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
    never,
    never,
    GetPopularProductsResponse
>('/metrics/popular-products', () => {
    return HttpResponse.json([
        { product: "Pizza Peperoni", amount: 50 },
        { product: "Pizza Calabresa", amount: 41 },
        { product: "Pizza Atum", amount: 31 },
        { product: "Pizza Marguerita", amount: 50 },
        { product: "Pizza Brócolis", amount: 53 }
    ])
})
