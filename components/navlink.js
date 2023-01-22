import Link from 'next/link'
import React from 'react'

export const NavLink = ({ link, title, id }) => {
    return (
        <Link href={link} id={id} role="link" className='text-sm text-slate-400 uppercase font-medium transition-all duration-200 hover:text-slate-600'>
            {title}
        </Link>
    )
}
