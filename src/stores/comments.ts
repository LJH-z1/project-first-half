import { defineStore } from 'pinia'
import { mockComments } from '@/services/mockData'
interface Comment {
  id: number
  newsId: number
  username: string
  vote: 'fake' | 'real'
  comment: string
  imageUrl?: string
  timestamp: string
}

interface CommentState {
  comments: Comment[]
}

export const useCommentStore = defineStore('comments', {
  state: (): CommentState => ({
    comments: mockComments
  }),

  actions: {
    addComment(comment: Omit<Comment, 'id'>) {
      const newComment: Comment = {
        ...comment,
        id: Math.max(...this.comments.map(c => c.id), 0) + 1
      }
      this.comments.unshift(newComment)
    },

    getCommentsByNewsId(newsId: number) {
      return this.comments.filter(comment => comment.newsId === newsId)
    }
  }
})