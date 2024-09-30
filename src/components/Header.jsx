import React from 'react'

export default function Header() {
    return (
        <header className='flex flex-row'>
            <img src="./less-than-solid.svg" alt="loading" className='size-6 mt-6 ml-5' />
            <p className='text-2xl font-medium mt-5 ml-5'>Create Workorder</p>
            <button className='h-12 w-32 bg-cyan-400 text-white font-medium rounded shadow mt-4 ml-auto mr-4'>Save</button>
        </header>
    )
}