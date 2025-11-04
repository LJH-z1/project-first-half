// src/types/index.ts

interface News {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  status: 'fake' | 'real' | 'pending'
  reporter: string
  date: string
  time: string
  imageUrl?: string
  voteCount: {
    fake: number
    real: number
  }
}

interface Comment {
  id: number
  newsId: number
  username: string
  vote: 'fake' | 'real'
  comment: string
  imageUrl?: string
  timestamp: string
}

interface NewsState {
  news: News[]
  filteredNews: News[]
  currentNews: News | null
}

interface CommentState {
  comments: Comment[]
}

export type { News, Comment, NewsState, CommentState }