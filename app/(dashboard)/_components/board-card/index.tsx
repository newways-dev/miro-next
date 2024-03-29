'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { formatDistanceToNow } from 'date-fns'
import { Skeleton } from '@/components/ui/skeleton'
import { Overlay } from './overlay'
import { Footer } from './footer'

interface BoardCardProps {
  id: string
  title: string
  authorId: string
  authorName: string
  orgId: string
  imageUrl: string
  isFavorite: boolean
  createdAt: number
}

export const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  imageUrl,
  orgId,
  createdAt,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth()
  const authorLabel = userId === authorId ? 'You' : authorName
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true })

  return (
    <Link href={`/board/${id}`}>
      <div className='group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden'>
        <div className='relative flex-1 bg-amber-50'>
          <Image src={imageUrl} alt='Doodle' fill className='object-fit' />
          <Overlay />
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          disabled={false}
          onClick={() => {}}
        />
      </div>
    </Link>
  )
}

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className='aspect-[100/127]  rounded-lg overflow-hidden'>
      <Skeleton className='h-full w-full' />
    </div>
  )
}
