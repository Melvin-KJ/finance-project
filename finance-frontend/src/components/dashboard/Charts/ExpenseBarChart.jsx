import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ExpenseBarChart = ({data}) => {


  return (
    <div className='bg-white p-6 rounded-lg shadow'>
        <h3 className='text-lf font-semibold text-gray-700 mb-4'>Income vs Expenses</h3>
        <div className='h-64'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey={date}/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="amount" fill='#ef4444' />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default ExpenseBarChart