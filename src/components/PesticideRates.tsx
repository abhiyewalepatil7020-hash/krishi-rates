import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bug, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface PesticideRatesProps {
  searchQuery: string;
}

// Mock data for demonstration
const pesticideData = [
  {
    name: "Chlorpyrifos 20% EC",
    type: "Insecticide",
    price: 420,
    unit: "₹/Liter",
    trend: "up",
    change: 1.8,
    company: "UPL Limited",
    activeIngredient: "Chlorpyrifos 20%"
  },
  {
    name: "Mancozeb 75% WP",
    type: "Fungicide",
    price: 680,
    unit: "₹/kg",
    trend: "stable",
    change: 0,
    company: "Indofil Industries",
    activeIngredient: "Mancozeb 75%"
  },
  {
    name: "2,4-D Sodium Salt 80% WP",
    type: "Herbicide",
    price: 320,
    unit: "₹/kg",
    trend: "down",
    change: -2.3,
    company: "Crystal Crop Protection",
    activeIngredient: "2,4-D 80%"
  },
  {
    name: "Imidacloprid 17.8% SL",
    type: "Insecticide",
    price: 1850,
    unit: "₹/Liter",
    trend: "up",
    change: 3.1,
    company: "Bayer CropScience",
    activeIngredient: "Imidacloprid 17.8%"
  },
  {
    name: "Copper Oxychloride 50% WP",
    type: "Fungicide",
    price: 280,
    unit: "₹/kg",
    trend: "stable",
    change: 0,
    company: "Dhanuka Agritech",
    activeIngredient: "Copper Oxychloride 50%"
  },
  {
    name: "Glyphosate 41% SL",
    type: "Herbicide",
    price: 550,
    unit: "₹/Liter",
    trend: "down",
    change: -1.5,
    company: "Monsanto India",
    activeIngredient: "Glyphosate 41%"
  }
];

export const PesticideRates = ({ searchQuery }: PesticideRatesProps) => {
  const filteredPesticides = pesticideData.filter(pesticide =>
    pesticide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pesticide.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-success" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-destructive" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Insecticide":
        return "bg-destructive/10 text-destructive border-destructive";
      case "Fungicide":
        return "bg-warning/10 text-warning border-warning";
      case "Herbicide":
        return "bg-success/10 text-success border-success";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bug className="w-5 h-5 text-warning" />
          Pesticide Rates
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredPesticides.map((pesticide, index) => (
            <div key={index} className="p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">{pesticide.name}</h4>
                  <Badge variant="outline" className={getTypeColor(pesticide.type)}>
                    {pesticide.type}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">₹{pesticide.price}</span>
                  {getTrendIcon(pesticide.trend)}
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>Unit: {pesticide.unit}</span>
                  <span className={
                    pesticide.trend === "up" ? "text-success" : 
                    pesticide.trend === "down" ? "text-destructive" : 
                    "text-muted-foreground"
                  }>
                    {pesticide.change !== 0 && (
                      <>{pesticide.change > 0 ? "+" : ""}{pesticide.change}%</>
                    )}
                    {pesticide.change === 0 && "No change"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Active Ingredient: {pesticide.activeIngredient}</span>
                  <span>Company: {pesticide.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};