import { MemoryWall } from "@/components/memory-walls/memoryWall";
import { MobileContainer } from "@/components/mobile-container";
import { MoodTracker } from "@/components/mood-trackers/moodTacker";
import { TabBar } from "@/components/navigation/tab-bar";
import { QuickActions } from "@/components/quickactions/Quickactions";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UpcomingEvents } from "@/components/upcoming/upcoming";
import { Heart, Calendar, Gift, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <MobileContainer>
      <div className="space-y-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Good morning, Alex</h1>
            <p className="text-muted-foreground">
              Your day with Sarah looks bright!
            </p>
          </div>
          <Heart className="text-pink-500" size={28} />
        </div>
        <Card className="p-4 bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="text-white">
            <p className="text-sm font-medium">Today&apos;s Mood</p>
            <h3 className="text-2xl font-bold mt-1">Feeling Loved 💖</h3>
          </div>
        </Card>{" "}
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center space-y-2"
          >
            <Calendar className="h-6 w-6" />
            <span>Anniversary</span>
          </Button>
          <Button
            variant="outline"
            className="h-24 flex flex-col items-center justify-center space-y-2"
          >
            <Gift className="h-6 w-6" />
            <span>Wishlist</span>
          </Button>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <QuickActions />
        </div>
        <MoodTracker />
        <UpcomingEvents />
        <MemoryWall />
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Recent Memories</h2>
            <Button variant="ghost" size="sm">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=60"
              alt="Memory 1"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src="https://images.newscientist.com/wp-content/uploads/2021/05/25160442/gettyimages-129714169_web.jpg"
              alt="Memory 2"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
