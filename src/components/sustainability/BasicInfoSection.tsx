
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck } from 'lucide-react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface BasicInfoSectionProps {
  companyName: string;
  setCompanyName: (value: string) => void;
  industry: string;
  setIndustry: (value: string) => void;
}

const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({
  companyName,
  setCompanyName,
  industry,
  setIndustry
}) => (
  <motion.section 
    className="mb-10 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-green-200 transition-all"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    whileHover={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}
  >
    <h2 className="text-xl font-bold mb-4 flex items-center text-green-700">
      <ClipboardCheck className="mr-2 h-5 w-5 text-green-600" />
      基本情報
    </h2>
    
    <div className="space-y-4">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Label htmlFor="companyName" className="font-medium">企業名</Label>
        <Input 
          id="companyName" 
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="株式会社〇〇"
          className="mt-1 transition-all focus:ring-2 focus:ring-green-500"
        />
      </motion.div>
      
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Label htmlFor="industry" className="font-medium">業種</Label>
        <Input 
          id="industry" 
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          placeholder="製造業、サービス業など"
          className="mt-1 transition-all focus:ring-2 focus:ring-green-500"
        />
      </motion.div>
    </div>
  </motion.section>
);

export default BasicInfoSection;
