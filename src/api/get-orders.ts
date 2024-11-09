import { OrderStatus } from '../components/order-status'
import { api } from '../lib/axios'

export interface GetOrdersQuery {
  pageIndex: number | null
}

export interface OrdersProps {
  orderId: string
  createdAt: string
  status: OrderStatus
  customerName: string
  total: number
}

interface MetaProps {
  pageIndex: number
  perPage: number
  totalCount: number
}

export interface GetOrdersResponse {
  orders: Array<OrdersProps>
  meta: MetaProps
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  })

  return response.data
}
