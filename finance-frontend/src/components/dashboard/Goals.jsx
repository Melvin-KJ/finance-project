import React from 'react';
import { Pencil, Medal, Target } from 'lucide-react';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

const Goals = () => {
  //target and achieved values
  const totalTarget = 20000;
  const achievedValue = 12000;
  const percentage = (achievedValue / totalTarget) * 100;

  //sample data for the chart
  const data = [{ value: percentage, fill: '#299D91' }];

  return (
    <div>
      <h1 className="text-white text-lg font-semibold bg-gradient-to-r from-emerald-500 to-indigo-300 rounded-lg p-2 mb-2">
        Goals
      </h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-2">
          <div className="flex items-center">
            <h2 className="text-xl font-extrabold">₹20000</h2>
            <div className="w-7 h-7 ml-3 flex items-center justify-center bg-gray3 rounded-md cursor-pointer">
              <Pencil className="w-5 h-5" />
            </div>
          </div>
          <p className="text-defaultblack ">March, 2025</p>
        </div>
        <div className="flex items-center justify-between">
          {/* Target Achieved Chart & This month target */}
          <div className="flex flex-col items-center ">
            <div className="mb-4 flex items-center">
              <Medal className="w-5 h-5 mr-2" color="gold" />
              <div>
                <p className="text-md font-semibold">Target Achieved</p>
                <p className="text-xl font-bold">₹12000</p>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2" color="red" />
              <div>
                <p className="text-md font-semibold">This month target</p>
                <p className="text-xl font-bold">₹20000</p>
              </div>
            </div>
          </div>

          {/* Gauge Chart */}
          <div className="flex flex-col items-center">
            <RadialBarChart
              width={100}
              height={80}
              cx="50%"
              cy="100%"
              innerRadius="80%"
              outerRadius="100%"
              barSize={10}
              data={data}
              startAngle={180} // Makes it a semi-circle maths logic lol
              endAngle={0}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              <RadialBar
                minAngle={15}
                clockWise
                dataKey="value"
                background={{ fill: '#E5E7EB' }}
              />
            </RadialBarChart>
            <p className="text-sm font-semibold text-defaultblack">12K</p>
            <p className="text-sm text-defaultblack">Target vs Achievement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
