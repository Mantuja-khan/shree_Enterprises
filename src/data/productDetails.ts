
import kixx_hydro_hd from "../assets/hydrolic_1.webp"
import kixx_hydro_af from "../assets/hydrolic_2.webp"
import kixx_hydro_hdz from "../assets/hydrolic_3.webp"
import kixx_hvl from "../assets/hydrolic_4.webp"
import kixx_hydro_aw from "../assets/hydrolic_5.webp"
import kixx_hydro_super from "../assets/hydrolic_6.webp"
import kixx_d1_platinum_plus from "../assets/kixx_d1_platinum_plus.webp"
import kixx_dynamic_gold from "../assets/kixx_dynamic_gold.webp"
import kixx_dynamic_silver from "../assets/kixx_dynamic_silver.webp"
import kixx_hdx_euro from "../assets/kixx_hdx_euro.webp"
import kixx_gear_ep from "../assets/kixx_gear_ep.webp"
import kixx_gear_ep_s from "../assets/kixx_gear_ep_s.webp"
import kixx_gearsyn_75w90 from "../assets/kixx_gearsyn_75w90.webp"
import neat_oil from "../assets/neat_oil.webp"
import kixx_geartec_gl4 from "../assets/kixx_geartec_gl4.webp"
import kixx_geartec_gl5_75w90 from "../assets/kixx_geartec_gl5_75w90.webp"
import kixx_atf_dx_iii from "../assets/kixx_atf_dx_iii.webp"
import kixx_10w_plus from "../assets/kixx_10w_plus.webp"
import kixx_trans_c4_sae30 from "../assets/kixx_trans_c4_sae30.webp"
import kixx_unitrans_api_g14 from "../assets/kixx_unitrans_api_g14.webp"
import kixx_grease_ep from "../assets/kixx_grease_ep.webp"
import kixx_grease_moly_ep from "../assets/kixx_grease_moly_ep.webp"
import kixx_therma_2 from "../assets/kixx_therma_2.webp"
import kixx_ep_2 from "../assets/kixx_ep_2.webp"
import kixx_grease_liplex_2 from "../assets/kixx_grease_liplex_2.webp"
import kixx_long_life_gel_grase from "../assets/kixx_long_life_gel_grase.webp"
import kixx_mp_3 from "../assets/kixx_mp_3.webp"
import kixx_compressor_oil from "../assets/kixx_compressor_oil.webp"
import kixx_comsyn from "../assets/kixx_comsyn.webp"
import kixx_turbine_oil from "../assets/kixx_turbine_oil.webp"
import kixx_coolant from "../assets/kixx_coolant.webp";
import kixx_therm_oil_m from "../assets/kixx_therm_oil_m.webp";
import kixx_therm_oil from "../assets/kixx_therm_oil.webp";
import kixx_cutting_oil_sl from "../assets/kixx_cutting_oil_sl.webp";
import kixx_way_lube from "../assets/kixx_way_lube.webp";
import kixx_rockdrill_100 from "../assets/kixx_rockdrill_100.webp";
import kixx_geartec_85w140 from "../assets/kixx_geartec_85w140.webp"



export interface ProductDetail {
  id: string;
  name: string;
  category: string;
  type: string;
  description: string;
  image: string;
  brand: string;
  recommendedFor: string[];
  packSizes: string[];
  performanceStandards: string[];
  benefits?: string[];
}

