import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface LocationSelectorProps {
  selectedState: string;
  setSelectedState: (state: string) => void;
  selectedDistrict: string;
  setSelectedDistrict: (district: string) => void;
  selectedMarket: string;
  setSelectedMarket: (market: string) => void;
}

// Mock data for demonstration
const states = [
  "Andhra Pradesh", "Bihar", "Gujarat", "Haryana", "Karnataka", 
  "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan", "Tamil Nadu",
  "Uttar Pradesh", "West Bengal"
];

const districts = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Aurangabad", "Solapur"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"],
  // Add more as needed
};

const markets = {
  "Mumbai": ["Vashi APMC", "Turbhe APMC", "Kalamboli Market"],
  "Pune": ["Pune APMC", "Hadapsar Market", "Gultekdi Market"],
  "Ahmedabad": ["Ahmedabad APMC", "Khodiyar Market", "Jamalpur Market"],
  // Add more as needed
};

export const LocationSelector = ({
  selectedState,
  setSelectedState,
  selectedDistrict,
  setSelectedDistrict,
  selectedMarket,
  setSelectedMarket
}: LocationSelectorProps) => {
  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedDistrict("");
    setSelectedMarket("");
  };

  const handleDistrictChange = (district: string) => {
    setSelectedDistrict(district);
    setSelectedMarket("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Select Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">State</label>
            <Select value={selectedState} onValueChange={handleStateChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">District</label>
            <Select 
              value={selectedDistrict} 
              onValueChange={handleDistrictChange}
              disabled={!selectedState}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select District" />
              </SelectTrigger>
              <SelectContent>
                {selectedState && districts[selectedState as keyof typeof districts]?.map((district) => (
                  <SelectItem key={district} value={district}>
                    {district}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">Market</label>
            <Select 
              value={selectedMarket} 
              onValueChange={setSelectedMarket}
              disabled={!selectedDistrict}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Market" />
              </SelectTrigger>
              <SelectContent>
                {selectedDistrict && markets[selectedDistrict as keyof typeof markets]?.map((market) => (
                  <SelectItem key={market} value={market}>
                    {market}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};