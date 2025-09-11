import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, TrendingUp, TrendingDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface FertilizerRatesProps {
  searchQuery: string;
}

// Mock data for demonstration
const fertilizerData = [
  {
    name: "Urea",
    type: "Inorganic",
    price: 267,
    unit: "₹/50kg bag",
    trend: "stable",
    change: 0,
    subsidyRate: 2067.75,
    company: "IFFCO"
  },
  {
    name: "DAP (Di-ammonium Phosphate)",
    type: "Inorganic", 
    price: 1350,
    unit: "₹/50kg bag",
    trend: "down",
    change: -2.1,
    subsidyRate: 1583.50,
    company: "Coromandel"
  },
  {
    name: "NPK (12:32:16)",
    type: "Inorganic",
    price: 1450,
    unit: "₹/50kg bag", 
    trend: "up",
    change: 1.5,
    subsidyRate: 1200.25,
    company: "Tata Chemicals"
  },
  {
    name: "Organic Compost",
    type: "Organic",
    price: 280,
    unit: "₹/50kg bag",
    trend: "up",
    change: 3.2,
    subsidyRate: 0,
    company: "Local Co-op"
  },
  {
    name: "Vermi Compost",
    type: "Organic",
    price: 450,
    unit: "₹/50kg bag",
    trend: "stable",
    change: 0,
    subsidyRate: 150,
    company: "Multiple"
  },
  {
    name: "Bio-Fertilizer (Rhizobium)",
    type: "Organic",
    price: 180,
    unit: "₹/kg",
    trend: "down",
    change: -1.8,
    subsidyRate: 50,
    company: "NCOF"
  }
];

export const FertilizerRates = ({ searchQuery }: FertilizerRatesProps) => {
  const [filterType, setFilterType] = useState<string>("all");

  const filteredFertilizers = fertilizerData.filter(fertilizer => {
    const matchesSearch = fertilizer.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || fertilizer.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesType;
  });

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-success" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-destructive" />;
      default:
        return <span className="w-4 h-4 flex items-center justify-center text-muted-foreground">—</span>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Leaf className="w-5 h-5 text-success" />
          Fertilizer Rates
        </CardTitle>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setFilterType("all")}
            className={`px-3 py-1 text-sm rounded-md ${
              filterType === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterType("organic")}
            className={`px-3 py-1 text-sm rounded-md ${
              filterType === "organic" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            Organic
          </button>
          <button
            onClick={() => setFilterType("inorganic")}
            className={`px-3 py-1 text-sm rounded-md ${
              filterType === "inorganic" ? "bg-info text-info-foreground" : "bg-muted text-muted-foreground"
            }`}
          >
            Inorganic
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredFertilizers.map((fertilizer, index) => (
            <div key={index} className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">{fertilizer.name}</h4>
                  <Badge variant={fertilizer.type === "Organic" ? "outline" : "secondary"} 
                         className={fertilizer.type === "Organic" ? "border-success text-success" : ""}>
                    {fertilizer.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">₹{fertilizer.price}</span>
                  {getTrendIcon(fertilizer.trend)}
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>Unit: {fertilizer.unit}</span>
                  <span>Company: {fertilizer.company}</span>
                </div>
                {fertilizer.subsidyRate > 0 && (
                  <div className="flex justify-between">
                    <span>Subsidy: ₹{fertilizer.subsidyRate}/MT</span>
                    <span className={fertilizer.trend === "up" ? "text-success" : fertilizer.trend === "down" ? "text-destructive" : "text-muted-foreground"}>
                      {fertilizer.change !== 0 && (
                        <>{fertilizer.change > 0 ? "+" : ""}{fertilizer.change}%</>
                      )}
                      {fertilizer.change === 0 && "No change"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};