import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu } from "lucide-react";
import { Language, getTranslation } from "@/utils/translations";

interface QuickNavProps {
  onNavigate: (section: string) => void;
  language: Language;
}

export const QuickNav = ({ onNavigate, language }: QuickNavProps) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Menu className="w-5 h-5 text-primary" />
      <Select onValueChange={onNavigate}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder={getTranslation('selectSection', language)} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mandi-rates">{getTranslation('mandiRates', language)}</SelectItem>
          <SelectItem value="fertilizers">{getTranslation('fertilizerRates', language)}</SelectItem>
          <SelectItem value="pesticides">{getTranslation('pesticideRates', language)}</SelectItem>
          <SelectItem value="equipment">{getTranslation('farmingEquipment', language)}</SelectItem>
          <SelectItem value="schemes">{getTranslation('governmentSchemes', language)}</SelectItem>
          <SelectItem value="help">{getTranslation('helpDesk', language)}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};