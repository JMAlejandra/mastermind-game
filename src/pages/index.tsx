import Link from 'next/link'
import { Button } from '~/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row justify-center items-center">
      <Link href={'/game'}>
        <Button variant={'default'}>Start Game</Button>
      </Link>
    </div>
  )
}
