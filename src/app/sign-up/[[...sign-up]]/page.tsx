import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <SignUp afterSignOutUrl={'/new-user'} fallbackRedirectUrl={'/new-user'} />
  )
}

export default SignUpPage
