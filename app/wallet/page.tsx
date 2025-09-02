"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function WalletPage(){
  const [address, setAddress] = useState("");
  const router = useRouter();
  function handleClick(){
    if(!address.trim()){
      alert("Enter address");
      return;
    }
    router.push(`/wallet/${address}`)
  }
  function handleClear(){
    setAddress("");
  }
  return(
        <div className="flex flex-col items-center justify-center">
          <div className="block shadow-xl/30 p-10 mt-4 rounded-lg flex flex-col items-center">
            <h1 className="font-bold text-slate-800 text-4xl mt-5">Wallet page</h1>
            <h4 className="text-slate-800 text-2xl mt-3">Find your wallet easily</h4>
          <input type="text" className="border border-gray-500 mt-4 p-3 px-4 w-160 rounded-3xl" placeholder="Your wallet address here" value={address} onChange={(e) => setAddress(e.target.value)}/><br />
          <div>
          <button className="bg-blue-500 py-3 rounded-3xl ml-4 text-white font-bold px-6" onClick={handleClick}>
            Find wallet info
          </button>
           <button className="bg-blue-500 py-3 rounded-3xl ml-4 text-white font-bold px-6" onClick={handleClear}>
            Clear
          </button>
          </div>
          </div>
        </div>
    );
}
