import React, { useState } from "react"
import { useRouter } from "next/router"


export default function Home() {

  const [name, setName] = useState('')
  const router = useRouter()

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-64 h-64 mr-2" src="https://www.waproject.com.br/assets/image/logo.svg" alt="logo"/>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Para começar, informe seu nome
                </h1>
                <form 
                  className="space-y-4 md:space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    router.push(`/cards/${name}`)
                  }}
                  >
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu nome</label>
                        <input 
                          type="name" 
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="John Doe"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <button
                      type="submit" 
                      className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                      Ver Cartas
                    </button>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}
