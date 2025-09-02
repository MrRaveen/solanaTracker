async function getWalletTokens(address : string){
    const api_key = process.env.SOLANA_TRACKER_API_KEY
    if(!api_key){
       throw new Error("The API key is not set");
    }
    const res = await fetch(`https://data.solanatracker.io/wallet/${address}`,{
        method: 'GET',
        cache: 'no-store',
        headers: {
            'x-api-key': api_key
        }
    });
    const data = await res.json();
    return data;
}
export default async function getWalletAddress({ params } : { params: { address : string } }){
    var data = await getWalletTokens(params.address);
    if (data.hasOwnProperty('error')) {
        return(
            <div className="flex flex-col items-center">
             <h1 className="text-4xl mt-4 text-slate-800 font-bold">Wallet Info</h1>
             <table className="table-auto border border-slate-500 mt-4">
                 <thead className="bg-slate-800 text-white">
                     <tr>
                         <th className="border border-slate-800 px-4 py-2">Name</th>
                         <th className="border border-slate-800 px-4 py-2">Symbol</th>
                         <th className="border border-slate-800 px-4 py-2">SOL</th>
                         <th className="border border-slate-800 px-4 py-2">Mint</th>
                         <th className="border border-slate-800 px-4 py-2">Balance</th>
                     </tr>
                 </thead>
                 <tbody>
                 <tr>
                 <td colSpan={5} className="font-bold py-4 px-2"><label className="flex flex-col items-center">Invalid wallet address</label></td>
                 </tr>
                 </tbody>
             </table>
         </div>
        );
    }else{
        return(
         <div className="flex flex-col items-center">
            <h1 className="text-4xl mt-4 text-slate-800 font-bold">Wallet Info</h1>
            <table className="table-auto border border-gray-300 mt-4">
                <thead>
                    <tr>
                        <th className="border border-slate-800 px-4 py-2">Name</th>
                        <th className="border border-slate-800 px-4 py-2">Symbol</th>
                        <th className="border border-slate-800 px-4 py-2">SOL</th>
                        <th className="border border-slate-800 px-4 py-2">Mint</th>
                        <th className="border border-slate-800 px-4 py-2">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {data.tokens.map((dataItems : any, index : any)=>(
                    <tr key={index}>
                        <td className="border border-slate-800 px-4 py-2">{dataItems.token.name}</td>
                        <td className="border border-slate-800 px-4 py-2">{dataItems.token.symbol}</td>
                        <td className="border border-slate-800 px-4 py-2">{data.totalSol}</td>
                        <td className="border border-slate-800 px-4 py-2">{dataItems.token.mint}</td>
                        <td className="border border-slate-800 px-4 py-2">{dataItems.balance}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );  
    }
}