import { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useContext } from 'react';
import { SideBarContext } from '../../Context/SideBarContext';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);




export const AttenceTend = () => {
    const { isOpen } = useContext(SideBarContext);

    const data = useMemo(
        () => ({
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
                {
                    label: 'Student Average Attendance',
                    data: [30, 50, 70, 80, 90, 55, 12],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1,
                    fill: false,
                },
            ],
        }),
        []
    );

    const options = useMemo(
        () => ({
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const, 
                },
                title: {
                    display: true,
                    text: 'Student Attendance',
                },
            },
            scales: {
                y: {
                    beginAtZero: true, 
                    title: {
                        display: true,
                        text: 'Attendance (%)',
                    },
                },
            },
        }),
        []
    );

    return (
        <div
            className={`shadow-lg rounded-2xl bg-white flex justify-center items-center flex-col h-100 p-10 ${isOpen ? 'w-120' : 'w-140'
                } mt-10 duration-500`}
        >
            <h1 className="text-gray-700 text-2xl font-bold">Course Overview</h1>
            <Line key={`chart-${isOpen}`} data={data} options={options} />
        </div>
    );
};