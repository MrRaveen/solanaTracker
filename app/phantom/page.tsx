'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function phantomPage(){
    const [status, setStatus] = useState("");
    const [walletAddress, setAddress] = useState("")
    const router = useRouter();
    const getPhantomProvider = () => {
      if (typeof window !== 'undefined' && 'phantom' in window) {
          const provider = (window as any).phantom?.solana;
      if (provider?.isPhantom){
          setStatus("Installed")
          return provider;
        } 
      }
      setStatus("Not Installed")
      return null;
    };
    useEffect(()=>{
       const provider = getPhantomProvider();
         if (provider) {
    provider.connect({ onlyIfTrusted: false })
      .then((response: any) => {
        console.log("test1" + response.publicKey.toString());
        setAddress(response.publicKey.toString());
      })
      .catch(() => {
      
      });
  }
    }, []);
    function handleClick(){
        window.open("https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?pli=1","_blank")
    }
    if(status == "Installed"){
        if(!walletAddress){
    return(
        <div className='flex flex-col items-center'>
            <div className='mt-4 shadow-xl/30 px-6 py-6 flex flex-col items-center rounded-xl'>
                <h2 className='font-bold text-4xl text-slate-800'>Phantom wallet ID : Create a wallet</h2>
            </div>
        </div>
    );
        }else{
                return(
        <div className='flex flex-col items-center'>
            <div className='mt-4 shadow-xl/30 px-6 py-6 flex flex-col items-center rounded-xl'>
                <h2 className='font-bold text-4xl text-slate-800'>Phantom wallet ID : {walletAddress}</h2>
            </div>
        </div>
    );
        }
    }else{
         return(
        <div className='flex flex-col items-center'>
            <div className='mt-4 shadow-xl/30 rounded-xl py-6 px-6 flex flex-col items-center'>
            <h1 className='mt-4 font-bold text-4xl text-slate-800'>Extension is not installed</h1>
            <button className='mt-5 bg-blue-800 text-white px-4 py-4 rounded-4xl font-bold' onClick={handleClick}>Install Extension</button>
            </div>
        </div>
        );
    }
   
}