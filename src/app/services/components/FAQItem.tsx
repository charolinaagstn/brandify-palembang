'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-foreground">{question}</span>
        <Icon
          name="ChevronDownIcon"
          size={20}
          className={`flex-shrink-0 text-primary transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 text-text-secondary text-sm leading-relaxed border-t border-border pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}