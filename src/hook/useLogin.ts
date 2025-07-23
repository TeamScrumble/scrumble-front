const useLogin = () => {
  
  const handleLogin = () => {
    const redirectUrl = window.location.href;
    const loginUrl = `${import.meta.env.VITE_AUTH_LOGIN_URL}?state=${encodeURIComponent(redirectUrl)}`

    window.location.href = loginUrl
  }

  return {
    handleLogin
  }
}

export default useLogin