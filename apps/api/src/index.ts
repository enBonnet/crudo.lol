import type { VoteType } from '@crudo/types'
import { Hono } from 'hono'

const app = new Hono()

// Mock data for demonstration
const posts: Array<{
  id: string
  canonicalUrl: string
  title: string
  createdAt: string
  voteCounts: Record<VoteType, number>
}> = []
const votes: Array<{
  id: string
  postId: string
  userId: string
  voteType: VoteType
  createdAt: string
}> = []

app.get('/api', (c) => {
  return c.text('Hello from Crudo.lol API!')
})

app.get('/api/posts', (c) => {
  return c.json({ posts })
})

app.get('/api/posts/:id', (c) => {
  const id = c.req.param('id')
  const post = posts.find((p) => p.id === id)
  if (!post) return c.json({ error: 'Post not found' }, 404)
  return c.json({ post })
})

app.post('/api/posts', async (c) => {
  const { url } = await c.req.json()
  if (!url) return c.json({ error: 'URL required' }, 400)

  // Simple canonicalization (strip query params)
  const canonicalUrl = url.split('?')[0]

  // Check if exists
  const existing = posts.find((p) => p.canonicalUrl === canonicalUrl)
  if (existing) {
    return c.json({ post: existing, exists: true })
  }

  // Create new post
  const post = {
    id: Date.now().toString(),
    canonicalUrl,
    title: `Job Post: ${canonicalUrl}`,
    createdAt: new Date().toISOString(),
    voteCounts: { crudo: 0, claro: 0, pulido: 0 },
  }
  posts.push(post)
  return c.json({ post, exists: false })
})

app.post('/api/posts/:id/vote', async (c) => {
  const id = c.req.param('id')
  const { voteType }: { voteType: VoteType } = await c.req.json()

  const post = posts.find((p) => p.id === id)
  if (!post) return c.json({ error: 'Post not found' }, 404)

  // Mock user ID (in real app, from Clerk)
  const userId = 'mock-user'

  // Check if user already voted
  const existingVote = votes.find((v) => v.postId === id && v.userId === userId)
  if (existingVote) {
    return c.json({ error: 'Already voted' }, 400)
  }

  // Add vote
  votes.push({
    id: Date.now().toString(),
    postId: id,
    userId,
    voteType,
    createdAt: new Date().toISOString(),
  })

  // Update counts
  post.voteCounts[voteType]++

  return c.json({ success: true, voteCounts: post.voteCounts })
})

export default app
