import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Filter, SortAsc, SortDesc } from "lucide-react";

export function BucketListFilters() {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex-1">
        <Input placeholder="Search bucket list..." />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Filter By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>All Categories</DropdownMenuItem>
          <DropdownMenuItem>Adventure</DropdownMenuItem>
          <DropdownMenuItem>Travel</DropdownMenuItem>
          <DropdownMenuItem>Learning</DropdownMenuItem>
          <DropdownMenuItem>Relationship</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SortAsc className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuLabel>Sort By</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Priority (High to Low)</DropdownMenuItem>
          <DropdownMenuItem>Priority (Low to High)</DropdownMenuItem>
          <DropdownMenuItem>Progress</DropdownMenuItem>
          <DropdownMenuItem>Due Date</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
