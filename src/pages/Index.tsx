import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { MandiRates } from "@/components/MandiRates";
import { FertilizerRates } from "@/components/FertilizerRates";
import { PesticideRates } from "@/components/PesticideRates";
import { GovernmentSchemes } from "@/components/GovernmentSchemes";
import { HelpDesk } from "@/components/HelpDesk";
import { PriceCharts } from "@/components/PriceCharts";
import { LocationSelector } from "@/components/LocationSelector";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";

const Index = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");

  // Simulate data refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 5 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Status Card */}
        <Card className="border-success/20 bg-success/5">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-success flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                Live Data Status
              </CardTitle>
              <Badge variant="outline" className="border-success text-success">
                Active
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated.toLocaleString('en-IN')} | 
              Next refresh in: {Math.ceil((5 * 60 * 1000 - (Date.now() % (5 * 60 * 1000))) / 1000 / 60)} minutes
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
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <MandiRates 
              selectedState={selectedState}
              selectedDistrict={selectedDistrict}
              selectedMarket={selectedMarket}
              searchQuery={searchQuery}
            />
            <FertilizerRates searchQuery={searchQuery} />
          </div>
          
          <div className="space-y-6">
            <PesticideRates searchQuery={searchQuery} />
            <PriceCharts />
          </div>
        </div>

        {/* Government Schemes & Help Desk */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <GovernmentSchemes searchQuery={searchQuery} />
          <HelpDesk />
        </div>
      </main>
    </div>
  );
};

export default Index;