import {pricingOptions} from './PriceData';
import { CheckCircle2 } from 'lucide-react';


const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className='text-3xl md:text-6xl text-center'>
            Pricing
        </h2>

        <div className="flex flex-wrap py-10">
            {
                pricingOptions.map((data, i)=> (
                    <div key={i} className="w-full md:w-1/3 p-2">
                        <div className='px-8 py-10 border border-neutral-700 rounded-xl'>
                            
                            <p className='text-4xl mb-8'>
                            {data.title}
                            {data.title === "Pro" && <span className='bg-gradient-to-r
                            from-orange-500 to-orange-600 text-transparent bg-clip-text
                            text-xl mb-4 ml-2'>(Most Popular)</span>}
                            </p>


                            <p className='mb-10'>
                                <span className='text-5xl'>{data.price}</span>
                                <span className='ml-2 text-slate-400' >/month</span>
                            </p>

                            <ul>
                                {
                                    data.features.map((item)=> (
                                        <li key={item} className='flex gap-3 items-center mt-8 '>
                                            <CheckCircle2/>
                                            <span className='text-md'>{item}</span>
                                        </li>
                                    ))
                                }
                            </ul>

                            <a className='border border-orange-700 rounded-lg w-full h-12 inline-flex 
                            justify-center items-center text-center mt-10 p-5 hover:bg-orange-900 transition duration-200' 
                            href="#">Subscribe</a>

                        </div>
                    </div>
                ))
            }
        </div>







    </div>
  )
}

export default Pricing;