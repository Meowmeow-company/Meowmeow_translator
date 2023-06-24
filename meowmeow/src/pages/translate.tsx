import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import { Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import useSound from "use-sound";
export default function Translate() {
    const [data, setData] = useState([] as any)
    const [play] = useSound("sent.wav");
    const [context, setContext]  =  useState([] as any);
    const toxic = {
        "ไอสัส":"meowmeow",
        "แย่":"meow!!",
    };
    
    const show = () => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
          title: <p>{context}</p>
        })
    }
    useEffect(()=>{
        for (const [key, value] of Object.entries(data)) {
            if(context.includes(key)){
                setContext(context.replace(key,value))
            }
        }
    })
    const translate = () => {
        fetch('data.json')
        .then(response => {
            return response.json();
        }).then(data => {
            setData(data)
            console.log(data)
        }).catch((e: Error) => {
            console.log(e.message);
        });
        play();
        show();
        
      }
  return (
    <main>
      <Navbar />
      <div className='bg-white'>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 sm:py-12 lg:py-24">
          <div className="text-center">
            <h1 className="text-6xl text-black font-bold leading-relaxed drop-shadow-md">
            เป็น Meow ไร?! 🤬🐈
            </h1>
            <h1 className="text-2xl text-black leading-relaxed drop-shadow-md">
            ด่าเพื่อนของคุณด้วยภาษาเหมียว ๆ 
            </h1>
          </div>
        </div>
      </div>
      </div>
      <div className='bg-white min-h-screen'>
      <div className="flex flex-col justify-center text-center">
      <div className="md:w-full">
        <div className='flex flex-col justify-center text-center gap-2'>
            <form  onSubmit={(e) => {
        play();
        translate();
        e.preventDefault();
      }} className='flex flex-row justify-center items-center space-x-3'>
      <input className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={(e)=>setContext(e.target.value)} placeholder="แปลภาษาเหมียว"></input>
        <Button shadow color="success" auto onClick={translate}>แปลภาษาเหมียว</Button>
        </form>
    </div>
    </div>
    </div>
    </div>
    </main>
  )
    }
