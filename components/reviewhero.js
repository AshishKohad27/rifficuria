import React from 'react'
import Image from 'next/image'
import reviewhero from '@/assets/review/reviewhero.png'
import reviewheroavtar from '@/assets/review/reviewheroavtar.png'

const Reviewhero = () => {
    return (
        <>
            <div className='hero flex gap-6 md:gap-8 flex-col lg:flex-row'>
                {/* mobile view  */}
                <div className='lg:hidden block'>
                    <div className='flex items-center gap-3 py-2 '>
                        <div>
                            <Image src={reviewheroavtar} alt='reviewheroavtar' className='rounded-full w-[32px]'></Image>
                        </div>
                        <p className='uppercase text-textColor font-semibold'>billie eilish</p>
                    </div>
                    <div className='py-1'>
                        <p className='capitalize text-textColor text-2xl md:text-5xl font-bold'>Birds of a Feather</p>
                        <p className='uppercase text-btn1 font-bold'>hit me hard and soft</p>
                    </div>
                </div>
                {/* mobile view close  */}

                <div className='img w-full'>
                    <Image src={reviewhero} alt='review hero' className='w-full h-full rounded-2xl'></Image>
                </div>
                <div className='content mr-4'>
                    <div className='lg:flex items-center gap-3 py-2 hidden'>
                        <div>
                            <Image src={reviewheroavtar} alt='reviewheroavtar' className='rounded-full'></Image>
                        </div>
                        <p className='uppercase text-textColor text-2xl font-semibold'>billie eilish</p>
                    </div>
                    <div className='py-2 hidden lg:inline-block'>
                        <p className='capitalize text-textColor text-5xl font-bold'>hit me hard and soft</p>
                    </div>
                    <div className='text-textColor py-2'>
                        <p className='hidden lg:inline-block'>10 Tracks</p>
                        <div className='flex gap-1'>
                            <p className='font-semibold'>Release Date :</p>
                            <p className='font-normal'> May 17, 2024</p>
                        </div>
                        <div className='flex gap-1'>
                            <p className='font-semibold'>Format :</p>
                            <p className='font-normal'>LP</p>
                        </div>
                        <div className='flex gap-1'>
                            <p className='font-semibold'>Genre :</p>
                            <p className='font-normal'>Pop, Alternative, Electronic</p>
                        </div>
                        <div className='flex gap-1'>
                            <p className='font-semibold'>Duration : </p>
                            <p className='font-normal'>43m 46s</p>
                        </div>
                    </div>
                    <div className='description py-2'>
                        <p>Billie Eilish&rsquo;s third studio album, &quot;HIT ME HARD AND SOFT&quot;, released via Darkroom/Interscope Records is her most daring body of work to date, a diverse yet cohesive collection of songs— ideally listened to in its entirety from beginning to end—does exactly as the album title suggests; hits you hard and soft both lyrically and sonically, while bending genres and defying trends along the way.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviewhero;
