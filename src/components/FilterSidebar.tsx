import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FilterSection = {
  title: string;
  options?: string[];
  defaultOpen?: boolean;
};

const filters: FilterSection[] = [
  { title: "Absorbency", options: ["Light ●○○○○", "Regular ●●○○○", "Heavy ●●●●○"], defaultOpen: true },
  { title: "Product Type", options: ["Cup", "Disc", "Duo Pack"] },
  { title: "Size", options: ["Small", "Regular"] },
  { title: "Style", options: ["Soft", "Original", "Firm"] },
  { title: "Collection", options: ["Cups", "Discs", "Bundles"] },
];

const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    Object.fromEntries(filters.map((f) => [f.title, f.defaultOpen ?? false]))
  );

  const toggle = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className="w-full">
      <h3 className="text-sm font-medium text-foreground mb-4 pb-2 border-b border-border">Filter:</h3>
      {filters.map((filter) => (
        <div key={filter.title} className="border-b border-border">
          <button
            onClick={() => toggle(filter.title)}
            className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            {filter.title}
            {openSections[filter.title] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {openSections[filter.title] && filter.options && (
            <div className="pb-3 space-y-2">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                  <input type="checkbox" className="rounded border-border accent-primary w-4 h-4" />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
