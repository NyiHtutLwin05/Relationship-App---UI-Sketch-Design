import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function MoodTracker() {
  const moods = [
    { day: "Mon", mood: 85 },
    { day: "Tue", mood: 90 },
    { day: "Wed", mood: 75 },
    { day: "Thu", mood: 95 },
    { day: "Fri", mood: 88 },
  ];

  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4">Weekly Mood Tracker</h3>
      <div className="space-y-3">
        {moods.map((mood) => (
          <div key={mood.day} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{mood.day}</span>
              <span>{mood.mood}%</span>
            </div>
            <Progress value={mood.mood} />
          </div>
        ))}
      </div>
    </Card>
  );
}
