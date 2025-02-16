import { FC } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

interface CategorySelectProps {
  availableCategories: string[];
  selectedCategories: string[];
  onChange: (selected: string[]) => void;
}

const CategorySelect: FC<CategorySelectProps> = ({
  availableCategories,
  selectedCategories,
  onChange,
}) => {
  const handleToggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onChange(selectedCategories.filter((c) => c !== category));
    } else {
      onChange([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <Select>
        <SelectTrigger className="w-full">
          <div className="flex items-center gap-2">
            {selectedCategories.length > 0 ? (
              selectedCategories.map((cat) => (
                <Badge key={cat} className="cursor-pointer">
                  {cat}
                </Badge>
              ))
            ) : (
              <SelectValue placeholder="Select categories" />
            )}
            <ChevronDown className="h-4 w-4" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {availableCategories.map((cat) => (
            <SelectItem
              key={cat}
              value={cat}
              onClick={() => handleToggleCategory(cat)}
            >
              {cat}
              {selectedCategories.includes(cat) && " (Selected)"}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySelect;
