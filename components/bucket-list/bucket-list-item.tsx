"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Image as ImageIcon,
  MessageSquare,
  Share2,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BucketListItemProps {
  item: {
    id: string;
    title: string;
    category: string;
    priority: "high" | "medium" | "low";
    progress: number;
    dueDate: string;
    images?: readonly string[];
    collaborators?: number;
  };
}

export function BucketListItem({ item }: BucketListItemProps) {
  const [expanded, setExpanded] = useState(false);

  const priorityColors = {
    high: "text-red-500 bg-red-500/10",
    medium: "text-yellow-500 bg-yellow-500/10",
    low: "text-green-500 bg-green-500/10",
  };

  return (
    <Card
      className={cn(
        "p-4 transition-all duration-200",
        expanded && "ring-2 ring-primary"
      )}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{item.title}</h3>
            <div className="flex gap-2 mt-1">
              <Badge variant="secondary">{item.category}</Badge>
              <Badge className={priorityColors[item.priority]}>
                {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
              </Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setExpanded(!expanded)}
          >
            <Target className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progress</span>
            <span>{item.progress}%</span>
          </div>
          <Progress value={item.progress} />
        </div>

        {expanded && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Due {item.dueDate}</span>
            </div>

            {item.images && item.images.length > 0 && (
              <div className="flex gap-2">
                {item.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Progress ${index + 1}`}
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <ImageIcon className="h-4 w-4 mr-2" />
                Add Photo
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <MessageSquare className="h-4 w-4 mr-2" />
                Comment
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
