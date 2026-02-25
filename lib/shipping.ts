export type CountryCode = string;

export type ShippingZone = 'zone1' | 'zone2' | 'zone3' | 'zone4' | 'zone5';

export interface ShippingRate {
  maxWeight: number; // grams
  costUSD: number;
}

// 日本郵便 国際小包 航空便料金（USD換算 ¥150=$1）
// 全Zone 30kgまで対応（2026年2月25日更新）
export const SHIPPING_RATES: Record<ShippingZone, ShippingRate[]> = {
  zone1: [ // 中国、韓国、台湾
    { maxWeight: 1000, costUSD: 13.67 },   // 1kg: ¥2,050
    { maxWeight: 2000, costUSD: 18.33 },   // 2kg: ¥2,750
    { maxWeight: 3000, costUSD: 23.00 },   // 3kg: ¥3,450
    { maxWeight: 4000, costUSD: 27.67 },   // 4kg: ¥4,150
    { maxWeight: 5000, costUSD: 32.33 },   // 5kg: ¥4,850
    { maxWeight: 6000, costUSD: 37.00 },   // 6kg: ¥5,550
    { maxWeight: 7000, costUSD: 41.67 },   // 7kg: ¥6,250
    { maxWeight: 8000, costUSD: 46.33 },   // 8kg: ¥6,950
    { maxWeight: 9000, costUSD: 51.00 },   // 9kg: ¥7,650
    { maxWeight: 10000, costUSD: 55.67 },  // 10kg: ¥8,350
    { maxWeight: 11000, costUSD: 59.00 },  // 11kg: ¥8,850
    { maxWeight: 12000, costUSD: 62.33 },  // 12kg: ¥9,350
    { maxWeight: 13000, costUSD: 65.67 },  // 13kg: ¥9,850
    { maxWeight: 14000, costUSD: 69.00 },  // 14kg: ¥10,350
    { maxWeight: 15000, costUSD: 72.33 },  // 15kg: ¥10,850
    { maxWeight: 16000, costUSD: 75.67 },  // 16kg: ¥11,350
    { maxWeight: 17000, costUSD: 79.00 },  // 17kg: ¥11,850
    { maxWeight: 18000, costUSD: 82.33 },  // 18kg: ¥12,350
    { maxWeight: 19000, costUSD: 85.67 },  // 19kg: ¥12,850
    { maxWeight: 20000, costUSD: 89.00 },  // 20kg: ¥13,350
    { maxWeight: 21000, costUSD: 92.33 },  // 21kg: ¥13,850
    { maxWeight: 22000, costUSD: 95.67 },  // 22kg: ¥14,350
    { maxWeight: 23000, costUSD: 99.00 },  // 23kg: ¥14,850
    { maxWeight: 24000, costUSD: 102.33 }, // 24kg: ¥15,350
    { maxWeight: 25000, costUSD: 105.67 }, // 25kg: ¥15,850
    { maxWeight: 26000, costUSD: 109.00 }, // 26kg: ¥16,350
    { maxWeight: 27000, costUSD: 112.33 }, // 27kg: ¥16,850
    { maxWeight: 28000, costUSD: 115.67 }, // 28kg: ¥17,350
    { maxWeight: 29000, costUSD: 119.00 }, // 29kg: ¥17,850
    { maxWeight: 30000, costUSD: 122.33 }, // 30kg: ¥18,350
  ],
  zone2: [ // アジア（中国・韓国・台湾除く）
    { maxWeight: 1000, costUSD: 16.67 },   // 1kg: ¥2,500
    { maxWeight: 2000, costUSD: 24.67 },   // 2kg: ¥3,700
    { maxWeight: 3000, costUSD: 32.67 },   // 3kg: ¥4,900
    { maxWeight: 4000, costUSD: 40.67 },   // 4kg: ¥6,100
    { maxWeight: 5000, costUSD: 48.67 },   // 5kg: ¥7,300
    { maxWeight: 6000, costUSD: 56.67 },   // 6kg: ¥8,500
    { maxWeight: 7000, costUSD: 64.67 },   // 7kg: ¥9,700
    { maxWeight: 8000, costUSD: 72.67 },   // 8kg: ¥10,900
    { maxWeight: 9000, costUSD: 80.67 },   // 9kg: ¥12,100
    { maxWeight: 10000, costUSD: 88.67 },  // 10kg: ¥13,300
    { maxWeight: 11000, costUSD: 93.00 },  // 11kg: ¥13,950
    { maxWeight: 12000, costUSD: 97.33 },  // 12kg: ¥14,600
    { maxWeight: 13000, costUSD: 101.67 }, // 13kg: ¥15,250
    { maxWeight: 14000, costUSD: 106.00 }, // 14kg: ¥15,900
    { maxWeight: 15000, costUSD: 110.33 }, // 15kg: ¥16,550
    { maxWeight: 16000, costUSD: 114.67 }, // 16kg: ¥17,200
    { maxWeight: 17000, costUSD: 119.00 }, // 17kg: ¥17,850
    { maxWeight: 18000, costUSD: 123.33 }, // 18kg: ¥18,500
    { maxWeight: 19000, costUSD: 127.67 }, // 19kg: ¥19,150
    { maxWeight: 20000, costUSD: 132.00 }, // 20kg: ¥19,800
    { maxWeight: 21000, costUSD: 136.33 }, // 21kg: ¥20,450
    { maxWeight: 22000, costUSD: 140.67 }, // 22kg: ¥21,100
    { maxWeight: 23000, costUSD: 145.00 }, // 23kg: ¥21,750
    { maxWeight: 24000, costUSD: 149.33 }, // 24kg: ¥22,400
    { maxWeight: 25000, costUSD: 153.67 }, // 25kg: ¥23,050
    { maxWeight: 26000, costUSD: 158.00 }, // 26kg: ¥23,700
    { maxWeight: 27000, costUSD: 162.33 }, // 27kg: ¥24,350
    { maxWeight: 28000, costUSD: 166.67 }, // 28kg: ¥25,000
    { maxWeight: 29000, costUSD: 171.00 }, // 29kg: ¥25,650
    { maxWeight: 30000, costUSD: 175.33 }, // 30kg: ¥26,300
  ],
  zone3: [ // オセアニア、カナダ、メキシコ、中近東、ヨーロッパ（英国含む）
    { maxWeight: 1000, costUSD: 25.67 },   // 1kg: ¥3,850
    { maxWeight: 2000, costUSD: 40.00 },   // 2kg: ¥6,000
    { maxWeight: 3000, costUSD: 54.33 },   // 3kg: ¥8,150
    { maxWeight: 4000, costUSD: 68.67 },   // 4kg: ¥10,300
    { maxWeight: 5000, costUSD: 83.00 },   // 5kg: ¥12,450
    { maxWeight: 6000, costUSD: 97.33 },   // 6kg: ¥14,600
    { maxWeight: 7000, costUSD: 111.67 },  // 7kg: ¥16,750
    { maxWeight: 8000, costUSD: 126.00 },  // 8kg: ¥18,900
    { maxWeight: 9000, costUSD: 140.33 },  // 9kg: ¥21,050
    { maxWeight: 10000, costUSD: 154.67 }, // 10kg: ¥23,200
    { maxWeight: 11000, costUSD: 165.33 }, // 11kg: ¥24,800
    { maxWeight: 12000, costUSD: 176.00 }, // 12kg: ¥26,400
    { maxWeight: 13000, costUSD: 186.67 }, // 13kg: ¥28,000
    { maxWeight: 14000, costUSD: 197.33 }, // 14kg: ¥29,600
    { maxWeight: 15000, costUSD: 208.00 }, // 15kg: ¥31,200
    { maxWeight: 16000, costUSD: 218.67 }, // 16kg: ¥32,800
    { maxWeight: 17000, costUSD: 229.33 }, // 17kg: ¥34,400
    { maxWeight: 18000, costUSD: 240.00 }, // 18kg: ¥36,000
    { maxWeight: 19000, costUSD: 250.67 }, // 19kg: ¥37,600
    { maxWeight: 20000, costUSD: 261.33 }, // 20kg: ¥39,200
    { maxWeight: 21000, costUSD: 272.00 }, // 21kg: ¥40,800
    { maxWeight: 22000, costUSD: 282.67 }, // 22kg: ¥42,400
    { maxWeight: 23000, costUSD: 293.33 }, // 23kg: ¥44,000
    { maxWeight: 24000, costUSD: 304.00 }, // 24kg: ¥45,600
    { maxWeight: 25000, costUSD: 314.67 }, // 25kg: ¥47,200
    { maxWeight: 26000, costUSD: 325.33 }, // 26kg: ¥48,800
    { maxWeight: 27000, costUSD: 336.00 }, // 27kg: ¥50,400
    { maxWeight: 28000, costUSD: 346.67 }, // 28kg: ¥52,000
    { maxWeight: 29000, costUSD: 357.33 }, // 29kg: ¥53,600
    { maxWeight: 30000, costUSD: 368.00 }, // 30kg: ¥55,200
  ],
  zone4: [ // 米国（グアム等海外領土含む）
    { maxWeight: 1000, costUSD: 28.00 },   // 1kg: ¥4,200
    { maxWeight: 2000, costUSD: 44.67 },   // 2kg: ¥6,700
    { maxWeight: 3000, costUSD: 61.33 },   // 3kg: ¥9,200
    { maxWeight: 4000, costUSD: 78.00 },   // 4kg: ¥11,700
    { maxWeight: 5000, costUSD: 94.67 },   // 5kg: ¥14,200
    { maxWeight: 6000, costUSD: 111.33 },  // 6kg: ¥16,700
    { maxWeight: 7000, costUSD: 128.00 },  // 7kg: ¥19,200
    { maxWeight: 8000, costUSD: 144.67 },  // 8kg: ¥21,700
    { maxWeight: 9000, costUSD: 161.33 },  // 9kg: ¥24,200
    { maxWeight: 10000, costUSD: 178.00 }, // 10kg: ¥26,700
    { maxWeight: 11000, costUSD: 191.33 }, // 11kg: ¥28,700
    { maxWeight: 12000, costUSD: 204.67 }, // 12kg: ¥30,700
    { maxWeight: 13000, costUSD: 218.00 }, // 13kg: ¥32,700
    { maxWeight: 14000, costUSD: 231.33 }, // 14kg: ¥34,700
    { maxWeight: 15000, costUSD: 244.67 }, // 15kg: ¥36,700
    { maxWeight: 16000, costUSD: 258.00 }, // 16kg: ¥38,700
    { maxWeight: 17000, costUSD: 271.33 }, // 17kg: ¥40,700
    { maxWeight: 18000, costUSD: 284.67 }, // 18kg: ¥42,700
    { maxWeight: 19000, costUSD: 298.00 }, // 19kg: ¥44,700
    { maxWeight: 20000, costUSD: 311.33 }, // 20kg: ¥46,700
    { maxWeight: 21000, costUSD: 324.67 }, // 21kg: ¥48,700
    { maxWeight: 22000, costUSD: 338.00 }, // 22kg: ¥50,700
    { maxWeight: 23000, costUSD: 351.33 }, // 23kg: ¥52,700
    { maxWeight: 24000, costUSD: 364.67 }, // 24kg: ¥54,700
    { maxWeight: 25000, costUSD: 378.00 }, // 25kg: ¥56,700
    { maxWeight: 26000, costUSD: 391.33 }, // 26kg: ¥58,700
    { maxWeight: 27000, costUSD: 404.67 }, // 27kg: ¥60,700
    { maxWeight: 28000, costUSD: 418.00 }, // 28kg: ¥62,700
    { maxWeight: 29000, costUSD: 431.33 }, // 29kg: ¥64,700
    { maxWeight: 30000, costUSD: 444.67 }, // 30kg: ¥66,700
  ],
  zone5: [ // 中南米、アフリカ（メキシコ除く）
    { maxWeight: 1000, costUSD: 30.33 },   // 1kg: ¥4,550
    { maxWeight: 2000, costUSD: 48.33 },   // 2kg: ¥7,250
    { maxWeight: 3000, costUSD: 66.33 },   // 3kg: ¥9,950
    { maxWeight: 4000, costUSD: 84.33 },   // 4kg: ¥12,650
    { maxWeight: 5000, costUSD: 102.33 },  // 5kg: ¥15,350
    { maxWeight: 6000, costUSD: 120.33 },  // 6kg: ¥18,050
    { maxWeight: 7000, costUSD: 138.33 },  // 7kg: ¥20,750
    { maxWeight: 8000, costUSD: 156.33 },  // 8kg: ¥23,450
    { maxWeight: 9000, costUSD: 174.33 },  // 9kg: ¥26,150
    { maxWeight: 10000, costUSD: 192.33 }, // 10kg: ¥28,850
    { maxWeight: 11000, costUSD: 204.33 }, // 11kg: ¥30,650
    { maxWeight: 12000, costUSD: 216.33 }, // 12kg: ¥32,450
    { maxWeight: 13000, costUSD: 228.33 }, // 13kg: ¥34,250
    { maxWeight: 14000, costUSD: 240.33 }, // 14kg: ¥36,050
    { maxWeight: 15000, costUSD: 252.33 }, // 15kg: ¥37,850
    { maxWeight: 16000, costUSD: 264.33 }, // 16kg: ¥39,650
    { maxWeight: 17000, costUSD: 276.33 }, // 17kg: ¥41,450
    { maxWeight: 18000, costUSD: 288.33 }, // 18kg: ¥43,250
    { maxWeight: 19000, costUSD: 300.33 }, // 19kg: ¥45,050
    { maxWeight: 20000, costUSD: 312.33 }, // 20kg: ¥46,850
    { maxWeight: 21000, costUSD: 324.33 }, // 21kg: ¥48,650
    { maxWeight: 22000, costUSD: 336.33 }, // 22kg: ¥50,450
    { maxWeight: 23000, costUSD: 348.33 }, // 23kg: ¥52,250
    { maxWeight: 24000, costUSD: 360.33 }, // 24kg: ¥54,050
    { maxWeight: 25000, costUSD: 372.33 }, // 25kg: ¥55,850
    { maxWeight: 26000, costUSD: 384.33 }, // 26kg: ¥57,650
    { maxWeight: 27000, costUSD: 396.33 }, // 27kg: ¥59,450
    { maxWeight: 28000, costUSD: 408.33 }, // 28kg: ¥61,250
    { maxWeight: 29000, costUSD: 420.33 }, // 29kg: ¥63,050
    { maxWeight: 30000, costUSD: 432.33 }, // 30kg: ¥64,850
  ],
};

