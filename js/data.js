/* Conservative / traditional dates. Resurrection–Nicaea.
   kind: "inferred" = reconstructed from later witness, not a dated headline in the NT. */
window.EVENTS = [
  { year: 33, label: "c. 30/33", title: "Resurrection", image: "assets/ev-tomb.jpg",
    summary: "Jesus is raised. The church’s life begins from this claim.",
    account: "Paul recites a creed he says he received and handed on: Christ died for our sins, was buried, was raised on the third day, and appeared to Cephas, the Twelve, more than five hundred, James, all the apostles, and last of all to Paul himself (1 Corinthians 15:3–8). The Gospels narrate the empty tomb and the appearances. Conservative chronology places the crucifixion and resurrection under Pontius Pilate, c. 30 or 33.",
    sources: ["1 Corinthians 15:3–8", "The four Gospels"],
    views: {
      critic: "Pilate’s prefecture (26–36) is not in dispute. 30 and 33 are both used; many historians prefer 30.",
      habermas: "Prefers 30 as the working date for his resurrection timeline; 33 is the second most common.",
      huff: "Often charts the crucifixion at 33."
    } },

  { year: 33.4, label: "c. 30/33", title: "Pentecost", image: "assets/ev-pentecost.jpg",
    summary: "The Spirit falls in Jerusalem; Peter preaches. The mission of the Twelve starts in the city of the crucifixion.",
    account: "Acts 2: Jews from the Diaspora hear Peter announce that God has made the crucified Jesus both Lord and Christ, and that David’s tomb is still with them while Jesus is not abandoned to Hades. Three thousand are baptized. The church’s public life begins where the passion had taken place, weeks earlier.",
    sources: ["Acts 2"] },

  { year: 35, label: "c. 34–36", title: "Stephen martyred", short: "Stephen", image: "assets/ev-stones.jpg",
    summary: "The first named Christian martyr, stoned in Jerusalem. Saul looks on.",
    account: "Acts 6–7: Stephen, one of the Seven, is accused of speaking against the temple and the law. His speech recites Israel’s story and ends with the vision of the Son of Man. He is taken outside the city and stoned. “The witnesses laid their coats at the feet of a young man named Saul” (Acts 7:58). The persecution that follows scatters the church through Judea and Samaria (Acts 8:1–4).",
    sources: ["Acts 6–8"] },

  { year: 35.4, label: "c. 34–36", title: "Peter and John in Samaria", short: "Samaria", image: "assets/apostle-peter.jpg",
    summary: "After the scattering, Philip preaches in Samaria. Jerusalem sends Peter and John; they lay hands on the new believers.",
    account: "Acts 8: the persecution that followed Stephen’s death scatters the church. Philip, one of the Seven, preaches in the city of Samaria. The apostles at Jerusalem hear that Samaria has received the word and send Peter and John, who pray and lay hands on them. On the way back they preach in many Samaritan villages. Two of the Twelve are on the road together, still from Jerusalem, before Paul’s conversion is told.",
    sources: ["Acts 8:4–25"] },

  { year: 36, label: "c. 34–36", title: "Paul’s conversion", short: "Damascus", image: "assets/ev-light.jpg",
    when: { critic: 36, habermas: 32, huff: 36 },
    whenLabel: { critic: "c. 34–36", habermas: "c. 32 (cross +2)", huff: "c. 34–36" },
    summary: "The risen Jesus appears to Saul on the Damascus road. The persecutor becomes the apostle to the nations.",
    account: "Acts 9: a light from heaven, the voice “Saul, Saul, why do you persecute me?”, and blindness until Ananias lays on hands. Paul himself dates the call to God’s revealing of the Son “in me” and says he did not immediately consult flesh and blood, but went away into Arabia and returned to Damascus (Galatians 1:15–17). The persecutor of 1 Corinthians 15:9 is the same man who recites the creed. The visit to Cephas comes three years later.",
    sources: ["Acts 9", "Galatians 1:11–17", "1 Corinthians 15:8–10"],
    views: {
      critic: "Usually a few years after the crucifixion, c. 33–36.",
      habermas: "About two years after a 30 crucifixion — c. 32 — so Paul is in the story almost at once.",
      huff: "With a 33 cross, the Damascus road sits in the mid-30s."
    },
    quotes: {
      habermas: {
        text: "By the time Paul saw the risen Jesus on the road to Damascus and was converted in 32 AD, only 2 years after the resurrection.",
        cite: "Gary Habermas"
      }
    } },

  { year: 34.2, label: "c. 32–35", title: "The 1 Corinthians 15 creed", short: "The creed", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 34, habermas: 33, huff: 34 },
    whenLabel: { critic: "c. 32–38", habermas: "c. 30–35", huff: "c. mid-30s" },
    summary: "An oral summary of the death, burial, resurrection, and appearances, older than the letter that quotes it.",
    account: "1 Corinthians 15:3–7 is widely read as a creed Paul “received” and “handed on.” It names Cephas, the Twelve, more than five hundred, James, and all the apostles. Paul adds himself in verse 8. He is writing the letter in the 50s; he says he had already delivered this material when he founded the Corinthian church. Many place his receipt of it at the fifteen days with Cephas (Galatians 1:18).",
    sources: ["1 Corinthians 15:3–8", "Galatians 1:18–19"],
    views: {
      critic: "Near-consensus that this is pre-Pauline tradition from the 30s, not Paul’s own invention in the 50s.",
      habermas: "The load-bearing date in his timeline: in circulation in the early 30s; Paul gets it by the Jerusalem visit c. 35. Dunn: months from the cross; some say even sooner.",
      huff: "Follows O’Collins and others: mid-30s at latest, 40 at the outside."
    },
    quotes: {
      habermas: {
        text: "If this were modern writing, he’d have to put a footnote here. He said I got this from somebody else.",
        cite: "Gary Habermas, on 1 Corinthians 15:3"
      },
      huff: {
        text: "If Gerald O’Collins is correct, and the creed is mid-30s, and Mark is writing a prequel to the creed, then it isn’t crazy to hypothesize it being written in the late 30s.",
        cite: "Wesley Huff, on Mark and the creed"
      }
    } },

  { year: 38, label: "c. 37–39", title: "Paul visits Cephas", short: "Fifteen days", image: "assets/apostle-peter.jpg",
    when: { critic: 38, habermas: 35, huff: 38 },
    whenLabel: { critic: "c. 37–39", habermas: "c. 35", huff: "c. 37–39" },
    summary: "Three years after the conversion, Paul goes up to Jerusalem and stays with Cephas fifteen days. He also sees James the Lord’s brother.",
    account: "Galatians 1:18–20: “Then after three years I went up to Jerusalem to visit Cephas and remained with him fifteen days. But I saw none of the other apostles except James the Lord’s brother. In what I am writing to you, before God, I do not lie.” Acts 9:26–30 is the same first visit: Barnabas takes him to the apostles; he preaches in Jerusalem; the Hellenists seek to kill him; the brothers send him to Tarsus. Peter and Paul meet in the flesh years before Galatians is written, and years before the council.",
    sources: ["Galatians 1:18–24", "Acts 9:26–30"],
    views: {
      critic: "Galatians 1:18 is taken as a real visit, three years after conversion.",
      habermas: "c. 35: the meeting where Paul can receive the 1 Corinthians 15 list from Peter and James.",
      huff: "Same visit, on a mid-30s conversion, still well before any Gospel."
    },
    quotes: {
      habermas: {
        text: "Paul goes to Jerusalem in Galatians chapter 1. He spends 15 days with Peter and James. Bingo, whose names are in that list?",
        cite: "Gary Habermas"
      }
    } },

  { year: 40, label: "c. 39–41", title: "Peter at Caesarea", short: "Cornelius", image: "assets/apostle-peter.jpg",
    summary: "Peter is sent to the house of Cornelius. The Spirit falls on Gentiles while Peter is still speaking.",
    account: "Acts 10: a centurion at Caesarea, a vision of unclean animals, and Peter’s word, “God has shown me that I should not call any person common or unclean.” While he is still speaking, the Holy Spirit falls on all who hear, and they are baptized. Acts 11: Peter defends the baptism before the circumcision party in Jerusalem. The Gentile mission in Acts begins with one of the Twelve, in a Roman house, before Paul’s journeys and before Galatians.",
    sources: ["Acts 10–11:18"] },

  { year: 43, label: "c. 42–44", title: "Barnabas and Paul at Antioch", short: "Antioch", image: "assets/author-paul.jpg",
    summary: "Barnabas fetches Paul from Tarsus. They teach a year at Antioch; the disciples are first called Christians.",
    account: "Acts 11:19–26: the scattered preach as far as Antioch. The church in Jerusalem sends Barnabas; he sees the grace of God, goes to Tarsus for Paul, and they remain a whole year with the church. “In Antioch the disciples were first called Christians.” This is the base from which the first missionary journey will be sent, and the city where Paul will later oppose Cephas to his face.",
    sources: ["Acts 11:19–26"] },

  { year: 44, label: "44", title: "James son of Zebedee killed", short: "James Zebedee", image: "assets/ev-sword.jpg",
    summary: "Herod Agrippa I puts James the brother of John to the sword — the first apostle-martyr in the New Testament narrative.",
    account: "Acts 12:1–2: “About that time King Herod laid violent hands upon some who belonged to the church. He had James, the brother of John, killed with the sword.” Agrippa I dies shortly after (Acts 12:20–23), an event Josephus also records (Antiquities 19.343–352), which fixes the year at 44. Peter is arrested in the same sweep and escapes. James of Zebedee is the only one of the Twelve whose death is narrated in the New Testament.",
    sources: ["Acts 12:1–2", "Josephus, Antiquities 19.343–352"] },

  { year: 46, label: "c. 46", title: "Relief to Jerusalem", short: "Famine visit", image: "assets/author-paul.jpg",
    summary: "Barnabas and Paul take famine relief from Antioch to the elders in Jerusalem. Josephus independently records a great famine in the city under Claudius.",
    account: "Acts 11:27–30: Agabus foretells a famine in the days of Claudius. The disciples at Antioch send relief to the brothers in Judea by the hand of Barnabas and Paul. Josephus, Antiquities 20.51–53 and 20.101, describes the same Claudian famine at Jerusalem: many died for want; Queen Helena of Adiabene bought grain from Egypt and figs from Cyprus and distributed them, and her son Izates sent money to the principal men of the city. He does not mention the church at Antioch. On the South Galatian reading, Galatians 2:1–10 is this visit: after fourteen years Paul goes up with Barnabas and Titus, lays his gospel privately before those of repute — James, Cephas, and John — and they give the right hand of fellowship. Others read Galatians 2 as the council of Acts 15.",
    sources: ["Acts 11:27–30", "Josephus, Antiquities 20.51–53; 20.101", "Galatians 2:1–10"],
    caveat: "Galatians 2:1–10 is either this famine visit or the council of Acts 15. Both meetings are in the narrative; the letter does not name which calendar year." },

  { year: 47, label: "c. 46–48", title: "First missionary journey", short: "Cyprus · Galatia", image: "assets/ev-ship.jpg",
    summary: "The Spirit sends Barnabas and Paul from Antioch. Cyprus, then the Galatian cities: Pisidian Antioch, Iconium, Lystra, Derbe.",
    account: "Acts 13–14: at Antioch the Spirit says, “Set apart for me Barnabas and Saul.” From Cyprus onward Luke writes “Paul” (13:9). They preach before Sergius Paulus the proconsul, then sail to Perga, where John Mark leaves them. In Pisidian Antioch, Iconium, Lystra, and Derbe they plant churches among Jews and Gentiles and appoint elders on the way back. These are the churches of Galatia to which Paul will write. He returns to Syrian Antioch and reports what God has done.",
    sources: ["Acts 13–14"] },

  { year: 47.7, label: "c. 48", title: "Peter at Antioch", short: "Cephas at Antioch", image: "assets/apostle-peter.jpg",
    summary: "Cephas comes to Antioch. After men from James arrive, he draws back from the Gentiles. Paul opposes him to his face.",
    account: "Galatians 2:11–14: “When Cephas came to Antioch, I opposed him to his face, because he stood condemned.” He had been eating with the Gentiles; when certain men came from James, he drew back and separated himself, fearing the circumcision party. The rest of the Jews joined him, “so that even Barnabas was led astray.” Paul rebukes him before them all: if he, a Jew, lives like a Gentile, how can he compel Gentiles to live like Jews? On the early dating this clash is still open when Paul writes to Galatia, before the council’s public decree.",
    sources: ["Galatians 2:11–14"] },

  { year: 48, label: "c. 48–49", title: "Galatians", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 54, habermas: 52, huff: 48 },
    whenLabel: { critic: "c. 50–55", habermas: "c. 50–55", huff: "c. 48–49" },
    summary: "Paul writes to the churches of the first journey. He recounts the fifteen days with Cephas and the clash at Antioch.",
    account: "The letter is to the Galatian churches just planted (Acts 13–14). Paul defends a gospel received “through a revelation of Jesus Christ,” not from Jerusalem. He reminds them of the fifteen days with Cephas three years after his call, of the later visit with Barnabas and Titus before the pillars, and of the open rebuke of Cephas at Antioch (Galatians 1–2). Conservative South-Galatian dating places the letter after that first journey and before, or at, the council of Acts 15 — among the earliest surviving Christian documents after the creed of 1 Corinthians 15.",
    sources: ["Galatians 1–2", "Acts 13–14"],
    views: {
      critic: "Undisputed Paul. Usually 50–55, often after the council (North Galatian).",
      habermas: "Among the seven undisputed letters, inside the 48/50–62 window.",
      huff: "South Galatian / early: just after the first journey, before or at Acts 15."
    } },

  { year: 49, label: "c. 49", title: "Jerusalem council", short: "Council", image: "assets/ev-council.jpg",
    summary: "Peter, Paul, Barnabas, and James the Just settle that Gentile believers are not to be yoked to the full Mosaic law.",
    account: "Acts 15: after the first journey, men from Judea teach at Antioch that circumcision is necessary. The church sends Paul and Barnabas to Jerusalem. Peter speaks of God giving the Spirit to the Gentiles at Cornelius’s house; James the Just gives the judgment. The decree is sent out with Judas and Silas. Some read Galatians 2:1–10 as this council; others as the earlier famine visit. Either way, Peter, Paul, Barnabas, and James are in one room, and Gentile freedom is the question.",
    sources: ["Acts 15", "Galatians 2:1–10"] },

  { year: 49.5, label: "c. 44–49", title: "Letter of James", short: "James", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 85, habermas: 49, huff: 49 },
    whenLabel: { critic: "c. 80–100", habermas: "maybe before 1 Thess", huff: "c. 44–49" },
    summary: "James the Just to the twelve tribes. Conservative dating places it among the earliest NT books, before the fall of Jerusalem.",
    account: "The letter names “James, a servant of God and of the Lord Jesus Christ.” Early tradition identifies the author with James the Lord’s brother, the pillar of Galatians 2 and the speaker of Acts 15. Conservative dating sets it before 70, often in the 40s, while James still leads the Jerusalem church. It is wisdom for the Dispersion, not a later catholic treatise.",
    sources: ["James 1:1", "Galatians 2:9", "Acts 15:13–21"],
    views: {
      critic: "Often 80–100, not by the brother of Jesus; some still allow a 60s origin.",
      habermas: "Notes that James may be earlier than 1 Thessalonians (~50).",
      huff: "Traditional: James the Just, among the earliest NT books, before 70."
    } },

  { year: 50, label: "c. 50–52", title: "1–2 Thessalonians", short: "1–2 Thess.", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 51, habermas: 50, huff: 50 },
    whenLabel: { critic: "c. 50–51 (1 Thess)", habermas: "c. 50 (some 48)", huff: "c. 50–52" },
    summary: "Written from Corinth on the second missionary journey. Earliest surviving Pauline letters on the usual conservative chronology.",
    account: "Acts 17–18: Paul preaches at Thessalonica, is sent on to Berea and Athens, and settles at Corinth eighteen months. From there he writes to the church he has just planted. 1 Thessalonians assumes the readers remember his coming “in power and in the Holy Spirit” and already know the tradition of the Lord’s coming. 2 Thessalonians follows while the same team — Paul, Silvanus, Timothy — is still together.",
    sources: ["Acts 17:1–18:11", "1 Thessalonians 1–2", "2 Thessalonians 1:1"],
    views: {
      critic: "1 Thessalonians ~50–51, usually the earliest NT book. 2 Thessalonians is often dated later or treated as disputed.",
      habermas: "1 Thessalonians ~50 (sometimes 48): the start of the written Pauline window.",
      huff: "Corinth, second journey: both letters in the early 50s."
    },
    quotes: {
      habermas: {
        text: "You start with the book of 1 Thessalonians, which is usually said to be the earliest book in the New Testament, and it’s dated about 50 AD. Some scholars put it back a couple years to 48.",
        cite: "Gary Habermas"
      }
    } },

  { year: 50.2, label: "c. 49–50", title: "Barnabas and Mark to Cyprus", short: "Barnabas", image: "assets/ev-ship.jpg",
    summary: "After the council, Paul and Barnabas divide over John Mark. Barnabas takes Mark to Cyprus; Paul takes Silas through Syria and Cilicia.",
    account: "Acts 15:36–41: Paul proposes to Barnabas that they return to the churches of the first journey. Barnabas wants to take John Mark; Paul refuses, because Mark had withdrawn at Perga. The disagreement is sharp. Barnabas takes Mark and sails to Cyprus, his own country. Paul chooses Silas, is commended by the brothers, and goes through Syria and Cilicia. Two apostolic teams now move instead of one. Mark will later be useful to Paul (2 Timothy 4:11) and, in the conservative tradition, Peter’s interpreter.",
    sources: ["Acts 15:36–41", "2 Timothy 4:11"] },

  { year: 51, label: "c. 50–57", title: "Second and third journeys", short: "Macedonia · Ephesus", image: "assets/ev-ship.jpg",
    summary: "Paul and Silas through Macedonia and Achaia; then the long stay at Ephesus and the return through Greece. Letters follow the roads.",
    account: "Acts 16–21, after the split with Barnabas: Timothy is taken on at Lystra; the Spirit forbids Asia and Bithynia; the Macedonian vision at Troas; Philippi, Thessalonica, Berea, Athens, Corinth (eighteen months). From Corinth he writes to Thessalonica. The third journey is the three years at Ephesus (Acts 19–20) and the return through Macedonia and Greece, with Luke as a sometime companion (“we” in Acts 16, 20–21). 1–2 Corinthians and Romans sit on this stretch.",
    sources: ["Acts 16–21"] },

  { year: 55, label: "c. 54–56", title: "1–2 Corinthians", short: "1–2 Cor.", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 55, habermas: 56, huff: 55 },
    whenLabel: { critic: "c. 53–56", habermas: "c. 55–57", huff: "c. 53–57" },
    summary: "From Ephesus and Macedonia. 1 Corinthians 15 again recites the resurrection appearances, including to Peter and James.",
    account: "Paul’s longest surviving pastoral correspondence with a single church. 1 Corinthians is sent from Ephesus (16:8). Chapter 15 recites the early creed and lists the witnesses. 2 Corinthians, from Macedonia, defends the apostleship after a painful visit. The letters assume a living network: Timothy, Titus, the collection for the saints in Jerusalem.",
    sources: ["1 Corinthians 15–16", "2 Corinthians 1–2; 8–9", "Acts 19–20"],
    views: {
      critic: "1 Corinthians ~53–54; 2 Corinthians ~55–56. Undisputed Paul.",
      habermas: "1 Corinthians ~55–57, the letter that carries the 15:3–7 creed.",
      huff: "Even on later counts, 53–57 — and 1 Corinthians 11 may quote Luke."
    },
    quotes: {
      habermas: {
        text: "Whatever date you put these epistles, they’re going to be between 48 to 50 and about 62 to 63. There’s a window there of less than 15 years, and all those epistles fit right in there.",
        cite: "Gary Habermas, on the undisputed Paulines"
      },
      huff: {
        text: "In 1 Corinthians, even by some of the latest dating, it has been placed between 53 and 57 AD. So I think if Paul is quoting Luke’s gospel, then Luke could be as early as 53.",
        cite: "Wesley Huff"
      }
    } },

  { year: 57, label: "c. 57", title: "Romans", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 57, habermas: 57, huff: 57 },
    whenLabel: { critic: "c. 55–58", habermas: "c. 57", huff: "c. 57" },
    summary: "Paul writes to Rome from Corinth, planning to go on to Spain after Jerusalem.",
    account: "The longest surviving Pauline letter. He has not yet been to Rome, but he names a long list of believers already there (Romans 16) and hopes to be sent on to Spain after he has delivered the collection to Jerusalem (15:23–28). Phoebe of Cenchreae is commended as the bearer. Written during the three months in Greece of Acts 20:2–3, on the conservative count.",
    sources: ["Romans 1:7–15; 15:23–28; 16", "Acts 20:2–3"],
    views: {
      critic: "Undisputed, from Corinth, c. 55–58. Romans 1:3–4 and 10:9 are often treated as older creedal lines.",
      habermas: "Inside the 50s Pauline window; 10:9 is one of his early high-Christology creeds.",
      huff: "Same Corinthian winter as the usual conservative chronology, c. 57."
    } },

  { year: 58, label: "c. 57–59", title: "Paul arrested", short: "Arrested", image: "assets/ev-chains.jpg",
    summary: "Seized in the temple, tried before Felix and Festus, appeal to Caesar. Two years at Caesarea.",
    account: "Acts 21: Paul is taken in the temple on the charge of bringing Gentiles past the barrier. He defends himself before the crowd, before the Sanhedrin, before Felix, and before Festus and Agrippa II. The appeal to Caesar sends him to Rome. Luke’s “we” resumes for the voyage (Acts 27–28). Conservative chronology puts the arrest c. 57 and the Caesarean custody through 59.",
    sources: ["Acts 21–26"] },

  { year: 60, label: "c. 60–62", title: "Philippians · Philemon", short: "Philippians", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 61, habermas: 61, huff: 61 },
    whenLabel: { critic: "c. 54–62", habermas: "c. 60–62", huff: "c. 60–62" },
    summary: "From custody: joy to Philippi, and a private appeal for Onesimus.",
    account: "Philippians and Philemon are among the letters critics and conservatives both give to Paul. Philippians 1:13 and 4:22 speak of the praetorium and of saints in Caesar’s household. Philemon sends the slave Onesimus back as a brother. On the early Roman date they belong to the house arrest of Acts 28.",
    sources: ["Philippians 1:12–13; 4:22", "Philemon"],
    views: {
      critic: "Undisputed Paul, 54–62, Rome or Ephesus.",
      habermas: "Inside the seven, before a 62–63 martyrdom.",
      huff: "Roman house arrest, while Paul is still alive."
    } },

  { year: 60.2, label: "c. 60–62", title: "Ephesians · Colossians", short: "Ephesians", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 85, habermas: 61, huff: 61 },
    whenLabel: { critic: "c. 70–90", habermas: "c. 60–62", huff: "c. 60–62" },
    summary: "Prison letters to Asia. Conservatives keep them as Paul’s; many critics date them after his death.",
    account: "Colossians names Paul’s chains and a letter to Laodicea. Ephesians, on the conservative reading, is the same captivity, a circular to the Asian churches. Both assume a high view of the church and of Christ’s cosmic place.",
    sources: ["Ephesians 3:1; 6:20", "Colossians 4:3; 4:16"],
    views: {
      critic: "Majority: deutero-Pauline, c. 70–90. A minority still defends Pauline authorship from prison.",
      habermas: "Treats the seven as the critical core; Ephesians is not in that seven.",
      huff: "Pauline, from the Roman house arrest, before 64–67."
    } },

  { year: 60.4, label: "c. 60–62", title: "Luke", short: "Luke", book: true, image: "assets/ev-gospel.jpg",
    when: { critic: 85, habermas: 85, huff: 58 },
    whenLabel: { critic: "c. 80–90", habermas: "c. 85", huff: "c. 50s–60s" },
    summary: "The Gospel dedicated to Theophilus. Irenaeus: Luke recorded what Paul preached.",
    account: "Luke’s preface claims orderly investigation of eyewitness tradition. Irenaeus AH 3.1.1: Luke, the companion of Paul, wrote down the gospel Paul preached. On the early date the temple’s fall is still future in the narrative world.",
    sources: ["Luke 1:1–4", "Irenaeus, Against Heresies 3.1.1"],
    views: {
      critic: "Usually 80–90, after Mark and after 70.",
      habermas: "When quoting typical critical averages: about 85.",
      huff: "Synoptics in the 40s–60s; if 1 Corinthians 11 quotes Luke 22, Luke could be as early as 53."
    },
    quotes: {
      habermas: {
        text: "Luke is 85 or plus 55.",
        cite: "Gary Habermas, citing typical critical dates"
      },
      huff: {
        text: "If Paul is quoting Luke’s gospel, then Luke could be as early as 53.",
        cite: "Wesley Huff, on 1 Corinthians 11 and Luke 22"
      }
    } },

  { year: 62.2, label: "c. 60–62", title: "Acts", short: "Acts", book: true, image: "assets/ev-gospel.jpg",
    when: { critic: 90, habermas: 85, huff: 62 },
    whenLabel: { critic: "c. 85–100", habermas: "c. 85", huff: "c. 60–62" },
    summary: "Volume two to Theophilus. Ends with Paul preaching in Rome, still alive.",
    account: "Acts 28:30–31: two years in his own hired dwelling, “with all boldness and without hindrance.” No death of Paul or Peter, no fall of Jerusalem. The early date reads that silence as the author’s present.",
    sources: ["Acts 1:1; 28:30–31"],
    views: {
      critic: "Commonly 85–100, after Luke, often after 70.",
      habermas: "Often ~85 with Luke; few critics put Acts before 65.",
      huff: "Before 64–67, because Luke never records Peter’s or Paul’s death."
    },
    quotes: {
      habermas: {
        text: "Not too many people will put Acts before 65, and it’s often put about 85.",
        cite: "Gary Habermas"
      },
      huff: {
        text: "I think we can say at minimum Acts is written before the death of Peter and Paul. … Given the lack of Peter and Paul’s death, it’s a good marker to put the synoptics pre-70.",
        cite: "Wesley Huff"
      }
    } },

  { year: 60.5, label: "c. 60–64", title: "Peter and Paul at Rome", short: "Rome", image: "assets/apostle-peter.jpg", kind: "inferred",
    summary: "Irenaeus places Peter and Paul together preaching at Rome; 1 Clement later speaks of their contests in that city.",
    account: "Irenaeus, Against Heresies 3.1.1: Matthew published his Gospel among the Hebrews “while Peter and Paul were preaching at Rome and laying the foundations of the church.” 1 Clement 5, written from Rome a generation later, holds up Peter and Paul as the greatest examples of endurance “among us.” The inference is that both apostles were in the capital in the early 60s, before Nero’s persecution. The New Testament itself puts Paul there (Acts 28) and has Peter write from “Babylon” (1 Peter 5:13), read as Rome in the conservative tradition.",
    sources: ["Irenaeus, Against Heresies 3.1.1", "1 Clement 5", "Acts 28", "1 Peter 5:13"],
    caveat: "Acts narrates Paul’s Roman custody; Peter’s presence in the city is the later church’s consistent memory, not a scene in Acts." },

  { year: 62, label: "c. 55–65", title: "Mark", book: true, image: "assets/ev-gospel.jpg",
    when: { critic: 70, habermas: 67, huff: 50 },
    whenLabel: { critic: "c. 68–72", habermas: "c. 65–70", huff: "c. 40s–60s" },
    summary: "Mark writes Peter’s preaching. Conservative date: before 70, often in the 60s, from Rome.",
    account: "Papias of Hierapolis, as Eusebius copies him (HE 3.39.15): Mark was Peter’s interpreter and wrote down accurately what he remembered of the Lord’s words and deeds, not in order. Irenaeus (AH 3.1.1) places Mark after Peter and Paul’s departure. Clement of Alexandria (via Eusebius HE 2.15; 6.14) has Mark writing at Rome at the request of those who had heard Peter. Conservative dating keeps the book before the fall of the temple.",
    sources: ["Papias via Eusebius, HE 3.39.15", "Irenaeus, Against Heresies 3.1.1", "Clement of Alexandria via Eusebius, HE 2.15; 6.14"],
    views: {
      critic: "Earliest Gospel, around 70 (often 68–72), near or after the war.",
      habermas: "Typical critical average he cites: 65–70. A survey he quotes clustered there, with Mark as author and Peter as source.",
      huff: "With the other Synoptics, 40s–60s, well inside living memory."
    },
    quotes: {
      habermas: {
        text: "The date for Mark is about 65 to 70. … 65 to 70 that’s 35 to 40 years and Mark is the author and Peter who he was Peter’s traveling companion.",
        cite: "Gary Habermas, using typical critical dates"
      },
      huff: {
        text: "I would put Mark anywhere within the realm of 40 or 50 and then the other gospels not coming long after that, but certainly all of Matthew, Mark, and Luke before 70 AD.",
        cite: "Wesley Huff"
      }
    } },

  { year: 62.4, label: "62", title: "James the Just martyred", short: "James the Just", image: "assets/author-james-just.jpg",
    summary: "Josephus: the high priest Ananus has “James, the brother of Jesus who was called Christ,” stoned in Jerusalem.",
    account: "Josephus, Antiquities 20.200: Ananus the Younger, in the interval after Festus’s death and before Albinus arrived, convened the Sanhedrin and brought before it “the brother of Jesus who was called Christ, whose name was James, and certain others,” and delivered them to be stoned. The year is 62. Hegesippus, as Eusebius copies him (HE 2.23), gives a longer Christian account of James’s death at the temple. The New Testament’s pillar of Jerusalem is gone eight years before the city falls.",
    sources: ["Josephus, Antiquities 20.200", "Hegesippus via Eusebius, HE 2.23"] },

  { year: 63, label: "c. 60–70", title: "Matthew", book: true, image: "assets/ev-gospel.jpg",
    when: { critic: 85, habermas: 82, huff: 55 },
    whenLabel: { critic: "c. 80–90", habermas: "c. 80–85", huff: "c. 40s–60s" },
    summary: "Matthew among the Hebrews, on Papias and Irenaeus.",
    account: "Papias: Matthew compiled the logia in the Hebrew language (Eusebius HE 3.39.16). Irenaeus AH 3.1.1: Matthew published a Gospel among the Hebrews in their own tongue while Peter and Paul were at Rome. Origen, via Eusebius HE 6.25, repeats the Hebrew-Matthew tradition.",
    sources: ["Papias via Eusebius, HE 3.39.16", "Irenaeus, Against Heresies 3.1.1"],
    views: {
      critic: "Usually 80–90, after Mark and after 70, for a church still arguing Torah.",
      habermas: "When using critic dates: about 80–85.",
      huff: "Synoptics 40s–60s; Irenaeus’s “while Peter and Paul were at Rome” is taken as the 60s."
    },
    quotes: {
      habermas: {
        text: "I’m going to use critic dates. … Matthew’s 80 or plus 50. Luke is 85 or plus 55. And John is the latest gospel … 95 AD.",
        cite: "Gary Habermas, on typical critical Gospel dates"
      },
      huff: {
        text: "I date the Synoptic Gospels (Matthew, Mark, Luke) pretty early (40s–60s AD). I didn’t mention it but I actually date John late (90s AD).",
        cite: "Wesley Huff"
      }
    } },

  { year: 63.4, label: "c. 60–70", title: "Hebrews", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 80, habermas: 65, huff: 63 },
    whenLabel: { critic: "c. 60–90", habermas: "c. 60s", huff: "c. 60–70" },
    summary: "The sanctuary still stands in the argument (Heb 8–10). Conservative readers put it before 70.",
    account: "Hebrews never names its author. It reasons from a cult still in operation and never mentions the temple’s fall. On the conservative reading that is because the fall has not happened. The letter already treats Jesus as high priest and the old sacrifices as a shadow.",
    sources: ["Hebrews 8–10"],
    views: {
      critic: "Often 70–90, sometimes earlier; authorship left open.",
      habermas: "Not in his seven; he does not lean on it for the minimal facts.",
      huff: "Before 70, while the temple cult still stands."
    } },

  { year: 64, label: "64", title: "Nero’s persecution", short: "Rome burns", image: "assets/ev-fire-rome.jpg",
    summary: "Rome burns. Tacitus: Nero blames the Christians. The first imperial persecution in the city of Peter and Paul.",
    account: "Tacitus, Annals 15.44: after the fire of 64, Nero fastened the guilt on “a class hated for their abominations, called Christians by the populace.” Christus had been executed under Pontius Pilate; the “superstition” broke out again in Judea and in Rome. An immense multitude was convicted; some were crucified, some burned as night lamps. This is a Roman historian, not a church writer, dating the sect to Pilate and describing its punishment in Nero’s city.",
    sources: ["Tacitus, Annals 15.44"] },

  { year: 65, label: "c. 62–64", title: "1 Peter", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 80, habermas: 64, huff: 64 },
    whenLabel: { critic: "c. 70–90", habermas: "c. 62–64", huff: "c. 62–64" },
    summary: "Peter, through Silvanus, to the elect of the Diaspora, writing as the church comes under Nero’s shadow.",
    account: "The letter names “Peter, an apostle of Jesus Christ,” and says it is written “through Silvanus” (5:12). “She who is in Babylon, chosen together with you, sends you greetings” (5:13) — Babylon as Rome in the conservative reading, while Nero’s fire and the first imperial persecution are at the door. The churches addressed are in Pontus, Galatia, Cappadocia, Asia, and Bithynia, the same Asia where John will later remain.",
    sources: ["1 Peter 1:1; 5:12–13"],
    views: {
      critic: "Often 70–90, from a Petrine circle rather than Peter himself.",
      habermas: "Not required for the seven; conservative use puts it under Nero.",
      huff: "Peter, through Silvanus, before or during Nero’s persecution."
    } },

  { year: 66, label: "c. 64–67", title: "2 Peter", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 120, habermas: 65, huff: 66 },
    whenLabel: { critic: "c. 100–140", habermas: "c. 64–67", huff: "c. 64–67" },
    summary: "Peter’s farewell, naming a collection of Paul’s letters as Scripture.",
    account: "2 Peter presents itself as a second letter and as a reminder before the author’s “departure” (1:13–15). It already treats a collection of Paul’s letters as Scripture (3:15–16). Conservative dates fall before Peter’s death and before 70.",
    sources: ["2 Peter 1:12–15; 3:15–16"],
    views: {
      critic: "Widely dated 100–140, the latest NT book in most critical reconstructions.",
      habermas: "Not in the seven; his resurrection case does not depend on it.",
      huff: "Peter’s farewell, written while he still lives, before 70."
    } },

  { year: 66.3, label: "c. 64–67", title: "Pastorals", short: "Pastorals", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 95, habermas: 63, huff: 66 },
    whenLabel: { critic: "c. 80–110", habermas: "c. 62–64", huff: "c. 64–67" },
    summary: "1–2 Timothy and Titus. Conservative: Paul’s last letters. 2 Timothy as a farewell from custody.",
    account: "2 Timothy names those who have left and those who remain, and asks for the cloak and the parchments. 1 Timothy and Titus order churches and elders. On the conservative count they are Paul’s, before Nero kills him.",
    sources: ["2 Timothy 4", "1 Timothy 1:1", "Titus 1:1"],
    views: {
      critic: "Usually 80–110, from a Pauline school, not from Paul in the 60s.",
      habermas: "Outside the seven undisputed letters.",
      huff: "Paul’s last letters, still before 64–67."
    } },

  { year: 66.6, label: "c. 64–67", title: "Jude", book: true, image: "assets/ev-scroll.jpg",
    when: { critic: 90, habermas: 65, huff: 66 },
    whenLabel: { critic: "c. 80–110", habermas: "c. 60s", huff: "c. 64–68" },
    summary: "Jude of the Lord’s brothers: the faith once for all delivered.",
    account: "The letter names “Jude, a servant of Jesus Christ and brother of James.” Conservative dates fall before 70. 2 Peter appears to use Jude or to share a source with it.",
    sources: ["Jude 1"],
    views: {
      critic: "Often 80–110, sometimes earlier.",
      habermas: "Not used in the minimal-facts core.",
      huff: "Jude of the Lord’s brothers, before 70."
    } },

  { year: 67, label: "c. 64–67", title: "Peter crucified · Paul beheaded", short: "Peter · Paul", image: "assets/ev-cross.jpg",
    when: { critic: 64, habermas: 63, huff: 66 },
    whenLabel: { critic: "c. 64", habermas: "c. 62–63", huff: "c. 64–67" },
    summary: "Rome, under Nero. The farewell letters already stand.",
    account: "1 Clement 5, from Rome at the end of the century, holds up Peter and Paul as athletes who bore witness “among us” and went to the place of glory. Tertullian, Prescription 36, says Rome can show the places where the apostles’ blood was shed — Peter under the sword’s equivalent, the cross; Paul a Roman death, the sword. Origen, as Eusebius copies him (HE 3.1), records Peter crucified head-downward at his own request, and Paul beheaded. Nero dies in 68; the tradition places both deaths in his last years.",
    sources: ["1 Clement 5", "Tertullian, Prescription 36", "Origen via Eusebius, HE 3.1"],
    views: {
      critic: "Nero, after the fire of 64, is the usual window; some put Paul in 62.",
      habermas: "Often 62–63, to close the Pauline letter window.",
      huff: "64–67, still under Nero, after the fire."
    },
    quotes: {
      habermas: {
        text: "The martyrdom of Paul is usually put at about 63 AD, give or take a year.",
        cite: "Gary Habermas"
      },
      huff: {
        text: "We know from extra-biblical writings that are relatively reliable … that Paul was martyred in the city of Rome somewhere between 64 and 67 AD.",
        cite: "Wesley Huff"
      }
    } },

  { year: 68, label: "c. 60–80", title: "Andrew · Philip · Thomas", short: "Three missions", image: "assets/ev-ship.jpg",
    summary: "The early notices are the mission fields, not the later martyr-acts.",
    account: "Origen, as Eusebius copies him (HE 3.1): the apostles were divided — Thomas to Parthia, Andrew to Scythia, John to Asia, Peter to the regions of Pontus and then Rome. Polycrates of Ephesus, writing to Victor of Rome (HE 5.24), lists “Philip, one of the twelve apostles, who fell asleep in Hierapolis,” with two aged virgin daughters. The later acts fill in martyrdoms; these first- and second-century notices are the mission fields.",
    sources: ["Origen via Eusebius, HE 3.1", "Polycrates via Eusebius, HE 5.24"] },

  { year: 67.5, label: "c. 66–68", title: "The church to Pella", short: "Pella", image: "assets/ev-ship.jpg",
    summary: "Eusebius: the church in Jerusalem is warned to leave the city before the war and to dwell at Pella in Perea.",
    account: "Eusebius, Church History 3.5.3: the people of the church in Jerusalem received a prophetic oracle to depart before the war and to inhabit a city of Perea named Pella. Epiphanius (Panarion 29.7; 30.2; On Weights and Measures 15) repeats the same flight. Josephus records the siege that followed; he does not name Pella as a Christian refuge. The tradition is that the church of James left the city that was about to fall, and that a remnant later returned.",
    sources: ["Eusebius, HE 3.5.3", "Epiphanius, Panarion 29.7; 30.2"] },

  { year: 70, label: "70", title: "Jerusalem destroyed", short: "Temple falls", image: "assets/ev-fire-temple.jpg",
    summary: "Titus takes the city. The temple falls — the horizon still standing in Hebrews and, on the early dating, in the Synoptics’ warnings.",
    account: "Josephus, Jewish War: after a long siege Titus takes Jerusalem; the temple burns in August of 70. Conservative readers of the Synoptics take the Olivet warnings as prophecy spoken before the event, not as vaticinium ex eventu. Hebrews never records the cult’s cessation. The church’s center of gravity moves off the city of the crucifixion.",
    sources: ["Josephus, Jewish War 6–7"] },

  { year: 71, label: "c. 70–72", title: "Symeon of Jerusalem", short: "Symeon", image: "assets/ev-council.jpg",
    summary: "After James and after the city’s fall, those still alive of the apostles, the disciples, and the Lord’s family choose Symeon son of Clopas to sit in James’s place.",
    account: "Eusebius, Church History 3.11, following Hegesippus: after the martyrdom of James and the taking of Jerusalem, the apostles and disciples who remained, together with those who were of the Lord’s family after the flesh — many of them then still living — gathered and voted Symeon son of Clopas worthy to succeed James. Hegesippus says Clopas was brother of Joseph, so Symeon was a cousin of the Saviour. Eusebius HE 3.32: the same Symeon later suffers martyrdom under Trajan, accused of being of David’s line. The church of Jerusalem does not end with the temple.",
    sources: ["Hegesippus via Eusebius, HE 3.11; 3.32; 4.22"] },

  { year: 72, label: "c. 67–80", title: "Linus at Rome", short: "Linus", image: "assets/ev-gospel.jpg",
    summary: "Irenaeus: after Peter and Paul have founded the church at Rome, they commit the episcopate to Linus. Paul had already named a Linus in 2 Timothy.",
    account: "Irenaeus, Against Heresies 3.3.3: the blessed apostles founded and built up the church and committed the office of the episcopate to Linus; “of this Linus, Paul makes mention in the Epistles to Timothy.” 2 Timothy 4:21 greets “Pudens and Linus and Claudia.” After Linus, Irenaeus names Anacletus, then Clement, whose letter to Corinth still stands on this line. The Roman succession is thus counted from the apostles through the years when the temple is gone and John is still alive in Asia.",
    sources: ["Irenaeus, Against Heresies 3.3.3", "2 Timothy 4:21"] },

  { year: 75, label: "c. 75–79", title: "Josephus, Jewish War", short: "Jewish War", book: true, image: "assets/src-josephus.jpg",
    summary: "A Jewish priest who saw the siege publishes the War in Greek, under Vespasian and Titus. The fall of the city becomes a book.",
    account: "Josephus, a Pharisee of a priestly house, fought in Galilee, surrendered to Vespasian, and watched the destruction from the Roman side. In the 70s he writes the Jewish War in Greek, dedicated to the Flavian house. Books 5–7 are the siege, the burning of the temple, and the aftermath. He is not a Christian writer. He is the chief extra-biblical narrative of the event the church had fled, and of the world in which the remaining apostles still preached.",
    sources: ["Josephus, Jewish War, preface; 5–7"] },

  { year: 85, label: "c. 80–95", title: "John · 1–3 John", short: "John", book: true, image: "assets/ev-gospel.jpg",
    when: { critic: 95, habermas: 95, huff: 92 },
    whenLabel: { critic: "c. 90–110", habermas: "c. 95", huff: "c. 90s" },
    summary: "The aged apostle at Ephesus. Gospel and letters in the last decades of the first century, after the temple’s fall.",
    account: "Irenaeus, Against Heresies 3.1.1: “Afterwards, John, the disciple of the Lord, who also had leaned upon his breast, did himself publish a Gospel during his residence at Ephesus in Asia.” AH 3.3.4: the church at Ephesus was founded by Paul, and John remained among them until the times of Trajan. The three letters belong with that Asian residence. Conservative dating puts the Gospel after 70, in John’s old age.",
    sources: ["Irenaeus, Against Heresies 3.1.1; 3.3.4"],
    views: {
      critic: "Gospel often 90–110; letters nearby. A minority pushes into the second century.",
      habermas: "Typical date he cites for John: about 95.",
      huff: "John late, in the 90s — unlike his early Synoptics."
    },
    quotes: {
      habermas: {
        text: "John is the latest gospel at … 95 AD.",
        cite: "Gary Habermas"
      },
      huff: {
        text: "I actually date John late (90s AD).",
        cite: "Wesley Huff"
      }
    } },

  { year: 90, label: "c. 80–100", title: "Polycarp hears John", short: "Polycarp hears", image: "assets/src-polycarp.jpg", kind: "inferred",
    summary: "In Asia, while John still remains at Ephesus, the young Polycarp hears the apostle and others who had seen the Lord.",
    account: "Irenaeus is the witness. Against Heresies 3.3.4: Polycarp “was not only instructed by apostles, and conversed with many who had seen Christ, but was also, by apostles in Asia, appointed bishop of the church in Smyrna.” In the letter to Florinus — lost as a letter, quoted by Eusebius, Church History 5.20.4–8 — Irenaeus says he remembers the place where Polycarp sat when he discoursed, his way of life, his appearance, and “the accounts which he gave of his intercourse with John and with the others who had seen the Lord.” Irenaeus in the same chapter of Against Heresies says John remained at Ephesus until Trajan (98–117). The Martyrdom of Polycarp gives him eighty-six years at his death c. 155, so he was a young man in the 80s and 90s, while John was still in Asia.",
    sources: [
      "Irenaeus, Against Heresies 3.3.4",
      "Irenaeus, Letter to Florinus, via Eusebius, HE 5.20.4–8",
      "Irenaeus, Against Heresies 2.22.5 (John remaining until Trajan)",
      "Martyrdom of Polycarp 9 (his age)"
    ],
    caveat: "Polycarp’s own letter to the Philippians does not name John. The chain is Irenaeus’s testimony, written while Polycarp’s memory was still public in Asia and in Gaul." },

  { year: 95, label: "c. 95", title: "Revelation", book: true, image: "assets/ev-patmos.jpg",
    when: { critic: 95, habermas: 95, huff: 95 },
    whenLabel: { critic: "c. 90–95", habermas: "c. 95", huff: "c. 95" },
    summary: "Irenaeus: the vision seen “almost in our own generation, at the end of Domitian’s reign.” John on Patmos.",
    account: "Revelation 1:9: “I, John, your brother and companion in the tribulation… was on the island called Patmos on account of the word of God.” Irenaeus, Against Heresies 5.30.3, discussing the number of the beast: the vision “was seen not long ago, but almost in our own generation, at the end of Domitian’s reign.” Domitian dies in 96. Victorinus and Eusebius follow Irenaeus on the date. Conservative tradition then has John return to Ephesus after Domitian’s death.",
    sources: ["Revelation 1:9", "Irenaeus, Against Heresies 5.30.3", "Eusebius, HE 3.18; 3.20; 3.23"],
    views: {
      critic: "Usually the end of Domitian, c. 90–95; a minority prefers Nero’s 60s.",
      habermas: "Follows the Irenaean date around 95.",
      huff: "Same neighborhood: Patmos at the end of Domitian."
    } },

  { year: 96, label: "c. 96", title: "1 Clement", book: true, image: "assets/src-clement-rome.jpg",
    summary: "Rome writes to Corinth, naming Peter and Paul’s contests and “the letter of the blessed Paul.” Within living memory of the apostles.",
    account: "The church of Rome writes to the church of Corinth about a recent schism. Chapter 5 holds up Peter and Paul as examples “nearest to us.” Chapter 47 tells the Corinthians to take up “the letter of the blessed Paul the apostle,” written to them at the beginning of the gospel. The author writes as one who still stands in the generation that can point to the apostles’ deaths in his own city. Conservative dating, under Domitian or in the 90s, keeps the letter inside living memory.",
    sources: ["1 Clement 5; 47"] },

  { year: 100, label: "c. 98–100", title: "John remains until Trajan", short: "John’s end", image: "assets/apostle-john.jpg", kind: "inferred",
    summary: "Irenaeus: John remained among the disciples at Ephesus until the times of Trajan. Polycrates: he fell asleep at Ephesus.",
    account: "Irenaeus, Against Heresies 3.3.4: the church in Ephesus was founded by Paul, and John remained among them until the times of Trajan. AH 2.22.5: “all the elders who associated with John the disciple of the Lord in Asia bear witness” that John delivered this tradition, “for he remained with them until the times of Trajan.” Trajan accedes in 98. Polycrates of Ephesus, writing to Victor of Rome (Eusebius HE 5.24), names “John, who was both a witness and a teacher, who reclined upon the bosom of the Lord… and he fell asleep at Ephesus.” The beloved disciple’s last years and tomb are an Asian claim, independent of Irenaeus’s Smyrna memoir.",
    sources: [
      "Irenaeus, Against Heresies 2.22.5; 3.3.4",
      "Polycrates of Ephesus via Eusebius, HE 5.24"
    ] },

  { year: 107, label: "c. 107", title: "Ignatius meets Polycarp", short: "Ignatius at Smyrna", image: "assets/src-ignatius.jpg", kind: "inferred",
    summary: "On the road to Rome, Ignatius is received at Smyrna. He writes to Polycarp; Polycarp later forwards the letters.",
    account: "Ignatius of Antioch is sent in custody to the beasts at Rome. The letters from Smyrna (Ephesians, Magnesians, Trallians, Romans) and from Troas (Philadelphians, Smyrnaeans, Polycarp) name Peter and Paul, treat the gospel and the apostle as given, and address Polycarp as bishop of Smyrna. Polycarp’s letter to the Philippians 13 asks for news of Ignatius and says he is sending copies of Ignatius’s letters as requested. The two men meet in the flesh at Smyrna as the convoy passes — a living link between Antioch, Asia, and the memory of the apostles.",
    sources: ["Ignatius, To Polycarp; To the Smyrnaeans", "Polycarp, To the Philippians 13"] },

  { year: 108, label: "c. 107–117", title: "Ignatius martyred", short: "Ignatius", image: "assets/src-ignatius.jpg",
    summary: "Bishop of Antioch, sent to the beasts at Rome. His letters on the road name Peter and Paul and treat the gospels and Paul as given.",
    account: "Ignatius, To the Romans: he asks the church in the capital not to intervene, so that he may be “the wheat of God, ground by the teeth of the beasts.” Eusebius (HE 3.36) places the martyrdom under Trajan. The seven letters are the document; the beasts at Rome are the end of the road that passed through Smyrna.",
    sources: ["Ignatius, To the Romans", "Eusebius, HE 3.36"] },

  { year: 115, label: "c. 110–140", title: "Polycarp to the Philippians", short: "Polycarp writes", book: true, image: "assets/ev-scroll.jpg",
    summary: "The one surviving letter from the man Irenaeus calls a hearer of apostles. He quotes 1 Peter and Paul; he does not name John.",
    account: "Polycarp writes to Philippi after Ignatius’s passing. He weaves 1 Peter and the Pauline letters into his exhortation, calls Paul “the blessed and glorious Paul,” and in chapter 13 deals with the Ignatian correspondence. This is the first document we have from the Asian bishop who will later be martyred at Smyrna. It is also the honest limit of what Polycarp himself puts on the page: Paul and the gospel, not a named memoir of John.",
    sources: ["Polycarp, To the Philippians"],
    caveat: "The letter does not name John. Irenaeus is the one who records Polycarp’s intercourse with John; Polycarp’s own surviving page does not." },

  { year: 125, label: "c. 110–130", title: "Papias writing", short: "Papias", book: true, image: "assets/src-papias.jpg",
    summary: "Hierapolis. Mark as Peter’s interpreter; Matthew’s logia in Hebrew. Lost as a book; quoted by Eusebius.",
    account: "Papias, bishop of Hierapolis in the same Asian circle as Polycarp, wrote five books of Expositions of the Sayings of the Lord. The work is lost. Eusebius (HE 3.39) copies the preface: Papias asked those who had followed the elders what Andrew, Peter, Philip, Thomas, James, John, or Matthew had said, preferring the living voice to books. He reports Mark as Peter’s interpreter and Matthew’s logia in Hebrew. Irenaeus (AH 5.33.4) calls Papias a hearer of John and a companion of Polycarp. Eusebius disputes that Papias heard the apostle John, and distinguishes John the Elder. The fragments remain the earliest named account of how Mark and Matthew were written.",
    sources: ["Papias via Eusebius, HE 3.39", "Irenaeus, Against Heresies 5.33.4"],
    caveat: "Irenaeus calls Papias a hearer of John. Eusebius (HE 3.39) argues Papias did not hear the apostle, only the Elder. The disagreement is part of the record." },

  { year: 125.5, label: "c. 124–125", title: "Quadratus’s apology", short: "Quadratus", book: true, image: "assets/ev-scroll.jpg",
    summary: "Hadrian is in the East. Quadratus addresses an apology to the emperor and says some whom Jesus healed were still alive in his own day.",
    account: "Eusebius, HE 4.3: Quadratus addressed a discourse to Hadrian “because certain wicked men attempted to harass our people.” Eusebius quotes him: the works of the Saviour were always present, for they were true — those healed and those raised from the dead were seen not only when they were healed, but “were always present, and not merely while the Saviour was on earth, but also after his death they were alive for quite a while, so that some of them lived even to our day.” If genuine, this is a second-century claim that living witnesses of the miracles lasted into the early 100s.",
    sources: ["Quadratus via Eusebius, HE 4.3"] },

  { year: 150, label: "c. 135–155", title: "Irenaeus hears Polycarp", short: "Irenaeus as a boy", image: "assets/src-irenaeus.jpg", kind: "inferred",
    summary: "Smyrna. Irenaeus, still a boy, hears Polycarp in the house and later writes down what the old man said of John.",
    account: "The letter to Florinus (Eusebius HE 5.20) is Irenaeus’s own memory. He and Florinus had been together in lower Asia in Polycarp’s household. Irenaeus was still a boy; Florinus was trying to stand well at court. Irenaeus can describe the place Polycarp sat, his goings out and comings in, his manner of life, his bodily appearance, the discourses he delivered to the people, and how Polycarp would speak of his intercourse with John and with the others who had seen the Lord, and would remember their words. Against Heresies 3.3.4 repeats that Irenaeus saw Polycarp in his early youth. The date has to fall before Polycarp’s martyrdom c. 155, commonly in the 140s or about 150. This is the middle link of the chain: John → Polycarp → Irenaeus, and Irenaeus is the one who writes it down.",
    sources: [
      "Irenaeus, Letter to Florinus, via Eusebius, HE 5.20.4–8",
      "Irenaeus, Against Heresies 3.3.4"
    ] },

  { year: 153, label: "c. 150–155", title: "Justin writes", short: "Justin", book: true, image: "assets/src-justin.jpg",
    summary: "Rome. The First Apology and the Dialogue with Trypho: the Gospels as the apostles’ memoirs; John named as author of Revelation.",
    account: "Justin, teaching at Rome in the reign of Antoninus, addresses the emperor on behalf of the Christians and, in the Dialogue, argues from Scripture with a Jew named Trypho. He calls the Gospels “the memoirs of the apostles” and says they were read with the prophets in the Sunday assembly (1 Apology 66–67). Dialogue 81: “There was a certain man with us, whose name was John, one of the apostles of Christ, who prophesied, by a revelation that was made to him, that those who believed in our Christ would dwell a thousand years in Jerusalem.” Justin is martyred later, under the prefect Rusticus; the books already stand.",
    sources: ["Justin, First Apology 66–67", "Justin, Dialogue with Trypho 81"] },

  { year: 155, label: "c. 155–156", title: "Polycarp martyred", short: "Polycarp", image: "assets/src-polycarp.jpg",
    summary: "Smyrna. The Martyrdom of Polycarp. He is eighty-six. The hearings of John are already a generation behind him.",
    account: "The church of Smyrna writes the Martyrdom of Polycarp to the church of Philomelium. Polycarp is brought before the proconsul, confesses “I am a Christian,” and is burned. He says he has served Christ eighty-six years (Mart. Pol. 9). Irenaeus, who had heard him as a boy, is by this time in the West. Eusebius copies the martyrdom (HE 4.15).",
    sources: ["Martyrdom of Polycarp", "Eusebius, HE 4.15"] },

  { year: 165, label: "c. 165", title: "Justin martyred", short: "Justin", image: "assets/src-justin.jpg",
    summary: "Rome, under the prefect Rusticus. The books that named John’s Revelation already stand.",
    account: "The Acts of Justin record the hearing before Q. Junius Rusticus, prefect of Rome under Marcus Aurelius. Justin and companions refuse to sacrifice and are beheaded. His Dialogue 81 had already named “John, one of the apostles of Christ,” as the seer of Revelation — a Roman witness to the Asian apostle, independent of Irenaeus.",
    sources: ["Acts of Justin", "Justin, Dialogue 81"] },

  { year: 180, label: "c. 180", title: "Irenaeus, Against Heresies", short: "Irenaeus", book: true, image: "assets/src-irenaeus.jpg",
    summary: "Lyons. The fourfold gospel, the Pauline corpus, and the John–Polycarp–Irenaeus chain written down while the memory is still public.",
    account: "Irenaeus, bishop of Lyons, writes Against Heresies to name the church’s books against the Valentinians: four Gospels, no more, no fewer (AH 3.11.8); Matthew, Mark from Peter, Luke from Paul, John the disciple who leaned on the breast, published at Ephesus (3.1.1); the church of Ephesus and Polycarp of Smyrna as still-living proof of the apostolic tradition (3.3.4). He writes as a man who had heard Polycarp and who can still appeal to Asia. This is the document in which the chain becomes literature.",
    sources: ["Irenaeus, Against Heresies 3.1.1; 3.3.4; 3.11.8"] },

  { year: 192, label: "c. 180–200", title: "The Fish · Abercius", short: "Ichthys", image: "assets/find-ichthys.jpg", kind: "find",
    summary: "A Phrygian epitaph names the Fish from the fountain, bread, and mixed wine. The ichthys is in the ground by the late second century.",
    account: "The epitaph of Abercius (Avircius) of Hieropolis in Phrygia, fragments now in the Vatican, speaks of Faith setting before him everywhere “a fish from a fountain, enormous and pure, which a holy virgin grasped,” with wine mixed and bread — the eucharist in the language of the Fish. Abercius is commonly identified with Avircius Marcellus, known from Eusebius HE 5.16 in the reign of Marcus Aurelius. The Alexander epitaph of 216 copies his verses, which helps to date the original before that year. Tertullian, On Baptism 1 (c. 200), can already call Christians “little fishes” born in water after “our ΙΧΘΥΣ, Jesus Christ.” Fish and anchors also appear on Roman catacomb epitaphs of the late second and early third centuries (among them Licinia Amias). The symbol is not a first-century carving; it is securely in stone by Abercius’s generation.",
    sources: ["Epitaph of Abercius", "Tertullian, On Baptism 1", "Eusebius, HE 5.16"],
    caveat: "Identifiable Christian fish-symbols in art and stone belong to the second half of the second century onward, not to the apostolic decades." },

  { year: 190, label: "c. 190–195", title: "Polycrates to Victor", short: "Polycrates", book: true, image: "assets/ev-scroll.jpg",
    summary: "The bishop of Ephesus writes to Victor of Rome. John the beloved disciple “fell asleep at Ephesus.” Philip of the Twelve at Hierapolis.",
    account: "Eusebius, HE 5.24, copies Polycrates’ letter in the Quartodeciman dispute. Polycrates lists the “great lights” of Asia who kept the 14th of Nisan: Philip, one of the Twelve, who fell asleep at Hierapolis, and two of his daughters; “John, who was both a witness and a teacher, who reclined upon the bosom of the Lord… for he was a priest wearing the sacerdotal plate, and a witness and a teacher; he fell asleep at Ephesus”; then Polycarp at Smyrna, Thraseas, Sagaris, Papirius, Melito. This is an Asian catalog, not Irenaeus’s Gaul memoir — a second, independent placement of John’s tomb at Ephesus.",
    sources: ["Polycrates of Ephesus via Eusebius, HE 5.24"] },

  { year: 197, label: "c. 197", title: "Tertullian, Apology", short: "Tertullian", book: true, image: "assets/src-tertullian.jpg",
    summary: "Carthage. A Latin advocate names the apostles’ deaths at Rome and treats the church’s books as already ancient.",
    account: "Tertullian’s Apology addresses the Roman magistrates of North Africa. Prescription against Heretics 36: Rome can show the places where Peter’s and Paul’s blood was shed. Against Marcion and the other treatises assume a received Pauline corpus and four Gospels. He is a generation after Irenaeus, writing in Latin, from another shore of the sea — the same Peter, Paul, and church.",
    sources: ["Tertullian, Apology", "Tertullian, Prescription 36"] },

  { year: 200, label: "c. 180–215", title: "Clement of Alexandria", short: "Clement", book: true, image: "assets/src-clement-alex.jpg",
    summary: "The catechetical school. Mark written at Rome at the hearers’ request; John urged to write a spiritual Gospel.",
    account: "Eusebius, HE 2.15 and 6.14, copies Clement’s Hypotyposeis: the occasion of Mark was Peter’s preaching at Rome; those who heard him begged Mark to write; Peter neither forbade nor urged it. Last of all John, seeing that the outward facts had been set forth in the Gospels, was urged by disciples and by the Spirit to write a spiritual Gospel. Clement stands in Egypt, not Asia, and still tells the same two stories — Mark from Peter, John at the end.",
    sources: ["Clement of Alexandria via Eusebius, HE 2.15; 6.14"] },

  { year: 201, label: "c. 190–220", title: "Alexamenos graffito", short: "Alexamenos", image: "assets/find-alexamenos.jpg", kind: "find",
    summary: "Palatine Hill, Rome. A servant of Caesar’s household is mocked for worshipping a crucified god. The earliest surviving picture of the cross as a Christian scandal.",
    account: "Scratched in plaster in the Paedagogium on the Palatine, a room used by imperial pages. A figure stands before a crucified man with a donkey’s head; the Greek reads, in substance, “Alexamenos worships [his] god.” The wall-paintings of the room and the palaeography of the graffiti point to the late second or early third century, most often around 200. Tertullian, Apology 16 and To the Nations 1.14, already knows the pagan jibe that Christians worshiped an ass’s head. The drawing is mockery, not devotion: it shows that in Rome a crucified Jesus was known as a god some Christians would worship, and that outsiders thought it absurd. The slab is now in the Palatine Museum.",
    sources: ["Palatine graffito, Paedagogium, Palatine Museum", "Tertullian, Apology 16", "Tertullian, To the Nations 1.14"],
    caveat: "Dates proposed for the scratch run from the late first century to the late third; the beginning of the third is the usual judgment." },

  { year: 203, label: "c. 202–203", title: "Perpetua and Felicity", short: "Perpetua", image: "assets/ev-arena.jpg",
    summary: "Carthage. The Passion of Perpetua. North African martyrdom under Septimius Severus; the church keeps the acta.",
    account: "The Passion of Perpetua and Felicity includes Perpetua’s own prison diary and an editor’s account of the arena. Vibia Perpetua, a young catechumen of good family, and the slave Felicity are thrown to the beasts at Carthage in the games, commonly dated 203. Tertullian’s Africa now has its own acta, as Smyrna had the Martyrdom of Polycarp.",
    sources: ["Passion of Perpetua and Felicity"] },

  { year: 230, label: "c. 220–250", title: "Origen writing", short: "Origen", book: true, image: "assets/src-origen.jpg",
    summary: "Alexandria, then Caesarea. Commentaries, the Hexapla, and the notice that Peter was crucified and Paul beheaded.",
    account: "Eusebius, HE 6, is our narrative of Origen: the school at Alexandria, the Hexapla, the move to Caesarea, the commentaries on John, Matthew, and Romans. In HE 3.1 Eusebius copies Origen’s commentary on Genesis for the apostles’ fields and for Peter’s upside-down crucifixion and Paul’s beheading. Origen treats the four Gospels and the Pauline corpus as given. He will later suffer in the Decian persecution and die of the effects (HE 6.39).",
    sources: ["Origen via Eusebius, HE 3.1; 6"] },

  { year: 232, label: "c. 230", title: "Megiddo mosaic", short: "Megiddo", image: "assets/find-megiddo.jpg", kind: "find",
    summary: "A prayer hall at Kefar ‘Othnay, beside the camp of Legio VI Ferrata. Two fish in the pavement, and a table offered “to God Jesus Christ.”",
    account: "Excavated at Megiddo Prison in 2005. A mosaic floor in a modest hall used by Christians attached to the Roman Sixth Legion. One panel shows two fish. An inscription names the God-loving Akeptous, who “has offered the table to God Jesus Christ as a memorial.” Coins, pottery, and letter-forms are commonly read around 230; the floor was later covered, perhaps in the years of Diocletian. This is among the earliest Christian floor mosaics we have — not a first-century church, and not later Constantinian basilica art, but a third-century hall that already calls Jesus God in stone.",
    sources: ["Megiddo / Kefar ‘Othnay mosaic inscriptions", "Israel Antiquities Authority, 2005 excavation"],
    caveat: "A minority would date the hall later in the third century or after. The excavators’ working date is c. 230." },

  { year: 241, label: "c. 232–256", title: "Dura-Europos baptistery", short: "Dura", image: "assets/find-dura.jpg", kind: "find",
    summary: "On the Euphrates, a house is remodeled for Christian assembly. The baptistery walls show the Good Shepherd, the paralytic, and Christ walking on the water — the oldest surviving church paintings.",
    account: "Dura-Europos, a frontier city destroyed when the Sasanians took it in the 250s. A private house was converted around 240: an assembly room, a baptistery with a font. The paintings, now at Yale, are the earliest church wall-pictures yet found: Christ as shepherd with a ram; the healing of the paralytic; Christ and Peter on the sea; the women at the tomb. They sit more than seventy years before Constantine. The art is not mosaic; it is painted plaster in a house-church on the eastern edge of the empire.",
    sources: ["Dura-Europos Christian building, Yale University Art Gallery", "Excavations of Yale and the French Academy, 1931–32"] },

  { year: 250, label: "250", title: "Decian persecution", short: "Decius", image: "assets/ev-altar.jpg",
    summary: "Empire-wide demand for sacrifice. Origen suffers. The church’s books are already old enough to be hunted.",
    account: "Decius requires a certificate of sacrifice from the inhabitants of the empire. Cyprian at Carthage and Dionysius at Alexandria describe the lapsed and the confessors. Eusebius HE 6.39: Origen is imprisoned and tortured under Decius and dies later of the effects, in the reign of Gallus. A church that can be asked for its books is a church whose Scriptures are already a public object.",
    sources: ["Eusebius, HE 6.39–41", "Cyprian, On the Lapsed"] },

  { year: 258, label: "258", title: "Cyprian martyred", short: "Cyprian", image: "assets/ev-sword.jpg",
    summary: "Carthage, under Valerian. The bishop who had steered the church through Decius is beheaded.",
    account: "The Acta Proconsularia of Cyprian record the hearing before the proconsul Galerius Maximus on 14 September 258. Cyprian confesses that he is a Christian and a bishop, refuses to sacrifice, and is beheaded. His letters and treatises — On the Lapsed, On the Unity of the Church — are already in circulation. North Africa now has a bishop-martyr in the line of Perpetua’s acta.",
    sources: ["Acta Proconsularia of St Cyprian", "Cyprian, letters"] },

  { year: 268, label: "c. 260–280", title: "Chi-Rho on gems", short: "Chi-Rho", image: "assets/find-chirho.jpg", kind: "find",
    summary: "Before the labarum is public, the chi-rho already marks Christian gems in the Greek East.",
    account: "The chi-rho — chi and rho of Χριστός laid together — was a Greek abbreviation long before it was a church emblem. As a free-standing Christian sign it appears on gems from Asia Minor and Syria in the later third century, a generation or more before Constantine’s vision. Catacomb chi-rhos in Rome are harder to date; many that look early have been argued down into the fourth century. What is secure is that the monogram is not invented in 312. Constantine makes it imperial and visible. The stones show it was already a private Christian mark in the East.",
    sources: ["Jeffrey Spier, Late Antique and Early Christian Gems", "Lactantius, On the Deaths of the Persecutors 44 (the public sign in 312)"],
    caveat: "A public, dated chi-rho on an inscription or coin belongs to Constantine’s century. The earlier evidence is small objects, not basilica floors." },

  { year: 303, label: "303", title: "Great Persecution", short: "Diocletian", image: "assets/ev-burn.jpg",
    summary: "Diocletian. Eusebius is an eyewitness of churches razed and scriptures burned — and of the copies that survived.",
    account: "Eusebius, Church History 8: in the nineteenth year of Diocletian an edict is posted to tear down the churches and burn the Scriptures. Eusebius writes as one who saw the houses of prayer thrown down from top to bottom and the holy Scriptures committed to the flames in the marketplaces. The persecution runs, with pauses, until 311. The books hunted are the same Gospels and letters Irenaeus had named a hundred and twenty years before.",
    sources: ["Eusebius, HE 8.2; 8.2–6"] },

  { year: 312, label: "312", title: "Constantine at the Milvian Bridge", short: "Constantine", image: "assets/ev-labarum.jpg",
    summary: "Constantine defeats Maxentius at the Tiber. He has the chi-rho marked on the soldiers’ shields. The persecuting empire begins to change hands.",
    account: "28 October 312. Lactantius, On the Deaths of the Persecutors 44: Constantine is directed in a dream to mark the heavenly sign of God on the shields — the chi-rho — and he defeats Maxentius at the Milvian Bridge. Eusebius, Life of Constantine 1.28–31, writing later, tells of a cross of light in the sky with the words “by this conquer,” and of the labarum made from the sign. However the vision is weighed, this is Constantine’s victory in the West, the first Roman emperor to fight under a Christian monogram.",
    sources: ["Lactantius, On the Deaths of the Persecutors 44", "Eusebius, Life of Constantine 1.28–31"] },

  { year: 313, label: "313", title: "Constantine · Edict of Milan", short: "Milan", image: "assets/ev-labarum.jpg",
    summary: "Constantine and Licinius restore legal standing to the church. Confiscated buildings are to be given back.",
    account: "Lactantius, On the Deaths of the Persecutors 48, and Eusebius, HE 10.5, preserve the letter issued in 313 after Constantine and Licinius met: Christians and all others are to have free power to follow their religion; places taken from the churches are to be restored. It is not yet an established state church. It is the end of the age in which the ordinary lot of the churches was the magistrate and the fire. Constantine now rules the West as a patron of the church he had marked on his shields the year before.",
    sources: ["Lactantius, On the Deaths of the Persecutors 48", "Eusebius, HE 10.5"] },

  { year: 315, label: "c. 313–318", title: "Constantine’s Lateran", short: "Lateran", image: "assets/ev-labarum.jpg",
    summary: "The emperor gives the church a basilica in Rome, on the Lateran, where the prefect of the city had sat.",
    account: "After the victory in the West, Constantine endows the church in Rome with the basilica that will be called St John Lateran — the first great public church in the capital, raised on the site of the Lateran palace. Eusebius, Life of Constantine 3, records the emperor’s church-building more fully in the East; the Roman gift is the tradition of the Liber Pontificalis and of the building itself. A persecuted assembly that had met in houses now has an imperial nave inside the city of Peter and Paul.",
    sources: ["Eusebius, Life of Constantine 3.25–40", "Liber Pontificalis, Life of Sylvester"] },

  { year: 324, label: "c. 313–325", title: "Eusebius, Church History", short: "Eusebius", book: true, image: "assets/src-eusebius.jpg",
    summary: "Caesarea. The library that keeps Papias, Hegesippus, Dionysius, the letter to Florinus, Polycrates, and the rest from dropping out of the line.",
    account: "Eusebius of Caesarea compiles the Church History in successive editions across these years. Without his quotations, Papias’s preface, Irenaeus’s letter to Florinus, Polycrates to Victor, Quadratus’s sentence about the healed, and Origen on Peter and Paul would be gone or far thinner. He is a source and a witness: he has lived through the Great Persecution and the legalizing of the church, and he writes the chain down at the library in Caesarea as the bishops gather toward Nicaea.",
    sources: ["Eusebius, Church History"] },

  { year: 325, label: "325", title: "Council of Nicaea", short: "Nicaea", image: "assets/icon-nicaea.jpg",
    summary: "Constantine summons the bishops. The creed concerning the Son is settled.",
    account: "Eusebius, Life of Constantine 3: Constantine, now master of the whole empire after Licinius’s fall in 324, gathers the bishops at Nicaea. More than two hundred attend; the emperor is present. The question is the Son’s relation to the Father. The creed is issued, with anathemas. The age of public martyrdom as the church’s ordinary lot is over. The Gospels, the letters, and the memory of the apostles are by then the church’s received inheritance.",
    sources: ["Eusebius, Life of Constantine 3", "The creed of Nicaea"] }
];
