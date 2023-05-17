import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Welcome to E-Governance</h1>

      <h1> Users : </h1>
      <div>
        <Link href="./doctor/"> Visit Doctor</Link>
      </div>
    </>
  )
}
