import React, { FC } from "react"
import { CgSpinnerTwo } from "react-icons/cg"
import { GrDown } from "react-icons/gr"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"

export interface IResidentUserHistory {
    id: string
    guardName: string
    date: string
    guardCode: number
    checkInCount: number
    checkOutCount: number
    panicAlert: number
}

export const RESIDENT_HISTORY: IResidentUserHistory[] = [
    {
        id: '1',
        guardName: 'Jacinta Sage',
        date: '12/12/2021',
        guardCode: 1234,
        checkInCount: 8,
        checkOutCount: 5,
        panicAlert: 2,
    },
    {
        id: '1',
        guardName: 'Jacinta Sage',
        date: '12/12/2021',
        guardCode: 1234,
        checkInCount: 8,
        checkOutCount: 5,
        panicAlert: 2,
    },
    {
        id: '1',
        guardName: 'Jacinta Sage',
        date: '12/12/2021',
        guardCode: 1234,
        checkInCount: 8,
        checkOutCount: 5,
        panicAlert: 2,
    },
    {
        id: '1',
        guardName: 'Jacinta Sage',
        date: '12/12/2021',
        guardCode: 1234,
        checkInCount: 8,
        checkOutCount: 5,
        panicAlert: 2,
    },
    {
        id: '1',
        guardName: 'Jacinta Sage',
        date: '12/12/2021',
        guardCode: 1234,
        checkInCount: 8,
        checkOutCount: 5,
        panicAlert: 2,
    },
    {
        id: '1',
        guardName: 'Jacinta Sage',
        date: '12/12/2021',
        guardCode: 1234,
        checkInCount: 8,
        checkOutCount: 5,
        panicAlert: 2,
    },
]

const ResidentUserHistory: FC<{
    fetchedResidentUserHistory: IResidentUserHistory[]
}> = ({ fetchedResidentUserHistory }) => {
    return (
        <div className='grid text-[1.6rem]'>
            <caption className='flex w-full justify-start items-center gap-12 p-10 bg-white rounded-lg'>
                <p className=' font-bold'>
                    Attendance Report List <span>(4)</span>
                </p>
                <div className='relative flex items-center'>
                    <img
                        src='/icons/admins/search.svg'
                        alt=''
                        className='absolute left-4 text-[4rem]'
                    />
                    <input
                        type='text'
                        placeholder='Search Parameters'
                        className='pl-16 w-[18rem] rounded-lg border border-color-blue-light appearance-none outline-none p-4'
                    />
                </div>
                <div className='relative flex items-center'>
                    <select className=' cursor-pointer w-[18rem] rounded-lg border border-color-blue-light appearance-none outline-none p-4 bg-white'>
                        <option hidden value=''>
                            Sort By
                        </option>
                        <option value='date'>date</option>
                        <option value='alpha'>Alpha</option>
                    </select>
                    <GrDown className='absolute right-4 text-[1.3rem]' />
                </div>
                <div className='relative flex items-center'>
                    <select className=' cursor-pointer w-[18rem] rounded-lg border border-color-blue-light appearance-none outline-none p-4 bg-white'>
                        <option hidden value=''>
                            Start Date
                        </option>
                        <option value='date'>date</option>
                        <option value='alpha'>Alpha</option>
                    </select>
                    <GrDown className='absolute right-4 text-[1.3rem]' />
                </div>
                <div className='relative flex items-center'>
                    <select className=' cursor-pointer w-[18rem] rounded-lg border border-color-blue-light appearance-none outline-none p-4 bg-white'>
                        <option hidden value=''>
                            End Date
                        </option>
                        <option value='date'>date</option>
                        <option value='alpha'>Alpha</option>
                    </select>
                    <GrDown className='absolute right-4 text-[1.3rem]' />
                </div>
            </caption>

            <div className='grid'>
                <div
                    className='grid justify-between text-color-dark-1 bg-color-grey p-8 grid-cols-6 gap-8'
                    style={{
                        fontSize: '1.6rem',
                    }}
                >
                    <p className='flex items-center gap-2'>
                        <input type='checkbox' className='cursor-pointer' />
                        <p>Guard Name</p>
                    </p>
                    <p>Date</p>
                    <p>Guard Code</p>
                    <p>Check In Count</p>
                    <p>Check Out Count</p>
                    <p>Panic Alert</p>
                </div>

                <div className='grid gap-8 mt-8 p-8'>
                    {fetchedResidentUserHistory &&
                    fetchedResidentUserHistory.length > 0 ? (
                        React.Children.toArray(
                            fetchedResidentUserHistory.map(
                                ({
                                    guardCode,
                                    guardName,
                                    date,
                                    checkInCount,
                                    checkOutCount,
                                    panicAlert,
                                }) => {
                                    return (
                                        <div className='grid justify-between border-b grid-cols-6 gap-8 '>
                                            <p className='flex items-center gap-4'>
                                                <input
                                                    type='checkbox'
                                                    className='cursor-pointer'
                                                />

                                                <span>{guardName}</span>
                                            </p>
                                            <p>{date}</p>
                                            <p>{guardCode}</p>
                                            <p>{checkInCount}</p>
                                            <p>{checkOutCount}</p>
                                            <p>{panicAlert}</p>
                                        </div>
                                    )
                                }
                            )
                        )
                    ) : (
                        <div>
                            <div className='relative'>
                                <div className='absolute w-full grid place-content-center'>
                                    <CgSpinnerTwo className='animate-spin text-[#0660FE] text-4xl' />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <footer className='flex items-center p-4 mt-4 bg-color-white rounded-lg'>
                <div className='flex gap-8 items-center'>
                    <p>View</p>
                    <div className='flex items-center border px-4 rounded-lg'>
                        <input
                            type='text'
                            className='w-8 outline-none border-none cursor-pointer '
                            value={6}
                            inputMode='numeric'
                        />
                        <GrDown className='text-[1.3rem]' />
                    </div>
                    <p className='text'>List per page</p>
                </div>
                <ul className='flex items-center gap-5 ml-10'>
                    <HiOutlineChevronLeft />
                    <li className='grid place-content-center border w-[3rem] h-[3rem] cursor-pointer'>
                        1
                    </li>
                    <li className='grid place-content-center border w-[3rem] h-[3rem] cursor-pointer'>
                        2
                    </li>
                    <li className='grid place-content-center border w-[3rem] h-[3rem] cursor-pointer'>
                        3
                    </li>
                    <li className='grid place-content-center border w-[3rem] h-[3rem] cursor-pointer'>
                        4
                    </li>
                    <li className='grid place-content-center w-[3rem] h-[3rem] cursor-pointer'>
                        ....
                    </li>
                    <li className='grid place-content-center border w-[3rem] h-[3rem] cursor-pointer'>
                        10
                    </li>
                    <HiOutlineChevronRight />
                </ul>
            </footer>
        </div>
    )
}

export default ResidentUserHistory