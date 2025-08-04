import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "right" as const,
        },
    },
};
export const CourseChart: React.FC = () => {
    return (
        <>
            <div className="shadow-lg rounded-2xl bg-white  flex justify-center items-center flex-col h-100 p-10 w-150 mt-10 ">
                <h1 className="text-gray-700 text-2xl font-bold">Course Overview</h1>
                <Doughnut data={data} options={options} />
            </div>
        </>
    )
}