import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Dashboard() {
  return (
    <div className="flex flex-col flex-1 gap-4 p-4">
      <div className="grid gap-4 auto-rows-min md:grid-cols-3">
        <Button
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
        </Button>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </div>
  )
}
