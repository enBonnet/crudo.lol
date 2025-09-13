export type VoteType = 'crudo' | 'claro' | 'pulido'

export interface Post {
  id: string
  canonicalUrl: string
  title?: string
  createdAt: string
  voteCounts: {
    crudo: number
    claro: number
    pulido: number
  }
}

export interface Vote {
  id: string
  postId: string
  userId: string
  voteType: VoteType
  createdAt: string
}
