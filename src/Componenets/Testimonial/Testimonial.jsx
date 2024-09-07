import {testimonials} from './testimonialData';

const Testimonial = () => {
  return (
    <div className="mt-10 border-b border-neutral-800">
            <h1 className='text-3xl md:text-6xl text-center my-10 md:my-20'>
                What are people say
            </h1>

            <div className="flex flex-wrap justify-center mb-10">
                {
                    testimonials.map((value)=> (
                        <div key={value.user} className='w-full md:w-1/3 px-4 py-2'>
                            <div className='bg-neutral text-md rounded-md p-6 border border-neutral-800 font-thin'>
                                <p>{value.text}</p>

                                <div className='flex gap-5 mt-7 items-center'>
                                    <img className='h-12 w-12 rounded-full border border-neutral-300' 
                                         src={value.image} 
                                         alt={value.user} 
                                    />

                                    <div>
                                    <h6 className='text-md font-normal'>{value.user}</h6>
                                    <p className='text-sm mt-1 italic text-neutral-300'>{value.company}</p>
                                    </div>



                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default Testimonial