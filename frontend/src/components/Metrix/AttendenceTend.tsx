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
            className={`
    shadow-lg rounded-2xl bg-white flex flex-col justify-center items-center
    p-6 mt-6 duration-500
    w-full max-w-md sm:max-w-lg md:${isOpen ? "w-120" : "w-140"}
  `}
        >
            <h1 className="text-gray-700 text-xl sm:text-2xl font-bold text-center">
                Attendance Overview
            </h1>
            <div className="w-full h-64 sm:h-80 md:h-96">
                <Line key={`chart-${isOpen}`} data={data} options={options} />
            </div>
        </div>

    );
};