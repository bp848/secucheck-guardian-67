
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface InquiryDialogProps {
  buttonLabel?: React.ReactNode;
  buttonClassName?: string;
}

const InquiryDialog: React.FC<InquiryDialogProps> = ({ 
  buttonLabel = "お問い合わせ",
  buttonClassName = "w-full sm:w-auto gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
}) => {
  const handleInquiryClick = () => {
    window.open('https://form.typeform.com/to/Qv6t1Q', '_blank');
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={handleInquiryClick}
      className={buttonClassName}
    >
      <Mail className="h-4 w-4" />
      {buttonLabel}
    </Button>
  );
};

export default InquiryDialog;
