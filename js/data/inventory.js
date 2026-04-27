/* js/data/inventory.js — consumables, chemicals, and shop stock
   seeded from raw/tools.md §21-23 and raw/inventory.md §3-6
   onHand: true = confirmed in photos; false = needed/not confirmed  */

export const INVENTORY = [
  // Chain Lubricants
  { id:'inv-001', category:'Chain Lubricants', name:'Rock N Roll Gold', detail:'16 oz bottle', onHand:true, notes:'Confirmed in cabinet — excellent all-condition chain lube; primary for all bikes' },
  { id:'inv-002', category:'Chain Lubricants', name:'White Lightning Clean Ride Wax Lube', detail:'Bottle (partial)', onHand:true, notes:'Good for road bikes in dry conditions — B1, B2, B4' },
  { id:'inv-003', category:'Chain Lubricants', name:'Old chain lube (blue bottle)', detail:'Unknown brand', onHand:false, notes:'⚠️ DISCARD IMMEDIATELY — very old, do not use' },
  { id:'inv-004', category:'Chain Lubricants', name:'Dry lube (Finish Line Dry)', detail:'', onHand:false, notes:'Supplement to White Lightning for dry conditions — B1, B2, B4' },
  { id:'inv-005', category:'Chain Lubricants', name:'Wet lube (Finish Line Wet)', detail:'', onHand:false, notes:'MTB use in wet/muddy conditions — B3, B5' },
  // Greases
  { id:'inv-006', category:'Greases', name:'Polylube 1000', detail:'Park Tool PPL-1', onHand:false, notes:'Threaded BBs, headset cups, pedal threads, seatpost — HIGH priority' },
  { id:'inv-007', category:'Greases', name:'High-performance bearing grease', detail:'Park Tool HPG-1', onHand:false, notes:'Bearings, hubs, jockey wheels' },
  { id:'inv-008', category:'Greases', name:'Anti-seize (copper paste)', detail:'', onHand:false, notes:'Steel-to-alloy interfaces — B1, B2, B4' },
  { id:'inv-009', category:'Greases', name:'Carbon assembly paste', detail:'Park Tool SAC-2', onHand:false, notes:'Any carbon contact points — B2, B5' },
  { id:'inv-010', category:'Greases', name:'Waterproof / marine grease', detail:'', onHand:false, notes:'E-bike motor axle and connectors — B6' },
  // Suspension Fluids
  { id:'inv-011', category:'Suspension Fluids', name:'RockShox Judy Lower Leg Oil 15wt', detail:'', onHand:false, notes:'Lower leg service ~10ml per side — B3, B5 — MEDIUM priority' },
  { id:'inv-012', category:'Suspension Fluids', name:'RockShox Dynamic Seal Grease (Butter)', detail:'', onHand:false, notes:'Foam rings, seals, Deluxe Select air can — B3, B5 — MEDIUM priority' },
  { id:'inv-013', category:'Suspension Fluids', name:'RockShox Suspension Oil 2.5wt', detail:'', onHand:false, notes:'Deluxe Select air can service — B5' },
  { id:'inv-014', category:'Suspension Fluids', name:'Suspension foam ring lube', detail:'', onHand:false, notes:'Fork seal care between services — B3, B5' },
  // Brake Fluids
  { id:'inv-015', category:'Brake Fluids', name:'Shimano Mineral Oil', detail:'SM-DB-OIL', onHand:false, notes:'Trek Domane B2 — do NOT use DOT fluid — HIGH priority' },
  { id:'inv-016', category:'Brake Fluids', name:'SRAM DOT 5.1', detail:'', onHand:false, notes:'Rocky Mountain B5 — do NOT mix with mineral oil — HIGH priority' },
  // Degreasers & Cleaners
  { id:'inv-017', category:'Degreasers', name:'Finish Line Disc Brake Cleaner', detail:'12 oz aerosol', onHand:true, notes:'Confirmed in cabinet — rotors and pads B2, B3, B5, B6' },
  { id:'inv-018', category:'Degreasers', name:'WD-40', detail:'3 oz small can', onHand:true, notes:'Confirmed in cabinet — penetration and displacement ONLY, not a chain lube' },
  { id:'inv-019', category:'Degreasers', name:'Blaster Penetrating Oil', detail:'Aerosol', onHand:true, notes:'Confirmed in cabinet — frozen bolts and corroded threads' },
  { id:'inv-020', category:'Degreasers', name:'Isopropyl Alcohol 70% (Marquee, 16oz)', detail:'', onHand:true, notes:'⚠️ 70% NOT sufficient for disc rotor cleaning — 91%+ still required' },
  { id:'inv-021', category:'Degreasers', name:'C1 Ceramic Coating Spray', detail:'Aerosol', onHand:true, notes:'Confirmed in cabinet — frame and component protection B1, B2, B4' },
  { id:'inv-022', category:'Degreasers', name:'Isopropyl Alcohol 91%+', detail:'', onHand:false, notes:'Disc rotor and brake pad prep — mandatory for hydraulic disc bikes — HIGH priority' },
  { id:'inv-023', category:'Degreasers', name:'Bio degreaser (citrus)', detail:'', onHand:false, notes:'Chain, cassette, chainrings — all bikes' },
  { id:'inv-024', category:'Degreasers', name:'Bike wash / frame cleaner', detail:'', onHand:false, notes:'General wash — all bikes' },
  { id:'inv-025', category:'Degreasers', name:'Small orange jar (unknown)', detail:'Unknown contents', onHand:true, notes:'⚠️ Identify contents before use — label or dispose' },
  // Other Chemicals
  { id:'inv-026', category:'Other Chemicals', name:'Blue threadlocker (medium)', detail:'', onHand:false, notes:'Rotor bolts, derailleur hanger bolts — all bikes' },
  // Cables & Housing
  { id:'inv-027', category:'Cables & Housing', name:'Brake cable inners (road 1.5mm)', detail:'Shimano SUS stainless', onHand:false, notes:'B1, B4' },
  { id:'inv-028', category:'Cables & Housing', name:'Shift cable inners (road 1.2mm)', detail:'Shimano SUS stainless', onHand:false, notes:'B1, B4' },
  { id:'inv-029', category:'Cables & Housing', name:'Brake cable housing (5mm)', detail:'Black outer', onHand:true, notes:'Confirmed on wall with LeMond crankset — B1' },
  { id:'inv-030', category:'Cables & Housing', name:'Shift cable housing (4mm compressionless)', detail:'Black outer', onHand:true, notes:'Confirmed on wall with LeMond crankset — B1' },
  { id:'inv-031', category:'Cables & Housing', name:'Cable end caps and ferrules', detail:'Aluminium, assorted bag', onHand:false, notes:'B1, B3, B4' },
  // Master Links
  { id:'inv-032', category:'Master Links', name:'Master links 9/10-speed', detail:'KMC CL-10 or SRAM PowerLock', onHand:false, notes:'B1, B4' },
  { id:'inv-033', category:'Master Links', name:'Master links 11-speed', detail:'KMC CL-11 or SRAM PowerLock', onHand:false, notes:'B2' },
  { id:'inv-034', category:'Master Links', name:'Master links 12-speed', detail:'SRAM PowerLock 12sp — single use', onHand:false, notes:'B5' },
  // Tires & Tubes
  { id:'inv-035', category:'Tires & Tubes', name:'Rim tape 700c', detail:'', onHand:false, notes:'Replace when removing tires — B1, B2, B4' },
  { id:'inv-036', category:'Tires & Tubes', name:'Tubeless tape 29"', detail:'', onHand:false, notes:'Confirm if Element A10 is tubeless — B5' },
  { id:'inv-037', category:'Tires & Tubes', name:'Tire patch kit', detail:'Xtra Seal Combination Repair Units', onHand:true, notes:'Confirmed on bench — all bikes' },
  // Consumables
  { id:'inv-038', category:'Consumables', name:'Nitrile gloves (box)', detail:'', onHand:true, notes:'Confirmed in shop' },
  { id:'inv-039', category:'Consumables', name:'Shop towels / blue roll', detail:'', onHand:false, notes:'Stock up' },
  { id:'inv-040', category:'Consumables', name:'Zip ties (assorted)', detail:'', onHand:false, notes:'Cable management' },
  // Components (new/boxed — assigned)
  { id:'inv-041', category:'Components', name:'Deity Deftrap flat pedals', detail:'New in box', onHand:true, notes:'Assigned B5 Rocky Mountain — on cabinet shelf, ready to install' },
  { id:'inv-042', category:'Components', name:'Bontrager GOtime wireless computer', detail:'New in box', onHand:true, notes:'Assigned B1 LeMond — confirm mount compatibility with drop bars' },
  { id:'inv-043', category:'Components', name:'Wellgo road cleats (Shimano SPD-SL compatible)', detail:'New in package, red', onHand:true, notes:'Assigned B1 LeMond — match to road pedals' },
  { id:'inv-044', category:'Components', name:'Profile Design bar tape (×2 packs)', detail:'Black', onHand:true, notes:'One for B1 LeMond; second pack is general stock' },
  // Unassigned stock
  { id:'inv-045', category:'Components', name:'Shimano BB-UN300 (×2 units)', detail:'Threaded square taper', onHand:true, notes:'On cabinet shelf — one for B1, possibly one for B4; confirm correct spindle length before install' },
  { id:'inv-046', category:'Components', name:'RAM Mounts X-Grip device mount', detail:'Phone/device bar mount', onHand:true, notes:'On upper cabinet shelf — confirm bar diameter compatibility' },
  { id:'inv-047', category:'Components', name:'Bagged hardware (green rubber band)', detail:'Unknown — needs sorting', onHand:true, notes:'On upper cabinet shelf — sort; likely cables, bolts, or small parts' },
];
