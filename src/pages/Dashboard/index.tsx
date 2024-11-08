// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
import LineChart from "@/components/ui/LineChart";
import PositionSummary from "@/components/ui/PositionSumary";

export default function Dashboard() {
  // Dados de exemplo para os gráficos
  const playerData = [
    { name: "Jogador 1", points: [5, 7, 6, 8, 9], totalPoints: 35 },
    { name: "Jogador 2", points: [8, 6, 7, 5, 10], totalPoints: 36 },
    { name: "Jogador 3", points: [9, 5, 8, 7, 6], totalPoints: 35 },
    { name: "Jogador 4", points: [6, 8, 5, 9, 7], totalPoints: 35 },
  ];

  const lineChartData = {
    labels: ["Rodada 1", "Rodada 2", "Rodada 3", "Rodada 4", "Rodada 5"],
    datasets: playerData.map((player, index) => ({
      label: player.name,
      data: player.points,
      borderColor: `hsl(${index * 90}, 70%, 50%)`,
      backgroundColor: `hsl(${index * 90}, 70%, 50%, 0.5)`,
    })),
  };

  return (
    <div className="flex flex-col flex-1 gap-4 p-4">
      <div className="grid gap-4 auto-rows-min md:grid-cols-4">
        {/* <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Opa
        </Button> */}
        <div className="min-h-[100vh] flex-1 col-span-3 rounded-xl bg-muted/50 md:min-h-min p-4 w-full">
          <LineChart data={lineChartData} />
        </div>
        <div className="min-h-[100vh] flex-1 col-span-1 rounded-xl bg-muted/50 md:min-h-min p-4">
          <PositionSummary
            summaryData={playerData.map((player) => ({
              name: player.name,
              totalPoints: player.totalPoints,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
