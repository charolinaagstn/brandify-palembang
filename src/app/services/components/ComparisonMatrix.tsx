'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface MatrixFeature {
  name: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

interface ComparisonMatrixProps {
  features: MatrixFeature[];
}

export default function ComparisonMatrix({ features }: ComparisonMatrixProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayFeatures = isExpanded ? features : features.slice(0, 8);

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted">
              <th className="text-left p-4 font-bold text-foreground">Fitur</th>
              <th className="text-center p-4 font-bold text-foreground">Basic</th>
              <th className="text-center p-4 font-bold text-foreground">Standard</th>
              <th className="text-center p-4 font-bold text-foreground bg-accent/10">Premium</th>
            </tr>
          </thead>
          <tbody>
            {displayFeatures.map((feature, index) => (
              <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                <td className="p-4 text-sm text-foreground">{feature.name}</td>
                <td className="p-4 text-center">
                  {feature.basic ? (
                    <Icon name="CheckIcon" size={20} variant="solid" className="text-success mx-auto" />
                  ) : (
                    <Icon name="XMarkIcon" size={20} className="text-muted-foreground mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.standard ? (
                    <Icon name="CheckIcon" size={20} variant="solid" className="text-success mx-auto" />
                  ) : (
                    <Icon name="XMarkIcon" size={20} className="text-muted-foreground mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center bg-accent/5">
                  {feature.premium ? (
                    <Icon name="CheckIcon" size={20} variant="solid" className="text-success mx-auto" />
                  ) : (
                    <Icon name="XMarkIcon" size={20} className="text-muted-foreground mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {features.length > 8 && (
        <div className="p-4 border-t border-border bg-muted/30">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-center text-primary font-medium text-sm flex items-center justify-center gap-2 hover:text-primary/80 transition-colors"
          >
            {isExpanded ? 'Lihat Lebih Sedikit' : `Lihat ${features.length - 8} Fitur Lainnya`}
            <Icon
              name="ChevronDownIcon"
              size={16}
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      )}
    </div>
  );
}