import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target, Trophy, Clock } from "lucide-react";

export function BucketListStats() {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Progress Overview</h3>
        <Trophy className="h-5 w-5 text-yellow-500" />
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-medium">68%</span>
          </div>
          <Progress value={68} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">12</span>
            </div>
            <p className="text-xs text-muted-foreground">Active Goals</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">5</span>
            </div>
            <p className="text-xs text-muted-foreground">Due Soon</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
