import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench } from "lucide-react";
import { Language, getTranslation } from "@/utils/translations";

interface FarmingEquipmentsProps {
  searchQuery: string;
  language: Language;
}

const equipmentData = [
  {
    name: "Tractor",
    nameTranslations: {
      en: "Tractor",
      mr: "ट्रॅक्टर",
      hi: "ट्रैक्टर",
      gu: "ટ્રેક્ટર",
      te: "ట్రాక్టర్"
    },
    uses: "Plowing, tilling, planting, harvesting operations",
    usesTranslations: {
      en: "Plowing, tilling, planting, harvesting operations",
      mr: "नांगरणी, मशागत, लागवड, कापणी",
      hi: "जुताई, बुवाई, रोपण, कटाई",
      gu: "ખેડવું, વાવેતર, રોપણી, લણણી",
      te: "దున్నడం, విత్తడం, నాటడం, కోత"
    },
    price: "₹5,00,000 - ₹15,00,000",
    image: "https://images.unsplash.com/photo-1562789812-5bc5c9e26fc0?w=400"
  },
  {
    name: "Rotavator",
    nameTranslations: {
      en: "Rotavator",
      mr: "रोटावेटर",
      hi: "रोटावेटर",
      gu: "રોટાવેટર",
      te: "రోటావేటర్"
    },
    uses: "Soil preparation, breaking clods, mixing crop residue",
    usesTranslations: {
      en: "Soil preparation, breaking clods, mixing crop residue",
      mr: "माती तयार करणे, ढेकळे फोडणे, पिकांचे अवशेष मिसळणे",
      hi: "मिट्टी तैयार करना, ढेले तोड़ना, फसल अवशेष मिलाना",
      gu: "માટી તૈયાર કરવી, ઢેફાં તોડવા, પાકના અવશેષ ભેળવવા",
      te: "నేల తయారీ, ముద్దలు పగులగొట్టడం, పంట అవశేషాలు కలపడం"
    },
    price: "₹50,000 - ₹1,50,000",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400"
  },
  {
    name: "Seed Drill",
    nameTranslations: {
      en: "Seed Drill",
      mr: "बियाणे ड्रिल",
      hi: "बीज ड्रिल",
      gu: "બીજ ડ્રિલ",
      te: "విత్తన డ్రిల్"
    },
    uses: "Precise seed sowing, uniform spacing, depth control",
    usesTranslations: {
      en: "Precise seed sowing, uniform spacing, depth control",
      mr: "अचूक बियाणे पेरणी, एकसमान अंतर, खोली नियंत्रण",
      hi: "सटीक बीज बुवाई, समान दूरी, गहराई नियंत्रण",
      gu: "ચોક્કસ બીજ વાવેતર, સમાન અંતર, ઊંડાઈ નિયંત્રણ",
      te: "ఖచ్చితమైన విత్తనం విత్తడం, ఏకరీతి అంతరం, లోతు నియంత్రణ"
    },
    price: "₹30,000 - ₹80,000",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400"
  },
  {
    name: "Sprayer",
    nameTranslations: {
      en: "Sprayer",
      mr: "फवारणी यंत्र",
      hi: "स्प्रेयर",
      gu: "સ્પ્રેયર",
      te: "స్ప్రేయర్"
    },
    uses: "Pesticide application, fertilizer spraying, herbicide use",
    usesTranslations: {
      en: "Pesticide application, fertilizer spraying, herbicide use",
      mr: "कीटकनाशक फवारणी, खत फवारणी, तणनाशक वापर",
      hi: "कीटनाशक छिड़काव, उर्वरक छिड़काव, खरपतवारनाशी उपयोग",
      gu: "કીટનાશક છંટકાવ, ખાતર છંટકાવ, નીંદણનાશક ઉપયોગ",
      te: "క్రిమి సంహారిణి స్ప్రే, ఎరువుల పిచికారీ, కలుపుల మందు ఉపయోగం"
    },
    price: "₹5,000 - ₹50,000",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400"
  },
  {
    name: "Harvester",
    nameTranslations: {
      en: "Harvester",
      mr: "कापणी यंत्र",
      hi: "हार्वेस्टर",
      gu: "લણણી યંત્ર",
      te: "కోత యంత్రం"
    },
    uses: "Crop harvesting, threshing, grain collection",
    usesTranslations: {
      en: "Crop harvesting, threshing, grain collection",
      mr: "पीक कापणी, मळणी, धान्य संकलन",
      hi: "फसल कटाई, थ्रेशिंग, अनाज संग्रह",
      gu: "પાક લણણી, થ્રેશિંગ, અનાજ સંગ્રહ",
      te: "పంట కోత, నూర్పిడి, ధాన్యం సేకరణ"
    },
    price: "₹8,00,000 - ₹25,00,000",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400"
  },
  {
    name: "Cultivator",
    nameTranslations: {
      en: "Cultivator",
      mr: "कल्टिवेटर",
      hi: "कल्टीवेटर",
      gu: "કલ્ટિવેટર",
      te: "కల్టివేటర్"
    },
    uses: "Secondary tillage, weed control, soil aeration",
    usesTranslations: {
      en: "Secondary tillage, weed control, soil aeration",
      mr: "दुय्यम मशागत, तण नियंत्रण, माती वातन",
      hi: "द्वितीयक जुताई, खरपतवार नियंत्रण, मिट्टी वातन",
      gu: "ગૌણ ખેડ, નીંદણ નિયંત્રણ, માટી વાતાવરણીકરણ",
      te: "ద్వితీయ దున్నుట, కలుపు నియంత్రణ, నేల వాయుసంచారం"
    },
    price: "₹25,000 - ₹75,000",
    image: "https://images.unsplash.com/photo-1589923188900-4584e156b4b3?w=400"
  },
  {
    name: "Irrigation Pump",
    nameTranslations: {
      en: "Irrigation Pump",
      mr: "सिंचन पंप",
      hi: "सिंचाई पंप",
      gu: "સિંચાઈ પંપ",
      te: "నీటిపారుదల పంపు"
    },
    uses: "Water distribution, field irrigation, drip systems",
    usesTranslations: {
      en: "Water distribution, field irrigation, drip systems",
      mr: "पाणी वितरण, शेत सिंचन, ठिबक यंत्रणा",
      hi: "जल वितरण, खेत सिंचाई, ड्रिप सिस्टम",
      gu: "પાણી વિતરણ, ખેત સિંચાઈ, ટીપું પ્રણાલી",
      te: "నీటి పంపిణీ, పొల నీటిపారుదల, డ్రిప్ వ్యవస్థలు"
    },
    price: "₹15,000 - ₹1,00,000",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400"
  },
  {
    name: "Thresher",
    nameTranslations: {
      en: "Thresher",
      mr: "मळणी यंत्र",
      hi: "थ्रेशर",
      gu: "થ્રેશર",
      te: "నూర్పిడి యంత్రం"
    },
    uses: "Grain separation, crop processing, cleaning",
    usesTranslations: {
      en: "Grain separation, crop processing, cleaning",
      mr: "धान्य विभक्त करणे, पीक प्रक्रिया, साफसफाई",
      hi: "अनाज पृथक्करण, फसल प्रसंस्करण, सफाई",
      gu: "અનાજ વિભાજન, પાક પ્રક્રિયા, સફાઈ",
      te: "ధాన్యం విభజన, పంట ప్రాసెసింగ్, శుభ్రపరచడం"
    },
    price: "₹40,000 - ₹1,50,000",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400"
  }
];

export const FarmingEquipments = ({ searchQuery, language }: FarmingEquipmentsProps) => {
  const filteredEquipment = equipmentData.filter(equipment =>
    equipment.nameTranslations[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
    equipment.usesTranslations[language].toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="w-5 h-5 text-primary" />
          {getTranslation('farmingEquipment', language)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEquipment.map((equipment, index) => (
            <div key={index} className="bg-muted/50 rounded-lg overflow-hidden border border-border/50">
              <img 
                src={equipment.image} 
                alt={equipment.nameTranslations[language]}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-foreground mb-2">{equipment.nameTranslations[language]}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium">{getTranslation('uses', language)}:</span> {equipment.usesTranslations[language]}
                </p>
                <Badge variant="outline" className="bg-success/10 text-success border-success">
                  {getTranslation('price', language)}: {equipment.price}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};