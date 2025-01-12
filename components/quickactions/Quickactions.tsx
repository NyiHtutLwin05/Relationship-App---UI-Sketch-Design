import { Button } from "@/components/ui/button";
import { Calendar, Gift, MessageCircle, Heart, Star } from "lucide-react";

export function QuickActions() {
  const actions = [
    { icon: <Heart className="h-6 w-6" />, label: "Send Love" },
    { icon: <Calendar className="h-6 w-6" />, label: "Plan Date" },
    { icon: <MessageCircle className="h-6 w-6" />, label: "Check In" },
    { icon: <Gift className="h-6 w-6" />, label: "Wishlist" },
    { icon: <Star className="h-6 w-6" />, label: "Goals" },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {actions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          className="h-20 flex flex-col items-center justify-center space-y-1"
        >
          {action.icon}
          <span className="text-xs">{action.label}</span>
        </Button>
      ))}
    </div>
  );
}
