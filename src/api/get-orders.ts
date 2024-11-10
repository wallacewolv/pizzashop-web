import { OrderStatus } from '../components/order-status'
import { api } from '../lib/axios'

export interface GetOrdersQuery {
  pageIndex: number | null
  orderId: string | null
  customerName: string | null
  status: string | null
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

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })

  return response.data
}
