'use client';

import Icon from '@/components/ui/AppIcon';

interface CategoryFilterProps {
  categories: Array<{
    id: string;
    name: string;
    icon: string;
    count: number;
  }>;
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
        <Icon name="FunnelIcon" size={20} variant="solid" className="text-primary" />
        <span>Kategori</span>
      </h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-md transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-muted hover:bg-muted/80 text-foreground'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Icon
                name={category.icon as any}
                size={20}
                variant={activeCategory === category.id ? 'solid' : 'outline'}
              />
              <span className="font-medium">{category.name}</span>
            </div>
            <span
              className={`text-xs font-semibold px-2 py-1 rounded-full ${
                activeCategory === category.id
                  ? 'bg-primary-foreground/20'
                  : 'bg-background'
              }`}
            >
              {category.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;