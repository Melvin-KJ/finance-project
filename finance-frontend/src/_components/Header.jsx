import React from 'react'
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <div className='flex flex-row items-center'>
            {/* Logo */}
            <img src='./money-sentry.svg' alt='logo' width={40} height={25}/>
            <span className='text-green-900 font-bold text-2xl'>MoneySentry</span>
        </div>
        <div>
            <Button className="rounded-full">Get started</Button>
        </div>
    </div>
  )
}

export default Header