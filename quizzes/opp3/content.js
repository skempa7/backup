// ============================================================
//  OPP III — REMEDIATION (tested-only) · COM5125 Written Final S26
//  Restructured from the real ExamSoft report: only the learning objectives that
//  appeared on the final are kept; the 13 you missed are flagged + ordered first.
//  Source: KPClaude Preclaude banks (answer keys verified) + the docs' TQ flags.
// ============================================================

const QUIZ_CONFIG = { id: "opp3_remediation", title: "OPP III — Remediation", emoji: "🦴" };

// Exam-tested objectives (green TQ) — lec -> LO -> [{t:topic,e:Final}]
const TESTED = {
 "1": {
  "1": [
   {
    "t": "Axonotmesis spares the connective-tissue sheath → Wallerian degeneration then regrowth",
    "e": "Final"
   },
   {
    "t": "Three injury grades by severity (neuropraxia / axonotmesis / neurotmesis)",
    "e": "Final"
   },
   {
    "t": "Carpal tunnel spares thenar sensation (palmar cutaneous branch leaves before the retinaculum); pronator teres does not",
    "e": "Final"
   },
   {
    "t": "Thenar pad is the median-localization key: spared = wrist, numb = proximal",
    "e": "Final"
   },
   {
    "t": "Flick sign is the most specific finding for carpal tunnel",
    "e": "Final"
   },
   {
    "t": "AIN syndrome is pure motor → cannot make an “O” sign, no sensory loss",
    "e": "Final"
   },
   {
    "t": "Median = most common UE entrapment",
    "e": "Final"
   },
   {
    "t": "Common peroneal at the fibular head = most common LE mononeuropathy",
    "e": "Final"
   },
   {
    "t": "Deep peroneal = dorsiflexion + first web space; superficial = eversion + dorsum",
    "e": "Final"
   },
   {
    "t": "Common peroneal lesion causes foot drop",
    "e": "Final"
   },
   {
    "t": "Foot drop at initial evaluation = poor prognosis (motor already involved)",
    "e": "Final"
   },
   {
    "t": "A sciatic lesion can also cause foot drop — localize by associated signs",
    "e": "Final"
   },
   {
    "t": "Piriformis vs hamstring discriminators (immediate-on-sitting + resisted knee flexion at 90° + ischial tenderness = hamstring)",
    "e": "Final"
   },
   {
    "t": "Meralgia paresthetica = LFCN under the inguinal ligament; sensory only, normal EMG",
    "e": "Final"
   },
   {
    "t": "NCS/EMG is the most effective test to confirm and grade; treat empirically in a hypersensitive patient",
    "e": "Final"
   }
  ]
 },
 "2": {
  "1.1": [
   {
    "t": "Attachment classification: true/vertebrosternal 1–7, false/vertebrochondral 8–10, floating/vertebral 11–12",
    "e": "Final"
   },
   {
    "t": "Atypical ribs = 1, 2, 10, 11, 12 (the “1s and 2s”)",
    "e": "Final"
   },
   {
    "t": "Rib 10 articulates with T10 only — one vertebra",
    "e": "Final"
   },
   {
    "t": "Rib 8 is false by attachment but typical by shape — two independent axes",
    "e": "Final"
   }
  ],
  "1.2": [
   {
    "t": "Sympathetic chain ganglia lie anterior to the rib heads in shared fascia",
    "e": "Final"
   },
   {
    "t": "Restricted rib motion raises sympathetic tone; rib-raising frees the fascia (rationale)",
    "e": "Final"
   },
   {
    "t": "Rib motion drives venous and lymphatic return against gravity (third rib-cage function)",
    "e": "Final"
   }
  ],
  "1.3": [
   {
    "t": "Diaphragm generates ~60% of inspiratory pressure change (primary muscle)",
    "e": "Final"
   },
   {
    "t": "Accessory muscles fire only in forced breathing; forced in = neck/shoulders, forced out = abdominal core",
    "e": "Final"
   },
   {
    "t": "Anterior + middle scalenes attach to rib 1; posterior scalene to rib 2 (reused in Ribs II ME map)",
    "e": "Final"
   }
  ],
  "1.4": [
   {
    "t": "Pump-handle ribs 2–5 increase AP diameter; bucket-handle ribs 6–10 increase transverse diameter",
    "e": "Final"
   },
   {
    "t": "Caliper motion (ribs 11–12) exists because they lack a costotransverse joint → both diameters slightly",
    "e": "Final"
   },
   {
    "t": "Rib 1 ≈ 50% pump / 50% bucket motion",
    "e": "Final"
   }
  ],
  "1.5": [
   {
    "t": "A rib SD is named for the position of ease — find the restricted rib, name where it likes to go",
    "e": "Final"
   },
   {
    "t": "Palpate pump-handle ribs anteriorly (sternochondral junction); bucket-handle ribs at the mid-axillary line",
    "e": "Final"
   },
   {
    "t": "Pump-handle pain = sharp/pinprick at costosternal/costotransverse region; bucket-handle pain = deeper aching at the mid-axillary line",
    "e": "Final"
   }
  ]
 },
 "3": {
  "1": [
   {
    "t": "Diaphragm contracts/descends inferiorly on inhalation, relaxes on exhalation",
    "e": "Final"
   },
   {
    "t": "Pump-handle pain = sharp/pinprick at costosternal/costotransverse junctions",
    "e": "Final"
   },
   {
    "t": "Bucket-handle pain = deep, aching, regional at the mid-axillary line",
    "e": "Final"
   },
   {
    "t": "Pump rotates on transverse axis (AP diameter); bucket on AP axis (transverse diameter)",
    "e": "Final"
   },
   {
    "t": "Pain on inhalation = exhaled rib (refuses inhalation); pain on exhalation = inhaled rib",
    "e": "Final"
   },
   {
    "t": "Inhaled rib: space above narrows, space below widens; anterior inferior edge prominent in front",
    "e": "Final"
   },
   {
    "t": "Rib 1 is ~50/50 pump and bucket — assess for both",
    "e": "Final"
   },
   {
    "t": "Caliper ribs 11–12 couple to diaphragm: inhaled rib swings posteriorly and inferiorly",
    "e": "Final"
   },
   {
    "t": "Static prominence infers side of dominance but requires dynamic motion testing",
    "e": "Final"
   }
  ],
  "2": [
   {
    "t": "Naming order: side → rib number → where it lives (inhaled/exhaled) → predominant motion",
    "e": "Final"
   },
   {
    "t": "Name a rib SD for the position of ease, never the restricted direction",
    "e": "Final"
   },
   {
    "t": "Slot 3 (inhaled/exhaled) is the somatic dysfunction itself",
    "e": "Final"
   },
   {
    "t": "B.I.T.E. = Bottom for Inhaled, Top for Exhaled (group-treatment order)",
    "e": "Final"
   },
   {
    "t": "Wrong-end treatment of a group = mechanical brick wall",
    "e": "Final"
   },
   {
    "t": "Rib-dance ME muscles: rib 1 ant/mid scalene, rib 2 post scalene",
    "e": "Final"
   },
   {
    "t": "Rib-dance ME muscles: ribs 3–5 pec minor, 6–10 serratus anterior, 11–12 lat dorsi + QL",
    "e": "Final"
   },
   {
    "t": "Predominance by palpation site: parasternal → pump, mid-axillary → bucket",
    "e": "Final"
   }
  ],
  "3": [
   {
    "t": "Costochondritis = tender junction, no swelling",
    "e": "Final"
   },
   {
    "t": "Tietze syndrome = tender junction PLUS visible edema (swelling is the splitter)",
    "e": "Final"
   },
   {
    "t": "Cervical rib compresses the lower trunk of the brachial plexus → thoracic outlet syndrome",
    "e": "Final"
   },
   {
    "t": "Scapular repositioning test confirms scapular dyskinesis (treat stabilizers, not cuff)",
    "e": "Final"
   },
   {
    "t": "Rib fracture: distal cage compression localizes pain to the fracture site, not under the hand",
    "e": "Final"
   },
   {
    "t": "Shingles = deep burning dermatomal pain, one side, from DRG varicella reactivation",
    "e": "Final"
   },
   {
    "t": "Musculoskeletal is the most common cause of chest pain",
    "e": "Final"
   }
  ],
  "4": [
   {
    "t": "Scapular dyskinesis rehab = PT to strengthen and stretch the scapular stabilizer muscles",
    "e": "Final"
   }
  ]
 },
 "4": {
  "1": [
   {
    "t": "CRPS Type I = no confirmed nerve lesion (was RSD); Type II = confirmed peripheral nerve lesion (was causalgia) — the single most-marked fact",
    "e": "Final"
   },
   {
    "t": "Recognition triad: disproportionate, non-dermatomal, distal pain",
    "e": "Final"
   },
   {
    "t": "CRPS (regional, objective findings) vs fibromyalgia (widespread four-quadrant, no objective findings)",
    "e": "Final"
   },
   {
    "t": "Allodynia (non-painful stimulus) vs hyperalgesia (exaggerated pain from a painful stimulus)",
    "e": "Final"
   },
   {
    "t": "Type I vs II decided ONLY by a confirmed nerve lesion — not severity, not stage",
    "e": "Final"
   }
  ],
  "2": [
   {
    "t": "Fracture = most common precipitant (~42%), classically distal radius/Colles’",
    "e": "Final"
   },
   {
    "t": "Surgery ~12%, nerve entrapment ~7%, spontaneous ~5%",
    "e": "Final"
   },
   {
    "t": "Epidemiologic skew: female 3–4:1; adults UE-predominant, kids LE",
    "e": "Final"
   },
   {
    "t": "Annual incidence 5–26 per 100,000 per year",
    "e": "Final"
   }
  ],
  "3": [
   {
    "t": "Stage 3 = irreversible dystrophy/atrophy; burning pain is in ALL stages (the stage-3 tell is irreversibility)",
    "e": "Final"
   },
   {
    "t": "Central sensitization = NMDA-driven wind-up + receptive-field expansion + loss of GABA/glycine inhibition",
    "e": "Final"
   },
   {
    "t": "Ectopic activity = spontaneous Na-channel firing; ephaptic transmission = synapse-free electrical crosstalk to healthy fibers",
    "e": "Final"
   },
   {
    "t": "Livedo reticularis = lace-like purplish mottling of stage 3 (vasospasm → venous pooling)",
    "e": "Final"
   },
   {
    "t": "Reduced ROM = most common motor finding",
    "e": "Final"
   },
   {
    "t": "Pain perceived centrally in the somatosensory cortex (“the pain is in your head”)",
    "e": "Final"
   },
   {
    "t": "Four symptom domains: sensory, vasomotor, sudomotor, motor/trophic",
    "e": "Final"
   }
  ],
  "4": [
   {
    "t": "A negative sympathetic block does NOT rule out CRPS (positive confirmatory, negative not exclusionary — Spurling logic)",
    "e": "Final"
   },
   {
    "t": "OMT: HVLA with caution (osteoporosis); indirect techniques better tolerated",
    "e": "Final"
   },
   {
    "t": "Bone scan preferred over plain radiographs in stage 1",
    "e": "Final"
   },
   {
    "t": "CRPS is a clinical Budapest diagnosis — no confirmatory test; do not delay treatment for imaging",
    "e": "Final"
   },
   {
    "t": "Multi-agent pharmacotherapy + PT/OT + psychotherapy (throw the book)",
    "e": "Final"
   },
   {
    "t": "Ketamine (NMDA antagonist) for refractory CRPS",
    "e": "Final"
   },
   {
    "t": "Plain radiographs assess bone, not the autonomic nervous system",
    "e": "Final"
   }
  ]
 },
 "5": {
  "1": [
   {
    "t": "C1 has no spinous process and no body (dens “stolen” by C2)",
    "e": "Final"
   },
   {
    "t": "C2 carries the dens; first large palpable SP off the occiput",
    "e": "Final"
   },
   {
    "t": "Vertigo associated with C2 dysfunction (dural attachments)",
    "e": "Final"
   },
   {
    "t": "Diaphragm function via C3–C5 (“C3, 4, 5 keep the diaphragm alive”)",
    "e": "Final"
   },
   {
    "t": "Intrinsic = deep/near axis/precise; extrinsic = far/larger/power",
    "e": "Final"
   }
  ],
  "2": [
   {
    "t": "SCM: ipsilateral sidebend + contralateral rotation",
    "e": "Final"
   },
   {
    "t": "SCM shares CN XI (spinal accessory) with trapezius",
    "e": "Final"
   },
   {
    "t": "Scalenes: unilateral ipsilateral sidebend, bilateral flexion, accessory respiration (ant/mid → 1st rib, post → 2nd rib)",
    "e": "Final"
   },
   {
    "t": "Semispinalis pain presents as pain turning the OPPOSITE way",
    "e": "Final"
   },
   {
    "t": "Bilateral = flex/extend, unilateral = sidebend/rotate template",
    "e": "Final"
   }
  ],
  "3": [
   {
    "t": "Tight most-midline suboccipital (RCP minor) on OAD compression = cervicogenic headache via the myodural bridge",
    "e": "Final"
   },
   {
    "t": "Myodural bridge from RCP minor to intracranial dura (Spine Journal, 1997)",
    "e": "Final"
   },
   {
    "t": "Palpate/translate the articular pillars, NOT the transverse processes (tender, nerves exit)",
    "e": "Final"
   }
  ],
  "4": [
   {
    "t": "The cervical spine does NOT follow Fryette’s Principles 1 & 2",
    "e": "Final"
   },
   {
    "t": "OA = Opposite Always — sidebending & rotation opposite regardless of AP curve; primary motion flexion/extension",
    "e": "Final"
   },
   {
    "t": "AA = ~50% of cervical rotation; full flexion isolates it; diagnosis records rotation only",
    "e": "Final"
   },
   {
    "t": "C2–C7 same-side coupling; C2–C4 rotate more, C5–C7 sidebend more",
    "e": "Final"
   },
   {
    "t": "Push left → sidebend left; limited translation right = restricted left sidebending = lives in right sidebending",
    "e": "Final"
   },
   {
    "t": "3-part diagnosis: Type (N/F/E) + SR + direction of freedom (worked: C3 NSRRR; OA ESRRL)",
    "e": "Final"
   },
   {
    "t": "Cervical superior facets BUM (Backward, Upward, Medial) vs thoracic BUL",
    "e": "Final"
   }
  ]
 },
 "6": {
  "1": [
   {
    "t": "Most common disc herniation = C6–C7 → C7 nerve root (single most common cervical radiculopathy)",
    "e": "Final"
   },
   {
    "t": "Compressive (disc, spondylosis, stenosis) vs non-degenerative (tumor, infection, systemic) etiology buckets",
    "e": "Final"
   }
  ],
  "2": [
   {
    "t": "C5–T1 nerve-root chart (motor/reflex/sensation per root) — highest-yield figure to memorize",
    "e": "Final"
   },
   {
    "t": "C5: deltoid/biceps, biceps reflex, lateral arm",
    "e": "Final"
   },
   {
    "t": "C6: wrist extensors, brachioradialis reflex, thumb/index",
    "e": "Final"
   },
   {
    "t": "C7: finger extensors, triceps reflex, middle finger",
    "e": "Final"
   },
   {
    "t": "C8: finger flexors, no reliable reflex, ulnar 4th–5th digits",
    "e": "Final"
   },
   {
    "t": "T1: hand interossei (finger abduction), no reflex, medial arm",
    "e": "Final"
   },
   {
    "t": "DTR grade 4 = clonus = always abnormal; hyporeflexia = LMN/root, hyperreflexia/clonus = UMN",
    "e": "Final"
   },
   {
    "t": "Pain most intense proximally (neck); paresthesias distal; shooting/electrical, worse with Valsalva",
    "e": "Final"
   },
   {
    "t": "Cervical roots exit ABOVE the like-numbered vertebra through C7; C8 fills the gap below C7",
    "e": "Final"
   }
  ],
  "4": [
   {
    "t": "Spurling worsens (narrows foramen); distraction improves (opens foramen)",
    "e": "Final"
   },
   {
    "t": "Valsalva worsens symptoms with a herniation/mass",
    "e": "Final"
   }
  ]
 },
 "7": {
  "1": [
   {
    "t": "SNS to lungs = bronchodilation, then (over time) vasoconstriction + thickened secretions",
    "e": "Final"
   },
   {
    "t": "PNS/vagus = bronchoconstriction + thinned secretions",
    "e": "Final"
   },
   {
    "t": "Pulmonary sympathetics = T2–T7; parasympathetics = vagus (CN X)",
    "e": "Final"
   },
   {
    "t": "Treat OA / C2–C3 / cranial base to normalize vagal tone (vagus exits skull there)",
    "e": "Final"
   },
   {
    "t": "Chapman point treatment always decreases sympathetic tone to the viscera",
    "e": "Final"
   },
   {
    "t": "Same input, opposite value: SNS good acutely (bronchodilation), bad chronically (vasoconstriction)",
    "e": "Final"
   }
  ],
  "3": [
   {
    "t": "Hering-Breuer reflex = shallow half: airway afferents can't tell air from fluid → fluid-filled lung trips it → limited diaphragm excursion",
    "e": "Final"
   },
   {
    "t": "Carotid body = rapid half: senses hypoxia → drives respiratory rate up",
    "e": "Final"
   },
   {
    "t": "Diaphragm stress → lower six ribs + thoracolumbar junction; T1–T6 paraspinals show increased tone",
    "e": "Final"
   },
   {
    "t": "Phrenic nerve = C3-C4-C5 ('C3-4-5 keeps the diaphragm alive')",
    "e": "Final"
   }
  ],
  "4": [
   {
    "t": "FIRST lymphatic step is always open the thoracic inlet ('easy one on your level one')",
    "e": "Final"
   },
   {
    "t": "No pump techniques until afebrile (pumping while febrile drives cytokines/bacteria before antibiotics cut the load)",
    "e": "Final"
   },
   {
    "t": "Rib-raising >90 s decreases sympathetics (pneumonia); short burst stimulates them (acute asthma)",
    "e": "Final"
   },
   {
    "t": "MOPSE: OMT + antibiotics beat antibiotics alone on length of stay, IV-antibiotic duration, respiratory failure/ventilator, and mortality",
    "e": "Final"
   },
   {
    "t": "Atelectasis: TLP vs incentive spirometry → similar atelectasis rates, but TLP gives better PFTs + earlier recovery — use both",
    "e": "Final"
   }
  ]
 },
 "8": {
  "1": [
   {
    "t": "Cardiac sympathetics arise from T1-T6 (vs peripheral/renal T10-L2)",
    "e": "Final"
   },
   {
    "t": "Increased sympathetic tone increases rate, contractility, and cardiac output",
    "e": "Final"
   },
   {
    "t": "Right hypersympathetic activity drives SVTs (SA node)",
    "e": "Final"
   },
   {
    "t": "Left hypersympathetic activity drives ectopic foci / VF (AV node/ventricle)",
    "e": "Final"
   },
   {
    "t": "Sustained sympathetic tone causes coronary vasospasm (angina without fixed stenosis)",
    "e": "Final"
   },
   {
    "t": "Renal sympathetic stimulation causes water/salt retention and raises BP",
    "e": "Final"
   }
  ],
  "2": [
   {
    "t": "Cardiac parasympathetics travel via the vagus; increased tone lowers rate and contractility",
    "e": "Final"
   },
   {
    "t": "Right hyperparasympathetic activity produces sinus bradyarrhythmias (SA node)",
    "e": "Final"
   },
   {
    "t": "Left hyperparasympathetic activity produces AV blocks (AV node)",
    "e": "Final"
   },
   {
    "t": "Cervical myofascial release shifts sympathovagal balance toward parasympathetic",
    "e": "Final"
   }
  ],
  "3": [
   {
    "t": "Impaired lymphatic drainage reduces collateral circulation and causes congestion-driven arrhythmias",
    "e": "Final"
   },
   {
    "t": "Lymphatic dysfunction linked to atherosclerosis, HTN, and CHF edema",
    "e": "Final"
   }
  ],
  "4": [
   {
    "t": "ALL cardiac OMT is done AFTER emergent medical treatment and stabilization (adjunct, never substitute)",
    "e": "Final"
   },
   {
    "t": "Anterior MI = sympathicotonia T1-T6 (esp. T2-T3 left)",
    "e": "Final"
   },
   {
    "t": "Inferior wall MI = vagal hyperactivity (C2 / cranial base)",
    "e": "Final"
   },
   {
    "t": "HTN: posterior Chapman adrenal points lower BP and decrease serum aldosterone",
    "e": "Final"
   },
   {
    "t": "HTN: renal contribution reduced via sympathetic inhibition at T10-L2",
    "e": "Final"
   },
   {
    "t": "CHF lymphatic return challenged 3-40x; treat T1-T6 plus lymphatic pump/effleurage",
    "e": "Final"
   },
   {
    "t": "Right pectoralis major trigger point drives SVT (postural arrhythmia contributor)",
    "e": "Final"
   },
   {
    "t": "Post-CPR: treat ribs and sternum with indirect techniques",
    "e": "Final"
   }
  ]
 },
 "9": {
  "CU.1": [
   {
    "t": "Organ→cord-level viscerosomatic chart is the high-yield unit (\"KNOW CHART\")",
    "e": "Final"
   },
   {
    "t": "Kidneys T10–T11 and uterus/cervix T10–L2 (prior-student-highlighted rows)",
    "e": "Final"
   },
   {
    "t": "Hindgut/pelvic parasympathetics = pelvic splanchnics S2–S4; vagus stops at the splenic flexure",
    "e": "Final"
   },
   {
    "t": "Foregut T5–T9 / midgut T10–T11 / hindgut T12–L2 embryologic bands",
    "e": "Final"
   },
   {
    "t": "Appendix = T12; adrenals = T10; all GU = T10–L2",
    "e": "Final"
   }
  ],
  "CU.2": [
   {
    "t": "Standing flexion: PSIS that moves MORE = dysfunctional side",
    "e": "Final"
   },
   {
    "t": "ASIS compression test: less motion / more resistance marks the dysfunctional side",
    "e": "Final"
   },
   {
    "t": "ME levers: anterior→extensors, posterior→flexors, inflare→adductors, outflare→abductors",
    "e": "Final"
   },
   {
    "t": "Anterior innominate = ASIS inferior + PSIS superior; posterior = reverse",
    "e": "Final"
   },
   {
    "t": "Superior shear = ALL landmarks superior; inflare toward midline / outflare away",
    "e": "Final"
   }
  ],
  "CU.3": [
   {
    "t": "Three transverse axes — S1 respiratory, S2 postural, inferior iliosacral",
    "e": "Final"
   },
   {
    "t": "Base posterior on inhalation, base anterior on exhalation",
    "e": "Final"
   }
  ],
  "CU.4": [
   {
    "t": "Seated flexion test positive OPPOSITE the oblique axis",
    "e": "Final"
   },
   {
    "t": "Forward torsion = negative spring + sphinx more symmetrical; backward = positive spring + more asymmetrical",
    "e": "Final"
   },
   {
    "t": "Bilateral flexion = exhalation (deep sulci, posterior ILAs); bilateral extension = inhalation (shallow sulci, anterior ILAs)",
    "e": "Final"
   },
   {
    "t": "ILAs <1 thumb apart = torsion; >1 thumb apart = unilateral (\"E elevates, F falls\")",
    "e": "Final"
   },
   {
    "t": "L5 rotates opposite the sacrum; L5 sidebends toward the axis",
    "e": "Final"
   }
  ],
  "CU.5": [
   {
    "t": "Board-elimination rule: option E/F → SB+rotation SAME; option N → SB+rotation OPPOSITE; answer must name segments + N/E/F",
    "e": "Final"
   },
   {
    "t": "Law III: inducing motion in one plane restricts motion in the other two",
    "e": "Final"
   },
   {
    "t": "Type I neutral/opposite/group vs Type II non-neutral/same/single",
    "e": "Final"
   },
   {
    "t": "Name the SD for the direction of ease / freer motion, not the restriction",
    "e": "Final"
   }
  ],
  "CU.7": [
   {
    "t": "Won't improve without treating the KEY LESION (flexed L1/L2)",
    "e": "Final"
   },
   {
    "t": "Most-common misdiagnosis = lumbar radiculopathy; psoas → contralateral knee, radiculopathy → nerve distribution to foot",
    "e": "Final"
   },
   {
    "t": "Late-stage S-curve: L1/L2 Type II toward tight side, L3–L4 Type I opposite, pelvis shifts away, piriformis contralateral",
    "e": "Final"
   },
   {
    "t": "Psoas does NOT attach to L5; rehab is extension-biased with NO sit-ups",
    "e": "Final"
   }
  ]
 }
};

// Objectives you MISSED on the final (red badge, ordered first) — lec -> LO -> [topics]
const MISSED = {
 "1": {
  "1": [
   "Pronator teres syndrome",
   "Hamstring syndrome"
  ]
 },
 "3": {
  "3": [
   "Sick scapula syndrome"
  ],
  "1": [
   "Pump handle biomechanics"
  ]
 },
 "4": {
  "2": [
   "CRPS type differentiation (I vs II)"
  ]
 },
 "5": {
  "3": [
   "Counterstrain and segmental diagnosis"
  ]
 },
 "6": {
  "2": [
   "Myotome weakness"
  ]
 },
 "8": {
  "2": [
   "Parasympathetic — AV block"
  ]
 },
 "9": {
  "CU.1": [
   "Viscerosomatic reflex for the prostate",
   "Viscerosomatic reflex for sinuses"
  ],
  "CU.4": [
   "Sacral diagnosis",
   "Sacral diagnosis with lumbosacral spring test"
  ],
  "CU.5": [
   "Lumbosacral mechanics"
  ]
 }
};

// Flat list of the 13 missed topics — drives the remediation focus banner
const REMEDIATION = [
 {
  "lec": 1,
  "lo": "1",
  "topic": "Pronator teres syndrome",
  "title": "Entrapment Neuropathies"
 },
 {
  "lec": 1,
  "lo": "1",
  "topic": "Hamstring syndrome",
  "title": "Entrapment Neuropathies"
 },
 {
  "lec": 3,
  "lo": "3",
  "topic": "Sick scapula syndrome",
  "title": "Ribs II"
 },
 {
  "lec": 3,
  "lo": "1",
  "topic": "Pump handle biomechanics",
  "title": "Ribs II"
 },
 {
  "lec": 4,
  "lo": "2",
  "topic": "CRPS type differentiation (I vs II)",
  "title": "Complex Regional Pain Syndrome"
 },
 {
  "lec": 5,
  "lo": "3",
  "topic": "Counterstrain and segmental diagnosis",
  "title": "Cervical Spine I — Mechanics & Functional Anatomy"
 },
 {
  "lec": 6,
  "lo": "2",
  "topic": "Myotome weakness",
  "title": "Cervical Spine II — Cervical Radiculopathy"
 },
 {
  "lec": 8,
  "lo": "2",
  "topic": "Parasympathetic — AV block",
  "title": "The Osteopathic Approach to the Cardiac Patient"
 },
 {
  "lec": 9,
  "lo": "CU.1",
  "topic": "Viscerosomatic reflex for the prostate",
  "title": "Cumulative Review — OPP I / OPP II"
 },
 {
  "lec": 9,
  "lo": "CU.4",
  "topic": "Sacral diagnosis",
  "title": "Cumulative Review — OPP I / OPP II"
 },
 {
  "lec": 9,
  "lo": "CU.5",
  "topic": "Lumbosacral mechanics",
  "title": "Cumulative Review — OPP I / OPP II"
 },
 {
  "lec": 9,
  "lo": "CU.1",
  "topic": "Viscerosomatic reflex for sinuses",
  "title": "Cumulative Review — OPP I / OPP II"
 },
 {
  "lec": 9,
  "lo": "CU.4",
  "topic": "Sacral diagnosis with lumbosacral spring test",
  "title": "Cumulative Review — OPP I / OPP II"
 }
];

const IMAGES = {};

const SLIDES = {
 "1": {
  "dir": "1",
  "count": 44
 },
 "2": {
  "dir": "2",
  "count": 53
 },
 "3": {
  "dir": "3",
  "count": 40
 },
 "4": {
  "dir": "4",
  "count": 51
 },
 "5": {
  "dir": "5",
  "count": 53
 },
 "6": {
  "dir": "6",
  "count": 25
 },
 "7": {
  "dir": "7",
  "count": 39
 },
 "8": {
  "dir": "8",
  "count": 33
 }
};
const SLIDE_JUMPS = {};
const SLIDE_EMBED = {};
const FLASHCARDS = {};
const LECTURE_REFERENCES = {};

const LECTURE_CONTENT = {
 "1": {
  "prof": "Dr. Eldemire",
  "tldr": "Entrapment neuropathies = peripheral nerve compressed along its path; localize the lesion by which motor + sensory territory is lost, confirm and grade with EMG/NCS.",
  "mustKnows": [
   "Median = the most common UE entrapment. Carpal tunnel (at the flexor retinaculum) is the classic site, but median entrapment splits into proximal vs distal. The single highest-yield discriminator: carpal tunnel SPARES thenar sensation because the palmar cutaneous branch leaves before the retinaculum — a proximal pronator-teres lesion does NOT spare it.",
   "Three nerve-injury types, by severity. Neuropraxia = myelin only (mild, recovers). Axonotmesis = myelin + axon, sheath intact → Wallerian degeneration then regrowth (moderate). Neurotmesis = everything severed, NO regrowth (severe). The intact connective-tissue sheath is what allows axonotmesis to regenerate.",
   "AIN syndrome is pure motor. Anterior interosseous = a pure MOTOR median branch (FPL, FDP 2–3). Loss = inability to make a rounded “O” with thumb + index, with NO sensory complaints anywhere. The absent sensory loss is the tell that separates it from carpal tunnel/pronator teres.",
   "Common peroneal = the most common LE mononeuropathy. It wraps the fibular head superficially, so trauma or extrinsic compression (a too-high cast, posterior fibular-head dysfunction) causes FOOT DROP — loss of dorsiflexion — plus dorsal-foot numbness. Deep peroneal = dorsiflexion + first-web-space sensation; superficial peroneal = eversion + rest of the dorsum.",
   "Foot drop at first evaluation = poor prognosis. Whether from sciatic or common peroneal injury, foot drop present at the initial visit signals the lesion has progressed past sensory into motor (or is severe/acute) — baseline recovery is less likely. Always check for foot drop after hip surgery.",
   "Piriformis vs hamstring syndrome. Both irritate the sciatic nerve near the ischial region. Piriformis: pain WORSE after PROLONGED sitting, ER preference, positive FAIR test. Hamstring: prior injury, pain IMMEDIATELY on sitting, pain on resisted knee flexion at 90° hip flexion, ischial-tuberosity tenderness. “Immediately on sitting” is the hamstring tell.",
   "EMG/NCS is the most effective test — but not benign. NCS measures conduction speed; EMG needles the muscle. Together they confirm the entrapment, separate peripheral from central (radiculopathy), and grade severity. The needle can be painful, so in a hypersensitive patient it is reasonable to treat empirically and let response confirm. The LFCN (meralgia paresthetica) is the classic case with a NORMAL EMG — it is purely sensory."
  ],
  "los": [
   {
    "id": "1",
    "statement": "Identify the etiology & clinical presentation of 14 common entrapment neuropathies (UE + LE).",
    "blocks": [
     {
      "t": "p",
      "x": "This whole lecture is a survey of 14 peripheral nerves and what happens when each one gets pinched. Eldemire framed it around the brachial and lumbosacral plexuses, but the point he kept making is that we are not chasing roots here — root problems (radiculopathy, disc disease) belong to MSK and neurology. We are downstream, at the named peripheral branches, where a single nerve carries a defined motor and sensory territory. That is the master key for the entire deck: when a nerve is entrapped, you localize it by asking which muscles are weak and which patch of skin is numb, then you confirm and grade it with electrodiagnostics. Almost every nerve below is a mixed nerve, so an entrapment on the nerve trunk hits motor and sensory together."
     },
     {
      "t": "p",
      "x": "Entrapments follow the PERIPHERAL-nerve sensory map, not single-root dermatomes — that distinction (peripheral pattern vs dermatome) is how you keep an entrapment separate from a radiculopathy."
     },
     {
      "t": "p",
      "x": "THREE INJURY SEVERITIES. Before the nerves, learn the three grades of nerve injury, because they set prognosis. Neuropraxia is the mild one — only the myelin is bruised, and the nerve recovers. Axonotmesis is the moderate one — the myelin and the axon break down (that distal breakdown is Wallerian degeneration), but the surrounding connective-tissue sheath stays intact, so the axon can regrow along the preserved tube. Neurotmesis is the severe one — myelin, axon, and sheath are all disrupted, and there is no regrowth. The intact sheath is the whole reason axonotmesis can recover and neurotmesis cannot."
     },
     {
      "t": "cq",
      "x": "Neuropraxia = myelin only; axonotmesis = myelin + axon (Wallerian, regrows); neurotmesis = + connective tissue, no regrowth."
     },
     {
      "t": "p",
      "x": "HOW YOU TEST IT. Most of these can be diagnosed clinically — reproduce the symptoms by palpating or tapping over the entrapment site (a positive Tinel sign, which works at any nerve, not just the wrist). But the single most effective study is the nerve conduction study with EMG: NCS measures signal speed across the lesion, EMG samples the muscle with a needle, and together they confirm the entrapment, tell you whether it is peripheral or central, and grade severity and chronicity. The catch Eldemire stressed: the EMG needle is not a benign test — it hurts, especially in a hypersensitive patient — so it is reasonable to treat empirically and let a good response confirm the diagnosis. Ultrasound is the growing adjunct: it shows the compressive source (fluid, tendon, cyst), shows the nerve swollen distal and narrowed proximal to the entrapment, and allows a dynamic assessment with the patient moving."
     },
     {
      "t": "cq",
      "x": "Best test to confirm + grade an entrapment = NCS/EMG (distinguishes peripheral vs central, grades severity)."
     },
     {
      "t": "p",
      "x": "MEDIAN NERVE — the most common UE entrapment. Start here, because Eldemire flagged it twice as the one to know. The median nerve is mixed, but the testable piece is its sensation: the thenar eminence (thumb pad) plus the palmar surface of digits 1–3 and the radial half of digit 4. He told you the thenar-plus-fingers detail matters “and we’re going to discuss why” — the why is the localization trick below. Median entrapment is not automatically carpal tunnel; group it into proximal versus distal."
     },
     {
      "t": "p",
      "x": "PROXIMAL MEDIAN ENTRAPMENT. Three culprits, all above the wrist. Pronator teres syndrome (weightlifters, tennis/pickleball players — anyone with a hypertrophied pronator) entraps the median nerve under the muscle: numbness of digits 1–3 and the thenar pad, worse with pronation. The ligament of Struthers sits a little higher and looks just like pronator teres syndrome except there is weak pronation, because the entrapment is proximal to the branch that drives pronator teres. Anterior interosseous (AIN) syndrome is the odd one out: it is pure motor, so there is no sensory loss — the patient simply cannot flex the distal phalanges to make a rounded “O” with thumb and index."
     },
     {
      "t": "cq",
      "x": "AIN syndrome = pure motor → cannot make an “O” sign, no sensory loss."
     },
     {
      "t": "p",
      "x": "DISTAL MEDIAN ENTRAPMENT — carpal tunnel. The bread and butter. Entrapment under the flexor retinaculum gives the typical numbness of digits 1–3 — but the thenar pad is spared. Here is the why Eldemire promised: the palmar cutaneous branch that innervates the thenar skin shoots off before the flexor retinaculum, so a wrist-level lesion never touches it. That is the single highest-yield discriminator in this lecture — thenar numbness sends you proximal (pronator teres), thenar sparing keeps you at the wrist (carpal tunnel). Carpal tunnel is worse at night, and the most specific finding is the flick sign (the patient flicks the wrist on waking for relief). Eldemire was explicit that he does not expect you to know the other provocative tests (Phalen’s, reverse Phalen’s) for this exam — know the flick sign."
     },
     {
      "t": "p",
      "x": "Treatment localizes to the source: night splints (worse at night), OT/PT, and newer options — hydrodissection (a high-volume anesthetic-plus-fluid injection that opens a halo of space around the nerve) and the in-office thread release, with the traditional transverse carpal ligament release reserved for refractory cases. The teaching point: fix the right level, or a pickleball player “treated for carpal tunnel” keeps getting compressed proximally."
     },
     {
      "t": "p",
      "x": "SUPRASCAPULAR NERVE. A mixed nerve to supraspinatus (abduction) and infraspinatus (external rotation). Its innervation lets you localize the compression: at the suprascapular notch you lose both abduction and external rotation; more distally at the spinoglenoid notch you lose only external rotation, with abduction intact. Compression is from trauma, a cyst, or fracture."
     },
     {
      "t": "cq",
      "x": "Suprascapular compression: suprascapular notch = abduction + ER lost; spinoglenoid notch = ER only."
     },
     {
      "t": "p",
      "x": "AXILLARY NERVE. Runs the quadrilateral space against the surgical neck of the humerus, so its entrapment is overwhelmingly trauma-related — humeral fracture or anterior shoulder dislocation. It supplies the deltoid (abduction) and sensation over the lateral shoulder."
     },
     {
      "t": "p",
      "x": "MUSCULOCUTANEOUS NERVE. A rare one: it powers the arm flexors and gives sensation to the lateral forearm. It classically gets compressed by positioning under anesthesia — the patient wakes with lateral-forearm numbness, and removing the position fixes it."
     },
     {
      "t": "p",
      "x": "DORSAL SCAPULAR NERVE. Mostly motor (rhomboids, levator scapulae) with a little sensation to the medial scapular border. It can cause medial scapular-border pain and is a contributing cause of scapular winging — but remember the long thoracic nerve (serratus anterior) is the major contributor to winging."
     },
     {
      "t": "p",
      "x": "ULNAR NERVE. Mixed nerve to the intrinsic hand muscles plus sensation to digits 4–5 (palmar and dorsal). Two entrapment sites: the cubital tunnel at the elbow (the “funny bone,” aggravated by leaning on the elbow) and Guyon’s canal at the wrist. Learn the three exam signs: Froment sign (to pinch paper the patient flexes the thumb IP because adductor pollicis is weak), Wartenberg sign (the little finger drifts into abduction and won’t adduct), and claw hand (digits 4–5 clawed from unopposed long flexors). Ulnar entrapment responds poorly to injections and PT — management is behavioral/mechanical, with surgery for refractory cases."
     },
     {
      "t": "cq",
      "x": "Froment sign (thumb-IP flexion to pinch) + Wartenberg sign (abducted little finger) + claw hand = ulnar exam triad."
     },
     {
      "t": "p",
      "x": "RADIAL NERVE. Supplies the triceps, wrist/finger extensors, and sensation to the dorsal-lateral hand. The eponym is Saturday night palsy — compression in the spiral groove (a draped arm during intoxicated sleep, or an improperly fitting crutch in the axilla) producing wrist drop. Eldemire’s hook: drop the W from “wrist” → R and R → the Radial nerve does wrist dRop. Distinguish the posterior interosseous nerve (PIN), a pure-motor branch in the forearm: PIN entrapment gives finger drop without sensory loss and spares the ECRL, whereas a spiral-groove lesion adds dorsal-hand sensory loss."
     },
     {
      "t": "cq",
      "x": "Radial nerve → wrist dRop (“Saturday night palsy”, spiral groove); PIN entrapment = finger drop, no sensory loss."
     },
     {
      "t": "p",
      "x": "SUPERIOR CLUNEAL NERVE. Now the lower extremity. The superior cluneal nerve is purely sensory to the upper buttock; it rides over the iliac crest, where quadratus lumborum hypertonicity (often from prolonged sitting) compresses it. Hallmark: pain along the iliac crest radiating into the buttock. It is tougher to treat — injections or radiofrequency ablation, because the QL driver is hard to switch off."
     },
     {
      "t": "p",
      "x": "SCIATIC NERVE. A big mixed nerve to the posterior thigh, branching into the tibial and common peroneal nerves for the leg and foot. Compression is from direct trauma, muscle hypertrophy, surgery (hip replacement is the classic), or scar/bone-spur irritation. The high-yield warning Eldemire repeated: foot drop present at the initial evaluation is a sign of poor prognosis — it means the lesion has progressed past sensory into motor, or is acute and severe. Always check for foot drop after a hip operation. Because the sciatic carries the peroneal division, a sciatic lesion can also cause foot drop."
     },
     {
      "t": "p",
      "x": "SCIATIC DDx — piriformis vs hamstring syndrome. Two ways the sciatic nerve gets irritated near the buttock, and the distinction matters because the treatment and even the surgery differ. Piriformis syndrome entraps the nerve under the muscle: buttock pain that is worse after prolonged sitting, referral down the thigh, decreased internal rotation with an ER preference, and a positive FAIR test. Hamstring syndrome is different — it is the result of a prior hamstring injury (scar or calcification at the ischial origin) irritating the adjacent sciatic nerve; the triad is pain immediately on sitting (the sit-bones), pain on resisted knee flexion at 90° hip flexion, and ischial-tuberosity tenderness. Eldemire anchored this with a residency case: a patient set for piriformis-release surgery the following week sat down in his clinic and said “ow” the instant she made contact — pain immediately on sitting. He treated her for hamstring syndrome, gave her a cushion, and she cancelled the surgery. The lesson he wanted you to keep: make sure you have the right diagnosis."
     },
     {
      "t": "cq",
      "x": "Piriformis: worse after prolonged sitting, ER preference, FAIR test. Hamstring: pain immediately on sitting, resisted knee flexion at 90°, ischial tenderness."
     },
     {
      "t": "p",
      "x": "OBTURATOR & FEMORAL NERVES. Both rare, both anterior. The obturator nerve drives the hip adductors and gives medial-thigh sensation; entrapment (pelvic trauma, surgery, mass, osteitis pubis) is often missed until motor/adductor weakness appears. The femoral nerve drives knee extension/hip flexion with sensation to the anterior thigh and medial lower leg; it is injured in surgery, childbirth, or by pelvic masses/bleeding, and presents with weakness more than sensory change. Femoral has a favorable prognosis and responds well to PT; both may need nerve grafting after major trauma."
     },
     {
      "t": "p",
      "x": "LATERAL FEMORAL CUTANEOUS NERVE — meralgia paresthetica. A purely sensory nerve to the anterolateral thigh, compressed beneath the inguinal ligament by body habitus, tight clothing, or a heavy belt — think the security guard (Paul Blart) with the loaded duty belt, or Eldemire’s lean marina worker in a tight wetsuit. Because it is sensory only, there is no weakness and the thigh-muscle EMG is normal — that normal motor picture is the integrating clue. Treatment is removing the compressive force: weight loss, lose the belt."
     },
     {
      "t": "p",
      "x": "TIBIAL NERVE. Mixed nerve for plantarflexion, inversion, toe flexion, and plantar-foot sensation. It becomes the posterior tibial nerve entering the tarsal tunnel (behind the medial malleolus under the flexor retinaculum) — the most common site, from fracture, tendinopathy, or scar. Distal branches (medial plantar nerve in over-pronating runners; the lateral plantar / Baxter’s nerve) cause more focal foot symptoms. It is hard to localize on ultrasound, so injections are uncommon; surgery is best when a cyst is the compressor (drainable) rather than scar (which can recur)."
     },
     {
      "t": "p",
      "x": "COMMON PERONEAL (FIBULAR) NERVE — the most common LE mononeuropathy. Eldemire called this “a very important one to remember.” It wraps the posterior then anterior fibular head, where it is superficial and exposed, then splits: the superficial peroneal nerve does eversion + sensation to most of the dorsum, and the deep peroneal nerve does dorsiflexion + sensation to the first web space (that little patch between the great and second toes). Because the dorsiflexors are deep-peroneal, a common-peroneal lesion at the fibular head causes foot drop. The mechanism is extrinsic compression (a too-high cast, a posterior fibular-head dysfunction) or direct trauma — his memory anchor was a 2021 MMA lateral leg kick that dropped the fighter, who then dragged and slapped the foot and rolled the ankle because he could not dorsiflex. Surgery is rarely needed; conservative care (PT, OMT, removing the aggravator) usually works."
     },
     {
      "t": "cq",
      "x": "Common peroneal at the fibular head = MC LE mononeuropathy → foot drop. Deep peroneal = dorsiflexion + first web space; superficial = eversion + dorsum."
     },
     {
      "t": "pearl",
      "x": "The thenar pad is your median-localization compass: numb thenar → go proximal (pronator teres); spared thenar → stay at the wrist (carpal tunnel). One finding splits the differential."
     },
     {
      "t": "trap",
      "x": "A sciatic lesion can cause foot drop, so do not reflexively pin every foot drop on the common peroneal — but the MC cause is still common peroneal at the fibular head. Localize by associated signs, not reflex."
     },
     {
      "t": "cue",
      "x": "In a hypersensitive patient, you do not need EMG before you treat — the needle hurts. Treat empirically, and let a good response confirm. Understand a test before you order it."
     },
     {
      "t": "q",
      "x": "A patient has numbness of digits 1–3 but an intact thenar pad. Why does carpal tunnel spare thenar sensation when a pronator-teres lesion does not — and how does that single fact localize the lesion?"
     }
    ]
   }
  ]
 },
 "2": {
  "prof": "Dr. Waters",
  "tldr": "Ribs are classified two independent ways — anterior attachment (true/false/floating) and osseous shape (typical/atypical) — and every rib SD is found at its restriction but NAMED for its position of ease.",
  "mustKnows": [
   "True / false / floating is an ANTERIOR-ATTACHMENT axis. True ribs (1–7) reach the sternum by their own costal cartilage; false ribs (8–10) borrow the cartilage of the rib above; floating ribs (11–12) have no anterior attachment at all. Vertebrosternal = true, vertebrochondral = false, vertebral/free = floating.",
   "Typical / atypical is an OSSEOUS-SHAPE axis — the two systems are independent. A typical rib (3–9) articulates with two vertebrae and has a head, neck, tubercle, body, and costal angle. Atypicals are 1, 2, 10, 11, 12 (the “1s and 2s”). Rib 8 is false by attachment but typical by shape — both labels apply.",
   "Three motion types map to three rib bands and the diameter each changes. Pump-handle (ribs 2–5) raises the anterior end → increases AP diameter. Bucket-handle (ribs 6–10) raises the lateral edge → increases transverse diameter. Caliper (ribs 11–12, no costotransverse joint) → increases both slightly. Rib 1 is ~50/50 pump and bucket.",
   "Palpate where excursion is greatest: pump anterior, bucket lateral. Assess pump-handle ribs anteriorly near the sternochondral junction; assess bucket-handle ribs at the mid-axillary line. The lateral edge of a bucket rib rises with inhalation; the anterior edge of a pump rib rises with inhalation.",
   "NAME the dysfunction for the position of EASE, not the restriction. Find the restricted rib, then name it for where it likes to go. Moves into inhalation but won’t recede → inhaled rib. Moves into exhalation but won’t rise → exhaled rib. This single rule drives every rib-SD vignette.",
   "The sympathetic chain ganglia sit ANTERIOR to the rib heads in shared fascia. Restricted rib motion stresses that fascia and raises sympathetic tone — which is exactly why rib-raising mobilizes the rib heads to free the fascia and let the ganglia self-regulate.",
   "The diaphragm does ~60% of inspiration; accessory muscles are for FORCED breathing. Forced inhalation recruits head/neck/pectoral-girdle muscles; forced exhalation recruits the abdominal core. Anterior + middle scalenes attach to rib 1, posterior scalene to rib 2 — a map that returns in Ribs II."
  ],
  "los": [
   {
    "id": "1.1",
    "statement": "Differentiate true ribs vs. false ribs and typical vs. atypical ribs.",
    "blocks": [
     {
      "t": "p",
      "x": "Ribs get sorted two completely separate ways, and the single most testable idea in this LO is that the two systems do not talk to each other. One axis asks how does the rib reach the sternum in front? — that gives you true, false, or floating. The other axis asks what does the bony shape look like? — that gives you typical or atypical. A rib carries one label from each axis, and the labels are assigned by different criteria, which is exactly the trap an exam will set when it asks you to apply both to the same rib."
     },
     {
      "t": "cq",
      "x": "True ribs = 1–7 (reach the sternum by their own costal cartilage); also called vertebrosternal. (attachment axis)"
     },
     {
      "t": "p",
      "x": "Walk the attachment axis from the top down. Ribs 1–7 each have their own dedicated costal cartilage that runs to the sternum — true ribs, sometimes called vertebrosternal because they run vertebra-to-sternum. Ribs 8–10 do not get their own ticket to the sternum; their cartilage pitches a ride on the cartilage of the rib above (ultimately rib 7’s), so they are false or vertebrochondral ribs. Ribs 11–12 have no anterior attachment at all — their tips end in the posterior abdominal wall musculature — so they are floating (vertebral, free) ribs. Rib 10 floats in a minority of people, which is why some texts hedge on it."
     },
     {
      "t": "cq",
      "x": "False ribs = 8–10 (cartilage attaches to the rib above, not the sternum directly); also vertebrochondral. (attachment axis)"
     },
     {
      "t": "p",
      "x": "Now switch systems entirely to the shape axis. Typical ribs (3–9) share a reliable osseous blueprint: a head that articulates with two vertebrae (its own numbered level plus the one above), a neck, a tubercle that articulates with the transverse process at the costotransverse junction, a long body, and a costal angle where the body turns sharply to head laterally. Atypical ribs are 1, 2, 10, 11, and 12 — the mnemonic Waters teaches is that any rib with a 1 or a 2 in its number is atypical. Atypicals each break the blueprint in their own way: rib 1 is the broadest and most sharply curved and carries a scalene tubercle; rib 2 has a tuberosity for serratus anterior; ribs 11 and 12 have no neck or tubercle and articulate with only their own corresponding vertebra."
     },
     {
      "t": "cq",
      "x": "A typical rib articulates with two vertebrae and has head, neck, tubercle, body, costal angle; atypicals lack one or more and vary. (typical-rib definition)"
     },
     {
      "t": "p",
      "x": "Here is where the exam lives: the two axes cross. Rib 8 attaches indirectly, so it is a false rib — yet it has the full landmark set and two-vertebra articulation, so it is also a typical rib. “False and typical” is not a contradiction; it is two true labels from two independent systems. When a question gives you a rib number and asks you to select all that apply, resolve attachment and shape separately and report both."
     },
     {
      "t": "key",
      "x": "Two independent axes: attachment (true/false/floating) and shape (typical/atypical). Assign one label from each."
     },
     {
      "t": "confusion",
      "x": "False ≠ atypical. False is about attachment; atypical is about bone shape. Rib 8 is false AND typical."
     },
     {
      "t": "trap",
      "x": "On “select all that apply,” a rib almost always carries two correct labels (one per axis). Picking only one is the bait."
     },
     {
      "t": "q",
      "x": "Rib 8 is a false rib — so why is it also a typical rib, and what does that tell you about how the two classification systems relate?"
     }
    ]
   },
   {
    "id": "1.2",
    "statement": "Discuss the connections of ribs to other areas of the body.",
    "blocks": [
     {
      "t": "p",
      "x": "The reason ribs matter beyond breathing is that they are wired into the autonomic nervous system by simple proximity. The thoracic sympathetic chain ganglia lie anterior to the rib heads, sitting in fascia that the ganglia and the ribs share. Because they share connective tissue, anything the rib does — or fails to do — is felt by the chain. That single anatomic fact is the backbone of why osteopathic rib treatment claims an autonomic effect."
     },
     {
      "t": "cq",
      "x": "The sympathetic chain ganglia lie anterior to the rib heads in shared fascia. (key anatomic relationship)"
     },
     {
      "t": "p",
      "x": "When a rib loses motion, the shared fascia is stressed and compressed, and the ganglia can no longer regulate cleanly — the result is a drift toward increased sympathetic tone in whatever those segments innervate. Clinically that shows up as peripheral nerve irritation, lymphatic and venous congestion, and viscerosomatic feedback loops where a stuck rib helps drive a visceral complaint. The fix follows directly from the mechanism: rib-raising mobilizes the rib heads, frees the fascial connections, and lets the ganglia return to self-regulation. You will see this exact mechanism applied in the Pulmonology and Cardiac lectures — here is where it is built."
     },
     {
      "t": "cq",
      "x": "Restricted rib motion → stressed shared fascia → increased sympathetic tone; rib-raising frees the fascia to restore regulation. (rib-raising rationale)"
     },
     {
      "t": "p",
      "x": "Beyond protecting viscera and enabling respiration, rib motion also drives venous and lymphatic return — the pressure swings the rib cage creates pull fluid back toward the heart against gravity. Waters flagged this as the under-appreciated third function of the rib cage."
     },
     {
      "t": "q",
      "x": "A patient has thoracic rib restriction and signs of viscerosomatic dysfunction. Trace the anatomic chain that links the stuck rib to a hyperactive sympathetic state, and name the technique that addresses it."
     }
    ]
   },
   {
    "id": "1.3",
    "statement": "Identify the muscles of respiration.",
    "blocks": [
     {
      "t": "p",
      "x": "What Waters wanted was a principle, not a memorized list. Start with the one muscle that does the real work: the thoracic diaphragm generates about 60% of the pressure change of tidal inspiration. Everything else is supporting cast, and the cast splits cleanly by job."
     },
     {
      "t": "cq",
      "x": "The diaphragm generates ~60% of the inspiratory pressure change; it is the primary muscle of respiration. (primary-muscle figure)"
     },
     {
      "t": "p",
      "x": "Accessory muscles are recruited only for forced or heavy breathing — exercise, an asthma or COPD exacerbation, any “increased work of breathing.” And they sort by direction. For forced inhalation, think head, neck, and pectoral girdle: sternocleidomastoid, scalenes, pectoralis, serratus posterior superior, upper iliocostalis. For forced exhalation, think abdominal core: rectus abdominis, obliques, transversus abdominis, plus quadratus lumborum and latissimus dorsi. Try it on yourself — a hard breath out comes from the core; a hard breath in comes from the neck and shoulders. That contrast is the testable takeaway, not the enumerated list."
     },
     {
      "t": "cq",
      "x": "Forced inhalation = head/neck/pectoral-girdle muscles; forced exhalation = abdominal core. Accessory muscles fire only in heavy/forced breathing. (the organizing contrast)"
     },
     {
      "t": "p",
      "x": "The single-muscle slides earn their place precisely because the exam will not ask you to recite a list — it will name or show a muscle and ask which phase of breathing it serves. Anchor each muscle to its job rather than its position in a list: the external intercostals support the intercostal spaces and assist forced inspiration; transversus thoracis and subcostals are deep muscles of the anterior and posterior rib cage; serratus posterior superior and inferior are accessory muscles of respiration; serratus anterior wraps anteriorly with its inferior portion an accessory inspiratory muscle; the sternocleidomastoid (sternum + clavicle + mastoid) is an accessory inspiratory muscle; the anterior and middle scalenes attach to rib 1 and the posterior scalene to rib 2; latissimus dorsi is a muscle of respiration as well as a “lat pulldown” muscle; and forced exhalation is predominantly the abdominal core."
     },
     {
      "t": "key",
      "x": "Diaphragm ≈ 60% of inspiration. Accessory muscles fire only in forced breathing."
     },
     {
      "t": "pearl",
      "x": "Forced in = neck & shoulders; forced out = core. Test it on your own breath to recall it."
     },
     {
      "t": "cue",
      "x": "Accessory-muscle use at rest (SCM and scalenes working during quiet breathing) is a red flag for increased work of breathing — think exacerbation."
     }
    ]
   },
   {
    "id": "1.4",
    "statement": "Differentiate between pump handle, bucket handle, and caliper motion of the ribs.",
    "blocks": [
     {
      "t": "p",
      "x": "Rib motion is “not just inhalation and exhalation” — the direction a rib travels depends on the geometry of its joints, and that geometry sorts the ribs into three motion types. The clean way to hold it is a three-way mapping: each motion type owns a band of ribs, changes a specific thoracic diameter, and is enabled (or freed) by a specific joint arrangement. Get the mapping and you can answer any “which motion / which diameter / which ribs” question."
     },
     {
      "t": "cq",
      "x": "Pump-handle (ribs 2–5): anterior end swings up in an arc → increases the AP diameter. (motion mapping)"
     },
     {
      "t": "p",
      "x": "Picture an old water-pump handle: one end fixed, the free end swinging up in an arc. The rib is fixed posteriorly at its costovertebral/costotransverse axis and swings its anterior end upward, carrying the front of the chest forward and increasing the anterior-posterior diameter. Ribs 2–5 are predominantly pump-handle. A bucket handle is fixed at both ends, so its middle swings laterally upward. Ribs 6–10 do this: the lateral edge rises, increasing the transverse diameter — the “chicken dance” motion you will rehearse in lab."
     },
     {
      "t": "cq",
      "x": "Bucket-handle (ribs 6–10): lateral edge rises → increases the transverse diameter. (motion mapping)"
     },
     {
      "t": "p",
      "x": "Ribs 11–12 have no costotransverse articulation, so they are not pinned in the horizontal plane. With only their head joint to anchor them, they swing like a pair of round calipers and produce a slight increase in both the AP and transverse diameters. The absent costotransverse joint is the whole reason caliper motion exists — a favorite “why” question. Rib 1 is the oddball: about 50% pump and 50% bucket, which is part of why it gets special diagnostic handling. And the caution that keeps you honest: all ribs exhibit all types of motion to varying degrees — “predominant” is only predominant, which is why in lab you check most ribs for both pump and bucket components rather than assuming one pattern."
     },
     {
      "t": "cq",
      "x": "Caliper (ribs 11–12): no costotransverse joint → slight increase in both diameters. (caliper mechanism)"
     },
     {
      "t": "key",
      "x": "Three-way map: pump (2–5, AP) / bucket (6–10, transverse) / caliper (11–12, both). Rib 1 ≈ 50/50."
     },
     {
      "t": "pearl",
      "x": "Caliper motion exists because ribs 11–12 have no costotransverse joint — the “why” the exam loves."
     },
     {
      "t": "trap",
      "x": "“Predominant” ≠ “only.” All ribs do all motions to a degree — don’t assume one rib does just one thing."
     },
     {
      "t": "q",
      "x": "Two ribs both increase a thoracic diameter on inhalation, but one increases the AP diameter and the other the transverse. What distinguishes which motion each performs, and which ribs do which?"
     }
    ]
   },
   {
    "id": "1.5",
    "statement": "Identify the characteristics of inhaled and exhaled ribs (pump and bucket handle).",
    "blocks": [
     {
      "t": "p",
      "x": "This LO is the payoff for everything before it, and it turns on one rule Waters repeated more than any other: somatic dysfunction is diagnosed — named — for the position of ease. You hunt down the rib that is restricted, but you label it for the direction it still likes to go. Get that backwards and every vignette flips. The Lab objective “diagnose rib somatic dysfunctions” lives here too — the assessment workflow below is that didactic content."
     },
     {
      "t": "p",
      "x": "Where to palpate: match your hands to the predominant motion, because that is where excursion is greatest. Pump-handle ribs (2–5) are assessed anteriorly, near the sternochondral junction, just lateral to the sternum. Bucket-handle ribs (6–10) are assessed at the mid-axillary line. Put your hands where the rib actually moves and the findings become obvious; put them in the wrong place and a real dysfunction hides."
     },
     {
      "t": "cq",
      "x": "Palpate pump-handle ribs anteriorly (sternochondral junction); palpate bucket-handle ribs at the mid-axillary line. (palpation sites)"
     },
     {
      "t": "p",
      "x": "Static then dynamic. First the static check: is a rib prominent or recessed? A prominent rib hints at an inhaled rib, a recessed one at an exhaled rib — but that is only a hint. The dynamic check decides it: have the patient breathe and feel whether the rib moves as expected. Here is the moment Waters leaned on — she said that if a bucket rib “moves nicely into inhalation but doesn’t move into exhalation, ding ding ding, you’ve got yourself an inhaled rib.” It moves freely into inhalation and is stuck leaving it, so it prefers inhalation: an inhaled rib. If a rib moves well in both directions, check the other side — the apparent prominence may be the contralateral rib sitting recessed."
     },
     {
      "t": "cq",
      "x": "Static: prominent ≈ inhaled, recessed ≈ exhaled (hint only). Dynamic decides: moves into a phase but won’t leave it → named for that phase. (assessment logic)"
     },
     {
      "t": "p",
      "x": "Naming, restated: restriction locates the problem; ease names it. A rib that rises easily with inhalation but will not recede with exhalation is an inhaled rib — it prefers inhalation. The mirror case (moves into exhalation, will not rise) is an exhaled rib. And keep Waters’ caution in view: all ribs exhibit all types of motion to varying degrees, so in practice you test most ribs for both pump- and bucket-handle components before committing to a name. That is why the SD-naming vignettes give you a location (anterior vs mid-axillary), a static finding, and a dynamic finding — you need all three to land the correct side, motion type, and ease direction."
     },
     {
      "t": "cq",
      "x": "Rises with inhalation but won’t recede = inhaled rib; moves into exhalation but won’t rise = exhaled rib (named for ease). (the SD-naming rule)"
     },
     {
      "t": "key",
      "x": "Find the restriction; name for the ease. Static prominence hints; dynamic motion decides."
     },
     {
      "t": "cue",
      "x": "Rib moves into a phase but won’t leave it → name it for that phase (inhaled or exhaled). Check the other side if both move freely."
     },
     {
      "t": "trap",
      "x": "Naming for the restriction instead of the ease flips every vignette — the single most common rib-SD error."
     },
     {
      "t": "q",
      "x": "A bucket-handle rib is prominent on one side and rises with inhalation but will not recede on exhalation. Walk the static-then-dynamic logic and name the dysfunction — and explain why you name it the way you do."
     }
    ]
   }
  ]
 },
 "3": {
  "prof": "Barry",
  "tldr": "Every rib SD is named by four components — side, rib number, where it likes to live (inhaled/exhaled), and predominant motion — and a group of ribs is treated in B.I.T.E. order: Bottom for Inhaled, Top for Exhaled.",
  "mustKnows": [
   "Name a rib SD for where it LIKES TO LIVE, not where it's restricted. Barry repeated this all lecture: find the rib with less range, then name it for the phase it prefers. Free into inhalation but stuck leaving it → inhaled rib. Free into exhalation but stuck leaving it → exhaled rib.",
   "Four components name every rib SD — in order. Side (L/R), rib number, where it lives (inhaled/exhaled = the SD itself), and predominant motion (pump / bucket / caliper). Each rib gets its own individual diagnosis even when a whole group moves together.",
   "B.I.T.E. sets the treatment order for a group: Bottom for Inhaled, Top for Exhaled. Treat the bottom-most rib first in an inhaled group (pushing it inferiorly pulls the rest into exhalation like a caravan); treat the top-most rib first in an exhaled group. Do it backwards and you push ribs into a brick wall of their stuck neighbors.",
   "Pump pain is sharp and sternal; bucket pain is deep and lateral. Pump-handle SDs give sharp, stabbing, pinprick pain at the costosternal/costotransverse attachments (palpated parasternally). Bucket-handle SDs give deep, dull, aching, regional pain at the mid-axillary line (where you assess AP-axis motion).",
   "The rib-dance ME muscle map (exhaled pump-handle ribs) runs by rib number. Rib 1 = anterior/middle scalene; rib 2 = posterior scalene; ribs 3–5 = pectoralis minor; ribs 6–10 = serratus anterior; ribs 11–12 = latissimus dorsi + QL. Pain on a breath phase cues the SD; this map cues the treatment.",
   "Costochondritis has NO swelling; Tietze syndrome DOES. Both give tender costochondral/costosternal junctions (classically ribs 2–5), but visible edema at the junction is what upgrades the label from costochondritis to Tietze syndrome. Untreated rib SDs can drive costochondritis.",
   "A cervical rib compresses the LOWER trunk of the brachial plexus → thoracic outlet syndrome. It's a congenital fibrocartilaginous band (not a true rib) running toward the first thoracic rib — one of the four TOS causes. If you suspect TOS, look at the cervical-spine x-ray yourself."
  ],
  "los": [
   {
    "id": "1",
    "statement": "Recognize Rib Biomechanics and Dysfunctions.",
    "blocks": [
     {
      "t": "p",
      "x": "Barry opened with Andrew Taylor Still's line that \"the study of the framework of the chest should be done with the greatest of care\" — and the reason is that a rib articulates in two places and is slung in muscle and ligament, so a small derangement anywhere ripples through the whole respiratory mechanism. The biomechanics reduce to one idea you can apply to any rib: a dysfunctional rib is stuck in one breath phase, and everything you palpate — the painful phase, the intercostal spacing, the edge that rides up — follows from which phase it is stuck in."
     },
     {
      "t": "cq",
      "x": "On inhalation the diaphragm contracts and descends inferiorly, creating the negative intrathoracic pressure that draws air in; on exhalation it simply relaxes (no contraction). (diaphragm direction)"
     },
     {
      "t": "p",
      "x": "Why the framework is fragile: a typical rib articulates with the spine in two places — the costovertebral joint at the body and the costotransverse joint at the transverse process — and is bound by a web of ligaments and the muscles of respiration. Stretch or tighten any one of those and the rib's two-point hinge derails, which is also why a thoracic somatic dysfunction (say a rotated, side-bent, extended T10) drags its rib along with it. The practical upshot is that rib SDs and thoracic SDs travel together often enough that finding one should make you check the other. Pain during the respiratory cycle is a key diagnostic clue: pain on inhalation versus exhalation localizes the SD."
     },
     {
      "t": "p",
      "x": "Pump vs bucket — axis and pain: the two predominant motions ride different axes. Pump-handle ribs rotate about a transverse axis, so the anterior end (and sternum) swings up and forward on inhalation — increasing the AP diameter. Bucket-handle ribs rotate about an anteroposterior axis, so the lateral shaft rises like a bucket handle — increasing the transverse diameter. The pain patterns track the axis: pump-handle SDs hurt sharply at the costosternal/costotransverse attachments, while bucket-handle SDs ache deeply at the mid-axillary line. Barry framed the distinction as a clinical must-know, because the location and quality of pain tell you the motion type before you ever test it."
     },
     {
      "t": "cq",
      "x": "Pump-handle rotates on a transverse axis (AP diameter); bucket-handle rotates on an AP axis (transverse diameter). (axis mapping)"
     },
     {
      "t": "p",
      "x": "The pain-cycle tell: the breath phase that hurts tells you where the rib refuses to go, and therefore where it lives. If a patient hurts on inhalation, the rib won't inhale — it is camped in exhalation — so it is an exhaled rib. If they hurt on exhalation, the rib won't exhale — it lives in inhalation — so it is an inhaled rib. Pain on palpation tends to run the entire course of the rib (not one focal spot), which is part of how a rib SD raises Barry's eyebrow over a fracture or a focal lesion."
     },
     {
      "t": "p",
      "x": "Intercostal spacing and edge prominence: being stuck in a phase also deforms the spaces and edges, which is where the exam loves a second-order question. Take an inhaled pump-handle rib 2 on the right: because it is held up toward rib 1, the intercostal space above it (to rib 1) is narrowed and the space below it (to rib 3) is widened. The edges flip front-to-back: on an inhaled rib, the anterior inferior edge rides up and is prominent in front, while the posterior superior edge is prominent behind. Reverse all of it for an exhaled rib. You don't memorize a table — you reason it from \"which way did the rib rotate to get stuck.\""
     },
     {
      "t": "cq",
      "x": "Inhaled rib: intercostal space above narrows, space below widens; anterior inferior edge prominent in front, posterior superior edge prominent behind. (inhaled-rib exam findings)"
     },
     {
      "t": "p",
      "x": "Caliper ribs and rib 1 — the two assessment exceptions. Ribs 11 and 12 move by caliper motion (think a protractor opening), and they couple to the diaphragm: on inhalation an inhaled caliper rib swings posteriorly and inferiorly (the diaphragm descends and pulls them down), while an exhaled one moves anteriorly and superiorly. You assess them prone, walking up the quadratus lumborum from the iliac crest until you hit the 12th rib. Rib 1 is the other exception — 50/50 pump and bucket — so you assess it for both, finding it from the bottom of the earlobe straight down, often pulling the upper trapezius back to reach the cervicothoracic junction. A rib 1 exhalation dysfunction is depressed versus the opposite side, tender at the costotransverse junction, and won't move superiorly on inhalation."
     },
     {
      "t": "key",
      "x": "A dysfunctional rib is stuck in one breath phase. Every finding — painful phase, spacing, edge — follows from which phase."
     },
     {
      "t": "confusion",
      "x": "Pump vs bucket is about AXIS and PAIN LOCATION, not inhaled/exhaled. A rib can be inhaled-pump or inhaled-bucket."
     },
     {
      "t": "trap",
      "x": "Pain ON inhalation = the rib won't inhale = exhaled rib. The hurting phase is the one it REFUSES, not the one it lives in."
     },
     {
      "t": "q",
      "x": "A pump-handle rib is stuck in inhalation. Predict three physical-exam findings — the breath phase that hurts, the intercostal-space change, and which anterior edge rides up — and explain why each follows from \"stuck in inhalation.\""
     }
    ]
   },
   {
    "id": "3",
    "statement": "Recognize Clinical Syndromes Associated with Rib Dysfunctions.",
    "blocks": [
     {
      "t": "p",
      "x": "Most chest-wall pain is musculoskeletal, not visceral — Barry's residency story of cardiologists sending \"ruled-out\" chest-pain patients to the osteopath makes the point that a rib cage and thoracic spine generate a lot of real pain. This LO is a recognition gallery: each syndrome has one discriminating tell, and the exam tests whether you can name it from that tell."
     },
     {
      "t": "cq",
      "x": "The most common cause of chest pain is musculoskeletal, not visceral. (chest-pain epidemiology)"
     },
     {
      "t": "p",
      "x": "Costochondritis vs Tietze — swelling is the splitter. Both are irritation of the chondrosternal/chondrochondral junctions, classically ribs 2–5, with tenderness, puffiness, and stringy tissue texture; untreated rib SDs can drive it. The single distinguishing feature: visible edema at the junction upgrades the diagnosis from costochondritis (no swelling) to Tietze syndrome (swelling present). That one finding is the classic test item."
     },
     {
      "t": "p",
      "x": "Cervical rib and thoracic outlet syndrome: a cervical rib is a congenital fibrocartilaginous band (not a true rib) running toward the first thoracic rib; it can compress the lower trunk of the brachial plexus and produce thoracic outlet syndrome — one of the four classic TOS causes. Barry's clinical aside is worth keeping: if you suspect TOS and the radiology read is \"normal,\" look at the cervical-spine film yourself, because the band is easy to miss."
     },
     {
      "t": "cq",
      "x": "A cervical rib compresses the lower trunk of the brachial plexus → thoracic outlet syndrome. (cervical-rib TOS)"
     },
     {
      "t": "p",
      "x": "Sick scapula, fractures, and shingles: scapular dyskinesis (sick scapula) is confirmed by the scapular repositioning test — retract/stabilize the scapula, repeat the painful flexion, and if the pain resolves the driver is scapular malposition — treat the scapular stabilizers, not the cuff. Rib fractures give focal point tenderness over one or two ribs, and compressing the cage distal to the fracture reproduces pain at the fracture site (not where you press). Shingles (herpes zoster) gives deep, burning, dermatomal pain from varicella reactivation in the dorsal root ganglion — usually one to a few dermatomes on one side, and the pain can precede any rash. Other context: viscerosomatic reflexes can refer cardiac, pulmonary, or GI pain to the rib cage (though musculoskeletal remains the most common source), and pneumonia can cause pleuritic chest pain (with fever, cough, dyspnea) — the MOPSE trial showed OMT cut length of stay and antibiotic use."
     },
     {
      "t": "cq",
      "x": "Rib fracture: distal cage compression reproduces pain at the fracture site, not under the examiner's hand; pain is focal, not along the whole rib. (fracture vs SD)"
     },
     {
      "t": "cq",
      "x": "Shingles = deep burning dermatomal pain, one side, from varicella reactivation in the dorsal root ganglion; rash may be absent early. (zoster recognition)"
     },
     {
      "t": "confusion",
      "x": "Costochondritis vs Tietze: identical tender junction — the ONLY splitter is visible swelling (Tietze has it)."
     },
     {
      "t": "cue",
      "x": "Shoulder pain on flexion? Do the scapular repositioning test — if retraction kills the pain, treat the scapular stabilizers, not the cuff."
     },
     {
      "t": "trap",
      "x": "Rib fracture pain shows up where the rib is broken, not where you press — distal compression localizes it proximally."
     },
     {
      "t": "q",
      "x": "Two patients both have tender costochondral junctions. One has visible swelling, one does not. What separates the diagnoses, and what is the practical significance of getting it right?"
     }
    ]
   },
   {
    "id": "2",
    "statement": "Identify the Proper Naming of Rib Dysfunctions.",
    "blocks": [
     {
      "t": "p",
      "x": "Naming a rib SD is a fixed four-slot template, and Barry drilled the order so the name is unambiguous. Slot one: side (left or right). Slot two: rib number (and yes, each rib in a group gets its own individual diagnosis even when they move together). Slot three: where it likes to live — inhaled or exhaled — which is the somatic dysfunction. Slot four: the predominant motion — pump, bucket, or caliper. He hammered one principle above all: name it for where it likes to live, not where it's restricted."
     },
     {
      "t": "cq",
      "x": "You name a rib SD for the position of ease (where it lives / less range of motion), never for the restricted direction. (naming principle)"
     },
     {
      "t": "p",
      "x": "Where predominance comes from palpation: you read the fourth slot off where the motion is greatest. Perceived best parasternally / at the costosternal junction → pump-handle. Perceived best at the mid-axillary line → bucket-handle. Ribs 11–12 are caliper. And rib 1 is the exception that proves the rule: it is ~50% pump and ~50% bucket, so you don't assign a predominance at all — you simply name it inhaled or exhaled. Rib 1 is the thoracic-inlet rib (rib 1 + manubrium + T1 acting as a unit via Sibson's fascia), which is why it warrants its own look."
     },
     {
      "t": "cq",
      "x": "Predominance by palpation site: parasternal → pump; mid-axillary → bucket; ribs 11–12 → caliper; rib 1 → no predominance (50/50). (reading the 4th slot)"
     },
     {
      "t": "p",
      "x": "B.I.T.E. — treatment order for a group: when several ribs share a dysfunction, the order you treat them in matters, and the mnemonic is B.I.T.E.: Bottom for Inhaled, Top for Exhaled. For a group of inhaled ribs, treat the bottom-most rib first — pushing it inferiorly draws all its neighbors toward exhalation in a caravan, with no roadblock. For a group of exhaled ribs, treat the top-most rib first. Do it backwards and, as Barry put it, you push a rib \"into all the other inhale top ribs below it, and you're just up against a brick wall.\" The prior student who built the study guide literally made BITE the section header — that's how central it is."
     },
     {
      "t": "cq",
      "x": "Inhaled group → treat the bottom rib first (caravan into exhalation); exhaled group → treat the top rib first; wrong end = mechanical brick wall. (B.I.T.E. mechanism)"
     },
     {
      "t": "p",
      "x": "The ME muscle map (rib dance): the \"rib dance\" treats exhaled pump-handle SDs with muscle energy, and the muscle you recruit is set by rib number: rib 1 = anterior/middle scalene, rib 2 = posterior scalene, ribs 3–5 = pectoralis minor, ribs 6–10 = serratus anterior, ribs 11–12 = latissimus dorsi + QL. This is the map behind the Kahoot answers (rib 1 exhalation → anterior scalene) and the lab practical, so it is worth knowing cold."
     },
     {
      "t": "key",
      "x": "Four slots, in order: side · rib# · inhaled/exhaled · predominant motion. Slot 3 is the SD; name it for ease."
     },
     {
      "t": "cue",
      "x": "Group of ribs? Run B.I.T.E.: Bottom for Inhaled, Top for Exhaled — then pick the ME muscle by rib number."
     },
     {
      "t": "pearl",
      "x": "Rib 1 gets no predominance (50/50 pump/bucket) — just inhaled or exhaled. It's the thoracic-inlet rib, worth its own look."
     },
     {
      "t": "q",
      "x": "You have a group of ribs 3–6 on the right, all inhaled. Which rib do you treat first, and what goes wrong mechanically if you start at the wrong end?"
     }
    ]
   },
   {
    "id": "4",
    "statement": "Identify Exercise Rehabilitation for Rib Related Issues.",
    "blocks": [
     {
      "t": "p",
      "x": "Barry spent very little lecture time on formal exercise rehabilitation — the one rib-related issue he tied to a concrete rehab plan was scapular dyskinesis, where the move is to send the patient to physical therapy to strengthen and stretch the scapular stabilizer muscles rather than chasing the rotator cuff. His reasoning is mechanistic: a malpositioned scapula drives the acromion into the supraspinatus, so correcting stabilizer balance and position addresses the cause of the impingement instead of the downstream cuff irritation. Beyond that, rehab here is general — restore rib and thoracic motion (often with the OMT and muscle-energy work from LO 2), then reintroduce breathing and postural mechanics. This LO is intentionally light because the lecture treated it lightly; the testable nugget is the scapular-stabilizer referral."
     }
    ]
   }
  ]
 },
 "4": {
  "prof": "Dr. Barry",
  "tldr": "CRPS = disproportionate, non-dermatomal, distal regional pain across four domains, driven by peripheral + central sensitization; recognize it, stage it, and treat early — the pain is real and centrally processed.",
  "mustKnows": [
   "CRPS Type I vs Type II. The single most-tested CRPS fact. Type I (old name: reflex sympathetic dystrophy / RSD) = disproportionate regional pain with NO confirmed nerve lesion. Type II (old name: causalgia) = the same picture WITH a confirmed peripheral nerve lesion. The presence/absence of a confirmed nerve injury is the entire distinction — Barry: “know that, please.”",
   "Recognize CRPS by its pattern. Spontaneous or evoked pain disproportionate to the injury, non-dermatomal, distal-predominant (hands/feet), with findings across four domains (sensory, vasomotor, sudomotor, motor/trophic). Disproportionate + non-dermatomal + distal is the recognition signature — it separates CRPS from a radiculopathy and from fibromyalgia (which is widespread, four-quadrant, without objective findings).",
   "Allodynia vs hyperalgesia. Allodynia = pain from a stimulus that is NOT normally painful (a sock, a feather). Hyperalgesia = abnormally high pain from a stimulus that WOULD normally hurt (stub your toe, then drop a phone on it). The nature of the triggering stimulus is the discriminator.",
   "Stages 1–3 — stage 3 is irreversible. Stage 1: warm/red/moist skin, edema, increased hair/nail growth. Stage 2: cool/cyanotic skin, brawny edema, decreased hair growth, brittle nails, patchy osteoporosis on x-ray. Stage 3: marked dystrophy/atrophy that becomes IRREVERSIBLE, contractures, livedo reticularis. Burning pain is in ALL stages — irreversibility is what delineates stage 3.",
   "Budapest criteria — clinical, no confirmatory test. Diagnosis is clinical: continuing disproportionate pain + ≥1 symptom in ≥3 of 4 categories + ≥1 sign in ≥2 of 4 categories + no better explanation. There is NO confirmatory lab or imaging test; standard inflammation labs (ESR, CRP) are normal. Don’t defer treatment waiting for imaging — delay worsens prognosis.",
   "Diagnostic testing pearls. Autonomic tests (RSO, QSART, resting skin temperature) are highly sensitive/specific but laborious (8–10 h), so not routine. Bone scan is preferable to plain radiographs in stage 1 (Barry said it twice). A sympathetic (stellate ganglion) block that relieves pain is a positive diagnostic test — but a NEGATIVE block does NOT rule out CRPS (the Spurling analogy).",
   "Treatment — throw the book, mind the OMT precaution. Multi-agent pharmacotherapy (analgesics, NSAIDs/steroids, TCAs, sodium-channel blockers, gabapentin, GABA agonists, clonidine) + PT/OT + psychotherapy + sympathetic block + ketamine (NMDA antagonist for refractory central sensitization). For OMT: use HVLA with caution (osteoporosis) — indirect techniques are better tolerated."
  ],
  "los": [
   {
    "id": "2",
    "statement": "Identify the etiologies of CRPS.",
    "blocks": [
     {
      "t": "p",
      "x": "Epidemiology: the annual incidence is 5–26 per 100,000 per year — a broad range, but higher than most expect for a condition many clinicians have never heard of (Barry’s opening Kahoot point). CRPS skews strongly female, with a female-to-male ratio of about 3–4:1; the median age of onset is around 46, with a peak in women between 61–70. Split it into buckets: in adults, the upper extremity is most commonly affected and fracture is the most common precipitant; in children, CRPS is rarer, even more female-predominant (75–90%), tends to hit the lower extremity, and carries a better prognosis but a higher recurrence rate."
     },
     {
      "t": "cq",
      "x": "Incidence 5–26/100,000/yr; female 3–4:1; adults UE + fracture-driven; kids LE + better prognosis. (epidemiologic skew)"
     },
     {
      "t": "p",
      "x": "Precipitants by frequency: fracture is number one (~42%), classically the distal radius (Colles’); then blunt trauma, crush injuries, and sprains. Surgery (orthopedic, carpal tunnel, shoulder) precipitates about 12%; nerve entrapment about 7%; and roughly 5% is truly spontaneous with no identifiable trigger. Myocardial infarction, stroke, and even venipuncture round out the notable-but-uncommon list. The history of the disease runs deep — Paré after royal bloodletting, Mitchell’s Civil War “causalgia,” Sudeck’s x-ray atrophy — but Barry was explicit that he would not hold you to the historical dates, so know that the syndrome has been recognized for centuries and move on."
     },
     {
      "t": "q",
      "x": "In an adult, what is the single most common precipitating event for CRPS, and at which classic fracture site?"
     }
    ]
   },
   {
    "id": "1",
    "statement": "Recognize Complex Regional Pain Syndrome (CRPS).",
    "blocks": [
     {
      "t": "p",
      "x": "CRPS is one of Barry’s favorite topics, and the first job is simply to recognize it. The definition does the heavy lifting: spontaneous or evoked pain that is disproportionate in severity or duration to the inciting injury — more pain than the injury should produce in a “normal” person. The pain does not follow a dermatome (so it is not radicular in origin), it is distal-predominant (hands and feet), and it comes with abnormal sensory, motor, autonomic, and trophic findings. The course is variable — it can improve, stabilize, or worsen. Hold onto three words: disproportionate, non-dermatomal, distal. That triad is the recognition signature."
     },
     {
      "t": "p",
      "x": "Barry frames everything in buckets. Pain is either nociceptive (a real stimulus activating nociceptors) or neuropathic (arising from injury/dysfunction of the nervous system itself), and within those he tracks peripheral vs central sensitization. Two definitions you must own at recognition: allodynia is pain from a stimulus that is not normally painful — a feather, a sock — and hyperalgesia is an abnormally high level of pain from a stimulus that would normally hurt. His teaching device: stub your toe, then drop a phone on that same toe the next day and it hurts far more than the phone alone would (hyperalgesia); versus pulling a sock over a foot you never injured and feeling excruciating burning (allodynia)."
     },
     {
      "t": "cq",
      "x": "Allodynia = pain from a normally non-painful stimulus; hyperalgesia = exaggerated pain from a normally painful one. (the sock vs the stubbed toe)"
     },
     {
      "t": "p",
      "x": "Type I vs Type II is the single most-tested CRPS fact, and Barry restated it three times. In 1994 the old term RSD (reflex sympathetic dystrophy) was retired and replaced by two CRPS types. Type I = the disproportionate regional pain syndrome with NO confirmed nerve lesion (it replaced RSD). Type II = the identical clinical picture but WITH a confirmed peripheral nerve lesion (it replaced causalgia). The presence or absence of a confirmed nerve injury is the entire distinction — not severity, not stage, not which limb. As Barry put it: “Type 1, no confirmed nerve lesion. Type 2, confirmed peripheral nerve lesion. Know that, please.” The name CRPS is deliberately descriptive: Complex (multi-system: sensory, autonomic, motor, trophic), Regional (a body region, usually a distal limb, non-dermatomal), Pain (the cardinal, disproportionate feature), Syndrome (a cluster, not one mechanism)."
     },
     {
      "t": "p",
      "x": "A student asked Barry the discriminator between CRPS and fibromyalgia directly. Both are painful conditions with peripheral and central sensitization, so they overlap — but CRPS is regional (usually one limb, one side) with objective findings (vasomotor, sudomotor, trophic), whereas fibromyalgia is widespread across all four quadrants for at least three months without those objective findings. Regional-with-objective-signs versus widespread-without is the clean separation."
     },
     {
      "t": "p",
      "x": "Pain perception: where do we feel pain? The stimulus is transduced peripherally but perceived centrally — the basis for “the pain is in your head.” The Budapest 2003 criteria and the CRPS type split go together: Type I (no confirmed nerve lesion, was RSD) vs Type II (confirmed nerve lesion, was causalgia)."
     },
     {
      "t": "key",
      "x": "The recognition triad: pain that is disproportionate, non-dermatomal, and distal. If the pain follows a dermatome, think radiculopathy; if it is widespread across four quadrants, think fibromyalgia."
     },
     {
      "t": "confusion",
      "x": "Type I vs II is decided ONLY by a confirmed nerve lesion (II has one, I does not). It is NOT a severity scale and NOT the same as the 1–3 stages — a severe Type I is still Type I."
     },
     {
      "t": "pearl",
      "x": "Barry’s thesis: “the pain is always in your head” — meaning real and centrally processed in the somatosensory cortex, NOT imagined. Validate the pain even as you involve psychiatry."
     },
     {
      "t": "q",
      "x": "A patient has burning, disproportionate pain confined to one hand after a wrist fracture, not following any dermatome. What single piece of data tells you whether this is CRPS Type I or Type II?"
     }
    ]
   },
   {
    "id": "3",
    "statement": "Identify clinical manifestations of CRPS.",
    "blocks": [
     {
      "t": "p",
      "x": "CRPS manifests across four domains, and the Budapest criteria are built on them. Sensory: severe constant burning/aching pain with allodynia and hyperalgesia. Vasomotor: skin color changes (red, pale, mottled) and temperature asymmetry — the affected limb runs a measurably different temperature you can capture on thermography. Sudomotor: edema and increased or decreased sweating (stage-dependent). Motor/trophic: weakness, reduced range of motion (the most common motor finding), tremor/dystonia, sometimes limb neglect, plus trophic skin/hair/nail changes and the patchy bony demineralization Sudeck first described."
     },
     {
      "t": "cq",
      "x": "Four domains: sensory (burning, allodynia), vasomotor (color, temp asymmetry), sudomotor (edema, sweat), motor/trophic (ROM loss, dystrophy). (the Budapest domains)"
     },
     {
      "t": "p",
      "x": "Onset is days to weeks post-injury and distal-predominant. Additional symptoms: reduced ROM is the most common motor finding, along with limb weakness, and movement disorders appear in about 25% (bradykinesia, dystonia, myoclonus, tremor). A CRPS following a distal radial fracture shows marked swelling of the affected hand — fracture is the most common precipitant."
     },
     {
      "t": "p",
      "x": "“The pain is always in your head” — the sensitization mechanism, Barry’s thesis stated several times: pain is real but it is processed centrally. Trace it. Nociceptive pathway: a noxious stimulus fires primary afferents (A-delta and C fibers) to the dorsal horn; glutamate and substance P cross the first synapse; the signal ascends the spinothalamic tract through the thalamus to the somatosensory cortex — “which I believe is in the brain, so the pain is always in your head.” Peripheral sensitization: tissue injury releases an “inflammatory soup” (prostaglandins, bradykinin) that lowers nociceptor thresholds, and retrograde substance P triggers mast-cell histamine release (neurogenic inflammation) — so afferents fire more for less, intensifying primary hyperalgesia and allodynia. Central sensitization: persistent C-fiber barrage drives wind-up via NMDA-receptor activation, dorsal-horn neurons become hyperexcitable, receptive fields expand (secondary hyperalgesia spreads pain beyond the injury), and descending GABA/glycine inhibition is lost. This is why pain persists long after the tissue heals."
     },
     {
      "t": "cq",
      "x": "Central sensitization = NMDA-driven wind-up + receptive-field expansion + loss of GABA/glycine inhibition. (why pain outlives the injury)"
     },
     {
      "t": "p",
      "x": "Neuropathic add-ons: in neuropathic pain (and CRPS Type II especially), two extra mechanisms appear. Ectopic activity: sodium channels accumulate at the injury site and fire spontaneous action potentials with no stimulus. Ephaptic transmission: damaged fibers crosstalk to adjacent healthy fibers by direct electrical coupling, no synapse — Barry’s frayed-wire short-circuit. This crosstalk expands the receptive field and explains the diffuse spread of CRPS pain."
     },
     {
      "t": "p",
      "x": "Stages 1–3 — stage 3 is irreversible. Stage 1: severe pain limited to the injury site, hyperesthesia, localized edema, decreased mobility, and skin that is warm, red, moist with increased hair/nail growth. Stage 2: pain intensifies and spreads, edema turns brawny and non-pitting, hair growth decreases and nails grow brittle/cracked, skin becomes cyanotic and cool, and spotty/patchy osteoporosis appears on x-ray. Stage 3: marked dystrophy and atrophy that becomes IRREVERSIBLE, contractures, persistent edema, and livedo reticularis. The trap to internalize: burning pain is present in all three stages — it is the irreversible atrophy that delineates stage 3 (the Kahoot baited exactly this)."
     },
     {
      "t": "p",
      "x": "Livedo reticularis is the stage-3 skin sign: lace-like, purplish, mottled discoloration. The mechanism is sympathetic dysregulation — arteriolar/vasospasm reduces capillary perfusion, and deoxygenated blood pools in the subpapillary venous plexus, producing the net-like pattern. It reflects the impaired microvascular tone of advanced CRPS."
     },
     {
      "t": "q",
      "x": "Burning pain is present at every stage of CRPS. What single feature tells you a patient has progressed specifically to stage 3?"
     }
    ]
   },
   {
    "id": "4",
    "statement": "Identify the treatment approach to a patient with CRPS.",
    "blocks": [
     {
      "t": "p",
      "x": "Diagnosis first — it is clinical. Before treatment, anchor the diagnosis: CRPS is a clinical (Budapest) diagnosis with no confirmatory lab or imaging. Standard inflammation labs (ESR, CRP) are normal. Autonomic tests — resting sweat output (RSO), QSART, resting skin temperature — are highly sensitive/specific (RSO ~94%/98% with an abnormal QSART) but require an 8–10-hour protocol, so they are not routine. For imaging, bone scan is preferable to plain radiographs in stage 1 — Barry said it twice, “I repeat” — because three-phase scintigraphy shows diffuse periarticular uptake before the stage-2 patchy osteoporosis appears on film. Critically, do not defer treatment waiting for imaging; delay worsens prognosis."
     },
     {
      "t": "cq",
      "x": "CRPS is a clinical (Budapest) diagnosis — no confirmatory test; bone scan preferred over plain films in stage 1. (diagnostic pearls)"
     },
     {
      "t": "p",
      "x": "The sympathetic block and its one-way logic: a stellate ganglion block (for an upper-limb CRPS) injects anesthetic into the sympathetic ganglion; if pain and temperature improve, that is a positive diagnostic (and therapeutic) test. But the logic runs one way: a negative block does NOT rule out CRPS. Barry’s analogy is Spurling’s cervical compression test — a positive test confirms foraminal stenosis, but a negative test does not exclude it. Absence of response is not absence of disease."
     },
     {
      "t": "p",
      "x": "Throw the book — multimodal treatment. Barry’s strategy is aggressive and multi-agent, to dampen pain and stop spread. Pharmacotherapy: opioid and non-opioid analgesics, NSAIDs and steroids, TCAs, sodium-channel blockers, gabapentin (neuropathic pain), GABA agonists like baclofen (dystonia/motor symptoms), beta-blockers, clonidine. PT/OT is essential and will be excruciating at first — but it retrains the neural matrix to learn that the movement is not actually causing tissue damage. Psychotherapy builds coping and metacognition (and you preface the referral by telling the patient you are not calling them crazy). Sympathetic blocks, and if effective, sympathectomy/ablation or spinal cord stimulation. For refractory cases, ketamine — an NMDA antagonist — turns the “highway of pain into smaller tributaries,” the legitimate mechanism behind Maya Kowalski’s regimen."
     },
     {
      "t": "cq",
      "x": "Refractory CRPS: ketamine = NMDA antagonist dampening central sensitization / wind-up. (ketamine mechanism)"
     },
     {
      "t": "p",
      "x": "OMT — mind the osteoporosis. OMT helps: normalize the CNS, improve blood flow, decrease pain, improve mobility. But the patchy demineralization of CRPS makes bone fragile, so use HVLA with caution — Barry said he is “not using HVLA in any of my CRPS patients” and reaches for indirect techniques, which these patients tolerate far better."
     },
     {
      "t": "cue",
      "x": "Do NOT defer treatment to wait for imaging — CRPS is a clinical Budapest diagnosis and delay worsens prognosis. Start PT/OT and pharmacotherapy early."
     },
     {
      "t": "trap",
      "x": "A negative sympathetic block does not exclude CRPS (Spurling analogy). Only a positive block is confirmatory; do not “rule out” on a non-response."
     },
     {
      "t": "pearl",
      "x": "Refractory CRPS → ketamine, an NMDA antagonist that dampens central wind-up. This is the legitimate treatment at the center of the Maya Kowalski case — awareness saves patients."
     },
     {
      "t": "q",
      "x": "A CRPS patient gets no relief from a stellate ganglion sympathetic block. Does this rule CRPS out — and what analogy did Barry use to make the point?"
     }
    ]
   }
  ]
 },
 "5": {
  "prof": "Dr. Widboom",
  "tldr": "Cervical mechanics run on three modified rules — OA opposite-always, AA rotation (~50%), C2–C7 same-side — NOT Fryette 1&2; diagnosis is translation (= sidebending) against the articular pillars, named in three parts.",
  "mustKnows": [
   "Three sets of mechanics rules. The cervical spine uses THREE diagnosis styles. OA = Opposite Always (sidebending & rotation always opposite, primary motion flexion/extension). AA = rotation (about 50% of all cervical rotation, sidebending negligible; full flexion isolates it). C2–C7 = same side (sidebending & rotation same-side; upper segments rotate more, lower sidebend more).",
   "Cervical does NOT follow Fryette 1 & 2. Widboom flagged this twice on the slide: the cervical spine does NOT obey Fryette’s Principles 1 & 2. It uses modified rules (the three above). This is the carryover error — do not apply thoracic/lumbar triads to the neck.",
   "Translation = sidebending. Motion testing presses the articular pillars (not the transverse processes) from the side. Push left → sidebend left. The exam wording calls this “translation” and adds “restriction” to confuse you: limited translation right = restricted left sidebending = the segment lives in right sidebending. Convert every “translation/restriction” stem to plain sidebending.",
   "3-part nomenclature. A written diagnosis = Type (AP curve: N/F/E) + SR (sidebending + rotation, coupled by region) + direction of freedom. The AA records rotation only. Worked: C3 limited translation R improving in both flexion & extension → C3 NSRRR; OA limited translation R improving in extension → OA ESRRL.",
   "Myodural bridge → cervicogenic headache. The highest-yield clinical pearl: a myodural bridge connects rectus capitis posterior minor to the intracranial dura (pain-sensitive). Tightness here generates cervicogenic headache. In the OAD-compression hold the most-midline finger sits on RCP minor — check it on every headache patient.",
   "Scalenes — the anxious breather. Scalenes: unilateral = ipsilateral sidebending, bilateral = flexion, and they are accessory muscles of respiration (anterior/middle → 1st rib, posterior → 2nd rib). The “patient who lives in their head” breathes with the neck → tight scalenes → brachial-plexus symptoms in digits 4–5. Found just posterior to the SCM.",
   "SCM & facet orientation. The SCM is counterintuitive: unilaterally it sidebends ipsilaterally but rotates contralaterally. Cervical superior facets face Backward, Upward, Medial (BUM) — the “bumble-BUM” mnemonic; thoracic facets are BUL."
  ],
  "los": [
   {
    "id": "3",
    "statement": "Test and palpate the cervical musculature.",
    "blocks": [
     {
      "t": "p",
      "x": "WHAT YOU TOUCH — the articular pillars. Cervical diagnosis is hands-on. You palpate the articular pillars — the lateral masses between the superior and inferior facets, about a fingertip in size — from the side of the neck, not the back. You do not press the transverse processes (nerves exit there and the muscular attachments are tender). Landmarking: drop straight down from the mastoid process to land on the C2 articular pillar, then step one finger-breadth per level down to C7 — by C7 you should run into the first rib or the T1 transverse process. A longer neck is easier to palpate (less tissue in the way)."
     },
     {
      "t": "cq",
      "x": "Palpate and translate the articular pillars from the side — NOT the transverse processes (tender, nerves exit). (palpation target)"
     },
     {
      "t": "p",
      "x": "FINDING THE MUSCLES. The scalenes sit just posterior to the SCM — find the SCM, line your fingers behind it, and you are on anterior → middle → posterior scalene. For the suboccipital muscles you use the OAD-compression hold: your most-midline finger sits on rectus capitis posterior minor, slightly more lateral is posterior major. The splenius (“bandage”) muscles are what you feel during the perpendicular soft-tissue stretch (holding the forehead, pulling up the opposite side of the neck); semispinalis is right lateral to the spinous processes. The deep longus colli and rectus capitis muscles are essentially not palpable — you treat them indirectly (counterstrain/FPR), not by direct palpation."
     },
     {
      "t": "p",
      "x": "CERVICOGENIC HEADACHE — the highest-yield pearl. When you find tightness in the most-midline suboccipital finger (RCP minor), that is a major cervicogenic-headache generator: a myodural bridge connects rectus capitis posterior minor to the intracranial dura (first reported in Spine Journal, 1997), and the dura carries pain-sensitive fibers — so you are pulling on something exquisitely pain-sensitive. It is also very easy to treat: put your fingers on it and wait. Check it on every headache patient during OAD compression."
     },
     {
      "t": "p",
      "x": "Slide suboccipital detail: rectus capitis posterior MAJOR (origin SP of axis/C2; extends/rotates the OA; slightly lateral in the OAD hold) and rectus capitis posterior MINOR (origin posterior tubercle of C1; the myodural-bridge muscle; most-midline finger in the OAD hold). Cervicogenic headache arises from the myodural bridge running from RCP minor to the pain-sensitive intracranial dura (Spine Journal, 1997). The articular pillars (lateral masses between the superior/inferior facets) are the palpation/translation target."
     },
     {
      "t": "q",
      "x": "You push the articular pillar from the left toward the right and meet restriction. In plain sidebending terms, what motion is restricted and where does the segment live?"
     }
    ]
   },
   {
    "id": "1",
    "statement": "Describe the muscular and ligamentous attachments of the cervical spine.",
    "blocks": [
     {
      "t": "p",
      "x": "WHY THE NECK MATTERS. Before the anatomy, Widboom frames why you treat a cervical spine at all. The obvious reasons are neck pain and headache (the biggest one — patients do very well with OMT for headaches). But also: vertigo has a strong association with C2 dysfunction (dural attachments to C2, expanded in cranial), diaphragm function rides on C3–C5 (“C3, 4, 5 keep the diaphragm alive” — so post-surgical or abdominal complaints can trace to the neck), and sympathetic cardiac control runs through the stellate ganglion. Shoulder or upper-extremity complaints can actually be the neck — so you “clear the neck” with range of motion and special tests first."
     },
     {
      "t": "p",
      "x": "INTRINSIC vs EXTRINSIC. The neck balances two muscle classes. Intrinsic muscles are deeper, closer to the axis of rotation, generally smaller — they give precise control of individual-segment motion. Extrinsic muscles sit farther from the axis, are larger/longer, and provide power but lack precise segmental control. Trapezius is the most superficial extrinsic muscle (it covers so much area it generates many different complaints); levator scapulae tightens with forward-head posture (tender point at the superomedial scapular border)."
     },
     {
      "t": "cq",
      "x": "Intrinsic = deep, near the axis, precise segmental control; extrinsic = far, larger, power not precision. (muscle-class framing)"
     },
     {
      "t": "p",
      "x": "ATYPICAL C1 & C2. C1 (atlas) and C2 (axis) are atypical. C1 has no spinous process (only a usually-non-palpable posterior tubercle) and no vertebral body — its body was “stolen” by C2 as the dens. C2 (axis) carries the dens projecting superiorly. The dens and the intervertebral discs are remnants of the notochord. The typical C2–C6 vertebrae have bifid (two-pronged) spinous processes that fade by C7. The first large spinous process you palpate coming off the occiput is C2 — it has heavy muscular attachments that stabilize the head during speech (Widboom’s aside: a big C2 SP means “they probably talk a lot”)."
     },
     {
      "t": "p",
      "x": "Slide anatomy walked the bony cervical vertebrae with the distinct shapes of C1 (atlas) and C2 (axis); the intrinsic (deep, near axis, precise) vs extrinsic (far, larger, powerful) muscle balance; the muscles of the neck (trapezius, levator scapulae, splenius cervicis/capitis, semispinalis, longissimus, scalenes, SCM, rotatores, multifidi); the intrinsic flexors (rectus capitis anterior/lateralis in the upper neck and longus capitis/colli below); the atypical cervical vertebrae C1 (no SP or body) and C2 (dens projecting superiorly to articulate with C1); and the typical cervical vertebra with its bifid spinous process, foramen transversarium, and the articular pillars you palpate."
     },
     {
      "t": "q",
      "x": "Which suboccipital muscle has a myodural bridge to the intracranial dura, and why does that make it a headache generator?"
     }
    ]
   },
   {
    "id": "2",
    "statement": "Describe how the cervical muscles affect spinal motion.",
    "blocks": [
     {
      "t": "p",
      "x": "THE UNIFYING THEME. A pattern runs through nearly every cervical muscle: acting bilaterally they flex or extend; acting unilaterally they sidebend and/or rotate. Hold that template and most individual muscles fall into place. The flexors (anterior) flex bilaterally; the posterior extensors extend bilaterally; either group sidebends/rotates when only one side fires."
     },
     {
      "t": "p",
      "x": "SCALENES — the anxious breather. The scalenes are high-yield. Unilaterally they sidebend to the SAME side; bilaterally they flex; and they are accessory muscles of respiration — anterior and middle elevate the 1st rib, posterior elevates the 2nd rib. The classic patient “lives in their head” (stressed/anxious), breathes with the neck instead of the diaphragm, and develops tight scalenes → brachial-plexus symptoms, numbness/tingling especially in digits 4–5. Find them just posterior to the SCM: line your fingers up behind the SCM and you are on anterior, then middle, then posterior scalene. The fix is to teach diaphragmatic breathing and treat ribs, thoracics, scalenes, and cervicals."
     },
     {
      "t": "cq",
      "x": "Scalenes: unilateral → ipsilateral sidebend; bilateral → flexion; accessory respiration (ant/mid → 1st rib, post → 2nd rib). (scalene actions)"
     },
     {
      "t": "p",
      "x": "SCM — the counterintuitive one. The sternocleidomastoid (sterno- + cleido-/clavicle + mastoid) sidebends ipsilaterally but rotates CONTRALATERALLY — picture bringing the mastoid toward the opposite sternoclavicular joint. Bilaterally it flexes (or protracts the head, or extends an already-extended neck). It shares the spinal accessory nerve with the trapezius. Both SCM and trap can refer pain into the head (temporal/peri-orbital), so a “headache” around the eye is frequently the neck."
     },
     {
      "t": "p",
      "x": "THE ROTATION-PAIN RULE. Widboom’s clinical shortcut: semispinalis pain presents as pain turning the OPPOSITE way — pain on turning left points to the right semispinalis. Rotatory complaints also implicate the AA, the big rotatory joint. Longissimus capitis is more of a sidebender (and showed up as clinically relevant in his headache case). The deep longus colli is the major cervical flexor spanning the whole cervical spine — hard to palpate, but reachable indirectly (counterstrain/FPR in flexion, then stretched in extension); it is implicated in post-anesthesia vertigo from over-stretch during intubation."
     },
     {
      "t": "p",
      "x": "Slide muscle map: scalenes (unilateral ipsilateral sidebend, bilateral flexion, accessory respiration; ant/mid → 1st rib, post → 2nd rib); sternocleidomastoid (ipsilateral sidebend + CONTRALATERAL rotation, bilateral flexion, shares CN XI with trapezius); SCM & trapezius pain referral into the head (temporal/peri-orbital) so a “headache” around the eye is often the neck; the extrinsic cervical extensors with upper trapezius and levator scapulae as the big ones; and longissimus capitis (bilateral extension, unilateral flexion/sidebending to the same side), relevant in Widboom’s headache case."
     },
     {
      "t": "q",
      "x": "A patient has pain only when turning the head to the left. Which muscle is the likely culprit, and what is the general rule for muscle pain with rotation?"
     }
    ]
   },
   {
    "id": "4",
    "statement": "Evaluate cervical movement patterns and make a somatic-dysfunction diagnosis.",
    "blocks": [
     {
      "t": "p",
      "x": "THREE STYLES OF MECHANICS. This is the heart of the lecture, and the cervical spine forces you to learn three diagnosis styles instead of one. They are modified Fryette — similar to thoracic/lumbar triads but not identical. The carryover trap Widboom flagged twice on the slide: the cervical spine does NOT follow Fryette’s Principles 1 & 2. Coupled motion (sidebending + rotation together) still changes with the AP curve, but the coupling direction follows region-specific rules."
     },
     {
      "t": "p",
      "x": "OA — Opposite Always. The occipitoatlantal joint (occiput on C1, called C0–C1). Primary motion is flexion/extension (the nodding of the head, as the occipital condyles articulate with C1). Sidebending and rotation are ALWAYS opposite, regardless of flexion, extension, or neutral — “OA = Opposite Always.” So an OA can be sidebent left/rotated right whether neutral, flexed, or extended; it is never same-side. Most OAs are flexed or extended rather than neutral."
     },
     {
      "t": "p",
      "x": "AA — rotation, ~50%. The atlantoaxial joint (C1 on C2). Primary motion is rotation, and the AA supplies about 50% of all cervical rotation; sidebending there is extremely limited. Full head flexion isolates AA rotation — lock everything else by flexing, then whatever rotation remains is the AA. An AA diagnosis records rotation only (no AP curve, no sidebending)."
     },
     {
      "t": "p",
      "x": "C2–C7 — same side. The typical segments couple sidebending and rotation to the SAME side, regardless of AP curve (a “modified type 2” behavior). Examples: NSrRr, ESrRr, FSrRr. Within the block, upper segments (C2–C4) favor rotation and lower (C5–C7) favor sidebending — you can feel this: turning the head is mostly upper-cervical, sidebending mostly lower."
     },
     {
      "t": "cq",
      "x": "C2–C7: sidebending & rotation SAME side; C2–C4 rotate more, C5–C7 sidebend more. (typical-segment coupling)"
     },
     {
      "t": "p",
      "x": "TRANSLATION = SIDEBENDING. To test C2–C7 you do not press the transverse processes for rotation — you press the articular pillars from the side to induce sidebending, a motion called translation. The practical rule: push left → sidebend left; push right → sidebend right. The exam complicates this with the words “translation” and “restriction.” Convert every stem to plain sidebending: limited translation right = restriction when you push from the left = restricted LEFT sidebending = the segment lives in RIGHT sidebending. Sidebending is opposite the restriction."
     },
     {
      "t": "p",
      "x": "THE 3-PART DIAGNOSIS — worked. A written diagnosis has three parts: Type (AP curve — N/F/E), SR (sidebending + rotation, coupled by region), and direction of freedom. Walk the two canonical examples. (1) C3, limited translation right, improves in BOTH flexion and extension: improves both ways → neutral; limited translation right → lives in right sidebending; C2–C7 couples same-side → rotated right → C3 NSRRR. (2) OA, limited translation right, improves in EXTENSION not flexion: → extended; lives in right sidebending; OA couples opposite → rotated left → OA ESRRL. For the AA, full-flex then rotate each way and name the freedom: free left/restricted right → AA rotated left."
     },
     {
      "t": "p",
      "x": "Facet orientation: cervical superior facets face Backward, Upward, Medial (BUM) and this determines preferred cervical motion — the bumble-BUM mnemonic, with thoracic facets Backward-Upward-Lateral (BUL). Motion testing/translation: push left induces LEFT sidebending; the exam calls this “translation,” but think push-left-sidebend-left. Nomenclature has 3 parts — Type (N/F/E AP curve), SR (sidebending + rotation), direction of freedom — and the AA records rotation only."
     },
     {
      "t": "key",
      "x": "Three modified rules, memorized cold: OA = Opposite Always, AA = rotation (~50%, full-flex isolates), C2–C7 = same side. The cervical spine does NOT follow Fryette 1 & 2."
     },
     {
      "t": "confusion",
      "x": "Translation vs restriction: limited translation right means restricted LEFT sidebending, so the segment LIVES in RIGHT sidebending. Always convert the wording to plain sidebending before naming."
     },
     {
      "t": "cue",
      "x": "Build the diagnosis in order: AP curve from flexion/extension behavior (improves both → neutral) → sidebending from the translation restriction → rotation from the coupling rule (OA opposite, C2–C7 same)."
     },
     {
      "t": "q",
      "x": "A patient has limited translation to the right at the OA that improves in extension. Walk the rule to the full three-part diagnosis."
     }
    ]
   }
  ]
 },
 "6": {
  "prof": "",
  "tldr": "Cervical radiculopathy is a nerve-ROOT (LMN) problem — C6–C7→C7 most common; diagnosed clinically and confirmed by needle EMG (gold standard); treated conservatively for 6–12 weeks UNLESS myelopathy/progressive deficit forces urgent referral.",
  "mustKnows": [
   "Needle EMG = gold standard. Barry repeated it (“I repeat that…”): needle EMG/NCS is the gold-standard diagnostic test for radiculopathy — the only tool that assesses the physiological integrity of the nerve roots and LOCALIZES the lesion. The syrinx case proves it: a cervical MRI showed a syrinx, but EMG localized the real problem to median-nerve compression at the wrist (“he needed a hand surgeon, not a neurosurgeon”).",
   "C6–C7 herniation → C7 root, most common. The single most common cervical disc herniation is at C6–C7, producing C7-root symptoms (Barry restated it 3+ times). Compressive etiologies dominate — disc herniation, cervical spondylosis (degenerative spurring), stenosis. Mean age ~48; M:F ~1.7:1.",
   "Radiculopathy (LMN) vs myelopathy (mixed). Radiculopathy = a lower-motor-neuron problem (hyporeflexia at the involved level, weakness/numbness/tingling). Myelopathy = cord compression, a MIXED UMN/LMN picture — hyporeflexia AT the level plus hyperreflexia BELOW, pathologic reflexes (Hoffmann, Babinski), Lhermitte, broad-based gait. Myelopathy is the more serious diagnosis.",
   "The C5–T1 nerve-root chart — memorize it. Barry flagged the chart figure as “extremely important… to memorize.” C5: deltoid/biceps, biceps reflex, lateral arm. C6: wrist extensors, brachioradialis reflex, thumb/index. C7: finger extensors, triceps reflex, middle finger. C8: finger flexors, no reflex, ulnar 4th–5th digits. T1: hand interossei, no reflex, medial arm. (Myotomes for the rest of the body are NOT tested.)",
   "Special tests — Spurling worsens, distraction relieves. Spurling’s compression test WORSENS radicular symptoms (narrows the foramen); cervical distraction IMPROVES them (opens it); Valsalva worsens with a herniation/mass. Pain is most intense PROXIMALLY (neck); paresthesias are more noticeable DISTALLY; the radiating pain is “shooting/electrical.”",
   "Myelopathy red flags — Hoffmann & Lhermitte. Hoffmann’s sign (flick the middle-finger nail → index/thumb flexion) is the UE analog of Babinski — a UMN finding Barry is “more concerned about than anything.” Lhermitte’s phenomenon is a shock-like paresthesia with neck flexion. Reflex grade 4 = clonus = always abnormal.",
   "Treatment — conservative first, but myelopathy is urgent. Uncomplicated radiculopathy: conservative care for 6–12 weeks (gentle OMT — soft tissue, MFR, FPR; AVOID HVLA in the radiculopathy region; traction; short analgesics/steroids/collar acutely) before surgical referral. But progressive deficit or myelopathy SKIPS the wait — urgent MRI + referral. AC7 counterstrain position: flex, sidebend toward, rotate away."
  ],
  "los": [
   {
    "id": "2",
    "statement": "Identify the signs and symptoms of cervical radiculopathy.",
    "blocks": [
     {
      "t": "p",
      "x": "THE SYMPTOM PATTERN. The cardinal symptom is pain, and its geography matters: pain is most intense PROXIMALLY — neck pain is the most common complaint — then refers in a dermatomal pattern, while paresthesias (tingling/numbness) are more noticeable DISTALLY, radiating down the arm on the side of the compressed root. The radiating pain is classically “shooting” or “electrical,” and it worsens with coughing or Valsalva. Decreased motor function, and eventually muscle atrophy if prolonged, plus deep-tendon-reflex changes complete the picture."
     },
     {
      "t": "cq",
      "x": "Radiculopathy pain is most intense proximally (neck); paresthesias are distal; radiation is shooting/electrical, worse with Valsalva."
     },
     {
      "t": "p",
      "x": "REFLEX GRADING — the 2-neuron arc. A normal deep-tendon reflex is a two-neuron arc: a brisk tendon tap stretches the muscle spindle, the afferent neuron (cell body in the dorsal root ganglion) synapses on the alpha motor neuron in the anterior horn, and the muscle contracts. By convention reflexes are graded 0 = no response, 1 = slight but present, 2 = brisk/normal, 3 = very brisk (may or may not be normal), 4 = a tap elicits clonus — sustained jerking, always abnormal. Hyporeflexia points to an interruption of the arc itself (a lower-motor / root problem); hyperreflexia and clonus point to loss of descending corticospinal control (an upper-motor / suprasegmental lesion)."
     },
     {
      "t": "p",
      "x": "THE C5–T1 NERVE-ROOT CHART — memorize it. Barry flagged the chart figure as “extremely important… to memorize, to understand,” and it threads through the whole lecture. Walk it root by root (motor / reflex / sensation). C5 (disc C4–C5): deltoid & biceps / biceps reflex / lateral arm. C6 (disc C5–C6): wrist extensors / brachioradialis reflex / thumb & index. C7 (disc C6–C7, the MC): finger extensors / triceps reflex / middle finger. C8 (below C7): finger flexors / no reliable reflex / ulnar 4th–5th digits. T1: hand interossei (finger abduction) / no reflex / medial arm. Note the cervical roots exit ABOVE their like-numbered vertebra through C7; C8 fills the gap below C7. And note: Barry will not test full-body myotomes — just this cervical chart."
     },
     {
      "t": "cq",
      "x": "C5 deltoid/biceps; C6 wrist-ext/brachioradialis/thumb; C7 finger-ext/triceps/middle; C8 finger-flex/ulnar 4–5; T1 interossei/medial arm."
     },
     {
      "t": "p",
      "x": "Root-by-root signatures (disc level in parentheses). C5 — motor deltoid/biceps; biceps reflex; sensation lateral arm (C4–C5). C6 — motor wrist extensors; brachioradialis reflex; sensation thumb/index (C5–C6). C7 — motor finger extensors; triceps reflex; sensation middle finger (C6–C7, most common). C8 — motor finger flexors; no reliable reflex; sensation ulnar 4th–5th digits. T1 — motor hand interossei (finger abduction); no reflex; sensation medial arm / inner elbow. Pain is most intense proximally (neck), referred dermatomally; paresthesias are more noticeable distally; the radiation is “shooting/electrical,” worse with cough/Valsalva."
     },
     {
      "t": "key",
      "x": "The C5–T1 chart is the single highest-yield figure: each root has a motor, a reflex, and a sensation signature. A one-sided discrepancy on quick dermatomal testing localizes the pinched root."
     },
     {
      "t": "pearl",
      "x": "C7 is the one to anchor first — it is the MOST COMMON radiculopathy (C6–C7 disc): finger extensors, triceps reflex, middle finger."
     },
     {
      "t": "confusion",
      "x": "Cervical roots exit ABOVE their like-numbered vertebra (through C7); C8 fills the gap below C7, and thoracic roots exit below their vertebra. Do not off-by-one the level."
     }
    ]
   },
   {
    "id": "1",
    "statement": "Identify selected etiologies of cervical radiculopathy.",
    "blocks": [
     {
      "t": "p",
      "x": "WHAT IS A RADICULOPATHY. Stedman’s defines radiculopathy as a disease of the spinal nerve ROOTS — and that root-level location is the whole frame for this lecture. It is not spinal-cord compression (that is myelopathy) and not a peripheral-nerve problem (that is entrapment); it is compression of the anterior and posterior nerve roots as they form the spinal nerve and exit the neural foramen. Epidemiology: mean age ~48, male-to-female ratio about 1.7:1."
     },
     {
      "t": "p",
      "x": "COMPRESSIVE ETIOLOGIES — the big bucket. The etiologies you care about most are compressive. The headline fact, which Barry stated three-plus times (the transcript literally repeats the sentence): the most common disc herniation is at C6–C7, producing symptoms at the C7 nerve root. Degenerative disease with spurring — cervical spondylosis — and spinal stenosis round out the compressive causes."
     },
     {
      "t": "p",
      "x": "NON-DEGENERATIVE ETIOLOGIES. Do not forget the non-degenerative bucket: tumor, systemic infection (and processes like herpes zoster or Lyme with nerve-root involvement), granulomatous infiltration, and demyelinating processes. A history of fever, chills, unexplained weight loss, immunosuppression, cancer, or IV drug use raises suspicion for these — the red flags that change the workup."
     },
     {
      "t": "p",
      "x": "Summary — a radiculopathy is a disease of the spinal nerve roots (root compression, not cord, not peripheral); mean age ~48, M:F ~1.7:1. Etiologies divide into compressive (disc herniation, MC at C6–C7→C7; cervical spondylosis; stenosis) versus non-degenerative (tumor, infection, systemic disease)."
     }
    ]
   },
   {
    "id": "4",
    "statement": "Describe the physical examination and special tests for cervical radiculopathy.",
    "blocks": [
     {
      "t": "p",
      "x": "THE CORE EXAM. Build the exam around the chart: muscle-strength testing (know which muscle maps to which root), sensory testing by pinprick and light touch along the dermatomes (Barry’s bedside trick: “tell me if this side feels the same or different” while stroking both arms equally — patients surprise themselves by noticing a dull 5th digit), and deep tendon reflexes (a one-sided diminished reflex localizes the root)."
     },
     {
      "t": "p",
      "x": "SPECIAL TESTS — Spurling, distraction, Valsalva. Spurling’s compression test (extension + sidebending toward the symptomatic side with axial load) WORSENS radicular symptoms by narrowing the neural foramen — a positive test strongly suggests foraminal compression. Cervical distraction does the opposite: it IMPROVES symptoms by opening the foramen and giving the nerve room. The Valsalva maneuver worsens symptoms when a mass-occupying lesion or herniation is present (raised intraspinal pressure)."
     }
    ]
   }
  ]
 },
 "7": {
  "prof": "Dr. Eldemire",
  "tldr": "Treat every pulmonary disease through three levers — structure, autonomics (T2–T7 sympathetics, vagus for parasympathetics), and lymphatics — and for lymphatic work, always open the thoracic inlet first and never pump until the patient is afebrile.",
  "mustKnows": [
   "Sympathetic = bronchodilation; parasympathetic (vagus) = bronchoconstriction + thins secretions. Quick bronchodilation → stimulate sympathetics (acute asthma). But prolonged sympathetic tone causes vasoconstriction + thickened secretions, which is why chronic hypersympathetic tone harms the lungs. To thin a productive cough's secretions, raise vagal tone.",
   "Pulmonary sympathetics = T2–T7; parasympathetics = vagus (CN X) near the OA/C1–C3. Treat T2–T7 (rib-raising, paraspinal inhibition) to modulate sympathetics; treat the OA, C2–C3, cranial base to normalize vagal tone, because that's where the vagus exits the skull.",
   "Open the thoracic inlet FIRST — always, for any lymphatic treatment. Eldemire called this an easy Level 1 board item: the stem lists rib-raising, Chapman, a pump… the first step is always open the thoracic inlet (the drainage outlet) before you pump anything toward it.",
   "NO lymphatic pump techniques until the patient is afebrile. Pumping while febrile risks driving cytokines and bacteria through the body before antibiotics cut the load. The staged regimen adds pumps only at stage III (>24 h fever-free). Gentle work (inlet MFR, light rib-raising, paraspinal inhibition) is fine while febrile.",
   "Rib-raising is dose-dependent: >90 s DECREASES sympathetics (pneumonia); short bursts STIMULATE them (acute asthma). Same technique, opposite autonomic effect by duration. Pneumonia is a hypersympathetic state → long rib-raising to calm it; an acute asthma attack needs bronchodilation → short rib-raising.",
   "Most of the lungs drain to the RIGHT lymphatic duct — even part of the left lung. Lymphatic OMT drains waste and delivers immune cells; research shows it lowers lung bacterial counts and shortens IV-antibiotic duration (it augments antibiotics, it doesn't replace them).",
   "Pneumonia's rapid-shallow breathing = two reflexes. The Hering-Breuer reflex can't tell air from fluid, so the fluid-filled lung trips it and limits diaphragm excursion (shallow); the O2-sensing carotid body then drives the rate up (rapid). The phrenic nerve (C3-4-5) ties diaphragm dysfunction to the lower six ribs + thoracolumbar junction.",
   "MOPSE: OMT + antibiotics beat antibiotics alone on FOUR endpoints — length of stay, IV-antibiotic duration, respiratory failure (ventilator), and mortality. The three-pillar framing for every pulmonary disease: structure (ribs/thorax), autonomics (T2–T7), lymphatics."
  ],
  "los": [
   {
    "id": "1",
    "statement": "Explain the effects of the sympathetic and parasympathetic divisions of the ANS on the respiratory system.",
    "blocks": [
     {
      "t": "p",
      "x": "Eldemire framed the whole lecture around treating the lung through the autonomics, and the single most useful idea is a two-column ledger of what each division does — plus the time-dependence that flips sympathetics from helpful to harmful. The lungs receive sympathetic fibers from T2–T7 and parasympathetic fibers from the vagus nerve (CN X). Get the ledger straight and most of the treatment decisions fall out of it."
     },
     {
      "t": "cq",
      "x": "Pulmonary sympathetics = T2–T7; parasympathetics = vagus (CN X)."
     },
     {
      "t": "p",
      "x": "The time-dependence trap: sympathetic stimulation bronchodilates — great when you need an airway open now. But here's where the exam sets you up: prolonged sympathetic tone causes vasoconstriction, cutting blood flow to the lung, and thickens secretions. So in a chronic disease (COPD, resolving pneumonia) the sympathetic story is the villain — a self-reinforcing cycle of facilitation → sympathetic tone → poor perfusion → poor healing. The same \"calm the sympathetics\" goal that's right for pneumonia is exactly wrong for an acute asthma attack, where you briefly want the bronchodilation."
     },
     {
      "t": "cq",
      "x": "Prolonged sympathetic tone → vasoconstriction + decreased lung perfusion + thickened secretions (the chronic-disease villain)."
     },
     {
      "t": "p",
      "x": "Functional anatomy: sympathetic supply T2–T7, parasympathetic via the vagus (CN X), lungs drain mainly to the right lymphatic duct. Increased sympathetic (T2–T7) tone → bronchodilation, vasoconstriction of vessels, and thickened secretions over time. The vagus exits near the OA and passes by C1–C3; increased parasympathetic tone bronchoconstricts and thins secretions."
     },
     {
      "t": "p",
      "x": "Where to treat each division: the anatomy hands you the targets. To modulate sympathetics, work the T2–T7 paraspinals (rib-raising, paraspinal inhibition). To normalize vagal tone, treat the OA, C2–C3, and cranial base — the vagus exits the skull at the jugular foramen and runs in close relation to the upper cervicals, so OA decompression and upper-cervical work are the parasympathetic lever. Thinning a productive cough's secretions is a parasympathetic job; quick bronchodilation is a sympathetic one."
     },
     {
      "t": "p",
      "x": "Chapman points — the consistent sympathetic lever. There are Chapman points for the bronchial tree and the upper and lower lung (anterior near the sternum in the 2nd–3rd intercostal spaces; posterior between the spinous and transverse processes of T2–T5). The key fact Eldemire stressed: treating a Chapman point always decreases sympathetic activity to the related viscera — regardless of whether the cough is productive or dry. That makes them most useful in chronic disease, where breaking the hypersympathetic cycle is the whole game. (Chapman points are admittedly rare, but when present, treating them reliably calms sympathetics.)"
     },
     {
      "t": "cq",
      "x": "Treating a Chapman point always decreases sympathetic activity to the related viscera — regardless of symptom pattern."
     },
     {
      "t": "p",
      "x": "The viscerosomatic reflex: a visceral afferent drives cord facilitation at the related segment, producing somatic tissue-texture change there (and feeding back to the organ and its vasculature)."
     },
     {
      "t": "key",
      "x": "Two-column ledger: SNS = bronchodilate (then vasoconstrict + thicken); PNS/vagus = bronchoconstrict + thin secretions."
     },
     {
      "t": "confusion",
      "x": "Sympathetic is good ACUTELY (bronchodilation) but bad CHRONICALLY (vasoconstriction). Same input, opposite value by timeframe."
     },
     {
      "t": "cue",
      "x": "Productive cough → raise vagal tone (OA/C2–C3) to thin secretions. Chronic disease → calm sympathetics (T2–T7, Chapman)."
     },
     {
      "t": "q",
      "x": "Your patient needs quick bronchodilation in an acute attack but also has thick secretions you want to thin. Which autonomic input does each goal call for, and how can the SAME goal (calming sympathetics) be right for pneumonia but wrong for an acute asthma attack?"
     }
    ]
   },
   {
    "id": "3",
    "statement": "Describe the physiological response to pulmonary infection.",
    "blocks": [
     {
      "t": "p",
      "x": "Pneumonia's physiology is a chain you can reason through rather than memorize: infection → inflammation, exudate, and falling surfactant → a stiff, fluid-filled lung → two reflexes that together produce the bedside picture of rapid, shallow breathing. Layer the autonomic cycle (facilitated T2–T7 segments → sympathetic tone → vasoconstriction) on top, and you have both why the patient looks the way they do and where OMT intervenes."
     },
     {
      "t": "cq",
      "x": "Pneumonia pathogenesis: inflammation + exudate + ↓ surfactant → congestion and compromised gas exchange."
     },
     {
      "t": "p",
      "x": "The Hering-Breuer reflex — the shallow half. Airway stretch afferents normally limit over-inflation, but they cannot distinguish a lung filled with air from one filled with fluid. In pneumonia the fluid-filled lung trips the reflex, which signals \"full\" and limits diaphragm excursion — so the patient breathes shallowly. It's classically described in babies but happens in adults with pneumonia. This is the half of the pattern most students miss the mechanism for."
     },
     {
      "t": "p",
      "x": "The carotid body — the rapid half. Shallow breathing means less oxygenation; the O2-responsive carotid body senses the hypoxia and ramps the respiratory rate up to compensate. Put the two reflexes together and you get the classic sick-pneumonia bedside finding: rapid and shallow — Hering-Breuer caps the depth, the carotid body drives the rate. Meanwhile the sympathetic side runs in parallel: visceral afferents create facilitated segments at T2–T7, and prolonged tone → vasoconstriction → the painful cycle."
     },
     {
      "t": "p",
      "x": "The phrenic nerve and the diaphragm's MSK footprint. The phrenic nerve (C3-C4-C5) drives the diaphragm, so diaphragmatic stress reaches outward to the lower six ribs and the thoracolumbar junction — the MSK regions you treat (T1–T6 paraspinals show increased tone). A flattened, poorly moving diaphragm also kills the thoracoabdominal vacuum that pumps lymph, feeding the congestion cycle. The same C3-C4-C5 link explains hiccups (singultus): the diaphragm spasming out of sync, treatable by addressing the upper cervical spine — there are case reports of OMT and even C3-C5 nerve-root injections curing refractory hiccups."
     },
     {
      "t": "cq",
      "x": "Rapid-shallow breathing in pneumonia = Hering-Breuer (shallow) + carotid body (rapid)."
     },
     {
      "t": "key",
      "x": "Rapid-shallow = TWO reflexes: Hering-Breuer limits depth (can't tell air from fluid), carotid body drives rate (senses hypoxia)."
     },
     {
      "t": "pearl",
      "x": "C3-4-5 keeps the diaphragm alive — and treating C3–C5 can cure refractory hiccups (singultus), an OMT party trick with real case reports."
     },
     {
      "t": "cue",
      "x": "Diaphragm stress → treat the lower six ribs + thoracolumbar junction; a flat diaphragm kills the lymphatic vacuum."
     },
     {
      "t": "q",
      "x": "A pneumonia patient breathes rapidly AND shallowly. Name the two reflexes responsible — one for each half of that pattern — and explain why the diaphragm gets implicated through the phrenic nerve."
     }
    ]
   },
   {
    "id": "4",
    "statement": "Formulate basic treatment approaches for patients with selected pulmonary disorders.",
    "blocks": [
     {
      "t": "p",
      "x": "The frame: every pulmonary disease is treated through three levers — structure (ribs, thorax, diaphragm), autonomics (T2–T7 sympathetics; vagus for parasympathetics), and lymphatics — always in conjunction with medical therapy, never instead of it. Two order-of-operations rules dominate the board questions and sit on top of everything below: open the thoracic inlet FIRST for any lymphatic work, and do not run pump techniques until the patient is afebrile."
     },
     {
      "t": "p",
      "x": "Pneumonia — goals and specific OMT. The goals are to improve venous and lymphatic flow, improve arterial circulation to carry immune products in, ease removal of accumulated secretions, and decrease the work of breathing — all of which reduce to one phrase Eldemire repeated: decrease sympathetic hyperactivity. The specific menu: rib-raising (here, the long version), Chapman points to drop sympathetic tone, open the thoracic inlet first, then dome the diaphragm and treat C3–C5 plus the upper cervicals/cranial base to raise vagal tone and reduce the work of breathing. Pumps are reserved for the afebrile stage."
     },
     {
      "t": "cq",
      "x": "Pneumonia's unifying goal = decrease sympathetic hyperactivity (improve venous/lymphatic/arterial flow + ease secretion removal)."
     },
     {
      "t": "p",
      "x": "MOPSE and the staged regimen. The Multicenter Osteopathic Pneumonia Study in the Elderly (~50+, multi-hospital) compared OMT + antibiotics against antibiotics alone and found significant reductions in four endpoints: length of stay, IV-antibiotic duration, respiratory failure (ventilator), and mortality. Because it spanned hospitals, treatment was protocolized by stage. Stage I (newly admitted, febrile): gentle only — MFR to the thoracic inlet, light rib-raising, paraspinal inhibition down to ~C5. Stage II (fever waning, productive cough): add time and work the viscerosomatic levels down the thoracic spine. Stage III (afebrile >24 h): now add the pumps, more rib-raising, and lower-spine work (even upper-lumbar helps the diaphragm)."
     },
     {
      "t": "p",
      "x": "COPD and asthma. COPD gives a flattened, hyperinflated diaphragm on CXR; OMT and spinal manipulation improve lung-function measures, the six-minute walk test, and the COPD Assessment Test, and the best medical adjunct is a pulmonary rehabilitation program with exercise — OMT improves exercise capacity, which makes patients less hesitant to exercise. Asthma splits by acuity: in an acute attack the patient is obstructed, so you want bronchodilation → sympathetic stimulation via short (<90 s) rib-raising, HVLA, ME, or MFR to the thoracic spine. Maintenance asthma uses the standard structure/autonomics/lymphatics approach; RCTs (including a 2021 pediatric trial) show fewer/less-severe attacks, shorter stays, and improved PFTs."
     },
     {
      "t": "cq",
      "x": "Acute asthma → want bronchodilation → stimulate sympathetics with short rib-raising (the inverse of pneumonia's >90 s)."
     },
     {
      "t": "p",
      "x": "Atelectasis. Post-operative alveolar collapse (especially after upper-abdominal or cardiac surgery, where pain limits diaphragm movement) is classically prevented with an incentive spirometer — but only if used correctly: a slow inhale, held a few seconds, 10–15 times per hour (Eldemire's patient-education trick: \"every commercial break, do it five times\"). A cholecystectomy study compared thoracic lymphatic pump (TLP) to incentive spirometry: atelectasis rates were similar, but the TLP group had better PFTs and earlier recovery toward pre-op FVC and FEV1. The takeaway: use both. (The same OMT-after-sternotomy logic improves pain, length of stay, and time to cardiac rehab.)"
     },
     {
      "t": "trap",
      "x": "Open the thoracic inlet FIRST; no pumps until afebrile. These two order/contraindication rules win most board questions."
     },
     {
      "t": "confusion",
      "x": "Rib-raising flips by duration: >90 s calms sympathetics (pneumonia); short stimulates them (acute asthma)."
     },
     {
      "t": "key",
      "x": "MOPSE's four wins: length of stay, IV-antibiotic duration, ventilator/respiratory failure, mortality. Stage pumps in only when afebrile."
     },
     {
      "t": "q",
      "x": "A pneumonia patient is admitted febrile at 102°F. Which lymphatic step comes FIRST, which technique is contraindicated until afebrile, and how long do you rib-raise to calm the sympathetics?"
     }
    ]
   }
  ]
 },
 "8": {
  "prof": "",
  "tldr": "Read the heart through laterality (RIGHT = SA node, LEFT = AV node, for both autonomic divisions), localize MI autonomics (anterior = sympathetic T1-T6, inferior = vagal C2/cranial base), and remember every cardiac OMT waits until the patient is stabilized after emergent medical care.",
  "mustKnows": [
   "The four laterality rules are the testable core. RIGHT structures reach the SA node; LEFT structures reach the AV node - for BOTH divisions. So: R-hypersympathetic to SVTs; L-hypersympathetic to ectopic foci / VF; R-hyperparasympathetic to sinus bradyarrhythmias; L-hyperparasympathetic to AV blocks.",
   "Cardiac sympathetics = T1-T6; parasympathetics = the vagus. Increased sympathetic tone raises rate, contractility, and cardiac output (and, sustained, coronary vasospasm). Increased vagal tone lowers rate and contractility. Peripheral vessels and kidneys/adrenals sit at T10-L2 - a different range from the heart.",
   "The MI autonomic split: anterior = sympathetic, inferior = vagal. An anterior infarct shows sympathicotonia at T1-T6 (esp. T2-T3 left) - calm the upper thoracics. An inferior wall infarct shows vagal hyperactivity - treat C2 / cranial base.",
   "ALL cardiac OMT is done AFTER emergent medical treatment and patient stabilization. OMT is an adjunct, never a substitute for or a delay to emergent care. If CPR was performed, treat ribs and sternum with indirect techniques.",
   "MI treatment calms upper-thoracic sympathetic hyperactivity. The goal is to lower the incidence of ectopic foci and VF and remove factors that discourage collateral circulation - via generalized paraspinal inhibition, indirect thoracic-inlet work, and lymphatic/venous return (pectoral traction, redoming the diaphragm) plus cranial/upper-cervical work for vagal tone.",
   "HTN: posterior Chapman adrenal points lower BP and decrease serum aldosterone. HTN OMT also decreases stress, decreases TPR by generalized sympathetic inhibition, and decreases the renal contribution via sympathetic inhibition at T10-L2 - and it can reduce medication requirements.",
   "Lymphatic impairment is a systemic cardiac problem. It reduces collateral circulation and congests cardiac tissue (causing arrhythmias), and is linked to atherosclerosis, HTN, and the edema of CHF. In CHF, lymphatic return can be challenged 3-40x - address T1-T6 sympathetics, optimize respiration, and use lymphatic pump/effleurage."
  ],
  "los": [
   {
    "id": "2",
    "statement": "Explain the effects of the parasympathetic nervous system on the cardiac system.",
    "blocks": [
     {
      "t": "p",
      "x": "Cardiac parasympathetic supply travels by the vagus nerve, and increased vagal tone decreases heart rate and contractility - the mirror image of the sympathetic trio. The same right/left map applies: the right vagus reaches the SA node, the left vagus reaches the AV node. That single fact generates the parasympathetic arrhythmia table."
     },
     {
      "t": "cq",
      "x": "Cardiac parasympathetics travel via the vagus; increased tone leads to decreased heart rate and contractility. Right vagus reaches the SA node, left vagus reaches the AV node."
     },
     {
      "t": "p",
      "x": "Because the right vagus governs the SA node, right hyperparasympathetic activity produces sinus bradyarrhythmias; because the left vagus governs the AV node, left hyperparasympathetic activity produces AV blocks. Line it up against the sympathetic side and the symmetry is the memory key: right is always the SA-node/rate story, left is always the AV-node/conduction story - sympathetic excess speeds those territories up (SVT, VF), parasympathetic excess slows or blocks them (bradyarrhythmia, AV block)."
     },
     {
      "t": "p",
      "x": "Parasympathetic innervation is the vagus - right vagus reaches the SA node, left vagus reaches the AV node; increased tone decreases rate and contractility. Hyperparasympathetic activity on the RIGHT produces sinus bradyarrhythmias (SA-node origin); hyperparasympathetic activity on the LEFT produces AV blocks (AV-node origin)."
     },
     {
      "t": "p",
      "x": "Because the vagus runs through the cervical region, treating the neck can shift autonomic balance toward the parasympathetic side. A study cited in the handout (cervical myofascial release) reported that the technique shifts sympathovagal balance from the sympathetic to the parasympathetic nervous system - evidence that cranial-base and upper-cervical work can normalize vagal tone, which becomes a treatment lever in both inferior-wall MI and arrhythmia care."
     },
     {
      "t": "cq",
      "x": "Cervical myofascial release shifts the sympathovagal balance toward parasympathetic - cranial base / upper cervicals are the vagal-tone lever."
     },
     {
      "t": "key",
      "x": "Parasympathetic: R produces sinus bradyarrhythmias (SA), L produces AV blocks (AV). Same right/left map as sympathetic, slowed down."
     },
     {
      "t": "confusion",
      "x": "Right vs left is the node (SA vs AV); the division sets the direction. Sympathetic speeds; parasympathetic slows/blocks."
     },
     {
      "t": "cue",
      "x": "Want more vagal tone? Treat the cranial base / upper cervicals - the vagus runs through the neck."
     },
     {
      "t": "q",
      "x": "A patient has right-sided vagal excess; another has left-sided vagal excess. Predict each disturbance, and name a cervical technique shown to shift the sympathovagal balance toward parasympathetic."
     }
    ]
   },
   {
    "id": "1",
    "statement": "Explain the effects of the sympathetic nervous system on the cardiac system.",
    "blocks": [
     {
      "t": "p",
      "x": "The cardiac sympathetics arise from T1-T6, with preganglionic fibers running up to the cervical chain ganglia before reaching the heart. The functional effects of raising sympathetic tone are the familiar trio - increased heart rate, increased contractility, and increased cardiac output - and, when tone stays high, coronary vasospasm. The handout also separates the cardiac levels from the peripheral ones: peripheral blood vessels and the kidneys/adrenals are driven from T10-L2, which matters when you treat hypertension."
     },
     {
      "t": "cq",
      "x": "Cardiac sympathetics = T1-T6; peripheral vessels and kidneys/adrenals = T10-L2. Increased cardiac tone leads to increased rate, increased contractility, increased output."
     },
     {
      "t": "p",
      "x": "The single most testable idea in this lecture is a side-of-the-heart map that holds for both autonomic divisions: right-sided fibers reach the SA node, left-sided fibers reach the AV node. On the sympathetic side that means right hypersympathetic activity drives supraventricular tachycardias (SVTs) from the SA node, while left hypersympathetic activity drives ventricular ectopic foci and ventricular fibrillation. Keep 'right = SA = supraventricular, left = AV = ventricular' and you can reconstruct the whole table."
     },
     {
      "t": "p",
      "x": "Cardiac sympathetic innervation T1-T6: right fibers reach the SA node (right deep cardiac plexus); left fibers reach the AV node (left deep cardiac plexus). Peripheral sympathetics: vessels T1-L2, kidneys/adrenals T10-L2; increased tone produces vasoconstriction and increased rate/contractility/output."
     },
     {
      "t": "p",
      "x": "Two more sympathetic consequences round out the LO. Sustained high sympathetic tone can produce coronary vasospasm, reducing perfusion and provoking ischemia even without a fixed stenosis. And in essential hypertension, patients demonstrate vascular and cardiac hyperreactivity to autonomic stimuli; prolonged sympathetic stimulation of the kidneys creates a functional retention of water and salt that elevates blood pressure - the rationale for the renal-level (T10-L2) and adrenal-Chapman treatment you will see under hypertension."
     },
     {
      "t": "cq",
      "x": "Sustained sympathetic tone leads to coronary vasospasm; renal sympathetic stimulation leads to water/salt retention and increased BP."
     },
     {
      "t": "key",
      "x": "Right = SA node = supraventricular; Left = AV node = ventricular. Sympathetic: R drives SVTs, L drives ectopic foci / VF."
     },
     {
      "t": "pearl",
      "x": "Cardiac sympathetics T1-T6; peripheral/renal T10-L2. Do not treat the renal range expecting a direct cardiac-rate effect."
     },
     {
      "t": "cue",
      "x": "Angina without a fixed stenosis plus high sympathetic tone: think coronary vasospasm."
     },
     {
      "t": "q",
      "x": "Two cardiac patients have hypersympathetic activity - one right-sided, one left-sided. Predict the arrhythmia each is prone to, and name the spinal levels you would treat to calm cardiac sympathetics."
     }
    ]
   },
   {
    "id": "3",
    "statement": "Explain the effects of the lymphatic system on the cardiac system.",
    "blocks": [
     {
      "t": "p",
      "x": "The lymphatic lever on the heart is about drainage - clearing fluid and metabolic waste from cardiac tissue and supporting the collateral circulation. When that drainage is impaired, the consequences are both local and systemic, which is why a lecture on the cardiac patient bothers with the lymphatics at all: it is a system-wide contributor, not just a cause of swollen ankles."
     },
     {
      "t": "cq",
      "x": "Impaired cardiac lymphatic drainage leads to reduced collateral circulation, increased ischemia/infection morbidity, and arrhythmias from cardiac-tissue congestion."
     },
     {
      "t": "p",
      "x": "Three direct consequences: reduced collateral circulation; increased morbidity and mortality from ischemia and infection; and congestion of cardiac tissue that produces arrhythmias. The lymphatics also have a broader systemic footprint - they are linked to the pathogenesis of atherosclerosis, the development of hypertension, and the fluid overload of congestive heart failure (pulmonary edema, ascites, peripheral edema), along with the electrolyte imbalances that worsen CHF. Treating lymphatic return therefore reaches well beyond simple edema control."
     },
     {
      "t": "key",
      "x": "Impaired cardiac lymph leads to decreased collateral circulation plus congestion-driven arrhythmias - a systemic contributor, not just edema."
     },
     {
      "t": "pearl",
      "x": "Lymphatic dysfunction threads into atherosclerosis, HTN, and CHF - the same three diseases LO 4 treats."
     },
     {
      "t": "cue",
      "x": "Improve lymphatic return (pump, effleurage, redoming the diaphragm) as part of CHF and post-MI care, not as an afterthought."
     },
     {
      "t": "q",
      "x": "Cardiac lymphatic drainage becomes impaired. List the direct cardiac consequences and the three systemic conditions the handout ties to lymphatic dysfunction."
     }
    ]
   },
   {
    "id": "4",
    "statement": "Formulate basic treatment approaches for patients with common cardiac diseases.",
    "blocks": [
     {
      "t": "p",
      "x": "Before any disease-specific detail, one rule dominates every cardiac scenario: all OMT is performed after emergent medical treatment and once the patient is stabilized. OMT is an adjunct that enhances recovery - it never substitutes for or delays emergent care. With that fixed, the four diseases each have a recognizable autonomic-plus-lymphatic signature you treat through."
     },
     {
      "t": "p",
      "x": "Most patients seen within 30 minutes of an acute MI show autonomic disturbance, and the pattern depends on the wall: an anterior infarct produces sympathicotonia in the upper thoracics T1-T6, especially T2-T3 on the left, while an inferior wall infarct produces vagal hyperactivity addressed at C2 and the cranial base. Once stabilized, treatment aimed at the upper thoracics calms sympathetic hyperactivity - lowering the incidence of ectopic foci and VF and removing factors that discourage collateral circulation. The toolkit is gentle: generalized paraspinal inhibition, indirect thoracic-inlet work, and if CPR was performed, ribs and sternum treated with indirect techniques. Lymphatic and venous return (pectoral traction, redoming the diaphragm) plus cranial/upper-cervical work for vagal tone round it out."
     },
     {
      "t": "cq",
      "x": "MI OMT calms upper-thoracic sympathetic hyperactivity, which lowers ectopic-foci/VF risk; post-CPR, treat ribs/sternum with indirect technique."
     },
     {
      "t": "p",
      "x": "OMT benefits HTN through several levers: it decreases stress, decreases total peripheral resistance by generalized sympathetic inhibition, and decreases the renal contribution by sympathetic inhibition at T10-L2. The single most testable item is the posterior Chapman reflex points for the adrenal glands: treating them has been shown to lower BP and decrease serum aldosterone. The practical payoff is that OMT can decrease medication requirements, with less potential for side effects and drug-drug interactions."
     },
     {
      "t": "p",
      "x": "In congestive heart failure, lymphatic return can be challenged 3-40 times normal, so the approach is to address sympathetics at T1-T6, optimize respiratory function to improve venous and lymphatic return, and apply lymphatic pump techniques and effleurage. For arrhythmias, the strategy is to decrease segmental facilitation modulating sympathetic input, treat the cranial base and upper cervicals to normalize vagal tone, and address postural factors - including the right pectoralis major trigger point, which is specifically listed as a driver of SVT (and recurs on the arrhythmias slide as corroboration)."
     },
     {
      "t": "cq",
      "x": "CHF: address T1-T6 sympathetics, optimize respiration, and use lymphatic pump/effleurage (return challenged 3-40x)."
     },
     {
      "t": "trap",
      "x": "Stabilize first. ALL cardiac OMT waits until emergent medical treatment is done and the patient is stable - never a substitute or delay."
     },
     {
      "t": "confusion",
      "x": "Anterior MI = sympathetic (T1-T6, calm it); inferior MI = vagal (C2/cranial base). The wall sets the autonomic target."
     },
     {
      "t": "key",
      "x": "HTN = posterior Chapman adrenal points (lower BP, lower aldosterone) plus renal T10-L2; CHF = T1-T6 plus lymphatic pump (return up to 3-40x)."
     },
     {
      "t": "q",
      "x": "A patient is in the first 30 minutes of an anterior MI. When can OMT begin, what autonomic target does it address, and how does that target differ for an inferior wall infarct?"
     }
    ]
   }
  ]
 },
 "9": {
  "prof": "",
  "tldr": "The cumulative 10 are pelvis/sacrum/lumbar mechanics plus the two muscle syndromes — everything keys off seated flexion, the lumbar spring test, and the L5–sacrum rule.",
  "mustKnows": [
   "The viscerosomatic chart. The prior student wrote \"KNOW CHART.\" Memorize organ→cord level: heart T1–T5, lungs T2–T7, upper GI/foregut T5–T9 (greater splanchnic/celiac), midgut T10–T11 (lesser splanchnic/SMA), hindgut T12–L2 (least splanchnic/IMA), kidneys/adrenals/gonads ~T10–T11, and all GU T10–L2. Pelvic organs get parasympathetics from pelvic splanchnics (S2–S4).",
   "Innominate diagnosis is landmark-driven. Standing flexion test: the PSIS that moves MORE marks the dysfunctional side (SI joint locks first). Anterior innominate = ASIS inferior + PSIS superior; posterior innominate = ASIS superior + PSIS inferior. Inflare = ASIS closer to midline; outflare = ASIS farther.",
   "Innominate ME uses the antagonist. Anterior rotation → treat with hip extensors (glut max + hamstrings); posterior rotation → hip flexors (quads + psoas); inflare → adductors; outflare → abductors. Each was circled \"TQ\" on the deck.",
   "Sacral torsions: the test cluster. Seated flexion is positive on the side OPPOSITE the axis. Forward torsions (L-on-L, R-on-R) = negative lumbar spring + sphinx MORE symmetrical (base free to go anterior). Backward torsions (R-on-L, L-on-R) = positive lumbar spring + sphinx MORE asymmetrical. ILAs <1 thumb apart = torsion; >1 thumb apart = unilateral.",
   "The L5–sacrum rule ties it together. L5 sidebends toward the engaged oblique axis (L5 sidebent right → right oblique axis), and L5 rotates OPPOSITE the sacrum (L5 rotated right → sacrum rotates left). Fryette Type II = sidebending + rotation SAME side; Type I (neutral) = OPPOSITE.",
   "Piriformis = the sciatica mimic that stops at the knee. Hallmark: buttock pain referred down the thigh, usually NOT past the knee. Pain worse after sitting >15–20 min and with internal rotation/crossed-leg sitting. A right hypertonic piriformis creates a LEFT sacral torsion (rotation opposite the tight side), and L5 then rotates right.",
   "Psoas syndrome mimics lumbar radiculopathy. Up to 20% of low back pain. Key lesion is flexed L1/L2; patient leans forward and to one side with loss of lordosis and a positive Thomas test. Pain refers to the CONTRALATERAL knee — NOT past the knee — vs radiculopathy, which follows a nerve distribution to the foot."
  ],
  "los": [
   {
    "id": "CU.1",
    "statement": "Map viscerosomatic facilitation: organ-to-cord-level chart and splanchnic relays.",
    "blocks": [
     {
      "t": "p",
      "x": "The prior student wrote \"KNOW CHART\" across the top of this slide with an arrow, and that is the whole assignment for this topic: you memorize which sympathetic cord levels a given organ maps to, because a viscerosomatic reflex shows up as paraspinal tissue texture change at exactly those levels. The logic is one-directional — visceral afferents enter the cord at fixed segments, facilitate that segment, and you palpate the result in the paraspinals. Get the bands and you can read the reflex backwards from the spine to the organ."
     },
     {
      "t": "p",
      "x": "Walking down from the top: head and neck T1–T4, heart T1–T5, lungs T2–T7, esophagus T2–T8. Then the gut divides by embryologic origin, which is the part the exam loves. Foregut (stomach, liver, gallbladder, spleen, pancreas, proximal duodenum) is T5–T9 and relays through the greater splanchnic nerve and the celiac ganglion. Midgut (distal duodenum through the proximal two-thirds of the transverse colon) is T10–T11 via the lesser splanchnic and the superior mesenteric ganglion. Hindgut (distal third of the transverse colon, descending colon, sigmoid, rectum) is T12–L2 via the least splanchnic and inferior mesenteric ganglion."
     },
     {
      "t": "cq",
      "x": "Foregut viscerosomatic = T5–T9, midgut = T10–T11, hindgut = T12–L2. (embryologic GI bands)"
     },
     {
      "t": "p",
      "x": "The GU and pelvic row is where the easy points are won. Kidneys, adrenals, and gonads cluster around T10–T11 (the prior student green-highlighted kidneys at T10–T11), ureters T10–L1, bladder T11–L2, and all of the GU — male and female — spans T10–L2 (also highlighted, and written in the margin of the draw-it-out slide). Two organs you should overlearn because they break the pattern: the appendix is T12 (a single level, a classic one-liner) and the adrenals sit at T10."
     },
     {
      "t": "cq",
      "x": "Appendix = T12; adrenals = T10; all GU = T10–L2. (single-level buzzwords)"
     },
     {
      "t": "p",
      "x": "Don't forget the parasympathetic half. The sympathetic chart is most of the work, but the exam can flip to parasympathetics. The vagus covers the foregut and midgut down to about the splenic flexure; below that, the hindgut and pelvic organs get their parasympathetics from the pelvic splanchnics, S2–S4. So if a stem asks about parasympathetic supply to the descending colon or bladder, the answer is sacral, not vagal."
     },
     {
      "t": "key",
      "x": "Read the reflex backwards: paraspinal change at a cord level → the organ that maps there. The chart is the decoder."
     },
     {
      "t": "pearl",
      "x": "Embryology drives the GI split — fore/mid/hindgut track with greater/lesser/least splanchnic and celiac/SMA/IMA ganglia in lockstep."
     },
     {
      "t": "confusion",
      "x": "Vagus = foregut + midgut parasympathetics; pelvic splanchnics (S2–S4) = hindgut + pelvic. Don't give the vagus the descending colon."
     },
     {
      "t": "q",
      "x": "A patient has a viscerosomatic reflex at T10–T11. Which three GU structures and which GI segment share that level?"
     }
    ]
   },
   {
    "id": "CU.4",
    "statement": "Diagnose sacral torsions and unilateral flexions/extensions from the test cluster.",
    "blocks": [
     {
      "t": "p",
      "x": "This is the highest-stakes OMT topic on the cumulative, and it is pure pattern integration: no single test gives the answer, you stack four of them. The cast is seated flexion (finds the axis side), the lumbar (lumbosacral) spring test (forward vs backward), the sphinx / backward-bending test (symmetry change), and the static sulcus depth + ILA position. Learn how each behaves and the diagnosis falls out of the combination."
     },
     {
      "t": "p",
      "x": "The one rule that flips everyone: seated flexion is positive OPPOSITE the axis. If the seated flexion test is positive on the right, the oblique axis is on the LEFT. The prior student highlighted and circled this. Read it backwards on purpose every time, because the named torsion takes the axis side (an L-on-L torsion is a left axis)."
     },
     {
      "t": "cq",
      "x": "Seated flexion test is positive on the side OPPOSITE the oblique axis. (the #1 torsion trap)"
     },
     {
      "t": "p",
      "x": "Forward vs backward torsions are sorted by spring + sphinx. Forward torsions (L-on-L, R-on-R) give a NEGATIVE lumbar spring (the base can still travel anterior, so you feel give) and the sphinx test shows the sulci becoming MORE symmetrical on backward bending (the stuck-posterior base is free to follow into extension). Backward torsions (R-on-L, L-on-R) give a POSITIVE lumbar spring (you hit bone, no give) and the sphinx shows MORE asymmetry. The prior student's shorthand: \"more symmetrical = forward, more asymmetrical = backward.\""
     },
     {
      "t": "cq",
      "x": "Forward torsion = negative spring + sphinx more symmetrical; backward torsion = positive spring + more asymmetrical. (forward/backward discriminator)"
     },
     {
      "t": "p",
      "x": "Torsion vs unilateral is the thumb rule. Measure the ILAs in the caudal/cephalic plane: less than one thumb-width apart = a torsion; more than one thumb-width apart = a unilateral problem (a unilateral flexion or extension). For unilaterals, the seated flexion is still positive opposite the axis, and two mnemonics carry the ILA direction: \"E\" ILA \"e\"levates (an extension drives the ILA superior/anterior, sphinx shows increased asymmetry, spring positive) and \"F\" ILA \"f\"alls (a flexion drops the ILA inferior/posterior, sphinx more symmetrical, spring negative)."
     },
     {
      "t": "cq",
      "x": "ILAs <1 thumb apart = torsion; >1 thumb apart = unilateral. \"E elevates, F falls.\" (torsion vs unilateral)"
     },
     {
      "t": "p",
      "x": "Bilateral flexion and extension borrow the respiratory language from CU.3. Bilateral flexion is analogous to exhalation (base anterior, apex posterior): bilateral deep sulci, bilateral posterior ILAs, and a lumbar spring that is \"actually bilaterally positive\" because the base cannot spring further. Bilateral extension is analogous to inhalation: bilateral shallow sulci, bilateral anterior ILAs."
     },
     {
      "t": "p",
      "x": "The L5–sacrum bridge is stated twice on the slide because it links this LO to Fryette and to both muscle syndromes: L5 sidebends TOWARD the engaged oblique axis (L5 sidebent right → right oblique axis) and L5 rotates OPPOSITE the sacrum (L5 rotated right → sacrum rotated left). \"Somatic dysfunction in the lower back affects the sacrum; L5 rotations rotate the sacrum.\""
     },
     {
      "t": "cq",
      "x": "L5 sidebends toward the axis; L5 rotates opposite the sacrum. (the coupling rule)"
     },
     {
      "t": "key",
      "x": "Stack four tests: seated flexion (axis, read OPPOSITE) + spring (fwd/back) + sphinx (symmetry) + sulcus/ILA. No single test names the torsion."
     },
     {
      "t": "cue",
      "x": "Forward = Free spring + more symmetrical; Backward = Bone on spring + more asymmetrical. Two F's for forward."
     },
     {
      "t": "trap",
      "x": "ILAs >1 thumb apart is NOT a torsion — it is a unilateral. Torsions sit within one thumb-width."
     },
     {
      "t": "q",
      "x": "Deep right sulcus, posterior left ILA, negative seated flexion on the left, negative lumbar spring — name it."
     }
    ]
   },
   {
    "id": "CU.5",
    "statement": "Apply Fryette's principles to lumbar somatic dysfunction and SD naming.",
    "blocks": [
     {
      "t": "p",
      "x": "Fryette is a sorting tool and an answer-elimination tool. Three laws describe how spinal segments couple sidebending with rotation; on a multiple-choice exam they let you discard internally contradictory options before you even reason about the clinical picture. Master the Type I / Type II split and the board-elimination rule."
     },
     {
      "t": "p",
      "x": "Type I (neutral): in the neutral range, sidebending and rotation couple to OPPOSITE sides. Type I dysfunctions are groups of three or more vertebrae, they improve in neutral (and worsen with flexion AND extension), and they involve the larger postural muscles — think scoliosis and viscerosomatic posture. Type II (non-neutral, flexion/extension): in flexion or extension, sidebending and rotation couple to the SAME side. Type II is usually a single segment, it worsens in neutral and gets better in flexion OR extension, and it involves smaller intersegmental muscles (localized injury)."
     },
     {
      "t": "cq",
      "x": "Type I (neutral) = SB & rotation OPPOSITE, group, improves neutral. Type II (flex/ext) = SAME, single, worsens neutral. (the core Fryette split)"
     },
     {
      "t": "p",
      "x": "Name a dysfunction by the EASE. Somatic dysfunction is named for the direction of freer motion / ease, not the restricted barrier. A segment that moves freely into flexion but is restricted in extension \"lives in flexion\" — it is a flexed dysfunction. Said the slide's way: if the problem is in extension, the SD lives in flexion, and vice versa."
     },
     {
      "t": "cq",
      "x": "Name the SD for the direction of ease / freer motion, not the restriction. (naming convention)"
     },
     {
      "t": "p",
      "x": "The board-elimination rule is the highest-value test trick on the slide (written in red). If an answer option says E or F (extension/flexion), then sidebending and rotation MUST be in the SAME direction — any option pairing them oppositely is internally contradictory and can be crossed off. If an option says N (neutral), sidebending and rotation MUST be OPPOSITE. And the correct answer must always specify which segments are involved AND N/E/F."
     },
     {
      "t": "p",
      "x": "Facet orientation is worth a carry-along one-liner: Cervical BUM (backward, upward, medial), Thoracic BUL (backward, upward, lateral), Lumbar BM (backward, medial). These govern which motions a region favors."
     },
     {
      "t": "cq",
      "x": "Facets: Cervical BUM, Thoracic BUL, Lumbar BM. (facet orientation)"
     },
     {
      "t": "key",
      "x": "Type II = Two same (sidebending and rotation the SAME way, single segment). Type I = opposite, group, neutral. Anchor on Type II."
     },
     {
      "t": "cue",
      "x": "On any Fryette MCQ, first cross off options where E/F is paired with opposite SB/rot, or N is paired with same. Half the choices often die instantly."
     },
     {
      "t": "pearl",
      "x": "SD is named for the FREEDOM. \"Restricted in extension\" means it lives in flexion — say it as the ease and you will not flip it."
     },
     {
      "t": "q",
      "x": "An option reads \"L4 sidebent left, rotated right, in extension.\" Why can you cross it off instantly?"
     }
    ]
   },
   {
    "id": "CU.2",
    "statement": "Diagnose innominate (pelvic) dysfunction: rotations, shears, flares + ME treatment.",
    "blocks": [
     {
      "t": "p",
      "x": "Innominate (iliosacral) diagnosis is entirely landmark-driven: you find the dysfunctional side with a motion test, then read static landmarks to name what the bone did, then treat with the muscle that reverses it. Three dysfunction families live here — rotations, shears, and flares — and each has a clean landmark signature. Keep \"the bone is a wheel\" in mind for rotations and most of this falls out."
     },
     {
      "t": "p",
      "x": "Finding the side uses two motion tests. The standing flexion test localizes an iliosacral problem: as the patient bends forward, the PSIS that moves MORE is the dysfunctional side, because that SI joint locks sooner and the ilium gets pulled farther up by the sacrum. The ASIS compression test is the reciprocal: the side with LESS spring / more resistance is the dysfunctional side. Both point to the same side; they just feel for it differently."
     },
     {
      "t": "cq",
      "x": "Standing flexion test: the PSIS that moves MORE = the dysfunctional side. (most common pelvis trap)"
     },
     {
      "t": "p",
      "x": "Rotations are the wheel. Picture the innominate rotating forward or backward around a transverse axis. An anterior innominate carries the ASIS inferior and the PSIS superior on that side; a posterior innominate is the reverse — ASIS superior, PSIS inferior. The most anterior an innominate gets is at toe-off; the most posterior is at heel-strike, which is a nice way to remember the gait coupling."
     },
     {
      "t": "cq",
      "x": "Anterior innominate = ASIS inferior + PSIS superior; posterior = the reverse. (rotation landmark signature)"
     },
     {
      "t": "p",
      "x": "A shear is a translatory slide of the whole innominate in the coronal plane: in a superior shear ALL landmarks are superior on that side; in an inferior shear, all are inferior. Because everything moves together, you won't get the reciprocal up/down split that rotations give. A flare is a medial/lateral change of the ASIS measured from the midline: inflare = ASIS closer to the midline, outflare = ASIS farther. Pregnancy classically produces bilateral outflares, and an MVA with a seatbelt is a classic flare mechanism."
     },
     {
      "t": "cq",
      "x": "Superior shear = ALL landmarks superior on that side; inflare = ASIS toward midline, outflare = away. (shear vs flare)"
     },
     {
      "t": "p",
      "x": "Treatment contracts the antagonist. For muscle energy you position toward the barrier and have the patient fire the muscle that drives the bone the corrective way. The deck circled all four as TQs: an anterior rotation is treated with hip extensors (glut max + hamstrings); a posterior rotation with hip flexors (quads + psoas); an inflare with adductors; an outflare with abductors. Match the presentation too — anterior rotation tends to give sciatic/gluteal/hamstring pain (\"SGH\"), posterior rotation gives inguinal/groin and quad/psoas tightness."
     },
     {
      "t": "key",
      "x": "Diagnose in three steps: motion test finds the SIDE, static landmarks NAME the dysfunction, the antagonist muscle TREATS it."
     },
     {
      "t": "cue",
      "x": "For any rotation ME, position toward the barrier and contract the antagonist: anterior→extensors, posterior→flexors."
     },
     {
      "t": "confusion",
      "x": "Shears move ALL landmarks one direction; rotations split them (ASIS one way, PSIS the other). That split is how you tell them apart."
     },
     {
      "t": "q",
      "x": "Right ASIS inferior, right PSIS superior — name the dysfunction and the muscles you'd use to treat it."
     }
    ]
   },
   {
    "id": "CU.3",
    "statement": "Describe sacral anatomy, axes, and respiratory motion of the sacrum.",
    "blocks": [
     {
      "t": "p",
      "x": "Before you can diagnose a torsion you need the scaffolding: where the landmarks are, which axes the sacrum moves around, and what \"respiratory motion\" means. The two landmarks you palpate are the sacral sulci (just medial and superior to the PSISs) at the base and the inferior lateral angles (ILAs) at the apex. Everything in diagnosis is a comparison of sulcus depth up top against ILA position down below."
     },
     {
      "t": "p",
      "x": "Three transverse axes stack down the sacrum. The superior transverse axis at S1 is the respiratory axis — it is synchronous with the cranial mechanism (sphenobasilar flexion and extension). The middle transverse axis at S2 is the postural axis for flexion/extension coupled with the lumbar spine. The inferior transverse axis handles iliosacral motion during walking. On top of those, an anteroposterior axis gives sidebending and the oblique axes give torsions. The prior student circled the axes and wrote that total sacral movement is measured in millimeters."
     },
     {
      "t": "cq",
      "x": "Superior transverse axis (S1) = respiratory axis, synchronous with the cranial mechanism. (axis identification)"
     },
     {
      "t": "p",
      "x": "Respiratory motion follows the diaphragm — and this is the piece students reverse. On inhalation the diaphragm descends and the sacral base moves POSTERIOR (counternutation), while the apex moves anterior — the prior student drew this directly on the slide: \"diaphragm goes down, pushes the sacrum out.\" On exhalation the base moves ANTERIOR (nutation) and the apex moves back in. This same base-anterior/base-posterior language is what bilateral flexion and extension borrow from, so lock it down now."
     },
     {
      "t": "cq",
      "x": "Inhalation → sacral base posterior (apex anterior); exhalation → base anterior. (respiratory motion direction)"
     },
     {
      "t": "p",
      "x": "One framing that pays off later: the sacrum moves freely in whichever respiratory phase it is held in and is restricted in the opposite phase. That is why a forward (flexed) sacrum behaves like it is stuck in exhalation — it is the same mechanical idea you will reuse the moment you start naming torsions."
     },
     {
      "t": "q",
      "x": "Which sacral axis is the respiratory axis, and which way does the base move on inhalation?"
     }
    ]
   },
   {
    "id": "CU.7",
    "statement": "Recognize psoas syndrome: anatomy, staged progression, and the radiculopathy mimic.",
    "blocks": [
     {
      "t": "p",
      "x": "Psoas syndrome accounts for up to 20% of low back pain and is the great radiculopathy mimic. The exam wants the anatomy, the staged progression (initial bilateral → later unilateral with a whole-spine compensation pattern), and the one discriminator that separates it from a disc."
     },
     {
      "t": "p",
      "x": "Anatomy: the psoas major originates from the transverse processes of T12–L5 (anterior aspect), the vertebral bodies of L1–L5, and the intervening discs, and inserts on the lesser trochanter; it is innervated by L1, L2, (some L3) and acts as a hip flexor and trunk balancer. The iliacus arises from the iliac fossa, joins the psoas tendon to the lesser trochanter, and is innervated by the femoral nerve. Note for boards: the psoas does NOT attach to L5 in the way students assume — L5 follows L3/L4 or the sacrum."
     },
     {
      "t": "cq",
      "x": "Psoas major: origin TPs T12–L5 + bodies/discs L1–L5, insertion lesser trochanter, innervation L1–L2 (±L3). (anatomy one-liner)"
     },
     {
      "t": "p",
      "x": "Presentation and the key lesion: the patient leans forward and to one side, has lost lumbar lordosis, and has a positive Thomas test (the higher the knee rides, the greater the hypertonicity). The maintaining key lesion is a flexed upper lumbar segment — classically L1/L2; treat that and the syndrome resolves, miss it and it won't. If these findings are absent, psoas syndrome is unlikely."
     },
     {
      "t": "cq",
      "x": "Key lesion = flexed L1/L2; posture leans forward + to one side with lost lordosis and a positive Thomas test. (the maintaining lesion)"
     },
     {
      "t": "p",
      "x": "Staged progression. Initial (early): bilateral psoas hypertonicity, upper lumbar (L1/L2) flexed, bilateral lumbosacral pain, flattened lordosis, positive Thomas bilaterally. Later (full-blown), unilateral: the key L1/L2 segment is flexed and sidebent/rotated TOWARD the hypertonic side (Type II); the lower lumbars (L3–L4) compensate to the OPPOSITE side (Type I neutral), producing an S-shaped curve; the pelvis shifts AWAY from the tight psoas; there is a backward sacral torsion with the axis on the same side; the ipsilateral leg is externally rotated and shortened; and the piriformis becomes CONTRALATERALLY hypertonic — which is why psoas syndrome lists piriformis syndrome as a sequela."
     },
     {
      "t": "cq",
      "x": "Late stage: L1/L2 Type II toward the tight side, L3–L4 Type I opposite → S-curve; pelvis shifts away; piriformis contralateral. (the S-curve pattern)"
     },
     {
      "t": "p",
      "x": "The discriminator and treatment: the deck's flagged most-common misdiagnosis is lumbar radiculopathy. Separate them on pain pattern: psoas refers to the CONTRALATERAL knee and not past it; radiculopathy follows a nerve distribution, often down to the foot. Treatment targets the key upper-lumbar/thoracolumbar lesion (ME, counterstrain) plus extension-biased rehab — back extension and swimming, and explicitly NO sit-ups; avoid heat to the low back and forward bending."
     },
     {
      "t": "key",
      "x": "Treat the KEY LESION (flexed L1/L2). Psoas syndrome will not resolve while the upper lumbar segment stays flexed, no matter how much you stretch the muscle."
     },
     {
      "t": "confusion",
      "x": "Psoas vs radiculopathy: contralateral knee and stops there = psoas; dermatome to the foot = radiculopathy. This is the deck's flagged mix-up."
     },
     {
      "t": "trap",
      "x": "NO sit-ups, no heat to the low back, no forward bending — all fire or shorten the psoas. Rehab is extension-biased (back extension, swimming)."
     },
     {
      "t": "q",
      "x": "Forward-leaning patient, lost lordosis, positive Thomas test, pain to the contralateral knee — diagnosis and key lesion?"
     }
    ]
   }
  ]
 }
};

const LO_ANSWERS = {
 "1_1": {
  "answer": "<p>This whole lecture is a survey of 14 peripheral nerves and what happens when each one gets pinched. Eldemire framed it around the brachial and lumbosacral plexuses, but the point he kept making is that we are not chasing roots here — root problems (radiculopathy, disc disease) belong to MSK and neurology. We are downstream, at the named peripheral branches, where a single nerve carries a defined motor and sensory territory. That is the master key for the entire deck: when a nerve is entrapped, you localize it by asking which muscles are weak and which patch of skin is numb, then you confirm and grade it with electrodiagnostics. Almost every nerve below is a mixed nerve, so an entrapment on the nerve trunk hits motor and sensory together.</p><p>Entrapments follow the PERIPHERAL-nerve sensory map, not single-root dermatomes — that distinction (peripheral pattern vs dermatome) is how you keep an entrapment separate from a radiculopathy.</p><p>THREE INJURY SEVERITIES. Before the nerves, learn the three grades of nerve injury, because they set prognosis. Neuropraxia is the mild one — only the myelin is bruised, and the nerve recovers. Axonotmesis is the moderate one — the myelin and the axon break down (that distal breakdown is Wallerian degeneration), but the surrounding connective-tissue sheath stays intact, so the axon can regrow along the preserved tube. Neurotmesis is the severe one — myelin, axon, and sheath are all disrupted, and there is no regrowth. The intact sheath is the whole reason axonotmesis can recover and neurotmesis cannot.</p><p>Neuropraxia = myelin only; axonotmesis = myelin + axon (Wallerian, regrows); neurotmesis = + connective tissue, no regrowth.</p><p>HOW YOU TEST IT. Most of these can be diagnosed clinically — reproduce the symptoms by palpating or tapping over the entrapment site (a positive Tinel sign, which works at any nerve, not just the wrist). But the single most effective study is the nerve conduction study with EMG: NCS measures signal speed across the lesion, EMG samples the muscle with a needle, and together they confirm the entrapment, tell you whether it is peripheral or central, and grade severity and chronicity. The catch Eldemire stressed: the EMG needle is not a benign test — it hurts, especially in a hypersensitive patient — so it is reasonable to treat empirically and let a good response confirm the diagnosis. Ultrasound is the growing adjunct: it shows the compressive source (fluid, tendon, cyst), shows the nerve swollen distal and narrowed proximal to the entrapment, and allows a dynamic assessment with the patient moving.</p><p>Best test to confirm + grade an entrapment = NCS/EMG (distinguishes peripheral vs central, grades severity).</p><p>MEDIAN NERVE — the most common UE entrapment. Start here, because Eldemire flagged it twice as the one to know. The median nerve is mixed, but the testable piece is its sensation: the thenar eminence (thumb pad) plus the palmar surface of digits 1–3 and the radial half of digit 4. He told you the thenar-plus-fingers detail matters “and we’re going to discuss why” — the why is the localization trick below. Median entrapment is not automatically carpal tunnel; group it into proximal versus distal.</p><p>PROXIMAL MEDIAN ENTRAPMENT. Three culprits, all above the wrist. Pronator teres syndrome (weightlifters, tennis/pickleball players — anyone with a hypertrophied pronator) entraps the median nerve under the muscle: numbness of digits 1–3 and the thenar pad, worse with pronation. The ligament of Struthers sits a little higher and looks just like pronator teres syndrome except there is weak pronation, because the entrapment is proximal to the branch that drives pronator teres. Anterior interosseous (AIN) syndrome is the odd one out: it is pure motor, so there is no sensory loss — the patient simply cannot flex the distal phalanges to make a rounded “O” with thumb and index.</p><p>AIN syndrome = pure motor → cannot make an “O” sign, no sensory loss.</p><p>DISTAL MEDIAN ENTRAPMENT — carpal tunnel. The bread and butter. Entrapment under the flexor retinaculum gives the typical numbness of digits 1–3 — but the thenar pad is spared. Here is the why Eldemire promised: the palmar cutaneous branch that innervates the thenar skin shoots off before the flexor retinaculum, so a wrist-level lesion never touches it. That is the single highest-yield discriminator in this lecture — thenar numbness sends you proximal (pronator teres), thenar sparing keeps you at the wrist (carpal tunnel). Carpal tunnel is worse at night, and the most specific finding is the flick sign (the patient flicks the wrist on waking for relief). Eldemire was explicit that he does not expect you to know the other provocative tests (Phalen’s, reverse Phalen’s) for this exam — know the flick sign.</p><p>Treatment localizes to the source: night splints (worse at night), OT/PT, and newer options — hydrodissection (a high-volume anesthetic-plus-fluid injection that opens a halo of space around the nerve) and the in-office thread release, with the traditional transverse carpal ligament release reserved for refractory cases. The teaching point: fix the right level, or a pickleball player “treated for carpal tunnel” keeps getting compressed proximally.</p><p>SUPRASCAPULAR NERVE. A mixed nerve to supraspinatus (abduction) and infraspinatus (external rotation). Its innervation lets you localize the compression: at the suprascapular notch you lose both abduction and external rotation; more distally at the spinoglenoid notch you lose only external rotation, with abduction intact. Compression is from trauma, a cyst, or fracture.</p><p>Suprascapular compression: suprascapular notch = abduction + ER lost; spinoglenoid notch = ER only.</p><p>AXILLARY NERVE. Runs the quadrilateral space against the surgical neck of the humerus, so its entrapment is overwhelmingly trauma-related — humeral fracture or anterior shoulder dislocation. It supplies the deltoid (abduction) and sensation over the lateral shoulder.</p><p>MUSCULOCUTANEOUS NERVE. A rare one: it powers the arm flexors and gives sensation to the lateral forearm. It classically gets compressed by positioning under anesthesia — the patient wakes with lateral-forearm numbness, and removing the position fixes it.</p><p>DORSAL SCAPULAR NERVE. Mostly motor (rhomboids, levator scapulae) with a little sensation to the medial scapular border. It can cause medial scapular-border pain and is a contributing cause of scapular winging — but remember the long thoracic nerve (serratus anterior) is the major contributor to winging.</p><p>ULNAR NERVE. Mixed nerve to the intrinsic hand muscles plus sensation to digits 4–5 (palmar and dorsal). Two entrapment sites: the cubital tunnel at the elbow (the “funny bone,” aggravated by leaning on the elbow) and Guyon’s canal at the wrist. Learn the three exam signs: Froment sign (to pinch paper the patient flexes the thumb IP because adductor pollicis is weak), Wartenberg sign (the little finger drifts into abduction and won’t adduct), and claw hand (digits 4–5 clawed from unopposed long flexors). Ulnar entrapment responds poorly to injections and PT — management is behavioral/mechanical, with surgery for refractory cases.</p><p>Froment sign (thumb-IP flexion to pinch) + Wartenberg sign (abducted little finger) + claw hand = ulnar exam triad.</p><p>RADIAL NERVE. Supplies the triceps, wrist/finger extensors, and sensation to the dorsal-lateral hand. The eponym is Saturday night palsy — compression in the spiral groove (a draped arm during intoxicated sleep, or an improperly fitting crutch in the axilla) producing wrist drop. Eldemire’s hook: drop the W from “wrist” → R and R → the Radial nerve does wrist dRop. Distinguish the posterior interosseous nerve (PIN), a pure-motor branch in the forearm: PIN entrapment gives finger drop without sensory loss and spares the ECRL, whereas a spiral-groove lesion adds dorsal-hand sensory loss.</p><p>Radial nerve → wrist dRop (“Saturday night palsy”, spiral groove); PIN entrapment = finger drop, no sensory loss.</p><p>SUPERIOR CLUNEAL NERVE. Now the lower extremity. The superior cluneal nerve is purely sensory to the upper buttock; it rides over the iliac crest, where quadratus lumborum hypertonicity (often from prolonged sitting) compresses it. Hallmark: pain along the iliac crest radiating into the buttock. It is tougher to treat — injections or radiofrequency ablation, because the QL driver is hard to switch off.</p><p>SCIATIC NERVE. A big mixed nerve to the posterior thigh, branching into the tibial and common peroneal nerves for the leg and foot. Compression is from direct trauma, muscle hypertrophy, surgery (hip replacement is the classic), or scar/bone-spur irritation. The high-yield warning Eldemire repeated: foot drop present at the initial evaluation is a sign of poor prognosis — it means the lesion has progressed past sensory into motor, or is acute and severe. Always check for foot drop after a hip operation. Because the sciatic carries the peroneal division, a sciatic lesion can also cause foot drop.</p><p>SCIATIC DDx — piriformis vs hamstring syndrome. Two ways the sciatic nerve gets irritated near the buttock, and the distinction matters because the treatment and even the surgery differ. Piriformis syndrome entraps the nerve under the muscle: buttock pain that is worse after prolonged sitting, referral down the thigh, decreased internal rotation with an ER preference, and a positive FAIR test. Hamstring syndrome is different — it is the result of a prior hamstring injury (scar or calcification at the ischial origin) irritating the adjacent sciatic nerve; the triad is pain immediately on sitting (the sit-bones), pain on resisted knee flexion at 90° hip flexion, and ischial-tuberosity tenderness. Eldemire anchored this with a residency case: a patient set for piriformis-release surgery the following week sat down in his clinic and said “ow” the instant she made contact — pain immediately on sitting. He treated her for hamstring syndrome, gave her a cushion, and she cancelled the surgery. The lesson he wanted you to keep: make sure you have the right diagnosis.</p><p>Piriformis: worse after prolonged sitting, ER preference, FAIR test. Hamstring: pain immediately on sitting, resisted knee flexion at 90°, ischial tenderness.</p><p>OBTURATOR &amp; FEMORAL NERVES. Both rare, both anterior. The obturator nerve drives the hip adductors and gives medial-thigh sensation; entrapment (pelvic trauma, surgery, mass, osteitis pubis) is often missed until motor/adductor weakness appears. The femoral nerve drives knee extension/hip flexion with sensation to the anterior thigh and medial lower leg; it is injured in surgery, childbirth, or by pelvic masses/bleeding, and presents with weakness more than sensory change. Femoral has a favorable prognosis and responds well to PT; both may need nerve grafting after major trauma.</p><p>LATERAL FEMORAL CUTANEOUS NERVE — meralgia paresthetica. A purely sensory nerve to the anterolateral thigh, compressed beneath the inguinal ligament by body habitus, tight clothing, or a heavy belt — think the security guard (Paul Blart) with the loaded duty belt, or Eldemire’s lean marina worker in a tight wetsuit. Because it is sensory only, there is no weakness and the thigh-muscle EMG is normal — that normal motor picture is the integrating clue. Treatment is removing the compressive force: weight loss, lose the belt.</p><p>TIBIAL NERVE. Mixed nerve for plantarflexion, inversion, toe flexion, and plantar-foot sensation. It becomes the posterior tibial nerve entering the tarsal tunnel (behind the medial malleolus under the flexor retinaculum) — the most common site, from fracture, tendinopathy, or scar. Distal branches (medial plantar nerve in over-pronating runners; the lateral plantar / Baxter’s nerve) cause more focal foot symptoms. It is hard to localize on ultrasound, so injections are uncommon; surgery is best when a cyst is the compressor (drainable) rather than scar (which can recur).</p><p>COMMON PERONEAL (FIBULAR) NERVE — the most common LE mononeuropathy. Eldemire called this “a very important one to remember.” It wraps the posterior then anterior fibular head, where it is superficial and exposed, then splits: the superficial peroneal nerve does eversion + sensation to most of the dorsum, and the deep peroneal nerve does dorsiflexion + sensation to the first web space (that little patch between the great and second toes). Because the dorsiflexors are deep-peroneal, a common-peroneal lesion at the fibular head causes foot drop. The mechanism is extrinsic compression (a too-high cast, a posterior fibular-head dysfunction) or direct trauma — his memory anchor was a 2021 MMA lateral leg kick that dropped the fighter, who then dragged and slapped the foot and rolled the ankle because he could not dorsiflex. Surgery is rarely needed; conservative care (PT, OMT, removing the aggravator) usually works.</p><p>Common peroneal at the fibular head = MC LE mononeuropathy → foot drop. Deep peroneal = dorsiflexion + first web space; superficial = eversion + dorsum.</p><p><strong>Clinical pearl:</strong> The thenar pad is your median-localization compass: numb thenar → go proximal (pronator teres); spared thenar → stay at the wrist (carpal tunnel). One finding splits the differential.</p><p><strong>Trap:</strong> A sciatic lesion can cause foot drop, so do not reflexively pin every foot drop on the common peroneal — but the MC cause is still common peroneal at the fibular head. Localize by associated signs, not reflex.</p><p><strong>Cue:</strong> In a hypersensitive patient, you do not need EMG before you treat — the needle hurts. Treat empirically, and let a good response confirm. Understand a test before you order it.</p><p><em>A patient has numbness of digits 1–3 but an intact thenar pad. Why does carpal tunnel spare thenar sensation when a pronator-teres lesion does not — and how does that single fact localize the lesion?</em></p>",
  "why": ""
 },
 "2_1.1": {
  "answer": "<p>Ribs get sorted two completely separate ways, and the single most testable idea in this LO is that the two systems do not talk to each other. One axis asks how does the rib reach the sternum in front? — that gives you true, false, or floating. The other axis asks what does the bony shape look like? — that gives you typical or atypical. A rib carries one label from each axis, and the labels are assigned by different criteria, which is exactly the trap an exam will set when it asks you to apply both to the same rib.</p><p>True ribs = 1–7 (reach the sternum by their own costal cartilage); also called vertebrosternal. (attachment axis)</p><p>Walk the attachment axis from the top down. Ribs 1–7 each have their own dedicated costal cartilage that runs to the sternum — true ribs, sometimes called vertebrosternal because they run vertebra-to-sternum. Ribs 8–10 do not get their own ticket to the sternum; their cartilage pitches a ride on the cartilage of the rib above (ultimately rib 7’s), so they are false or vertebrochondral ribs. Ribs 11–12 have no anterior attachment at all — their tips end in the posterior abdominal wall musculature — so they are floating (vertebral, free) ribs. Rib 10 floats in a minority of people, which is why some texts hedge on it.</p><p>False ribs = 8–10 (cartilage attaches to the rib above, not the sternum directly); also vertebrochondral. (attachment axis)</p><p>Now switch systems entirely to the shape axis. Typical ribs (3–9) share a reliable osseous blueprint: a head that articulates with two vertebrae (its own numbered level plus the one above), a neck, a tubercle that articulates with the transverse process at the costotransverse junction, a long body, and a costal angle where the body turns sharply to head laterally. Atypical ribs are 1, 2, 10, 11, and 12 — the mnemonic Waters teaches is that any rib with a 1 or a 2 in its number is atypical. Atypicals each break the blueprint in their own way: rib 1 is the broadest and most sharply curved and carries a scalene tubercle; rib 2 has a tuberosity for serratus anterior; ribs 11 and 12 have no neck or tubercle and articulate with only their own corresponding vertebra.</p><p>A typical rib articulates with two vertebrae and has head, neck, tubercle, body, costal angle; atypicals lack one or more and vary. (typical-rib definition)</p><p>Here is where the exam lives: the two axes cross. Rib 8 attaches indirectly, so it is a false rib — yet it has the full landmark set and two-vertebra articulation, so it is also a typical rib. “False and typical” is not a contradiction; it is two true labels from two independent systems. When a question gives you a rib number and asks you to select all that apply, resolve attachment and shape separately and report both.</p><p><strong>Key:</strong> Two independent axes: attachment (true/false/floating) and shape (typical/atypical). Assign one label from each.</p><p><strong>Confusion:</strong> False ≠ atypical. False is about attachment; atypical is about bone shape. Rib 8 is false AND typical.</p><p><strong>Trap:</strong> On “select all that apply,” a rib almost always carries two correct labels (one per axis). Picking only one is the bait.</p><p><em>Rib 8 is a false rib — so why is it also a typical rib, and what does that tell you about how the two classification systems relate?</em></p>",
  "why": ""
 },
 "2_1.2": {
  "answer": "<p>The reason ribs matter beyond breathing is that they are wired into the autonomic nervous system by simple proximity. The thoracic sympathetic chain ganglia lie anterior to the rib heads, sitting in fascia that the ganglia and the ribs share. Because they share connective tissue, anything the rib does — or fails to do — is felt by the chain. That single anatomic fact is the backbone of why osteopathic rib treatment claims an autonomic effect.</p><p>The sympathetic chain ganglia lie anterior to the rib heads in shared fascia. (key anatomic relationship)</p><p>When a rib loses motion, the shared fascia is stressed and compressed, and the ganglia can no longer regulate cleanly — the result is a drift toward increased sympathetic tone in whatever those segments innervate. Clinically that shows up as peripheral nerve irritation, lymphatic and venous congestion, and viscerosomatic feedback loops where a stuck rib helps drive a visceral complaint. The fix follows directly from the mechanism: rib-raising mobilizes the rib heads, frees the fascial connections, and lets the ganglia return to self-regulation. You will see this exact mechanism applied in the Pulmonology and Cardiac lectures — here is where it is built.</p><p>Restricted rib motion → stressed shared fascia → increased sympathetic tone; rib-raising frees the fascia to restore regulation. (rib-raising rationale)</p><p>Beyond protecting viscera and enabling respiration, rib motion also drives venous and lymphatic return — the pressure swings the rib cage creates pull fluid back toward the heart against gravity. Waters flagged this as the under-appreciated third function of the rib cage.</p><p><em>A patient has thoracic rib restriction and signs of viscerosomatic dysfunction. Trace the anatomic chain that links the stuck rib to a hyperactive sympathetic state, and name the technique that addresses it.</em></p>",
  "why": ""
 },
 "2_1.3": {
  "answer": "<p>What Waters wanted was a principle, not a memorized list. Start with the one muscle that does the real work: the thoracic diaphragm generates about 60% of the pressure change of tidal inspiration. Everything else is supporting cast, and the cast splits cleanly by job.</p><p>The diaphragm generates ~60% of the inspiratory pressure change; it is the primary muscle of respiration. (primary-muscle figure)</p><p>Accessory muscles are recruited only for forced or heavy breathing — exercise, an asthma or COPD exacerbation, any “increased work of breathing.” And they sort by direction. For forced inhalation, think head, neck, and pectoral girdle: sternocleidomastoid, scalenes, pectoralis, serratus posterior superior, upper iliocostalis. For forced exhalation, think abdominal core: rectus abdominis, obliques, transversus abdominis, plus quadratus lumborum and latissimus dorsi. Try it on yourself — a hard breath out comes from the core; a hard breath in comes from the neck and shoulders. That contrast is the testable takeaway, not the enumerated list.</p><p>Forced inhalation = head/neck/pectoral-girdle muscles; forced exhalation = abdominal core. Accessory muscles fire only in heavy/forced breathing. (the organizing contrast)</p><p>The single-muscle slides earn their place precisely because the exam will not ask you to recite a list — it will name or show a muscle and ask which phase of breathing it serves. Anchor each muscle to its job rather than its position in a list: the external intercostals support the intercostal spaces and assist forced inspiration; transversus thoracis and subcostals are deep muscles of the anterior and posterior rib cage; serratus posterior superior and inferior are accessory muscles of respiration; serratus anterior wraps anteriorly with its inferior portion an accessory inspiratory muscle; the sternocleidomastoid (sternum + clavicle + mastoid) is an accessory inspiratory muscle; the anterior and middle scalenes attach to rib 1 and the posterior scalene to rib 2; latissimus dorsi is a muscle of respiration as well as a “lat pulldown” muscle; and forced exhalation is predominantly the abdominal core.</p><p><strong>Key:</strong> Diaphragm ≈ 60% of inspiration. Accessory muscles fire only in forced breathing.</p><p><strong>Clinical pearl:</strong> Forced in = neck &amp; shoulders; forced out = core. Test it on your own breath to recall it.</p><p><strong>Cue:</strong> Accessory-muscle use at rest (SCM and scalenes working during quiet breathing) is a red flag for increased work of breathing — think exacerbation.</p>",
  "why": ""
 },
 "2_1.4": {
  "answer": "<p>Rib motion is “not just inhalation and exhalation” — the direction a rib travels depends on the geometry of its joints, and that geometry sorts the ribs into three motion types. The clean way to hold it is a three-way mapping: each motion type owns a band of ribs, changes a specific thoracic diameter, and is enabled (or freed) by a specific joint arrangement. Get the mapping and you can answer any “which motion / which diameter / which ribs” question.</p><p>Pump-handle (ribs 2–5): anterior end swings up in an arc → increases the AP diameter. (motion mapping)</p><p>Picture an old water-pump handle: one end fixed, the free end swinging up in an arc. The rib is fixed posteriorly at its costovertebral/costotransverse axis and swings its anterior end upward, carrying the front of the chest forward and increasing the anterior-posterior diameter. Ribs 2–5 are predominantly pump-handle. A bucket handle is fixed at both ends, so its middle swings laterally upward. Ribs 6–10 do this: the lateral edge rises, increasing the transverse diameter — the “chicken dance” motion you will rehearse in lab.</p><p>Bucket-handle (ribs 6–10): lateral edge rises → increases the transverse diameter. (motion mapping)</p><p>Ribs 11–12 have no costotransverse articulation, so they are not pinned in the horizontal plane. With only their head joint to anchor them, they swing like a pair of round calipers and produce a slight increase in both the AP and transverse diameters. The absent costotransverse joint is the whole reason caliper motion exists — a favorite “why” question. Rib 1 is the oddball: about 50% pump and 50% bucket, which is part of why it gets special diagnostic handling. And the caution that keeps you honest: all ribs exhibit all types of motion to varying degrees — “predominant” is only predominant, which is why in lab you check most ribs for both pump and bucket components rather than assuming one pattern.</p><p>Caliper (ribs 11–12): no costotransverse joint → slight increase in both diameters. (caliper mechanism)</p><p><strong>Key:</strong> Three-way map: pump (2–5, AP) / bucket (6–10, transverse) / caliper (11–12, both). Rib 1 ≈ 50/50.</p><p><strong>Clinical pearl:</strong> Caliper motion exists because ribs 11–12 have no costotransverse joint — the “why” the exam loves.</p><p><strong>Trap:</strong> “Predominant” ≠ “only.” All ribs do all motions to a degree — don’t assume one rib does just one thing.</p><p><em>Two ribs both increase a thoracic diameter on inhalation, but one increases the AP diameter and the other the transverse. What distinguishes which motion each performs, and which ribs do which?</em></p>",
  "why": ""
 },
 "2_1.5": {
  "answer": "<p>This LO is the payoff for everything before it, and it turns on one rule Waters repeated more than any other: somatic dysfunction is diagnosed — named — for the position of ease. You hunt down the rib that is restricted, but you label it for the direction it still likes to go. Get that backwards and every vignette flips. The Lab objective “diagnose rib somatic dysfunctions” lives here too — the assessment workflow below is that didactic content.</p><p>Where to palpate: match your hands to the predominant motion, because that is where excursion is greatest. Pump-handle ribs (2–5) are assessed anteriorly, near the sternochondral junction, just lateral to the sternum. Bucket-handle ribs (6–10) are assessed at the mid-axillary line. Put your hands where the rib actually moves and the findings become obvious; put them in the wrong place and a real dysfunction hides.</p><p>Palpate pump-handle ribs anteriorly (sternochondral junction); palpate bucket-handle ribs at the mid-axillary line. (palpation sites)</p><p>Static then dynamic. First the static check: is a rib prominent or recessed? A prominent rib hints at an inhaled rib, a recessed one at an exhaled rib — but that is only a hint. The dynamic check decides it: have the patient breathe and feel whether the rib moves as expected. Here is the moment Waters leaned on — she said that if a bucket rib “moves nicely into inhalation but doesn’t move into exhalation, ding ding ding, you’ve got yourself an inhaled rib.” It moves freely into inhalation and is stuck leaving it, so it prefers inhalation: an inhaled rib. If a rib moves well in both directions, check the other side — the apparent prominence may be the contralateral rib sitting recessed.</p><p>Static: prominent ≈ inhaled, recessed ≈ exhaled (hint only). Dynamic decides: moves into a phase but won’t leave it → named for that phase. (assessment logic)</p><p>Naming, restated: restriction locates the problem; ease names it. A rib that rises easily with inhalation but will not recede with exhalation is an inhaled rib — it prefers inhalation. The mirror case (moves into exhalation, will not rise) is an exhaled rib. And keep Waters’ caution in view: all ribs exhibit all types of motion to varying degrees, so in practice you test most ribs for both pump- and bucket-handle components before committing to a name. That is why the SD-naming vignettes give you a location (anterior vs mid-axillary), a static finding, and a dynamic finding — you need all three to land the correct side, motion type, and ease direction.</p><p>Rises with inhalation but won’t recede = inhaled rib; moves into exhalation but won’t rise = exhaled rib (named for ease). (the SD-naming rule)</p><p><strong>Key:</strong> Find the restriction; name for the ease. Static prominence hints; dynamic motion decides.</p><p><strong>Cue:</strong> Rib moves into a phase but won’t leave it → name it for that phase (inhaled or exhaled). Check the other side if both move freely.</p><p><strong>Trap:</strong> Naming for the restriction instead of the ease flips every vignette — the single most common rib-SD error.</p><p><em>A bucket-handle rib is prominent on one side and rises with inhalation but will not recede on exhalation. Walk the static-then-dynamic logic and name the dysfunction — and explain why you name it the way you do.</em></p>",
  "why": ""
 },
 "3_1": {
  "answer": "<p>Barry opened with Andrew Taylor Still&#x27;s line that &quot;the study of the framework of the chest should be done with the greatest of care&quot; — and the reason is that a rib articulates in two places and is slung in muscle and ligament, so a small derangement anywhere ripples through the whole respiratory mechanism. The biomechanics reduce to one idea you can apply to any rib: a dysfunctional rib is stuck in one breath phase, and everything you palpate — the painful phase, the intercostal spacing, the edge that rides up — follows from which phase it is stuck in.</p><p>On inhalation the diaphragm contracts and descends inferiorly, creating the negative intrathoracic pressure that draws air in; on exhalation it simply relaxes (no contraction). (diaphragm direction)</p><p>Why the framework is fragile: a typical rib articulates with the spine in two places — the costovertebral joint at the body and the costotransverse joint at the transverse process — and is bound by a web of ligaments and the muscles of respiration. Stretch or tighten any one of those and the rib&#x27;s two-point hinge derails, which is also why a thoracic somatic dysfunction (say a rotated, side-bent, extended T10) drags its rib along with it. The practical upshot is that rib SDs and thoracic SDs travel together often enough that finding one should make you check the other. Pain during the respiratory cycle is a key diagnostic clue: pain on inhalation versus exhalation localizes the SD.</p><p>Pump vs bucket — axis and pain: the two predominant motions ride different axes. Pump-handle ribs rotate about a transverse axis, so the anterior end (and sternum) swings up and forward on inhalation — increasing the AP diameter. Bucket-handle ribs rotate about an anteroposterior axis, so the lateral shaft rises like a bucket handle — increasing the transverse diameter. The pain patterns track the axis: pump-handle SDs hurt sharply at the costosternal/costotransverse attachments, while bucket-handle SDs ache deeply at the mid-axillary line. Barry framed the distinction as a clinical must-know, because the location and quality of pain tell you the motion type before you ever test it.</p><p>Pump-handle rotates on a transverse axis (AP diameter); bucket-handle rotates on an AP axis (transverse diameter). (axis mapping)</p><p>The pain-cycle tell: the breath phase that hurts tells you where the rib refuses to go, and therefore where it lives. If a patient hurts on inhalation, the rib won&#x27;t inhale — it is camped in exhalation — so it is an exhaled rib. If they hurt on exhalation, the rib won&#x27;t exhale — it lives in inhalation — so it is an inhaled rib. Pain on palpation tends to run the entire course of the rib (not one focal spot), which is part of how a rib SD raises Barry&#x27;s eyebrow over a fracture or a focal lesion.</p><p>Intercostal spacing and edge prominence: being stuck in a phase also deforms the spaces and edges, which is where the exam loves a second-order question. Take an inhaled pump-handle rib 2 on the right: because it is held up toward rib 1, the intercostal space above it (to rib 1) is narrowed and the space below it (to rib 3) is widened. The edges flip front-to-back: on an inhaled rib, the anterior inferior edge rides up and is prominent in front, while the posterior superior edge is prominent behind. Reverse all of it for an exhaled rib. You don&#x27;t memorize a table — you reason it from &quot;which way did the rib rotate to get stuck.&quot;</p><p>Inhaled rib: intercostal space above narrows, space below widens; anterior inferior edge prominent in front, posterior superior edge prominent behind. (inhaled-rib exam findings)</p><p>Caliper ribs and rib 1 — the two assessment exceptions. Ribs 11 and 12 move by caliper motion (think a protractor opening), and they couple to the diaphragm: on inhalation an inhaled caliper rib swings posteriorly and inferiorly (the diaphragm descends and pulls them down), while an exhaled one moves anteriorly and superiorly. You assess them prone, walking up the quadratus lumborum from the iliac crest until you hit the 12th rib. Rib 1 is the other exception — 50/50 pump and bucket — so you assess it for both, finding it from the bottom of the earlobe straight down, often pulling the upper trapezius back to reach the cervicothoracic junction. A rib 1 exhalation dysfunction is depressed versus the opposite side, tender at the costotransverse junction, and won&#x27;t move superiorly on inhalation.</p><p><strong>Key:</strong> A dysfunctional rib is stuck in one breath phase. Every finding — painful phase, spacing, edge — follows from which phase.</p><p><strong>Confusion:</strong> Pump vs bucket is about AXIS and PAIN LOCATION, not inhaled/exhaled. A rib can be inhaled-pump or inhaled-bucket.</p><p><strong>Trap:</strong> Pain ON inhalation = the rib won&#x27;t inhale = exhaled rib. The hurting phase is the one it REFUSES, not the one it lives in.</p><p><em>A pump-handle rib is stuck in inhalation. Predict three physical-exam findings — the breath phase that hurts, the intercostal-space change, and which anterior edge rides up — and explain why each follows from &quot;stuck in inhalation.&quot;</em></p>",
  "why": ""
 },
 "3_3": {
  "answer": "<p>Most chest-wall pain is musculoskeletal, not visceral — Barry&#x27;s residency story of cardiologists sending &quot;ruled-out&quot; chest-pain patients to the osteopath makes the point that a rib cage and thoracic spine generate a lot of real pain. This LO is a recognition gallery: each syndrome has one discriminating tell, and the exam tests whether you can name it from that tell.</p><p>The most common cause of chest pain is musculoskeletal, not visceral. (chest-pain epidemiology)</p><p>Costochondritis vs Tietze — swelling is the splitter. Both are irritation of the chondrosternal/chondrochondral junctions, classically ribs 2–5, with tenderness, puffiness, and stringy tissue texture; untreated rib SDs can drive it. The single distinguishing feature: visible edema at the junction upgrades the diagnosis from costochondritis (no swelling) to Tietze syndrome (swelling present). That one finding is the classic test item.</p><p>Cervical rib and thoracic outlet syndrome: a cervical rib is a congenital fibrocartilaginous band (not a true rib) running toward the first thoracic rib; it can compress the lower trunk of the brachial plexus and produce thoracic outlet syndrome — one of the four classic TOS causes. Barry&#x27;s clinical aside is worth keeping: if you suspect TOS and the radiology read is &quot;normal,&quot; look at the cervical-spine film yourself, because the band is easy to miss.</p><p>A cervical rib compresses the lower trunk of the brachial plexus → thoracic outlet syndrome. (cervical-rib TOS)</p><p>Sick scapula, fractures, and shingles: scapular dyskinesis (sick scapula) is confirmed by the scapular repositioning test — retract/stabilize the scapula, repeat the painful flexion, and if the pain resolves the driver is scapular malposition — treat the scapular stabilizers, not the cuff. Rib fractures give focal point tenderness over one or two ribs, and compressing the cage distal to the fracture reproduces pain at the fracture site (not where you press). Shingles (herpes zoster) gives deep, burning, dermatomal pain from varicella reactivation in the dorsal root ganglion — usually one to a few dermatomes on one side, and the pain can precede any rash. Other context: viscerosomatic reflexes can refer cardiac, pulmonary, or GI pain to the rib cage (though musculoskeletal remains the most common source), and pneumonia can cause pleuritic chest pain (with fever, cough, dyspnea) — the MOPSE trial showed OMT cut length of stay and antibiotic use.</p><p>Rib fracture: distal cage compression reproduces pain at the fracture site, not under the examiner&#x27;s hand; pain is focal, not along the whole rib. (fracture vs SD)</p><p>Shingles = deep burning dermatomal pain, one side, from varicella reactivation in the dorsal root ganglion; rash may be absent early. (zoster recognition)</p><p><strong>Confusion:</strong> Costochondritis vs Tietze: identical tender junction — the ONLY splitter is visible swelling (Tietze has it).</p><p><strong>Cue:</strong> Shoulder pain on flexion? Do the scapular repositioning test — if retraction kills the pain, treat the scapular stabilizers, not the cuff.</p><p><strong>Trap:</strong> Rib fracture pain shows up where the rib is broken, not where you press — distal compression localizes it proximally.</p><p><em>Two patients both have tender costochondral junctions. One has visible swelling, one does not. What separates the diagnoses, and what is the practical significance of getting it right?</em></p>",
  "why": ""
 },
 "3_2": {
  "answer": "<p>Naming a rib SD is a fixed four-slot template, and Barry drilled the order so the name is unambiguous. Slot one: side (left or right). Slot two: rib number (and yes, each rib in a group gets its own individual diagnosis even when they move together). Slot three: where it likes to live — inhaled or exhaled — which is the somatic dysfunction. Slot four: the predominant motion — pump, bucket, or caliper. He hammered one principle above all: name it for where it likes to live, not where it&#x27;s restricted.</p><p>You name a rib SD for the position of ease (where it lives / less range of motion), never for the restricted direction. (naming principle)</p><p>Where predominance comes from palpation: you read the fourth slot off where the motion is greatest. Perceived best parasternally / at the costosternal junction → pump-handle. Perceived best at the mid-axillary line → bucket-handle. Ribs 11–12 are caliper. And rib 1 is the exception that proves the rule: it is ~50% pump and ~50% bucket, so you don&#x27;t assign a predominance at all — you simply name it inhaled or exhaled. Rib 1 is the thoracic-inlet rib (rib 1 + manubrium + T1 acting as a unit via Sibson&#x27;s fascia), which is why it warrants its own look.</p><p>Predominance by palpation site: parasternal → pump; mid-axillary → bucket; ribs 11–12 → caliper; rib 1 → no predominance (50/50). (reading the 4th slot)</p><p>B.I.T.E. — treatment order for a group: when several ribs share a dysfunction, the order you treat them in matters, and the mnemonic is B.I.T.E.: Bottom for Inhaled, Top for Exhaled. For a group of inhaled ribs, treat the bottom-most rib first — pushing it inferiorly draws all its neighbors toward exhalation in a caravan, with no roadblock. For a group of exhaled ribs, treat the top-most rib first. Do it backwards and, as Barry put it, you push a rib &quot;into all the other inhale top ribs below it, and you&#x27;re just up against a brick wall.&quot; The prior student who built the study guide literally made BITE the section header — that&#x27;s how central it is.</p><p>Inhaled group → treat the bottom rib first (caravan into exhalation); exhaled group → treat the top rib first; wrong end = mechanical brick wall. (B.I.T.E. mechanism)</p><p>The ME muscle map (rib dance): the &quot;rib dance&quot; treats exhaled pump-handle SDs with muscle energy, and the muscle you recruit is set by rib number: rib 1 = anterior/middle scalene, rib 2 = posterior scalene, ribs 3–5 = pectoralis minor, ribs 6–10 = serratus anterior, ribs 11–12 = latissimus dorsi + QL. This is the map behind the Kahoot answers (rib 1 exhalation → anterior scalene) and the lab practical, so it is worth knowing cold.</p><p><strong>Key:</strong> Four slots, in order: side · rib# · inhaled/exhaled · predominant motion. Slot 3 is the SD; name it for ease.</p><p><strong>Cue:</strong> Group of ribs? Run B.I.T.E.: Bottom for Inhaled, Top for Exhaled — then pick the ME muscle by rib number.</p><p><strong>Clinical pearl:</strong> Rib 1 gets no predominance (50/50 pump/bucket) — just inhaled or exhaled. It&#x27;s the thoracic-inlet rib, worth its own look.</p><p><em>You have a group of ribs 3–6 on the right, all inhaled. Which rib do you treat first, and what goes wrong mechanically if you start at the wrong end?</em></p>",
  "why": ""
 },
 "3_4": {
  "answer": "<p>Barry spent very little lecture time on formal exercise rehabilitation — the one rib-related issue he tied to a concrete rehab plan was scapular dyskinesis, where the move is to send the patient to physical therapy to strengthen and stretch the scapular stabilizer muscles rather than chasing the rotator cuff. His reasoning is mechanistic: a malpositioned scapula drives the acromion into the supraspinatus, so correcting stabilizer balance and position addresses the cause of the impingement instead of the downstream cuff irritation. Beyond that, rehab here is general — restore rib and thoracic motion (often with the OMT and muscle-energy work from LO 2), then reintroduce breathing and postural mechanics. This LO is intentionally light because the lecture treated it lightly; the testable nugget is the scapular-stabilizer referral.</p>",
  "why": ""
 },
 "4_2": {
  "answer": "<p>Epidemiology: the annual incidence is 5–26 per 100,000 per year — a broad range, but higher than most expect for a condition many clinicians have never heard of (Barry’s opening Kahoot point). CRPS skews strongly female, with a female-to-male ratio of about 3–4:1; the median age of onset is around 46, with a peak in women between 61–70. Split it into buckets: in adults, the upper extremity is most commonly affected and fracture is the most common precipitant; in children, CRPS is rarer, even more female-predominant (75–90%), tends to hit the lower extremity, and carries a better prognosis but a higher recurrence rate.</p><p>Incidence 5–26/100,000/yr; female 3–4:1; adults UE + fracture-driven; kids LE + better prognosis. (epidemiologic skew)</p><p>Precipitants by frequency: fracture is number one (~42%), classically the distal radius (Colles’); then blunt trauma, crush injuries, and sprains. Surgery (orthopedic, carpal tunnel, shoulder) precipitates about 12%; nerve entrapment about 7%; and roughly 5% is truly spontaneous with no identifiable trigger. Myocardial infarction, stroke, and even venipuncture round out the notable-but-uncommon list. The history of the disease runs deep — Paré after royal bloodletting, Mitchell’s Civil War “causalgia,” Sudeck’s x-ray atrophy — but Barry was explicit that he would not hold you to the historical dates, so know that the syndrome has been recognized for centuries and move on.</p><p><em>In an adult, what is the single most common precipitating event for CRPS, and at which classic fracture site?</em></p>",
  "why": ""
 },
 "4_1": {
  "answer": "<p>CRPS is one of Barry’s favorite topics, and the first job is simply to recognize it. The definition does the heavy lifting: spontaneous or evoked pain that is disproportionate in severity or duration to the inciting injury — more pain than the injury should produce in a “normal” person. The pain does not follow a dermatome (so it is not radicular in origin), it is distal-predominant (hands and feet), and it comes with abnormal sensory, motor, autonomic, and trophic findings. The course is variable — it can improve, stabilize, or worsen. Hold onto three words: disproportionate, non-dermatomal, distal. That triad is the recognition signature.</p><p>Barry frames everything in buckets. Pain is either nociceptive (a real stimulus activating nociceptors) or neuropathic (arising from injury/dysfunction of the nervous system itself), and within those he tracks peripheral vs central sensitization. Two definitions you must own at recognition: allodynia is pain from a stimulus that is not normally painful — a feather, a sock — and hyperalgesia is an abnormally high level of pain from a stimulus that would normally hurt. His teaching device: stub your toe, then drop a phone on that same toe the next day and it hurts far more than the phone alone would (hyperalgesia); versus pulling a sock over a foot you never injured and feeling excruciating burning (allodynia).</p><p>Allodynia = pain from a normally non-painful stimulus; hyperalgesia = exaggerated pain from a normally painful one. (the sock vs the stubbed toe)</p><p>Type I vs Type II is the single most-tested CRPS fact, and Barry restated it three times. In 1994 the old term RSD (reflex sympathetic dystrophy) was retired and replaced by two CRPS types. Type I = the disproportionate regional pain syndrome with NO confirmed nerve lesion (it replaced RSD). Type II = the identical clinical picture but WITH a confirmed peripheral nerve lesion (it replaced causalgia). The presence or absence of a confirmed nerve injury is the entire distinction — not severity, not stage, not which limb. As Barry put it: “Type 1, no confirmed nerve lesion. Type 2, confirmed peripheral nerve lesion. Know that, please.” The name CRPS is deliberately descriptive: Complex (multi-system: sensory, autonomic, motor, trophic), Regional (a body region, usually a distal limb, non-dermatomal), Pain (the cardinal, disproportionate feature), Syndrome (a cluster, not one mechanism).</p><p>A student asked Barry the discriminator between CRPS and fibromyalgia directly. Both are painful conditions with peripheral and central sensitization, so they overlap — but CRPS is regional (usually one limb, one side) with objective findings (vasomotor, sudomotor, trophic), whereas fibromyalgia is widespread across all four quadrants for at least three months without those objective findings. Regional-with-objective-signs versus widespread-without is the clean separation.</p><p>Pain perception: where do we feel pain? The stimulus is transduced peripherally but perceived centrally — the basis for “the pain is in your head.” The Budapest 2003 criteria and the CRPS type split go together: Type I (no confirmed nerve lesion, was RSD) vs Type II (confirmed nerve lesion, was causalgia).</p><p><strong>Key:</strong> The recognition triad: pain that is disproportionate, non-dermatomal, and distal. If the pain follows a dermatome, think radiculopathy; if it is widespread across four quadrants, think fibromyalgia.</p><p><strong>Confusion:</strong> Type I vs II is decided ONLY by a confirmed nerve lesion (II has one, I does not). It is NOT a severity scale and NOT the same as the 1–3 stages — a severe Type I is still Type I.</p><p><strong>Clinical pearl:</strong> Barry’s thesis: “the pain is always in your head” — meaning real and centrally processed in the somatosensory cortex, NOT imagined. Validate the pain even as you involve psychiatry.</p><p><em>A patient has burning, disproportionate pain confined to one hand after a wrist fracture, not following any dermatome. What single piece of data tells you whether this is CRPS Type I or Type II?</em></p>",
  "why": ""
 },
 "4_3": {
  "answer": "<p>CRPS manifests across four domains, and the Budapest criteria are built on them. Sensory: severe constant burning/aching pain with allodynia and hyperalgesia. Vasomotor: skin color changes (red, pale, mottled) and temperature asymmetry — the affected limb runs a measurably different temperature you can capture on thermography. Sudomotor: edema and increased or decreased sweating (stage-dependent). Motor/trophic: weakness, reduced range of motion (the most common motor finding), tremor/dystonia, sometimes limb neglect, plus trophic skin/hair/nail changes and the patchy bony demineralization Sudeck first described.</p><p>Four domains: sensory (burning, allodynia), vasomotor (color, temp asymmetry), sudomotor (edema, sweat), motor/trophic (ROM loss, dystrophy). (the Budapest domains)</p><p>Onset is days to weeks post-injury and distal-predominant. Additional symptoms: reduced ROM is the most common motor finding, along with limb weakness, and movement disorders appear in about 25% (bradykinesia, dystonia, myoclonus, tremor). A CRPS following a distal radial fracture shows marked swelling of the affected hand — fracture is the most common precipitant.</p><p>“The pain is always in your head” — the sensitization mechanism, Barry’s thesis stated several times: pain is real but it is processed centrally. Trace it. Nociceptive pathway: a noxious stimulus fires primary afferents (A-delta and C fibers) to the dorsal horn; glutamate and substance P cross the first synapse; the signal ascends the spinothalamic tract through the thalamus to the somatosensory cortex — “which I believe is in the brain, so the pain is always in your head.” Peripheral sensitization: tissue injury releases an “inflammatory soup” (prostaglandins, bradykinin) that lowers nociceptor thresholds, and retrograde substance P triggers mast-cell histamine release (neurogenic inflammation) — so afferents fire more for less, intensifying primary hyperalgesia and allodynia. Central sensitization: persistent C-fiber barrage drives wind-up via NMDA-receptor activation, dorsal-horn neurons become hyperexcitable, receptive fields expand (secondary hyperalgesia spreads pain beyond the injury), and descending GABA/glycine inhibition is lost. This is why pain persists long after the tissue heals.</p><p>Central sensitization = NMDA-driven wind-up + receptive-field expansion + loss of GABA/glycine inhibition. (why pain outlives the injury)</p><p>Neuropathic add-ons: in neuropathic pain (and CRPS Type II especially), two extra mechanisms appear. Ectopic activity: sodium channels accumulate at the injury site and fire spontaneous action potentials with no stimulus. Ephaptic transmission: damaged fibers crosstalk to adjacent healthy fibers by direct electrical coupling, no synapse — Barry’s frayed-wire short-circuit. This crosstalk expands the receptive field and explains the diffuse spread of CRPS pain.</p><p>Stages 1–3 — stage 3 is irreversible. Stage 1: severe pain limited to the injury site, hyperesthesia, localized edema, decreased mobility, and skin that is warm, red, moist with increased hair/nail growth. Stage 2: pain intensifies and spreads, edema turns brawny and non-pitting, hair growth decreases and nails grow brittle/cracked, skin becomes cyanotic and cool, and spotty/patchy osteoporosis appears on x-ray. Stage 3: marked dystrophy and atrophy that becomes IRREVERSIBLE, contractures, persistent edema, and livedo reticularis. The trap to internalize: burning pain is present in all three stages — it is the irreversible atrophy that delineates stage 3 (the Kahoot baited exactly this).</p><p>Livedo reticularis is the stage-3 skin sign: lace-like, purplish, mottled discoloration. The mechanism is sympathetic dysregulation — arteriolar/vasospasm reduces capillary perfusion, and deoxygenated blood pools in the subpapillary venous plexus, producing the net-like pattern. It reflects the impaired microvascular tone of advanced CRPS.</p><p><em>Burning pain is present at every stage of CRPS. What single feature tells you a patient has progressed specifically to stage 3?</em></p>",
  "why": ""
 },
 "4_4": {
  "answer": "<p>Diagnosis first — it is clinical. Before treatment, anchor the diagnosis: CRPS is a clinical (Budapest) diagnosis with no confirmatory lab or imaging. Standard inflammation labs (ESR, CRP) are normal. Autonomic tests — resting sweat output (RSO), QSART, resting skin temperature — are highly sensitive/specific (RSO ~94%/98% with an abnormal QSART) but require an 8–10-hour protocol, so they are not routine. For imaging, bone scan is preferable to plain radiographs in stage 1 — Barry said it twice, “I repeat” — because three-phase scintigraphy shows diffuse periarticular uptake before the stage-2 patchy osteoporosis appears on film. Critically, do not defer treatment waiting for imaging; delay worsens prognosis.</p><p>CRPS is a clinical (Budapest) diagnosis — no confirmatory test; bone scan preferred over plain films in stage 1. (diagnostic pearls)</p><p>The sympathetic block and its one-way logic: a stellate ganglion block (for an upper-limb CRPS) injects anesthetic into the sympathetic ganglion; if pain and temperature improve, that is a positive diagnostic (and therapeutic) test. But the logic runs one way: a negative block does NOT rule out CRPS. Barry’s analogy is Spurling’s cervical compression test — a positive test confirms foraminal stenosis, but a negative test does not exclude it. Absence of response is not absence of disease.</p><p>Throw the book — multimodal treatment. Barry’s strategy is aggressive and multi-agent, to dampen pain and stop spread. Pharmacotherapy: opioid and non-opioid analgesics, NSAIDs and steroids, TCAs, sodium-channel blockers, gabapentin (neuropathic pain), GABA agonists like baclofen (dystonia/motor symptoms), beta-blockers, clonidine. PT/OT is essential and will be excruciating at first — but it retrains the neural matrix to learn that the movement is not actually causing tissue damage. Psychotherapy builds coping and metacognition (and you preface the referral by telling the patient you are not calling them crazy). Sympathetic blocks, and if effective, sympathectomy/ablation or spinal cord stimulation. For refractory cases, ketamine — an NMDA antagonist — turns the “highway of pain into smaller tributaries,” the legitimate mechanism behind Maya Kowalski’s regimen.</p><p>Refractory CRPS: ketamine = NMDA antagonist dampening central sensitization / wind-up. (ketamine mechanism)</p><p>OMT — mind the osteoporosis. OMT helps: normalize the CNS, improve blood flow, decrease pain, improve mobility. But the patchy demineralization of CRPS makes bone fragile, so use HVLA with caution — Barry said he is “not using HVLA in any of my CRPS patients” and reaches for indirect techniques, which these patients tolerate far better.</p><p><strong>Cue:</strong> Do NOT defer treatment to wait for imaging — CRPS is a clinical Budapest diagnosis and delay worsens prognosis. Start PT/OT and pharmacotherapy early.</p><p><strong>Trap:</strong> A negative sympathetic block does not exclude CRPS (Spurling analogy). Only a positive block is confirmatory; do not “rule out” on a non-response.</p><p><strong>Clinical pearl:</strong> Refractory CRPS → ketamine, an NMDA antagonist that dampens central wind-up. This is the legitimate treatment at the center of the Maya Kowalski case — awareness saves patients.</p><p><em>A CRPS patient gets no relief from a stellate ganglion sympathetic block. Does this rule CRPS out — and what analogy did Barry use to make the point?</em></p>",
  "why": ""
 },
 "5_3": {
  "answer": "<p>WHAT YOU TOUCH — the articular pillars. Cervical diagnosis is hands-on. You palpate the articular pillars — the lateral masses between the superior and inferior facets, about a fingertip in size — from the side of the neck, not the back. You do not press the transverse processes (nerves exit there and the muscular attachments are tender). Landmarking: drop straight down from the mastoid process to land on the C2 articular pillar, then step one finger-breadth per level down to C7 — by C7 you should run into the first rib or the T1 transverse process. A longer neck is easier to palpate (less tissue in the way).</p><p>Palpate and translate the articular pillars from the side — NOT the transverse processes (tender, nerves exit). (palpation target)</p><p>FINDING THE MUSCLES. The scalenes sit just posterior to the SCM — find the SCM, line your fingers behind it, and you are on anterior → middle → posterior scalene. For the suboccipital muscles you use the OAD-compression hold: your most-midline finger sits on rectus capitis posterior minor, slightly more lateral is posterior major. The splenius (“bandage”) muscles are what you feel during the perpendicular soft-tissue stretch (holding the forehead, pulling up the opposite side of the neck); semispinalis is right lateral to the spinous processes. The deep longus colli and rectus capitis muscles are essentially not palpable — you treat them indirectly (counterstrain/FPR), not by direct palpation.</p><p>CERVICOGENIC HEADACHE — the highest-yield pearl. When you find tightness in the most-midline suboccipital finger (RCP minor), that is a major cervicogenic-headache generator: a myodural bridge connects rectus capitis posterior minor to the intracranial dura (first reported in Spine Journal, 1997), and the dura carries pain-sensitive fibers — so you are pulling on something exquisitely pain-sensitive. It is also very easy to treat: put your fingers on it and wait. Check it on every headache patient during OAD compression.</p><p>Slide suboccipital detail: rectus capitis posterior MAJOR (origin SP of axis/C2; extends/rotates the OA; slightly lateral in the OAD hold) and rectus capitis posterior MINOR (origin posterior tubercle of C1; the myodural-bridge muscle; most-midline finger in the OAD hold). Cervicogenic headache arises from the myodural bridge running from RCP minor to the pain-sensitive intracranial dura (Spine Journal, 1997). The articular pillars (lateral masses between the superior/inferior facets) are the palpation/translation target.</p><p><em>You push the articular pillar from the left toward the right and meet restriction. In plain sidebending terms, what motion is restricted and where does the segment live?</em></p>",
  "why": ""
 },
 "5_1": {
  "answer": "<p>WHY THE NECK MATTERS. Before the anatomy, Widboom frames why you treat a cervical spine at all. The obvious reasons are neck pain and headache (the biggest one — patients do very well with OMT for headaches). But also: vertigo has a strong association with C2 dysfunction (dural attachments to C2, expanded in cranial), diaphragm function rides on C3–C5 (“C3, 4, 5 keep the diaphragm alive” — so post-surgical or abdominal complaints can trace to the neck), and sympathetic cardiac control runs through the stellate ganglion. Shoulder or upper-extremity complaints can actually be the neck — so you “clear the neck” with range of motion and special tests first.</p><p>INTRINSIC vs EXTRINSIC. The neck balances two muscle classes. Intrinsic muscles are deeper, closer to the axis of rotation, generally smaller — they give precise control of individual-segment motion. Extrinsic muscles sit farther from the axis, are larger/longer, and provide power but lack precise segmental control. Trapezius is the most superficial extrinsic muscle (it covers so much area it generates many different complaints); levator scapulae tightens with forward-head posture (tender point at the superomedial scapular border).</p><p>Intrinsic = deep, near the axis, precise segmental control; extrinsic = far, larger, power not precision. (muscle-class framing)</p><p>ATYPICAL C1 &amp; C2. C1 (atlas) and C2 (axis) are atypical. C1 has no spinous process (only a usually-non-palpable posterior tubercle) and no vertebral body — its body was “stolen” by C2 as the dens. C2 (axis) carries the dens projecting superiorly. The dens and the intervertebral discs are remnants of the notochord. The typical C2–C6 vertebrae have bifid (two-pronged) spinous processes that fade by C7. The first large spinous process you palpate coming off the occiput is C2 — it has heavy muscular attachments that stabilize the head during speech (Widboom’s aside: a big C2 SP means “they probably talk a lot”).</p><p>Slide anatomy walked the bony cervical vertebrae with the distinct shapes of C1 (atlas) and C2 (axis); the intrinsic (deep, near axis, precise) vs extrinsic (far, larger, powerful) muscle balance; the muscles of the neck (trapezius, levator scapulae, splenius cervicis/capitis, semispinalis, longissimus, scalenes, SCM, rotatores, multifidi); the intrinsic flexors (rectus capitis anterior/lateralis in the upper neck and longus capitis/colli below); the atypical cervical vertebrae C1 (no SP or body) and C2 (dens projecting superiorly to articulate with C1); and the typical cervical vertebra with its bifid spinous process, foramen transversarium, and the articular pillars you palpate.</p><p><em>Which suboccipital muscle has a myodural bridge to the intracranial dura, and why does that make it a headache generator?</em></p>",
  "why": ""
 },
 "5_2": {
  "answer": "<p>THE UNIFYING THEME. A pattern runs through nearly every cervical muscle: acting bilaterally they flex or extend; acting unilaterally they sidebend and/or rotate. Hold that template and most individual muscles fall into place. The flexors (anterior) flex bilaterally; the posterior extensors extend bilaterally; either group sidebends/rotates when only one side fires.</p><p>SCALENES — the anxious breather. The scalenes are high-yield. Unilaterally they sidebend to the SAME side; bilaterally they flex; and they are accessory muscles of respiration — anterior and middle elevate the 1st rib, posterior elevates the 2nd rib. The classic patient “lives in their head” (stressed/anxious), breathes with the neck instead of the diaphragm, and develops tight scalenes → brachial-plexus symptoms, numbness/tingling especially in digits 4–5. Find them just posterior to the SCM: line your fingers up behind the SCM and you are on anterior, then middle, then posterior scalene. The fix is to teach diaphragmatic breathing and treat ribs, thoracics, scalenes, and cervicals.</p><p>Scalenes: unilateral → ipsilateral sidebend; bilateral → flexion; accessory respiration (ant/mid → 1st rib, post → 2nd rib). (scalene actions)</p><p>SCM — the counterintuitive one. The sternocleidomastoid (sterno- + cleido-/clavicle + mastoid) sidebends ipsilaterally but rotates CONTRALATERALLY — picture bringing the mastoid toward the opposite sternoclavicular joint. Bilaterally it flexes (or protracts the head, or extends an already-extended neck). It shares the spinal accessory nerve with the trapezius. Both SCM and trap can refer pain into the head (temporal/peri-orbital), so a “headache” around the eye is frequently the neck.</p><p>THE ROTATION-PAIN RULE. Widboom’s clinical shortcut: semispinalis pain presents as pain turning the OPPOSITE way — pain on turning left points to the right semispinalis. Rotatory complaints also implicate the AA, the big rotatory joint. Longissimus capitis is more of a sidebender (and showed up as clinically relevant in his headache case). The deep longus colli is the major cervical flexor spanning the whole cervical spine — hard to palpate, but reachable indirectly (counterstrain/FPR in flexion, then stretched in extension); it is implicated in post-anesthesia vertigo from over-stretch during intubation.</p><p>Slide muscle map: scalenes (unilateral ipsilateral sidebend, bilateral flexion, accessory respiration; ant/mid → 1st rib, post → 2nd rib); sternocleidomastoid (ipsilateral sidebend + CONTRALATERAL rotation, bilateral flexion, shares CN XI with trapezius); SCM &amp; trapezius pain referral into the head (temporal/peri-orbital) so a “headache” around the eye is often the neck; the extrinsic cervical extensors with upper trapezius and levator scapulae as the big ones; and longissimus capitis (bilateral extension, unilateral flexion/sidebending to the same side), relevant in Widboom’s headache case.</p><p><em>A patient has pain only when turning the head to the left. Which muscle is the likely culprit, and what is the general rule for muscle pain with rotation?</em></p>",
  "why": ""
 },
 "5_4": {
  "answer": "<p>THREE STYLES OF MECHANICS. This is the heart of the lecture, and the cervical spine forces you to learn three diagnosis styles instead of one. They are modified Fryette — similar to thoracic/lumbar triads but not identical. The carryover trap Widboom flagged twice on the slide: the cervical spine does NOT follow Fryette’s Principles 1 &amp; 2. Coupled motion (sidebending + rotation together) still changes with the AP curve, but the coupling direction follows region-specific rules.</p><p>OA — Opposite Always. The occipitoatlantal joint (occiput on C1, called C0–C1). Primary motion is flexion/extension (the nodding of the head, as the occipital condyles articulate with C1). Sidebending and rotation are ALWAYS opposite, regardless of flexion, extension, or neutral — “OA = Opposite Always.” So an OA can be sidebent left/rotated right whether neutral, flexed, or extended; it is never same-side. Most OAs are flexed or extended rather than neutral.</p><p>AA — rotation, ~50%. The atlantoaxial joint (C1 on C2). Primary motion is rotation, and the AA supplies about 50% of all cervical rotation; sidebending there is extremely limited. Full head flexion isolates AA rotation — lock everything else by flexing, then whatever rotation remains is the AA. An AA diagnosis records rotation only (no AP curve, no sidebending).</p><p>C2–C7 — same side. The typical segments couple sidebending and rotation to the SAME side, regardless of AP curve (a “modified type 2” behavior). Examples: NSrRr, ESrRr, FSrRr. Within the block, upper segments (C2–C4) favor rotation and lower (C5–C7) favor sidebending — you can feel this: turning the head is mostly upper-cervical, sidebending mostly lower.</p><p>C2–C7: sidebending &amp; rotation SAME side; C2–C4 rotate more, C5–C7 sidebend more. (typical-segment coupling)</p><p>TRANSLATION = SIDEBENDING. To test C2–C7 you do not press the transverse processes for rotation — you press the articular pillars from the side to induce sidebending, a motion called translation. The practical rule: push left → sidebend left; push right → sidebend right. The exam complicates this with the words “translation” and “restriction.” Convert every stem to plain sidebending: limited translation right = restriction when you push from the left = restricted LEFT sidebending = the segment lives in RIGHT sidebending. Sidebending is opposite the restriction.</p><p>THE 3-PART DIAGNOSIS — worked. A written diagnosis has three parts: Type (AP curve — N/F/E), SR (sidebending + rotation, coupled by region), and direction of freedom. Walk the two canonical examples. (1) C3, limited translation right, improves in BOTH flexion and extension: improves both ways → neutral; limited translation right → lives in right sidebending; C2–C7 couples same-side → rotated right → C3 NSRRR. (2) OA, limited translation right, improves in EXTENSION not flexion: → extended; lives in right sidebending; OA couples opposite → rotated left → OA ESRRL. For the AA, full-flex then rotate each way and name the freedom: free left/restricted right → AA rotated left.</p><p>Facet orientation: cervical superior facets face Backward, Upward, Medial (BUM) and this determines preferred cervical motion — the bumble-BUM mnemonic, with thoracic facets Backward-Upward-Lateral (BUL). Motion testing/translation: push left induces LEFT sidebending; the exam calls this “translation,” but think push-left-sidebend-left. Nomenclature has 3 parts — Type (N/F/E AP curve), SR (sidebending + rotation), direction of freedom — and the AA records rotation only.</p><p><strong>Key:</strong> Three modified rules, memorized cold: OA = Opposite Always, AA = rotation (~50%, full-flex isolates), C2–C7 = same side. The cervical spine does NOT follow Fryette 1 &amp; 2.</p><p><strong>Confusion:</strong> Translation vs restriction: limited translation right means restricted LEFT sidebending, so the segment LIVES in RIGHT sidebending. Always convert the wording to plain sidebending before naming.</p><p><strong>Cue:</strong> Build the diagnosis in order: AP curve from flexion/extension behavior (improves both → neutral) → sidebending from the translation restriction → rotation from the coupling rule (OA opposite, C2–C7 same).</p><p><em>A patient has limited translation to the right at the OA that improves in extension. Walk the rule to the full three-part diagnosis.</em></p>",
  "why": ""
 },
 "6_2": {
  "answer": "<p>THE SYMPTOM PATTERN. The cardinal symptom is pain, and its geography matters: pain is most intense PROXIMALLY — neck pain is the most common complaint — then refers in a dermatomal pattern, while paresthesias (tingling/numbness) are more noticeable DISTALLY, radiating down the arm on the side of the compressed root. The radiating pain is classically “shooting” or “electrical,” and it worsens with coughing or Valsalva. Decreased motor function, and eventually muscle atrophy if prolonged, plus deep-tendon-reflex changes complete the picture.</p><p>Radiculopathy pain is most intense proximally (neck); paresthesias are distal; radiation is shooting/electrical, worse with Valsalva.</p><p>REFLEX GRADING — the 2-neuron arc. A normal deep-tendon reflex is a two-neuron arc: a brisk tendon tap stretches the muscle spindle, the afferent neuron (cell body in the dorsal root ganglion) synapses on the alpha motor neuron in the anterior horn, and the muscle contracts. By convention reflexes are graded 0 = no response, 1 = slight but present, 2 = brisk/normal, 3 = very brisk (may or may not be normal), 4 = a tap elicits clonus — sustained jerking, always abnormal. Hyporeflexia points to an interruption of the arc itself (a lower-motor / root problem); hyperreflexia and clonus point to loss of descending corticospinal control (an upper-motor / suprasegmental lesion).</p><p>THE C5–T1 NERVE-ROOT CHART — memorize it. Barry flagged the chart figure as “extremely important… to memorize, to understand,” and it threads through the whole lecture. Walk it root by root (motor / reflex / sensation). C5 (disc C4–C5): deltoid &amp; biceps / biceps reflex / lateral arm. C6 (disc C5–C6): wrist extensors / brachioradialis reflex / thumb &amp; index. C7 (disc C6–C7, the MC): finger extensors / triceps reflex / middle finger. C8 (below C7): finger flexors / no reliable reflex / ulnar 4th–5th digits. T1: hand interossei (finger abduction) / no reflex / medial arm. Note the cervical roots exit ABOVE their like-numbered vertebra through C7; C8 fills the gap below C7. And note: Barry will not test full-body myotomes — just this cervical chart.</p><p>C5 deltoid/biceps; C6 wrist-ext/brachioradialis/thumb; C7 finger-ext/triceps/middle; C8 finger-flex/ulnar 4–5; T1 interossei/medial arm.</p><p>Root-by-root signatures (disc level in parentheses). C5 — motor deltoid/biceps; biceps reflex; sensation lateral arm (C4–C5). C6 — motor wrist extensors; brachioradialis reflex; sensation thumb/index (C5–C6). C7 — motor finger extensors; triceps reflex; sensation middle finger (C6–C7, most common). C8 — motor finger flexors; no reliable reflex; sensation ulnar 4th–5th digits. T1 — motor hand interossei (finger abduction); no reflex; sensation medial arm / inner elbow. Pain is most intense proximally (neck), referred dermatomally; paresthesias are more noticeable distally; the radiation is “shooting/electrical,” worse with cough/Valsalva.</p><p><strong>Key:</strong> The C5–T1 chart is the single highest-yield figure: each root has a motor, a reflex, and a sensation signature. A one-sided discrepancy on quick dermatomal testing localizes the pinched root.</p><p><strong>Clinical pearl:</strong> C7 is the one to anchor first — it is the MOST COMMON radiculopathy (C6–C7 disc): finger extensors, triceps reflex, middle finger.</p><p><strong>Confusion:</strong> Cervical roots exit ABOVE their like-numbered vertebra (through C7); C8 fills the gap below C7, and thoracic roots exit below their vertebra. Do not off-by-one the level.</p>",
  "why": ""
 },
 "6_1": {
  "answer": "<p>WHAT IS A RADICULOPATHY. Stedman’s defines radiculopathy as a disease of the spinal nerve ROOTS — and that root-level location is the whole frame for this lecture. It is not spinal-cord compression (that is myelopathy) and not a peripheral-nerve problem (that is entrapment); it is compression of the anterior and posterior nerve roots as they form the spinal nerve and exit the neural foramen. Epidemiology: mean age ~48, male-to-female ratio about 1.7:1.</p><p>COMPRESSIVE ETIOLOGIES — the big bucket. The etiologies you care about most are compressive. The headline fact, which Barry stated three-plus times (the transcript literally repeats the sentence): the most common disc herniation is at C6–C7, producing symptoms at the C7 nerve root. Degenerative disease with spurring — cervical spondylosis — and spinal stenosis round out the compressive causes.</p><p>NON-DEGENERATIVE ETIOLOGIES. Do not forget the non-degenerative bucket: tumor, systemic infection (and processes like herpes zoster or Lyme with nerve-root involvement), granulomatous infiltration, and demyelinating processes. A history of fever, chills, unexplained weight loss, immunosuppression, cancer, or IV drug use raises suspicion for these — the red flags that change the workup.</p><p>Summary — a radiculopathy is a disease of the spinal nerve roots (root compression, not cord, not peripheral); mean age ~48, M:F ~1.7:1. Etiologies divide into compressive (disc herniation, MC at C6–C7→C7; cervical spondylosis; stenosis) versus non-degenerative (tumor, infection, systemic disease).</p>",
  "why": ""
 },
 "6_4": {
  "answer": "<p>THE CORE EXAM. Build the exam around the chart: muscle-strength testing (know which muscle maps to which root), sensory testing by pinprick and light touch along the dermatomes (Barry’s bedside trick: “tell me if this side feels the same or different” while stroking both arms equally — patients surprise themselves by noticing a dull 5th digit), and deep tendon reflexes (a one-sided diminished reflex localizes the root).</p><p>SPECIAL TESTS — Spurling, distraction, Valsalva. Spurling’s compression test (extension + sidebending toward the symptomatic side with axial load) WORSENS radicular symptoms by narrowing the neural foramen — a positive test strongly suggests foraminal compression. Cervical distraction does the opposite: it IMPROVES symptoms by opening the foramen and giving the nerve room. The Valsalva maneuver worsens symptoms when a mass-occupying lesion or herniation is present (raised intraspinal pressure).</p>",
  "why": ""
 },
 "7_1": {
  "answer": "<p>Eldemire framed the whole lecture around treating the lung through the autonomics, and the single most useful idea is a two-column ledger of what each division does — plus the time-dependence that flips sympathetics from helpful to harmful. The lungs receive sympathetic fibers from T2–T7 and parasympathetic fibers from the vagus nerve (CN X). Get the ledger straight and most of the treatment decisions fall out of it.</p><p>Pulmonary sympathetics = T2–T7; parasympathetics = vagus (CN X).</p><p>The time-dependence trap: sympathetic stimulation bronchodilates — great when you need an airway open now. But here&#x27;s where the exam sets you up: prolonged sympathetic tone causes vasoconstriction, cutting blood flow to the lung, and thickens secretions. So in a chronic disease (COPD, resolving pneumonia) the sympathetic story is the villain — a self-reinforcing cycle of facilitation → sympathetic tone → poor perfusion → poor healing. The same &quot;calm the sympathetics&quot; goal that&#x27;s right for pneumonia is exactly wrong for an acute asthma attack, where you briefly want the bronchodilation.</p><p>Prolonged sympathetic tone → vasoconstriction + decreased lung perfusion + thickened secretions (the chronic-disease villain).</p><p>Functional anatomy: sympathetic supply T2–T7, parasympathetic via the vagus (CN X), lungs drain mainly to the right lymphatic duct. Increased sympathetic (T2–T7) tone → bronchodilation, vasoconstriction of vessels, and thickened secretions over time. The vagus exits near the OA and passes by C1–C3; increased parasympathetic tone bronchoconstricts and thins secretions.</p><p>Where to treat each division: the anatomy hands you the targets. To modulate sympathetics, work the T2–T7 paraspinals (rib-raising, paraspinal inhibition). To normalize vagal tone, treat the OA, C2–C3, and cranial base — the vagus exits the skull at the jugular foramen and runs in close relation to the upper cervicals, so OA decompression and upper-cervical work are the parasympathetic lever. Thinning a productive cough&#x27;s secretions is a parasympathetic job; quick bronchodilation is a sympathetic one.</p><p>Chapman points — the consistent sympathetic lever. There are Chapman points for the bronchial tree and the upper and lower lung (anterior near the sternum in the 2nd–3rd intercostal spaces; posterior between the spinous and transverse processes of T2–T5). The key fact Eldemire stressed: treating a Chapman point always decreases sympathetic activity to the related viscera — regardless of whether the cough is productive or dry. That makes them most useful in chronic disease, where breaking the hypersympathetic cycle is the whole game. (Chapman points are admittedly rare, but when present, treating them reliably calms sympathetics.)</p><p>Treating a Chapman point always decreases sympathetic activity to the related viscera — regardless of symptom pattern.</p><p>The viscerosomatic reflex: a visceral afferent drives cord facilitation at the related segment, producing somatic tissue-texture change there (and feeding back to the organ and its vasculature).</p><p><strong>Key:</strong> Two-column ledger: SNS = bronchodilate (then vasoconstrict + thicken); PNS/vagus = bronchoconstrict + thin secretions.</p><p><strong>Confusion:</strong> Sympathetic is good ACUTELY (bronchodilation) but bad CHRONICALLY (vasoconstriction). Same input, opposite value by timeframe.</p><p><strong>Cue:</strong> Productive cough → raise vagal tone (OA/C2–C3) to thin secretions. Chronic disease → calm sympathetics (T2–T7, Chapman).</p><p><em>Your patient needs quick bronchodilation in an acute attack but also has thick secretions you want to thin. Which autonomic input does each goal call for, and how can the SAME goal (calming sympathetics) be right for pneumonia but wrong for an acute asthma attack?</em></p>",
  "why": ""
 },
 "7_3": {
  "answer": "<p>Pneumonia&#x27;s physiology is a chain you can reason through rather than memorize: infection → inflammation, exudate, and falling surfactant → a stiff, fluid-filled lung → two reflexes that together produce the bedside picture of rapid, shallow breathing. Layer the autonomic cycle (facilitated T2–T7 segments → sympathetic tone → vasoconstriction) on top, and you have both why the patient looks the way they do and where OMT intervenes.</p><p>Pneumonia pathogenesis: inflammation + exudate + ↓ surfactant → congestion and compromised gas exchange.</p><p>The Hering-Breuer reflex — the shallow half. Airway stretch afferents normally limit over-inflation, but they cannot distinguish a lung filled with air from one filled with fluid. In pneumonia the fluid-filled lung trips the reflex, which signals &quot;full&quot; and limits diaphragm excursion — so the patient breathes shallowly. It&#x27;s classically described in babies but happens in adults with pneumonia. This is the half of the pattern most students miss the mechanism for.</p><p>The carotid body — the rapid half. Shallow breathing means less oxygenation; the O2-responsive carotid body senses the hypoxia and ramps the respiratory rate up to compensate. Put the two reflexes together and you get the classic sick-pneumonia bedside finding: rapid and shallow — Hering-Breuer caps the depth, the carotid body drives the rate. Meanwhile the sympathetic side runs in parallel: visceral afferents create facilitated segments at T2–T7, and prolonged tone → vasoconstriction → the painful cycle.</p><p>The phrenic nerve and the diaphragm&#x27;s MSK footprint. The phrenic nerve (C3-C4-C5) drives the diaphragm, so diaphragmatic stress reaches outward to the lower six ribs and the thoracolumbar junction — the MSK regions you treat (T1–T6 paraspinals show increased tone). A flattened, poorly moving diaphragm also kills the thoracoabdominal vacuum that pumps lymph, feeding the congestion cycle. The same C3-C4-C5 link explains hiccups (singultus): the diaphragm spasming out of sync, treatable by addressing the upper cervical spine — there are case reports of OMT and even C3-C5 nerve-root injections curing refractory hiccups.</p><p>Rapid-shallow breathing in pneumonia = Hering-Breuer (shallow) + carotid body (rapid).</p><p><strong>Key:</strong> Rapid-shallow = TWO reflexes: Hering-Breuer limits depth (can&#x27;t tell air from fluid), carotid body drives rate (senses hypoxia).</p><p><strong>Clinical pearl:</strong> C3-4-5 keeps the diaphragm alive — and treating C3–C5 can cure refractory hiccups (singultus), an OMT party trick with real case reports.</p><p><strong>Cue:</strong> Diaphragm stress → treat the lower six ribs + thoracolumbar junction; a flat diaphragm kills the lymphatic vacuum.</p><p><em>A pneumonia patient breathes rapidly AND shallowly. Name the two reflexes responsible — one for each half of that pattern — and explain why the diaphragm gets implicated through the phrenic nerve.</em></p>",
  "why": ""
 },
 "7_4": {
  "answer": "<p>The frame: every pulmonary disease is treated through three levers — structure (ribs, thorax, diaphragm), autonomics (T2–T7 sympathetics; vagus for parasympathetics), and lymphatics — always in conjunction with medical therapy, never instead of it. Two order-of-operations rules dominate the board questions and sit on top of everything below: open the thoracic inlet FIRST for any lymphatic work, and do not run pump techniques until the patient is afebrile.</p><p>Pneumonia — goals and specific OMT. The goals are to improve venous and lymphatic flow, improve arterial circulation to carry immune products in, ease removal of accumulated secretions, and decrease the work of breathing — all of which reduce to one phrase Eldemire repeated: decrease sympathetic hyperactivity. The specific menu: rib-raising (here, the long version), Chapman points to drop sympathetic tone, open the thoracic inlet first, then dome the diaphragm and treat C3–C5 plus the upper cervicals/cranial base to raise vagal tone and reduce the work of breathing. Pumps are reserved for the afebrile stage.</p><p>Pneumonia&#x27;s unifying goal = decrease sympathetic hyperactivity (improve venous/lymphatic/arterial flow + ease secretion removal).</p><p>MOPSE and the staged regimen. The Multicenter Osteopathic Pneumonia Study in the Elderly (~50+, multi-hospital) compared OMT + antibiotics against antibiotics alone and found significant reductions in four endpoints: length of stay, IV-antibiotic duration, respiratory failure (ventilator), and mortality. Because it spanned hospitals, treatment was protocolized by stage. Stage I (newly admitted, febrile): gentle only — MFR to the thoracic inlet, light rib-raising, paraspinal inhibition down to ~C5. Stage II (fever waning, productive cough): add time and work the viscerosomatic levels down the thoracic spine. Stage III (afebrile &gt;24 h): now add the pumps, more rib-raising, and lower-spine work (even upper-lumbar helps the diaphragm).</p><p>COPD and asthma. COPD gives a flattened, hyperinflated diaphragm on CXR; OMT and spinal manipulation improve lung-function measures, the six-minute walk test, and the COPD Assessment Test, and the best medical adjunct is a pulmonary rehabilitation program with exercise — OMT improves exercise capacity, which makes patients less hesitant to exercise. Asthma splits by acuity: in an acute attack the patient is obstructed, so you want bronchodilation → sympathetic stimulation via short (&lt;90 s) rib-raising, HVLA, ME, or MFR to the thoracic spine. Maintenance asthma uses the standard structure/autonomics/lymphatics approach; RCTs (including a 2021 pediatric trial) show fewer/less-severe attacks, shorter stays, and improved PFTs.</p><p>Acute asthma → want bronchodilation → stimulate sympathetics with short rib-raising (the inverse of pneumonia&#x27;s &gt;90 s).</p><p>Atelectasis. Post-operative alveolar collapse (especially after upper-abdominal or cardiac surgery, where pain limits diaphragm movement) is classically prevented with an incentive spirometer — but only if used correctly: a slow inhale, held a few seconds, 10–15 times per hour (Eldemire&#x27;s patient-education trick: &quot;every commercial break, do it five times&quot;). A cholecystectomy study compared thoracic lymphatic pump (TLP) to incentive spirometry: atelectasis rates were similar, but the TLP group had better PFTs and earlier recovery toward pre-op FVC and FEV1. The takeaway: use both. (The same OMT-after-sternotomy logic improves pain, length of stay, and time to cardiac rehab.)</p><p><strong>Trap:</strong> Open the thoracic inlet FIRST; no pumps until afebrile. These two order/contraindication rules win most board questions.</p><p><strong>Confusion:</strong> Rib-raising flips by duration: &gt;90 s calms sympathetics (pneumonia); short stimulates them (acute asthma).</p><p><strong>Key:</strong> MOPSE&#x27;s four wins: length of stay, IV-antibiotic duration, ventilator/respiratory failure, mortality. Stage pumps in only when afebrile.</p><p><em>A pneumonia patient is admitted febrile at 102°F. Which lymphatic step comes FIRST, which technique is contraindicated until afebrile, and how long do you rib-raise to calm the sympathetics?</em></p>",
  "why": ""
 },
 "8_2": {
  "answer": "<p>Cardiac parasympathetic supply travels by the vagus nerve, and increased vagal tone decreases heart rate and contractility - the mirror image of the sympathetic trio. The same right/left map applies: the right vagus reaches the SA node, the left vagus reaches the AV node. That single fact generates the parasympathetic arrhythmia table.</p><p>Cardiac parasympathetics travel via the vagus; increased tone leads to decreased heart rate and contractility. Right vagus reaches the SA node, left vagus reaches the AV node.</p><p>Because the right vagus governs the SA node, right hyperparasympathetic activity produces sinus bradyarrhythmias; because the left vagus governs the AV node, left hyperparasympathetic activity produces AV blocks. Line it up against the sympathetic side and the symmetry is the memory key: right is always the SA-node/rate story, left is always the AV-node/conduction story - sympathetic excess speeds those territories up (SVT, VF), parasympathetic excess slows or blocks them (bradyarrhythmia, AV block).</p><p>Parasympathetic innervation is the vagus - right vagus reaches the SA node, left vagus reaches the AV node; increased tone decreases rate and contractility. Hyperparasympathetic activity on the RIGHT produces sinus bradyarrhythmias (SA-node origin); hyperparasympathetic activity on the LEFT produces AV blocks (AV-node origin).</p><p>Because the vagus runs through the cervical region, treating the neck can shift autonomic balance toward the parasympathetic side. A study cited in the handout (cervical myofascial release) reported that the technique shifts sympathovagal balance from the sympathetic to the parasympathetic nervous system - evidence that cranial-base and upper-cervical work can normalize vagal tone, which becomes a treatment lever in both inferior-wall MI and arrhythmia care.</p><p>Cervical myofascial release shifts the sympathovagal balance toward parasympathetic - cranial base / upper cervicals are the vagal-tone lever.</p><p><strong>Key:</strong> Parasympathetic: R produces sinus bradyarrhythmias (SA), L produces AV blocks (AV). Same right/left map as sympathetic, slowed down.</p><p><strong>Confusion:</strong> Right vs left is the node (SA vs AV); the division sets the direction. Sympathetic speeds; parasympathetic slows/blocks.</p><p><strong>Cue:</strong> Want more vagal tone? Treat the cranial base / upper cervicals - the vagus runs through the neck.</p><p><em>A patient has right-sided vagal excess; another has left-sided vagal excess. Predict each disturbance, and name a cervical technique shown to shift the sympathovagal balance toward parasympathetic.</em></p>",
  "why": ""
 },
 "8_1": {
  "answer": "<p>The cardiac sympathetics arise from T1-T6, with preganglionic fibers running up to the cervical chain ganglia before reaching the heart. The functional effects of raising sympathetic tone are the familiar trio - increased heart rate, increased contractility, and increased cardiac output - and, when tone stays high, coronary vasospasm. The handout also separates the cardiac levels from the peripheral ones: peripheral blood vessels and the kidneys/adrenals are driven from T10-L2, which matters when you treat hypertension.</p><p>Cardiac sympathetics = T1-T6; peripheral vessels and kidneys/adrenals = T10-L2. Increased cardiac tone leads to increased rate, increased contractility, increased output.</p><p>The single most testable idea in this lecture is a side-of-the-heart map that holds for both autonomic divisions: right-sided fibers reach the SA node, left-sided fibers reach the AV node. On the sympathetic side that means right hypersympathetic activity drives supraventricular tachycardias (SVTs) from the SA node, while left hypersympathetic activity drives ventricular ectopic foci and ventricular fibrillation. Keep &#x27;right = SA = supraventricular, left = AV = ventricular&#x27; and you can reconstruct the whole table.</p><p>Cardiac sympathetic innervation T1-T6: right fibers reach the SA node (right deep cardiac plexus); left fibers reach the AV node (left deep cardiac plexus). Peripheral sympathetics: vessels T1-L2, kidneys/adrenals T10-L2; increased tone produces vasoconstriction and increased rate/contractility/output.</p><p>Two more sympathetic consequences round out the LO. Sustained high sympathetic tone can produce coronary vasospasm, reducing perfusion and provoking ischemia even without a fixed stenosis. And in essential hypertension, patients demonstrate vascular and cardiac hyperreactivity to autonomic stimuli; prolonged sympathetic stimulation of the kidneys creates a functional retention of water and salt that elevates blood pressure - the rationale for the renal-level (T10-L2) and adrenal-Chapman treatment you will see under hypertension.</p><p>Sustained sympathetic tone leads to coronary vasospasm; renal sympathetic stimulation leads to water/salt retention and increased BP.</p><p><strong>Key:</strong> Right = SA node = supraventricular; Left = AV node = ventricular. Sympathetic: R drives SVTs, L drives ectopic foci / VF.</p><p><strong>Clinical pearl:</strong> Cardiac sympathetics T1-T6; peripheral/renal T10-L2. Do not treat the renal range expecting a direct cardiac-rate effect.</p><p><strong>Cue:</strong> Angina without a fixed stenosis plus high sympathetic tone: think coronary vasospasm.</p><p><em>Two cardiac patients have hypersympathetic activity - one right-sided, one left-sided. Predict the arrhythmia each is prone to, and name the spinal levels you would treat to calm cardiac sympathetics.</em></p>",
  "why": ""
 },
 "8_3": {
  "answer": "<p>The lymphatic lever on the heart is about drainage - clearing fluid and metabolic waste from cardiac tissue and supporting the collateral circulation. When that drainage is impaired, the consequences are both local and systemic, which is why a lecture on the cardiac patient bothers with the lymphatics at all: it is a system-wide contributor, not just a cause of swollen ankles.</p><p>Impaired cardiac lymphatic drainage leads to reduced collateral circulation, increased ischemia/infection morbidity, and arrhythmias from cardiac-tissue congestion.</p><p>Three direct consequences: reduced collateral circulation; increased morbidity and mortality from ischemia and infection; and congestion of cardiac tissue that produces arrhythmias. The lymphatics also have a broader systemic footprint - they are linked to the pathogenesis of atherosclerosis, the development of hypertension, and the fluid overload of congestive heart failure (pulmonary edema, ascites, peripheral edema), along with the electrolyte imbalances that worsen CHF. Treating lymphatic return therefore reaches well beyond simple edema control.</p><p><strong>Key:</strong> Impaired cardiac lymph leads to decreased collateral circulation plus congestion-driven arrhythmias - a systemic contributor, not just edema.</p><p><strong>Clinical pearl:</strong> Lymphatic dysfunction threads into atherosclerosis, HTN, and CHF - the same three diseases LO 4 treats.</p><p><strong>Cue:</strong> Improve lymphatic return (pump, effleurage, redoming the diaphragm) as part of CHF and post-MI care, not as an afterthought.</p><p><em>Cardiac lymphatic drainage becomes impaired. List the direct cardiac consequences and the three systemic conditions the handout ties to lymphatic dysfunction.</em></p>",
  "why": ""
 },
 "8_4": {
  "answer": "<p>Before any disease-specific detail, one rule dominates every cardiac scenario: all OMT is performed after emergent medical treatment and once the patient is stabilized. OMT is an adjunct that enhances recovery - it never substitutes for or delays emergent care. With that fixed, the four diseases each have a recognizable autonomic-plus-lymphatic signature you treat through.</p><p>Most patients seen within 30 minutes of an acute MI show autonomic disturbance, and the pattern depends on the wall: an anterior infarct produces sympathicotonia in the upper thoracics T1-T6, especially T2-T3 on the left, while an inferior wall infarct produces vagal hyperactivity addressed at C2 and the cranial base. Once stabilized, treatment aimed at the upper thoracics calms sympathetic hyperactivity - lowering the incidence of ectopic foci and VF and removing factors that discourage collateral circulation. The toolkit is gentle: generalized paraspinal inhibition, indirect thoracic-inlet work, and if CPR was performed, ribs and sternum treated with indirect techniques. Lymphatic and venous return (pectoral traction, redoming the diaphragm) plus cranial/upper-cervical work for vagal tone round it out.</p><p>MI OMT calms upper-thoracic sympathetic hyperactivity, which lowers ectopic-foci/VF risk; post-CPR, treat ribs/sternum with indirect technique.</p><p>OMT benefits HTN through several levers: it decreases stress, decreases total peripheral resistance by generalized sympathetic inhibition, and decreases the renal contribution by sympathetic inhibition at T10-L2. The single most testable item is the posterior Chapman reflex points for the adrenal glands: treating them has been shown to lower BP and decrease serum aldosterone. The practical payoff is that OMT can decrease medication requirements, with less potential for side effects and drug-drug interactions.</p><p>In congestive heart failure, lymphatic return can be challenged 3-40 times normal, so the approach is to address sympathetics at T1-T6, optimize respiratory function to improve venous and lymphatic return, and apply lymphatic pump techniques and effleurage. For arrhythmias, the strategy is to decrease segmental facilitation modulating sympathetic input, treat the cranial base and upper cervicals to normalize vagal tone, and address postural factors - including the right pectoralis major trigger point, which is specifically listed as a driver of SVT (and recurs on the arrhythmias slide as corroboration).</p><p>CHF: address T1-T6 sympathetics, optimize respiration, and use lymphatic pump/effleurage (return challenged 3-40x).</p><p><strong>Trap:</strong> Stabilize first. ALL cardiac OMT waits until emergent medical treatment is done and the patient is stable - never a substitute or delay.</p><p><strong>Confusion:</strong> Anterior MI = sympathetic (T1-T6, calm it); inferior MI = vagal (C2/cranial base). The wall sets the autonomic target.</p><p><strong>Key:</strong> HTN = posterior Chapman adrenal points (lower BP, lower aldosterone) plus renal T10-L2; CHF = T1-T6 plus lymphatic pump (return up to 3-40x).</p><p><em>A patient is in the first 30 minutes of an anterior MI. When can OMT begin, what autonomic target does it address, and how does that target differ for an inferior wall infarct?</em></p>",
  "why": ""
 },
 "9_CU.1": {
  "answer": "<p>The prior student wrote &quot;KNOW CHART&quot; across the top of this slide with an arrow, and that is the whole assignment for this topic: you memorize which sympathetic cord levels a given organ maps to, because a viscerosomatic reflex shows up as paraspinal tissue texture change at exactly those levels. The logic is one-directional — visceral afferents enter the cord at fixed segments, facilitate that segment, and you palpate the result in the paraspinals. Get the bands and you can read the reflex backwards from the spine to the organ.</p><p>Walking down from the top: head and neck T1–T4, heart T1–T5, lungs T2–T7, esophagus T2–T8. Then the gut divides by embryologic origin, which is the part the exam loves. Foregut (stomach, liver, gallbladder, spleen, pancreas, proximal duodenum) is T5–T9 and relays through the greater splanchnic nerve and the celiac ganglion. Midgut (distal duodenum through the proximal two-thirds of the transverse colon) is T10–T11 via the lesser splanchnic and the superior mesenteric ganglion. Hindgut (distal third of the transverse colon, descending colon, sigmoid, rectum) is T12–L2 via the least splanchnic and inferior mesenteric ganglion.</p><p>Foregut viscerosomatic = T5–T9, midgut = T10–T11, hindgut = T12–L2. (embryologic GI bands)</p><p>The GU and pelvic row is where the easy points are won. Kidneys, adrenals, and gonads cluster around T10–T11 (the prior student green-highlighted kidneys at T10–T11), ureters T10–L1, bladder T11–L2, and all of the GU — male and female — spans T10–L2 (also highlighted, and written in the margin of the draw-it-out slide). Two organs you should overlearn because they break the pattern: the appendix is T12 (a single level, a classic one-liner) and the adrenals sit at T10.</p><p>Appendix = T12; adrenals = T10; all GU = T10–L2. (single-level buzzwords)</p><p>Don&#x27;t forget the parasympathetic half. The sympathetic chart is most of the work, but the exam can flip to parasympathetics. The vagus covers the foregut and midgut down to about the splenic flexure; below that, the hindgut and pelvic organs get their parasympathetics from the pelvic splanchnics, S2–S4. So if a stem asks about parasympathetic supply to the descending colon or bladder, the answer is sacral, not vagal.</p><p><strong>Key:</strong> Read the reflex backwards: paraspinal change at a cord level → the organ that maps there. The chart is the decoder.</p><p><strong>Clinical pearl:</strong> Embryology drives the GI split — fore/mid/hindgut track with greater/lesser/least splanchnic and celiac/SMA/IMA ganglia in lockstep.</p><p><strong>Confusion:</strong> Vagus = foregut + midgut parasympathetics; pelvic splanchnics (S2–S4) = hindgut + pelvic. Don&#x27;t give the vagus the descending colon.</p><p><em>A patient has a viscerosomatic reflex at T10–T11. Which three GU structures and which GI segment share that level?</em></p>",
  "why": ""
 },
 "9_CU.4": {
  "answer": "<p>This is the highest-stakes OMT topic on the cumulative, and it is pure pattern integration: no single test gives the answer, you stack four of them. The cast is seated flexion (finds the axis side), the lumbar (lumbosacral) spring test (forward vs backward), the sphinx / backward-bending test (symmetry change), and the static sulcus depth + ILA position. Learn how each behaves and the diagnosis falls out of the combination.</p><p>The one rule that flips everyone: seated flexion is positive OPPOSITE the axis. If the seated flexion test is positive on the right, the oblique axis is on the LEFT. The prior student highlighted and circled this. Read it backwards on purpose every time, because the named torsion takes the axis side (an L-on-L torsion is a left axis).</p><p>Seated flexion test is positive on the side OPPOSITE the oblique axis. (the #1 torsion trap)</p><p>Forward vs backward torsions are sorted by spring + sphinx. Forward torsions (L-on-L, R-on-R) give a NEGATIVE lumbar spring (the base can still travel anterior, so you feel give) and the sphinx test shows the sulci becoming MORE symmetrical on backward bending (the stuck-posterior base is free to follow into extension). Backward torsions (R-on-L, L-on-R) give a POSITIVE lumbar spring (you hit bone, no give) and the sphinx shows MORE asymmetry. The prior student&#x27;s shorthand: &quot;more symmetrical = forward, more asymmetrical = backward.&quot;</p><p>Forward torsion = negative spring + sphinx more symmetrical; backward torsion = positive spring + more asymmetrical. (forward/backward discriminator)</p><p>Torsion vs unilateral is the thumb rule. Measure the ILAs in the caudal/cephalic plane: less than one thumb-width apart = a torsion; more than one thumb-width apart = a unilateral problem (a unilateral flexion or extension). For unilaterals, the seated flexion is still positive opposite the axis, and two mnemonics carry the ILA direction: &quot;E&quot; ILA &quot;e&quot;levates (an extension drives the ILA superior/anterior, sphinx shows increased asymmetry, spring positive) and &quot;F&quot; ILA &quot;f&quot;alls (a flexion drops the ILA inferior/posterior, sphinx more symmetrical, spring negative).</p><p>ILAs &lt;1 thumb apart = torsion; &gt;1 thumb apart = unilateral. &quot;E elevates, F falls.&quot; (torsion vs unilateral)</p><p>Bilateral flexion and extension borrow the respiratory language from CU.3. Bilateral flexion is analogous to exhalation (base anterior, apex posterior): bilateral deep sulci, bilateral posterior ILAs, and a lumbar spring that is &quot;actually bilaterally positive&quot; because the base cannot spring further. Bilateral extension is analogous to inhalation: bilateral shallow sulci, bilateral anterior ILAs.</p><p>The L5–sacrum bridge is stated twice on the slide because it links this LO to Fryette and to both muscle syndromes: L5 sidebends TOWARD the engaged oblique axis (L5 sidebent right → right oblique axis) and L5 rotates OPPOSITE the sacrum (L5 rotated right → sacrum rotated left). &quot;Somatic dysfunction in the lower back affects the sacrum; L5 rotations rotate the sacrum.&quot;</p><p>L5 sidebends toward the axis; L5 rotates opposite the sacrum. (the coupling rule)</p><p><strong>Key:</strong> Stack four tests: seated flexion (axis, read OPPOSITE) + spring (fwd/back) + sphinx (symmetry) + sulcus/ILA. No single test names the torsion.</p><p><strong>Cue:</strong> Forward = Free spring + more symmetrical; Backward = Bone on spring + more asymmetrical. Two F&#x27;s for forward.</p><p><strong>Trap:</strong> ILAs &gt;1 thumb apart is NOT a torsion — it is a unilateral. Torsions sit within one thumb-width.</p><p><em>Deep right sulcus, posterior left ILA, negative seated flexion on the left, negative lumbar spring — name it.</em></p>",
  "why": ""
 },
 "9_CU.5": {
  "answer": "<p>Fryette is a sorting tool and an answer-elimination tool. Three laws describe how spinal segments couple sidebending with rotation; on a multiple-choice exam they let you discard internally contradictory options before you even reason about the clinical picture. Master the Type I / Type II split and the board-elimination rule.</p><p>Type I (neutral): in the neutral range, sidebending and rotation couple to OPPOSITE sides. Type I dysfunctions are groups of three or more vertebrae, they improve in neutral (and worsen with flexion AND extension), and they involve the larger postural muscles — think scoliosis and viscerosomatic posture. Type II (non-neutral, flexion/extension): in flexion or extension, sidebending and rotation couple to the SAME side. Type II is usually a single segment, it worsens in neutral and gets better in flexion OR extension, and it involves smaller intersegmental muscles (localized injury).</p><p>Type I (neutral) = SB &amp; rotation OPPOSITE, group, improves neutral. Type II (flex/ext) = SAME, single, worsens neutral. (the core Fryette split)</p><p>Name a dysfunction by the EASE. Somatic dysfunction is named for the direction of freer motion / ease, not the restricted barrier. A segment that moves freely into flexion but is restricted in extension &quot;lives in flexion&quot; — it is a flexed dysfunction. Said the slide&#x27;s way: if the problem is in extension, the SD lives in flexion, and vice versa.</p><p>Name the SD for the direction of ease / freer motion, not the restriction. (naming convention)</p><p>The board-elimination rule is the highest-value test trick on the slide (written in red). If an answer option says E or F (extension/flexion), then sidebending and rotation MUST be in the SAME direction — any option pairing them oppositely is internally contradictory and can be crossed off. If an option says N (neutral), sidebending and rotation MUST be OPPOSITE. And the correct answer must always specify which segments are involved AND N/E/F.</p><p>Facet orientation is worth a carry-along one-liner: Cervical BUM (backward, upward, medial), Thoracic BUL (backward, upward, lateral), Lumbar BM (backward, medial). These govern which motions a region favors.</p><p>Facets: Cervical BUM, Thoracic BUL, Lumbar BM. (facet orientation)</p><p><strong>Key:</strong> Type II = Two same (sidebending and rotation the SAME way, single segment). Type I = opposite, group, neutral. Anchor on Type II.</p><p><strong>Cue:</strong> On any Fryette MCQ, first cross off options where E/F is paired with opposite SB/rot, or N is paired with same. Half the choices often die instantly.</p><p><strong>Clinical pearl:</strong> SD is named for the FREEDOM. &quot;Restricted in extension&quot; means it lives in flexion — say it as the ease and you will not flip it.</p><p><em>An option reads &quot;L4 sidebent left, rotated right, in extension.&quot; Why can you cross it off instantly?</em></p>",
  "why": ""
 },
 "9_CU.2": {
  "answer": "<p>Innominate (iliosacral) diagnosis is entirely landmark-driven: you find the dysfunctional side with a motion test, then read static landmarks to name what the bone did, then treat with the muscle that reverses it. Three dysfunction families live here — rotations, shears, and flares — and each has a clean landmark signature. Keep &quot;the bone is a wheel&quot; in mind for rotations and most of this falls out.</p><p>Finding the side uses two motion tests. The standing flexion test localizes an iliosacral problem: as the patient bends forward, the PSIS that moves MORE is the dysfunctional side, because that SI joint locks sooner and the ilium gets pulled farther up by the sacrum. The ASIS compression test is the reciprocal: the side with LESS spring / more resistance is the dysfunctional side. Both point to the same side; they just feel for it differently.</p><p>Standing flexion test: the PSIS that moves MORE = the dysfunctional side. (most common pelvis trap)</p><p>Rotations are the wheel. Picture the innominate rotating forward or backward around a transverse axis. An anterior innominate carries the ASIS inferior and the PSIS superior on that side; a posterior innominate is the reverse — ASIS superior, PSIS inferior. The most anterior an innominate gets is at toe-off; the most posterior is at heel-strike, which is a nice way to remember the gait coupling.</p><p>Anterior innominate = ASIS inferior + PSIS superior; posterior = the reverse. (rotation landmark signature)</p><p>A shear is a translatory slide of the whole innominate in the coronal plane: in a superior shear ALL landmarks are superior on that side; in an inferior shear, all are inferior. Because everything moves together, you won&#x27;t get the reciprocal up/down split that rotations give. A flare is a medial/lateral change of the ASIS measured from the midline: inflare = ASIS closer to the midline, outflare = ASIS farther. Pregnancy classically produces bilateral outflares, and an MVA with a seatbelt is a classic flare mechanism.</p><p>Superior shear = ALL landmarks superior on that side; inflare = ASIS toward midline, outflare = away. (shear vs flare)</p><p>Treatment contracts the antagonist. For muscle energy you position toward the barrier and have the patient fire the muscle that drives the bone the corrective way. The deck circled all four as TQs: an anterior rotation is treated with hip extensors (glut max + hamstrings); a posterior rotation with hip flexors (quads + psoas); an inflare with adductors; an outflare with abductors. Match the presentation too — anterior rotation tends to give sciatic/gluteal/hamstring pain (&quot;SGH&quot;), posterior rotation gives inguinal/groin and quad/psoas tightness.</p><p><strong>Key:</strong> Diagnose in three steps: motion test finds the SIDE, static landmarks NAME the dysfunction, the antagonist muscle TREATS it.</p><p><strong>Cue:</strong> For any rotation ME, position toward the barrier and contract the antagonist: anterior→extensors, posterior→flexors.</p><p><strong>Confusion:</strong> Shears move ALL landmarks one direction; rotations split them (ASIS one way, PSIS the other). That split is how you tell them apart.</p><p><em>Right ASIS inferior, right PSIS superior — name the dysfunction and the muscles you&#x27;d use to treat it.</em></p>",
  "why": ""
 },
 "9_CU.3": {
  "answer": "<p>Before you can diagnose a torsion you need the scaffolding: where the landmarks are, which axes the sacrum moves around, and what &quot;respiratory motion&quot; means. The two landmarks you palpate are the sacral sulci (just medial and superior to the PSISs) at the base and the inferior lateral angles (ILAs) at the apex. Everything in diagnosis is a comparison of sulcus depth up top against ILA position down below.</p><p>Three transverse axes stack down the sacrum. The superior transverse axis at S1 is the respiratory axis — it is synchronous with the cranial mechanism (sphenobasilar flexion and extension). The middle transverse axis at S2 is the postural axis for flexion/extension coupled with the lumbar spine. The inferior transverse axis handles iliosacral motion during walking. On top of those, an anteroposterior axis gives sidebending and the oblique axes give torsions. The prior student circled the axes and wrote that total sacral movement is measured in millimeters.</p><p>Superior transverse axis (S1) = respiratory axis, synchronous with the cranial mechanism. (axis identification)</p><p>Respiratory motion follows the diaphragm — and this is the piece students reverse. On inhalation the diaphragm descends and the sacral base moves POSTERIOR (counternutation), while the apex moves anterior — the prior student drew this directly on the slide: &quot;diaphragm goes down, pushes the sacrum out.&quot; On exhalation the base moves ANTERIOR (nutation) and the apex moves back in. This same base-anterior/base-posterior language is what bilateral flexion and extension borrow from, so lock it down now.</p><p>Inhalation → sacral base posterior (apex anterior); exhalation → base anterior. (respiratory motion direction)</p><p>One framing that pays off later: the sacrum moves freely in whichever respiratory phase it is held in and is restricted in the opposite phase. That is why a forward (flexed) sacrum behaves like it is stuck in exhalation — it is the same mechanical idea you will reuse the moment you start naming torsions.</p><p><em>Which sacral axis is the respiratory axis, and which way does the base move on inhalation?</em></p>",
  "why": ""
 },
 "9_CU.7": {
  "answer": "<p>Psoas syndrome accounts for up to 20% of low back pain and is the great radiculopathy mimic. The exam wants the anatomy, the staged progression (initial bilateral → later unilateral with a whole-spine compensation pattern), and the one discriminator that separates it from a disc.</p><p>Anatomy: the psoas major originates from the transverse processes of T12–L5 (anterior aspect), the vertebral bodies of L1–L5, and the intervening discs, and inserts on the lesser trochanter; it is innervated by L1, L2, (some L3) and acts as a hip flexor and trunk balancer. The iliacus arises from the iliac fossa, joins the psoas tendon to the lesser trochanter, and is innervated by the femoral nerve. Note for boards: the psoas does NOT attach to L5 in the way students assume — L5 follows L3/L4 or the sacrum.</p><p>Psoas major: origin TPs T12–L5 + bodies/discs L1–L5, insertion lesser trochanter, innervation L1–L2 (±L3). (anatomy one-liner)</p><p>Presentation and the key lesion: the patient leans forward and to one side, has lost lumbar lordosis, and has a positive Thomas test (the higher the knee rides, the greater the hypertonicity). The maintaining key lesion is a flexed upper lumbar segment — classically L1/L2; treat that and the syndrome resolves, miss it and it won&#x27;t. If these findings are absent, psoas syndrome is unlikely.</p><p>Key lesion = flexed L1/L2; posture leans forward + to one side with lost lordosis and a positive Thomas test. (the maintaining lesion)</p><p>Staged progression. Initial (early): bilateral psoas hypertonicity, upper lumbar (L1/L2) flexed, bilateral lumbosacral pain, flattened lordosis, positive Thomas bilaterally. Later (full-blown), unilateral: the key L1/L2 segment is flexed and sidebent/rotated TOWARD the hypertonic side (Type II); the lower lumbars (L3–L4) compensate to the OPPOSITE side (Type I neutral), producing an S-shaped curve; the pelvis shifts AWAY from the tight psoas; there is a backward sacral torsion with the axis on the same side; the ipsilateral leg is externally rotated and shortened; and the piriformis becomes CONTRALATERALLY hypertonic — which is why psoas syndrome lists piriformis syndrome as a sequela.</p><p>Late stage: L1/L2 Type II toward the tight side, L3–L4 Type I opposite → S-curve; pelvis shifts away; piriformis contralateral. (the S-curve pattern)</p><p>The discriminator and treatment: the deck&#x27;s flagged most-common misdiagnosis is lumbar radiculopathy. Separate them on pain pattern: psoas refers to the CONTRALATERAL knee and not past it; radiculopathy follows a nerve distribution, often down to the foot. Treatment targets the key upper-lumbar/thoracolumbar lesion (ME, counterstrain) plus extension-biased rehab — back extension and swimming, and explicitly NO sit-ups; avoid heat to the low back and forward bending.</p><p><strong>Key:</strong> Treat the KEY LESION (flexed L1/L2). Psoas syndrome will not resolve while the upper lumbar segment stays flexed, no matter how much you stretch the muscle.</p><p><strong>Confusion:</strong> Psoas vs radiculopathy: contralateral knee and stops there = psoas; dermatome to the foot = radiculopathy. This is the deck&#x27;s flagged mix-up.</p><p><strong>Trap:</strong> NO sit-ups, no heat to the low back, no forward bending — all fire or shorten the psoas. Rehab is extension-biased (back extension, swimming).</p><p><em>Forward-leaning patient, lost lordosis, positive Thomas test, pain to the contralateral knee — diagnosis and key lesion?</em></p>",
  "why": ""
 }
};

// QUIZ_START
const QUIZ = [
 [
  1,
  "Entrapment Neuropathies",
  [
   [
    "1",
    "Identify the etiology & clinical presentation of 14 common entrapment neuropathies (UE + LE).",
    [
     [
      "A 44-year-old keyboardist reports numbness of the thumb, index, and middle fingers that wakes her at night; she flicks her wrist for relief. Thumb-pad (thenar) sensation is intact on testing. Where is the lesion?",
      [
       "Ulnar nerve at Guyon’s canal",
       "Median nerve at the pronator teres",
       "Anterior interosseous nerve in the forearm",
       "Median nerve at the flexor retinaculum (carpal tunnel)",
       "Lower trunk of the brachial plexus"
      ],
      3,
      "Night numbness digits 1–3, flick sign, thenar sensation intact → site? Carpal tunnel spares thenar SENSATION because the palmar cutaneous branch leaves the median nerve BEFORE the flexor retinaculum. Nocturnal symptoms + flick sign localize to the wrist. The intact thenar pad is the discriminator from a proximal lesion.  (A) Guyon’s canal is ulnar — digits 4–5, not 1–3. B: pronator teres entrapment loses thenar sensation too (proximal to the palmar cutaneous branch) and aggravates with pronation. C: AIN is pure motor (cannot make an “O”) — no sensory loss at all. E: a lower-trunk plexus lesion would give a broader, multi-nerve pattern, not isolated median sensory loss.",
      "basic"
     ],
     [
      "A crush injury breaks down the myelin and the axon of a peripheral nerve, but the surrounding connective-tissue sheath stays intact. Which classification applies, and what is the prognosis?",
      [
       "Neuropraxia — only myelin is affected, full recovery expected",
       "Axonotmesis — Wallerian degeneration occurs but axonal regrowth is possible",
       "Neurotmesis — connective tissue is disrupted, no regrowth",
       "Neuropraxia — axon and sheath both severed",
       "Neurotmesis — myelin only, rapid recovery"
      ],
      1,
      "Myelin + axon broken, sheath intact → injury class + prognosis? Axonotmesis = myelin + axon damaged but connective tissue intact → Wallerian degeneration distal to the lesion, then regrowth along the preserved sheath. It is the moderate middle tier between neuropraxia (mild) and neurotmesis (severe).  (A) neuropraxia affects myelin ONLY — the axon is spared, which is not this stem. C: neurotmesis disrupts the connective tissue too — the stem says it is intact. D: neuropraxia does not sever the axon or sheath; this conflates the two extremes. E: neurotmesis is the severe end with no regrowth — it is not myelin-only.",
      "basic"
     ],
     [
      "Two patients have median-distribution numbness. Patient X has numbness of digits 1–3 AND the thenar pad, worse with forearm pronation. Patient Y has numbness of digits 1–3 with a spared thenar pad, worse at night. Which statement is correct?",
      [
       "X has carpal tunnel syndrome; Y has pronator teres syndrome",
       "X has pronator teres syndrome; Y has carpal tunnel syndrome",
       "Both have carpal tunnel syndrome at different severities",
       "X has anterior interosseous syndrome; Y has carpal tunnel syndrome",
       "Both have anterior interosseous syndrome"
      ],
      1,
      "Thenar-involved + pronation-worse vs thenar-spared + night → which is which? Thenar SENSORY involvement + pain on pronation = proximal entrapment at the pronator teres (proximal to the palmar cutaneous branch). Thenar sparing + nocturnal symptoms = carpal tunnel at the wrist. The thenar pad is the single best discriminator.  (A) this reverses the two — thenar involvement is the PROXIMAL sign, not the wrist sign. C: only Y fits carpal tunnel; X’s thenar involvement excludes a pure wrist lesion. D: AIN is pure motor (no sensory loss), so it cannot explain X’s numbness. E: neither patient has a pure-motor presentation.",
      "basic"
     ],
     [
      "A patient cannot form a rounded “O” when asked to oppose the thumb and index fingertip, but has no sensory complaints anywhere in the hand. Which nerve is involved?",
      [
       "Deep branch of the ulnar nerve",
       "Recurrent (thenar motor) branch of the median nerve at the wrist",
       "Anterior interosseous nerve (a pure motor branch of the median nerve)",
       "Posterior interosseous nerve",
       "Musculocutaneous nerve"
      ],
      2,
      "Cannot make an “O” sign, no sensory loss → nerve? The anterior interosseous nerve is a pure MOTOR branch of the median nerve; it supplies FPL and FDP to digits 2–3. Loss produces the inability to flex the distal phalanges to make an “O,” with NO sensory deficit — the pure-motor presentation is the tell.  (A) the deep ulnar branch affects the interossei (Wartenberg/claw), not the “O” sign. B: the recurrent thenar branch drives thumb abduction/opposition, not distal interphalangeal flexion. D: the PIN is a radial motor branch (forearm extensors) — wrong compartment. E: the musculocutaneous nerve is proximal (biceps/coracobrachialis + lateral forearm sensation).",
      "basic"
     ],
     [
      "Which peripheral nerve is the single most common site of entrapment neuropathy in the upper extremity?",
      [
       "Radial nerve",
       "Ulnar nerve",
       "Median nerve",
       "Axillary nerve",
       "Suprascapular nerve"
      ],
      2,
      "MC entrapment neuropathy of the UE? The median nerve is the most common UE entrapment, overwhelmingly via carpal tunnel syndrome at the flexor retinaculum. Eldemire flagged it as “the most common neuropathy of the upper extremity.”  (A) radial entrapment (Saturday-night palsy) is much less common. B: ulnar entrapment (cubital tunnel) is common but second to median. D: axillary entrapment is uncommon and usually trauma-related (humeral neck). E: suprascapular entrapment is comparatively rare.",
      "basic"
     ],
     [
      "A volleyball player has weak external rotation but preserved abduction. Compression of the suprascapular nerve is most likely at which site?",
      [
       "Cubital tunnel",
       "Suprascapular notch (both supraspinatus and infraspinatus affected)",
       "Quadrilateral space",
       "Spinoglenoid notch (infraspinatus affected, supraspinatus spared)",
       "Arcade of Frohse"
      ],
      3,
      "Weak ER, preserved abduction → suprascapular compression site? Distal compression at the spinoglenoid notch affects only the infraspinatus (external rotation), sparing the supraspinatus (abduction). Compression at the more proximal suprascapular notch would knock out BOTH. The preserved abduction localizes the lesion distally.  (A) the cubital tunnel is an ulnar site at the elbow. B: a suprascapular-notch lesion would also weaken abduction — the stem says abduction is intact. C: the quadrilateral space transmits the axillary nerve (deltoid/teres minor), not the suprascapular. E: the arcade of Frohse is a radial/PIN site in the forearm.",
      "basic"
     ],
     [
      "Entrapment or injury of the axillary nerve is most characteristically associated with which mechanism?",
      [
       "Humeral neck fracture or anterior shoulder dislocation",
       "Repetitive forearm pronation",
       "Prolonged wrist flexion during sleep",
       "Compression at the inguinal ligament",
       "Tight footwear at the ankle"
      ],
      0,
      "Axillary nerve injury → classic mechanism? The axillary nerve passes through the quadrilateral space against the surgical neck of the humerus, so humeral-neck fracture or anterior shoulder dislocation is the classic cause — producing deltoid weakness and lateral-shoulder sensory loss.  (B) pronation aggravates median entrapment at the pronator teres, not the axillary nerve. C: nocturnal wrist flexion describes carpal tunnel. D: the inguinal ligament is the LFCN site (meralgia paresthetica). E: tight footwear compresses the deep peroneal/tibial nerve at the ankle.",
      "basic"
     ],
     [
      "A patient wakes from a long surgery under anesthesia with numbness over the lateral forearm. Which nerve was most likely compressed by positioning?",
      [
       "Dorsal scapular nerve",
       "Median nerve",
       "Ulnar nerve",
       "Radial nerve",
       "Musculocutaneous nerve"
      ],
      4,
      "Post-anesthesia lateral-forearm numbness → nerve? The musculocutaneous nerve supplies the arm flexors and terminates as the lateral antebrachial cutaneous nerve to the lateral forearm. Positional compression under anesthesia is the classic cause; removing the aggravating position resolves it.  (A) the dorsal scapular nerve is mostly motor (rhomboids/levator), with minimal sensory. B: the median nerve gives palmar/digital (1–3) sensation, not the lateral forearm. C: the ulnar nerve covers digits 4–5 and the medial hand. D: the radial nerve covers the dorsal/lateral hand and posterior forearm, not the lateral forearm strip.",
      "basic"
     ],
     [
      "Which statement about scapular winging is most accurate?",
      [
       "The dorsal scapular nerve is the major contributor to all winging",
       "The long thoracic nerve is the major contributor; the dorsal scapular nerve is a less common contributor",
       "Winging is purely sensory and produces no scapular displacement",
       "The axillary nerve is the primary cause of medial scapular winging",
       "The suprascapular nerve is the usual cause of winging"
      ],
      1,
      "Which nerve is the MAJOR contributor to scapular winging? Long thoracic nerve palsy (serratus anterior) is the major cause of medial scapular winging. The dorsal scapular nerve (rhomboids/levator) can contribute and also produces medial scapular-border pain, but it is the lesser contributor.  (A) the dorsal scapular nerve is a contributor, not the major cause — long thoracic dominates. C: winging is a motor sign (serratus failure) with visible scapular displacement, not a sensory phenomenon. D: the axillary nerve drives the deltoid/teres minor — not scapular stabilization. E: the suprascapular nerve drives supraspinatus/infraspinatus, not scapular winging.",
      "basic"
     ],
     [
      "A patient with ulnar neuropathy clamps a sheet of paper between thumb and index by flexing the thumb IP joint rather than adducting. This finding is called:",
      [
       "Froment sign (adductor pollicis weakness)",
       "Wartenberg sign (abducted little finger)",
       "Tinel sign",
       "Phalen sign",
       "Flick sign"
      ],
      0,
      "Thumb-IP flexion to hold paper instead of adduction → sign? Froment sign is positive when adductor pollicis (ulnar) is weak: to pinch paper the patient substitutes FPL (median) and flexes the thumb IP joint. It reflects the ulnar nerve’s role in thumb adduction.  (B) Wartenberg sign is a persistently abducted little finger (weak palmar interosseous), not thumb-IP flexion. C: Tinel sign is paresthesia on tapping over the nerve — not a pinch maneuver. D: Phalen sign is wrist-flexion provocation for carpal tunnel (median). E: flick sign is the patient flicking the wrist for nocturnal carpal-tunnel relief.",
      "basic"
     ],
     [
      "An intoxicated man falls asleep with his arm draped over a chair-back and wakes with wrist drop. Which nerve is compressed, and what is the eponym?",
      [
       "Axillary nerve — “quadrilateral space syndrome”",
       "Ulnar nerve — “cubital tunnel syndrome”",
       "Median nerve — “carpal tunnel syndrome”",
       "Radial nerve — “Saturday night palsy”",
       "Posterior interosseous nerve — “supinator syndrome”"
      ],
      3,
      "Draped-arm sleep → wrist drop, eponym? Radial nerve compression in the spiral groove (or axilla from crutches) produces wrist drop — “Saturday night palsy.” Eldemire’s memory hook: drop the W from “wrist” → R and R → Radial does wrist dRop. Spiral-groove lesions also lose sensation.  (A) axillary compression weakens the deltoid, not wrist extension. B: ulnar cubital-tunnel compression gives digit 4–5 symptoms and claw hand, not wrist drop. C: median carpal tunnel gives digit 1–3 numbness, not wrist drop. E: isolated PIN (supinator) entrapment causes finger drop without sensory loss — but the draped-arm/spiral-groove story is the classic radial Saturday-night palsy.",
      "basic"
     ],
     [
      "Which feature best distinguishes a posterior interosseous nerve (PIN) entrapment in the forearm from a radial nerve lesion at the spiral groove?",
      [
       "PIN entrapment produces thenar sensory loss",
       "PIN entrapment causes dense sensory loss with normal strength",
       "PIN entrapment weakens the triceps; the spiral-groove lesion spares it",
       "Both lesions spare the extensor carpi radialis longus equally and are clinically identical",
       "PIN entrapment causes motor deficits WITHOUT sensory loss; a spiral-groove lesion adds sensory loss"
      ],
      4,
      "PIN vs spiral-groove radial — best discriminator? The PIN is a pure MOTOR branch, so its entrapment gives finger/wrist-extension weakness WITHOUT sensory loss. A spiral-groove radial lesion is proximal to the superficial sensory branch, so it ADDS dorsal-hand sensory loss. The presence/absence of sensory loss is the discriminator.  (A) thenar sensation is median territory, irrelevant to the radial PIN. B: PIN entrapment is motor, not sensory — this reverses it.  (C) the triceps branch leaves above both lesions; triceps is typically spared in both. D: they are not identical — sensory involvement differs, and PIN classically spares ECRL.",
      "basic"
     ],
     [
      "A fighter takes a hard lateral kick to the proximal lateral leg and afterward drags and slaps the foot, unable to dorsiflex, with numbness over the dorsum of the foot and first web space. Where is the lesion?",
      [
       "Sciatic nerve at the sciatic notch",
       "Tibial nerve at the tarsal tunnel",
       "Common peroneal nerve at the fibular head",
       "Femoral nerve at the inguinal ligament",
       "Superior cluneal nerve over the iliac crest"
      ],
      2,
      "Lateral-leg trauma → foot drop + dorsal/web-space numbness → site? The common peroneal nerve wraps the fibular head superficially, so direct lateral trauma there causes foot drop (loss of dorsiflexion) plus dorsal-foot and first-web-space sensory loss. It is the MC LE mononeuropathy. The superficial site at the fibular head is the tell.  (A) a sciatic lesion CAN cause foot drop (the peroneal division), but the localized lateral-knee trauma + isolated peroneal signs point to the fibular head. B: tibial/tarsal-tunnel lesions affect the plantar foot and toe flexion, not dorsiflexion. D: femoral lesions cause knee-extension/hip-flexion weakness and anterior-thigh numbness. E: the superior cluneal nerve is sensory to the upper buttock — no motor, no foot drop.",
      "basic"
     ],
     [
      "Sensation to the first web space (between the great and second toes) is supplied by which nerve, and what motor function does it carry?",
      [
       "Sural nerve — no motor function",
       "Superficial peroneal nerve — eversion",
       "Tibial nerve — plantarflexion",
       "Deep peroneal nerve — dorsiflexion",
       "Saphenous nerve — knee extension"
      ],
      3,
      "First-web-space sensation + its motor role → nerve? The deep peroneal nerve supplies sensation to the first web space and motor power for dorsiflexion. The superficial peroneal nerve covers the rest of the dorsum and drives eversion. The first-web-space “patch” is the classic deep-peroneal exam point.  (A) the sural nerve is purely sensory to the lateral foot/ankle. B: superficial peroneal covers the dorsum generally and drives eversion, not the first web space. C: the tibial nerve serves the plantar foot and plantarflexion. E: the saphenous nerve (femoral branch) is sensory to the medial leg, with no motor role.",
      "basic"
     ],
     [
      "Which is the most common mononeuropathy of the lower extremity, and where is its most common site of compression?",
      [
       "Sciatic nerve under the piriformis",
       "Tibial nerve at the tarsal tunnel",
       "Common peroneal nerve at the fibular head",
       "Obturator nerve in the obturator canal",
       "Lateral femoral cutaneous nerve at the inguinal ligament"
      ],
      2,
      "MC LE mononeuropathy + MC site? The common peroneal nerve at the fibular head is the most common LE mononeuropathy — the nerve is superficial there and vulnerable to extrinsic compression (a too-high cast, a posterior fibular-head dysfunction) or trauma. Eldemire flagged it as “very important to remember.”  (A) piriformis-related sciatic involvement is a syndrome, not the single MC LE mononeuropathy. B: tarsal tunnel (tibial) is far less common than peroneal at the fibular head. D: obturator neuropathy is rare. E: LFCN/meralgia is common but is the classic SENSORY entrapment, not the MC overall LE mononeuropathy.",
      "basic"
     ],
     [
      "A sprinter has buttock and posterior-thigh pain that begins IMMEDIATELY on sitting and worsens with resisted knee flexion at 90° of hip flexion, with tenderness at the ischial tuberosity. Which is most likely?",
      [
       "Common peroneal entrapment",
       "Piriformis syndrome",
       "Carpal tunnel syndrome",
       "Lumbar radiculopathy at L4",
       "Hamstring syndrome irritating the sciatic nerve"
      ],
      4,
      "Pain immediately on sitting + resisted-knee-flexion + ischial tenderness → dx? Hamstring syndrome (from prior injury → scar/calcification at the ischial origin) irritates the adjacent sciatic nerve. The triad is pain immediately on sitting (sit-bone pressure), pain on resisted knee flexion at 90° hip flexion, and ischial-tuberosity tenderness. Eldemire’s residency case cancelled a piriformis surgery on exactly this.  (A) peroneal entrapment causes foot drop, not ischial-region pain. B: piriformis syndrome features pain WORSE after PROLONGED sitting, ER preference, and a positive FAIR test — not immediate-on-sitting with ischial tenderness. C: carpal tunnel is an upper-extremity median problem — irrelevant. D: L4 radiculopathy gives a dermatomal/myotomal pattern, not ischial-origin mechanical pain.",
      "basic"
     ],
     [
      "Pain along the iliac crest radiating into the upper buttock, reproduced where the nerve crosses the crest and often driven by quadratus lumborum hypertonicity, points to which nerve?",
      [
       "Superior cluneal nerve",
       "Sciatic nerve",
       "Obturator nerve",
       "Pudendal nerve",
       "Common peroneal nerve"
      ],
      0,
      "Iliac-crest pain into upper buttock, QL-driven → nerve? The superior cluneal nerve is a purely SENSORY nerve crossing the iliac crest to supply the upper buttock; it is compressed by microtrauma or QL hypertonicity from prolonged sitting. The hallmark is iliac-crest pain radiating into the buttock.  (B) sciatic involvement gives posterior-thigh/leg pain with motor signs, not a crest-line sensory pattern. C: obturator neuropathy affects the medial thigh and adductors. D: the pudendal nerve serves the perineum. E: the peroneal nerve is a lower-leg problem (foot drop).",
      "basic"
     ],
     [
      "A security guard with a heavy duty-belt and central obesity reports burning numbness over the anterolateral thigh, with no weakness and normal reflexes; EMG of the thigh muscles is normal. The lesion is at:",
      [
       "Lateral femoral cutaneous nerve beneath the inguinal ligament",
       "Femoral nerve in the femoral triangle",
       "Obturator nerve in the obturator canal",
       "L4 nerve root",
       "Common peroneal nerve at the fibular head"
      ],
      0,
      "Belt + obesity → burning anterolateral-thigh numbness, normal EMG → site? Meralgia paresthetica = LFCN compression under the inguinal ligament from a heavy belt, tight clothing, or body habitus. It is purely SENSORY (anterolateral thigh), so there is no weakness and thigh-muscle EMG is normal. The normal motor exam + normal EMG is the integrating clue.  (B) femoral neuropathy would weaken knee extension/hip flexion and alter the anterior-thigh motor exam. C: obturator neuropathy affects the medial thigh and adductors, not anterolateral sensation. D: L4 radiculopathy produces a dermatomal pattern with possible reflex/motor change, not an isolated normal-EMG sensory patch. E: peroneal entrapment is a foot-drop problem, not thigh sensation.",
      "basic"
     ],
     [
      "Beyond clinical examination, what is the single most effective test for confirming and grading a peripheral entrapment neuropathy?",
      [
       "Non-contrast CT of the limb",
       "Plain radiographs of the affected limb",
       "Serum inflammatory markers",
       "Tinel sign alone",
       "Nerve conduction study with electromyography (NCS/EMG)"
      ],
      4,
      "Most effective test to confirm/grade entrapment? NCS/EMG is the most effective study: NCS measures conduction speed across the lesion and EMG samples the muscle, together confirming the entrapment, distinguishing peripheral from central (radiculopathy), and grading severity/chronicity. Ultrasound is a growing adjunct for localizing the compressive source.  (A) CT does not assess nerve conduction or denervation. B: plain films show bone, not nerve physiology. C: inflammatory markers are nonspecific and do not localize or grade a nerve lesion. D: Tinel sign is a clinical screen, not a confirmatory/grading test.",
      "basic"
     ],
     [
      "For a hypersensitive patient in whom you suspect carpal tunnel, which statement best reflects appropriate use of testing?",
      [
       "NCS/EMG must always be performed before any treatment in every patient",
       "You may treat empirically and reserve NCS/EMG, since the needle EMG can be painful and a good clinical response confirms the diagnosis",
       "Ultrasound can grade the severity of denervation better than EMG",
       "Imaging is never useful in entrapment neuropathy",
       "A negative Tinel sign rules out carpal tunnel entirely p. 6"
      ],
      1,
      "Hypersensitive patient — appropriate testing strategy? NCS/EMG is effective but not benign — the EMG needle can be painful, especially in a hypersensitive patient. It is reasonable to treat empirically and let a good clinical response confirm the diagnosis, ordering NCS/EMG only when the picture is unclear. Understand a test before you order it.  (A) routine pre-treatment EMG in every patient is not required — many entrapments are managed clinically. C: ultrasound localizes the compressive SOURCE; EMG is what grades denervation severity. D: imaging (especially ultrasound) IS useful for localizing soft-tissue compression. E: Tinel sign is neither sensitive nor specific enough to exclude carpal tunnel. p. 7",
      "basic"
     ]
    ]
   ]
  ]
 ],
 [
  2,
  "Ribs I",
  [
   [
    "1.1",
    "Differentiate true ribs vs. false ribs and typical vs. atypical ribs.",
    [
     [
      "A rib attaches to the sternum anteriorly through its own dedicated costal cartilage. Which classification does this define?",
      [
       "True (vertebrosternal) rib",
       "False (vertebrochondral) rib",
       "Floating (vertebral) rib",
       "Atypical rib",
       "Cervical rib"
      ],
      0,
      "Own costal cartilage to sternum = which class? A rib is \"true\" when it reaches the sternum through its OWN costal cartilage — ribs 1-7. The true/false/floating axis is defined entirely by anterior attachment, not by bony shape.  (B) false ribs (8-10) attach indirectly via the cartilage of the rib above, not their own. C: floating ribs (11-12) have no anterior attachment at all. D: atypical is an osseous-shape axis, not an attachment axis. E: a cervical rib is a supernumerary anomaly, not a normal attachment class.",
      "basic"
     ],
     [
      "Which set lists ALL of the atypical ribs?",
      [
       "Ribs 3 through 9",
       "Ribs 1, 2, 11, 12",
       "Ribs 1, 2, 10, 11, 12",
       "Ribs 8, 9, 10",
       "Ribs 1 through 7"
      ],
      2,
      "Which set = all atypical ribs? Atypical ribs are 1, 2, 10, 11, and 12 — the \"1s and 2s\" mnemonic (any rib with a 1 or a 2 in its number). Typical ribs are 3-9.  (A) this is the TYPICAL set (3-9). B: omits rib 10, which is atypical. D: these are mostly false ribs by attachment; 8 and 9 are typical by shape. E: this is the true-rib set by attachment, unrelated to typical/atypical.",
      "basic"
     ],
     [
      "A typical rib differs from an atypical rib because the typical rib reliably has which feature?",
      [
       "Absence of a tubercle and neck",
       "A head articulating with only its own numerically corresponding vertebra",
       "A head articulating with two vertebrae plus a neck, tubercle, body, and costal angle",
       "A scalene tubercle on its superior surface",
       "A serratus anterior tuberosity"
      ],
      2,
      "Defining feature of a typical rib? A typical rib articulates with TWO vertebrae (its own level + one above) and carries the full landmark set: head, neck, tubercle, body, costal angle. Atypicals lack one or more of these and vary individually.  (A) missing tubercle/neck describes ribs 11-12 (atypical). B: single-vertebra articulation describes ribs 1, 10, 11, 12 (atypical). D: the scalene tubercle is a rib-1 (atypical) feature. E: the serratus anterior tuberosity is a rib-2 (atypical) feature.",
      "basic"
     ],
     [
      "Rib 10 is classically described as articulating with how many vertebrae?",
      [
       "It has no vertebral articulation",
       "Two vertebrae (T9 and T10)",
       "Three vertebrae",
       "One vertebra (T10 only)",
       "Two vertebrae (T10 and T11)"
      ],
      3,
      "Rib 10 articulates with how many vertebrae? Rib 10 articulates with T10 ONLY — a single vertebra. This single-vertebra articulation is part of why rib 10 is atypical, and it is a point Waters corrected and re-emphasized.  (A) rib 10 does articulate posteriorly with T10; only its anterior end may float. B: two-vertebra articulation describes the typical ribs (3-9). C: no rib articulates with three vertebrae. E: rib 10 articulates with T10 alone, not with T11.",
      "basic"
     ],
     [
      "INTEGRATE: A patient presents with pain on inhalation, and you find right rib 8 stuck in inhalation. Which terms ALL correctly describe rib 8?",
      [
       "False rib and atypical rib",
       "True rib and typical rib",
       "Floating rib and atypical rib",
       "False rib and typical rib",
       "True rib and atypical rib"
      ],
      3,
      "Rib 8 is which combination of classes? Rib 8 attaches indirectly via the cartilage above (FALSE rib) but has the full osseous landmark set and two-vertebra articulation (TYPICAL rib). The attachment axis and the shape axis are independent.  (A) rib 8 is typical by shape, not atypical. B: rib 8 is false (indirect attachment), not true. C: rib 8 is not floating, and it is typical, not atypical. E: rib 8 is false, not true, and typical, not atypical.",
      "basic"
     ]
    ]
   ],
   [
    "1.2",
    "Discuss the connections of ribs to other areas of the body.",
    [
     [
      "The thoracic sympathetic chain ganglia lie in which anatomic relationship to the rib heads, and why does this matter osteopathically?",
      [
       "Anterior to the rib heads, sharing fascia, so rib motion modulates sympathetic tone",
       "Posterior to the rib heads, separated by the pleura",
       "Within the costal groove of each rib",
       "Anterior to the vertebral bodies, unrelated to the ribs",
       "Lateral to the rib angles in the mid-axillary line"
      ],
      0,
      "Sympathetic chain relationship to rib heads? The sympathetic chain ganglia lie ANTERIOR to the rib heads in shared fascia. Restricted rib motion compresses/stresses that fascia and can drive increased sympathetic tone — the mechanistic rationale for rib-raising.  (B) the chain is anterior, not posterior, to the rib heads. C: the costal groove carries the intercostal neurovascular bundle, not the sympathetic chain. D: the ganglia track the rib heads, not the vertebral bodies in isolation. E: the chain is paravertebral/anterior to rib heads, not lateral at the mid-axillary line.",
      "basic"
     ],
     [
      "Rib-raising is taught to reduce sympathetic hyperactivity primarily because it does what?",
      [
       "Lengthens the intercostal muscles to reduce work of breathing",
       "Directly stimulates the vagus nerve at the costal cartilage",
       "Stretches the diaphragm to increase parasympathetic outflow",
       "Compresses the stellate ganglion to block conduction",
       "Mobilizes the rib heads and frees the fascia around the sympathetic chain ganglia"
      ],
      4,
      "Why does rib-raising reduce sympathetic tone? Rib-raising mobilizes the rib heads, freeing the shared fascia so the sympathetic chain ganglia can better self-regulate — relieving a restriction-driven increase in sympathetic tone.  (A) reduced work of breathing is a downstream effect, not the sympathetic mechanism. B: rib-raising targets sympathetics at the rib heads, not the vagus at the cartilage. C: diaphragm work is a separate technique; rib-raising acts at the rib heads. D: rib-raising is a gentle mobilization, not a ganglion compression block.",
      "basic"
     ],
     [
      "Beyond protecting viscera and enabling tidal respiration, the rib cage is described as essential for which additional function?",
      [
       "Generating the cardiac output directly",
       "Producing red blood cells in adult sternal marrow only",
       "Promoting venous and lymphatic return against gravity",
       "Storing the majority of body calcium",
       "Filtering lymph at the costal nodes p. 5"
      ],
      2,
      "Third major rib-cage function (besides protection + respiration)? The pressure swings created by rib motion help pull venous blood and lymph upward against gravity back toward the heart — promoting venous and lymphatic return. Waters flagged this as the under-appreciated third function.  (A) the heart generates cardiac output; the ribs assist venous return, not output. B: marrow hematopoiesis is not the rib-cage function being described here. D: calcium storage is a general skeletal role, not the point made here. E: the ribs do not filter lymph; they assist its return via pressure changes. p. 6",
      "basic"
     ]
    ]
   ],
   [
    "1.3",
    "Identify the muscles of respiration.",
    [
     [
      "Approximately what fraction of the pressure change driving inspiration is generated by the diaphragm alone?",
      [
       "About 25%",
       "About 10%",
       "About 95%",
       "About 60%",
       "About 40%"
      ],
      3,
      "Diaphragm share of inspiratory pressure change? The thoracic diaphragm generates roughly 60% of the pressure change in the thoracic cage during tidal inspiration — it is the primary muscle of respiration.  (A) 25% understates the diaphragm. B: 10% understates the primary inspiratory muscle. C: 95% leaves no meaningful role for the accessory and intercostal muscles. E: 40% understates the diaphragm.",
      "basic"
     ],
     [
      "When a patient forcefully exhales, the accessory muscles recruited are predominantly which group?",
      [
       "The diaphragm contracting harder",
       "Head, neck, and pectoral-girdle muscles",
       "The scalenes and sternocleidomastoid",
       "The external intercostals and levatores costarum",
       "Abdominal/core muscles (rectus abdominis, obliques, transversus, QL)"
      ],
      4,
      "Forced exhalation recruits which muscle group? Forced EXHALATION is mostly abdominal/core (rectus abdominis, obliques, transversus, QL). Forced INHALATION, by contrast, recruits head/neck/pectoral-girdle accessory muscles — the clean contrast Waters drew.  (A) tidal exhalation is largely passive; forced exhalation adds the core, not extra diaphragm contraction. B: head/neck/pectoral-girdle muscles drive forced INHALATION, not exhalation. C: scalenes and SCM are inspiratory accessory muscles. D: external intercostals and levatores costarum assist inspiration.",
      "basic"
     ],
     [
      "The anterior and middle scalenes attach to which rib, and the posterior scalene to which rib?",
      [
       "All three scalenes to rib 1",
       "Anterior/middle to rib 1; posterior to rib 2",
       "Anterior to rib 1; middle and posterior to rib 2",
       "Anterior/middle to rib 2; posterior to rib 1",
       "All three scalenes to rib 2"
      ],
      1,
      "Scalene rib attachments? Anterior and middle scalenes attach to rib 1; the posterior scalene attaches to rib 2. This exact map reappears in the Ribs II muscle-energy treatment scheme.  (A) the posterior scalene goes to rib 2, not rib 1. C: the middle scalene attaches to rib 1, not rib 2. D: this reverses the correct assignment. E: the anterior and middle scalenes attach to rib 1, not rib 2.",
      "basic"
     ]
    ]
   ],
   [
    "1.4",
    "Differentiate between pump handle, bucket handle, and caliper motion of the ribs.",
    [
     [
      "Pump-handle rib motion predominates in which ribs and changes which thoracic diameter?",
      [
       "Ribs 6-10; increases the transverse diameter",
       "Ribs 2-5; increases the anterior-posterior diameter",
       "Ribs 11-12; increases both diameters",
       "Ribs 2-5; increases the transverse diameter",
       "Ribs 6-10; increases the anterior-posterior diameter"
      ],
      1,
      "Pump-handle ribs and diameter? Pump-handle motion (ribs 2-5) raises the anterior rib end in an arc, increasing the ANTERIOR-POSTERIOR diameter. Bucket-handle (6-10) raises the lateral edge, increasing the TRANSVERSE diameter.  (A) that describes bucket-handle (6-10, transverse). C: that describes caliper (11-12, both). D: pump-handle changes AP, not transverse, diameter. E: ribs 6-10 are bucket-handle (transverse); pump-handle is 2-5 (AP).",
      "basic"
     ],
     [
      "Caliper motion of ribs 11-12 is possible because these ribs lack which articulation?",
      [
       "The costotransverse articulation",
       "The costovertebral (head) articulation",
       "The sternocostal articulation",
       "The costochondral junction",
       "The interchondral articulation"
      ],
      0,
      "Caliper motion is enabled by lacking which joint? Ribs 11-12 have NO costotransverse articulation, so they are not constrained in the horizontal plane and swing like calipers, increasing both AP and transverse diameters slightly.  (B) they keep their costovertebral (head) articulation with the corresponding vertebra. C: floating ribs lack a sternocostal joint, but that is the anterior-attachment axis, not the caliper mechanism. D: the costochondral junction is anterior and unrelated to the caliper swing. E: interchondral joints are between costal cartilages anteriorly, not relevant here.",
      "basic"
     ],
     [
      "Rib 1 is best described as exhibiting which motion pattern?",
      [
       "No appreciable respiratory motion",
       "Pure pump-handle motion",
       "Pure bucket-handle motion",
       "Pure caliper motion",
       "Roughly 50% pump-handle and 50% bucket-handle"
      ],
      4,
      "Rib 1 motion pattern? Rib 1 is about 50% pump-handle and 50% bucket-handle — a mixed pattern, which is one reason it gets special diagnostic handling.  (A) rib 1 does move with respiration; it is simply a mixed pattern. B: pure pump-handle describes ribs 2-5, not rib 1. C: pure bucket-handle describes ribs 6-10. D: pure caliper describes ribs 11-12.",
      "basic"
     ],
     [
      "Why is the principle \"all ribs exhibit all types of motion to varying degrees\" clinically important when you assess a rib?",
      [
       "Because it means rib classification is irrelevant to treatment",
       "Because in lab you check most ribs for BOTH pump- and bucket-handle motion rather than assuming one pattern",
       "Because it proves caliper motion occurs only in ribs 11-12",
       "Because the diaphragm controls all rib motion equally",
       "Because pump-handle ribs cannot become dysfunctional"
      ],
      1,
      "Why does \"all ribs do all motions\" matter? The \"predominant\" motion is just predominant — every rib does some of each. Practically, you assess most ribs for BOTH pump- and bucket-handle motion instead of assuming a single pattern.  (A) classification still guides where you palpate and expect motion. C: the statement is about all ribs, not a proof about caliper exclusivity. D: the diaphragm does not control rib-by-rib motion equally. E: pump-handle ribs absolutely can be dysfunctional.",
      "basic"
     ]
    ]
   ],
   [
    "1.5",
    "Identify the characteristics of inhaled and exhaled ribs (pump and bucket handle).",
    [
     [
      "A rib somatic dysfunction is NAMED according to which principle?",
      [
       "The side of the prominent static finding only",
       "The position of restriction — the motion the rib cannot perform",
       "The vertebral level it articulates with",
       "Whether it is a true, false, or floating rib",
       "The position of ease — where the restricted rib prefers to go"
      ],
      4,
      "A rib SD is named for what? You find the RESTRICTED rib but NAME it for the position of EASE — where it likes to go. A rib that moves into inhalation but not exhalation is an INHALED rib. This is the single most repeated principle of the lecture.  (A) a static prominence is only a clue; the dynamic position of ease names it. B: you locate the restriction, but you do not name the dysfunction for it. C: vertebral level identifies the rib, not the dysfunction name. D: the true/false/floating class is separate from the SD name.",
      "basic"
     ],
     [
      "You palpate a bucket-handle rib (6-10). To assess it, where do you place your hands, and what inhalation motion do you expect?",
      [
       "Mid-axillary line; the lateral edge drops inferiorly with inhalation",
       "Just lateral to the sternum; the anterior edge rises with inhalation",
       "At the costal angle posteriorly; the rib rotates internally with inhalation",
       "Mid-axillary line; the lateral edge rises superiorly with inhalation",
       "Over the xiphoid; the rib flares anteriorly with inhalation"
      ],
      3,
      "Bucket-handle rib: palpation site + inhalation motion? Bucket-handle ribs are assessed at the MID-AXILLARY line, where excursion is greatest; the lateral edge moves SUPERIORLY with inhalation. Pump-handle ribs are assessed anteriorly near the sternochondral junction.  (A) the lateral edge rises (not drops) with inhalation; it drops with exhalation. B: anterior near the sternum is the PUMP-handle assessment site. C: the costal angle is a landmark for purchase, not the bucket assessment point. E: the xiphoid is not a rib-motion assessment site.",
      "basic"
     ],
     [
      "On a pump-handle rib, the anterior portion rises easily with inhalation but does NOT recede with exhalation. This is which dysfunction?",
      [
       "An inhalation (inhaled) rib dysfunction",
       "An exhalation (exhaled) rib dysfunction",
       "A bucket-handle dysfunction",
       "A caliper dysfunction",
       "A normal rib, not dysfunctional"
      ],
      0,
      "Rises with inhalation, will not recede = which SD? The rib moves freely INTO inhalation but is restricted leaving it — it prefers inhalation, so it is an INHALED (inhalation) rib. Name for the position of ease.  (B) an exhaled rib would move into exhalation but resist inhalation. C: the stem specifies pump-handle (anterior), not bucket-handle. D: caliper applies to ribs 11-12, not the anterior pump-handle ribs. E: asymmetric motion that will not recede is dysfunctional, not normal.",
      "basic"
     ],
     [
      "INTEGRATE: A patient has right anterior chest pain. Ribs 3-5 are prominent on the right and recessed on the left. On the right, the anterior portion rises easily with inhalation but does not recede with exhalation. Name the somatic dysfunction.",
      [
       "Right ribs 3-5 exhaled pump-handle dysfunction",
       "Left ribs 3-5 inhaled pump-handle dysfunction",
       "Right ribs 3-5 inhaled pump-handle dysfunction",
       "Right ribs 6-8 inhaled bucket-handle dysfunction",
       "Left ribs 3-5 exhaled bucket-handle dysfunction"
      ],
      2,
      "R chest pain, ribs 3-5 prominent R, rise on inhale not exhale. Ribs 3-5 are pump-handle (assessed anteriorly). The right side is prominent and rises with inhalation but will not recede — it prefers inhalation. Name for ease: RIGHT ribs 3-5 INHALED pump-handle.  (A) it prefers inhalation (will not recede on exhale), so it is inhaled, not exhaled. B: the dysfunction is on the prominent/restricted RIGHT side, not the left. D: ribs 3-5 are pump-handle (anterior), not bucket-handle (6-8). E: wrong side, wrong motion type, and wrong ease direction.",
      "basic"
     ],
     [
      "INTEGRATE: Along the mid-axillary line, rib 6 is prominent on the left and recessed on the right. Both sides rise with inhalation, but on exhalation the left rib stays prominent and does not recede as far as the right. Name the dysfunction.",
      [
       "Right rib 6 inhaled bucket-handle dysfunction",
       "Left rib 6 inhaled bucket-handle dysfunction",
       "Left rib 6 exhaled bucket-handle dysfunction",
       "Left rib 6 inhaled pump-handle dysfunction",
       "Right rib 6 exhaled pump-handle dysfunction"
      ],
      1,
      "Mid-axillary, rib 6 prominent L, stays up on exhale. Mid-axillary location = bucket-handle. The left rib stays elevated and will not recede on exhalation — it prefers inhalation. Name for ease: LEFT rib 6 INHALED bucket-handle.  (A) the restricted/prominent side is the LEFT. C: it will not recede on exhalation, so it prefers inhalation (inhaled), not exhaled. D: the mid-axillary location makes this bucket-handle, not pump-handle. E: wrong side and wrong motion type.",
      "basic"
     ]
    ]
   ]
  ]
 ],
 [
  3,
  "Ribs II",
  [
   [
    "1",
    "Recognize Rib Biomechanics and Dysfunctions.",
    [
     [
      "During quiet inhalation, in which direction does the diaphragm primarily move as it contracts?",
      [
       "It does not contract during inhalation; it relaxes",
       "Superiorly, compressing the thoracic cavity to push air out",
       "Laterally, expanding only the lower rib cage",
       "Medially, narrowing the central tendon toward the midline",
       "Inferiorly, creating negative intrathoracic pressure that draws air in"
      ],
      4,
      "Which way does the diaphragm move on inhalation? The diaphragm is the primary inspiratory muscle: it contracts and descends inferiorly, enlarging the thoracic cavity and dropping intrathoracic pressure below atmospheric so air flows in. On exhalation it simply relaxes and rises — no contraction. Anchor the whole respiratory mechanism to this one directional fact, because rib motion and lymphatic drive both key off the descending diaphragm.  (A) Backwards: the diaphragm relaxes on exhalation and contracts on inhalation. B: Superior movement with relaxation describes exhalation, not contraction. C: Lateral rib expansion is a consequence of rib motion, not the diaphragm's primary contraction direction. D: The central tendon is pulled down, not medially; medial movement is not the contraction vector.",
      "basic"
     ],
     [
      "Approximately what proportion of rib 1's respiratory motion is bucket-handle?",
      [
       "About 100% — rib 1 is purely bucket-handle",
       "About 50% — rib 1 is roughly half bucket-handle and half pump-handle",
       "About 10% — rib 1 is almost entirely pump-handle",
       "About 25% — rib 1 is predominantly pump-handle with minor bucket motion",
       "About 75% — rib 1 is predominantly bucket-handle"
      ],
      1,
      "What fraction of rib 1 motion is bucket-handle? Rib 1 is the exception to predominance: roughly 50% pump-handle and 50% bucket-handle. That is why you assess it for BOTH dysfunction types and never assign it a predominant motion — you name it only inhaled or exhaled. The even split also flags rib 1 as the thoracic-inlet rib that deserves its own evaluation.  (A) Pure bucket-handle describes mid-cage ribs (6-10), not rib 1. C: Rib 1 is not predominantly pump-handle; it is split evenly. D: The split is even (50/50), not 25/75 toward pump. E: The split is even, not weighted 75% to bucket.",
      "basic"
     ],
     [
      "A patient's rib somatic dysfunction produces a sharp, stabbing, pinprick-like pain localized to the costosternal junction. Which dysfunction type does this pain pattern most suggest?",
      [
       "Pump-handle predominant dysfunction",
       "Bucket-handle predominant dysfunction",
       "Caliper-motion dysfunction of ribs 11-12",
       "A non-specific intercostal muscle strain",
       "A floating-rib dysfunction at the mid-axillary line"
      ],
      0,
      "Sharp stabbing pain at the costosternal junction = which motion type? Pain location and quality map to the motion axis. Sharp, stabbing, pinprick pain concentrated at the costosternal/costotransverse attachments is the pump-handle signature; the rib rotates on a transverse axis so the strain shows at the anterior/posterior attachments. Contrast deep aching at the mid-axillary line (bucket). The quality tells you the type before you motion-test.  (B) Bucket-handle pain is deep, aching, and regional at the mid-axillary line — not sharp and sternal. C: Caliper ribs (11-12) present posteriorly/laterally, not at the costosternal junction. D: Palpation reproduces pain along the rib in SD; sternal-junction sharp pain points to pump-handle, not a generic strain. E: Mid-axillary localization describes bucket-handle, and floating ribs don't reach the sternum.",
      "basic"
     ],
     [
      "Which combination of pain quality AND location best characterizes a bucket-handle predominant rib dysfunction?",
      [
       "Pinprick pain reproduced only at the costotransverse junction",
       "Sharp, stabbing pain at the costosternal junction",
       "Burning, dermatomal pain following a single nerve root",
       "Deep, aching, regional pain at the mid-axillary line",
       "Throbbing pain localized to the xiphoid process"
      ],
      3,
      "Deep aching pain — where, and which motion type? Bucket-handle ribs rotate on an AP axis, so the strain and pain localize deep at the mid-axillary line and present as a dull, aching, regional ache rather than a sharp point. Pairing the quality (deep/aching) with the location (mid-axillary) is the clean discriminator from pump-handle (sharp/sternal).  (A) Costotransverse pinprick pain is the pump-handle pattern. B: Sharp sternal pain is pump-handle, not bucket-handle. C: Burning dermatomal pain suggests shingles (herpes zoster), not a bucket-handle SD. E: The xiphoid is not the bucket-handle assessment site; the mid-axillary line is.",
      "basic"
     ],
     [
      "For caliper ribs 11 and 12, an INHALED rib behaves how on inhalation, and why does it also move inferiorly?",
      [
       "It moves only laterally, tracking the mid-axillary line",
       "It moves freely anteriorly and superiorly on inhalation, independent of the diaphragm",
       "It does not move at all on inhalation, because caliper ribs are fixed",
       "It moves freely posteriorly and inferiorly on inhalation, because the ribs are coupled to the descending diaphragm",
       "It moves superiorly on inhalation, opposite the diaphragm"
      ],
      3,
      "Inhaled caliper rib 11/12 on inhalation — motion + why inferior? An inhaled caliper rib moves freely posteriorly and inferiorly on inhalation and is restricted anteriorly/superiorly. The inferior component reflects coupling to the diaphragm: it descends on inhalation and pulls ribs 11–12 down with it. Exhaled caliper ribs do the opposite (free anterior/superior on exhalation).  (A) Caliper motion is posterior-inferior/anterior-superior, not purely lateral. B: Anterior/superior free motion on exhalation describes an exhaled caliper rib. C: Caliper ribs do move; they are assessed prone from the 12th rib up. E: The inferior (not superior) motion couples to the descending diaphragm.",
      "basic"
     ],
     [
      "Static palpation shows the right rib 3 is more prominent than the left. What is the correct interpretation?",
      [
       "It infers the side of dominance but does not conclusively localize the dysfunction; dynamic evaluation is still required",
       "It conclusively confirms a right rib 3 dysfunction; no further testing is needed",
       "It rules out any rib dysfunction because prominence is normal asymmetry",
       "It proves the LEFT rib 3 is the dysfunctional one",
       "It indicates a fracture of the right rib 3"
      ],
      0,
      "Right rib 3 prominent on static palpation — interpretation? Static prominence/recession infers the side of dominance — a hint, not a diagnosis. It is no substitute for dynamic motion testing, which is what actually names the SD; you must do both. A prominent rib doesn't conclusively localize the dysfunction or implicate the contralateral side.  (B) Static findings are not conclusive; dynamic motion testing decides. C: Prominence is a clue toward dysfunction, not proof of normalcy. D: A prominent right rib does not automatically implicate the contralateral side without dynamic testing. E: Prominence alone does not indicate a fracture.",
      "basic"
     ]
    ]
   ],
   [
    "3",
    "Recognize Clinical Syndromes Associated with Rib Dysfunctions.",
    [
     [
      "Two patients have anterior chest-wall tenderness at the costochondral junctions. Patient A has tenderness and stringy tissue texture but NO swelling; patient B has visible edema at the junction. Which labels are correct?",
      [
       "Patient A = costochondritis; Patient B = Tietze syndrome",
       "Patient A = Tietze syndrome; Patient B = costochondritis",
       "Both = costochondritis; the edema is incidental",
       "Both = Tietze syndrome; tenderness defines it",
       "Patient A = rib fracture; Patient B = costochondritis"
      ],
      0,
      "Tender costochondral junction WITH swelling vs WITHOUT — label each. Both costochondritis and Tietze syndrome are costochondral/costosternal junction irritation (classically ribs 2–5) with tenderness and stringy tissue texture. The ONLY discriminator is visible edema: no swelling = costochondritis; swelling present = Tietze. Untreated rib SDs can drive either.  (B) Reversed — Tietze is the one WITH swelling. C: Visible edema is not incidental; it specifically distinguishes Tietze. D: Tenderness alone is costochondritis; Tietze requires the swelling. E: Neither presentation is described as a focal fracture; both are costochondral-junction syndromes.",
      "basic"
     ],
     [
      "A cervical rib causing thoracic outlet syndrome most characteristically compresses which structure?",
      [
       "The lower trunk of the brachial plexus",
       "The upper trunk of the brachial plexus",
       "The phrenic nerve as it crosses the anterior scalene",
       "The vagus nerve in the carotid sheath",
       "The thoracic duct at the venous angle"
      ],
      0,
      "Cervical rib compresses which structure? A cervical rib is a congenital fibrocartilaginous band running toward the first thoracic rib (not a true rib). It classically compresses the lower trunk of the brachial plexus, producing thoracic outlet syndrome — one of the four TOS causes. Not the phrenic, vagus, or thoracic duct.  (B) TOS from a cervical rib affects the lower trunk, not the upper. C: The phrenic nerve is not the classic cervical-rib TOS target.  (D) The vagus is not compressed by a cervical rib. E: The thoracic duct is not the structure compressed in cervical-rib TOS.",
      "basic"
     ],
     [
      "A patient has shoulder pain on flexion. You stabilize and retract the scapula, then repeat the flexion and the pain resolves. What does this scapular repositioning test suggest?",
      [
       "Adhesive capsulitis of the glenohumeral joint",
       "A full-thickness rotator cuff tear requiring surgery",
       "Acromioclavicular joint osteoarthritis as the primary driver",
       "Scapular dyskinesis (sick scapula syndrome) — address the scapular stabilizers",
       "A SLAP labral tear"
      ],
      3,
      "Scapular repositioning abolishes flexion pain — diagnosis? The scapular repositioning test: retract/stabilize the scapula and repeat the painful flexion. If the pain resolves, the driver is scapular malposition — scapular dyskinesis (sick scapula). Treat the scapular stabilizers; Barry argues malposition drives the cuff-acromion impingement, so chasing the cuff misses the cause.  (A) Adhesive capsulitis limits passive ROM globally and wouldn't resolve with repositioning. B: A full-thickness tear would not resolve with manual scapular repositioning. C: Barry's point is that malpositioning drives the cuff-AC impingement; the positive repositioning test points upstream to the scapula, not primary AC arthritis. E: A SLAP tear is not assessed or relieved by scapular repositioning.",
      "basic"
     ]
    ]
   ],
   [
    "2",
    "Identify the Proper Naming of Rib Dysfunctions.",
    [
     [
      "When naming a rib somatic dysfunction, which four components must be specified?",
      [
       "Vertebral level, rib number, fracture status, and pain severity",
       "Side, rib number, degree of tenderness, and patient age",
       "Side, rib number, where it likes to live (inhaled/exhaled), and predominant motion type",
       "Side, the restricted direction, the muscle to treat, and the rib number",
       "Inhaled vs exhaled, pain quality, radiograph findings, and side"
      ],
      2,
      "What are the four components of a rib SD name? Every rib SD name has four ordered slots: side (L/R), rib number, where it likes to live (inhaled or exhaled — this IS the dysfunction), and predominant motion (pump/bucket/caliper). Each rib in a group gets its own individual diagnosis. Tenderness, age, and radiographs are not part of the formal name.  (A) Vertebral level and fracture status are not the rib-SD naming components. B: Tenderness degree and age are not part of the formal name. D: You name for where it LIVES (ease), not the restricted direction; the treating muscle is not part of the name. E: Pain quality and radiograph findings are not naming components.",
      "basic"
     ],
     [
      "A rib moves freely into inhalation but is restricted moving into exhalation. By the naming convention Barry stressed, this is named for where it 'likes to live.' What is the dysfunction?",
      [
       "A neutral dysfunction, because one direction is normal",
       "An exhalation (exhaled) somatic dysfunction",
       "A caliper dysfunction, because both directions are involved",
       "A pump-handle restriction dysfunction",
       "An inhalation (inhaled) somatic dysfunction"
      ],
      4,
      "Free into inhalation, stuck leaving it — name it. Name a rib for the position of ease, not the restriction. A rib that moves freely INTO inhalation but resists leaving it lives in inhalation — an inhaled rib. The mirror case (free into exhalation, stuck leaving it) is exhaled. This 'name for where it lives' rule is the single most error-prone step and Barry repeated it all lecture.  (A) There is no 'neutral' rib SD; you name for the position of ease. B: An exhaled rib is the mirror case: free into exhalation, restricted into inhalation. C: Caliper refers to a motion type (ribs 11-12), not a both-directions dysfunction name. D: Pump-handle is a motion predominance, not the inhaled/exhaled SD name.",
      "basic"
     ],
     [
      "A rib moves freely into inhalation but is restricted moving into exhalation. By the naming convention Barry stressed, this is named for where it 'likes to live.' What is the dysfunction?",
      [
       "A caliper dysfunction, because both directions are involved",
       "An exhalation (exhaled) somatic dysfunction",
       "An inhalation (inhaled) somatic dysfunction",
       "A pump-handle restriction dysfunction",
       "A neutral dysfunction, because one direction is normal"
      ],
      2,
      "Pain on exhalation — inhaled or exhaled rib? Run the pain-cycle chain: pain on exhalation means the rib refuses to move into exhalation, so it is camped in (lives in) inhalation — an inhaled rib. The hurting phase is the motion the rib REFUSES, never the phase it prefers. Reverse the logic for pain on inhalation (exhaled rib).  (A) Caliper refers to a motion type (ribs 11-12), not a both-directions dysfunction name. B: An exhaled rib is the mirror case: free into exhalation, restricted into inhalation. D: Pump-handle is a motion predominance, not the inhaled/exhaled SD name. E: There is no 'neutral' rib SD; you name for the position of ease.",
      "basic"
     ],
     [
      "You find a group of ribs 3-6 on the right all in an INHALED bucket-handle dysfunction. Using the B.I.T.E. rule, which rib do you treat first?",
      [
       "Rib 3 — the top-most rib of the group",
       "Rib 6 — the bottom-most rib of the group (Bottom for Inhaled)",
       "Rib 4 — the second rib from the top",
       "Rib 5 — the second rib from the bottom",
       "Whichever rib is most tender, regardless of position"
      ],
      1,
      "Inhaled group of ribs — treat which rib first? B.I.T.E. governs group order: Bottom for Inhaled, Top for Exhaled. For an inhaled group you treat the bottom-most rib first; pushing it inferiorly draws the ribs above it toward exhalation in a caravan with no roadblock. Treating the top first drives a rib into its still-inhaled neighbors — a brick wall.  (A) Treating the top rib first in an inhaled group pushes it into the inhaled ribs below — a brick wall. C: Rib 4 is neither the bottom of an inhaled group nor consistent with B.I.T.E. D: Rib 5 is not the bottom-most; the bottom rib (6) is treated first. E: Treatment order follows B.I.T.E. position, not tenderness ranking.",
      "basic"
     ],
     [
      "For a group of ribs all in an EXHALED dysfunction, B.I.T.E. directs you to treat the top-most rib first. What is the mechanistic reason?",
      [
       "The top rib anchors the diaphragm and must be freed before any other",
       "The top rib is always the most painful and should be relieved first",
       "The bottom rib in an exhaled group cannot be reached with muscle energy",
       "Exhaled ribs must be treated cephalad-to-caudad to avoid fracturing them",
       "Treating the top exhaled rib lets the ribs below follow it into inhalation without hitting a restriction"
      ],
      4,
      "Exhaled group treated top-first — why? For an exhaled group you free the top-most rib first so the lower ribs follow it into inhalation without resistance. Bottom-first would push exhaled ribs up into the exhaled ribs above them — the brick wall again. The rule is mechanical (avoiding the motion roadblock), not based on pain ranking or access.  (A) The diaphragm-anchor claim is not the B.I.T.E. rationale. B: Order follows the mechanical caravan logic, not pain ranking.  (C) The bottom rib is reachable; the issue is mechanical efficiency, not access. D: Fracture risk is not the rationale; the rationale is avoiding the motion roadblock.",
      "basic"
     ],
     [
      "Using muscle energy to treat a rib 1 EXHALATION dysfunction, which muscle's isometric contraction is used to lift the rib?",
      [
       "Serratus anterior",
       "Posterior scalene",
       "Anterior (and middle) scalene",
       "Latissimus dorsi",
       "Pectoralis minor"
      ],
      2,
      "Rib 1 exhalation ME — which muscle? The rib-dance ME map is rib-specific. Rib 1 uses the anterior (and middle) scalene to lift the rib in an exhalation dysfunction. Posterior scalene = rib 2, pec minor = ribs 3–5, serratus anterior = ribs 6–10, lat dorsi/QL = ribs 11–12. Match the muscle to the rib number or you treat nothing.  (A) Serratus anterior is used for ribs 6-10. B: Posterior scalene attaches to rib 2 and is used for rib 2 dysfunctions. D: Latissimus dorsi (with QL) is used for ribs 11-12. E: Pectoralis minor is used for ribs 3-5.",
      "basic"
     ],
     [
      "A right rib 4 exhaled pump-handle dysfunction is being treated with muscle energy. Which muscle group is recruited?",
      [
       "Anterior and middle scalene",
       "Pectoralis minor",
       "Posterior scalene",
       "Serratus anterior",
       "Quadratus lumborum"
      ],
      1,
      "Rib 4 exhaled pump ME — which muscle? Ribs 3–5 are treated with the pectoralis minor in the rib dance. Don't reach for the scalenes (rib 1/2) or serratus (6–10). The muscle is selected purely by rib number, so a right rib 4 exhaled pump-handle SD is a pec-minor ME treatment.  (A) Anterior/middle scalene is the rib 1 muscle. C: Posterior scalene is the rib 2 muscle. D: Serratus anterior covers ribs 6-10, not rib 4. E: QL (with lat dorsi) covers ribs 11-12.",
      "basic"
     ],
     [
      "You feel a prominence of ribs 6 and 7 on the LEFT. During respiration, ribs 6 and 7 move freely on inhalation but stop during exhalation. You perceive this motion as greatest at the mid-axillary line. State the complete somatic dysfunction.",
      [
       "Left ribs 6-7, exhalation somatic dysfunction, bucket-handle predominant",
       "Left ribs 6-7, inhalation somatic dysfunction, bucket-handle predominant",
       "Left ribs 6-7, inhalation somatic dysfunction, pump-handle predominant",
       "Right ribs 6-7, inhalation somatic dysfunction, bucket-handle predominant",
       "Left ribs 6-7, inhalation somatic dysfunction, caliper predominant"
      ],
      1,
      "Left ribs 6–7, free in, stuck out, mid-axillary — full SD? Work the four slots: side = left; ribs = 6–7; free into inhalation and stuck leaving it = inhaled; motion greatest at the mid-axillary line = bucket-handle predominant. The full name is left ribs 6–7, inhalation SD, bucket-handle predominant. Mid-axillary is the bucket tell; parasternal would have meant pump.  (A) Free into inhalation, stuck leaving it, means inhaled, not exhaled. C: Mid-axillary localization is bucket-handle, not pump-handle (which is parasternal). D: The prominence and motion are on the left, not the right. E: Caliper applies to ribs 11-12, not ribs 6-7.",
      "basic"
     ],
     [
      "On the RIGHT, ribs 6 and 7 are evaluated parasternally. During inhalation all ribs move freely; during exhalation rib 6 stops first. Motion is perceived best at the costosternal region. What is the dysfunction, and which anterior edge of rib 6 will be prominent?",
      [
       "Right rib 6, inhalation SD, bucket-handle predominant; the inferior edge is prominent anteriorly",
       "Right rib 6, inhalation SD, pump-handle predominant; the superior edge is prominent anteriorly",
       "Right rib 6, exhalation SD, pump-handle predominant; the inferior edge is prominent anteriorly",
       "Right rib 6, inhalation SD, pump-handle predominant; the inferior edge is prominent anteriorly",
       "Right ribs 6-7, inhalation SD, pump-handle predominant; the superior edge is prominent anteriorly"
      ],
      3,
      "Right rib 6, stops on exhalation, parasternal — SD + which edge? Rib 6 stops first on exhalation → inhaled; parasternal localization → pump-handle. On an inhaled rib the anterior INFERIOR edge rides up and is prominent in front (the superior edge is the prominent one posteriorly). So: right rib 6, inhalation SD, pump-handle predominant, anterior inferior edge prominent.  (A) Parasternal localization is pump-handle, not bucket-handle. B: The superior edge is prominent on the POSTERIOR angle, not anteriorly, for an inhaled rib. C: Stopping on exhalation means inhaled, not exhaled. E: Only rib 6 stops first; it is the dysfunctional rib (not 6-7 together), and the inferior edge is the anterior prominence.",
      "basic"
     ],
     [
      "On the RIGHT pump-handle ribs, rib 4 sits closer to rib 5 and farther from rib 3. Ribs 3 and 5 move fully; rib 4 moves freely into exhalation but not into inhalation. Name the dysfunction AND the muscle used to treat it with muscle energy.",
      [
       "Right rib 4, exhalation SD, pump-handle predominant; treat with latissimus dorsi",
       "Right rib 4, inhalation SD, pump-handle predominant; treat with pectoralis minor",
       "Right rib 4, exhalation SD, bucket-handle predominant; treat with serratus anterior",
       "Right rib 4, exhalation SD, pump-handle predominant; treat with anterior scalene",
       "Right rib 4, exhalation SD, pump-handle predominant; treat with pectoralis minor"
      ],
      4,
      "Right rib 4, free out, stuck in, narrowed space to rib 5 — SD + ME muscle? Rib 4 moves freely into exhalation and resists inhalation → exhaled; pump-handle (parasternal pattern). The spacing confirms it: closer to rib 5, farther from rib 3. Ribs 3–5 ME = pectoralis minor. Full answer: right rib 4, exhalation SD, pump-handle predominant, treat with pec minor.  (A) Latissimus dorsi treats ribs 11-12, not rib 4. B: Free into exhalation, stuck into inhalation, is exhaled, not inhaled. C: The pattern is pump-handle; serratus anterior treats ribs 6-10. D: Anterior scalene treats rib 1, not rib 4.",
      "basic"
     ]
    ]
   ],
   [
    "4",
    "Identify Exercise Rehabilitation for Rib Related Issues.",
    [
     [
      "For rib-related issues driven by scapular dyskinesis, what is the most appropriate rehabilitation referral focus?",
      [
       "Isolated rotator-cuff strengthening with no attention to the scapula",
       "Immobilization of the shoulder in a sling for six weeks",
       "Physical therapy to strengthen and stretch the scapular stabilizer muscles",
       "Immediate surgical referral for scapular fixation",
       "Bed rest and avoidance of all shoulder movement p. 13"
      ],
      2,
      "Scapular dyskinesis — rehab focus? The rehab move Barry tied to a rib-related issue is referral to PT to strengthen and stretch the scapular stabilizer muscles, correcting the malposition that drives cuff impingement. Immobilization, isolated cuff work, surgery, and bed rest are all wrong — they ignore or worsen the stabilizer imbalance.  (A) Isolated cuff work ignores the upstream scapular stabilizers that are the real problem. B: Immobilization would worsen stabilizer weakness, not correct it. D: Surgery is not the first-line rehab approach for scapular dyskinesis. E: Bed rest/avoidance deconditions the stabilizers further. p. 14",
      "basic"
     ]
    ]
   ]
  ]
 ],
 [
  4,
  "Complex Regional Pain Syndrome",
  [
   [
    "2",
    "Identify the etiologies of CRPS.",
    [
     [
      "What is the best estimate of the annual incidence of CRPS in the general population?",
      [
       "40–60 per 100,000 per year",
       "1 per 1,000,000 per year",
       "3 per 100,000 per year",
       "5–26 per 100,000 per year",
       "200 per 100,000 per year"
      ],
      3,
      "Annual incidence of CRPS? Population-based studies estimate 5–26 per 100,000 per year — a broad range, but higher than most clinicians expect for a condition many have never heard of. Barry led the Kahoot with this figure.  (A) 40–60 per 100,000 overstates it — above the studied range. B: 1 per million dramatically understates the true incidence. C: 3 per 100,000 is below the established range. E: 200 per 100,000 is far too high.",
      "basic"
     ],
     [
      "What is the most common precipitating event for CRPS in adults?",
      [
       "Venipuncture",
       "Spontaneous onset with no identifiable cause",
       "Carpal tunnel syndrome",
       "Myocardial infarction",
       "Fracture (especially distal radius)"
      ],
      4,
      "MC precipitant of CRPS in adults? Fracture is the most common precipitant (~42%), with the distal radius (Colles’) the classic site; blunt trauma, crush injuries, and sprains also feature. Surgery accounts for ~12%, nerve entrapment ~7%, and spontaneous ~5%.  (A) venipuncture is a notable but rare trigger. B: spontaneous onset is only ~5% of cases. C: carpal tunnel / nerve entrapment is ~7%, well below fracture. D: MI is a recognized but uncommon precipitant.",
      "basic"
     ]
    ]
   ],
   [
    "1",
    "Recognize Complex Regional Pain Syndrome (CRPS).",
    [
     [
      "A patient develops burning, disproportionate distal-limb pain after a wrist injury. Nerve conduction studies confirm a discrete median nerve lesion. Which CRPS classification applies?",
      [
       "Fibromyalgia",
       "CRPS Type I (formerly reflex sympathetic dystrophy) — no confirmed nerve lesion",
       "CRPS Type II (formerly causalgia) — confirmed peripheral nerve lesion",
       "Peripheral neuropathy without central involvement",
       "Phantom limb pain"
      ],
      2,
      "Disproportionate pain + CONFIRMED nerve lesion → CRPS type? CRPS Type II (the old causalgia) requires a confirmed peripheral nerve lesion; Type I (the old RSD) is the same clinical picture WITHOUT an identifiable nerve lesion. Barry hammered this — “Type 1, no confirmed nerve lesion; Type 2, confirmed peripheral nerve lesion. Know that, please.” The confirmed lesion is the whole distinction.  (A) fibromyalgia is widespread (all four quadrants) without the objective vasomotor/trophic findings of CRPS. B: Type I is defined by the ABSENCE of a confirmed nerve lesion — the stem confirms one, so this is Type II. D: a peripheral neuropathy alone does not produce the disproportionate, four-domain regional syndrome of CRPS. E: phantom limb pain follows amputation, not a discrete nerve lesion in an intact limb.",
      "basic"
     ],
     [
      "Which of the following is a historical synonym for CRPS?",
      [
       "Raynaud phenomenon",
       "Charcot joint",
       "Dupuytren contracture",
       "Sudeck’s atrophy",
       "Morton neuroma"
      ],
      3,
      "Historical synonym for CRPS? CRPS has gone by many names — Sudeck’s atrophy, reflex sympathetic dystrophy, causalgia, post-traumatic dystrophy, and shoulder-hand syndrome among them. Sudeck used early x-ray to document post-traumatic bone atrophy, hence “Sudeck’s atrophy.”  (A) Raynaud phenomenon is episodic vasospastic digit color change, not CRPS. B: Charcot joint is a neuropathic arthropathy (e.g., diabetic foot), not CRPS. C: Dupuytren contracture is palmar fascial thickening, unrelated. E: Morton neuroma is an interdigital nerve entrapment of the foot.",
      "basic"
     ],
     [
      "A patient reports excruciating burning pain simply from pulling a sock over the foot, with no prior injury to the foot. This is best described as:",
      [
       "Causalgia",
       "Hyperalgesia (exaggerated pain from a normally painful stimulus)",
       "Dysesthesia",
       "Paresthesia",
       "Allodynia (pain from a normally non-painful stimulus)"
      ],
      4,
      "Pain from a sock (non-painful stimulus) → term? Allodynia is pain perception to a stimulus that is not normally painful — a sock, a feather grazing the skin. Hyperalgesia is an abnormally high level of pain to a stimulus that WOULD normally hurt (Barry’s stubbed-toe-then-dropped-phone example). The sock is non-painful, so this is allodynia.  (A) causalgia is the old name for CRPS Type II, not a sensory descriptor. B: hyperalgesia requires a normally-painful stimulus amplified; a sock is not normally painful. C: dysesthesia is an abnormal unpleasant sensation, not specifically pain to a benign stimulus. D: paresthesia is a non-painful abnormal sensation (tingling), not pain.",
      "basic"
     ],
     [
      "Which set of features best characterizes CRPS at recognition?",
      [
       "Pain disproportionate to the injury, non-dermatomal, distal-predominant, with sensory/vasomotor/sudomotor/motor-trophic findings",
       "Pain in a single dermatomal distribution proportionate to the injury",
       "Symmetric widespread pain in all four body quadrants for >3 months",
       "Episodic vasospasm of the digits triggered by cold",
       "Proximal muscle weakness with elevated creatine kinase"
      ],
      0,
      "Best characterization of CRPS at recognition? CRPS is spontaneous or evoked pain DISPROPORTIONATE to the inciting injury, NOT following a dermatome, distal-predominant (hands/feet), with abnormalities across four domains (sensory, vasomotor, sudomotor, motor/trophic). The non-dermatomal, disproportionate, distal pattern is the recognition signature.  (B) CRPS is explicitly NON-dermatomal and DISproportionate — this is the opposite. C: symmetric widespread four-quadrant pain is fibromyalgia, not regional CRPS. D: cold-triggered digital vasospasm is Raynaud phenomenon. E: proximal weakness with high CK is an inflammatory myopathy.",
      "basic"
     ],
     [
      "Under the Budapest clinical criteria, beyond continuing disproportionate pain and exclusion of other diagnoses, a CRPS diagnosis requires:",
      [
       "≥1 symptom in ≥3 of 4 categories AND ≥1 sign in ≥2 of 4 categories",
       "≥1 symptom in all 4 categories AND ≥1 sign in all 4 categories",
       "A positive confirmatory lab test",
       "A positive sympathetic block",
       "Abnormal nerve conduction studies"
      ],
      0,
      "Budapest criteria symptom/sign thresholds? Budapest is clinical: continuing disproportionate pain, plus ≥1 reported SYMPTOM in ≥3 of the four categories, plus ≥1 observed SIGN in ≥2 categories, with no better explanation. There is no confirmatory lab/imaging test — the diagnosis is made at the bedside.  (B) all four categories for both symptoms and signs is stricter than Budapest requires (3 symptom categories, 2 sign categories).  (C) there is NO confirmatory lab test for CRPS — diagnosis is clinical. D: a sympathetic block is supportive, not a required Budapest criterion (and a negative block does not exclude CRPS). E: NCS confirm a nerve lesion (relevant to Type II) but are not a Budapest requirement.",
      "basic"
     ],
     [
      "Which feature best distinguishes CRPS from fibromyalgia?",
      [
       "Fibromyalgia is regional; CRPS is widespread across four quadrants",
       "CRPS is regional (usually one limb) with objective vasomotor/trophic findings; fibromyalgia is widespread without them",
       "Only CRPS lacks any objective findings",
       "Fibromyalgia requires a confirmed nerve lesion; CRPS does not",
       "CRPS pain lasts <3 months; fibromyalgia >3 months"
      ],
      1,
      "Best discriminator CRPS vs fibromyalgia? CRPS is REGIONAL — usually one limb on one side — with objective vasomotor, sudomotor, and trophic findings. Fibromyalgia is WIDESPREAD across all four quadrants for ≥3 months WITHOUT those objective findings. The regional-with-objective-signs vs widespread-without pattern is the discriminator.  (A) this reverses them — fibromyalgia is widespread, CRPS regional. C: CRPS is the one WITH objective findings; fibromyalgia lacks them. D: a confirmed nerve lesion defines CRPS Type II specifically, not fibromyalgia. E: CRPS duration is variable; the distinguishing axis is distribution + objective signs, not a 3-month cutoff.",
      "basic"
     ]
    ]
   ],
   [
    "3",
    "Identify clinical manifestations of CRPS.",
    [
     [
      "Which feature most specifically delineates stage 3 CRPS from stages 1 and 2?",
      [
       "Burning pain",
       "Irreversible dystrophy and atrophy",
       "Localized soft-tissue edema",
       "Warm, red, moist skin",
       "Increased hair and nail growth"
      ],
      1,
      "Feature that delineates stage 3 CRPS specifically? Stage 3 is marked by marked dystrophy/atrophy that becomes IRREVERSIBLE, plus contractures and possible livedo reticularis. Burning pain is present in all three stages, so it does not delineate stage 3 — this was the Kahoot trap. The irreversibility is the stage-3 tell.  (A) burning pain is present in stages 1, 2, AND 3 — it is the Kahoot distractor precisely because it does NOT delineate stage 3. C: localized edema with warm/red/moist skin is the stage 1 picture. D: warm, red, moist (hyperhidrotic) skin is stage 1, not stage 3.  (E) increased hair/nail growth is stage 1; by stage 3 growth has decreased and nails are brittle.",
      "basic"
     ],
     [
      "Wind-up — progressive amplification of dorsal horn neuron firing from repeated C-fiber input via NMDA-receptor activation, with receptive-field expansion — is the hallmark of:",
      [
       "Ephaptic transmission",
       "Peripheral sensitization",
       "Ectopic activity",
       "Central sensitization",
       "Neurogenic inflammation"
      ],
      3,
      "Wind-up + NMDA + receptive-field expansion → which process? Central sensitization is the dorsal-horn phenomenon: persistent afferent barrage lowers thresholds, NMDA-mediated wind-up amplifies firing, receptive fields expand (secondary hyperalgesia), and descending GABA/glycine inhibition is lost. Peripheral sensitization, by contrast, is the inflammatory-soup lowering of nociceptor thresholds at the injury site.  (A) ephaptic transmission is crosstalk between damaged fibers (neuropathic), not NMDA wind-up. B: peripheral sensitization is the inflammatory lowering of peripheral nociceptor thresholds, not the dorsal-horn wind-up. C: ectopic activity is spontaneous firing from sodium-channel accumulation at a nerve injury (neuropathic). E: neurogenic inflammation is substance-P/histamine-driven peripheral excitation.",
      "basic"
     ],
     [
      "In neuropathic pain, action potentials in damaged fibers “crosstalk” to adjacent undamaged fibers via direct electrical coupling, with no synapse. This is:",
      [
       "Wind-up",
       "Ectopic activity",
       "Ephaptic transmission",
       "Central sensitization",
       "Allodynia"
      ],
      2,
      "Synapse-free electrical crosstalk between fibers → term? Ephaptic transmission is direct electrical crosstalk between fibers — Barry’s frayed-wire/short-circuit analogy — spreading pain to undamaged nerves. Ectopic activity, by contrast, is spontaneous firing from sodium-channel accumulation at the injury site itself.  (A) wind-up is dorsal-horn temporal amplification, a central process. B: ectopic activity is spontaneous firing at the injured site, not crosstalk to neighbors. D: central sensitization is the broad dorsal-horn hyperexcitable state, not the specific fiber-to-fiber coupling. E: allodynia is a clinical symptom, not a mechanism of nerve crosstalk.",
      "basic"
     ],
     [
      "Lace-like, purplish, mottled skin discoloration appearing in stage 3 CRPS — from arteriolar/vasospasm reducing capillary perfusion and deoxygenated blood pooling in the subpapillary venous plexus — is called:",
      [
       "Erythema migrans",
       "Livedo reticularis",
       "Petechiae",
       "Telangiectasia",
       "Ecchymosis"
      ],
      1,
      "Lace-like purplish mottling in stage 3 → term? Livedo reticularis is the lace-like purplish mottling of stage 3 CRPS, reflecting sympathetic dysregulation and impaired microvascular tone — vasospasm reduces capillary perfusion and deoxygenated blood pools in the subpapillary venous plexus.  (A) erythema migrans is the expanding target rash of Lyme disease. C: petechiae are pinpoint hemorrhages, not a reticular vascular pattern. D: telangiectasias are dilated superficial vessels, not mottling. E: ecchymosis is bruising from extravasated blood.",
      "basic"
     ],
     [
      "What is the most common MOTOR finding in CRPS?",
      [
       "Reduced range of motion",
       "Resting tremor",
       "Myoclonus",
       "Fasciculations",
       "Spastic hypertonia"
      ],
      0,
      "MC motor finding in CRPS? Reduced range of motion is the most common motor finding, with weakness of the affected limb also overwhelming; about a quarter of patients develop movement disorders (bradykinesia, dystonia, myoclonus, tremor) and some show limb neglect. ROM loss leads.  (B) tremor occurs in a minority (~25% movement disorders), not the most common finding. C: myoclonus is one of the less-common movement disorders. D: fasciculations are not a characteristic CRPS motor sign. E: spastic hypertonia is not typical; the picture is weakness/ROM loss, sometimes dystonia.",
      "basic"
     ],
     [
      "Along the nociceptive pathway, after second-order neurons cross and ascend the spinothalamic tract through the thalamus, pain is ultimately perceived where — the basis for Barry’s “the pain is always in your head” thesis?",
      [
       "Dorsal root ganglion",
       "Dorsal horn of the spinal cord",
       "Somatosensory cortex",
       "Peripheral nociceptor terminal",
       "Anterior horn of the spinal cord"
      ],
      2,
      "Where is pain ultimately perceived? Action potentials ascend the spinothalamic tract through the thalamus to the SOMATOSENSORY CORTEX, where pain is perceived — hence Barry’s repeated thesis that “the pain is always in your head,” meaning real and centrally processed, not imagined. The cortex is the perception site.  (A) the dorsal root ganglion houses primary sensory cell bodies, not perception. B: the dorsal horn is the first central synapse, not the site of conscious perception. D: the peripheral terminal transduces the stimulus; it does not perceive pain. E: the anterior horn is motor, not sensory perception.",
      "basic"
     ]
    ]
   ],
   [
    "4",
    "Identify the treatment approach to a patient with CRPS.",
    [
     [
      "Which test does NOT assess the autonomic nervous system in a CRPS workup?",
      [
       "Stellate ganglion (sympathetic) block",
       "Resting sweat output (RSO)",
       "Quantitative sudomotor axon reflex test (QSART)",
       "Plain radiographs of the hands",
       "Resting skin temperature test"
      ],
      3,
      "Which test does NOT assess the autonomic system? RSO, QSART, the sympathetic (stellate ganglion) block, and resting skin temperature all probe autonomic/sudomotor function. Plain radiographs assess BONE (patchy demineralization), not autonomics — the odd one out in the Kahoot.  (A) the sympathetic block probes sympathetic contribution — autonomic. B: RSO directly measures resting sweat — an autonomic (sudomotor) test. C: QSART measures acetylcholine-stimulated sweat — autonomic. E: resting skin temperature reflects vasomotor autonomic tone.",
      "basic"
     ],
     [
      "For a patient with suspected early (stage 1) CRPS, which imaging study did Barry emphasize as preferable?",
      [
       "Three-phase bone scintigraphy (bone scan)",
       "Plain radiographs",
       "Non-contrast CT",
       "Ultrasound",
       "Functional MRI"
      ],
      0,
      "Preferred imaging in stage 1 CRPS? Barry stated it twice — “bone scan is preferable to plain radiographs in stage 1, I repeat.” Three-phase bone scintigraphy shows diffuse increased periarticular tracer uptake early, before the patchy osteoporosis of stage 2 becomes visible on plain films.  (B) plain radiographs show the patchy osteoporosis of STAGE 2, not early stage 1 — the bone scan is preferred early. C: CT shows focal osteoporosis but is not the stage-1 preference. D: ultrasound is not the emphasized CRPS imaging modality. E: fMRI maps pain pathways in research, not routine stage-1 diagnosis.",
      "basic"
     ],
     [
      "A patient with suspected upper-limb CRPS undergoes a stellate ganglion sympathetic block and reports NO pain relief. What is the correct interpretation?",
      [
       "A repeat block is contraindicated",
       "CRPS is definitively excluded",
       "The patient has Type II rather than Type I CRPS",
       "The patient is malingering",
       "A negative block does NOT rule out CRPS"
      ],
      4,
      "No relief from sympathetic block → interpretation? A sympathetic block is diagnostic/therapeutic when positive, but a NEGATIVE response does not rule out CRPS — Barry’s Spurling analogy: a positive cervical compression test confirms foraminal stenosis, but a negative one does not exclude it. Absence of response is not absence of disease.  (A) a non-response does not contraindicate a repeat or other diagnostics. B: a negative block cannot exclude CRPS — that is the whole teaching point. C: block response does not distinguish Type I from Type II (that is the nerve-lesion question). D: nothing here indicates malingering; the pain is real and centrally processed.",
      "basic"
     ],
     [
      "Which best reflects the pharmacologic approach to CRPS that Barry described?",
      [
       "A single first-line agent continued indefinitely as monotherapy",
       "A multi-agent approach — analgesics, NSAIDs/steroids, TCAs, sodium-channel blockers, gabapentin, GABA agonists, etc. — to aggressively dampen and limit spread",
       "Opioids alone, titrated to comfort",
       "No pharmacotherapy — physical therapy only",
       "Antibiotics directed at the underlying infection"
      ],
      1,
      "Pharmacologic approach to CRPS? Barry described “throwing the book” at CRPS — a multi-agent strategy spanning opioid/non-opioid analgesics, NSAIDs and steroids, TCAs, sodium-channel blockers, gabapentin, GABA agonists (baclofen for dystonia), beta-blockers, and clonidine — to mitigate pain and stop spread, alongside PT/OT and psychotherapy.  (A) CRPS is treated with combination therapy, not single-agent monotherapy. C: opioids are one option among many, not a standalone strategy. D: pharmacotherapy is part of the plan alongside PT/OT/psych — not omitted. E: CRPS is not an infection; antibiotics have no role.",
      "basic"
     ],
     [
      "High-dose ketamine infusions are used in refractory CRPS primarily because ketamine acts as:",
      [
       "A GABA-A antagonist",
       "A mu-opioid receptor agonist",
       "A COX-2 selective inhibitor",
       "A sodium-channel agonist",
       "An NMDA-receptor antagonist that dampens central sensitization / wind-up"
      ],
      4,
      "Why ketamine in refractory CRPS? Ketamine is an NMDA-receptor antagonist; because NMDA activation drives the wind-up of central sensitization, blocking it dampens the amplified central pain and promotes neural “reprogramming.” This is the legitimate mechanism behind Maya Kowalski’s ketamine regimen.  (A) ketamine does not work as a GABA-A antagonist for this purpose. B: ketamine is not primarily a mu-opioid agonist. C: COX-2 inhibition is the NSAID mechanism, not ketamine. D: ketamine does not agonize sodium channels (blockers, not agonists, are analgesic).",
      "basic"
     ],
     [
      "When applying OMT to a CRPS patient, which precaution did Barry emphasize?",
      [
       "OMT is contraindicated in all CRPS patients",
       "HVLA is the preferred first-line OMT for CRPS",
       "Use HVLA with caution because of osteoporosis; indirect techniques are better tolerated",
       "Only direct, high-force techniques relieve CRPS",
       "OMT should target the contralateral healthy limb only p. 13"
      ],
      2,
      "OMT precaution in CRPS? Because CRPS produces patchy osteoporosis/demineralization, HVLA should be used with caution; Barry noted he uses “a lot more indirect treatments” in his CRPS patients, which are better tolerated. OMT can normalize the CNS, improve blood flow, decrease pain, and improve mobility.  (A) OMT is useful in CRPS — not contraindicated; the technique selection just shifts toward indirect. B: HVLA is used with CAUTION, not preferred first-line, due to osteoporosis. D: high-force direct techniques are exactly what the osteoporosis caution warns against. E: treatment addresses the affected limb and CNS, not only the contralateral side. p. 14",
      "basic"
     ]
    ]
   ]
  ]
 ],
 [
  5,
  "Cervical Spine I — Mechanics & Functional Anatomy",
  [
   [
    "3",
    "Test and palpate the cervical musculature.",
    [
     [
      "During cervical motion testing, you push the articular pillar from the LEFT toward the right. What motion are you inducing at that segment?",
      [
       "RIGHT sidebending",
       "LEFT sidebending (push left → sidebend left)",
       "Left rotation",
       "Flexion",
       "Right rotation"
      ],
      1,
      "Push articular pillar from the left → induces what? Translation IS sidebending: pushing from the left induces LEFT sidebending (Widboom’s practical rule — “push left, sidebend left”). The confusing exam wording calls this “right translation,” but at the bedside you just think push-left-sidebend-left.  (A) pushing from the left induces LEFT sidebending, not right. C: you test rotation in C2–C7 indirectly via sidebending at the articular pillar, not by direct rotation here. D: translation induces sidebending, not flexion. E: this is sidebending, not rotation.",
      "basic"
     ],
     [
      "If a segment has LIMITED translation to the right (restriction when you push from the left), the segment “lives in” which position?",
      [
       "Right sidebending",
       "Left sidebending",
       "Neutral",
       "Flexion",
       "Right rotation only"
      ],
      0,
      "Limited translation right → segment lives in? Limited translation right = the segment will not sidebend left (restricted left sidebending) → it LIVES in RIGHT sidebending (its position of freedom). This is the wording that trips students; converting “translation/restriction” to plain sidebending resolves it.  (B) left sidebending is the RESTRICTED direction, not where it lives. C: neutral is determined by flexion/extension behavior, not by the translation restriction. D: flexion is the AP-curve component, separate from the sidebending the restriction defines. E: rotation follows sidebending by the coupling rule; the restriction defines sidebending position.",
      "basic"
     ],
     [
      "In cervical somatic-dysfunction diagnosis, which structures do you palpate and translate against — rather than pressing on the transverse processes?",
      [
       "The transverse processes directly",
       "The spinous processes",
       "The articular pillars (lateral masses between the superior and inferior facets)",
       "The vertebral bodies",
       "The pedicles"
      ],
      2,
      "What do you palpate/translate in cervical SD diagnosis? You palpate the ARTICULAR PILLARS — the lateral masses between the superior and inferior facets, about a fingertip in size — from the side, and translate against them to induce sidebending. The cervical transverse processes are avoided (nerves exit there and muscular attachments are tender).  (A) the transverse processes are specifically AVOIDED — tender, with exiting nerves. B: spinous processes are palpated for landmarking (C2 is the first large one), not for translation testing. D: vertebral bodies are anterior and not directly palpable for this. E: pedicles are not the palpation target for translation.",
      "basic"
     ]
    ]
   ],
   [
    "1",
    "Describe the muscular and ligamentous attachments of the cervical spine.",
    [
     [
      "A patient with chronic headaches has tenderness in the most midline suboccipital muscle. Which muscle’s myodural bridge to the intracranial dura makes it a classic cervicogenic-headache generator?",
      [
       "Longus colli",
       "Rectus capitis posterior major",
       "Sternocleidomastoid",
       "Rectus capitis posterior minor",
       "Levator scapulae"
      ],
      3,
      "Suboccipital muscle with myodural bridge → cervicogenic HA? There is a myodural bridge between rectus capitis posterior MINOR and the intracranial dura (first reported in Spine Journal, 1997). Because the dura has pain-sensitive fibers, tightness in the most-midline RCP minor pulls on a pain-sensitive structure — Widboom: check it on every headache patient. In the OAD-compression hold, the most-midline finger sits on RCP minor.  (A) longus colli is a deep cervical flexor, not a suboccipital headache generator. B: RCP major (slightly more lateral) is headache-relevant too, but the myodural bridge is specifically the MINOR. C: SCM can refer pain to the head but has no myodural bridge. E: levator scapulae causes neck/shoulder pain from forward-head posture, not the dural bridge.",
      "basic"
     ],
     [
      "Which statement about the atypical cervical vertebrae C1 and C2 is correct?",
      [
       "C1 has no spinous process or vertebral body; C2 has a dens projecting from its body",
       "C1 has the largest spinous process; C2 has no vertebral body",
       "C2 has no spinous process; C1 carries the dens",
       "Both C1 and C2 have bifid spinous processes",
       "C1 has a dens; C2 articulates with the occiput"
      ],
      0,
      "C1 vs C2 atypical features? C1 (atlas) has NO spinous process (only a posterior tubercle) and no vertebral body — its body was “stolen” by C2 in the form of the dens. C2 (axis) carries the dens projecting superiorly from its body. C2 also has the first large, palpable spinous process coming off the occiput.  (B) C1 has no spinous process at all (a posterior tubercle), and C2 DOES have a body (plus the dens). C: this reverses them — C1 lacks the SP; C2 carries the dens. D: the bifid spinous processes are the TYPICAL C2–C6 feature; C1 has none. E: the dens is on C2, and it is the occiput-OA-C1 relationship, not C2, that meets the skull.",
      "basic"
     ],
     [
      "How do intrinsic and extrinsic cervical muscles differ functionally?",
      [
       "Intrinsic provide power; extrinsic provide precise segmental control",
       "Intrinsic are deeper/closer to the rotation axis (precise segmental control); extrinsic are farther (more power, less precision)",
       "Intrinsic are the largest superficial muscles; extrinsic are the deepest",
       "Intrinsic control respiration; extrinsic control swallowing",
       "There is no functional difference — only a naming convention"
      ],
      1,
      "Intrinsic vs extrinsic cervical muscle function? Intrinsic muscles are deeper and closer to the axis of rotation — generally smaller, giving precise control of individual-segment motion. Extrinsic muscles sit farther from the axis, tend to be larger/longer, and provide power of movement but lack precise segmental control.  (A) this reverses them — intrinsic = precision, extrinsic = power. C: the large superficial muscles (e.g., trapezius) are EXTRINSIC; intrinsic are deep. D: neither group is defined by respiration/swallowing (scalenes are accessory respiration, but that is not the intrinsic/extrinsic axis). E: there is a real functional difference — precision vs power.",
      "basic"
     ],
     [
      "Beyond neck pain, which clinical association did Widboom highlight for the cervical spine?",
      [
       "Vertigo with the AA only and respiration via the phrenic nerve at C8",
       "Vertigo with C7 dysfunction and diaphragm function via T1–T4",
       "Hearing loss with C1 and cardiac output via C6",
       "Vision loss with C4 and swallowing via C2",
       "Vertigo with C2 dysfunction (dural attachments) and diaphragm function via C3–C5 p. 20"
      ],
      4,
      "Cervical clinical associations Widboom highlighted? Widboom flagged a strong vertigo–C2 association (dural attachments to C2, expanded on in cranial) and the diaphragm’s C3–C5 innervation (“C3, 4, 5 keep the diaphragm alive”) — so abdominal/post-surgical diaphragm issues can trace to the neck. Sympathetic cardiac control via the stellate ganglion is another.  (A) the phrenic nerve is C3–C5, not C8, and the vertigo link is C2, not AA-only. B: vertigo links to C2 (not C7) and the diaphragm to C3–C5 (not T1–T4). C: the highlighted associations were vertigo-C2 and diaphragm-C3–5, not hearing/C1 or cardiac/C6. D: it was vertigo-C2 and diaphragm, not vision-C4/swallowing-C2. p. 21",
      "basic"
     ]
    ]
   ],
   [
    "2",
    "Describe how the cervical muscles affect spinal motion.",
    [
     [
      "Acting UNILATERALLY, the scalenes produce which motion — and what is their respiratory role?",
      [
       "Contralateral sidebending; accessory muscles of respiration",
       "Contralateral rotation; primary muscles of respiration",
       "Bilateral extension; no respiratory role",
       "Ipsilateral sidebending; accessory muscles of respiration",
       "Ipsilateral rotation; primary muscles of expiration"
      ],
      3,
      "Scalenes — unilateral action + respiratory role? Unilaterally the scalenes sidebend to the SAME (ipsilateral) side; bilaterally they flex the neck. They are accessory muscles of respiration — anterior/middle elevate the 1st rib, posterior elevates the 2nd. The “patient who lives in their head” breathes with the neck, tightening scalenes and producing brachial-plexus symptoms in digits 4–5.  (A) scalene sidebending is ipsilateral, not contralateral. B: contralateral rotation describes the SCM, not the scalenes; and they are accessory, not primary. C: bilateral scalene action is flexion, and they DO have a respiratory role. E: scalenes are accessory muscles of INspiration (rib elevation), not expiration.",
      "basic"
     ],
     [
      "Acting unilaterally, the sternocleidomastoid (SCM) produces which combination?",
      [
       "Ipsilateral rotation with contralateral sidebending",
       "Ipsilateral sidebending with ipsilateral rotation",
       "Contralateral sidebending with contralateral rotation",
       "Pure bilateral flexion only",
       "Ipsilateral sidebending with CONTRALATERAL rotation"
      ],
      4,
      "SCM — unilateral action combination? The SCM is the counterintuitive one: unilaterally it sidebends to the SAME side but rotates to the OPPOSITE (contralateral) side — picture bringing the mastoid toward the sternoclavicular joint. Bilaterally it flexes (or protracts/extends the already-extended neck).  (A) this inverts both components. B: SCM rotation is contralateral, not ipsilateral — that is the trap. C: SCM sidebending is ipsilateral, not contralateral. D: bilateral flexion is only one of its actions; the question asks the unilateral combination.",
      "basic"
     ],
     [
      "A patient reports pain specifically when turning the head to the LEFT. Based on Widboom’s teaching, which is the most likely contributor?",
      [
       "The RIGHT semispinalis (pain occurs turning the opposite way)",
       "The left semispinalis",
       "The left longus colli",
       "The right longus capitis",
       "The left platysma"
      ],
      0,
      "Pain turning head LEFT → most likely muscle? Widboom’s rule: semispinalis pain presents as pain turning the OPPOSITE way — so pain on turning LEFT points to the RIGHT semispinalis. Rotatory complaints also implicate the AA (the big rotatory joint).  (B) the painful-rotation rule is the OPPOSITE side — left-turn pain = right semispinalis. C: longus colli is a deep flexor, not the rotation-pain muscle. D: longus capitis is a flexor, not the semispinalis rotation pattern. E: platysma is a superficial muscle of facial expression, not clinically relevant here.",
      "basic"
     ]
    ]
   ],
   [
    "4",
    "Evaluate cervical movement patterns and make a somatic-dysfunction diagnosis.",
    [
     [
      "At the occipitoatlantal (OA) joint, how do sidebending and rotation relate, regardless of the AP curve (flexion, extension, or neutral)?",
      [
       "They occur to the same side only in flexion",
       "They always occur to the SAME side",
       "They are uncoupled and occur independently",
       "They always occur to OPPOSITE sides",
       "They occur to opposite sides only in extension"
      ],
      3,
      "OA — sidebending vs rotation relationship? At the OA, sidebending and rotation are ALWAYS opposite, regardless of flexion/extension/neutral — Widboom’s mnemonic “OA = Opposite Always.” Its primary motion is flexion/extension (the nodding of the head).  (A) the opposite-coupling holds in flexion, extension, AND neutral — it is not flexion-dependent. B: same-side coupling is the C2–C7 rule, not the OA. C: OA motion IS coupled — sidebending and rotation occur together (oppositely). E: the opposite-coupling is not limited to extension; it is always opposite.",
      "basic"
     ],
     [
      "The atlantoaxial (AA) joint is responsible for approximately what fraction of total cervical rotation, and what is its primary motion?",
      [
       "~25% of cervical rotation; primary motion is translation",
       "~50% of cervical rotation; primary motion is sidebending",
       "~10% of cervical rotation; primary motion is flexion",
       "~90% of cervical rotation; primary motion is extension",
       "~50% of cervical rotation; primary motion is rotation"
      ],
      4,
      "AA — fraction of cervical rotation + primary motion? The AA (C1 on C2) provides about 50% of total cervical rotation and its primary motion is rotation; sidebending there is extremely limited. Fully flexing the head isolates AA rotation — with everything else locked, all remaining rotation comes from the AA.  (A) 25%/translation is wrong on both counts. B: sidebending is extremely limited at the AA — rotation is its job. C: 10%/flexion understates rotation and misnames the primary motion. D: 90%/extension overstates it and misnames the motion (~50% is the figure).",
      "basic"
     ],
     [
      "In the typical cervical segments (C2–C7), how do sidebending and rotation couple, regardless of the AP curve?",
      [
       "Opposite in neutral only",
       "Always to OPPOSITE sides",
       "Same side in flexion, opposite in extension",
       "Always to the SAME side",
       "They do not couple in the cervical spine"
      ],
      3,
      "C2–C7 — sidebending/rotation coupling? C2–C7 sidebending and rotation always occur to the SAME side, regardless of flexion/extension/neutral (a “modified type 2” behavior). Examples: NSrRr, ESrRr, FSrRr. Upper segments (C2–C4) favor rotation; lower (C5–C7) favor sidebending.  (A) it is same-side in neutral too, not opposite. B: opposite coupling is the OA rule, not C2–C7. C: the same-side coupling holds across all AP curves, not just flexion. E: cervical motion IS coupled — that is the whole basis of the diagnosis.",
      "basic"
     ],
     [
      "Which statement about cervical spine mechanics relative to Fryette’s principles is correct?",
      [
       "The cervical spine follows Fryette’s Principles 1 & 2 exactly as the thoracic spine does",
       "The cervical spine does NOT follow Fryette’s Principles 1 & 2; it uses modified rules",
       "The cervical spine follows Principle 1 but not Principle 2",
       "Fryette’s principles do not apply to any region of the spine",
       "The cervical spine follows Principle 3 only"
      ],
      1,
      "Cervical spine vs Fryette’s principles? Widboom flagged this hard (the slide repeats the line twice): the cervical spine does NOT follow Fryette’s Principles 1 & 2. It uses MODIFIED rules — OA opposite-always, AA rotation-only, C2–C7 same-side — which are similar to but distinct from thoracic/lumbar triads. This is the carryover error students make.  (A) it does NOT follow them exactly — that is the exact misconception being tested. C: neither Principle 1 nor 2 applies in the standard form; the cervical rules are modified. D: Fryette’s principles DO apply to the thoracic and lumbar spine. E: the cervical rules are region-specific modifications, not “Principle 3 only.”",
      "basic"
     ],
     [
      "A patient has limited translation to the RIGHT at C3 that improves in BOTH flexion and extension. What is the diagnosis?",
      [
       "C3 extended, sidebent left, rotated right (ESLRR)",
       "C3 extended, sidebent right, rotated left (ESRRL)",
       "C3 flexed, sidebent left, rotated left (FSLRL)",
       "C3 neutral, sidebent left, rotated left (NSLRL)",
       "C3 neutral, sidebent right, rotated right (NSRRR)"
      ],
      4,
      "C3 limited translation R, improves flex+ext → dx? Improves in both flexion and extension → NEUTRAL. Limited translation right = restricted LEFT sidebending → the segment lives in RIGHT sidebending. C3 is a typical segment, so rotation follows to the SAME side → rotated right. Diagnosis: C3 NSRRR.  (A) extended and opposite-rotation are both wrong for a neutral typical segment. B: extended contradicts “improves in both flexion and extension” (that means neutral); and C2–C7 rotation is same-side, not opposite. C: flexed and left-sidebent both contradict the findings. D: left sidebending is wrong — limited right translation means the segment lives in RIGHT sidebending.",
      "basic"
     ],
     [
      "A patient has limited translation to the RIGHT at the OA that improves in EXTENSION but not flexion. What is the diagnosis?",
      [
       "OA extended, sidebent right, rotated left (ESRRL)",
       "OA neutral, sidebent right, rotated right (NSRRR)",
       "OA flexed, sidebent right, rotated right (FSRRR)",
       "OA extended, sidebent left, rotated right (ESLRR)",
       "OA flexed, sidebent left, rotated left (FSLRL)"
      ],
      0,
      "OA limited translation R, improves in extension → dx? Improves in extension (not flexion) → EXTENDED. Limited translation right = restricted left sidebending → lives in RIGHT sidebending. OA couples OPPOSITELY (Opposite Always), so rotation is LEFT. Diagnosis: OA ESRRL.  (B) neutral contradicts “improves in extension but not flexion”; and OA rotation is opposite, not same-side. C: flexed is wrong (it improves in extension) and OA rotation is opposite, not same. D: left sidebending is wrong — limited right translation means right sidebending. E: flexed and same-side coupling are both wrong for the OA.",
      "basic"
     ],
     [
      "With the head fully flexed, the AA is rotated to the left and motion is full, but rotation to the right is restricted. What is the AA diagnosis?",
      [
       "AA neutral, sidebent left, rotated left",
       "AA rotated right (R-R)",
       "AA rotated left (R-L)",
       "AA extended, rotated right",
       "AA flexed, sidebent right, rotated right"
      ],
      2,
      "AA full flexion, free to left/restricted right → dx? The AA diagnosis records ONLY rotation. Full flexion isolates AA rotation; the segment is named for its freedom of motion — free to the left, restricted to the right → AA rotated LEFT. (Sidebending and AP curve are not part of an AA diagnosis.)  (A) an AA diagnosis names rotation only — no sidebending or AP-curve component. B: restricted to the right means it is NOT rotated right — it lives in left rotation. D: AA carries no extension/flexion descriptor in its diagnosis. E: no sidebending or AP curve is recorded for the AA.",
      "basic"
     ],
     [
      "The superior facets of the typical cervical vertebrae are oriented in which direction (the “BUM” of bumble-BUM)?",
      [
       "Forward, Downward, Medial",
       "Backward, Upward, Lateral",
       "Backward, Upward, Medial",
       "Backward, Downward, Lateral",
       "Forward, Upward, Lateral"
      ],
      2,
      "Cervical superior facet orientation? Cervical superior facets face Backward, Upward, Medial (BUM) — the licensing-exam “bumble-BUM” mnemonic, and the orientation that determines preferred cervical motion. The thoracic facets, by contrast, are Backward, Upward, Lateral (BUL).  (A) cervical facets face backward and upward, not forward/downward. B: Backward-Upward-Lateral (BUL) is the THORACIC facet orientation. D: cervical is medial, not lateral (lateral is thoracic). E: this matches neither cervical nor thoracic.",
      "basic"
     ],
     [
      "In cervical somatic-dysfunction nomenclature, the motion of a segment is named for what?",
      [
       "The spinous process tip relative to the rib below",
       "The posterior-inferior surface of the lower vertebra",
       "The anterior-superior surface of the upper vertebra in relation to the one below it",
       "The transverse process relative to the vertebra above",
       "The average of the two adjacent vertebral bodies"
      ],
      2,
      "What is a cervical segment’s motion named for? All spinal/vertebral motion is described by the ANTERIOR-SUPERIOR surface of the upper vertebra in relation to the segment below it (e.g., “C2” means C2 on C3). If that anterior-superior part rotates left, the segment is “rotated left,” and so on.  (A) the spinous-process-to-rib relationship is not how segmental motion is named. B: motion is named by the upper vertebra’s anterior-superior surface, not the lower’s posterior-inferior. D: the naming is the upper-on-lower vertebral-body relationship, not transverse process. E: it is the upper segment specifically, not an average.",
      "basic"
     ],
     [
      "A complete written cervical somatic-dysfunction diagnosis has three parts. Which set is correct?",
      [
       "Only sidebending and rotation",
       "Type (AP curve: N/F/E), sidebending + rotation, and direction of freedom",
       "Type, translation distance, and the rib involved",
       "Vertebral level, dermatome, and reflex",
       "Flexion angle, rotation degrees, and muscle grade"
      ],
      1,
      "Three parts of the cervical SD diagnosis? The written diagnosis has three parts: the TYPE (AP curve — Neutral, Flexed, or Extended), the SR (sidebending + rotation, coupled per region), and the direction of freedom of motion. The AA is the exception — only rotation is recorded.  (A) sidebending/rotation alone omits the AP-curve type and direction of freedom. C: translation distance and rib involvement are not parts of the segmental diagnosis. D: dermatome/reflex belong to a radiculopathy workup, not the SD nomenclature. E: the diagnosis uses qualitative AP-curve/coupling, not angle/degree/grade measurements.",
      "basic"
     ]
    ]
   ]
  ]
 ],
 [
  6,
  "Cervical Spine II — Cervical Radiculopathy",
  [
   [
    "2",
    "Identify the signs and symptoms of cervical radiculopathy.",
    [
     [
      "A patient has arm pain radiating to the thumb and index finger, weak wrist extension, and a decreased brachioradialis reflex. Which nerve root is most likely impinged?",
      [
       "C6",
       "C5",
       "C7",
       "C8",
       "T1"
      ],
      0,
      "Thumb/index, weak wrist extension, ↓ brachioradialis → root? C6 maps to wrist extensors (motor), the brachioradialis (reflex), and the lateral forearm/thumb–index (sensation). The triad points squarely at the C6 root — the Kahoot opener.  (B) C5 is deltoid/biceps with the biceps reflex and lateral-arm sensation — not wrist extension/brachioradialis. C: C7 is finger extensors/triceps reflex/middle-finger sensation. D: C8 is finger flexors, no reflex, ulnar/4th–5th-digit sensation. E: T1 is the hand interossei (finger abduction), no reflex, medial-arm sensation.",
      "basic"
     ],
     [
      "On the 0–4 deep-tendon-reflex scale, which grade is always abnormal because a tap elicits clonus?",
      [
       "0 (no response)",
       "4 (a tap elicits clonus — sustained jerking)",
       "1 (slight but present)",
       "2 (brisk, normal)",
       "3 (very brisk, may or may not be normal)"
      ],
      1,
      "Which DTR grade is always abnormal (clonus)? By convention: 0 = no response, 1 = slight but present, 2 = brisk/normal, 3 = very brisk (may or may not be normal), 4 = a tap elicits CLONUS (sustained jerking) — always abnormal. Clonus reflects a UMN/suprasegmental lesion.  (A) 0 (areflexia) is abnormal but is the LMN/absent end, not clonus. C: 1 is a diminished-but-present response, not clonus. D: 2 is the normal grade. E: 3 is very brisk and may or may not be normal — not the always-abnormal clonus grade.",
      "basic"
     ],
     [
      "Which motor/reflex/sensation set corresponds to the C5 nerve root?",
      [
       "Deltoid & biceps; biceps reflex; lateral-arm/biceps sensation",
       "Wrist extensors; brachioradialis reflex; lateral forearm/thumb",
       "Finger extensors; triceps reflex; middle finger",
       "Finger flexors; no reflex; ulnar 4th–5th digits",
       "Hand interossei; no reflex; medial arm"
      ],
      0,
      "C5 motor/reflex/sensation set? C5 = deltoid and biceps (motor: “put up your dukes, don’t let me push down”), the biceps reflex, and sensation over the lateral arm/biceps region. The disc level is C4–C5, with the root exiting above the C5 vertebra.  (B) wrist extensors/brachioradialis/lateral-forearm-thumb is C6. C: finger extensors/triceps/middle-finger is C7. D: finger flexors/ulnar 4th–5th is C8. E: interossei/medial-arm is T1.",
      "basic"
     ],
     [
      "Which set corresponds to the C7 nerve root?",
      [
       "Deltoid & biceps; biceps reflex; lateral arm",
       "Finger extensors; triceps reflex; middle-finger sensation",
       "Wrist extensors; brachioradialis reflex; thumb",
       "Finger flexors; no reflex; little finger",
       "Hand intrinsics; no reflex; medial forearm"
      ],
      1,
      "C7 motor/reflex/sensation set? C7 = finger extensors (motor), the triceps reflex, and middle-finger sensation; the disc level is C6–C7 — the most common herniation, hence the most common radiculopathy. C7 is the highest-yield root to anchor.  (A) deltoid/biceps/biceps-reflex/lateral-arm is C5. C: wrist extensors/brachioradialis/thumb is C6. D: finger flexors/little finger is C8. E: hand intrinsics/medial forearm is T1.",
      "basic"
     ],
     [
      "Which set corresponds to the C8 nerve root?",
      [
       "Finger flexors; no reliable reflex; ulnar 4th–5th-digit sensation",
       "Finger extensors; triceps reflex; middle finger",
       "Wrist extensors; brachioradialis reflex; thumb",
       "Deltoid & biceps; biceps reflex; lateral arm",
       "Hand interossei; no reflex; medial arm"
      ],
      0,
      "C8 motor/reflex/sensation set? C8 = finger flexors (motor), no reliable DTR, and sensation over the ulnar aspect of the arm and the 4th–5th digits. C8 fills the gap below the C7 vertebra (the cervical roots exit ABOVE their like-numbered vertebra through C7, then C8 fills in below C7).  (B) finger extensors/triceps/middle-finger is C7. C: wrist extensors/brachioradialis/thumb is C6. D: deltoid/biceps/lateral-arm is C5. E: interossei (finger abduction)/medial-arm is T1.",
      "basic"
     ],
     [
      "In cervical radiculopathy, how are pain and paresthesias typically distributed?",
      [
       "Pain and paresthesias absent; only weakness occurs",
       "Pain most intense distally; paresthesias confined to the neck",
       "Both pain and paresthesias confined to the neck",
       "Both pain and paresthesias only in the hand",
       "Pain most intense proximally (neck); paresthesias more noticeable distally"
      ],
      4,
      "Distribution of pain vs paresthesias in radiculopathy? Pain is most intense PROXIMALLY — neck pain is the most common complaint — and refers in a dermatomal pattern, while paresthesias (tingling/numbness) are more noticeable DISTALLY down the arm on the side of root compression. The radiating pain is often “shooting/electrical” and worsens with cough/Valsalva.  (A) pain and paresthesias are characteristic, not absent. B: this reverses it — pain is proximal, paresthesias distal. C: symptoms are not confined to the neck — they radiate dermatomally. D: they are not limited to the hand — neck pain dominates proximally.",
      "basic"
     ]
    ]
   ],
   [
    "1",
    "Identify selected etiologies of cervical radiculopathy.",
    [
     [
      "What is the most common disc herniation causing cervical radiculopathy, and which root does it affect?",
      [
       "C7–T1 disc herniation affecting the C8 root",
       "C4–C5 disc herniation affecting the C5 root",
       "C5–C6 disc herniation affecting the C6 root",
       "C6–C7 disc herniation affecting the C7 nerve root",
       "C2–C3 disc herniation affecting the C3 root"
      ],
      3,
      "MC disc herniation + root in cervical radiculopathy? Barry stated it 3+ times (the transcript repeats the sentence): the most common disc herniation is at C6–C7, creating symptoms at the C7 nerve root. Compressive etiologies (disc herniation, cervical spondylosis, stenosis) dominate; mean age ~48, M:F ~1.7:1.  (A) C7–T1/C8 is less common. B: C4–C5/C5 is less common than C6–C7/C7. C: C5–C6/C6 is common but not THE most common — C6–C7/C7 leads. E: C2–C3/C3 is uncommon for radiculopathy.",
      "basic"
     ]
    ]
   ],
   [
    "4",
    "Describe the physical examination and special tests for cervical radiculopathy.",
    [
     [
      "On exam, which finding pair is most consistent with cervical radiculopathy?",
      [
       "Both Spurling and distraction worsen symptoms",
       "Spurling’s test improves symptoms; distraction worsens them",
       "Spurling’s test WORSENS symptoms; cervical distraction IMPROVES them",
       "Both Spurling and distraction improve symptoms",
       "Neither test changes symptoms"
      ],
      2,
      "Spurling + distraction pattern in radiculopathy? Spurling’s compression test (extension + sidebending toward the side, with axial load) narrows the foramen and WORSENS radicular symptoms; cervical distraction opens the foramen and IMPROVES them. Valsalva also worsens symptoms with a mass/herniation.  (A) distraction relieves (gives the nerve room), it does not worsen. B: this reverses both — compression worsens, distraction relieves. D: Spurling worsens (it compresses), it does not improve. E: in true radiculopathy these provocative/relief maneuvers DO change symptoms.",
      "basic"
     ]
    ]
   ]
  ]
 ],
 [
  7,
  "The Osteopathic Approach to Pulmonology",
  [
   [
    "1",
    "Explain the effects of the sympathetic and parasympathetic divisions of the ANS on the respiratory system.",
    [
     [
      "Increasing sympathetic tone to the lungs produces which immediate airway effect?",
      [
       "Reflex slowing of the respiratory rate",
       "Bronchoconstriction",
       "Thinning of airway secretions",
       "Increased mucus gland secretion",
       "Bronchodilation"
      ],
      4,
      "Sympathetic tone to the lungs does what to the airway? Sympathetic stimulation causes bronchodilation — the basis for using sympathetic stimulation to relieve an acute asthma attack. The catch (tested elsewhere) is that prolonged sympathetic tone also causes vasoconstriction and thickened secretions, which is why chronic hypersympathetic tone is harmful.  (A) Sympathetic tends to increase, not slow, respiratory drive. B: Bronchoconstriction is a parasympathetic (vagal) effect. C: Thinning secretions is parasympathetic; sympathetic thickens them over time. D: Increased/thinned secretion is parasympathetic.",
      "basic"
     ],
     [
      "A patient has thick, difficult-to-clear secretions. Increasing which autonomic input would best thin the secretions?",
      [
       "Sympathetic tone via Chapman reflex stimulation",
       "Sympathetic tone via T2-T7",
       "Sympathetic tone via the stellate ganglion",
       "Somatic input via the phrenic nerve",
       "Parasympathetic (vagal) tone"
      ],
      4,
      "Thick secretions — which autonomic input thins them? Parasympathetic (vagal) tone thins secretions, so increasing vagal tone (treating the OA/C1-C3 and cranial base where the vagus exits) helps a productive cough clear. Sympathetic tone thickens secretions over time.  (A) Chapman treatment decreases sympathetics but isn't the secretion-thinning mechanism; the vagus is. B: Sympathetic (T2-T7) thickens secretions over time. C: The stellate ganglion is sympathetic — wrong direction. D: The phrenic nerve is somatic motor to the diaphragm, not secretory.",
      "basic"
     ],
     [
      "The sympathetic innervation of the lungs arises from which spinal levels?",
      [
       "C3-C5",
       "T1-T4",
       "T5-T9",
       "T2-T7",
       "T10-L2"
      ],
      3,
      "Sympathetic levels for the lungs? Pulmonary sympathetics come from T2-T7 — the levels you target for rib-raising and paraspinal inhibition to modulate sympathetic tone in pulmonary disease. C3-C5 is the phrenic/diaphragm; it's a distractor that belongs to a different mechanism.  (A) C3-C5 is the phrenic nerve to the diaphragm, not sympathetic to the lungs. B: T1-T4 is the classic cardiac sympathetic range, not the full pulmonary range. C: T5-T9 drifts below the pulmonary range. E: T10-L2 is far below the pulmonary sympathetic levels.",
      "basic"
     ],
     [
      "To normalize parasympathetic (vagal) tone to the lungs, which regions are treated, and why?",
      [
       "The thoracolumbar junction, because the vagus originates there",
       "T2-T7, because the vagus synapses in the sympathetic chain",
       "The lower six ribs, because the vagus runs with the phrenic nerve",
       "The OA and C1-C3 / cranial base, because the vagus exits the skull near there",
       "The stellate ganglion, because it carries vagal fibers"
      ],
      3,
      "Where to treat to normalize vagal tone, and why? The vagus (CN X) exits the skull at the jugular foramen and passes in close relation to the OA, C1, C2, and C3 — so OA decompression and treating C2-C3 / the cranial base normalize vagal tone. This is why upper-cervical/cranial-base work is the parasympathetic lever in pulmonary OMT.  (A) The vagus originates in the medulla, not the thoracolumbar junction. B: T2-T7 is the sympathetic range, not vagal. C: The vagus does not run with the phrenic nerve to the lower ribs. E: The stellate ganglion is sympathetic.",
      "basic"
     ],
     [
      "What is the consistent effect of treating a Chapman point for a pulmonary problem, regardless of the patient's specific symptoms?",
      [
       "It increases sympathetic activity to the related viscera",
       "It decreases sympathetic activity to the related viscera",
       "It thins secretions by increasing vagal tone",
       "It directly bronchodilates the affected lung segment",
       "It only helps if the patient has a productive cough"
      ],
      1,
      "What does treating a Chapman point reliably do? Treating a Chapman point decreases sympathetic activity to the associated viscera — always, regardless of whether the cough is productive or dry. That makes Chapman treatment most useful in chronic disease, where breaking the hypersympathetic cycle is the goal.  (A) It decreases, not increases, sympathetic activity. C: Secretion-thinning is a vagal effect; the Chapman effect is on sympathetics. D: Chapman points act via autonomic modulation, not direct bronchodilation. E: The sympathetic-decrease happens regardless of cough type.",
      "basic"
     ],
     [
      "In a chronic pulmonary disease with prolonged hypersympathetic tone, what downstream vascular consequence worsens recovery?",
      [
       "Increased lymphatic flow that washes out immune cells",
       "Vasodilation with pooling and edema in the lung",
       "Vasoconstriction with decreased blood flow to the lung tissue",
       "Reflex bradycardia reducing pulmonary perfusion",
       "Loss of surfactant from parasympathetic overdrive"
      ],
      2,
      "Chronic hypersympathetic tone — vascular consequence? Sustained sympathetic tone causes vasoconstriction, cutting blood flow to the lung tissue — a self-reinforcing painful cycle where the chronic disease drives sympathetic tone, which reduces perfusion and impairs healing. Breaking that cycle (rib-raising, Chapman, paraspinal inhibition) is the osteopathic goal.  (A) Decreased (not increased) lymphatic flow is the problem in this cycle. B: Sympathetic tone constricts rather than dilates the vasculature. D: Sympathetic tone doesn't cause bradycardia. E: Surfactant loss is part of pneumonia pathogenesis, not parasympathetic overdrive.",
      "basic"
     ],
     [
      "During an acute asthma attack, which autonomic effect do you want to drive, and by what duration of rib-raising?",
      [
       "Sympathetic stimulation, with rib-raising for MORE than ~90 seconds",
       "Parasympathetic stimulation (secretion-thinning), with rib-raising for MORE than ~90 seconds",
       "Sympathetic stimulation (bronchodilation), with rib-raising for LESS than ~90 seconds",
       "Parasympathetic stimulation, with OA decompression only",
       "Sympathetic inhibition, with prolonged paraspinal inhibition"
      ],
      2,
      "Acute asthma — which autonomic effect + rib-raising duration? An acute attack is obstructive, so you want bronchodilation — drive the sympathetics. Rib-raising for a SHORT duration (less than ~90 s) stimulates sympathetics; the long version (>90 s) decreases them. This is the inverse of pneumonia, where you rib-raise >90 s to decrease sympathetics.  (A) Rib-raising >90 s decreases sympathetics — the opposite of what an acute attack needs. B: Bronchodilation (sympathetic), not parasympathetic, is the acute priority. D: OA decompression drives parasympathetics, not the bronchodilation you need acutely.  (E) You want to stimulate, not inhibit, sympathetics in an acute attack.",
      "basic"
     ]
    ]
   ],
   [
    "3",
    "Describe the physiological response to pulmonary infection.",
    [
     [
      "A pneumonia patient breathes rapidly and shallowly. Which reflex best explains the shallow component?",
      [
       "The Cushing reflex from raised intracranial pressure",
       "The carotid-body reflex slowing the diaphragm",
       "The Bainbridge reflex from atrial stretch",
       "The Hering-Breuer reflex — stretch afferents can't distinguish air- vs fluid-filled airways, limiting diaphragm excursion",
       "The baroreceptor reflex reducing tidal volume"
      ],
      3,
      "Pneumonia, rapid shallow breathing — which reflex (shallow part)? The Hering-Breuer reflex is triggered when airway stretch afferents sense 'filling' — and they can't tell air from fluid, so in pneumonia the fluid-filled lung trips the reflex, stops/limits diaphragm excursion, and produces shallow breathing. The carotid body then senses low O2 and drives the RATE up — giving the rapid-AND-shallow pattern.  (A) The Cushing reflex is an ICP phenomenon. B: The carotid body drives the rapid-RATE component, not the shallow component. C: The Bainbridge reflex is cardiac (atrial stretch → HR). E: Baroreceptors regulate blood pressure, not this breathing pattern.",
      "basic"
     ],
     [
      "In the rapid-shallow breathing of pneumonia, what drives the rapid-RATE component specifically?",
      [
       "Sympathetic stimulation of the bronchial smooth muscle",
       "The Hering-Breuer reflex increasing tidal volume",
       "Direct vagal stimulation of the SA node",
       "Phrenic nerve hyperexcitability from C3-C5 irritation",
       "The O2-responsive carotid body sensing hypoxia and raising respiratory rate"
      ],
      4,
      "Pneumonia rapid breathing — what drives the fast RATE? Once Hering-Breuer limits excursion (shallow), oxygenation drops; the carotid body is O2-responsive and senses the hypoxia, so it ramps the respiratory rate up to compensate. Two reflexes together give the classic rapid-and-shallow pattern: Hering-Breuer (shallow) + carotid body (rapid).  (A) Bronchial smooth-muscle tone isn't the rate driver. B: Hering-Breuer limits excursion (shallow), it doesn't raise tidal volume.  (C) Vagal SA-node effects are cardiac, not the respiratory-rate driver here. D: Phrenic irritation doesn't explain the compensatory rate increase.",
      "basic"
     ],
     [
      "The phrenic nerve supplies the diaphragm from which roots, and which MSK regions does diaphragmatic stress implicate?",
      [
       "C3-C4-C5; the lower six ribs and the thoracolumbar junction",
       "C5-C6-C7; the upper four ribs and the cervicothoracic junction",
       "T1-T4; the sternum and manubrium",
       "T2-T7; the mid-thoracic spine only",
       "L1-L3; the lumbosacral junction"
      ],
      0,
      "Phrenic roots + MSK regions stressed by the diaphragm? The phrenic nerve is C3-C4-C5 ('C3-4-5 keeps the diaphragm alive'). Because the diaphragm attaches low and is driven by the phrenic, diaphragmatic stress implicates the lower six ribs and the thoracolumbar junction — the MSK areas to treat. (C3-C5 cervical work also addresses hiccups/singultus.)  (B) The phrenic is C3-C5, not C5-C7. C: T1-T4 / sternum is the cardiac-region distractor. D: T2-T7 is the pulmonary sympathetic range, not the phrenic. E: L1-L3 is unrelated to the phrenic nerve.",
      "basic"
     ],
     [
      "In the pathogenesis of a chronic pulmonary infection, why do facilitated segments at T2-T7 become a self-perpetuating problem?",
      [
       "They increase parasympathetic tone, drying the lungs out",
       "Facilitated segments directly infect the spinal cord",
       "Visceral afferents facilitate the segment → sustained sympathetic tone → vasoconstriction → decreased lung perfusion → poorer healing",
       "They mechanically block the right lymphatic duct",
       "They raise surfactant production excessively"
      ],
      2,
      "Why are T2-T7 facilitated segments self-perpetuating in chronic infection? Inflamed lung sends visceral afferents that facilitate the T2-T7 cord segment; the facilitated segment sustains sympathetic output, which vasoconstricts and cuts lung perfusion, impairing healing and feeding more inflammation — the 'bad painful cycle.' OMT (rib-raising, paraspinal inhibition, Chapman) breaks it by decreasing sympathetic tone.  (A) The cycle involves increased sympathetic (not parasympathetic) tone. B: Facilitated segments are a neural-excitability phenomenon, not infection of the cord. D: Facilitated segments don't mechanically block the duct. E: Surfactant falls in pneumonia; it isn't raised by facilitation.",
      "basic"
     ]
    ]
   ],
   [
    "4",
    "Formulate basic treatment approaches for patients with selected pulmonary disorders.",
    [
     [
      "A board question asks: for lymphatic-directed treatment of a pneumonia patient, what is the FIRST thing you should do?",
      [
       "Begin thoracic lymphatic pump immediately",
       "Open the thoracic inlet",
       "Treat the Chapman points",
       "Perform rib-raising for greater than 90 seconds",
       "Dome the diaphragm"
      ],
      1,
      "Lymphatic treatment — what do you do FIRST? Eldemire flagged this as a Level 1 board trap: for any lymphatic treatment the FIRST step is always to open the thoracic inlet — you have to open the drainage outlet before pumping fluid toward it. The other options (rib-raising, Chapman, pump, doming) are real treatments but never the first step.  (A) Pumps come later (and not until afebrile); opening the inlet comes first. C: Chapman treatment is useful but not the first lymphatic step. D: Rib-raising is part of the regimen but not the first lymphatic step. E: Doming the diaphragm helps the pump but follows opening the inlet.",
      "basic"
     ],
     [
      "A newly admitted pneumonia patient has a temperature of 103°F. Which OMT is contraindicated right now?",
      [
       "Lymphatic pump techniques",
       "Myofascial release to the thoracic inlet",
       "Rib-raising",
       "Paraspinal inhibition",
       "Suboccipital release"
      ],
      0,
      "Febrile pneumonia patient — which OMT is contraindicated? Do NOT do lymphatic pump techniques while the patient is febrile — pumping while infection load is high risks driving cytokines and bacteria throughout the body before antibiotics have reduced the load. Wait until afebrile (the staged regimen adds pumps only at stage III, >24 h without fever). The gentler techniques (MFR to the inlet, light rib-raising, paraspinal inhibition) are fine in the febrile stage.  (B) MFR to the thoracic inlet is appropriate even in the early febrile stage. C: Light rib-raising is part of the early/febrile stage, not contraindicated. D: Paraspinal inhibition is used early and is fine. E: Suboccipital/cranial-base release is not the contraindicated technique.",
      "basic"
     ],
     [
      "How does rib-raising DURATION change its autonomic effect, and which duration is used for pneumonia?",
      [
       "Greater than ~90 seconds INCREASES sympathetics (used for pneumonia); shorter decreases them",
       "Greater than ~90 seconds DECREASES sympathetics (used for pneumonia); shorter stimulates them",
       "Duration has no autonomic effect; only hand placement matters",
       "Any duration decreases sympathetics equally",
       "Shorter than ~90 seconds is used for pneumonia to bronchodilate"
      ],
      1,
      "Rib-raising duration effect + which is used for pneumonia? Rib-raising is dose-dependent: >~90 seconds decreases sympathetic tone (what you want in pneumonia, a chronic-leaning hypersympathetic state), while a short burst stimulates sympathetics (used for acute asthma bronchodilation). Same technique, opposite effect by duration — a classic distinguish trap.  (A) Reversed — long duration decreases, not increases, sympathetics. C: Duration is exactly what changes the autonomic effect here. D: The effect flips with duration; it isn't uniform. E: Short rib-raising (bronchodilation) is for acute asthma, not pneumonia.",
      "basic"
     ],
     [
      "A pneumonia patient is newly admitted, febrile (102°F), with a mildly productive cough. Per the MOPSE-style staged regimen, which treatment set is appropriate NOW, and what must wait?",
      [
       "Now: MFR to the thoracic inlet, light rib-raising, paraspinal inhibition to ~C5. Wait: lymphatic pumps until afebrile",
       "Now: full lymphatic pumps and deep rib-raising. Wait: nothing, treat aggressively",
       "Now: HVLA to the mid-thoracic spine only. Wait: any soft-tissue work",
       "Now: thoracic pump plus doming. Wait: opening the thoracic inlet until stable",
       "Now: nothing — OMT is contraindicated in all febrile patients"
      ],
      0,
      "Febrile newly-admitted pneumonia — treat now vs wait? Integrate the staging with the contraindication: stage I (newly admitted, febrile) uses gentle work — MFR to the thoracic inlet, a little rib-raising, and paraspinal inhibition down to ~C5 — while pumps wait until the patient is afebrile (stage III, >24 h fever-free). Opening the inlet is always first and is not withheld; only the PUMP is staged out.  (B) Pumps are contraindicated while febrile — not appropriate now. C: HVLA-only with no soft tissue misrepresents the staged regimen. D: Opening the inlet is the FIRST step, never the thing you withhold. E: OMT is not contraindicated while febrile — only the pump techniques are.",
      "basic"
     ],
     [
      "After upper-abdominal (cholecystectomy) surgery, a patient is at risk for atelectasis. Comparing thoracic lymphatic pump (TLP) to incentive spirometry (IS), what did the research show?",
      [
       "TLP increased atelectasis by stressing the diaphragm",
       "TLP eliminated atelectasis entirely while IS did nothing",
       "IS was clearly superior to TLP on every endpoint",
       "Neither helped; only antibiotics changed outcomes",
       "Atelectasis rates were similar, but TLP gave better pulmonary function and earlier recovery/return toward pre-op FVC and FEV1"
      ],
      4,
      "Post-cholecystectomy: TLP vs IS — what did research show? The study found similar atelectasis rates between TLP and incentive spirometry, but the TLP group had better pulmonary function tests and earlier recovery — quicker return toward pre-op FVC and FEV1, faster comfort/discharge. The takeaway Eldemire drew: use BOTH (IS plus a lymphatic pump) for the best recovery. The prior student scrawled 'TLP 1st the IS' next to this slide.  (A) TLP improved (did not worsen) recovery. B: TLP did not eliminate atelectasis; rates were similar to IS. C: IS was not superior on every endpoint; TLP led on recovery/PFTs. D: Both interventions helped relative to no prophylaxis.",
      "basic"
     ],
     [
      "The MOPSE (Multicenter Osteopathic Pneumonia Study in the Elderly) showed OMT added to conventional care significantly reduced which set of outcomes?",
      [
       "Readmission rate and vaccination uptake only",
       "Only length of stay, with no effect on antibiotics or mortality",
       "Only the cost of care, with no clinical endpoints affected",
       "Length of stay, IV-antibiotic duration, respiratory failure (ventilator), and mortality",
       "Only subjective symptom scores, with no objective change p. 20"
      ],
      3,
      "MOPSE — which outcomes did OMT reduce? MOPSE (elderly, ~50+, multi-hospital) compared OMT + antibiotics vs antibiotics alone and found significant reductions in length of stay, duration of IV antibiotics, respiratory failure requiring a ventilator, and mortality — the four endpoints Eldemire highlighted. Shorter IV-antibiotic courses especially matter in the elderly (fewer adverse effects, less kidney injury).  (A) Readmission/vaccination were not the MOPSE endpoints. B: It affected more than length of stay — all four endpoints improved. C: Clinical endpoints, not just cost, were reduced. E: Objective endpoints (LOS, ventilator, mortality) improved, not just symptoms. p. 21",
      "basic"
     ]
    ]
   ]
  ]
 ],
 [
  8,
  "The Osteopathic Approach to the Cardiac Patient",
  [
   [
    "2",
    "Explain the effects of the parasympathetic nervous system on the cardiac system.",
    [
     [
      "Parasympathetic innervation of the heart travels via which nerve, and increased tone does what?",
      [
       "The vagus nerve; it increases contractility",
       "The phrenic nerve; it increases heart rate",
       "The vagus nerve; it decreases heart rate and contractility",
       "The greater splanchnic nerve; it decreases heart rate",
       "The stellate ganglion; it decreases heart rate"
      ],
      2,
      "Cardiac parasympathetic nerve + effect of increased tone? Cardiac parasympathetics travel via the vagus nerve; increased vagal tone decreases heart rate (and contractility). The right vagus innervates the SA node, the left vagus the AV node — the basis for the parasympathetic laterality rules.  (A) Vagal tone decreases, not increases, contractility. B: The phrenic nerve is somatic to the diaphragm, not cardiac autonomic.  (D) The splanchnic nerves are sympathetic to the abdomen. E: The stellate ganglion is sympathetic; it would raise rate.",
      "basic"
     ],
     [
      "Hyperparasympathetic activity on the RIGHT side of the heart predisposes to which disturbance?",
      [
       "Sinus bradyarrhythmias",
       "AV blocks",
       "Supraventricular tachycardias",
       "Ventricular fibrillation",
       "Coronary vasospasm"
      ],
      0,
      "Right-sided hyperparasympathetic activity → which disturbance? The right vagus innervates the SA node, so right hyperparasympathetic activity produces sinus bradyarrhythmias. The left vagus innervates the AV node, so left hyperparasympathetic activity produces AV blocks. This mirrors the sympathetic laterality (right=SA, left=AV) on the slow side.  (B) AV blocks are the LEFT parasympathetic pattern. C: SVTs are the RIGHT sympathetic pattern. D: VF is the LEFT sympathetic pattern. E: Vasospasm is a sympathetic effect.",
      "basic"
     ],
     [
      "Hyperparasympathetic activity on the LEFT side of the heart predisposes to which disturbance?",
      [
       "Ectopic foci and VF",
       "Sinus bradyarrhythmias",
       "Supraventricular tachycardias",
       "AV blocks",
       "Sinus tachycardia"
      ],
      3,
      "Left-sided hyperparasympathetic activity → which disturbance? The left vagus innervates the AV node, so left hyperparasympathetic activity produces AV blocks. Right vagal excess (SA node) gives sinus bradyarrhythmias. Memory anchor: right = SA (rate problems), left = AV (conduction blocks) — same for both autonomic divisions.  (A) Ectopic foci/VF is the LEFT sympathetic pattern. B: Sinus bradyarrhythmias are the RIGHT parasympathetic pattern. C: SVTs are the RIGHT sympathetic pattern. E: Parasympathetic tone slows, it does not cause tachycardia.",
      "basic"
     ],
     [
      "A study cited in the handout found that cervical myofascial release shifted the sympathovagal balance in which direction?",
      [
       "From the parasympathetic toward the sympathetic nervous system",
       "From the sympathetic toward the parasympathetic nervous system",
       "No measurable change in balance",
       "Toward sympathetic dominance only in the elderly",
       "Toward complete vagal withdrawal"
      ],
      1,
      "Cervical MFR shifted sympathovagal balance which way? The cited study found cervical myofascial release shifts the sympathovagal balance from the sympathetic toward the parasympathetic nervous system — evidence that treating the cervical region (where the vagus runs) can raise vagal tone. This supports cranial-base/upper-cervical work to normalize vagal tone in cardiac patients.  (A) The shift was toward parasympathetic, not sympathetic. C: A measurable shift was found. D: The shift was parasympathetic and not limited to the elderly. E: It raised vagal tone, not eliminated it.",
      "basic"
     ]
    ]
   ],
   [
    "1",
    "Explain the effects of the sympathetic nervous system on the cardiac system.",
    [
     [
      "The sympathetic innervation of the heart arises from which spinal levels?",
      [
       "C2-C5",
       "T1-T4",
       "T5-T9",
       "T1-T6",
       "T10-L2"
      ],
      3,
      "Cardiac sympathetic levels? Cardiac sympathetics arise from T1-T6, with preganglionic fibers running up to the cervical chain ganglia. T10-L2 is the level for the kidneys/adrenals and peripheral vessels (a within-lecture distractor); C2/cranial base is the vagal/parasympathetic side.  (A) C2-C5 is the vagal/cranial-base (parasympathetic) region. B: T1-T4 is a common simplification but the handout specifies T1-T6. C: T5-T9 drifts below the cardiac range. E: T10-L2 is the renal/adrenal and peripheral-vessel range, not cardiac.",
      "basic"
     ],
     [
      "Hypersympathetic activity on the RIGHT side of the heart predisposes to which rhythm disturbance?",
      [
       "Ventricular ectopic foci and ventricular fibrillation",
       "Supraventricular tachycardias (SVTs)",
       "Sinus bradyarrhythmias",
       "AV blocks",
       "First-degree heart block only"
      ],
      1,
      "Right-sided hypersympathetic activity → which rhythm? Right sympathetics feed the SA node, so right hypersympathetic activity drives SUPRAVENTRICULAR tachycardias (SVTs). Left sympathetics feed the AV node/ventricle, so left hypersympathetic activity gives ectopic foci and VF. (Parasympathetic excess gives the brady side: right → sinus bradyarrhythmias, left → AV blocks.)  (A) Ectopic foci/VF is the LEFT sympathetic pattern. C: Sinus bradyarrhythmias are the RIGHT parasympathetic pattern. D: AV blocks are the LEFT parasympathetic pattern. E: Heart block is a parasympathetic (left) pattern, not right sympathetic.",
      "basic"
     ],
     [
      "Hypersympathetic activity on the LEFT side of the heart predisposes to which rhythm disturbance?",
      [
       "Ectopic foci and ventricular fibrillation",
       "Supraventricular tachycardias",
       "Sinus bradyarrhythmias",
       "AV blocks",
       "Sinus arrest"
      ],
      0,
      "Left-sided hypersympathetic activity → which rhythm? Left sympathetics feed the AV node and ventricle, so left hypersympathetic activity produces ventricular ectopic foci and VF. Right sympathetics (SA node) give SVTs. This left/right split is the testable laterality core.  (B) SVTs are the RIGHT sympathetic pattern. C: Sinus bradyarrhythmias are the RIGHT parasympathetic pattern. D: AV blocks are the LEFT parasympathetic pattern. E: Sinus arrest is not the listed left-sympathetic pattern.",
      "basic"
     ],
     [
      "Increased sympathetic tone to the heart produces which set of effects?",
      [
       "Increased heart rate with decreased contractility",
       "Decreased heart rate and contractility",
       "Decreased cardiac output with increased contractility",
       "No change in rate but increased coronary flow",
       "Increased heart rate, contractility, and cardiac output"
      ],
      4,
      "Increased cardiac sympathetic tone → effects? Increased sympathetic tone raises heart rate, contractility, and cardiac output. The parasympathetic (vagal) counterpart decreases heart rate and contractility. Prolonged sympathetic tone can also produce coronary vasospasm.  (A) Contractility increases, not decreases. B: Decreased rate/contractility is the parasympathetic effect. C: Cardiac output rises, not falls, with sympathetic tone. D: Rate increases under sympathetic tone.",
      "basic"
     ],
     [
      "A patient with sustained high sympathetic tone develops angina without fixed obstruction. Which sympathetic effect best explains this?",
      [
       "AV nodal block from vagal surge",
       "Coronary vasospasm from increased sympathetic tone",
       "Reduced contractility lowering demand",
       "Lymphatic congestion of the myocardium",
       "Increased collateral circulation"
      ],
      1,
      "High sympathetic tone, angina without obstruction — mechanism? Increased sympathetic tone can drive coronary vasospasm, reducing myocardial perfusion and causing ischemia/angina even without a fixed stenosis. This is part of why calming upper-thoracic sympathetic hyperactivity is a cardiac OMT goal.  (A) AV block is a parasympathetic effect, not vasospasm. C: Sympathetic tone increases contractility/demand, not decreases it. D: Lymphatic congestion is a separate (LO 3) mechanism. E: Increased collateral flow would relieve, not cause, ischemia.",
      "basic"
     ],
     [
      "In essential hypertension, prolonged sympathetic stimulation to the kidneys raises blood pressure primarily by what mechanism?",
      [
       "Direct vagal slowing of the heart",
       "Functional retention of water and salt",
       "Increased lymphatic drainage of the kidney",
       "Coronary vasospasm",
       "AV nodal conduction block"
      ],
      1,
      "HTN: prolonged renal sympathetic tone raises BP how? Prolonged sympathetic stimulation to the kidneys causes functional retention of water and salt, elevating BP — the rationale for sympathetic inhibition at the renal levels (T10-L2) and posterior Chapman adrenal points in HTN treatment. Patients with essential HTN also show vascular/cardiac hyperreactivity to autonomic stimuli.  (A) Vagal slowing is parasympathetic and lowers rate, not a HTN driver here. C: Increased drainage would not raise BP. D: Vasospasm is a coronary, not renal-BP, mechanism. E: AV block is unrelated to the renal BP mechanism.",
      "basic"
     ]
    ]
   ],
   [
    "3",
    "Explain the effects of the lymphatic system on the cardiac system.",
    [
     [
      "Impaired cardiac lymphatic drainage is described as resulting in which set of consequences?",
      [
       "Lower blood pressure from salt loss",
       "Increased collateral circulation and fewer arrhythmias",
       "Coronary vasospasm from vagal surge",
       "AV block from sympathetic excess",
       "Reduced collateral circulation, increased ischemia/infection risk, and arrhythmias from cardiac-tissue congestion"
      ],
      4,
      "Impaired cardiac lymphatic drainage → consequences? Impaired lymphatic drainage reduces collateral circulation, raises morbidity/mortality from ischemia and infection, and congests cardiac tissue — which can produce arrhythmias. Lymphatic impairment is also linked to atherosclerosis, HTN, and CHF edema.  (A) Lymphatic impairment doesn't lower BP via salt loss. B: Impairment reduces collateral flow and increases arrhythmias. C: Vasospasm is a sympathetic mechanism, not lymphatic. D: AV block is autonomic, not a lymphatic consequence.",
      "basic"
     ],
     [
      "Beyond arrhythmias, impaired lymphatic function in the handout is linked to which conditions?",
      [
       "Asthma and COPD",
       "Only localized leg edema",
       "Hyperthyroidism and anemia",
       "Pericarditis and endocarditis exclusively",
       "Atherosclerosis, hypertension, and the pulmonary edema/ascites of CHF"
      ],
      4,
      "Impaired lymphatics linked to which conditions? The handout links impaired lymphatic function to the pathogenesis of atherosclerosis, the development of HTN, and the pulmonary edema/ascites/hepatomegaly of CHF, plus electrolyte imbalances that worsen CHF — a systemic role beyond simple edema.  (A) Asthma/COPD are pulmonary, from the other lecture. B: The links are systemic, not just leg edema. C: Hyperthyroidism/anemia are not the listed links. D: Peri-/endocarditis are not the listed lymphatic links.",
      "basic"
     ]
    ]
   ],
   [
    "4",
    "Formulate basic treatment approaches for patients with common cardiac diseases.",
    [
     [
      "An ANTERIOR wall myocardial infarction is classically associated with which autonomic pattern and OMT target?",
      [
       "Sympathicotonia at T10-L2 — treat the renal levels",
       "Vagal hyperactivity at C2/cranial base — raise sympathetic tone",
       "Sympathicotonia at T1-T6 (especially T2-T3 on the left) — calm the upper thoracic sympathetics",
       "Parasympathetic excess at the sacrum",
       "No autonomic change — treat the ribs only"
      ],
      2,
      "Anterior MI — autonomic pattern + OMT target? Anterior (and most AMI) infarctions show sympathicotonia in the upper thoracics T1-T6, particularly T2-T3 on the left — so treatment calms that upper-thoracic sympathetic hyperactivity. Contrast: inferior wall MI shows vagal hyperactivity (treat C2/cranial base). Distinguishing the two patterns is the classic board point.  (A) T10-L2 is the renal/adrenal range, not the MI sympathetic target. B: Vagal hyperactivity at C2/cranial base is the INFERIOR-wall pattern. D: Sacral parasympathetics are not the MI pattern. E: There is a clear autonomic change to address.",
      "basic"
     ],
     [
      "An INFERIOR wall myocardial infarction is classically associated with which autonomic pattern?",
      [
       "Loss of all autonomic tone",
       "Sympathicotonia at T2-T3 left — treat the upper thoracics",
       "Sympathetic excess at T10-L2",
       "Vagal hyperactivity — treat C2 and the cranial base",
       "Pure lymphatic congestion with no autonomic change"
      ],
      3,
      "Inferior MI — autonomic pattern? Inferior wall MI is associated with vagal (parasympathetic) hyperactivity — treat C2 and the cranial base. Anterior MI is the sympathicotonia pattern (upper thoracics). The anterior=sympathetic / inferior=vagal split is the testable distinction.  (A) There is increased vagal tone, not loss of tone. B: Upper-thoracic sympathicotonia is the ANTERIOR pattern. C: T10-L2 is renal/adrenal, not the MI vagal pattern. E: There is a defined autonomic (vagal) change.",
      "basic"
     ],
     [
      "When is osteopathic manipulative treatment appropriate for a patient with an acute myocardial infarction?",
      [
       "Only after emergent medical treatment and once the patient is stabilized",
       "Immediately on arrival, before any medical treatment",
       "Instead of emergent medical treatment if OMT is available",
       "Never — OMT is contraindicated in all cardiac patients",
       "Only during active chest pain, to abort the infarct"
      ],
      0,
      "When is OMT appropriate in an acute MI? All cardiac OMT is done AFTER emergent medical treatment and once the patient is stabilized — OMT is an adjunct, never a substitute for or a delay to emergent care. This 'stabilize first' rule is the single most important safety point in the cardiac OMT material.  (B) OMT never precedes or delays emergent treatment. C: OMT augments, never replaces, emergent care. D: OMT is not contraindicated — it's used adjunctively after stabilization. E: OMT is not an infarct-aborting therapy during acute pain.",
      "basic"
     ],
     [
      "Once an MI patient is stabilized, the OMT aimed at the upper thoracics targets what, and via which approach if CPR was performed?",
      [
       "Calming sympathetic hyperactivity (lower ectopic-focus/VF risk); treat ribs and sternum with INDIRECT techniques after CPR",
       "Increasing sympathetic tone; treat ribs with HVLA after CPR",
       "Raising heart rate; direct thrust to the sternum",
       "Blocking the AV node; aggressive soft tissue",
       "Increasing coronary vasospasm to test reserve"
      ],
      0,
      "Stabilized MI: upper-thoracic OMT target + post-CPR approach? MI treatment calms sympathetic hyperactivity in the upper thoracics — lowering the incidence of ectopic foci and VF and removing factors that discourage collateral circulation. If CPR was performed, treat the ribs and sternum with INDIRECT (gentle) techniques, given likely trauma. Generalized paraspinal inhibition and thoracic-inlet work (indirect) round it out.  (B) The goal is to decrease, not increase, sympathetic tone. C: Direct sternal thrust post-CPR risks harm; indirect is used. D: AV blockade is not the treatment goal. E: You aim to reduce vasospasm risk, not provoke it.",
      "basic"
     ],
     [
      "Treating the posterior Chapman reflex points for the adrenal glands in a hypertensive patient is described as doing what?",
      [
       "Increasing total peripheral resistance",
       "Raising serum aldosterone to retain salt",
       "Lowering blood pressure and decreasing serum aldosterone",
       "Blocking the AV node",
       "Stimulating coronary vasospasm"
      ],
      2,
      "Posterior Chapman adrenal points in HTN → effect? Treating the posterior Chapman reflex points for the adrenals has been shown to lower BP and decrease serum aldosterone. HTN OMT also works by decreasing stress, decreasing TPR via generalized sympathetic inhibition, and decreasing renal sympathetic contributions at T10-L2 — and it can reduce medication requirements.  (A) OMT decreases TPR; it doesn't increase it. B: Aldosterone decreases, which lowers (not raises) salt retention. D: AV block is unrelated to the adrenal Chapman effect. E: It does not stimulate vasospasm.",
      "basic"
     ],
     [
      "A patient has recurrent SVT and a tender trigger point in the RIGHT pectoralis major. Integrating the somatovisceral and structural findings, what is the most consistent osteopathic interpretation and approach?",
      [
       "Ignore the structural finding; arrhythmias are never structural",
       "The TrP is incidental; treat only with AV-nodal blockers",
       "Raise sympathetic tone at T1-T6 to override the arrhythmia",
       "The finding indicates left-sided vagal excess; treat the sacrum",
       "A right pectoralis-major TrP can drive SVT; address segmental facilitation of sympathetic input plus the trigger point (and normalize vagal tone via cranial base/upper cervicals)"
      ],
      4,
      "Recurrent SVT + right pectoralis TrP — interpretation/approach? A trigger point in the right pectoralis major is listed as a driver of SVT, corroborated on the arrhythmias slide. The arrhythmia approach is to decrease segmental facilitation modulating sympathetic input, treat the cranial base/upper cervicals to normalize vagal tone, and treat postural factors including that pectoralis TrP — integrating the structural and autonomic pictures.  (A) Arrhythmias here are explicitly linked to structural/postural factors. B: The TrP is specifically implicated, not incidental. C: You calm, not raise, sympathetic input for SVT. D: Right-sided SVT is a sympathetic (SA-node) pattern, not left vagal.",
      "basic"
     ],
     [
      "In congestive heart failure, lymphatic return may be challenged 3-40x. Integrating lymphatic and autonomic goals, which combined approach fits the handout?",
      [
       "Treat with vagal blockade to raise output",
       "Maximize sympathetic tone at T1-T6 and avoid all lymphatic techniques",
       "Use only renal sympathetic inhibition at T10-L2",
       "Address sympathetics at T1-T6, optimize respiratory function to improve venous/lymphatic return, and use lymphatic pump/effleurage",
       "Restrict all fluid mobilization to avoid overload"
      ],
      3,
      "CHF: combined lymphatic + autonomic approach? CHF challenges lymphatic return 3-40x, so the approach addresses sympathetics at T1-T6, optimizes respiratory function to improve venous and lymphatic return, and uses lymphatic pump techniques and effleurage. It integrates the autonomic lever (calming T1-T6) with the lymphatic lever (improving return) — the same structure/autonomics/lymphatics framing as the pulmonary lecture.  (A) Vagal blockade is not the CHF approach. B: You calm sympathetics and DO use lymphatic techniques in CHF. C: Renal-only inhibition ignores the cardiac and lymphatic goals. E: The goal is to improve lymphatic return, not restrict mobilization.",
      "basic"
     ],
     [
      "By approximately how much can lymphatic return be challenged in congestive heart failure, per the handout?",
      [
       "10 to 12 times normal",
       "2 to 3 times normal",
       "3 to 40 times normal",
       "50 to 100 times normal",
       "It is unchanged in CHF p. 28"
      ],
      2,
      "CHF lymphatic-return challenge magnitude? In CHF, lymphatic return can be challenged 3 to 40 times normal — the magnitude that motivates addressing lymphatic return (pump techniques, effleurage) alongside calming T1-T6 sympathetics and optimizing respiration.  (A) 10-12x is not the cited range. B: 2-3x understates the handout figure. D: 50-100x overstates it. E: Lymphatic return is substantially challenged in CHF. p. 29",
      "basic"
     ]
    ]
   ]
  ]
 ],
 [
  9,
  "Cumulative Review — OPP I / OPP II",
  [
   [
    "CU.1",
    "Map viscerosomatic facilitation: organ-to-cord-level chart and splanchnic relays.",
    [
     [
      "A patient has a viscerosomatic reflex producing paraspinal tissue texture change at T5–T9. Which organ system is the most likely source?",
      [
       "Hindgut structures (distal 1/3 transverse colon, descending colon, rectum)",
       "Midgut structures (distal duodenum through proximal 2/3 transverse colon)",
       "Foregut structures (stomach, liver, gallbladder, proximal duodenum)",
       "The heart",
       "The kidneys"
      ],
      2,
      "A patient has a viscerosomatic reflex producing paraspinal tissue texture change at T5–T9. Which… Foregut viscera (stomach, liver, gallbladder, spleen, pancreas, proximal duodenum) map to T5–T9 via the greater splanchnic nerve and celiac ganglion. This is the upper-GI band on the \"KNOW CHART.\"  (A) Hindgut maps to T12–L2 (least splanchnic/IMA). B: Midgut maps to T10–T11 (lesser splanchnic/SMA), not T5–T9. D: Heart is T1–T5, ending where the foregut band begins. E: Kidneys are T10–T11, well below the foregut band.",
      "basic"
     ],
     [
      "Parasympathetic innervation to the descending colon and pelvic organs is supplied by which pathway?",
      [
       "The least splanchnic nerve (T12)",
       "The vagus nerve",
       "The greater splanchnic nerve (T5–T9)",
       "Pelvic splanchnic nerves (S2–S4)",
       "The lumbar sympathetic chain (L1–L2)"
      ],
      3,
      "Parasympathetic innervation to the descending colon and pelvic organs is supplied by which pathway? Pelvic splanchnics (S2–S4) carry parasympathetics to the hindgut and pelvic viscera. The vagus stops at the level of the splenic flexure (the foregut/midgut), so distal GI and pelvic organs depend on the sacral parasympathetics.  (A) The least splanchnic is sympathetic to the kidney/upper ureter region. B: The vagus supplies parasympathetics down to ~the proximal 2/3 of the transverse colon only. C: The greater splanchnic is sympathetic, not parasympathetic, and serves the foregut.  (E) The lumbar chain is sympathetic, not parasympathetic.",
      "basic"
     ]
    ]
   ],
   [
    "CU.4",
    "Diagnose sacral torsions and unilateral flexions/extensions from the test cluster.",
    [
     [
      "A sacrum has a deep sulcus on the right, a posterior/inferior ILA on the left, a NEGATIVE seated flexion test on the left, and a negative lumbar spring test. What is the diagnosis?",
      [
       "Left-on-left forward sacral torsion",
       "Right-on-right forward sacral torsion",
       "Left-on-right backward sacral torsion",
       "Right unilateral sacral flexion",
       "Bilateral sacral flexion"
      ],
      0,
      "A sacrum has a deep sulcus on the right, a posterior/inferior ILA on the… Seated flexion is positive on the side OPPOSITE the axis, so a left axis means a positive seated flexion on the right — here it is negative on the left, consistent with a left axis. Deep right sulcus + negative lumbar spring = a forward torsion on the left axis: L-on-L.  (B) R-on-R would give a deep left sulcus and a right-axis pattern. C: A backward torsion gives a POSITIVE lumbar spring test, not negative. D: A unilateral flexion has ILAs >1 thumb apart and is not described by an oblique axis. E: Bilateral flexion gives bilateral deep sulci and bilateral posterior ILAs.",
      "basic"
     ],
     [
      "On exam: bilateral deep sacral sulci, bilateral posterior ILAs, and a lumbar spring test that meets bone (no give). The sphinx test shows no change. Which diagnosis fits, and what is the sacrum’s position analogous to?",
      [
       "Left-on-left forward torsion — base anterior on the left",
       "Bilateral sacral extension — analogous to inhalation",
       "Bilateral sacral flexion — analogous to exhalation (base anterior, apex posterior)",
       "A superior sacral shear",
       "A unilateral sacral extension on the right"
      ],
      2,
      "On exam: bilateral deep sacral sulci, bilateral posterior ILAs, and a lumbar spring test… Bilateral deep sulci + bilateral posterior ILAs = bilateral sacral flexion, which is held analogous to exhalation (base anterior, apex posterior). The lumbar spring is \"actually bilaterally positive\" here because the base is already maximally anterior and cannot spring further.  (A) A torsion is a single-oblique-axis asymmetric finding, not bilateral. B: Bilateral extension gives bilateral SHALLOW sulci and anterior ILAs. D: A shear moves all landmarks one direction in a coronal plane, not this symmetric sulcus/ILA pattern. E: A unilateral finding has ILAs >1 thumb apart, not symmetric bilateral changes.",
      "basic"
     ],
     [
      "Two thumb-widths separate the ILAs in the caudal/cephalic plane, and the seated flexion test is positive on the right. The sphinx (backward-bending) test shows INCREASED asymmetry. Which is most likely?",
      [
       "A left unilateral sacral extension",
       "A left-on-left forward torsion",
       "A right unilateral sacral flexion",
       "A bilateral sacral extension",
       "A right-on-right forward torsion"
      ],
      0,
      "Two thumb-widths separate the ILAs in the caudal/cephalic plane, and the seated flexion test… ILAs >1 thumb apart points to a UNILATERAL problem, not a torsion. Seated flexion positive on the right means the axis is on the left side — a left unilateral dysfunction. Increased asymmetry on backward bending indicates an extension (the \"E ILA elevates\" side cannot follow into extension).  (B) A torsion would have ILAs LESS than one thumb apart. C: Seated flexion positive on the right localizes the left side, not the right. D: A bilateral finding would not give a one-sided positive seated flexion. E: A torsion is excluded by the >1-thumb ILA separation.",
      "basic"
     ]
    ]
   ],
   [
    "CU.5",
    "Apply Fryette's principles to lumbar somatic dysfunction and SD naming.",
    [
     [
      "A single lumbar vertebra is dysfunctional and the dysfunction worsens in neutral but improves with either flexion or extension. By Fryette’s principles, sidebending and rotation are:",
      [
       "Determined only by the facet orientation, not Fryette",
       "In opposite directions (Type I)",
       "Uncoupled and unpredictable",
       "Always toward the side of the deep sulcus",
       "In the same direction (Type II)"
      ],
      4,
      "A single lumbar vertebra is dysfunctional and the dysfunction worsens in neutral but improves… Type II dysfunction is a single segment that worsens in neutral and gets better in flexion OR extension; its sidebending and rotation are coupled to the SAME side. Type I (neutral, group) couples them to opposite sides.  (A) Facet orientation guides motion but Fryette describes the coupling here. B: Opposite directions is Type I (neutral, group, improves in neutral). C: Fryette explicitly predicts the coupling; it is not unpredictable. D: The deep-sulcus rule is sacral, not a Fryette lumbar coupling rule.",
      "basic"
     ],
     [
      "An exam option reads \"L4 sidebent left, rotated right, in extension.\" Using the quick board-elimination rule, why can this answer be discarded?",
      [
       "A neutral dysfunction must have sidebending and rotation in the same direction",
       "A Type II (flexion/extension) dysfunction must have sidebending and rotation in the SAME direction",
       "Lumbar segments cannot rotate to the right",
       "Extension dysfunctions cannot be named at a single segment",
       "L4 can only be involved in group curves"
      ],
      1,
      "An exam option reads \"L4 sidebent left, rotated right, in extension.\" Using the quick… Because the option specifies extension (a non-neutral state), it must be Type II, and Type II requires sidebending and rotation in the SAME direction. \"Sidebent left, rotated right\" is opposite-direction, so it is internally contradictory and can be eliminated.  (A) Neutral dysfunctions have OPPOSITE directions, and this option is not neutral anyway. C: Lumbar segments can rotate either direction. D: Single-segment extension dysfunctions are nameable. E: L4 can be a single-segment Type II dysfunction.",
      "basic"
     ],
     [
      "A somatic dysfunction is found where the segment moves freely into flexion but is restricted in extension. Where does the dysfunction \"live,\" and how is it named?",
      [
       "It lives in flexion (named for the position of ease / freer motion)",
       "It lives in extension (named for the restricted motion)",
       "It lives in neutral by default",
       "It cannot be named without imaging",
       "It lives in rotation only"
      ],
      0,
      "A somatic dysfunction is found where the segment moves freely into flexion but is… Somatic dysfunction is named for the direction of EASE / freer motion. A segment that moves freely into flexion and is restricted in extension is a flexed dysfunction — it \"lives\" in flexion.  (B) Naming is by the freer motion, not the restricted barrier. C: A segment with a clear flexion ease is not a neutral dysfunction.  (D) Somatic dysfunction is a palpatory/motion diagnosis, not an imaging one. E: The described finding is a flexion/extension dysfunction, not pure rotation.",
      "basic"
     ]
    ]
   ],
   [
    "CU.2",
    "Diagnose innominate (pelvic) dysfunction: rotations, shears, flares + ME treatment.",
    [
     [
      "During a standing flexion test, the right PSIS travels farther superiorly than the left. What does this indicate?",
      [
       "A right-sided innominate somatic dysfunction",
       "A left-sided innominate somatic dysfunction",
       "A bilateral sacral shear",
       "A normal, symmetric pelvis",
       "A right inferior innominate shear specifically"
      ],
      0,
      "During a standing flexion test, the right PSIS travels farther superiorly than the left.… The side whose PSIS moves MORE is the dysfunctional side, because the SI joint locks sooner and the ilium is dragged farther by the moving sacrum. PSIS-moves-more = side of dysfunction.  (B) The non-moving (or less-moving) side is the normal side. C: A standing flexion test localizes an iliosacral side, not a bilateral shear. D: Asymmetric PSIS motion is by definition not normal. E: The test localizes the side but does not by itself name the dysfunction as an inferior shear.",
      "basic"
     ],
     [
      "On a supine exam the right ASIS is more inferior and the right PSIS is more superior than the left. Which innominate dysfunction is present on the right?",
      [
       "Superior innominate shear",
       "Posterior innominate rotation",
       "Anterior innominate rotation",
       "Inflared innominate",
       "Outflared innominate"
      ],
      2,
      "On a supine exam the right ASIS is more inferior and the right PSIS… Anterior rotation of the innominate carries the ASIS inferiorly and the PSIS superiorly on the affected side (the bone rotates forward like a wheel). The reciprocal ASIS-down/PSIS-up pattern is the signature.  (A) A superior shear moves ALL landmarks (ASIS and PSIS) cephalad together, not in opposite directions. B: Posterior rotation is the reverse: ASIS superior, PSIS inferior. D: A flare is a medial/lateral change measured from the midline, not an up/down rotation. E: An outflare is a lateral ASIS change, not an anteroposterior rotation.",
      "basic"
     ],
     [
      "You diagnose a right anterior innominate rotation and choose a muscle energy technique. Which muscle group should the patient activate against your resistance?",
      [
       "Hip flexors (quadriceps and psoas)",
       "Hip extensors (gluteus maximus and hamstrings)",
       "Hip adductors",
       "Hip abductors",
       "The piriformis"
      ],
      1,
      "You diagnose a right anterior innominate rotation and choose a muscle energy technique. Which… To correct an anterior innominate you position toward the barrier (posterior rotation) and have the patient contract the hip extensors — glut max and hamstrings — which posteriorly rotate the innominate. The deck circled this as a TQ.  (A) Hip flexors are used to treat a POSTERIOR rotation, not anterior. C: Adductors treat an inflare. D: Abductors treat an outflare. E: The piriformis is not the lever used for innominate rotation ME.",
      "basic"
     ],
     [
      "A patient develops bilateral outflared innominates after pregnancy. For the muscle energy correction, which muscles does the patient contract?",
      [
       "Hip extensors",
       "Hip adductors",
       "Hip flexors",
       "Hip abductors",
       "Hip external rotators"
      ],
      3,
      "A patient develops bilateral outflared innominates after pregnancy. For the muscle energy correction, which… Outflared innominates are corrected by having the patient contract the hip ABDUCTORS against resistance after positioning into anterior rotation toward the barrier. Pregnancy classically produces bilateral outflares.  (A) Hip extensors treat anterior rotation. B: Adductors correct an INFLARE, the opposite flare. C: Hip flexors treat posterior rotation. E: External rotators are not the flare-correction lever.",
      "basic"
     ]
    ]
   ],
   [
    "CU.3",
    "Describe sacral anatomy, axes, and respiratory motion of the sacrum.",
    [
     [
      "Which transverse sacral axis is the respiratory axis, around which the sacrum moves during the cranial/respiratory cycle?",
      [
       "The middle transverse axis (at S2)",
       "The superior transverse axis (at S1)",
       "The inferior transverse axis",
       "The right oblique axis",
       "The vertical axis"
      ],
      1,
      "Which transverse sacral axis is the respiratory axis, around which the sacrum moves during… The superior transverse axis at S1 is the respiratory axis and is synchronous with the cranial mechanism (sphenobasilar flexion/extension). The middle transverse axis (S2) is the postural axis.  (A) The middle transverse axis at S2 governs postural flexion/extension, not respiration. C: The inferior transverse axis is for iliosacral motion during gait. D: Oblique axes are for torsions, not respiratory motion. E: The vertical axis governs rotation of the sacrum.",
      "basic"
     ],
     [
      "During inhalation, what happens to the sacral base?",
      [
       "The base moves anterior only during exhalation of a torsion",
       "The base moves anterior (nutation)",
       "The apex moves posterior",
       "The sacrum does not move with respiration",
       "The base moves posterior (counternutation) as the diaphragm descends"
      ],
      4,
      "During inhalation, what happens to the sacral base? On inhalation the diaphragm descends and the sacral base moves posteriorly (the apex moves anterior); on exhalation the base moves anterior. This is the respiratory motion the prior student annotated directly on the slide.  (A) This conflates respiratory motion with torsion mechanics. B: Anterior base movement is the EXHALATION phase. C: The apex moves anterior on inhalation, not posterior. D: The sacrum does move with respiration around the superior transverse axis.",
      "basic"
     ]
    ]
   ],
   [
    "CU.7",
    "Recognize psoas syndrome: anatomy, staged progression, and the radiculopathy mimic.",
    [
     [
      "A 45-year-old man leans forward and slightly to the left, has lost his lumbar lordosis, and has a positive Thomas test. He reports low back pain that radiates to the RIGHT knee but no further. A straight-leg raise is unremarkable and there is no dermatomal sensory loss. What is the diagnosis and the key lesion?",
      [
       "Psoas syndrome; key lesion is a flexed L4–L5",
       "Lumbar radiculopathy; key lesion is an L5–S1 disc",
       "Piriformis syndrome; key lesion is the sacrum",
       "Psoas syndrome; key lesion is a flexed L1/L2",
       "Sacral torsion; key lesion is the right oblique axis"
      ],
      3,
      "A 45-year-old man leans forward and slightly to the left, has lost his lumbar… Forward/side-bent posture, lost lordosis, positive Thomas test, and pain to the contralateral knee (not following a nerve distribution to the foot) is psoas syndrome. The key/maintaining lesion is the flexed upper lumbar segment, classically L1/L2.  (A) The psoas key lesion is the UPPER lumbar (L1/L2), not L4–L5. B: Radiculopathy follows a dermatome to the foot and would show SLR or sensory changes; here there are none. C: Piriformis pain is buttock-centered and the key lesion would be sacral, not the upper lumbar flexed segment. E: A pure sacral torsion would not produce the forward-leaning psoas posture and Thomas-test finding.",
      "basic"
     ],
     [
      "How do you best distinguish psoas syndrome from lumbar radiculopathy on the pain pattern alone?",
      [
       "Psoas pain follows a dermatome; radiculopathy is non-dermatomal",
       "Psoas always causes foot drop; radiculopathy never does",
       "Psoas pain is purely bilateral; radiculopathy is purely unilateral",
       "Psoas pain is reproduced by straight-leg raise; radiculopathy is not",
       "Psoas refers to the contralateral knee and not past it; radiculopathy follows a nerve distribution often to the foot"
      ],
      4,
      "How do you best distinguish psoas syndrome from lumbar radiculopathy on the pain pattern… The deck flagged this as the most common misdiagnosis. Psoas syndrome refers pain to the contralateral knee and stops there; radiculopathy follows the involved nerve root’s distribution, frequently down to the foot.  (A) This reverses the two: radiculopathy is the dermatomal one. B: Foot drop is a radiculopathy/peroneal sign, not a defining psoas feature. C: Psoas can be unilateral (later stage) and the bilateral/unilateral split is not the discriminator. D: SLR is more associated with radicular/neural tension, not the psoas discriminator described.",
      "basic"
     ],
     [
      "In the later (\"full-blown\") stage of unilateral psoas syndrome on the right, which combination of segmental findings is expected?",
      [
       "Bilateral L1–L2 flexion only, with no lumbar sidebending and no pelvic shift",
       "L1/L2 extended and sidebent left; L3–L4 neutral; pelvic shift to the right; left leg short",
       "L1/L2 flexed and sidebent/rotated toward the right (Type II); L3–L4 sidebent left (Type I); pelvic shift to the left; right leg externally rotated and short",
       "L4/L5 flexed with a right-on-right forward torsion and a left short leg",
       "L1/L2 flexed and sidebent left (Type II); L3–L4 sidebent right; pelvic shift to the right"
      ],
      2,
      "In the later (\"full-blown\") stage of unilateral psoas syndrome on the right, which combination… Late unilateral psoas (right): key lesion L1/L2 flexed, sidebent and rotated TOWARD the hypertonic (right) side as a Type II; lower lumbars (L3–L4) compensate to the opposite (left) side as a Type I neutral, making an S-curve; the pelvis shifts AWAY (left) from the tight psoas, and the ipsilateral (right) leg is externally rotated and shortened.  (A) Bilateral-only findings describe the EARLY stage, not the late unilateral stage. B: The key lesion is flexed (not extended) and sidebent toward the tight side. D: The psoas does not attach to L5 and the key lesion is L1/L2, not L4/L5. E: The upper lumbar segment sidebends TOWARD the tight (right) side, and the pelvis shifts away (left), not as stated.",
      "basic"
     ],
     [
      "Which exercise/treatment instruction is appropriate for a patient with psoas syndrome?",
      [
       "Bed rest with the hips and knees flexed",
       "Daily sit-ups to strengthen the core",
       "Heat to the lower back and forward-bending stretches",
       "Back-extension exercises and treating the key thoracolumbar/upper-lumbar lesion; avoid sit-ups",
       "Aggressive lumbar flexion stretching to lengthen the paraspinals p. 5"
      ],
      3,
      "Which exercise/treatment instruction is appropriate for a patient with psoas syndrome? Psoas syndrome will not resolve without treating the key lesion (upper lumbar / thoracolumbar junction), and rehab favors extension-biased work (back extension, swimming). Sit-ups are specifically contraindicated because they fire the psoas.  (A) Sustained hip/knee flexion shortens the already-hypertonic psoas. B: Sit-ups activate the psoas and are explicitly to be avoided. C: Heat to the low back and forward bending are on the avoid list. E: Flexion stretching worsens the psoas-driven posture; extension is the goal. p. 6",
      "basic"
     ]
    ]
   ]
  ]
 ]
];
// QUIZ_END
