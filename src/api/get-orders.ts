import { OrderStatus } from '../components/order-status'
import { api } from '../lib/axios'

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

export async function getOrders() {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })

  return response.data
}
