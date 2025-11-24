'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FileUploadProps {
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
}

const FileUpload = ({ onFilesChange, maxFiles = 5 }: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (newFiles: File[]) => {
    const remainingSlots = maxFiles - files.length;
    const filesToAdd = newFiles.slice(0, remainingSlots);
    const updatedFiles = [...files, ...filesToAdd];
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  return (
    <div className="space-y-4">
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
          dragActive
            ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
        }`}
      >
        <input
          type="file"
          multiple
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept="image/*,.pdf,.doc,.docx"
          disabled={files.length >= maxFiles}
        />
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <Icon name="CloudArrowUpIcon" size={32} className="text-primary" />
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">
              Seret & lepas file atau klik untuk memilih
            </p>
            <p className="text-sm text-text-secondary">
              PNG, JPG, PDF, DOC (Maks. {maxFiles} file)
            </p>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-muted rounded-lg"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <Icon name="DocumentIcon" size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm text-foreground truncate">{file.name}</span>
                <span className="text-xs text-text-secondary flex-shrink-0">
                  {(file.size / 1024).toFixed(1)} KB
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-2 p-1 hover:bg-destructive/10 rounded transition-colors"
              >
                <Icon name="XMarkIcon" size={20} className="text-destructive" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;