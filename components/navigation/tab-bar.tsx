"use client";

import { Home, Image, List, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Image, label: "Memories", href: "/memories" },
  { icon: List, label: "Bucket List", href: "/bucket-list" },
  { icon: MessageCircle, label: "Chat", href: "/chat" },
  { icon: User, label: "Profile", href: "/profile" },
];

export function TabBar() {
  const pathname = usePathname();

  return (
    <div className="relative left-1/2 transform -translate-x-1/2 w-full max-w-[430px] h-[90px] bg-gray-100 border-t">
      <div className="flex justify-around items-center h-full px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex flex-col items-center space-y-1",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon size={24} />
              <span className="text-xs font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
