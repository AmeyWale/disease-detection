import React from 'react'
// import image from '../../public/brain.png'

export default function Main() {
  return (
    <main className='flex py-32 pb-[219px] flex-row justify-center items-center bg-customBlue overflow-hidden relative'>
        <div className='flex flex-col gap-12 w-2/4'>
            <div>
                <p className=' font-bold text-5xl'>Predict</p>
                <p className=' font-bold text-5xl text-textBlue'>Prevent</p>
                <p className=' font-bold text-5xl'>Prevail</p>
            </div>

            <div className=' w-3/4 text-lg'>
                Utilizing advanced artificial intelligence to predict the likelihood of Alzheimer's disease from medical images.
            </div>

            <button className='bg-textBlue text-white font-bold w-32 p-2 rounded-2xl'>Get Started</button>
        </div>
            
        <div >
            <img className=' h-72 w-72' src="/brain.png" alt="" srcset="" />
        </div>

        <div class="primary-color-border primary-color-[100] absolute -left-56 top-20 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
        <div class="primary-color-border primary-color-[100] absolute -right-56 top-60 h-[400px] w-[400px] rounded-full border-[60px] border-blue-100"></div>
    </main>
  )
}
