import { defineStore } from 'pinia'
import { News, NewsState } from '@/types/index'
import { mockNews } from '@/services/mockData'

export const useNewsStore = defineStore('news', {
  state: (): NewsState => ({
    news: mockNews,
    filteredNews: mockNews,
    currentNews: null
  }),

  actions: {
    setCurrentNews(news: News | null) {
      this.currentNews = news
    },

    filterNews(status: 'all' | 'fake' | 'real' | 'pending') {
      if (status === 'all') {
        this.filteredNews = this.news
      } else {
        this.filteredNews = this.news.filter(item => item.status === status)
      }
    },

    updateVote(newsId: number, vote: 'fake' | 'real') {
      const news = this.news.find(item => item.id === newsId)
      if (news) {
        news.voteCount[vote]++
        // Update status based on vote ratio
        const totalVotes = news.voteCount.fake + news.voteCount.real
        if (totalVotes >= 10) {
          const fakeRatio = news.voteCount.fake / totalVotes
          news.status = fakeRatio > 0.6 ? 'fake' : fakeRatio < 0.4 ? 'real' : 'pending'
        }
      }
    },

    addNews(news: Omit<News, 'id' | 'voteCount'>) {
      const newNews: News = {
        ...news,
        id: Math.max(...this.news.map(n => n.id)) + 1,
        voteCount: { fake: 0, real: 0 }
      }
      this.news.unshift(newNews)
      this.filteredNews = this.news
    }
  }
})