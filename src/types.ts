export interface Movie {
  id: string
  title: string,
  image: string,
  content: string,
}

export interface UserRegistrationResponse {
  userId: string,
  password: string,
  id: string,
}

export interface AuthError {
  status: number,
  message: string
}

export interface User {
  userId: string
  name: string,
  role: string,
}
