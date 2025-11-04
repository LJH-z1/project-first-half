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
  }
]