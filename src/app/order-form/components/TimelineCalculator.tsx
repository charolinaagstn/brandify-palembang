import Icon from '@/components/ui/AppIcon';

interface TimelineCalculatorProps {
  selectedServices: string[];
  urgency: string;
}

const TimelineCalculator = ({ selectedServices, urgency }: TimelineCalculatorProps) => {
  const calculateTimeline = () => {
    const baseTimelines: { [key: string]: number } = {
      'logo-design': 7,
      'brand-identity': 14,
      'social-media': 5,
      'packaging': 10,
      'web-design': 21,
      'print-design': 7
    };

    let totalDays = selectedServices.reduce((sum, serviceId) => {
      return sum + (baseTimelines[serviceId] || 7);
    }, 0);

    // Adjust for urgency
    if (urgency === 'express') {
      totalDays = Math.ceil(totalDays * 0.6);
    } else if (urgency === 'standard') {
      totalDays = Math.ceil(totalDays * 0.8);
    }

    return totalDays;
  };

  const estimatedDays = calculateTimeline();
  const estimatedWeeks = Math.ceil(estimatedDays / 7);

  if (selectedServices.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-6 border border-accent/20">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon name="CalendarIcon" size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-foreground mb-2">
            Estimasi Waktu Pengerjaan
          </h3>
          <div className="flex items-baseline space-x-2 mb-3">
            <span className="text-4xl font-bold text-accent">{estimatedDays}</span>
            <span className="text-text-secondary">hari kerja</span>
            <span className="text-text-secondary">({estimatedWeeks} minggu)</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-text-secondary">
              <Icon name="CheckCircleIcon" size={16} className="mr-2 text-success" />
              <span>Termasuk revisi dan konsultasi</span>
            </div>
            <div className="flex items-center text-sm text-text-secondary">
              <Icon name="CheckCircleIcon" size={16} className="mr-2 text-success" />
              <span>Timeline dapat disesuaikan dengan kebutuhan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCalculator;