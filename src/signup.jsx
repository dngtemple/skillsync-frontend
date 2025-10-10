import { SignUp } from '@clerk/clerk-react'
import { useRef,useEffect } from 'react'
import logo from "/logo.png"
import gsap from 'gsap'

export default function Signup() {
  const logoRef = useRef(null);

 useEffect(() => {
    gsap.to(logoRef.current, {
      // rotation: 10,
      scale: 1.2,          
      duration: 2,
      repeat: -1,          // infinite loop
      yoyo: true,          // smoothly go back to original size
      ease: "linear"
    });
  }, []);
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <img ref={logoRef} className='w-20 h-20 rounded-full border-2 border-blue-400' src={logo}/>
       
       <div className="w-[400px]">  {/* control width here */}
        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full", // makes it take full width of parent div
              card: "w-full",    // ensures the card expands
            },
          }}
        />
      </div>
    </div>
  )
}
