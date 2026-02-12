const galleryImages = [
  // BEACHES
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=1200&q=80",
    title: "Mirissa Beach",
    category: "Beach",
    description:
      "Mirissa Beach is one of Sri Lanka's most captivating coastal destinations, famous for its pristine golden sands and dramatic rocky outcrops. This crescent-shaped beach offers the perfect blend of relaxation and adventure, with excellent whale and dolphin watching opportunities, vibrant beach bars, and stunning sunsets that paint the sky in brilliant orange and pink hues.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80",
    title: "Unawatuna Beach",
    category: "Beach",
    description:
      "Unawatuna Beach is a gem nestled on Sri Lanka's south coast, featuring crystal-clear turquoise waters and a sheltered bay perfect for swimming and snorkeling. With vibrant coral reefs teeming with marine life, historic temples overlooking the beach, and a lively atmosphere filled with beachfront restaurants and water sports, Unawatuna offers an unforgettable coastal experience.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&q=80",
    title: "Bentota Beach",
    category: "Beach",
    description:
      "Bentota Beach is a stunning stretch of pristine white sand backed by swaying coconut palms and azure waters. This popular destination offers excellent water sports facilities, luxurious resorts, serene river lagoons, and a perfect setting for water activities like jet skiing, windsurfing, and boat tours through the picturesque mangrove forests.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80",
    title: "Arugam Bay Beach",
    category: "Beach",
    description:
      "Arugam Bay on Sri Lanka's east coast is a surfer's paradise with consistent waves and a laid-back beach town vibe. Known for its excellent surf breaks, beautiful beaches, and emerging hospitality scene, Arugam Bay attracts adventure seekers and beach enthusiasts looking for authentic Sri Lankan coastal experiences.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&q=80",
    title: "Tangalle Beach",
    category: "Beach",
    description:
      "Tangalle Beach features unspoiled coastline with golden sands, swaying palm trees, and peaceful waves. This tranquil southern beach offers a serene escape from crowds, with opportunities for turtle watching, exploring rock pools, and enjoying fresh seafood while experiencing authentic Sri Lankan coastal village life.",
  },

  // MOUNTAINS
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    title: "Adam's Peak (Sri Pada)",
    category: "Mountain",
    description:
      "Adam's Peak is Sri Lanka's most sacred mountain, revered by Buddhists, Hindus, and Muslims alike. The legendary 2,243-meter summit features a distinctive cone shape and offers a challenging pre-dawn trek rewarded with breathtaking panoramic views of the surrounding misty highlands, pilgrimage pathways, and the iconic light phenomenon called the Shadow of the Peak.",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80",
    title: "Ella Rock",
    category: "Mountain",
    description:
      "Ella Rock is a stunning mountain formation in the heart of Sri Lanka's tea country, offering magnificent views of verdant valleys and distant peaks. The moderate hiking trail winds through lush plantations and scenic villages, leading to breathtaking vistas that showcase the island's natural beauty, tea terraces, and misty mountain landscapes.",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    title: "Horton Plains National Park",
    category: "Mountain",
    description:
      "Horton Plains is a stunning highland plateau featuring World's End cliff with a 870-meter vertical drop, Baker's Falls waterfall, and unique cloud forests. This UNESCO World Heritage Site offers incredible biodiversity, including endemic species, rolling grasslands, and misty landscapes perfect for hiking and nature photography.",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    title: "Knuckles Mountain Range",
    category: "Mountain",
    description:
      "The Knuckles Mountain Range is named for its resemblance to a clenched fist, offering dramatic peaks, deep valleys, and pristine wilderness. This UNESCO World Heritage Site features diverse ecosystems, endemic wildlife, challenging hiking trails, traditional mountain villages, and spectacular views across Sri Lanka's central highlands.",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    title: "Nuwara Eliya Tea Country",
    category: "Mountain",
    description:
      "Nuwara Eliya is Sri Lanka's premier hill station, nestled at 1,868 meters in the central highlands. This charming colonial town features temperate climate, verdant tea plantations, historic architecture, and serves as the gateway to mountain explorations with stunning scenic drives through misty highlands and emerald valleys.",
  },

  // ANCIENT PLACES
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1200&q=80",
    title: "Sigiriya Rock Fortress",
    category: "Ancient Place",
    description:
      "Sigiriya, the iconic rock fortress, is one of Asia's most impressive ancient monuments. This 200-meter-tall rock column bears the ruins of a 5th-century palace with sophisticated water gardens, frescoes, and stunning views from the summit. The challenging climb rewards visitors with breathtaking panoramic views and a glimpse into ancient Sri Lankan engineering and artistry.",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&q=80",
    title: "Polonnaruwa Ancient City",
    category: "Ancient Place",
    description:
      "Polonnaruwa is a UNESCO World Heritage Site featuring the impressive ruins of Sri Lanka's second ancient capital, dating back to the 12th century. Spread across a vast area, it showcases remarkable stone structures, intricate carvings, ancient reservoirs, and temples that reveal the architectural brilliance and cultural sophistication of medieval Sri Lanka.",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=1200&q=80",
    title: "Dambulla Cave Temple",
    category: "Ancient Place",
    description:
      "The Dambulla Cave Temple is a magnificent Buddhist sanctuary carved into a hillside, featuring over 150 Buddha statues and stunning murals dating back more than 2,000 years. This UNESCO Site comprises five caves filled with centuries of religious artwork and artifacts, offering a profound glimpse into Sri Lanka's spiritual heritage and artistic traditions.",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80",
    title: "Anuradhapura Sacred City",
    category: "Ancient Place",
    description:
      "Anuradhapura is one of the oldest inhabited cities in the world and a primary pilgrimage site for Buddhists worldwide. This ancient capital, dating back over 2,500 years, features the sacred Sri Maha Bodhi tree, monumental stupas, ancient monasteries, and intricate irrigation systems that demonstrate remarkable engineering and spiritual devotion.",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1200&q=80",
    title: "Temple of the Tooth, Kandy",
    category: "Ancient Place",
    description:
      "The Temple of the Tooth in Kandy is Buddhism's most sacred shrine, housing a relic believed to be the Buddha's tooth. This stunning golden-roofed temple is situated on the banks of Kandy Lake and features ornate architecture, ancient courtyards, and hosts the grand Esala Perahera festival, one of Asia's most spectacular processions.",
  },
];

export default galleryImages;
