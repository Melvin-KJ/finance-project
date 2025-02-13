import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-50 fex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold  dark:text-white">
                Take Control of your Finances with
                <br />
                <span className="text-4xl text-primary md:text-[6rem] font-bold mt-1 leading-none">
                  MoneySentry
                </span>
              </h1>
              <p className="mb-4 text-2xl text-gray-900 dark:text-gray-300">
                Your Personal Finance Assistant for Smart Budgeting and Expense Tracking
              </p>
            </>
          }
        >
          <img
            src={`/dashboard.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
};

export default Hero;
