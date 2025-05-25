import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-end shadow p-4'>
      <UserButton/>
    </div>
  )
}

export default Header