// components/ui/LineChart.tsx
import { Line } from "react-chartjs-2";
import { ChartData } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface LineChartProps {
  data: ChartData<"line", number[], string>;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <div className="w-full h-full">
      <Line
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Permite ao gráfico se ajustar ao contêiner
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Posição dos Jogadores por Rodada",
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
