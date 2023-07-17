import React from 'react'
import { GrDocumentText } from "react-icons/gr";

interface MyComponentProps {
  userinfor: {
    name: string,
    title: string,
    avatarUrl: string,
    coverImageUrl: string,
    decriptionOne: string,
    decriptionTwo: string,
  }[],
  listSkills: {
    skills: string[],
  }[]
  personalDetails: {
    label: string,
    value: string,
  }[],
}



export default function RecInterviewerDetailCard({ userinfor, listSkills, personalDetails }: MyComponentProps) {
  return (
    <>
      <section className='relative'>
        <div className=''>
          <div className='relative shrink-0 w-full'>
            <img src={userinfor[0].coverImageUrl} className='h-64 w-full object-cover lg:rounded-xl shadow ' />
          </div>
          <div className='md:flex ms-4 -mt-12'>
            <div className='md:w-full'>
              <div className='relative flex items-end'>
                <img src={userinfor[0].avatarUrl} className='h-28 w-28 rounded-full ring-4 ring-slate-50 ' />
                <div className='ms-4'>
                  <p className='text-lg font-semibold'>{userinfor[0].name}</p>
                  <p className='text-slate-400'>{userinfor[0].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative mt-12 md:pb-24 pb-16'>
        <div className=''>
          <div className=''>
            <div className='grid md:grid-cols-12 grid-cols-1 gap-[30px]'>
              <div className='lg:col-span-8 md:col-span-7'>
                <p className='text-xl font-semibold'>{userinfor[0].name}</p>
                <p className='text-slate-400 mt-3'>{userinfor[0].decriptionOne}</p>
                <p className='text-slate-400 mt-3'>{userinfor[0].decriptionTwo}</p>
                <p className='mt-6 text-xl font-semibold'>Skill:</p>
                <div className='grid lg:grid-cols-1 grid-cols-1 mt-4 gap-6'>
                  <div className='pt-1'>
                    {
                      listSkills[0].skills.map((skill, index) => (
                        <p
                          key={index}
                          className="px-4 py-2 gap-2 ml-2 mt-2 inline-flex bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md"
                        >
                          {skill}
                        </p>
                      ))}
                  </div>
                </div>
                <div className='mt-6 text-xl font-semibold'>Experience :</div>
                <p className='text-slate-400 mt-3'>{userinfor[0].decriptionTwo}</p>
                <p className='text-slate-400 mt-3'>{userinfor[0].decriptionOne}</p>
              </div>
              <div className='lg:col-span-4 md:col-span-5'>
                <div className='bg-gray-200 rounded-md shadow p-6 sticky top-20'>
                  <p className='class="text-lg font-semibold"'>Personal Detail:</p>
                  {
                    personalDetails.map((items) => (
                      <ul className='list-none mt-4'>
                        <li className='flex justify-between mt-3 items-center font-medium'>
                          <span>
                            <span className='text-slate-400 me-3'>{items.label}</span>
                          </span>
                          <span className=''>{items.value}</span>
                        </li>
                      </ul>
                    ))
                  }
                  <div className='mt-3 flex w-full bg-white p-3 items-center justify-center rounded-md shadow '>
                    <GrDocumentText/>
                    <span className='font-medium ms-2'>{userinfor[0].name}.pdf</span>
                    <a href='' className="px-4 py-2 gap-2 ml-4 mt-2 bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md">Download</a>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
