/* js/data/parts-b1-b4.js — Parts for B1 LeMond, B2 Trek Domane, B3 Stumpjumper, B4 Giant OCR3 */
/* conditionRaw = verbatim source text; condition = normalized enum */

export const PARTS_B1 = [
  // Frame & Structural
  { id:'b1-frame-001', bikeId:'b1', category:'Frame', name:'Frame', spec:'LeMond "Reno", steel, black w/ red/white decals', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'American flag decal on down tube; no cracks' },
  { id:'b1-frame-002', bikeId:'b1', category:'Frame', name:'Fork', spec:'Steel road fork, yellow warning/serial sticker', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Confirmed attached' },
  { id:'b1-frame-003', bikeId:'b1', category:'Frame', name:'Bottom bracket shell', spec:'Threaded; BB markings: SRO070/WTU/190S1040X/842300034/DI-1310', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'No BB installed — source and fit before build' },
  { id:'b1-frame-004', bikeId:'b1', category:'Frame', name:'Headset', spec:'Cup at head tube', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm cups seated and bearings present' },
  { id:'b1-frame-005', bikeId:'b1', category:'Frame', name:'Bottle cage mounts', spec:'2× brazed on down tube', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Both present' },
  { id:'b1-frame-006', bikeId:'b1', category:'Frame', name:'Rear dropout', spec:'Standard road', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'No damage visible' },
  // Cockpit
  { id:'b1-cockpit-001', bikeId:'b1', category:'Cockpit', name:'Handlebars', spec:'Drop bars, silver/chrome alloy', conditionRaw:'✅ Good', condition:'good', status:'removed', notes:'Straight, no damage' },
  { id:'b1-cockpit-002', bikeId:'b1', category:'Cockpit', name:'Stem', spec:'Quill stem, silver/chrome, vintage', conditionRaw:'✅ Good', condition:'good', status:'removed', notes:'Period-correct' },
  { id:'b1-cockpit-003', bikeId:'b1', category:'Cockpit', name:'Bar tape', spec:'Red/black camo', conditionRaw:'❌ Replace', condition:'replace', status:'installed', notes:'Fraying; worn through at ends — Profile Design black tape on hand as replacement' },
  { id:'b1-cockpit-004', bikeId:'b1', category:'Cockpit', name:'Brake levers', spec:'Silver alloy, Tektro-style road levers', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'removed', notes:'Check pivots and cable ports' },
  // Brakes
  { id:'b1-brake-001', bikeId:'b1', category:'Brakes', name:'Front brake caliper', spec:'Silver, dual-pivot road caliper', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'removed', notes:'Mounted; pad wear unknown' },
  { id:'b1-brake-002', bikeId:'b1', category:'Brakes', name:'Brake cables', spec:'Black housing, silver inner', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'removed', notes:'May be aged/brittle — housings located on wall with crankset' },
  { id:'b1-brake-003', bikeId:'b1', category:'Brakes', name:'Brake pads', spec:'Unknown', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'removed', notes:'Assume replacement needed' },
  // Drivetrain
  { id:'b1-drive-001', bikeId:'b1', category:'Drivetrain', name:'Crankset', spec:'Shimano Tiagra, triple', conditionRaw:'✅ Located', condition:'good', status:'removed', notes:'Hanging on wall in bike house — clean and inspect before install' },
  { id:'b1-drive-002', bikeId:'b1', category:'Drivetrain', name:'Chainrings', spec:'Triple ring set (Tiagra spec, likely 50/39/30)', conditionRaw:'✅ Located', condition:'good', status:'removed', notes:'On crankset — confirm tooth count' },
  { id:'b1-drive-003', bikeId:'b1', category:'Drivetrain', name:'Bottom bracket', spec:'Shimano BB-UN300, threaded square taper', conditionRaw:'✅ On hand', condition:'good', status:'sourcing', notes:'2 units in cabinet — confirm correct spindle length before install' },
  { id:'b1-drive-004', bikeId:'b1', category:'Drivetrain', name:'Front derailleur', spec:'Shimano 105 (confirmed)', conditionRaw:'⚠️ Locate', condition:'inspect', status:'unknown', notes:'Confirm present with remaining parts' },
  { id:'b1-drive-005', bikeId:'b1', category:'Drivetrain', name:'Rear derailleur', spec:'Shimano 105 (confirmed)', conditionRaw:'⚠️ Locate', condition:'inspect', status:'unknown', notes:'Confirm present' },
  { id:'b1-drive-006', bikeId:'b1', category:'Drivetrain', name:'Shifters', spec:'Shimano 105 STI (assumed — matches derailleurs)', conditionRaw:'⚠️ Locate', condition:'inspect', status:'unknown', notes:'Confirm present and generation' },
  { id:'b1-drive-007', bikeId:'b1', category:'Drivetrain', name:'Rear brake calipers', spec:'Likely Shimano Tiagra dual-pivot', conditionRaw:'⚠️ Locate/Confirm', condition:'inspect', status:'unknown', notes:'Confirm brand when locating remaining parts' },
  { id:'b1-drive-008', bikeId:'b1', category:'Drivetrain', name:'Chain', spec:'10-speed (Tiagra/105 era)', conditionRaw:'⚠️ Locate', condition:'inspect', status:'unknown', notes:'Confirm present; check stretch on reassembly' },
  { id:'b1-drive-009', bikeId:'b1', category:'Drivetrain', name:'Cassette / Freewheel', spec:'10-speed (confirm freewheel vs cassette)', conditionRaw:'⚠️ Locate', condition:'inspect', status:'unknown', notes:'Confirm present and tooth count' },
  { id:'b1-drive-010', bikeId:'b1', category:'Drivetrain', name:'Pedals', spec:'Black flat/platform (visible in photo)', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'removed', notes:'Confirm bearing condition; Wellgo road cleats on hand for future road pedals' },
  // Wheels & Tires
  { id:'b1-wheels-001', bikeId:'b1', category:'Wheels', name:'Front wheel', spec:'700c, black LeMond-branded rim', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'removed', notes:'Check trueness and spoke tension' },
  { id:'b1-wheels-002', bikeId:'b1', category:'Wheels', name:'Rear wheel', spec:'700c, black LeMond-branded rim', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'removed', notes:'Check trueness' },
  { id:'b1-wheels-003', bikeId:'b1', category:'Wheels', name:'Tires', spec:'Narrow road (700c)', conditionRaw:'❌ Replace', condition:'replace', status:'installed', notes:'Appear aged; replace before riding' },
  { id:'b1-wheels-004', bikeId:'b1', category:'Wheels', name:'Spokes', spec:'Silver', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Tension check recommended' },
  // Accessories
  { id:'b1-acc-001', bikeId:'b1', category:'Accessories', name:'Bottle cage', spec:'Black wire cage', conditionRaw:'✅ Good', condition:'good', status:'removed', notes:'On down tube' },
];

export const PARTS_B2 = [
  // Frame & Structural
  { id:'b2-frame-001', bikeId:'b2', category:'Frame', name:'Frame', spec:'Trek Domane, 49cm, white/cream, ISO 4210-2R', conditionRaw:'✅ Excellent', condition:'good', status:'installed', notes:'Nearly new; no damage' },
  { id:'b2-frame-002', bikeId:'b2', category:'Frame', name:'Fork', spec:'White/cream, integrated disc mount', conditionRaw:'✅ Excellent', condition:'good', status:'installed', notes:'Clean' },
  { id:'b2-frame-003', bikeId:'b2', category:'Frame', name:'Fender/rack mounts', spec:'Gold alloy bolts ×2 on seat tube', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Present' },
  { id:'b2-frame-004', bikeId:'b2', category:'Frame', name:'Bottom bracket', spec:'Not visible — confirm type', conditionRaw:'⚠️ Unknown', condition:'inspect', status:'installed', notes:'Confirm type and condition; likely press-fit' },
  { id:'b2-frame-005', bikeId:'b2', category:'Frame', name:'Headset', spec:'Integrated', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Appears correctly installed' },
  // Cockpit
  { id:'b2-cockpit-001', bikeId:'b2', category:'Cockpit', name:'Handlebars', spec:'Not confirmed', conditionRaw:'⚠️ Unknown', condition:'inspect', status:'installed', notes:'Confirm type' },
  { id:'b2-cockpit-002', bikeId:'b2', category:'Cockpit', name:'Stem', spec:'Not confirmed', conditionRaw:'⚠️ Unknown', condition:'inspect', status:'installed', notes:'Confirm presence' },
  { id:'b2-cockpit-003', bikeId:'b2', category:'Cockpit', name:'Crankset', spec:'Silver alloy (FSA or similar, partial view)', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Brand unconfirmed' },
  { id:'b2-cockpit-004', bikeId:'b2', category:'Cockpit', name:'Front derailleur', spec:'Black, clamp-mounted', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Cable routed, appears functional' },
  { id:'b2-cockpit-005', bikeId:'b2', category:'Cockpit', name:'Shifters', spec:'Not visible', conditionRaw:'⚠️ Unknown', condition:'inspect', status:'installed', notes:'Confirm presence' },
  // Brakes
  { id:'b2-brake-001', bikeId:'b2', category:'Brakes', name:'Rear brake caliper', spec:'Shimano Tiagra hydraulic disc', conditionRaw:'✅ Excellent', condition:'good', status:'installed', notes:'Clean, new-looking' },
  { id:'b2-brake-002', bikeId:'b2', category:'Brakes', name:'Rear disc rotor', spec:'Center-lock, stainless, bronze center-lock nut', conditionRaw:'✅ Excellent', condition:'good', status:'installed', notes:'Good thickness, no scoring' },
  { id:'b2-brake-003', bikeId:'b2', category:'Brakes', name:'Front brake caliper', spec:'Hydraulic disc (assumed matching Tiagra)', conditionRaw:'⚠️ Confirm', condition:'inspect', status:'installed', notes:'Confirm front caliper' },
  { id:'b2-brake-004', bikeId:'b2', category:'Brakes', name:'Brake hoses', spec:'Black', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'No kinking visible' },
  // Drivetrain
  { id:'b2-drive-001', bikeId:'b2', category:'Drivetrain', name:'Chain', spec:'Present', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Appears lightly used' },
  { id:'b2-drive-002', bikeId:'b2', category:'Drivetrain', name:'Rear derailleur', spec:'Black, Tiagra assumed', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm model' },
  { id:'b2-drive-003', bikeId:'b2', category:'Drivetrain', name:'Rear cassette', spec:'Not clearly visible', conditionRaw:'⚠️ Unknown', condition:'inspect', status:'installed', notes:'Confirm tooth count and brand' },
  // Wheels & Tires
  { id:'b2-wheels-001', bikeId:'b2', category:'Wheels', name:'Rear wheel', spec:'Bontrager Paradigm, black rim, black spokes', conditionRaw:'✅ Excellent', condition:'good', status:'installed', notes:'True, no damage' },
  { id:'b2-wheels-002', bikeId:'b2', category:'Wheels', name:'Rear hub', spec:'Center-lock disc compatible', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Clean' },
  { id:'b2-wheels-003', bikeId:'b2', category:'Wheels', name:'Front wheel', spec:'Not confirmed (assumed matching Bontrager)', conditionRaw:'⚠️ Confirm', condition:'inspect', status:'installed', notes:'Verify' },
  { id:'b2-wheels-004', bikeId:'b2', category:'Wheels', name:'Tires', spec:'Not clearly visible', conditionRaw:'⚠️ Confirm', condition:'inspect', status:'installed', notes:'Confirm brand/width' },
  { id:'b2-wheels-005', bikeId:'b2', category:'Wheels', name:'Spoke reflector', spec:'White, rear wheel', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Present' },
];

export const PARTS_B3 = [
  // Frame & Structural
  { id:'b3-frame-001', bikeId:'b3', category:'Frame', name:'Frame', spec:'Specialized Stumpjumper M2, aluminum, yellow', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Minor surface wear; structurally sound' },
  { id:'b3-frame-002', bikeId:'b3', category:'Frame', name:'Fork', spec:'RockShox suspension, red lowers, gold stanchions', conditionRaw:'⚠️ Service Due', condition:'inspect', status:'installed', notes:'Seal and oil service needed' },
  { id:'b3-frame-003', bikeId:'b3', category:'Frame', name:'Bottom bracket', spec:'SRAM GXP external', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Check for play' },
  // Cockpit
  { id:'b3-cockpit-001', bikeId:'b3', category:'Cockpit', name:'Handlebars', spec:'Flat/riser bars, black', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Straight' },
  { id:'b3-cockpit-002', bikeId:'b3', category:'Cockpit', name:'Stem', spec:'Black, short, threadless', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Secure' },
  { id:'b3-cockpit-003', bikeId:'b3', category:'Cockpit', name:'Grips', spec:'Left: black lock-on; Right: combo grip-shifter', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Left grip worn' },
  { id:'b3-cockpit-004', bikeId:'b3', category:'Cockpit', name:'Seatpost', spec:'Black/silver alloy', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Functional' },
  // Brakes
  { id:'b3-brake-001', bikeId:'b3', category:'Brakes', name:'Brake levers', spec:'Black mechanical', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Cables routed' },
  { id:'b3-brake-002', bikeId:'b3', category:'Brakes', name:'Brakes', spec:'Mechanical — confirm V-brake or disc', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Type needs confirmation' },
  { id:'b3-brake-003', bikeId:'b3', category:'Brakes', name:'Brake cables', spec:'Present', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Check for fraying' },
  // Drivetrain
  { id:'b3-drive-001', bikeId:'b3', category:'Drivetrain', name:'Crankset', spec:'Truvativ, silver/grey alloy', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Check spider for cracks' },
  { id:'b3-drive-002', bikeId:'b3', category:'Drivetrain', name:'Chainrings', spec:'Triple, black Truvativ/SRAM', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Check for shark-fin teeth' },
  { id:'b3-drive-003', bikeId:'b3', category:'Drivetrain', name:'Front derailleur', spec:'Silver, clamp style', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Dusty; test shifting' },
  { id:'b3-drive-004', bikeId:'b3', category:'Drivetrain', name:'Rear derailleur', spec:'SRAM', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Inspect jockey wheels' },
  { id:'b3-drive-005', bikeId:'b3', category:'Drivetrain', name:'Chain', spec:'Present', conditionRaw:'❌ Replace', condition:'replace', status:'installed', notes:'Showing stretch/wear' },
  { id:'b3-drive-006', bikeId:'b3', category:'Drivetrain', name:'Rear cassette', spec:'SRAM', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Likely replace with chain' },
  // Wheels & Tires
  { id:'b3-wheels-001', bikeId:'b3', category:'Wheels', name:'Front wheel', spec:'Bontrager, black rim, red spoke nipples, 26"', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Appears true' },
  { id:'b3-wheels-002', bikeId:'b3', category:'Wheels', name:'Rear wheel', spec:'Bontrager, black rim, red spoke nipples, 26"', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Appears true' },
  { id:'b3-wheels-003', bikeId:'b3', category:'Wheels', name:'Front tire', spec:'Schwalbe knobby MTB, 26"', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Check sidewalls' },
  { id:'b3-wheels-004', bikeId:'b3', category:'Wheels', name:'Rear tire', spec:'Knobby MTB, 26"', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Check tread and sidewalls' },
  // Saddle
  { id:'b3-saddle-001', bikeId:'b3', category:'Saddle', name:'Saddle', spec:'Specialized, yellow', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Minimal wear' },
  { id:'b3-saddle-002', bikeId:'b3', category:'Saddle', name:'Seatpost', spec:'Black/silver alloy', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Functional' },
  // Accessories
  { id:'b3-acc-001', bikeId:'b3', category:'Accessories', name:'Bottle cage', spec:'Black, down tube', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Functional' },
];

export const PARTS_B4 = [
  // Frame & Structural
  { id:'b4-frame-001', bikeId:'b4', category:'Frame', name:'Frame', spec:'Giant OCR3, aluminum, blue/teal, XS', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Clean and intact' },
  { id:'b4-frame-002', bikeId:'b4', category:'Frame', name:'Fork', spec:'Aluminum (stock OCR3)', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm condition; check crown and dropouts' },
  { id:'b4-frame-003', bikeId:'b4', category:'Frame', name:'Bottom bracket', spec:'Threaded or press-fit (OCR3 era)', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm type and condition' },
  { id:'b4-frame-004', bikeId:'b4', category:'Frame', name:'Headset', spec:'Integrated or semi-integrated', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Check bearing play' },
  // Cockpit
  { id:'b4-cockpit-001', bikeId:'b4', category:'Cockpit', name:'Handlebars', spec:'Drop bars — stock, confirmed', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Check for bends or damage' },
  { id:'b4-cockpit-002', bikeId:'b4', category:'Cockpit', name:'Stem', spec:'Silver/chrome', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Present' },
  { id:'b4-cockpit-003', bikeId:'b4', category:'Cockpit', name:'Bar tape', spec:'Not clearly visible', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm condition; replace if worn' },
  { id:'b4-cockpit-004', bikeId:'b4', category:'Cockpit', name:'Shifters', spec:'Shimano Sora STI integrated (stock OCR3)', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm model and function' },
  // Brakes
  { id:'b4-brake-001', bikeId:'b4', category:'Brakes', name:'Brake calipers', spec:'Dual-pivot (stock OCR3) front and rear', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm front and rear; check pad wear' },
  { id:'b4-brake-002', bikeId:'b4', category:'Brakes', name:'Brake levers', spec:'Integrated with STI shifters', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm function' },
  { id:'b4-brake-003', bikeId:'b4', category:'Brakes', name:'Brake cables', spec:'Not visible', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Likely aged; inspect or replace' },
  { id:'b4-brake-004', bikeId:'b4', category:'Brakes', name:'Brake pads', spec:'Not visible', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Check wear' },
  // Drivetrain
  { id:'b4-drive-001', bikeId:'b4', category:'Drivetrain', name:'Crankset', spec:'Sugino-style triple, silver/polished alloy (stock)', conditionRaw:'⚠️ Fair', condition:'inspect', status:'installed', notes:'Surface oxidation; check for bending' },
  { id:'b4-drive-002', bikeId:'b4', category:'Drivetrain', name:'Chainrings', spec:'Triple, heavy wear/blackening', conditionRaw:'❌ Replace', condition:'replace', status:'installed', notes:'Shark-fin teeth likely' },
  { id:'b4-drive-003', bikeId:'b4', category:'Drivetrain', name:'Front derailleur', spec:'Shimano Sora (stock)', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Dirty; test shifting' },
  { id:'b4-drive-004', bikeId:'b4', category:'Drivetrain', name:'Rear derailleur', spec:'Shimano Sora (stock)', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm presence and function' },
  { id:'b4-drive-005', bikeId:'b4', category:'Drivetrain', name:'Chain', spec:'Present, dirty', conditionRaw:'❌ Replace', condition:'replace', status:'installed', notes:'Stretched and contaminated' },
  { id:'b4-drive-006', bikeId:'b4', category:'Drivetrain', name:'Rear cassette', spec:'Not visible', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Likely replace with chain' },
  { id:'b4-drive-007', bikeId:'b4', category:'Drivetrain', name:'Pedals', spec:'SPD-style clip-in, black', conditionRaw:'❌ Replace', condition:'replace', status:'installed', notes:'Heavily worn, likely seized bearings' },
  // Wheels & Tires
  { id:'b4-wheels-001', bikeId:'b4', category:'Wheels', name:'Front wheel', spec:'Silver spoked, 700c road', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm trueness' },
  { id:'b4-wheels-002', bikeId:'b4', category:'Wheels', name:'Rear wheel', spec:'Silver spoked, 700c road', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Confirm trueness' },
  { id:'b4-wheels-003', bikeId:'b4', category:'Wheels', name:'Tires', spec:'Road style', conditionRaw:'⚠️ Inspect', condition:'inspect', status:'installed', notes:'Check for wear and cracking' },
  { id:'b4-wheels-004', bikeId:'b4', category:'Wheels', name:'Tubes', spec:'Unknown valve type', conditionRaw:'⚠️ Unknown', condition:'inspect', status:'installed', notes:'Confirm Presta or Schrader valves' },
  // Saddle
  { id:'b4-saddle-001', bikeId:'b4', category:'Saddle', name:'Saddle', spec:'WTB branded, black', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Clean, visible in photo' },
  { id:'b4-saddle-002', bikeId:'b4', category:'Saddle', name:'Seatpost', spec:'Silver/chrome', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Present and straight' },
  // Accessories
  { id:'b4-acc-001', bikeId:'b4', category:'Accessories', name:'Front rack', spec:'Metal rack, installed (non-stock)', conditionRaw:'✅ Good', condition:'good', status:'installed', notes:'Non-stock addition; functional' },
];
