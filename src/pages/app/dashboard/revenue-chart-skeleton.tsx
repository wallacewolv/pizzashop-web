import { Skeleton } from '../../../components/ui/skeleton'

export function RevenueChartSkeleton() {
  return (
    <div className="flex h-[240px] w-full flex-col items-center">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="mt-8 h-4 w-full" />
      <Skeleton className="mt-8 h-4 w-full" />
      <Skeleton className="mt-8 h-4 w-full" />
      <Skeleton className="mt-8 h-4 w-full" />
    </div>
  )
}