// 国コード → 地域マッピング（全世界主要国）
export const COUNTRY_TO_ZONE: Record<string, ShippingZone> = {
  // 第1地帯：中国、韓国、台湾
  'CN': 'zone1', 'KR': 'zone1', 'TW': 'zone1',
  
  // 第2地帯：アジア（上記除く）
  'HK': 'zone2', 'MO': 'zone2', 'SG': 'zone2', 'MY': 'zone2', 'TH': 'zone2',
  'VN': 'zone2', 'PH': 'zone2', 'ID': 'zone2', 'BN': 'zone2', 'KH': 'zone2',
  'LA': 'zone2', 'MM': 'zone2', 'MN': 'zone2', 'IN': 'zone2', 'LK': 'zone2',
  'BD': 'zone2', 'NP': 'zone2', 'BT': 'zone2', 'MV': 'zone2', 'PK': 'zone2',
  'AF': 'zone2', 'TJ': 'zone2', 'TM': 'zone2', 'UZ': 'zone2', 'KZ': 'zone2',
  'KG': 'zone2', 'AM': 'zone2', 'AZ': 'zone2', 'GE': 'zone2', 'IR': 'zone2',
  'IQ': 'zone2', 'SY': 'zone2', 'LB': 'zone2', 'JO': 'zone2', 'IL': 'zone2',
  'PS': 'zone2', 'SA': 'zone2', 'YE': 'zone2', 'OM': 'zone2', 'AE': 'zone2',
  'QA': 'zone2', 'BH': 'zone2', 'KW': 'zone2',
  
  // 第3地帯：ヨーロッパ
  'GB': 'zone3', 'FR': 'zone3', 'DE': 'zone3', 'IT': 'zone3', 'ES': 'zone3',
  'PT': 'zone3', 'NL': 'zone3', 'BE': 'zone3', 'CH': 'zone3', 'AT': 'zone3',
  'SE': 'zone3', 'NO': 'zone3', 'DK': 'zone3', 'FI': 'zone3', 'IS': 'zone3',
  'IE': 'zone3', 'LU': 'zone3', 'LI': 'zone3', 'MC': 'zone3', 'AD': 'zone3',
  'SM': 'zone3', 'VA': 'zone3', 'MT': 'zone3', 'CY': 'zone3', 'GR': 'zone3',
  'PL': 'zone3', 'CZ': 'zone3', 'SK': 'zone3', 'HU': 'zone3', 'SI': 'zone3',
  'HR': 'zone3', 'BA': 'zone3', 'RS': 'zone3', 'ME': 'zone3', 'MK': 'zone3',
  'AL': 'zone3', 'BG': 'zone3', 'RO': 'zone3', 'MD': 'zone3', 'UA': 'zone3',
  'BY': 'zone3', 'RU': 'zone3', 'EE': 'zone3', 'LV': 'zone3', 'LT': 'zone3',
  'TR': 'zone3',
  
  // 第3地帯：オセアニア
  'AU': 'zone3', 'NZ': 'zone3', 'PG': 'zone3', 'FJ': 'zone3', 'NC': 'zone3',
  'VU': 'zone3', 'SB': 'zone3', 'KI': 'zone3', 'TV': 'zone3', 'NR': 'zone3',
  'PW': 'zone3', 'MH': 'zone3', 'FM': 'zone3', 'WS': 'zone3', 'TO': 'zone3',
  'CK': 'zone3', 'NU': 'zone3', 'TK': 'zone3', 'WF': 'zone3',
  'PF': 'zone3', 'PN': 'zone3',
  
  // 第3地帯：カナダ、メキシコ
  'CA': 'zone3', 'MX': 'zone3',
  
  // 第4地帯：米国（本土・海外領土）
  'US': 'zone4', 'GU': 'zone4', 'PR': 'zone4', 'VI': 'zone4',
  'MP': 'zone4', 'AS': 'zone4',
  
  // 第5地帯：中南米
  'BR': 'zone5', 'AR': 'zone5', 'CL': 'zone5', 'PE': 'zone5', 'CO': 'zone5',
  'VE': 'zone5', 'EC': 'zone5', 'UY': 'zone5', 'PY': 'zone5', 'BO': 'zone5',
  'GY': 'zone5', 'SR': 'zone5', 'GF': 'zone5', 'FK': 'zone5', 'GS': 'zone5',
  
  // 第5地帯：カリブ海
  'CU': 'zone5', 'JM': 'zone5', 'HT': 'zone5', 'DO': 'zone5', 'BS': 'zone5',
  'TT': 'zone5', 'BB': 'zone5', 'GD': 'zone5', 'VC': 'zone5', 'LC': 'zone5',
  'KN': 'zone5', 'AG': 'zone5', 'DM': 'zone5', 'BZ': 'zone5', 'GT': 'zone5',
  'SV': 'zone5', 'HN': 'zone5', 'NI': 'zone5', 'CR': 'zone5', 'PA': 'zone5',
  
  // 第5地帯：アフリカ
  'ZA': 'zone5', 'EG': 'zone5', 'NG': 'zone5', 'KE': 'zone5', 'MA': 'zone5',
  'ET': 'zone5', 'GH': 'zone5', 'TZ': 'zone5', 'UG': 'zone5', 'DZ': 'zone5',
  'SD': 'zone5', 'LY': 'zone5', 'TN': 'zone5', 'ZW': 'zone5', 'ZM': 'zone5',
  'MW': 'zone5', 'MZ': 'zone5', 'MG': 'zone5', 'MU': 'zone5', 'SC': 'zone5',
  'KM': 'zone5', 'AO': 'zone5', 'CD': 'zone5', 'CG': 'zone5', 'GA': 'zone5',
  'GQ': 'zone5', 'CM': 'zone5', 'CF': 'zone5', 'TD': 'zone5', 'NE': 'zone5',
  'ML': 'zone5', 'BF': 'zone5', 'SN': 'zone5', 'GM': 'zone5', 'GW': 'zone5',
  'GN': 'zone5', 'SL': 'zone5', 'LR': 'zone5', 'CI': 'zone5', 'MR': 'zone5',
  'BJ': 'zone5', 'TG': 'zone5', 
  'RW': 'zone5', 'BI': 'zone5', 'SS': 'zone5', 'ER': 'zone5', 'DJ': 'zone5',
  'SO': 'zone5', 'LS': 'zone5', 'SZ': 'zone5', 'BW': 'zone5', 'NA': 'zone5',
};

