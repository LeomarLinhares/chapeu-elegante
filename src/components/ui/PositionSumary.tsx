// components/ui/PositionSummary.tsx
import { Card } from "@/components/ui/card";

interface Player {
  name: string;
  totalPoints: number;
}

interface PositionSummaryProps {
  summaryData: Player[];
}

const PositionSummary: React.FC<PositionSummaryProps> = ({ summaryData }) => {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold">Posição Geral dos Jogadores</h2>
      <ul className="mt-4 space-y-2">
        {summaryData.map((player, index) => (
          <li key={index} className="flex justify-between">
            <span>{player.name}</span>
            <span>{player.totalPoints} pontos</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PositionSummary;
