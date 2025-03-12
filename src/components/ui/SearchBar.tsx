
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({ 
  className, 
  placeholder = "Search for facts...", 
  onSearch 
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && onSearch) {
      onSearch(query.trim());
    }
  };

  const clearSearch = () => {
    setQuery("");
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className={cn(
        "relative flex w-full max-w-md items-center transition-all duration-300",
        isFocused ? "scale-[1.02]" : "scale-100",
        className
      )}
    >
      <div className="relative flex w-full items-center">
        <div className="pointer-events-none absolute left-3 flex h-full items-center text-muted-foreground">
          <Search size={18} />
        </div>
        
        <input
          type="text"
          className="w-full rounded-lg bg-muted/70 py-2 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/50 backdrop-blur-sm transition-all"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-3 text-muted-foreground hover:text-foreground"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </form>
  );
}
