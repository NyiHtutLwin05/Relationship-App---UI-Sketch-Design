import { Card } from "@/components/ui/card";
import { Calendar, Gift, Star } from "lucide-react";

export function UpcomingEvents() {
  const events = [
    {
      icon: <Calendar className="h-4 w-4" />,
      title: "Date Night",
      date: "Tomorrow",
      type: "date",
    },
    {
      icon: <Gift className="h-4 w-4" />,
      title: "Sarah's Birthday",
      date: "In 5 days",
      type: "birthday",
    },
    {
      icon: <Star className="h-4 w-4" />,
      title: "Anniversary",
      date: "In 2 weeks",
      type: "anniversary",
    },
  ];

  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-3">Upcoming Events</h3>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.title}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              {event.icon}
            </div>
            <div>
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-muted-foreground">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
