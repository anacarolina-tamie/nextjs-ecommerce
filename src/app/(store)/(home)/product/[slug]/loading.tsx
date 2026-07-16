import { Skeleton } from '@/components/skeleton'

export default function ProductDetailsLoading() {
  return (
    <div className="relative grid h-[860px] grid-cols-3 gap-7">
      <Skeleton className="col-span-2 overflow-hidden" />
      <Skeleton className="flex flex-col justify-center px-12" />
    </div>
  )
}