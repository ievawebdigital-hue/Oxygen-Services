export interface ProblemItem {
  id: string;
  title: string;
  symptom: string;
  icon: string;
  urgency: 'High' | 'Medium' | 'Critical';
  probableCauses: string[];
  immediateSteps: string[];
  recommendedAction: string;
}

export const COMMON_PROBLEMS: ProblemItem[] = [
  {
    id: 'low-purity',
    title: 'Low Oxygen Output / Purity',
    symptom: 'Machine runs but oxygen concentration is low (<85%), yellow light is on, or patient feels insufficient flow.',
    icon: 'Percent',
    urgency: 'High',
    probableCauses: [
      'Molecular sieve bed Zeolite granules degraded or saturated with ambient humidity',
      'Internal compressor pressure drop (worn piston cups/gaskets)',
      'Intake HEPA or fine particle filter clogged, restricting airflow',
      '4-way pilot cycle valve stuck or timing desynchronized'
    ],
    immediateSteps: [
      'Switch patient to prescribed backup oxygen cylinder immediately',
      'Do not attempt to wash internal filters yourself',
      'Check if cabinet air filter on the back is free of visible dust'
    ],
    recommendedAction: 'Requires digital purity bench testing, sieve bed repacking or column replacement, and pressure calibration.'
  },
  {
    id: 'alarm-beeping',
    title: 'Continuous Alarm / Error Code',
    symptom: 'Continuous beeping, loud buzzer, or error code flashing on the digital display.',
    icon: 'AlertTriangle',
    urgency: 'High',
    probableCauses: [
      'Low oxygen concentration threshold triggered (<82% purity)',
      'System pressure abnormality (over-pressure or low pressure error)',
      'Power interruption / main capacitor failure',
      'Operating temperature safety thermal sensor tripped'
    ],
    immediateSteps: [
      'Note the exact error code or beep pattern (e.g. 3 beeps, flashing red LED)',
      'Turn off the unit and disconnect from mains for 5 minutes',
      'Switch to backup oxygen supply if patient is using the device'
    ],
    recommendedAction: 'Professional diagnostic inspection of pressure sensors, safety switches, and control board circuitry.'
  },
  {
    id: 'not-turning-on',
    title: 'Machine Not Turning On',
    symptom: 'Completely dead, no LED lights, no buzzer sound, or trips the household electrical circuit breaker (MCB).',
    icon: 'PowerOff',
    urgency: 'High',
    probableCauses: [
      'Main power switch or fuse blown on rear panel',
      'Internal transformer or switched-mode power supply failure',
      'Compressor motor short-circuit or locked rotor drawing excess current',
      'Damaged AC power cord or faulty socket connection'
    ],
    immediateSteps: [
      'Check the power socket with another appliance (e.g. table lamp)',
      'Check the push-to-reset circuit breaker button on the back of the machine',
      'Do not repeatedly switch on if it trips your home MCB'
    ],
    recommendedAction: 'Bench electrical safety testing, motor winding resistance check, and power board repair.'
  },
  {
    id: 'unusual-noise',
    title: 'Unusual Loud Noise or Vibration',
    symptom: 'Knocking, grinding, loud rattling, or sudden metallic noise from the compressor.',
    icon: 'Volume2',
    urgency: 'Medium',
    probableCauses: [
      'Compressor suspension dampening spring detached or damaged',
      'Piston connecting rod bearing wear or cylinder scoring',
      'Internal cooling fan blade clipping internal wiring or duct',
      'High-pressure exhaust muffler cracked or dislodged'
    ],
    immediateSteps: [
      'Ensure the machine is standing on a level, solid floor (not thick rugs or mattresses)',
      'Maintain at least 6–12 inches clearance from walls for airflow',
      'If metallic grinding is heard, power down to avoid catastrophic compressor failure'
    ],
    recommendedAction: 'Internal acoustic inspection, motor mount replacement, and compressor bearing rebuild.'
  },
  {
    id: 'overheating-shutdown',
    title: 'Overheating & Sudden Auto-Shutdown',
    symptom: 'Device runs for 15–45 minutes, becomes excessively hot, and shuts off automatically.',
    icon: 'Flame',
    urgency: 'High',
    probableCauses: [
      'Internal cooling blower or fan stopped rotating',
      'Air intake and exhaust vents severely blocked by lint or dust',
      'Compressor motor drawing high amperage due to friction',
      'Ambient room temperature too high without ventilation'
    ],
    immediateSteps: [
      'Move machine to a well-ventilated, cooler room',
      'Inspect exterior intake grilles for pet hair, dust blankets, or lint',
      'Allow unit to cool for 30 minutes before testing'
    ],
    recommendedAction: 'Cooling system replacement, internal duct cleaning, and thermal cutoff sensor verification.'
  },
  {
    id: 'poor-airflow',
    title: 'Weak Airflow / Flowmeter Dropping',
    symptom: 'Flowmeter ball drops to zero or cannot reach set LPM, oxygen flow feels weak at cannula.',
    icon: 'Wind',
    urgency: 'Medium',
    probableCauses: [
      'Flowmeter needle valve clogged or leaking internally',
      'Humidifier bottle cap cross-threaded or pressure relief valve open',
      'Internal silicon tubing kinked, cracked, or disconnected',
      'Final bacterial filtration cartridge blocked'
    ],
    immediateSteps: [
      'Disconnect nasal cannula and check if air flows directly from humidifier outlet',
      'Remove humidifier bottle temporarily to check if flow returns directly from nozzle',
      'Ensure tubing is not pinched under wheels or furniture'
    ],
    recommendedAction: 'Flowmeter calibration, pneumatic leak test, and bacterial filter replacement.'
  },
  {
    id: 'battery-poc-issue',
    title: 'Portable (POC) Battery / Charging Failure',
    symptom: 'Portable oxygen concentrator not charging, drains in minutes, or display says "Battery Error".',
    icon: 'Battery',
    urgency: 'Medium',
    probableCauses: [
      'Battery cells depleted beyond minimum threshold voltage',
      'Charging pin / DC jack solder joint loose or oxidized',
      'Internal Battery Management System (BMS) lock state',
      'External AC/DC power brick supplying unstable voltage'
    ],
    immediateSteps: [
      'Inspect power adapter brick LED to see if it remains solid green/blue',
      'Clean gold contact pins on battery and machine with dry microfibre cloth',
      'Try charging with DC vehicle adapter if available'
    ],
    recommendedAction: 'Battery analyzer load cycle testing, DC input port rework, or battery pack replacement.'
  },
  {
    id: 'filter-maintenance',
    title: 'Filter Warning / Periodic Service Due',
    symptom: 'Maintenance light is flashing or the machine has completed 3,000–5,000 operating hours.',
    icon: 'Clock',
    urgency: 'Medium',
    probableCauses: [
      'Internal runtime counter has reached recommended preventive service interval',
      'Intake HEPA filter saturated with airborne particulate',
      'Internal dust accumulation affecting cooling efficiency'
    ],
    immediateSteps: [
      'Check hour meter reading on front/side of the machine',
      'Wash external black sponge pre-filter with mild soap and dry completely before reinserting',
      'Schedule a full diagnostic service to prevent sudden failures'
    ],
    recommendedAction: 'Comprehensive preventive maintenance: HEPA replacement, bacteria filter replacement, purity check, and system recalibration.'
  }
];
