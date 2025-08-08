
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, X } from "lucide-react";

interface FilterState {
  categories: string[];
  skillLevel: string;
  budgetRange: number[];
  deliveryTime: string;
}

const categories = [
  "Web Development", "Graphic Design", "Content Writing", "Photography",
  "Digital Marketing", "Data Analysis", "Consulting", "Translation"
];

const skillLevels = ["Entry Level", "Intermediate", "Expert", "Any Level"];
const deliveryOptions = ["24 hours", "3 days", "1 week", "2 weeks", "1 month", "Any Time"];

const FilterPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    skillLevel: "Any Level",
    budgetRange: [10, 100],
    deliveryTime: "Any Time"
  });

  const toggleCategory = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      skillLevel: "Any Level",
      budgetRange: [10, 100],
      deliveryTime: "Any Time"
    });
  };

  const activeFiltersCount = 
    filters.categories.length + 
    (filters.skillLevel !== "Any Level" ? 1 : 0) + 
    (filters.deliveryTime !== "Any Time" ? 1 : 0) +
    (filters.budgetRange[0] !== 10 || filters.budgetRange[1] !== 100 ? 1 : 0);

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        className="relative border-2 border-terracotta/20 hover:border-terracotta hover:bg-terracotta/5"
      >
        <Filter className="h-4 w-4 mr-2" />
        Advanced Filters
        {activeFiltersCount > 0 && (
          <Badge className="ml-2 bg-terracotta text-white text-xs px-2 py-1">
            {activeFiltersCount}
          </Badge>
        )}
      </Button>

      {isOpen && (
        <Card className="absolute top-full left-0 mt-2 w-96 z-50 bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-soft-charcoal font-space-grotesk">
                Filter Results
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {/* Categories */}
              <div>
                <label className="text-sm font-medium text-soft-charcoal mb-3 block">
                  Categories
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Badge
                      key={category}
                      variant={filters.categories.includes(category) ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-200 ${
                        filters.categories.includes(category)
                          ? "bg-terracotta text-white hover:bg-terracotta/90"
                          : "hover:bg-terracotta/10 hover:border-terracotta"
                      }`}
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Skill Level */}
              <div>
                <label className="text-sm font-medium text-soft-charcoal mb-3 block">
                  Skill Level
                </label>
                <Select
                  value={filters.skillLevel}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, skillLevel: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {skillLevels.map(level => (
                      <SelectItem key={level} value={level}>{level}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="text-sm font-medium text-soft-charcoal mb-3 block">
                  Budget Range (${filters.budgetRange[0]} - ${filters.budgetRange[1]}/hr)
                </label>
                <Slider
                  value={filters.budgetRange}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, budgetRange: value }))}
                  max={200}
                  min={5}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Delivery Time */}
              <div>
                <label className="text-sm font-medium text-soft-charcoal mb-3 block">
                  Delivery Time
                </label>
                <Select
                  value={filters.deliveryTime}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, deliveryTime: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {deliveryOptions.map(option => (
                      <SelectItem key={option} value={option}>{option}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="flex-1"
                >
                  Clear All
                </Button>
                <Button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-terracotta hover:bg-terracotta/90"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default FilterPanel;
