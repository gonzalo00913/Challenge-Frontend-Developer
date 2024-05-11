import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">¡Bienvenido!</h1>
      <div className="space-y-4">
        <Link href="/movies">
          <p className="text-blue-500 hover:underline">Ir a películas</p>
        </Link>
        <Link href="/characters">
          <p className="text-blue-500 hover:underline">Ir a personajes</p>
        </Link>
      </div>
    </div>
  )
}

export default Landing
