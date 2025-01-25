import app from './index.html'
import { serve } from 'bun'

const server = serve({
  static: {
    '/': app,
  },
  fetch() {
    return new Response('404!')
  },
})

console.log(`Listening on localhost:${server.port}`)