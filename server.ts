export const request = ({ name, url, params }) => {
  if (params.type === 'string') {
    return `${name}-${url}-${JSON.stringify(params)}`
  }

  if (params.type === 'json') {
    return {
      count: 1,
      hello: 'world',
    }
  }

  if (params.type === 'response') {
    return new Response('Hello World!')
  }

  return 'Missing type.'
}
