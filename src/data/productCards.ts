
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
import kixx_geartec_85w140 from "../assets/kixx_geartec_85w140.webp"
import kixx_gearsyn_75w90 from "../assets/kixx_gearsyn_75w90.webp"
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
import kixx_compressor from "../assets/kixx_compressor_oil.webp"
import kixx_comsyn from "../assets/kixx_comsyn.webp"
import kixx_turbine_oil from "../assets/kixx_turbine_oil.webp"
import kixx_coolant from "../assets/kixx_coolant.webp";
import kixx_therm_oil_m from "../assets/kixx_therm_oil_m.webp";
import kixx_therm_oil from "../assets/kixx_therm_oil.webp";
import kixx_cutting_oil_sl from "../assets/kixx_cutting_oil_sl.webp";
import kixx_way_lube from "../assets/kixx_way_lube.webp";
import kixx_rockdrill_100 from "../assets/kixx_rockdrill_100.webp";
import neat_oil from "../assets/neat_oil.webp"

export interface ProductCard {
  id: string;
  name: string;
  category: string;
  type: string;
  shortDescription: string;
  image: string;
}

export const productCards: ProductCard[] = [
  


  //Hydrolic Oil Data
{
  id: 'kixx-hydro-aw',
  name: 'Kixx HYDRO AW',
  category: 'hydrolic-oil',
  type: 'ISO 32/46/68',
  shortDescription: 'Kixx Hydro AW is a premium quality, anti-wear hydraulic fluid, designed for use in mobile and stationary high-pressure hydraulic systems.',
  image: kixx_hydro_aw
},
{
  id: 'kixx-hydro-super',
  name: 'Kixx HYDRO SUPER',
  category: 'hydrolic-oil',
  type: 'Anti-Wear Hydraulic Fluid',
  shortDescription: 'Kixx Hydro Super is a mid range anti-wear hydraulic fluid.',
  image: kixx_hydro_super
},
{
  id: 'kixx-hydro-hd',
  name: 'Kixx HYDRO HD',
  category: 'hydrolic-oil',
  type: 'ISO 32/46/68',
  shortDescription: 'Kixx Hydro HD is a premium quality, anti-wear hydraulic fluid, designed for use in mobile and stationary high-pressure hydraulic systems.',
  image: kixx_hydro_hd
},
{
  id: 'kixx-hydro-af',
  name: 'Kixx HYDRO AF (Zn Free)',
  category: 'hydrolic-oil',
  type: 'Ash-less Hydraulic Oil',
  shortDescription: 'Kixx Hydro AF hydraulic oils are formulated with high-quality base oils and an ash-less additive system that provides superior oxidation stability.',
  image: kixx_hydro_af
},
{
  id: 'kixx-hydro-hdz',
  name: 'Kixx HYDRO HDZ',
  category: 'hydrolic-oil',
  type: 'ISO 32/46/68/100',
  shortDescription: 'Kixx Hydro HDZ is a premium quality, shear stable, multi-viscosity, anti-wear hydraulic fluid, designed for use in hydraulic systems.',
  image: kixx_hydro_hdz
},
{
  id: 'kixx-hvl',
  name: 'Kixx HVL',
  category: 'hydrolic-oil',
  type: 'ISO 46/68',
  shortDescription: 'Kixx Hydro HVL is a premium long-life multigrade hydraulic oil for earthmoving equipments for longer drain period.',
  image: kixx_hvl
},

//Heavy Duty Engine Oil 
{
  id: 'kixx-hdx-euro',
  name: 'Kixx HDX EURO',
  category: 'heavy-duty-diesel-engine-oil',
  type: 'SAE 15W-40',
  shortDescription: 'Premium performance, multi-grade, heavy-duty diesel engine oil specifically designed for new low emission engines with ULSD (Ultra Low Sulfur Diesel).',
  image: kixx_hdx_euro
},
{
  id: 'kixx-d1-platinum-plus',
  name: 'Kixx D1 PLATINUM PLUS',
  category: 'heavy-duty-diesel-engine-oil',
  type: 'SAE 15W-40',
  shortDescription: 'Premium performance semi synthetic multigrade, heavy-duty diesel engine oil.',
  image: kixx_d1_platinum_plus
},
{
  id: 'kixx-dynamic-gold',
  name: 'Kixx DYNAMIC GOLD',
  category: 'heavy-duty-diesel-engine-oil',
  type: 'SAE 15W-40',
  shortDescription: 'Premium performance, multigrade, heavy-duty diesel engine oil.',
  image: kixx_dynamic_gold
},
{
  id: 'kixx-dynamic-silver',
  name: 'Kixx DYNAMIC SILVER',
  category: 'heavy-duty-diesel-engine-oil',
  type: 'SAE 20W-40',
  shortDescription: 'Kixx Dynamic Silver is a high performance, multi-grade diesel engine oil specially designed to lubricate a wide range of diesel and gasoline engines.',
  image: kixx_dynamic_silver
},
// Gear Oil Data
{
  id: 'kixx-gear-ep',
  name: 'Kixx GEAR EP',
  category: 'gear-oil',
  type: 'ISO 100/150/220/320/460',
  shortDescription: 'Kixx EP is a high performance, mild EP industrial gear lubricants.',
  image: kixx_gear_ep
},
{
  id: 'kixx-gear-ep-s',
  name: 'Kixx GEAR EP S',
  category: 'gear-oil',
  type: 'PAO Based, fully synthetic gear oil',
  shortDescription: 'Kixx Gear EP-S (PAO) is a high performance, mild EP industrial gear lubricant.',
  image: kixx_gear_ep_s
},
{
  id: 'kixx-geartec-85w140',
  name: 'Kixx GEARTEC',
  category: 'gear-oil',
  type: 'API GL-5 SAE 85W-140',
  shortDescription: 'Kixx Geartec is a premium quality extreme pressure type multi-grade automotive gear oil specifically designed to address the requirements of gears.',
  image: kixx_geartec_85w140
},
{
  id: 'kixx-gearsyn-75w90',
  name: 'Kixx GEARSYN',
  category: 'gear-oil',
  type: 'API GL4/5 SAE 75W-90',
  shortDescription: 'Kixx Gearsyn is a premium synthetic total driveline lubricant offering extended drain capability.',
  image: kixx_gearsyn_75w90
},
{
  id: 'kixx-geartec-gl4',
  name: 'Kixx GEARTEC',
  category: 'gear-oil',
  type: 'API GL-4 SAE 80W-90 / 90 / 140',
  shortDescription: 'Kixx Geartec High quality, mild-EP automotive gear lubricant designed for applications where API GL-4 performance is required.',
  image: kixx_geartec_gl4
},
{
  id: 'kixx-geartec-gl5-75w90',
  name: 'Kixx GEARTEC',
  category: 'gear-oil',
  type: 'API GL-5 SAE 75W-90',
  shortDescription: 'Kixx Geartec is a high-performance, multipurpose, thermally stable, EP automotive gear lubricant.',
  image: kixx_geartec_gl5_75w90
},

// Transmission Oils
{
  id: 'kixx-atf-dx-iii',
  name: 'Kixx ATF DX III',
  category: 'transmission-oil',
  type: 'Automatic Transmission Fluid',
  shortDescription: 'Kixx ATF DX-III transmission oil is superior to any other past or current ATF for application to passenger car automatic transmission.',
  image: kixx_atf_dx_iii
},
{
  id: 'kixx-10w-plus',
  name: 'Kixx 10W PLUS',
  category: 'transmission-oil',
  type: 'API CD',
  shortDescription: 'Kixx 10W Plus is high quality, mono-grade oil specially designed for off-highway manual transmission and hydraulic systems where this type of oils are recommended.',
  image: kixx_10w_plus
},
{
  id: 'kixx-trans-c4-30',
  name: 'Kixx TRANS',
  category: 'transmission-oil',
  type: 'C-4 SAE 30',
  shortDescription: 'Kixx Trans a premium-quality heavy-duty automatic transmission fluid formulated to meet the Allison C-4 specification.',
  image: kixx_trans_c4_sae30
},
{
  id: 'kixx-unitrans-gl4',
  name: 'Kixx UNITRANS',
  category: 'transmission-oil',
  type: 'API GL-4',
  shortDescription: 'Kixx Unitrans is a High performance, all-weather lubricant used in transmission, hydraulic systems, final drives and wet brakes of agricultural tractors and farm equipment.',
  image: kixx_unitrans_api_g14
},


// Industrial Oil / Grease Data
{
  id: 'kixx-grease-ep',
  name: 'Kixx GREASE EP 0, 1, 2',
  category: 'industrial-oil',
  type: 'NLGI 1, 2, 3',
  shortDescription: 'Multipurpose Kixx grease EP contains highly refined mineral base oils.',
  image: kixx_grease_ep
},
{
  id: 'kixx-grease-moly-ep2',
  name: 'Kixx GREASE MOLY EP 2',
  category: 'industrial-oil',
  type: 'Heavy Load EP Grease',
  shortDescription: 'Kixx Grease Moly EP2 is multipurpose EP grease primarily designed for construction.',
  image: kixx_grease_moly_ep
},
{
  id: 'kixx-therma-2',
  name: 'Kixx THERMA 2',
  category: 'industrial-oil',
  type: 'Non-melting, EP grease',
  shortDescription: 'Non-melting, EP grease formulated from highly refined ISO 100 mineral base oil.',
  image: kixx_therma_2
},
{
  id: 'kixx-ep-2',
  name: 'Kixx EP 2',
  category: 'industrial-oil',
  type: 'NLGI 2',
  shortDescription: 'Kixx EP 2 is a high-quality lithium soap grease containing extreme pressure additives, formulated to provide outstanding mechanical stability & EP characteristics under severe operating conditions.',
  image: kixx_ep_2
},
{
  id: 'kixx-grease-liplex-2',
  name: 'Kixx GREASE LIPLEX 2',
  category: 'industrial-oil',
  type: 'Premium Lithium Complex Grease',
  shortDescription: 'Kixx Grease Liplex 2 is a “state‐of‐art”, high tech Lithium Complex grease.',
  image: kixx_grease_liplex_2
},
{
  id: 'kixx-long-life-gel-grease-industrial',
  name: 'Kixx LONG LIFE GEL GREASE',
  category: 'industrial-oil',
  type: 'Premium Long Life Grease',
  shortDescription: 'Kixx Long Life Grease is premium quality general multi-purpose automotive and industrial grease.',
  image: kixx_long_life_gel_grase
},
{
  id: 'kixx-mp-3',
  name: 'Kixx MP 3',
  category: 'industrial-oil',
  type: 'NLGI 3',
  shortDescription: 'Kixx MP 3 is a multipurpose grease containing highly refined mineral base oils.',
  image: kixx_mp_3
},

// Compressor Oil Data start from here
{
  id: 'kixx-compressor-oil-68',
  name: 'Kixx COMPRESSOR OIL',
  category: 'compressor-oil',
  type: 'ISO 68',
  shortDescription: 'Kixx Compressor oil 68 is a premium mineral compressor oil specially developed for oil-flooded screw and sliding vane type air compressor to provide satisfactory lubrication under a wide range of operating temperatures and load conditions.',
  image: kixx_compressor
},
{
  id: 'kixx-comsyn',
  name: 'Kixx COMSYN',
  category: 'compressor-oil',
  type: 'Synthetic Screw Air Compressor Oil',
  shortDescription: 'Kixx Comsyn is a fully synthetic, PAO based compressor oil intended for the lubrication of severe duty rotary screw and vane air compressors.',
  image: kixx_comsyn
},

// Turbine Oil Data
{
  id: 'kixx-turbine-oil',
  name: 'Kixx TURBINE OIL',
  category: 'turbine-oil',
  type: 'ISO 46/68',
  shortDescription: 'Kixx turbine oil is a premium quality inhibited turbine oil.',
  image: kixx_turbine_oil
},
//Coolant Data 
{
  id: 'kixx-coolant',
  name: 'Kixx COOLANT',
  category: 'coolant',
  type: 'Engine Coolant',
  shortDescription: 'Kixx Coolant is superior quality of ready to use type of engine coolant.',
  image: kixx_coolant
},
//Heat Transfer Fluid 
{
  id: 'kixx-therm-oil-m',
  name: 'Kixx THERM OIL M',
  category: 'heat-transfer-fluid',
  type: 'Heat Transfer Oil',
  shortDescription: 'Kixx Therm Oil M is premium quality heat transfer oil intended for use in closed indirect heating systems.',
  image: kixx_therm_oil_m 
},
{
  id: 'kixx-therm-oil',
  name: 'Kixx THERM OIL',
  category: 'heat-transfer-fluid',
  type: 'Synthetic Heat Transfer Fluid',
  shortDescription: 'Kixx Therm oil 46 is a synthetic fluid with outstanding thermal stability for use as a heat transfer medium over wide temperature ranges in both closed and open heat transfer systems with forced circulation.',
  image: kixx_therm_oil 
},
//Cutting oil 
{
  id: 'kixx-cutting-oil-sl',
  name: 'Kixx Cutting Oil SL',
  category: 'cutting-oil',
  type: 'neat-oil',
  shortDescription: 'Kixx Cutting Oil SL is specially developed for a general-purpose soluble cutting fluid of the non-EP type.',
  image: kixx_cutting_oil_sl 
},
{
  id: ' neat-cutting-oil-100',
  name: 'Semisenthetic Cutting Oil',
  category: 'cutting-oil',
  type: 'neat-oil',
  shortDescription: 'Kixx Cutting Oil SL is specially developed for a general-purpose soluble cutting fluid of the non-EP type.',
  image: neat_oil 
},

//Slidaway Machine oil 
{
  id: 'kixx-way-lube',
  name: 'Kixx WAY LUBE',
  category: 'slideway-machine-oil',
  type: 'ISO 68/220',
  shortDescription: 'Kixx way lube is of a premium quality based on highly refined, high viscosity index mineral oil to provide effective lubrication of machine slide-ways.',
  image: kixx_way_lube 
},

//Rockdrill Oil Data 
{
  id: 'kixx-rockdrill-100',
  name: 'Kixx ROCKDRILL 100',
  category: 'rockdrill-oil',
  type: 'Rockdrill Oil',
  shortDescription: 'Kixx Rockdrill is a high-performance lubricant for percussion-type air tools, which is formulated from highly refined mineral oils.',
  image: kixx_rockdrill_100 
}

];

