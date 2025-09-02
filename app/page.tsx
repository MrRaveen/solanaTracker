import { Console } from 'console';
import './globals.css';
import TrendingCard from './TrendingCards';
async function getTrendingTokens(){
  const api_key = process.env.SOLANA_TRACKER_API_KEY
  if(!api_key){
    throw new Error("The API key is not set");
  }
const res = await fetch('https://data.solanatracker.io/tokens/trending/1h',{
  method: 'GET',
  cache: 'no-store',
  headers: {
    'x-api-key': api_key
  }
});
const data = await res.json();
return data;
}
export default async function HomePage(){
  const trendingTokens = await getTrendingTokens();
   console.log("Test : ",JSON.stringify(trendingTokens,null,2));
  return(
    <div>
      <h1 className='font-bold text-3xl flex justify-center items-center mt-5 text-slate-800'>Trending Tokens</h1>
      <div className='flex justify-center'>
        <table className='table-auto border border-gray-300 mt-4'>
          <thead className='bg-slate-800 text-white'>
            <tr>
             <th className='border border-slate-800 px-4 py-2'>Token Name</th>
             <th className='border border-slate-800 px-4 py-2'>Symbol</th>
             <th className='border border-slate-800 px-4 py-2'>Marketcap</th>
             <th className='border border-slate-800 px-4 py-2'>Price</th>
             <th className='border border-slate-800 px-4 py-2'>Price Change</th>
            </tr>
          </thead>
          <tbody>
            {trendingTokens.map((item: any) => (
               item.pools.map((poolItem : any)=>(
                <TrendingCard key={item.token.name} tokenName={item.token.name} symbol={item.token.symbol} MCapusd={poolItem.marketCap.usd} priceUsd={poolItem.price.usd} priceChange={item.events['24h'].priceChangePercentage}></TrendingCard>
               ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
