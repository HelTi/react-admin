const isDev = process.env.NODE_ENV === 'development'

export const BASE_API_URL = isDev ? 'http://localhost:8080/' : 'http://localhost:8080/'