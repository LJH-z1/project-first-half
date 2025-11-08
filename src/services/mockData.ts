import { News, Comment } from '../types/index'

export const mockNews: News[] = [
  {
    id: 1,
    title: 'Scientists Discover New Method to Cure Cancer',
    shortDescription: 'A research team claims to have found a breakthrough method to completely cure cancer...',
    fullDescription: 'Detailed description: Recent reports suggest that an international research team claims to have found a method to completely cure cancer through gene editing technology. The method is said to eliminate cancer cells within 24 hours with no side effects. However, medical experts remain skeptical and require more clinical data for verification.',
    status: 'pending',
    reporter: 'Health Times',
    date: '2024-01-15',
    time: '14:30',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    voteCount: { fake: 45, real: 23 }
  },
  {
    id: 2,
    title: 'UFO Sighting Reported in Local Area',
    shortDescription: 'Multiple witnesses claim to have seen glowing unidentified flying objects in the night sky...',
    fullDescription: 'Detailed description: Last night, multiple citizens reported seeing glowing unidentified flying objects in the night sky, arranged in triangular formation and moving at high speed. The observatory suggested it might be satellites or weather balloons, but the exact cause is still under investigation.',
    status: 'fake',
    reporter: 'City Express',
    date: '2024-01-14',
    time: '20:15',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    voteCount: { fake: 89, real: 12 }
  },
  {
    id: 3,
    title: 'Government Announces New Economic Stimulus Plan',
    shortDescription: 'To promote economic development, the government will launch a new round of economic stimulus measures...',
    fullDescription: 'Detailed description: The government officially announced a new economic stimulus plan today, including tax cuts, infrastructure investment, and support for small and medium enterprises, which is expected to create numerous job opportunities.',
    status: 'real',
    reporter: 'People\'s Daily',
    date: '2024-01-13',
    time: '09:00',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    voteCount: { fake: 8, real: 156 }
  },
  {
    id: 4,
    title: 'New Study Reveals Benefits of Mediterranean Diet',
    shortDescription: 'Recent research shows significant health benefits from following a Mediterranean diet...',
    fullDescription: 'Detailed description: A comprehensive study involving 10,000 participants over five years demonstrates that the Mediterranean diet can reduce heart disease risk by 30% and improve overall longevity. The diet emphasizes fruits, vegetables, whole grains, and healthy fats.',
    status: 'real',
    reporter: 'Nutrition Journal',
    date: '2024-01-12',
    time: '11:45',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    voteCount: { fake: 15, real: 203 }
  },
  {
    id: 5,
    title: 'Celebrity Spotted with Alien Being',
    shortDescription: 'Famous actor reportedly seen having dinner with extraterrestrial visitor...',
    fullDescription: 'Detailed description: Unverified sources claim that a well-known Hollywood actor was photographed having dinner with an alien being at a private restaurant. The images circulating online appear to be digitally altered, and the actor\'s representatives have denied the claims.',
    status: 'fake',
    reporter: 'Entertainment Weekly',
    date: '2024-01-11',
    time: '18:20',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    voteCount: { fake: 267, real: 23 }
  },
  {
    id: 6,
    title: 'Breakthrough in Renewable Energy Storage',
    shortDescription: 'New battery technology promises to revolutionize renewable energy storage capabilities...',
    fullDescription: 'Detailed description: Researchers have developed a new type of battery that can store solar and wind energy for extended periods, potentially solving the intermittency issues of renewable energy sources. The technology uses abundant, non-toxic materials and has shown promising results in lab tests.',
    status: 'real',
    reporter: 'Science Daily',
    date: '2024-01-10',
    time: '13:15',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    voteCount: { fake: 12, real: 178 }
  },
  {
    id: 7,
    title: 'Local School Achieves 100% Graduation Rate',
    shortDescription: 'A public high school reports unprecedented success with all students graduating this year...',
    fullDescription: 'Detailed description: Lincoln High School has achieved a remarkable 100% graduation rate, with all 250 seniors successfully completing their studies. The school attributes this success to innovative teaching methods and comprehensive student support programs.',
    status: 'real',
    reporter: 'Education Today',
    date: '2024-01-09',
    time: '10:30',
    imageUrl: 'https://picsum.photos/600/400?random=7',
    voteCount: { fake: 5, real: 89 }
  },
  {
    id: 8,
    title: 'Miraculous Recovery from Comma After 10 Years',
    shortDescription: 'Patient wakes up from decade-long coma with perfect memory and health...',
    fullDescription: 'Detailed description: A patient who had been in a coma for 10 years reportedly woke up with no memory loss or physical impairment. Medical experts are calling it a medical miracle, though some neurologists question the validity of the claims due to lack of published medical records.',
    status: 'fake',
    reporter: 'Medical Marvels',
    date: '2024-01-08',
    time: '16:45',
    imageUrl: 'https://picsum.photos/600/400?random=8',
    voteCount: { fake: 312, real: 18 }
  },
  {
    id: 9,
    title: 'New Public Transportation System to Reduce Traffic',
    shortDescription: 'City announces ambitious plan for underground hyperloop transportation network...',
    fullDescription: 'Detailed description: The city council has approved plans for a revolutionary underground hyperloop system that promises to reduce commute times by 80%. The project is scheduled to begin construction next year and expected to be completed within five years.',
    status: 'pending',
    reporter: 'Urban Development News',
    date: '2024-01-07',
    time: '08:20',
    imageUrl: 'https://picsum.photos/600/400?random=9',
    voteCount: { fake: 67, real: 45 }
  },
  {
    id: 10,
    title: 'Ancient Civilization Discovered Under Amazon Rainforest',
    shortDescription: 'Archaeologists uncover remains of previously unknown ancient civilization...',
    fullDescription: 'Detailed description: Using advanced satellite imaging and ground-penetrating radar, archaeologists have discovered the remains of a sophisticated ancient civilization buried deep beneath the Amazon rainforest. The findings could rewrite our understanding of pre-Columbian South America.',
    status: 'real',
    reporter: 'Archaeology Today',
    date: '2024-01-06',
    time: '14:10',
    imageUrl: 'https://picsum.photos/600/400?random=10',
    voteCount: { fake: 23, real: 145 }
  },
  {
    id: 11,
    title: 'Free Energy Device Claims to Defy Physics',
    shortDescription: 'Inventor demonstrates device that allegedly generates unlimited free electricity...',
    fullDescription: 'Detailed description: An independent inventor has demonstrated a device that supposedly generates electricity without any fuel input. While the demonstration was impressive, physicists have pointed out multiple violations of thermodynamic laws and suspect hidden power sources.',
    status: 'fake',
    reporter: 'Tech Frontier',
    date: '2024-01-05',
    time: '19:30',
    imageUrl: 'https://picsum.photos/600/400?random=11',
    voteCount: { fake: 423, real: 9 }
  },
  {
    id: 12,
    title: 'Global Initiative to Plant One Trillion Trees',
    shortDescription: 'International coalition launches massive reforestation project to combat climate change...',
    fullDescription: 'Detailed description: A coalition of 50 countries has committed to planting one trillion trees worldwide over the next decade. The initiative aims to restore degraded ecosystems and significantly reduce atmospheric carbon dioxide levels.',
    status: 'real',
    reporter: 'Environmental Watch',
    date: '2024-01-04',
    time: '11:00',
    imageUrl: 'https://picsum.photos/600/400?random=12',
    voteCount: { fake: 8, real: 234 }
  },
  {
    id: 13,
    title: 'Time Travel Experiment Successfully Sends Object 5 Minutes into Future',
    shortDescription: 'Research team claims breakthrough in temporal physics with successful time displacement...',
    fullDescription: 'Detailed description: A university research team claims to have successfully sent a small object five minutes into the future. However, the scientific community remains highly skeptical as the results have not been independently verified and appear to contradict established physics principles.',
    status: 'fake',
    reporter: 'Quantum Frontiers',
    date: '2024-01-03',
    time: '15:45',
    imageUrl: 'https://picsum.photos/600/400?random=13',
    voteCount: { fake: 567, real: 15 }
  },
  {
    id: 14,
    title: 'New AI System Can Predict Natural Disasters with 95% Accuracy',
    shortDescription: 'Artificial intelligence platform shows remarkable ability to forecast earthquakes and storms...',
    fullDescription: 'Detailed description: Researchers have developed an AI system that analyzes seismic data, atmospheric conditions, and historical patterns to predict natural disasters with unprecedented accuracy. The technology could save thousands of lives by providing early warnings.',
    status: 'pending',
    reporter: 'Tech Innovation Review',
    date: '2024-01-02',
    time: '09:15',
    imageUrl: 'https://picsum.photos/600/400?random=14',
    voteCount: { fake: 78, real: 67 }
  },
  {
    id: 15,
    title: 'Local Community Garden Breaks World Record for Vegetable Yield',
    shortDescription: 'Urban gardening project produces record-breaking harvest using innovative techniques...',
    fullDescription: 'Detailed description: A community garden in the city center has broken the world record for vegetable yield per square meter. Using vertical farming and advanced hydroponics, the project demonstrates the potential of urban agriculture to address food security issues.',
    status: 'real',
    reporter: 'Urban Farming Digest',
    date: '2024-01-01',
    time: '12:00',
    imageUrl: 'https://picsum.photos/600/400?random=15',
    voteCount: { fake: 12, real: 156 }
  }

]

