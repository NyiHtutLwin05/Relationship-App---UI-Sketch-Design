import { BucketListFilters } from "@/components/bucket-list-filter/bucketListFilter";
import { BucketListStats } from "@/components/bucket-list-stats/bucketListFilter";
import { BucketListItem } from "@/components/bucket-list/bucket-list-item";
import { MobileContainer } from "@/components/mobile-container";
import { TabBar } from "@/components/navigation/tab-bar";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const bucketListItems = [
  {
    id: "1",
    title: "Visit Paris Together",
    category: "Travel",
    priority: "high",
    progress: 75,
    dueDate: "December 2024",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80",
    ],
    collaborators: 2,
  },
  {
    id: "2",
    title: "Learn to Dance",
    category: "Learning",
    priority: "medium",
    progress: 45,
    dueDate: "August 2024",
    collaborators: 2,
  },
  {
    id: "3",
    title: "Go Skydiving",
    category: "Adventure",
    priority: "low",
    progress: 20,
    dueDate: "September 2024",
    images: [
      "https://images.unsplash.com/photo-1521673461164-de300ebcfb17?w=400&q=80",
    ],
  },
] as const;

export default function BucketList() {
  return (
    <MobileContainer>
      <div className="rounded-lg">
        {/* Header */}
        <div className=" top-0 bg-background/80 backdrop-blur-sm border-b z-10">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold">Bucket List</h1>
                <p className="text-muted-foreground">
                  Track your shared dreams
                </p>
              </div>
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <BucketListFilters />
          </div>
        </div>

        <div className="p-4 space-y-6">
          {/* Stats */}
          <BucketListStats />

          {/* Bucket List Items */}
          <div className="space-y-4">
            {bucketListItems.map((item) => (
              <BucketListItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
