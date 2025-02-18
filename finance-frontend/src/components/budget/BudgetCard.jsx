import React from 'react'
import { Progress } from '../ui/progress'

const BudgetCard = ({budget}) => {

    const spentPercentage = (budget.spent / budget.amount) * 100;

  return (
    <div className='bg-white p-5 rounded-lg shadow'>
        <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center space-x-2'>
                <span className='text-2xl'>{budget.emoji}</span>
                <div>
                    <h3 className='font-semibold'>{budget.name}</h3>
                    <p className='text-sm text-gray-500'>{budget.items} items</p>
                </div>
            </div>
            <p className='font-semibold'>${budget.amount}</p>
        </div>
        <div className='space-y-2'>
            <Progress value={spentPercentage}/>
            <div className='flex justify-between text-sm'>
                <span>Spent: ${budget.spent}</span>
                <span>Remaining: ${budget.amount - budget.spent}</span>
            </div>
        </div>
    </div>
  )
}

export default BudgetCard