import React from 'react'
import StatCard from '@/components/dashboard/StatCard'
import ExpenseBarChart from '@/components/dashboard/Charts/ExpenseBarChart'

const Dashbaord = () => {

  
  return (
    <div>
      {/* Testing dashboard small components */}
      <StatCard title="Total Income" amount={12000} type="income"/>
      <div className='grid grid-cols-2 gap-6'>
        {/* <ExpenseBarChart data={expenseData.monthly}/> */}
        
      </div>
    </div>
  )
}

export default Dashbaord