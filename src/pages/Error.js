import React from 'react'
import { Link } from 'react-router-dom'

import ChevronLeftIcon from "../../node_modules/@heroicons/react/20/solid/ChevronLeftIcon"

export default function Error() {
  return (
    <div>
        <div className='py-10 flex flex-col items-center gap-y-6 bg-white w-full'>
            <h2 className="text-slate-800 text-lg font-semibold">صفحه ای که دنبال آن بودید پیدا نشد!</h2>
            <Link to='/' className='flex items-center text-orange-400'>
                <span>صفحه اصلی</span>
                <ChevronLeftIcon width='18px'/>
            </Link>
            <img src="https://s8.uupload.ir/files/page-not-found_dkb.png" alt="" />
        </div>
    </div>
  )
}
