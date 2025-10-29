import React from 'react'
import { Button  } from './components/ui/button'
import { Input } from './components/ui/input'
import { SearchCheck, Send } from 'lucide-react'


export default function Messages() {
  return (
    <section className='flex w-full h-full'>
      {/* chat messages */}
      <div className='w-[20%] p-2  bg-indigo-100  h-full'>
        <div><Input  className='w-full bg-white' placeholder='Search chats'/></div>
        {/* <div class="divider divider-error"></div> */}
        <hr className='my-1 bg-amber-300 border-indigo-300'/>
        <ul className="list bg-base-100 rounded-box shadow-md overflow-y-auto h-[80vh]">
  
  <li className="list-row">
    <div><img className="size-8 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp"/></div>
    <div className="list-col-grow">
      <div>Dio Lupa</div>
      <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
    </div>
  </li>
  
  <li className="list-row">
    <div><img className="size-8 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp"/></div>
    <div className="list-col-grow">
      <div>Ellie Beilish</div>
      <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
    </div>
  </li>
  
  <li className="list-row">
    <div><img className="size-8 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div className="list-col-grow">
      <div>Sabrino Gardener</div>
      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
  </li>
  <li className="list-row">
    <div><img className="size-8 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div className="list-col-grow">
      <div>Sabrino Gardener</div>
      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
  </li>
  <li className="list-row">
    <div><img className="size-8 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div className="list-col-grow">
      <div>Sabrino Gardener</div>
      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
  </li>
  <li className="list-row">
    <div><img className="size-8 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div className="list-col-grow">
      <div>Sabrino Gardener</div>
      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
  </li>
  <li className="list-row">
    <div><img className="size-8 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div className="list-col-grow">
      <div>Sabrino Gardener</div>
      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
  </li>
  <li className="list-row">
    <div><img className="size-8 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div className="list-col-grow">
      <div>Sabrino Gardener</div>
      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
  </li>
  <li className="list-row">
    <div><img className="size-8 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp"/></div>
    <div className="list-col-grow">
      <div>Sabrino Gardener</div>
      <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
    </div>
  </li>
  
</ul>
      </div > 

      <div className ='w-[80%] flex flex-col justify-between pl-1 h-full'>
        <div className='p-2 w-full shadow-lg bg-indigo-200'>
          <Button variant='outline' className='text-sm font-bold '>Dio Lupa</Button>
        </div>

          {/* chat box */}

            <div className="chat  chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat  chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">12:45</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                Anakin
                <time className="text-xs opacity-50">12:46</time>
              </div>
              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
        <div className='p-2 flex justify-between items-center w-full '>
           <Input className='w-[80%] border-indigo-500' placeholder='Type message. . . . '/>
           <Send className='text-indigo-500 cursor-pointer'/>

        </div>

              </div>

              

    </section>
  )
}