// 表示用国名リスト（主要国）
export const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'NL', name: 'Netherlands' },
  { code: 'BE', name: 'Belgium' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'AT', name: 'Austria' },
  { code: 'SE', name: 'Sweden' },
  { code: 'NO', name: 'Norway' },
  { code: 'DK', name: 'Denmark' },
  { code: 'FI', name: 'Finland' },
  { code: 'IE', name: 'Ireland' },
  { code: 'PT', name: 'Portugal' },
  { code: 'CN', name: 'China' },
  { code: 'KR', name: 'South Korea' },
  { code: 'TW', name: 'Taiwan' },
  { code: 'HK', name: 'Hong Kong' },
  { code: 'SG', name: 'Singapore' },
  { code: 'JP', name: 'Japan' },
  { code: 'MY', name: 'Malaysia' },
  { code: 'TH', name: 'Thailand' },
  { code: 'VN', name: 'Vietnam' },
  { code: 'PH', name: 'Philippines' },
  { code: 'ID', name: 'Indonesia' },
  { code: 'IN', name: 'India' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'BR', name: 'Brazil' },
  { code: 'AR', name: 'Argentina' },
  { code: 'CL', name: 'Chile' },
  { code: 'PE', name: 'Peru' },
  { code: 'CO', name: 'Colombia' },
  { code: 'MX', name: 'Mexico' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'EG', name: 'Egypt' },
  { code: 'NG', name: 'Nigeria' },
  { code: 'KE', name: 'Kenya' },
  { code: 'MA', name: 'Morocco' },
  { code: 'AE', name: 'United Arab Emirates' },
  { code: 'SA', name: 'Saudi Arabia' },
  { code: 'IL', name: 'Israel' },
  { code: 'TR', name: 'Turkey' },
  { code: 'RU', name: 'Russia' },
  { code: 'UA', name: 'Ukraine' },
  { code: 'PL', name: 'Poland' },
  { code: 'CZ', name: 'Czech Republic' },
  { code: 'HU', name: 'Hungary' },
  { code: 'GR', name: 'Greece' },
];

// 送料計算（重量はグラム単位）
export function calculateShipping(countryCode: string, weightGrams: number): number {
  const zone = COUNTRY_TO_ZONE[countryCode];
  if (!zone) return SHIPPING_RATES.zone3[0].costUSD; // 不明な国はzone3の最低料金
  
  const rates = SHIPPING_RATES[zone];
  for (const rate of rates) {
    if (weightGrams <= rate.maxWeight) {
      return rate.costUSD;
    }
  }
  
  // 30kg超の場合は30kg料金を返す（上限）
  return rates[rates.length - 1].costUSD;
}

// 地域取得
export function getZoneByCountryCode(code: string): ShippingZone {
  return COUNTRY_TO_ZONE[code] || 'zone3';
}