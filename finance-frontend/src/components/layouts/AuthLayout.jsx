import React from 'react'
import LoginCard from '../../assets/images/LogoCard.svg';

const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <h2 className="text-xl text-primary font-bold text-black">
          MONEYSENTRY
        </h2>
        {children}
      </div>

    <div className='hidden md:block md:w-[40vw] h-screen bg-violet-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>

        <img src={LoginCard} className=''/>
    </div>

    </div>
  );
}

export default AuthLayout