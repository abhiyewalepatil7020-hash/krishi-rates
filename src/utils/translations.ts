export const translations = {
  en: {
    // Header
    appTitle: "Live Market Rates for Farmers",
    searchPlaceholder: "Search commodities, fertilizers, or pesticides...",
    
    // Location Selector
    selectLocation: "Select Location",
    state: "State",
    district: "District", 
    market: "Market",
    selectState: "Select State",
    selectDistrict: "Select District",
    selectMarket: "Select Market",
    
    // Status
    liveDataStatus: "Live Data Status",
    active: "Active",
    lastUpdated: "Last updated",
    nextRefresh: "Next refresh in",
    minutes: "minutes",
    
    // Mandi Rates
    mandiRates: "Mandi Rates",
    live: "Live",
    min: "Min",
    max: "Max",
    noChange: "No change",
    
    // Fertilizer Rates
    fertilizerRates: "Fertilizer Rates",
    all: "All",
    organic: "Organic",
    inorganic: "Inorganic",
    unit: "Unit",
    company: "Company",
    subsidy: "Subsidy",
    
    // Pesticide Rates
    pesticideRates: "Pesticide Rates",
    activeIngredient: "Active Ingredient",
    
    // Government Schemes
    governmentSchemes: "Government Schemes",
    eligibility: "Eligibility",
    benefits: "Benefits",
    viewDetails: "View Details",
    
    // Help Desk
    helpDesk: "Help Desk",
    submitQuery: "Submit Query",
    name: "Name",
    email: "Email",
    query: "Query",
    enterName: "Enter your name",
    enterEmail: "Enter your email",
    describeQuery: "Describe your query or issue",
    submit: "Submit",
    
    // Price Charts
    priceCharts: "Price Charts",
    fertilizerPrices: "Fertilizer Prices (₹/50kg)",
    pesticidePrices: "Pesticide Prices (₹/L or ₹/kg)"
  },
  
  mr: {
    // Header
    appTitle: "शेतकऱ्यांसाठी थेट बाजार दर",
    searchPlaceholder: "वस्तू, खते किंवा कीटकनाशके शोधा...",
    
    // Location Selector
    selectLocation: "स्थान निवडा",
    state: "राज्य",
    district: "जिल्हा",
    market: "बाजार",
    selectState: "राज्य निवडा",
    selectDistrict: "जिल्हा निवडा", 
    selectMarket: "बाजार निवडा",
    
    // Status
    liveDataStatus: "थेट डेटा स्थिती",
    active: "सक्रिय",
    lastUpdated: "शेवटचे अपडेट",
    nextRefresh: "पुढील रिफ्रेश",
    minutes: "मिनिटे",
    
    // Mandi Rates
    mandiRates: "मंडी दर",
    live: "थेट",
    min: "किमान",
    max: "कमाल",
    noChange: "बदल नाही",
    
    // Fertilizer Rates
    fertilizerRates: "खत दर",
    all: "सर्व",
    organic: "सेंद्रिय",
    inorganic: "अजैविक",
    unit: "एकक",
    company: "कंपनी",
    subsidy: "अनुदान",
    
    // Pesticide Rates
    pesticideRates: "कीटकनाशक दर",
    activeIngredient: "सक्रिय घटक",
    
    // Government Schemes
    governmentSchemes: "सरकारी योजना",
    eligibility: "पात्रता",
    benefits: "फायदे",
    viewDetails: "तपशील पहा",
    
    // Help Desk
    helpDesk: "मदत केंद्र",
    submitQuery: "प्रश्न सबमिट करा",
    name: "नाव",
    email: "ईमेल",
    query: "प्रश्न",
    enterName: "तुमचे नाव टाका",
    enterEmail: "तुमचा ईमेल टाका",
    describeQuery: "तुमचा प्रश्न किंवा समस्या वर्णन करा",
    submit: "सबमिट करा",
    
    // Price Charts
    priceCharts: "किंमत चार्ट",
    fertilizerPrices: "खत किंमती (₹/५०कि.ग्रॅ.)",
    pesticidePrices: "कीटकनाशक किंमती (₹/लि. किंवा ₹/कि.ग्रॅ.)"
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;

export const getTranslation = (key: TranslationKey, language: Language = 'en'): string => {
  return translations[language][key] || translations.en[key];
};