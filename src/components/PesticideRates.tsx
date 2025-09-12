import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bug, TrendingUp, TrendingDown, Minus } from "lucide-react";

interface PesticideRatesProps {
  searchQuery: string;
}

// Comprehensive pesticide data from Indian markets
const pesticideData = [
  {
    name: "Chlorpyrifos 20% EC",
    type: "Insecticide",
    price: 420,
    unit: "₹/Liter",
    trend: "up",
    change: 1.8,
    company: "UPL Limited",
    activeIngredient: "Chlorpyrifos 20%",
    use: "Controls termites, aphids, and soil insects in cotton, rice, and vegetables"
  },
  {
    name: "Profenofos 50% EC",
    type: "Insecticide",
    price: 680,
    unit: "₹/Liter",
    trend: "stable",
    change: 0.2,
    company: "Syngenta",
    activeIngredient: "Profenofos 50%",
    use: "Effective against bollworms, aphids, and thrips in cotton and vegetables"
  },
  {
    name: "Cypermethrin 25% EC",
    type: "Insecticide",
    price: 850,
    unit: "₹/Liter",
    trend: "up",
    change: 2.1,
    company: "FMC India",
    activeIngredient: "Cypermethrin 25%"
  },
  {
    name: "Thiamethoxam 25% WG",
    type: "Insecticide",
    price: 2200,
    unit: "₹/kg",
    trend: "down",
    change: -1.3,
    company: "Syngenta",
    activeIngredient: "Thiamethoxam 25%"
  },
  {
    name: "Fipronil 5% SC",
    type: "Insecticide",
    price: 1950,
    unit: "₹/Liter",
    trend: "up",
    change: 3.5,
    company: "BASF India",
    activeIngredient: "Fipronil 5%"
  },
  {
    name: "Acetamiprid 20% SP",
    type: "Insecticide",
    price: 1800,
    unit: "₹/kg",
    trend: "stable",
    change: 0.1,
    company: "Nippon Soda",
    activeIngredient: "Acetamiprid 20%"
  },
  {
    name: "Mancozeb 75% WP",
    type: "Fungicide",
    price: 680,
    unit: "₹/kg",
    trend: "stable",
    change: 0,
    company: "Indofil Industries",
    activeIngredient: "Mancozeb 75%",
    use: "Controls blight, rust, and downy mildew in potatoes, tomatoes, and grapes"
  },
  {
    name: "Propiconazole 25% EC",
    type: "Fungicide",
    price: 1450,
    unit: "₹/Liter",
    trend: "up",
    change: 1.8,
    company: "Syngenta",
    activeIngredient: "Propiconazole 25%"
  },
  {
    name: "Carbendazim 50% WP",
    type: "Fungicide",
    price: 420,
    unit: "₹/kg",
    trend: "down",
    change: -0.8,
    company: "BASF India",
    activeIngredient: "Carbendazim 50%"
  },
  {
    name: "Azoxystrobin 23% SC",
    type: "Fungicide",
    price: 3200,
    unit: "₹/Liter",
    trend: "up",
    change: 2.5,
    company: "Syngenta",
    activeIngredient: "Azoxystrobin 23%"
  },
  {
    name: "Tebuconazole 25.9% EC",
    type: "Fungicide",
    price: 1680,
    unit: "₹/Liter",
    trend: "stable",
    change: 0.3,
    company: "Bayer CropScience",
    activeIngredient: "Tebuconazole 25.9%"
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
    name: "2,4-D Sodium Salt 80% WP",
    type: "Herbicide",
    price: 320,
    unit: "₹/kg",
    trend: "down",
    change: -2.3,
    company: "Crystal Crop Protection",
    activeIngredient: "2,4-D 80%",
    use: "Selective herbicide for broadleaf weeds in wheat, rice, and sugarcane"
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
  },
  {
    name: "Atrazine 50% WP",
    type: "Herbicide",
    price: 380,
    unit: "₹/kg",
    trend: "up",
    change: 1.2,
    company: "Syngenta",
    activeIngredient: "Atrazine 50%"
  },
  {
    name: "Pendimethalin 30% EC",
    type: "Herbicide",
    price: 920,
    unit: "₹/Liter",
    trend: "stable",
    change: 0.5,
    company: "BASF India",
    activeIngredient: "Pendimethalin 30%"
  },
  {
    name: "Oxyfluorfen 23.5% EC",
    type: "Herbicide",
    price: 1250,
    unit: "₹/Liter",
    trend: "up",
    change: 2.8,
    company: "Dow AgroSciences",
    activeIngredient: "Oxyfluorfen 23.5%"
  },
  {
    name: "Imazethapyr 10% SL",
    type: "Herbicide",
    price: 1850,
    unit: "₹/Liter",
    trend: "down",
    change: -1.1,
    company: "BASF India",
    activeIngredient: "Imazethapyr 10%"
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
    name: "Lambda Cyhalothrin 5% EC",
    type: "Insecticide",
    price: 2400,
    unit: "₹/Liter",
    trend: "up",
    change: 1.9,
    company: "Syngenta",
    activeIngredient: "Lambda Cyhalothrin 5%"
  },
  {
    name: "Emamectin Benzoate 5% SG",
    type: "Insecticide",
    price: 4200,
    unit: "₹/kg",
    trend: "stable",
    change: 0.2,
    company: "Syngenta",
    activeIngredient: "Emamectin Benzoate 5%"
  },
  {
    name: "Spinosad 45% SC",
    type: "Insecticide",
    price: 5800,
    unit: "₹/Liter",
    trend: "up",
    change: 3.8,
    company: "Dow AgroSciences",
    activeIngredient: "Spinosad 45%"
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
                <div className="mb-2">
                  <span className="font-medium text-foreground">Use: </span>
                  <span>{pesticide.use}</span>
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