export const productDetails: ProductDetail[] = [
  // Truck Engine Oil

  // Bike Engine Oil

  // Car Engine Oil
 
  // CNG Mini Truck Engine Oil



  // Gear Transmission Oil


  // Greases

  //Hydrolic Data

  {
    id: 'kixx-hydro-hd',
    name: 'Kixx HYDRO HD',
    category: 'hydraulic-oil',
    type: ' Hydraulic Oil',
    description: 'Kixx HYDRO HD is a  quality, anti-wear hydraulic fluid designed for use in mobile and stationary high-pressure hydraulic systems. Formulated with Group II+ base oils, it provides excellent wear protection, oxidation stability, and foam separation.',
    image: kixx_hydro_hd,
    brand: 'ISO 32/46/68',
    recommendedFor: [
      'Industrial hydraulic systems',
      'Hydraulics of mobile and construction equipment',
      'Hydraulic systems with vane, gear or piston pumps',
      'Plastic injection moulding machines and machine tools',
      'Enclosed gearboxes where extreme pressure oils are not required',
      'Industrial circulating systems',
      'Numerically controlled (NC) machine tools'
    ],
    packSizes: ['20L', '210L'],
    performanceStandards: [
      'Denison Hydraulics HF-0 (ISO 32,46,68)'
    ],
    benefits: [
      'Longer equipment life',
      'Reduced downtime and trouble-free operation',
      'Extended oil service life',
      'Excellent anti-wear protection, oxidation and corrosion inhibition',
      'Superior foam and air separation'
    ]
  },
  {
    id: 'kixx-hydro-af',
    name: 'Kixx HYDRO AF (Zn Free)',
    category: 'hydraulic-oil',
    type: 'Zinc-Free Hydraulic Oil',
    description: 'Kixx HYDRO AF is an ash-less, zinc-free hydraulic oil formulated with high-quality base oils and advanced additive system. It ensures superior oxidation stability, wear protection, and environmental safety in hydraulic applications.',
    image: kixx_hydro_af,
    brand: 'Ash-less Hydraulic Oil',
    recommendedFor: [
      'Industrial hydraulic systems',
      'Hydraulics of mobile and construction equipment',
      'Hydraulic systems with vane, gear or piston pumps',
      'Plastic injection moulding machines',
      'Machine tools and enclosed gear systems',
      'Industrial circulating systems',
      'Environmentally sensitive hydraulic applications'
    ],
    packSizes: ['210L'],
    performanceStandards: [
      'DIN 51524 Part 2 HLP',
      'Denison HF-0',
      'Eaton Vickers M-2950S / I-286-S',
      'Cincinnati Milacron P-68, P-69, P-70',
      'ISO 11158 Type HM',
      'US Steel 126 and 127',
      'ASTM 6158 HM',
      'GM LS-2'
    ],
    benefits: [
      'Prolonged machine life and reduced unplanned shutdowns',
      'Reduced environmental impacts due to zinc-free formulation',
      'Protection against wear and scuffing in hydraulic pumps',
      'Excellent prevention of pump cavitation',
      'Improved air release and filterability characteristics'
    ]
  },
  {
    id: 'kixx-hydro-hdz',
    name: 'Kixx HYDRO HDZ',
    category: 'hydraulic-oil',
    type: 'Multi-Viscosity Hydraulic Oil',
    description: 'Kixx HYDRO HDZ is a  quality, shear-stable, multi-viscosity hydraulic fluid designed for use in hydraulic systems exposed to wide variations in operating temperatures. It ensures consistent performance, wear protection, and long oil life.',
    image: kixx_hydro_hdz,
    brand: 'ISO 32/46/68/100',
    recommendedFor: [
      'Hydraulic systems of mobile, construction & agricultural equipment',
      'Hydraulic systems with vane, gear or piston pumps',
      'Marine deck equipment, steering gears, bow thrusters and automatic controls'
    ],
    packSizes: ['20L', '210L'],
    performanceStandards: [
      'DIN 51524 Part III HLP',
      'Denison HF-0',
      'Eaton Vickers M-2950S / I-286-S',
      'Cincinnati Milacron P-68, P-69, P-70',
      'ISO 11158 Type HV',
      'US Steel 126 and 127',
      'ASTM 6158 HV'
    ],
    benefits: [
      'Longer equipment life',
      'Reduced downtime and trouble-free operation',
      'Extended oil service life',
      'Improved hydraulic efficiency and better productivity'
    ]
  },
  {
    id: 'kixx-hvl',
    name: 'Kixx HVL',
    category: 'hydraulic-oil',
    type: 'Long Life Multigrade Hydraulic Oil',
    description: 'Kixx HVL is a  long-life multigrade hydraulic oil with extended drain intervals up to 5000 hours. It is specially designed for earthmoving, mobile, construction, agricultural, and marine hydraulic equipment.',
    image: kixx_hvl,
    brand: 'ISO 46/68',
    recommendedFor: [
      'Hydraulic systems of mobile, construction & agricultural equipment',
      'Hydraulic systems with vane, gear or piston pumps',
      'Earthmoving equipment with extended drain requirements',
      'Marine deck equipment, steering gears, bow thrusters and automatic controls'
    ],
    packSizes: ['20L', '210L'],
    performanceStandards: [
      'DIN 51524 Part III HVLP',
      'Denison HF-0',
      'Eaton Vickers M-2950S / I-286-S',
      'Cincinnati Milacron P-68, P-69, P-70',
      'ISO 11158 Type HV',
      'US Steel 126 and 127',
      'ASTM 6158 HV'
    ],
    benefits: [
      'Extended drain period up to 5000 hours',
      'Superior anti-wear performance minimizes wear',
      'Long fluid life extends oil change intervals',
      'Maintains viscosity even under extreme conditions',
      'Effective oxidation and thermal stability'
    ]
  },
  {
    id: 'kixx-hydro-aw',
    name: 'Kixx HYDRO AW',
    category: 'hydraulic-oil',
    type: 'Anti-Wear Hydraulic Oil',
    description: 'Kixx HYDRO AW is a  quality, anti-wear hydraulic fluid designed for high-pressure hydraulic systems. It provides outstanding wear protection, rust prevention, and thermal stability for longer equipment life.',
    image: kixx_hydro_aw,
    brand: 'ISO 32/46/68',
    recommendedFor: [
      'Industrial hydraulic systems',
      'Hydraulics of mobile and construction equipment',
      'Hydraulic systems with vane, gear or piston pumps',
      'Plastic injection moulding machines and machine tools',
      'Industrial circulating systems and enclosed gear drives'
    ],
    packSizes: ['20L', '210L'],
    performanceStandards: [
      'DIN 51524 Part 2 HLP',
      'Eaton Vickers M-2950S / I-286-S',
      'Denison HF-0',
      'Cincinnati Milacron P-68, P-69, P-70',
      'ISO 11158 Type HM',
      'US Steel 126 and 127',
      'ASTM 6158 HM'
    ],
    benefits: [
      'Excellent anti-wear performance',
      'Provides reliable rust and corrosion protection',
      'Long service life and reduced downtime',
      'Good air release and foam control'
    ]
  },
  {
    id: 'kixx-hydro-super',
    name: 'Kixx HYDRO SUPER',
    category: 'hydraulic-oil',
    type: 'Super Anti-Wear Hydraulic Oil',
    description: 'Kixx HYDRO SUPER is a high-performance anti-wear hydraulic oil with superior thermal and oxidation stability. It ensures smooth operation and extended equipment life under severe operating conditions.',
    image: kixx_hydro_super,
    brand: 'Anti-Wear Hydraulic Fluid',
    recommendedFor: [
      'High-performance hydraulic systems',
      'Mobile and construction equipment hydraulics',
      'Plastic injection moulding machines',
      'Machine tools and industrial circulating systems'
    ],
    packSizes: ['20L', '210L'],
    performanceStandards: [
      'DIN 51524 Part III HVLP',
      'Denison HF-0',
      'Eaton Vickers M-2950S / I-286-S',
      'Cincinnati Milacron P-68, P-69, P-70',
      'ISO 11158 Type HV',
      'US Steel 126 and 127',
      'ASTM 6158 HV'
    ],
    benefits: [
      'Provides superior wear protection',
      'Improved resistance to thermal and oxidative degradation',
      'Extended oil and equipment service life',
      'Excellent filterability and air release properties'
    ]
  },
  // Heavy Duty Diesel Engine Oil
  {
  id: 'kixx-hdx-euro',
  name: 'Kixx HDX EURO',
  category: 'diesel-engine-oil',
  type: 'Heavy Duty Diesel Engine Oil',
  description: 'Kixx HDX EURO is a  performance, multi-grade, heavy-duty diesel engine oil designed for new low-emission engines operating with Ultra Low Sulfur Diesel (ULSD). Formulated with advanced additive technology, it delivers outstanding engine protection and meets the latest stringent EGR soot control and particulate requirements for highway diesel trucks.',
  image: kixx_hdx_euro,
  brand: 'SAE 15W-40',
  recommendedFor: [
    'Naturally aspirated and turbocharged four-stroke diesel engines',
    'Four-stroke gasoline engines',
    'Off-highway and construction applications',
    'Mixed fleets of both diesel and gasoline engines',
    'Commercial road transport including electronic controlled engines',
    'Stop-and-go vehicles such as buses and waste collection trucks'
  ],
  packSizes: ['20L', '50L', '210L'],
  performanceStandards: [
    'API CK-4/CJ-4/CI-4 Plus',
    'Cummins CES 20086/20081/20077/20078',
    'Volvo VDS-4.0',
    'ACEA E9-2016, E7-2016',
    'MB 228.31',
    'CAT ECF-3',
    'MTU Type 2.1',
    'Deutz DQC III-10 LA',
    'MAN 3575'
  ],
  benefits: [
    'Extended oil drain interval up to 1000 hours / 80,000 km in BS-6 with OBD II',
    'Extended oil drain interval up to 1000 hours / 120,000 km in BS-4 & earlier engine models',
    'High-performance base oils with special additives ensure durability under prolonged use',
    'Outstanding wear protection and maximized engine life',
    'Excellent soot control prevents soot accumulation',
    'Minimizes fleet maintenance, operating and inventory costs'
  ]
  },
{
  id: 'kixx-d1-platinum-plus',
  name: 'Kixx D1 PLATINUM PLUS',
  category: 'diesel-engine-oil',
  type: ' Heavy Duty Diesel Engine Oil',
  description: 'Kixx D1 PLATINUM PLUS is a  performance semi-synthetic multigrade heavy-duty diesel engine oil. Specially formulated to meet the needs of modern, high-performance diesel engines, it provides outstanding protection with advanced additive technology and high-quality base oils for superior durability and reliability.',
  image: kixx_d1_platinum_plus,
  brand: 'SAE 15W-40',
  recommendedFor: [
    'Modern low-emission turbocharged 4-stroke diesel engines including EGR systems',
    'Older diesel engines operating with high or low sulfur fuel content',
    'Heavy transport equipment for cargo and passengers',
    'Construction and mining equipment',
    'Marine diesel engines',
    'Mixed gasoline and diesel fleets'
  ],
  packSizes: ['5L', '15L', '20L', '55L', '210L'],
  performanceStandards: [
    'API CI-4 Plus, CI-4, CG-4',
    'API SL/SJ',
    'ACEA E7:2016',
    'Cummins CES 20078/77',
    'Volvo VDS-3',
    'MACK EO-N, EO-N PP03',
    'Renault RLD-2',
    'MB 228.3',
    'CAT ECF-2',
    'MTU Type 2',
    'MAN 3275',
    'Detroit Diesel 93K214',
    'JASO DH-1'
  ],
  benefits: [
    'Excellent soot control prevents accumulation and maintains engine cleanliness',
    'High performance base oils and additives deliver long-lasting performance',
    'Outstanding anti-wear and detergency properties protect engine parts',
    'Ensures engine cleanliness and reliability even under severe operating conditions',
    'Helps minimize fleet maintenance, downtime, and operating costs'
  ]
},
{
  id: 'kixx-dynamic-gold',
  name: 'Kixx DYNAMIC GOLD',
  category: 'diesel-engine-oil',
  type: ' Heavy Duty Diesel Engine Oil',
  description: 'Kixx DYNAMIC GOLD is a  performance multigrade heavy-duty diesel engine oil formulated to provide reliable lubrication and protection under the most severe operating conditions. Designed for a wide range of diesel engines requiring API CH-4 and ACEA E5 performance standards.',
  image: kixx_dynamic_gold,
  brand: 'SAE 15W-40',
  recommendedFor: [
    'On-highway light and heavy-duty trucks and buses',
    'Off-highway equipment including construction, agriculture, and quarrying',
    'Mixed fleet applications requiring CH-4 performance lubricants'
  ],
  packSizes: ['15L', '20L', '50L', '210L'],
  performanceStandards: [
    'API CH-4/SJ',
    'VOLVO VDS-3',
    'CUMMINS CES 20076/77',
    'ACEA E7-16',
    'CAT ECF-1-a',
    'MB 228.3',
    'MAN 3275',
    'MACK EO-N, EO-M PLUS',
    'MTU Type-2',
    'Renault RLD-2',
    'Deutz DQC III-10',
    'Detroit Diesel DDC 93K215'
  ],
  benefits: [
    'Excellent engine cleanliness and wear protection',
    'Outstanding oxidation stability prevents oil thickening',
    'Consistent viscosity ensures efficient cooling across all temperatures',
    'Exceptional performance in all-weather conditions',
    'Supports extended drain intervals for reduced maintenance costs'
  ]
},
{
  id: 'kixx-dynamic-silver',
  name: 'Kixx DYNAMIC SILVER',
  category: 'diesel-engine-oil',
  type: 'Diesel Engine Oil',
  description: 'Kixx DYNAMIC SILVER is a high-performance multigrade diesel engine oil formulated for a wide range of diesel and gasoline engines requiring API CF-4 performance lubricants. It provides reliable engine protection, cleanliness, and durability across varied operating conditions.',
  image: kixx_dynamic_silver,
  brand: 'SAE 20W-40',
  recommendedFor: [
    'Commercial road transport vehicles',
    'Agricultural tractors',
    'High-speed diesel engines in marine service (fishing, river transport, etc.)',
    'Diesel and gasoline engines in mixed fleet applications',
    'OEMs including TATA Motors, Ashok Leyland, Mahindra, Eicher, Force Motors, Escorts, Sonalika'
  ],
  packSizes: ['1L', '5L', '6L', '7.5L', '10L', '20L', '55L', '210L'],
  performanceStandards: [
    'API CF-4'
  ],
  benefits: [
    'Exceptional protection against soot-induced wear',
    'Superior detergent properties ensure engine cleanliness',
    'Outstanding rust and corrosion protection',
    'Advanced soot and acid control for longer service life',
    'Reliable performance in all-weather conditions'
  ]
},
//Gear oil Data from here
{
  id: 'kixx-gear-ep',
  name: 'Kixx GEAR EP',
  category: 'industrial-gear-oil',
  type: 'Industrial Gear Lubricant',
  description: 'Kixx GEAR EP is a high-performance, mild EP industrial gear lubricant formulated with a sulfur-phosphorus additive system. It delivers reliable performance in enclosed gear drives and heavy-duty industrial applications, ensuring durability and protection under demanding conditions.',
  image: kixx_gear_ep,
  brand: 'ISO 100/150/220/320/460',
  recommendedFor: [
    'All types of industrial and mobile equipment requiring mild EP gear lubricants',
    'Enclosed gear drives and speed reducers (from small gearboxes to large, high-power units)',
    'Metal rolling mills, cement mills, and sugar mills',
    'Chain cases, sprockets, slide guides, and flexible couplings',
    'Plain and rolling element bearings'
  ],
  packSizes: ['20L', '210L'],
  performanceStandards: [
    'AGMA/ANSI 9005-F16',
    'David Brown types M, A and E',
    'DIN 51517 Part 3',
    'ISO 12925-1 CKC/CKD',
    'U.S. Steel 224'
  ],
  benefits: [
    'Extends gear life due to high load carrying capacity',
    'Keeps gear surfaces free of harmful deposits',
    'Provides longer oil service life with excellent oxidation resistance',
    'Allows rapid separation of water',
    'Protects against rust and corrosion'
  ]
},
{
  id: 'kixx-gear-ep-s',
  name: 'Kixx GEAR EP S',
  category: 'industrial-gear-oil',
  type: 'PAO Based Fully Synthetic Gear Oil',
  description: 'Kixx GEAR EP S is a high-performance, fully synthetic (PAO-based) mild EP industrial gear lubricant formulated with a sulfur-phosphorus additive system. It is engineered to deliver superior gear protection, longer service life, and improved energy efficiency in demanding industrial applications.',
  image: kixx_gear_ep_s,
  brand: 'PAO Based, fully synthetic gear oil',
  recommendedFor: [
    'All types of industrial and mobile equipment requiring mild EP gear lubricants',
    'Enclosed gear drives and speed reducers (from small gearboxes to large, high-power units)',
    'Metal rolling mills, cement mills, and sugar mills',
    'Chain cases, sprockets, slide guides, and flexible couplings',
    'Plain and rolling element bearings'
  ],
  packSizes: ['20L', '200L'],
  performanceStandards: [
    'AGMA/ANSI 9005-F16',
    'David Brown types M, A and E',
    'DIN 51517 Part 3',
    'ISO 12925-1 CKC/CKD',
    'U.S. Steel 224'
  ],
  benefits: [
    'Extends gear life due to high load carrying capacity',
    'Keeps gear surfaces free of harmful deposits',
    'Provides longer oil service life with excellent oxidation resistance',
    'Allows rapid separation of water',
    'Protects against rust and corrosion',
    'Improves energy efficiency'
  ]
},
{
  id: 'kixx-gearsyn-75w90',
  name: 'Kixx GEARSYN',
  category: 'automotive-gear-oil',
  type: 'API GL-4/5 SAE 75W-90 ',
  description: 'Kixx GEARSYN is a  synthetic total driveline lubricant designed to deliver extended drain capability, excellent gear protection, and smooth operation for transmissions and drive axles under demanding conditions.',
  image: kixx_gearsyn_75w90,
  brand: 'API GL-4/5 SAE 75W-90 ',
  recommendedFor: [
    'Transmissions of cars and trucks',
    'Spiral bevel and worm gears used in transport',
    'Manual gearboxes, synchronized and unsynchronized',
    'Drive axles and hypoid gears',
    'Manual gearboxes with integrated final drive'
  ],
  packSizes: [],
  performanceStandards: [
    'API GL-4/5'
  ],
  benefits: [
    'Ensures long oil and transmission life',
    'Provides excellent gear and synchronizer protection',
    'Delivers outstanding cold start performance',
    'Improves fuel economy with synthetic formulation'
  ]
},
{
  id: 'kixx-geartec-85w140',
  name: 'Kixx GEARTEC',
  category: 'automotive-gear-oil',
  type: 'API GL-5 SAE 75W-90',
  description: 'Kixx GEARTEC is a high-performance, multipurpose, thermally stable EP automotive gear lubricant designed for demanding gear applications, including hypoid differentials and heavy-duty transmissions. It delivers superior protection under severe operating conditions.',
  image: kixx_geartec_85w140,
  brand: 'API GL-5 SAE 75W-90',
  recommendedFor: [
    'Automotive hypoid differentials',
    'Heavy-duty, non-synchronized manual transmissions and transaxles',
    'Gears under severe loading requiring maximum protection',
    'Industrial and other gear applications suitable for API GL-5 lubricants'
  ],
  packSizes: ['5L', '20L', '210L'],
  performanceStandards: [
    'API GL-5',
    'MIL-PRF-2105 E'
  ],
  benefits: [
    'Special EP additive and corrosion inhibitor system provides excellent rust protection',
    'Sulfur-phosphorus EP additives ensure superior load carrying capacity',
    'Refined base oils and inhibitor system deliver oxidation stability for longer oil life'
  ]
},
{
  id: 'kixx-geartec-gl4',
  name: 'Kixx GEARTEC',
  category: 'gear-oil',
  type: 'automotive-gear-lubricant',
  description: 'High quality, mild-EP automotive gear lubricant designed for applications where API GL-4 performance is required. Ideal for manual transmissions, differentials, and gear systems requiring GL-4 specification.',
  image:  kixx_geartec_gl4, 
  brand: 'Kixx Geartec API GL-4 SAE 80W-90 / 90 / 140',
  recommendedFor: [
    'Automotive manual synchromesh transmissions and transaxles where API GL-5 lubricants are not recommended',
    'Automotive spiral-bevel and worm gear differentials',
    'Tractor and agricultural gear sets',
    'Oil-lubricated track reducers of crawler tractors',
    'Industrial applications requiring API GL-4 lubricants'
  ],
  packSizes: ['1L', '5L', '20L', '55L', '210L'],
  performanceStandards: [
    'API GL-4',
    'MIL-L-2105'
  ],
  benefits: [
    'Special EP additive and corrosion inhibitor system protects against rusting',
    'Sulfur-phosphorus EP additive system provides strong load carrying capacity',
    'Highly refined base oil with special inhibitors ensures oxidation stability and longer oil service life'
  ]
},
{
  id: 'kixx-geartec-gl5-75w90',
  name: 'Kixx GEARTEC',
  category: 'gear-oil',
  type: 'automotive-gear-lubricant',
  description: 'High-performance, multipurpose, thermally stable, EP automotive gear lubricant designed for severe operating conditions and maximum gear protection.',
  image: kixx_geartec_gl5_75w90, 
  brand: 'Kixx Geartec API GL-5 SAE 75W-90',
  recommendedFor: [
    'Automotive hypoid differentials',
    'Heavy-duty, non-synchronised manual transmissions and transaxles',
    'Gears operating under severe load conditions requiring maximum protection',
    'Industrial applications requiring API GL-5 lubricants'
  ],
  packSizes: ['5L', '20L', '210L'],
  performanceStandards: [
    'API GL-5',
    'MIL-PRF-2105 E'
  ],
  benefits: [
    'Special EP additive and corrosion inhibitor system protects against rusting',
    'Sulfur-phosphorus EP additive system provides excellent load carrying capacity',
    'Highly refined base oil with inhibitor system ensures oxidation stability and longer service life'
  ]
},

//Transmission Oil Started from Here
{
  id: 'kixx-atf-dx-iii',
  name: 'Kixx ATF DX III',
  category: 'automatic-transmission-fluid',
  type: 'Kixx ATF DX III',
  brand: 'Kixx ATF DX III',
  description: 'Modern vehicle and transmission designs place increased stress on the automatic transmission fluid. Kixx ATF DX-III transmission oil is superior to any other past or current ATF for application to passenger car automatic transmission. It has high quality performance which meets oxidation resistance, low temperature fluidity, appropriate friction performance, high shear stability, and provides virtually sludge-free operation.',
  image: kixx_atf_dx_iii,
  recommendedFor: [
    'Automatic Transmission Engines',
    'Should not be used where Dexron® VI, Mercon® V or Mercon® SP are required',
    'Can be used as Power Steering Fluid'
  ],
  performanceStandards: [
    'General Motors DEXRON III',
    'Ford MERCON',
    'Allison C-4'
  ],
  packSizes: ['200 Ltr', '20 Ltr', '5 Ltr'],
  benefits: [
    'Ensures long lifetime',
    'Provides high foam stability',
    'Excellent anti-rusting performance and reduced sludge formation',
    'Reliable cold climate performance with excellent low-temperature fluidity',
    'Stable friction property for smooth operation'
  ]
},
{
  id: 'kixx-10w-plus',
  name: 'Kixx 10W PLUS',
  category: 'engine-oil',
  type: 'API CD',
  brand: 'API CD',
  description: 'Kixx 10W Plus is a high-quality, mono-grade oil specially designed for off-highway manual transmission and hydraulic systems where this type of oil is recommended.',
  image: kixx_10w_plus,
  recommendedFor: [
    'Manual transmissions (where oil type and viscosity is appropriate)',
    'Mobile hydraulic systems (where oil type and viscosity is appropriate)'
  ],
  performanceStandards: ['API CD', 'MIL-L-2104D'],
  packSizes: ['210 Ltr', '20 Ltr'],
  benefits: [
    'Saves on maintenance',
    'Improves power and performance'
  ]
},
{
  id: 'kixx-trans-c4-30',
  name: 'Kixx TRANS',
  category: 'transmission-oil',
  type: 'C-4 SAE 30',
  brand: 'C-4 SAE 30',
  description: 'A  quality heavy-duty automatic transmission fluid formulated to meet the Allison C-4 specification.',
  image: kixx_trans_c4_sae30,
  recommendedFor: [
    'Heavy-duty commercial power shift transmissions',
    'Transmission fluid for off-highway equipment such as dumpers, scrapers, crawler tractors, excavators, shovel loaders, etc. where this type of oil is recommended'
  ],
  performanceStandards: [
    'Allison C-4 of Allison Transmission Division of General Motors'
  ],
  packSizes: ['210 Ltr'],
  benefits: [
    'Substantially improved friction and anti-wear performance',
    'Excellent oxidative stability control as shown by performance in Allison C4',
    'Maximum foam protection',
    'Versatile fluid for on and off-highway equipment',
    'Protection against copper corrosion and rust'
  ]
},
{
  id: 'kixx-unitrans-gl4',
  name: 'Kixx UNITRANS',
  category: 'tractor-transmission-oil',
  type: 'API GL-4',
  brand: 'API GL-4',
  description: 'High performance, all-weather lubricant used in transmission, hydraulic systems, final drives and wet brakes of agricultural tractors and farm equipment. It is formulated with  quality Group II+ base oil and robust additive package to provide excellent anti-wear protection, moderate EP properties, oxidation, rust and corrosion protection.',
  image: kixx_unitrans_api_g14,
  recommendedFor: [
    'Suitable for all agriculture and off-highway equipment where the use of a UTTO or THF type product is specified',
    'Earth moving & other off-road equipment',
    'Tractors fitted with Power Take-Off (PTO) clutches'
  ],
  performanceStandards: [
    'API GL-4',
    'John Deere J20C',
    'Allison C-4'
  ],
  packSizes: ['210 Ltr', '50 Ltr', '20 Ltr', '5 Ltr'],
  benefits: [
    'Exceptional anti-friction characteristics help in improving braking efficiency and provide excellent clutch engagements',
    'Special friction modifier components allow smooth and quiet operation of oil-immersed brakes',
    'Reduced brake chatter and improved brake material life'
  ]
},

// INdustrial Oil Started from Here
{
  id: 'kixx-grease-ep-0-1-2',
  name: 'Kixx GREASE EP 0, 1, 2',
  category: 'grease',
  type: 'NLGI 1, 2, 3',
  brand: 'NLGI 1, 2, 3',
  description: 'Multipurpose EP grease formulated with highly refined mineral base oils, lithium thickener, extreme pressure (EP) additives, and rust and oxidation inhibitors. Designed for heavily loaded applications requiring EP greases.',
  image: kixx_grease_ep,
  recommendedFor: [
    'Industrial plain and rolling element bearings',
    'General plant lubrication',
    'Construction equipment bearings',
    'Earthmoving, quarrying, and mining applications',
    'Agricultural equipment lubrication',
    'Automotive wheel bearings and chassis grease points'
  ],
  performanceStandards: [
    'NLGI 1: -30°C to 130°C',
    'NLGI 2: -30°C to 130°C',
    'NLGI 3: -30°C to 130°C',
    'Maximum short-term exposure: 175°C (NLGI 1, 2, 3)'
  ],
  packSizes: ['180 Kg', '20 Kg'],
  benefits: [
    'Saves on maintenance',
    'Long service life',
    'Minimizes inventory costs'
  ]
},
{
  id: 'kixx-grease-moly-ep-2',
  name: 'Kixx GREASE MOLY EP 2',
  category: 'grease',
  type: 'Heavy Load EP Grease',
  brand: 'Heavy Load EP Grease',
  description: 'Multipurpose heavy-load EP grease formulated with highly refined ISO VG 220 base oil, lithium soap thickener, EP additives, rust and oxidation inhibitors, and molybdenum disulfide solid film lubricant. Designed for equipment operating under severe and shock loading conditions.',
  image: kixx_grease_moly_ep,
  recommendedFor: [
    'Construction, earthmoving, quarrying, mining, and agricultural equipment',
    'Pins, bushings, and other sliding surfaces or pivot points',
    'All types of anti-friction bearings',
    'Ball joints and universal joints',
    'High and shock load applications (except constant-velocity joints in FWD vehicles)'
  ],
  performanceStandards: ['NLGI 2'],
  packSizes: [],
  benefits: [
    'Saves on maintenance',
    'Long service life',
    'Minimizes inventory costs'
  ]
},
{
  id: 'kixx-therma-2',
  name: 'Kixx THERMA 2',
  category: 'grease',
  type: 'Kixx THERMA 2',
  brand: 'Kixx THERMA 2',
  description: 'Non-melting EP grease formulated from highly refined ISO 100 mineral base oil, organo-clay (bentonite) thickener, and an effective EP agent. Designed for high-temperature applications where frequent re-application is available.',
  image: kixx_therma_2,
  recommendedFor: [
    'Industrial ball and roller bearings in high-temperature applications',
    'Exhaust fan bearings',
    'Furnace door bearings',
    'Kiln car wheel bearings',
    'Roll neck bearings',
    'High-temperature conveyor bearings',
    'Rotary kiln bearings'
  ],
  performanceStandards: ['High temperature, bentonite grease'],
  packSizes: ['15 Kg'],
  benefits: [
    'Wide temperature range application',
    'Low grease loss',
    'Provides lubrication beyond limits of ordinary or complex soap greases',
    'Good protection against rust and corrosion',
    'Excellent water wash-out protection and storage stability'
  ]
},
{
  id: 'kixx-ep-2',
  name: 'Kixx EP 2',
  category: 'grease',
  type: 'Kixx EP 2',
  brand: 'Kixx EP 2',
  description: 'High-quality lithium soap grease containing extreme pressure additives, formulated to provide outstanding mechanical stability and EP characteristics under severe operating conditions.',
  image: kixx_ep_2,
  recommendedFor: [
    'All industrial grease applications for plain and antifriction bearings in steel mills, paper mills, electric motors & generators, pumps, conveyors, compressors, machine tools, etc.',
    'Construction and off-highway equipment bearing and pin bush lubrication'
  ],
  performanceStandards: ['NLGI 2 / Extreme pressure grease'],
  packSizes: ['180 Kg', '15 Kg'],
  benefits: [
    'Reduced maintenance cost',
    'Longer component life',
    'Protection against rust and corrosion'
  ]
},
{
  id: 'kixx-grease-liplex-2',
  name: 'Kixx GREASE LIPLEX 2',
  category: 'grease',
  type: 'Kixx GREASE LIPLEX 2',
  brand: 'Kixx GREASE LIPLEX 2',
  description: 'Kixx Grease Liplex 2 is a state-of-the-art, high-tech Lithium Complex grease. It is an NLGI 2 multipurpose, extreme pressure, high melting point Lithium Complex grease with tackiness additives. It offers significant advantages over conventional soap-based and clay-based grease in terms of shear stability, thermal stability, water resistance, and permeability. It has a high dropping point and is suitable for continuous operation up to +165°C. Red in color.',
  image: kixx_grease_liplex_2,
  recommendedFor: [
    'Automotive and industrial applications',
    'Marine, mining, and off-highway equipment',
    'Steel, cement, and sugar industries',
    'High temperature and heavy load conditions'
  ],
  performanceStandards: ['NLGI 2'],
  packSizes: ['180 Kg', '15 Kg'],
  benefits: [
    'Good mechanical and shear stability',
    'Excellent oxidation and thermal stability',
    'Good low temperature pumpability',
    'Good high temperature performance'
  ]
},
{
  id: 'kixx-long-life-gel-grease',
  name: 'Kixx LONG LIFE GEL GREASE',
  category: 'grease',
  type: 'Kixx LONG LIFE GEL GREASE',
  brand: 'Kixx LONG LIFE GEL GREASE',
  description: ' quality, multi-purpose automotive and industrial grease with a smooth buttery texture and light golden yellow color. Formulated with high VI base oils, lithium soap thickener, and advanced rust, corrosion, and oxidation inhibitors. Provides exceptional mechanical and chemical stability with a higher dropping point for superior performance under thermal stress.',
  image: kixx_long_life_gel_grase,
  recommendedFor: [
    'All automotive applications where NLGI-3 is recommended',
    'Industrial applications requiring long life grease'
  ],
  performanceStandards: ['NLGI-3'],
  packSizes: [
    '200 gms', '500 gms', '1 Kg', '2 Kg', '3 Kg',
    '5 Kg', '7 Kg', '20 Kg', '180 Kg'
  ],
  benefits: [
    'Excellent thermal and mechanical stability under moderate and extreme loads',
    'High oxidation stability and tackiness for longer service life',
    'Effective lubrication in wet conditions with superior water washout resistance'
  ]
},
{
  id: 'kixx-mp-3',
  name: 'Kixx MP 3',
  category: 'grease',
  type: 'Kixx MP 3',
  brand: 'Kixx MP 3',
  description: 'Multipurpose lithium-based grease formulated with highly refined mineral base oils, lithium thickener, and rust and oxidation inhibitors. Suitable for automotive and industrial applications under moderate load conditions.',
  image: kixx_mp_3,
  recommendedFor: [
    'Plain and rolling element bearings',
    'Automotive and general bearing lubrication',
    'Construction and agricultural equipment bearing lubrication'
  ],
  performanceStandards: ['Lithium-based NLGI 3 Multipurpose grease'],
  packSizes: ['180 Kg', '15 Kg'],
  benefits: [
    'Protection against component wear under moderate load conditions',
    'Excellent rust and corrosion protection of metal surfaces',
    'High oxidation resistance for extended grease service life'
  ]
},
// Compressor Oil Data Stared From Here
{
  id: 'kixx-compressor-oil-iso-68',
  name: 'Kixx Compressor Oil ISO 68',
  category: 'compressor-oil',
  type: 'Kixx Compressor Oil ISO 68',
  brand: 'Kixx Compressor Oil ISO 68',
  description: 'Kixx Compressor Oil is a  synthetic-based lubricant designed to satisfy the lubrication requirements of most reciprocating and rotary screw compressors. It delivers reliable lubrication under a wide range of operating temperatures and load conditions, formulated with fully synthetic base stocks and  additive technology.',
  image: kixx_compressor_oil,
  recommendedFor: [
    'Oil-flooded screw and vane compressors',
    'Sliding vane compressors',
    'Reciprocating compressors'
  ],
  performanceStandards: ['ISO 6743 – DAH', 'DIN 51506 VDL'],
  packSizes: ['210 Ltr', '20 Ltr'],
  benefits: [
    'Excellent oxidation and thermal stability',
    'Improved ashless technology for cleaner operation',
    'Enhanced water separability for reliable performance',
    'Outstanding high-temperature performance with good cold start ability'
  ]
},
{
  id: 'kixx-comsyn-synthetic-screw-air-compressor-oil',
  name: 'Kixx COMSYN Synthetic Screw Air Compressor Oil',
  category: 'compressor-oil',
  type: 'Kixx COMSYN Synthetic Screw Air Compressor Oil',
  brand: 'Kixx COMSYN Synthetic Screw Air Compressor Oil',
  description: 'Kixx COMSYN is a fully synthetic, PAO-based compressor oil formulated for severe duty rotary screw and vane air compressors. It is ideal for applications where mineral oil-based lubricants fail to perform, such as high outlet temperatures or operations requiring extended oil drain intervals.',
  image: kixx_comsyn,
  recommendedFor: [
    'Oil-flooded screw and vane compressors',
    'Sliding vane compressors',
    'Reciprocating compressors'
  ],
  performanceStandards: ['ISO 6743-3A-DAJ'],
  packSizes: ['210 Ltr', '50 Ltr', '20 Ltr'],
  benefits: [
    'Outstanding oxidation and thermal stability',
    'Extended oil drain intervals for reduced maintenance',
    'Improved water separability for reliable operation',
    'Excellent performance at high temperature with good cold start ability'
  ]
},

//Turbine Oil Data stated from here
{
  id: 'kixx-turbine-oil',
  name: 'Kixx TURBINE OIL ISO 46/68',
  category: 'turbine-oil',
  type: 'Kixx TURBINE OIL ISO 46/68',
  brand: 'Kixx TURBINE OIL ISO 46/68',
  description: 'Kixx Turbine Oil is a  quality inhibited turbine oil formulated with effective rust, oxidation, and foam inhibitors. It provides excellent air release properties, making it ideal for steam and hydraulic turbines, compressors, and industrial circulating systems.',
  image: kixx_turbine_oil,
  recommendedFor: [
    'Lubrication systems of mineral-oil-lubricated steam and hydraulic turbines under all service conditions',
    'Industrial gas turbines under moderate service where oil is not exposed to high temperatures',
    'Air compressors, bath and circulating systems supplying bearings of all types',
    'Lightly loaded gear sets, pumps, electric motors, and low to moderate-pressure hydraulic systems where anti-wear properties are not required'
  ],
  performanceStandards: [
    'British Standard BS489:1983',
    'German Standard DIN 51515 Part 1',
    'David Brown Table M (gear oil requirements)'
  ],
  packSizes: ['210 Ltr', '20 Ltr'],
  benefits: [
    'Outstanding oxidation resistance for long oil life',
    'Faster air release for improved system efficiency',
    'Excellent demulsibility for proper lubrication and water separation'
  ]
},

//Coolant Data started from here
{
  id: 'kixx-coolant',
  name: 'Kixx COOLANT',
  category: 'coolant',
  type: 'Kixx COOLANT',
  brand: 'Kixx COOLANT',
  description: 'Kixx Coolant is a superior quality, ready-to-use engine coolant formulated with pure monoethylene glycol and selective corrosion inhibitors. Premixed with deionised water, it ensures uniform mixing, effective protection against rust and corrosion, and stable performance across a wide temperature range.',
  image: kixx_coolant,
  recommendedFor: [
    'Passenger cars, light-duty, and heavy-duty vehicles for maximum performance',
    'Applications where coolant circuit protection against corrosion, freezing, and overheating is required',
    'Engines where circuit should be rinsed before refilling if another coolant was previously used'
  ],
  performanceStandards: [
    'Concentrate – JIS K2234'
  ],
  packSizes: ['210 Ltr'],
  benefits: [
    'Effective cooling performance in all climatic conditions',
    'Excellent chemical stability for reliable long-term use',
    'High boiling point and low freezing point for wide temperature protection',
    'Protects radiator and engine parts against rust and corrosion'
  ]
},

// Heat Transfer Fluid start from here
{
  id: 'kixx-therm-oil-m',
  name: 'Kixx THERM OIL M',
  category: 'heat-transfer-oil',
  type: 'Kixx THERM OIL M',
  brand: 'Kixx THERM OIL M',
  description: 'Kixx Therm Oil M is a  quality heat transfer oil formulated from highly refined base stocks. It provides excellent oxidation stability, resistance to thermal cracking, and superior heat transfer efficiency. With high specific heat and thermal conductivity, it ensures faster heat transfer and quick circulation even at low temperatures, reducing the risk of local overheating.',
  image: kixx_therm_oil_m,
  recommendedFor: [
    'Open systems operating at temperatures up to 180°C',
    'Closed systems (sealed with cold oil or inert gas) operating at bulk oil temperatures up to 285°C',
    'Systems requiring forced circulation of the heat transfer fluid'
  ],
  performanceStandards: [
    'IS 14745:1999'
  ],
  packSizes: ['210 Ltr'],
  benefits: [
    'Excellent oxidation and chemical stability',
    'Superior heat transfer properties',
    'Low volatility ensures minimal oil loss',
    'Non-corrosive and non-toxic for safer operations'
  ]
},
{
  id: 'kixx-therm-oil',
  name: 'Kixx THERM OIL',
  category: 'heat-transfer-oil',
  type: 'Synthetic Heat Transfer Fluid',
  brand: 'Kixx',
  description: 'Kixx Therm Oil is a synthetic fluid with outstanding thermal stability, designed for use as a heat transfer medium across wide temperature ranges. It ensures reliable performance in both closed and open heat transfer systems with forced circulation, delivering long service life with minimal fouling and deposit formation.',
  image: kixx_therm_oil,
  recommendedFor: [
    'Indirect closed fluid heat transfer systems with bulk operating temperature up to 320°C',
    'Applications requiring increased life and reduced oxidation/thermal degradation',
    'Systems needing minimal fouling and deposit formation on heat transfer surfaces'
  ],
  performanceStandards: [
    'Synthetic Heat Transfer Fluid'
  ],
  packSizes: ['210 Ltr'],
  benefits: [
    'Excellent oxidation and chemical stability',
    'Low volatility and low vapor pressure',
    'Non-corrosive and non-toxic formulation',
    'Superior heat transfer properties',
    'Increased overall system efficiency'
  ]
},
//Cutting Oil Statred from here 
{
  id: 'kixx-cutting-oil-sl',
  name: 'Kixx Cutting Oil SL',
  category: 'cutting-oil',
  type: 'Soluble Cutting Fluid (Non-EP Type)',
  brand: 'Soluble Cutting Fluid (Non-EP Type)',
  description: 'Kixx Cutting Oil SL is a general-purpose soluble cutting fluid of the non-EP type. It is blended from  mineral oil with emulsifiers and corrosion inhibitors to form a stable, milky white emulsion. The homogenous emulsion resists splitting during routine shutdowns, ensuring consistent performance and reliability in cutting operations.',
  image: kixx_cutting_oil_sl,
  recommendedFor: [
    'General-purpose cutting operations on ferrous and nonferrous metals',
    'Applications requiring high-quality coolant',
    'Situations where extended tool life and better surface finish are desired'
  ],
  performanceStandards: [
    'BIS 1115:1986'
  ],
  packSizes: ['210 Ltr'],
  benefits: [
    'Highly stable emulsion',
    'Prolonged tool life',
    'Excellent surface finish',
    'Superior cooling and lubricating properties',
    'Excellent rust protection'
  ]
},
{
  id: 'neat-cutting-oil-100',
  name: 'Semi-Synthetic Cutting Oil',
  category: 'cutting-oil',
  type: 'neat--oil',
  description: 'Semi-Synthetic Cutting Oil is a premium quality, water-miscible cutting fluid designed for a wide range of machining operations. It combines the cleanliness of synthetic fluids with the lubricity of mineral oils, delivering superior cooling, rust protection, and tool life extension. Ideal for both ferrous and non-ferrous metals, this fluid ensures smooth machining and reduced wear on cutting tools.',
  image: kixx_cutting_oil_sl, 
  brand: 'High Performance Semi-Synthetic Cutting Fluid',
  recommendedFor: [
    'General-purpose machining of ferrous and non-ferrous metals',
    'Turning, drilling, milling, and grinding operations',
    'CNC machines and high-speed machining centers',
    'Automotive and engineering workshops',
    'Situations requiring extended sump life and reduced maintenance'
  ],
  packSizes: ['5L', '20L', '55L', '210L'],
  performanceStandards: [
    'ISO 6743/7',
    'DIN 51385',
    'Proprietary OEM requirements for machining fluids'
  ],
  benefits: [
    'Excellent cooling and lubrication properties to enhance tool life and surface finish',
    'Low foaming characteristics suitable for high-pressure coolant systems',
    'Resists bacterial and fungal growth, ensuring longer sump life',
    'Prevents rust and corrosion on workpieces and machine surfaces',
    'Provides cleaner operation compared to straight mineral oils',
    'Easily mixes with water to form stable emulsions',
    'Improves workplace hygiene with reduced mist and odor'
  ]
},

//Slideway Machine oil
{
  id: 'kixx-way-lube',
  name: 'Kixx WAY LUBE',
  category: 'metalworking-fluids',
  type: 'Way Lubricant',
  brand: 'Way Lubricant',
  description: 'Kixx Way Lube is a  quality way lubricant formulated with highly refined, high viscosity index mineral oils. It is fortified with tackiness and selective additives to ensure effective lubrication of machine tool slideways and guides. Designed to resist stick-slip and provide superior frictional characteristics, it ensures precise and smooth operation under varying load conditions.',
  image: kixx_way_lube,
  recommendedFor: [
    'Machine tool slideways and guides',
    'Horizontal slideways (ISO 68)',
    'Vertical slideways (ISO 220)',
    'Light-to-moderate applications (ISO 68)',
    'Suitable for Bijur Automatic Lubricant delivery systems'
  ],
  performanceStandards: [
    'General Motors LS-2 Way 011 Performance Level (LW-06-1-04)',
    'Cincinnati Machine Performance Level (P-47)'
  ],
  packSizes: ['210 Ltr'],
  benefits: [
    'Friction modified for superior slideway lubrication',
    'Excellent anti-stick slip properties for high precision machining',
    'Ensures smooth machinery performance under high load',
    'Compatible with cutting oils'
  ]
},
//Rockdrill Started from here
{
  id: 'kixx-rockdrill-100',
  name: 'Kixx ROCKDRILL 100',
  category: 'industrial-lubricants',
  type: 'Rock Drill Oil',
  brand: 'Rock Drill Oil',
  description: 'Kixx Rockdrill 100 is a high-performance lubricant designed for percussion-type air tools. It is formulated with highly refined mineral oils, EP and tackiness additives, emulsifiers, rust and corrosion inhibitors, as well as antifoam and anti-fogging agents to provide reliable protection and extended tool life under severe conditions.',
  image: kixx_rockdrill_100,
  recommendedFor: [
    'Percussion type air tools',
    'Wet and dry type percussion tool applications',
    'Concrete or pavement breakers (jackhammers)',
    'Tampers and rammers',
    'Crawler mounted drill rigs'
  ],
  performanceStandards: [
    'ISO 6743/11 Pneumatic Tool Oil'
  ],
  packSizes: ['210 Ltr'],
  benefits: [
    'Improved tool life and performance',
    'Effective protection under wet drilling conditions',
    'Excellent rust and corrosion resistance'
  ]
}






];




