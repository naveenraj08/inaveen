import React from 'react'
import { ServiceCard } from './service-card'

export const Service = () => {
    return (
        <div className='w-full'>
            <div className='flex flex-col justify-start items-center py-[80px] gap-[100px] container px-6'>
                <div className="content text-sm text-slate-500 max-w-[50%]">
                    <h2 className='uppercase text-4xl mb-5 text-center text-slate-900 font-semibold'>SERVICE</h2>
                    <p className='mb-5 text-center'>
                        "People will forget what you said. They will forget what you did. But they will never forget how you made them feel."
                    </p>
                </div>
                <div className='grid grid-cols-12 gap-5 w-full'>
                    <ServiceCard />
                </div>
            </div>
        </div>
    )
}
