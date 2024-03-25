import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <p>Only Auth user</p>
      <div>
        <UserButton />
      </div>
    </div>
  )
}
