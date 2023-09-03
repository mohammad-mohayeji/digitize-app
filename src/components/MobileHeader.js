import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function MobileHeader({title}) {
    const navigate = useNavigate()
  return (
    <div className="flex lg:hidden justify-between items-center py-10 mb-6 px-5">
        <Link className="bg-white p-2 rounded-md shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>          
        </Link>
        <div className="text-2xl font-bold text-slate-800">{title}</div>
        <div className="bg-white p-2 rounded-md shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-slate-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
          </svg>
        </div>
    </div>
  )
}
