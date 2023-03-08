import React from "react"
import { useRouter } from "next/router"


export default function Home() {

  const router = useRouter()

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const target = e.target as typeof e.target & {
  //     name: { value: string }
  //   }
  //   const name = target.name.value
  //   router.push(`/cards/`)
  // }


  return (
    <div className="grid justify-center text-center h-96 border-2 border-gray-200 bg-gray-100">
      <h1 className="font-bold text-xl">
        Digite seu nome
      </h1>
      <form className="grid text-sm justify-center">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mt-1" type="text" name="name" placeholder="Nome" />
        <button className="bg-blue-500 hover:bg-blue-700 h-10 text-white font-bold py-2 px-4 rounded mt-1">
          Ver Cartas
        </button>
      </form>
    </div>
  )
}