export const mockComments: Comment[] = [
  {
    id: 1,
    newsId: 1,
    username: 'Medical Expert',
    vote: 'fake', 
    comment: 'This method lacks scientific basis. No current gene editing technology can achieve such results.',
    timestamp: '2024-01-15 16:20'
  },
  {
    id: 2,
    newsId: 1,
    username: 'Tech Enthusiast',
    vote: 'real',
    comment: 'If true, this would be a major breakthrough in medical science!',
    timestamp: '2024-01-15 15:45'
  },
  {
    id: 3,
    newsId: 2,
    username: 'Sky Watcher',
    vote: 'fake',
    comment: 'These are clearly Starlink satellites, not UFOs. The triangular formation is typical of satellite trains.',
    timestamp: '2024-01-14 21:30'
  },
  {
    id: 4,
    newsId: 3,
    username: 'Economist',
    vote: 'real',
    comment: 'The stimulus plan aligns with current economic needs and follows established policy frameworks.',
    timestamp: '2024-01-13 10:15'
  },
  {
    id: 5,
    newsId: 4,
    username: 'Nutritionist',
    vote: 'real',
    comment: 'The Mediterranean diet has been extensively studied and these findings are consistent with previous research.',
    timestamp: '2024-01-12 14:20'
  },
  {
    id: 6,
    newsId: 5,
    username: 'Skeptic',
    vote: 'fake',
    comment: 'This story has all the hallmarks of a publicity stunt. No credible evidence has been presented.',
    timestamp: '2024-01-11 19:45'
  },
  {
    id: 7,
    newsId: 6,
    username: 'Energy Researcher',
    vote: 'real',
    comment: 'The research paper has been peer-reviewed and the methodology appears sound. Promising development!',
    timestamp: '2024-01-10 15:30'
  },
  {
    id: 8,
    newsId: 7,
    username: 'Education Analyst',
    vote: 'real',
    comment: 'I\'ve visited this school and can confirm their innovative approach to education is producing results.',
    timestamp: '2024-01-09 12:15'
  },
  {
    id: 9,
    newsId: 8,
    username: 'Neurologist',
    vote: 'fake',
    comment: 'As a neurologist, I can say this claim contradicts everything we know about brain injury recovery.',
    timestamp: '2024-01-08 18:20'
  },
  {
    id: 10,
    newsId: 9,
    username: 'Urban Planner',
    vote: 'real', 
    comment: 'The technology shows promise, but the timeline seems overly optimistic given infrastructure challenges.',
    timestamp: '2024-01-07 14:45'
  },
  {
    id: 11,
    newsId: 10,
    username: 'Archaeology Student',
    vote: 'real',
    comment: 'The satellite evidence is compelling and matches patterns seen in other ancient sites.',
    timestamp: '2024-01-06 16:30'
  },
  {
    id: 12,
    newsId: 11,
    username: 'Physics Professor',
    vote: 'fake',
    comment: 'This violates the first law of thermodynamics. Perpetual motion machines are physically impossible.',
    timestamp: '2024-01-05 21:10'
  },
  {
    id: 13,
    newsId: 12,
    username: 'Environmental Scientist',
    vote: 'real',
    comment: 'Reforestation is one of the most effective strategies we have for carbon sequestration.',
    timestamp: '2024-01-04 13:25'
  },
  {
    id: 14,
    newsId: 13,
    username: 'Theoretical Physicist',
    vote: 'fake',
    comment: 'Time travel to the future is theoretically possible, but this demonstration lacks proper controls.',
    timestamp: '2024-01-03 17:40'
  },
  {
    id: 15,
    newsId: 14,
    username: 'Data Scientist',
    vote: 'real', 
    comment: 'The AI model shows impressive results, but we need to see how it performs with real-world data.',
    timestamp: '2024-01-02 11:55'
  },
  {
    id: 16,
    newsId: 15,
    username: 'Agricultural Expert',
    vote: 'real',
    comment: 'I\'ve reviewed their methods and the yield numbers are verified. This could revolutionize urban farming.',
    timestamp: '2024-01-01 14:20'
  },
  {
    id: 17,
    newsId: 1,
    username: 'Science Student',
    vote: 'fake',
    comment: 'The claims are too extraordinary without extraordinary evidence.',
    timestamp: '2024-01-15 17:30'
  },
  {
    id: 18,
    newsId: 2,
    username: 'Astronomy Enthusiast',
    vote: 'fake',
    comment: 'I was there that night. Those were definitely satellites, not UFOs.',
    timestamp: '2024-01-14 22:15'
  },
  {
    id: 19,
    newsId: 3,
    username: 'Business Owner',
    vote: 'real',
    comment: 'This stimulus plan will really help small businesses like mine recover.',
    timestamp: '2024-01-13 11:20'
  },
  {
    id: 20,
    newsId: 4,
    username: 'Dietitian',
    vote: 'real',
    comment: 'As a practicing dietitian, I can confirm these findings align with clinical observations.',
    timestamp: '2024-01-12 15:45'
  }
]