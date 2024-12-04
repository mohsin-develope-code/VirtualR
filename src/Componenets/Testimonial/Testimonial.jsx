
const testimonials = [
    {
      user: "John Doe",
      company: "Stellar Solutions",
      image: "src/assets/profile/user1.jpg",
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
      user: "Jane Smith",
      company: "Blue Horizon Technologies",
      image: "src/assets/profile/user2.jpg",
      text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
      user: "David Johnson",
      company: "Quantum Innovations",
      image: "src/assets/profile/user3.jpg",
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
      user: "Ronee Brown",
      company: "Fusion Dynamics",
      image: "src/assets/profile/user4.jpg",
      text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
      user: "Michael Wilson",
      company: "Visionary Creations",
      image: "src/assets/profile/user5.jpg",
      text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
      user: "Emily Davis",
      company: "Synergy Systems",
      image: "src/assets/profile/user6.jpg",
      text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
  ];



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