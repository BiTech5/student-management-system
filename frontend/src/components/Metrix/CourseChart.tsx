import { useMemo, useContext } from 'react';
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { SideBarContext } from "../../Context/SideBarContext";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

export const CourseChart: React.FC = () => {
  const { isOpen } = useContext(SideBarContext);

  // Memoize data
  const data = useMemo(
    () => ({
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Course Distribution',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
          ],
          hoverOffset: 4,
        },
      ],
    }),
    []
  );

  // Memoize options
  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right' as const,
        },
        tooltip: {
          enabled: true,
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
      <h1 className="text-gray-700 text-xl sm:text-2xl font-bold text-center mb-4">
        Course Overview
      </h1>

      <div className="w-full">
        <Doughnut key={`chart-${isOpen}`} data={data} options={options} />
      </div>
    </div>
  );
};
