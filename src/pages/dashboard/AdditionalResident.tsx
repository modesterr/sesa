import { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import AddResidentPackage from '../../components/additionalResident/AddResidentUserPackage'
import ResidentUsers from '../../components/additionalResident/ResidentUsers'
import { useAppDispatch, useAppSelector } from '../../store/app/hooks'
import {
    RenderAdditionalResidentPath,
    routeChangeSelector,
    setAdditionalResidentPath,
} from '../../store/features/routeChange'

function AdditionalResident() {
    const dispatch = useAppDispatch()
    const { additionalResidentPath } = useAppSelector(routeChangeSelector)

    const [additionalResident, setAdditionalResident] = useState(false)

    const switchRoute = (path: RenderAdditionalResidentPath) => {
        switch (path) {
            case 'renderedAdditionalResidents':
                return <ResidentUsers />

            case 'addResidentUserPackage':
                return <AddResidentPackage />

            default:
                return <ResidentUsers />
        }
    }

    const handleAddEstate = () => {
        setAdditionalResident(true)
        dispatch(setAdditionalResidentPath('renderedAdditionalResident'))
    }

    return (
        <div>
            <h1 className='heading2'>Additional Resident Package</h1>
            <div className='rounded-lg mt-[3rem] h-[80vh]'>
                {additionalResident ? (
                    <section>{switchRoute(additionalResidentPath)}</section>
                ) : (
                    <section className='grid place-content-center w-full h-full justify-items-center gap-4 bg-white'>
                        <img src='/icons/admins/errorSvg.svg' alt='' />
                        <p className='text'>
                            Ooops you have not added any Package yet
                        </p>
                        <button
                            className='bg-color-blue-1 text-white flex gap-2 items-center rounded-lg justify-self-center py-4 px-16 text-[1.6rem]'
                            onClick={handleAddEstate}
                        >
                            <span>
                                <IoMdAdd />
                            </span>{' '}
                            Add Package
                        </button>
                    </section>
                )}
            </div>
        </div>
    )
}

export default AdditionalResident
