export async function handler(event, context) {
  const token = process.env.AUTH_TOKEN

  const response = await fetch('https://berzerk-agile-dev-backend-production.up.railway.app/fetch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.AUTH_TOKEN}`,
    },
    body: JSON.stringify({ username: 'braeden' }),
  })

  const data = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}