export const categories = [
  { id: 'hydrolic-oil', name: 'HYDRAULIC OIL', image:  kixx_hydro_aw},
  { id: 'heavy-duty-diesel-engine-oil', name: 'HEAVY DUTY DIESEL ENGINE OIL', image: kixx_hvl },
  { id: 'gear-oil', name: 'GEAR OIL', image: kixx_gear_ep},
  { id: 'transmission-oil', name: 'TRANSMISSION OIL', image:  kixx_atf_dx_iii},
  { id: 'industrial-oil', name: 'INDUSTRIAL GREASES', image: kixx_grease_ep },
  { id: 'compressor-oil', name: 'COMPRESSOR OIL', image: kixx_compressor },
  { id: 'turbine-oil', name: 'TURBINE OIL', image: kixx_turbine_oil  },
  { id: 'coolant', name: 'COOLANT', image:  kixx_coolant},
  { id: 'heat-transfer-fluid', name: 'HEAT TRANSFER FLUID', image: kixx_therm_oil_m },
  { id: 'cutting-oil', name: 'CUTTING OIL ', image:  kixx_cutting_oil_sl},
  { id: 'slideway-machine-oil', name: 'SLIDEWAY MACHINE OIL ', image: kixx_way_lube },
  { id: 'rockdrill-oil', name: 'ROCKDRILL OIL ', image: kixx_rockdrill_100 }
];



export const industrialCategories = [
  'hydrolic-oil',
  'gear-oil',
  'cutting-oil',
  'transmission-oil',
  'coolant',
  'heat-transfer-fluid',
  'slideway-machine-oil',
  'rockdrill-oil',
  'turbine-oil',
  'compressor-oil',
  'industrial-oil',
  'heavy-duty-diesel-engine-oil'

];
