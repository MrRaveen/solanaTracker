type TrendingCardsProps = {
  tokenName : any;
  symbol: any;
  MCapusd: any;
  priceUsd: any;
  priceChange: any;
}
export default function TrendingCard({ tokenName,symbol,MCapusd,priceUsd,priceChange } : TrendingCardsProps){
  return(
    <tr key={tokenName}>
                <td className='border border-slate-800 px-4 py-2'>{tokenName}</td>
                <td className='border border-slate-800 px-4 py-2'>{symbol}</td>
                <td className='border border-slate-800 px-4 py-2'>${MCapusd}</td>
                <td className='border border-slate-800 px-4 py-2'>${priceUsd}</td>
                <td className='border border-slate-800 px-4 py-2'>{priceChange}%</td>
      </tr>
  );
}
