import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Calendar, MapPin } from "lucide-react";
import { Language, getTranslation } from "@/utils/translations";

interface GovernmentSchemesProps {
  searchQuery: string;
  language: Language;
}

// Mock data for demonstration
const schemes = [
  {
    name: "PM-KISAN",
    description: "Income support of ₹6,000 per year to farmer families",
    eligibility: "Small and marginal farmers with land holding up to 2 hectares",
    amount: "₹6,000/year",
    status: "Active",
    deadline: "2024-03-31",
    type: "Financial Support"
  },
  {
    name: "Pradhan Mantri Fasal Bima Yojana",
    description: "Crop insurance scheme providing financial support to farmers",
    eligibility: "All farmers growing crops in notified areas",
    amount: "Up to ₹2,00,000",
    status: "Active",
    deadline: "2024-04-15",
    type: "Insurance"
  },
  {
    name: "Kisan Credit Card",
    description: "Credit facility for agriculture and allied activities",
    eligibility: "All farmers including sharecroppers and tenant farmers",
    amount: "Based on crop requirement",
    status: "Active",
    deadline: "Ongoing",
    type: "Credit"
  },
  {
    name: "Soil Health Card",
    description: "Free soil testing and recommendations for crop productivity",
    eligibility: "All farmers",
    amount: "Free",
    status: "Active",
    deadline: "Ongoing",
    type: "Technical Support"
  },
  {
    name: "National Agriculture Market (e-NAM)",
    description: "Online trading platform for agricultural commodities",
    eligibility: "Farmers selling in APMC markets",
    amount: "Free registration",
    status: "Active",
    deadline: "Ongoing",
    type: "Market Access"
  },
  {
    name: "Paramparagat Krishi Vikas Yojana",
    description: "Promotion of organic farming practices",
    eligibility: "Farmers willing to adopt organic farming",
    amount: "₹50,000/hectare for 3 years",
    status: "Active", 
    deadline: "2024-06-30",
    type: "Organic Farming"
  }
];

export const GovernmentSchemes = ({ searchQuery, language }: GovernmentSchemesProps) => {
  const filteredSchemes = schemes.filter(scheme =>
    scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scheme.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Financial Support":
        return "bg-success/10 text-success border-success";
      case "Insurance":
        return "bg-info/10 text-info border-info";
      case "Credit":
        return "bg-warning/10 text-warning border-warning";
      case "Technical Support":
        return "bg-accent/10 text-accent border-accent";
      case "Market Access":
        return "bg-primary/10 text-primary border-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          {getTranslation('governmentSchemes', language)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredSchemes.map((scheme, index) => (
            <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border/50">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{scheme.name}</h4>
                  <Badge variant="outline" className={getTypeColor(scheme.type)}>
                    {scheme.type}
                  </Badge>
                </div>
                <Badge variant={scheme.status === "Active" ? "default" : "secondary"} 
                       className={scheme.status === "Active" ? "bg-success text-success-foreground" : ""}>
                  {scheme.status === "Active" ? getTranslation('active', language) : scheme.status}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">{scheme.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{getTranslation('eligibility', language)}:</span>
                  <span className="text-foreground">{scheme.eligibility}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{getTranslation('deadline', language)}:</span>
                    <span className="text-foreground">{scheme.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">{getTranslation('amount', language)}:</span>
                    <span className="font-semibold text-success">{scheme.amount}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  {getTranslation('applyNow', language)}
                </Button>
                <Button size="sm" variant="ghost">
                  {getTranslation('learnMore', language)}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};