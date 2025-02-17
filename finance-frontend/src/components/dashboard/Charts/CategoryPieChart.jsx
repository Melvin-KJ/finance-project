import React from 'react'
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const CategoryPieChart = ({data}) => {
  return (
    <div className='bg-white p-6 rounede-lg shadow'>
        <h3 className='text-lg font-semibold text-gray-700 mb-4'>Expense Categories</h3>
        <div className='h-64'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill='#8884d8'/>
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default CategoryPieChart