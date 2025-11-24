interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

const FormProgress = ({ currentStep, totalSteps }: FormProgressProps) => {
  const steps = [
    { number: 1, label: 'Informasi Dasar' },
    { number: 2, label: 'Pilih Layanan' },
    { number: 3, label: 'Detail Proyek' },
    { number: 4, label: 'Konfirmasi' }
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 -z-10">
          <div 
            className="h-full bg-accent transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
          />
        </div>

        {/* Step Indicators */}
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                step.number < currentStep
                  ? 'bg-accent text-white'
                  : step.number === currentStep
                  ? 'bg-primary text-white ring-4 ring-primary/20' :'bg-white border-2 border-gray-300 text-gray-400'
              }`}
            >
              {step.number < currentStep ? '✓' : step.number}
            </div>
            <span
              className={`mt-2 text-xs font-medium text-center ${
                step.number <= currentStep ? 'text-foreground' : 'text-text-secondary'
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormProgress;