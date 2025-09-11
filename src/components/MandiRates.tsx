import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface MandiRatesProps {
  selectedState: string;
  selectedDistrict: string;
  selectedMarket: string;
  searchQuery: string;
}

// Mock data for demonstration
const commodityData = [
  {
    name: "Wheat",
    minPrice: 2125,
    maxPrice: 2200,
    modalPrice: 2160,
    trend: "up",
    change: 2.5,
    unit: "₹/Quintal"
  },
  {
    name: "Rice (Common)",
    minPrice: 2850,
    maxPrice: 2950,
    modalPrice: 2900,
    trend: "down",
    change: -1.2,
    unit: "₹/Quintal"
  },
  {
    name: "Paddy (Common)",
    minPrice: 1960,
    maxPrice: 2040,
    modalPrice: 2000,
    trend: "stable",
    change: 0,
    unit: "₹/Quintal"
  },
  {
    name: "Maize",
    minPrice: 1850,
    maxPrice: 1920,
    modalPrice: 1885,
    trend: "up",
    change: 3.1,
    unit: "₹/Quintal"
  },
  {
    name: "Cotton",
    minPrice: 6800,
    maxPrice: 7200,
    modalPrice: 7000,
    trend: "up",
    change: 1.8,
    unit: "₹/Quintal"
  },
  {
    name: "Soybean",
    minPrice: 4200,
    maxPrice: 4400,
    modalPrice: 4300,
    trend: "down",
    change: -0.8,
    unit: "₹/Quintal"
  }
];

export const MandiRates = ({ selectedState, selectedDistrict, selectedMarket, searchQuery }: MandiRatesProps) => {
  const filteredCommodities = commodityData.filter(commodity =>
    commodity.name.toLowerCase().includes(searchQuery.toLowerCase())
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

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-success";
      case "down":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Mandi Rates</span>
          <Badge variant="outline" className="bg-success/10 text-success border-success">
            Live
          </Badge>
        </CardTitle>
        {selectedMarket && (
          <p className="text-sm text-muted-foreground">
            {selectedMarket}, {selectedDistrict}, {selectedState}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredCommodities.map((commodity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <h4 className="font-medium text-foreground">{commodity.name}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Min: {commodity.minPrice}</span>
                  <span>•</span>
                  <span>Max: {commodity.maxPrice}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">
                    ₹{commodity.modalPrice}
                  </span>
                  {getTrendIcon(commodity.trend)}
                </div>
                <div className={`text-sm ${getTrendColor(commodity.trend)}`}>
                  {commodity.change !== 0 && (
                    <>
                      {commodity.change > 0 ? "+" : ""}{commodity.change}%
                    </>
                  )}
                  {commodity.change === 0 && "No change"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};