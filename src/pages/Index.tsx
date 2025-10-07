import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/Header";
import { MandiRates } from "@/components/MandiRates";
import { FertilizerRates } from "@/components/FertilizerRates";
import { PesticideRates } from "@/components/PesticideRates";
import { GovernmentSchemes } from "@/components/GovernmentSchemes";
import { HelpDesk } from "@/components/HelpDesk";
import { PriceCharts } from "@/components/PriceCharts";
import { LocationSelector } from "@/components/LocationSelector";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { QuickNav } from "@/components/QuickNav";
import { FarmingEquipments } from "@/components/FarmingEquipments";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";
import { Language, getTranslation } from "@/utils/translations";
import farmersHero from "@/assets/farmers-hero.jpg";

const Index = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved as Language) || 'en';
  });

  // Refs for scrolling to sections
  const mandiRef = useRef<HTMLDivElement>(null);
  const fertilizersRef = useRef<HTMLDivElement>(null);
  const pesticidesRef = useRef<HTMLDivElement>(null);
  const equipmentRef = useRef<HTMLDivElement>(null);
  const schemesRef = useRef<HTMLDivElement>(null);
  const helpRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      "mandi-rates": mandiRef,
      "fertilizers": fertilizersRef,
      "pesticides": pesticidesRef,
      "equipment": equipmentRef,
      "schemes": schemesRef,
      "help": helpRef,
    };
    
    refs[section]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Persist language selection
  useEffect(() => {
    localStorage.setItem('app_language', language);
  }, [language]);

  // Simulate data refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} language={language} />
      
      {/* Hero Image Section */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img 
          src={farmersHero} 
          alt="Indian farmers working in agricultural fields" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4">
              {getTranslation('appTitle', language)}
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
              <select
                aria-label="Quick section selector"
                className="px-3 py-2 rounded-md bg-white/90 text-black text-sm"
                onChange={(e) => {
                  const value = e.target.value;
                  if (!value) return;
                  handleNavigate(value);
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  {getTranslation('selectSection', language)}
                </option>
                <option value="mandi-rates">{getTranslation('mandiRates', language)}</option>
                <option value="fertilizers">{getTranslation('fertilizerRates', language)}</option>
                <option value="pesticides">{getTranslation('pesticideRates', language)}</option>
                <option value="help">{getTranslation('helpDesk', language)}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Status Card */}
        <Card className="border-success/20 bg-success/5">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-success flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                {getTranslation('liveDataStatus', language)}
              </CardTitle>
              <Badge variant="outline" className="border-success text-success">
                {getTranslation('active', language)}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {getTranslation('lastUpdated', language)}: {lastUpdated.toLocaleString('en-IN')} | 
              {getTranslation('nextRefresh', language)}: {Math.ceil((5 * 60 * 1000 - (Date.now() % (5 * 60 * 1000))) / 1000 / 60)} {getTranslation('minutes', language)}
            </p>
          </CardContent>
        </Card>

        {/* Location Selector */}
        <LocationSelector
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={setSelectedDistrict}
          selectedMarket={selectedMarket}
          setSelectedMarket={setSelectedMarket}
          language={language}
        />

        {/* Quick Navigation */}
        <QuickNav onNavigate={handleNavigate} language={language} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div ref={mandiRef}>
              <MandiRates 
                selectedState={selectedState}
                selectedDistrict={selectedDistrict}
                selectedMarket={selectedMarket}
                searchQuery={searchQuery}
                language={language}
              />
            </div>
            <div ref={fertilizersRef}>
              <FertilizerRates searchQuery={searchQuery} language={language} />
            </div>
          </div>
          
          <div className="space-y-6">
            <div ref={pesticidesRef}>
              <PesticideRates searchQuery={searchQuery} language={language} />
            </div>
            <PriceCharts language={language} />
          </div>
        </div>

        {/* Farming Equipment */}
        <div ref={equipmentRef}>
          <FarmingEquipments searchQuery={searchQuery} language={language} />
        </div>

        {/* Government Schemes & Help Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div ref={schemesRef}>
            <GovernmentSchemes searchQuery={searchQuery} language={language} />
          </div>
          <div ref={helpRef}>
            <HelpDesk language={language} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;