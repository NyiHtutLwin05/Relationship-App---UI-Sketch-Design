import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function MemoryWall() {
  const memories = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=60",
      date: "Feb 14, 2024",
      caption: "Valentine's Day Dinner",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60",
      date: "Jan 1, 2024",
      caption: "New Year's Kiss",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&auto=format&fit=crop&q=60",
      date: "Dec 25, 2023",
      caption: "Christmas Morning",
    },
  ];

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex w-full gap-4 pb-4">
        {memories.map((memory) => (
          <Card key={memory.id} className="w-[250px] shrink-0">
            <img
              src={memory.image}
              alt={memory.caption}
              className="h-32 w-full object-cover"
            />
            <div className="p-3">
              <p className="font-medium">{memory.caption}</p>
              <p className="text-sm text-muted-foreground">{memory.date}</p>
            </div>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
