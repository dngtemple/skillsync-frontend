import { SignIn } from '@clerk/clerk-react'
import { useRef, useEffect } from 'react'
import logo from "/logo.png"
import gsap from 'gsap'

export default function Login() {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.to(logoRef.current, {
      scale: 1.2,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg p-10 w-full max-w-[800px] mx-4">
        
        {/* Animated Logo and Header */}
        <div className="flex flex-col items-center mb-6">
          <img
            ref={logoRef}
            src={logo}
            alt="SkillSync Logo"
            className="w-20 h-20 rounded-full border-2 border-blue-400 mb-3"
          />
          <h1 className="text-2xl font-semibold text-gray-700">Welcome Back</h1>
          <p className="text-gray-500 text-center max-w-sm">
            Log in to continue learning and connect with your peers.
          </p>
        </div>

        {/* Clerk Sign In Form */}
        <div className="w-full flex justify-center">
          <div className="w-full flex justify-center sm:w-[450px]">
            <SignIn
              appearance={{
                elements: {
                  formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
                  formFieldLabel: "text-gray-700",
                  formFieldInput: "rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                  footerActionLink: "text-blue-600 hover:underline",
                  headerTitle: "text-gray-800 text-lg font-semibold",
                },
                variables: {
                  colorPrimary: "#2563eb",
                  colorText: "#1e293b",
                },
              }}
              signInFallbackRedirectUrl="/"   // where to go after login
              signInForceRedirectUrl="/"
              signUpUrl="/signup"
              path="/login"
              routing="path"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
