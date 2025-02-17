import React from 'react'
import { Bell, LogOut } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

const Header = ({activeTab}) => {
  return (
    <div className='h-16 bg-white shadow-sm flex items-center justify-between px-4'>
        <h1 className='text-xl font-semibold text-gray-800'>
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h1>
        <div className='flex items-center space-x-4'>
            <button className='p-2 text-gray-600 hover:bg-gray-100 rounded-full'>
                <Bell className='w-5 h-5'/>
            </button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className='w-10 h-10 rounded-fullbg-gray-200'>
                        <img src='/avatar.svg' alt='Profile' className='w-10 h-10 rounded-full'/>
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <LogOut className='w-4 h- mr-2'/>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    </div>
  )
}

export default Header