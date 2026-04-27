/* js/data/tools.js — seeded from raw/tools.md
   onHand: true = confirmed in bike house photos
   onHand: false = needed / not confirmed on hand  */

export const TOOLS = [
  // Work Support
  { id:'tool-001', type:'Work Support', name:'Tripod repair stand', partNum:null, onHand:true, appliesTo:'All bikes', notes:'Confirmed in bike house photo; folding tripod style' },
  { id:'tool-002', type:'Work Support', name:'Vevor 6L ultrasonic cleaner', partNum:null, onHand:true, appliesTo:'All bikes', notes:'Confirmed in bike house photo; see usage guide in tools.md §19' },
  { id:'tool-003', type:'Work Support', name:'Wheel truing stand', partNum:'Park Tool TS-2.2', onHand:false, appliesTo:'All bikes', notes:'Not confirmed on hand' },
  { id:'tool-004', type:'Work Support', name:'Workbench vise', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Optional; useful for stubborn BBs and headsets' },
  // Measuring & Inspection
  { id:'tool-005', type:'Measuring', name:'Chain wear indicator', partNum:'Park Tool CC-4', onHand:false, appliesTo:'All bikes', notes:'Replace chain at 0.75% wear — HIGH priority' },
  { id:'tool-006', type:'Measuring', name:'Digital calipers', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Rotor thickness, pad wear, tube diameter' },
  { id:'tool-007', type:'Measuring', name:'Spoke tension meter', partNum:'Park Tool TM-1', onHand:false, appliesTo:'All bikes', notes:'Wheel building and truing' },
  { id:'tool-008', type:'Measuring', name:'Torque wrench 2–14 Nm', partNum:'Park Tool TW-5.2', onHand:false, appliesTo:'All bikes', notes:'Stems, brake calipers, rotor bolts, derailleur bolts' },
  { id:'tool-009', type:'Measuring', name:'Torque wrench 10–60 Nm', partNum:'Park Tool TW-6.2', onHand:false, appliesTo:'All bikes', notes:'Crank bolts, BB cups, pedals, axle hardware' },
  { id:'tool-010', type:'Measuring', name:'Suspension pump (high-pressure)', partNum:'Park Tool INF-1', onHand:false, appliesTo:'B3, B5', notes:'RockShox Judy and Deluxe Select; never use floor pump — MEDIUM priority' },
  { id:'tool-011', type:'Measuring', name:'Floor pump with gauge', partNum:'WrenchForce', onHand:true, appliesTo:'All bikes', notes:'Confirmed in garage photo; check gauge accuracy' },
  { id:'tool-012', type:'Measuring', name:'Compact travel pump', partNum:'DeWalt portable', onHand:true, appliesTo:'All bikes', notes:'Confirmed in Concord e-bike photo; confirm battery charged' },
  // Hex Keys
  { id:'tool-013', type:'Hex Keys', name:'Hex key set 2–10 mm', partNum:'Park Tool AWS-10', onHand:false, appliesTo:'All bikes', notes:'None confirmed on hand — HIGH priority purchase' },
  { id:'tool-014', type:'Hex Keys', name:'T-handle hex set', partNum:'Park Tool THH-1', onHand:false, appliesTo:'All bikes', notes:'Extra leverage for stuck bolts' },
  // Torx Keys
  { id:'tool-015', type:'Torx Keys', name:'Torx key set T8–T40', partNum:null, onHand:false, appliesTo:'B2, B3, B5', notes:'T10, T25, T30 most needed; recommend full folding set' },
  // Screwdrivers
  { id:'tool-016', type:'Screwdrivers', name:'Phillips #1 screwdriver', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Small screws, cable housings' },
  { id:'tool-017', type:'Screwdrivers', name:'Phillips #2 screwdriver', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Derailleur limit screws, brake pad hardware' },
  { id:'tool-018', type:'Screwdrivers', name:'Flat blade screwdriver (small)', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Derailleur limit screws, cable routing clips' },
  { id:'tool-019', type:'Screwdrivers', name:'Flat blade screwdriver (medium)', partNum:null, onHand:false, appliesTo:'B6', notes:'E-bike display, battery housing screws' },
  // Wrenches
  { id:'tool-020', type:'Wrenches', name:'Cone wrench 13/14 mm', partNum:'Park Tool HCW-7', onHand:false, appliesTo:'B1, B4', notes:'Front hub cones — LeMond, OCR3' },
  { id:'tool-021', type:'Wrenches', name:'Cone wrench 15/16 mm', partNum:'Park Tool HCW-11', onHand:false, appliesTo:'B1, B4', notes:'Rear hub cones' },
  { id:'tool-022', type:'Wrenches', name:'Cone wrench 17 mm', partNum:'Park Tool HCW-9', onHand:false, appliesTo:'B1, B4', notes:'Larger rear hub cones' },
  { id:'tool-023', type:'Wrenches', name:'Pedal wrench 15 mm', partNum:'Park Tool PW-3', onHand:false, appliesTo:'All bikes', notes:'Longer handle for leverage' },
  { id:'tool-024', type:'Wrenches', name:'Socket set with ratchet', partNum:null, onHand:true, appliesTo:'All bikes', notes:'Confirmed on bench — 3/8" drive, metric and standard; 15mm socket confirmed for suspension' },
  { id:'tool-025', type:'Wrenches', name:'Adjustable wrench', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Backup for axle nuts' },
  { id:'tool-026', type:'Wrenches', name:'Box wrench set 8–17 mm', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Various axle nuts and hardware' },
  // Chain Tools
  { id:'tool-027', type:'Chain Tools', name:'Chain tool', partNum:'Park Tool CT-3.2', onHand:false, appliesTo:'All bikes', notes:'Universal 6–12 speed — HIGH priority (OCR3 and Stumpjumper chain replacements)' },
  { id:'tool-028', type:'Chain Tools', name:'Chain whip', partNum:'Park Tool SR-11', onHand:false, appliesTo:'All bikes', notes:'Holds cassette during removal' },
  { id:'tool-029', type:'Chain Tools', name:'Master link pliers', partNum:'Park Tool MLP-1.2', onHand:false, appliesTo:'B3, B4, B5', notes:'SRAM and KMC master link removal' },
  // BB Tools
  { id:'tool-030', type:'BB Tools', name:'Shimano cartridge BB tool', partNum:'Park Tool BBT-32', onHand:false, appliesTo:'B1, B4', notes:'For BB-UN300 install on LeMond — HIGH priority (BB on hand waiting)' },
  { id:'tool-031', type:'BB Tools', name:'External cup BB tool', partNum:'Park Tool BBT-9', onHand:false, appliesTo:'B3', notes:'SRAM GXP external cup — Stumpjumper' },
  { id:'tool-032', type:'BB Tools', name:'BB facing set', partNum:'Park Tool BFS-1', onHand:false, appliesTo:'B1', notes:'Optional; recommended for older steel frames' },
  { id:'tool-033', type:'BB Tools', name:'Press-fit BB tool', partNum:'Park Tool BBP-1', onHand:false, appliesTo:'B2', notes:'Trek Domane — confirm BB type first' },
  // Crank Tools
  { id:'tool-034', type:'Crank Tools', name:'Crank puller (square taper)', partNum:'Park Tool CCP-22', onHand:false, appliesTo:'B1, B4', notes:'Shimano Tiagra/square taper — LeMond, OCR3 — HIGH priority' },
  { id:'tool-035', type:'Crank Tools', name:'External crank puller', partNum:'Park Tool CCP-44', onHand:false, appliesTo:'B3', notes:'SRAM/Truvativ GXP — Stumpjumper' },
  { id:'tool-036', type:'Crank Tools', name:'Chainring bolt tool', partNum:'Park Tool CNW-2', onHand:false, appliesTo:'B1, B3, B4', notes:'Triple chainring bolt removal and install' },
  // Cassette Tools
  { id:'tool-037', type:'Cassette Tools', name:'Cassette lockring tool', partNum:'Park Tool BBT-9', onHand:false, appliesTo:'B2, B3, B4', notes:'Shimano/SRAM HG spline — MEDIUM priority' },
  { id:'tool-038', type:'Cassette Tools', name:'Freewheel remover', partNum:'Park Tool FR-5.2G', onHand:false, appliesTo:'B1', notes:'LeMond — confirm freewheel vs cassette first' },
  { id:'tool-039', type:'Cassette Tools', name:'SRAM XD cassette tool', partNum:'SRAM TL-XD', onHand:false, appliesTo:'B5', notes:'Eagle 12-speed XD driver — MEDIUM priority' },
  // Headset Tools
  { id:'tool-040', type:'Headset Tools', name:'Headset press', partNum:'Park Tool HHP-2', onHand:false, appliesTo:'B1', notes:'Pressing cups into LeMond steel frame' },
  { id:'tool-041', type:'Headset Tools', name:'Headset cup remover', partNum:'Park Tool RT-1', onHand:false, appliesTo:'B1', notes:'Removing old cups' },
  { id:'tool-042', type:'Headset Tools', name:'Crown race setter', partNum:'Park Tool CRS-1', onHand:false, appliesTo:'B1', notes:'Setting crown race onto fork steerer' },
  // Brake Tools — Rim
  { id:'tool-043', type:'Brake Tools', name:'Third-hand tool (cable clamp)', partNum:'Park Tool SW-40', onHand:false, appliesTo:'B1, B4', notes:'Holds cable tension during install' },
  { id:'tool-044', type:'Brake Tools', name:'Brake pad alignment tool', partNum:'Park Tool VAR', onHand:false, appliesTo:'B1, B4', notes:'Toe-in for dual-pivot rim brake pads' },
  // Brake Tools — Hydraulic Disc
  { id:'tool-045', type:'Brake Tools', name:'Shimano bleed kit', partNum:'TL-BT03-S', onHand:false, appliesTo:'B2', notes:'Trek Domane Tiagra — Shimano mineral oil ONLY — MEDIUM priority' },
  { id:'tool-046', type:'Brake Tools', name:'SRAM bleed kit', partNum:'TL-BRK-BLD', onHand:false, appliesTo:'B5', notes:'Rocky Mountain SRAM — DOT 5.1 ONLY — MEDIUM priority' },
  { id:'tool-047', type:'Brake Tools', name:'Disc caliper alignment tool', partNum:'Park Tool DCT-4', onHand:false, appliesTo:'B2, B3, B5, B6', notes:'Centering caliper over rotor — MEDIUM priority' },
  { id:'tool-048', type:'Brake Tools', name:'Rotor truing fork', partNum:'Park Tool DT-2', onHand:false, appliesTo:'B2, B3, B5, B6', notes:'Straightening lightly warped rotors' },
  { id:'tool-049', type:'Brake Tools', name:'Center-lock rotor tool', partNum:'Shimano TL-LR10', onHand:false, appliesTo:'B2', notes:'Trek Domane center-lock rotor' },
  { id:'tool-050', type:'Brake Tools', name:'Brake piston press', partNum:'Park Tool PP-1.2', onHand:false, appliesTo:'B2, B5', notes:'Retracting pistons for new pads' },
  { id:'tool-051', type:'Brake Tools', name:'Nitrile gloves', partNum:null, onHand:true, appliesTo:'B2, B5', notes:'Confirmed in shop — mandatory for brake fluid handling' },
  // Suspension Tools
  { id:'tool-052', type:'Suspension Tools', name:'Rubber mallet', partNum:null, onHand:false, appliesTo:'B3, B5', notes:'Tapping lower legs free during fork service' },
  { id:'tool-053', type:'Suspension Tools', name:'Seal pick / hook tool', partNum:'Park Tool DP-2', onHand:false, appliesTo:'B3, B5', notes:'Removing foam rings and wiper seals' },
  { id:'tool-054', type:'Suspension Tools', name:'Suspension vise / assembly stand', partNum:null, onHand:false, appliesTo:'B3, B5', notes:'Holding fork during lower leg service' },
  // Cable & Housing Tools
  { id:'tool-055', type:'Cable Tools', name:'Cable and housing cutter', partNum:'Park Tool CN-10', onHand:false, appliesTo:'B1, B3, B4, B7', notes:'Clean cuts on cables and housing — HIGH priority (LeMond rebuild)' },
  { id:'tool-056', type:'Cable Tools', name:'Internal cable routing kit', partNum:'Park Tool IR-1.2', onHand:false, appliesTo:'B5, B6', notes:'Dropper remote and e-bike wiring' },
  // Wheel & Spoke Tools
  { id:'tool-057', type:'Wheel Tools', name:'Spoke wrench set', partNum:'Park Tool SWR-6', onHand:false, appliesTo:'All bikes', notes:'Multi-size ratcheting — MEDIUM priority' },
  { id:'tool-058', type:'Wheel Tools', name:'Tire levers', partNum:'Park Tool TL-6.2', onHand:false, appliesTo:'All bikes', notes:'Plastic — avoid rim damage' },
  { id:'tool-059', type:'Wheel Tools', name:'Tubeless valve core tool', partNum:'Park Tool VC-1', onHand:false, appliesTo:'B3, B5', notes:'If running tubeless' },
  { id:'tool-060', type:'Wheel Tools', name:'Tubeless tire plug kit', partNum:'Dynaplug Micro Pro', onHand:false, appliesTo:'B3, B5', notes:'Trail-side puncture repair' },
  // E-Bike Tools
  { id:'tool-061', type:'E-Bike Tools', name:'Digital multimeter', partNum:null, onHand:false, appliesTo:'B6', notes:'Battery voltage and motor connections' },
  { id:'tool-062', type:'E-Bike Tools', name:'Battery contact cleaner', partNum:null, onHand:false, appliesTo:'B6', notes:'Cleaning terminal contacts' },
  // General Shop Tools
  { id:'tool-063', type:'General Shop', name:'Safety goggles', partNum:null, onHand:true, appliesTo:'All bikes', notes:'Confirmed in bench photo' },
  { id:'tool-064', type:'General Shop', name:'Needle-nose pliers', partNum:null, onHand:true, appliesTo:'All bikes', notes:'Confirmed on wall in bike house' },
  { id:'tool-065', type:'General Shop', name:'Blue fingerless cycling gloves', partNum:null, onHand:true, appliesTo:'All bikes', notes:'Confirmed on bench — mechanic/riding gloves' },
  { id:'tool-066', type:'General Shop', name:'Shop rags / microfibre cloths', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Stock up' },
  { id:'tool-067', type:'General Shop', name:'Zip ties (assorted)', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Cable management' },
  { id:'tool-068', type:'General Shop', name:'Permanent marker / paint pen', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Torque reference lines' },
  { id:'tool-069', type:'General Shop', name:'Bench mat or foam pad', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Protecting frame during work' },
  { id:'tool-070', type:'General Shop', name:'Magnetic parts tray', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Keeping small hardware organised' },
  { id:'tool-071', type:'General Shop', name:'Flashlight or headlamp', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Internal routing inspection' },
  { id:'tool-072', type:'General Shop', name:'Wire cutters', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Trimming zip ties, cable ends' },
  // Cleaning Tools
  { id:'tool-073', type:'Cleaning', name:'Chain scrubber', partNum:'Park Tool CM-5.3', onHand:false, appliesTo:'All bikes', notes:'On-bike cleaning between ultrasonic sessions — MEDIUM priority' },
  { id:'tool-074', type:'Cleaning', name:'Gear cleaning brush set', partNum:'Park Tool GSC-1', onHand:false, appliesTo:'All bikes', notes:'On-bike drivetrain cleaning' },
  { id:'tool-075', type:'Cleaning', name:'Frame cleaning brush set', partNum:'Park Tool BCB-4', onHand:false, appliesTo:'All bikes', notes:'Soft frame brush and detail brushes' },
  { id:'tool-076', type:'Cleaning', name:'Cog cleaning blade brush', partNum:'Park Tool CC-2', onHand:false, appliesTo:'All bikes', notes:'Between-cog cleaning' },
  { id:'tool-077', type:'Cleaning', name:'Disc rotor cleaning brush', partNum:null, onHand:false, appliesTo:'B2, B3, B5, B6', notes:'Dedicated — never share with drivetrain brushes' },
  { id:'tool-078', type:'Cleaning', name:'Suspension stanchion cloth', partNum:null, onHand:false, appliesTo:'B3, B5', notes:'Lint-free only; wipe after every ride' },
  { id:'tool-079', type:'Cleaning', name:'Buckets (×2)', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Wash and rinse' },
  { id:'tool-080', type:'Cleaning', name:'Low-pressure hose or spray bottle', partNum:null, onHand:false, appliesTo:'All bikes', notes:'Never use high-pressure near bearings' },
  // Reference Books
  { id:'tool-081', type:'Reference', name:'Zinn & the Art of Road Bike Maintenance', partNum:null, onHand:true, appliesTo:'B1, B2, B4', notes:'2 copies on bench shelf — essential for road bike service' },
  { id:'tool-082', type:'Reference', name:'Zinn & the Art of Mountain Bike Maintenance (4th ed.)', partNum:null, onHand:true, appliesTo:'B3, B5, B7', notes:'On bench shelf — essential for MTB service' },
  { id:'tool-083', type:'Reference', name:'Big Blue Book of Bicycle Repair', partNum:'Park Tool', onHand:true, appliesTo:'All bikes', notes:'On bench shelf — best all-around shop reference' },
  { id:'tool-084', type:'Reference', name:'Bicycle Repair Manual', partNum:null, onHand:true, appliesTo:'All bikes', notes:'On bench shelf' },
  { id:'tool-085', type:'Reference', name:'Chain/Drivetrain maintenance book', partNum:null, onHand:true, appliesTo:'All bikes', notes:'Partially visible — confirm title' },
];
