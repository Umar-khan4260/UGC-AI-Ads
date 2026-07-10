import type React from "react";

export interface UploadZoneProps {
  lable: string;
  file: File | null;
  onClear: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
