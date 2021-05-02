type LoginInformation = {
  email: string
  password: string
}

export const fetchAuthToken = async ({ email, password }: LoginInformation, apiBase: string, endpoint: string) => {
  const request = new Request(
    `${apiBase}${endpoint}`,
    {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    }
  )
  return fetch(request).then((response) => {
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText)
    }
    return response.json()
  })
}

export const useLogin = async (
  { email, password}: LoginInformation,
  apiBase:string,
  endpoint: string,
  onSuccess: () => void,
  onFailure:() => void
) => {
  return fetchAuthToken({ email, password }, apiBase, endpoint)
    .then(({ token }) => {
      window.sessionStorage.setItem('token', token)
      onSuccess()
    })
    .catch(() => {
      onFailure()
    })
}
