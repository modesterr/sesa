import React, { useContext, useState } from 'react'
import { GrDown } from 'react-icons/gr'
import { IoMdAdd } from 'react-icons/io'
import { EstateManagerPageContext } from '../../Context/EstateManagerPageContext'
import { getPhotoUrl } from '../../utils/getPhotoUrl'

const EstateManager = () => {
  const estateContextData = useContext(EstateManagerPageContext)
  const { setRouteToRender } = estateContextData


    const [photoUrl, setPhotoUrl] = useState('')

    const handlePhotoPreview = async (
        value: React.MouseEvent<HTMLInputElement>
    ) => {
        const getUrl = await getPhotoUrl(`#photoUpload`)
        setPhotoUrl(getUrl)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setRouteToRender("renderedEstateManagers")
    }



    return (
        <div className='estateManager'>
            <p className='estateManager__heading'>Personal Information</p>
            <form onSubmit={handleSubmit} className='estateManager__formBox'>
                <section className='estateManager__form'>
                    <div className='estateManager__form--item'>
                        <label htmlFor='firstName'>First Name *</label>
                        <input type='text' required id='firstName' />
                    </div>
                    <div className='estateManager__form--item'>
                        <label htmlFor='lastName'>Last Name *</label>
                        <input type='text' required id='lastName' />
                    </div>
                    <div className='estateManager__form--item'>
                        <label htmlFor='date'>Date of Birth *</label>
                        <input type='date' id='date' required />
                    </div>
                    <div className='estateManager__form--item'>
                        <label htmlFor='gender'>Gender *</label>
                        <div className='item__select'>
                            <select id='gender'>
                                <option hidden>&nbsp;</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                            <GrDown />
                        </div>
                    </div>
                    <div className='estateManager__form--phoneNumber'>
                        <label htmlFor='phoneNumber'>Phone Number *</label>

                        <div className='phoneNumber__box'>
                            <select>
                                <option value='234'>+234</option>
                            </select>
                            <input
                                required
                                type='number'
                                inputMode='numeric'
                                id='phoneNumber'
                                placeholder='Phone Number'
                            />
                        </div>
                    </div>
                    <div className='estateManager__form--item'>
                        <label htmlFor='email'>Email Address *</label>
                        <input
                            required
                            type='email'
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div className='estateManager__form--file'>
                        <label htmlFor='photoUpload'>
                            <img src='/icons/estates/photo_library.svg' alt='' />
                            <p>
                                Drag estate manager picture here or{' '}
                                <span>click</span> to upload
                            </p>
                        </label>
                        <input
                            type='file'
                            name='photoUpload'
                            id='photoUpload'
                            accept='image/*'
                            className='hidden'
                            onClick={handlePhotoPreview}
                        />

                        {photoUrl && (
                            <div className='file__uploadImgBox'>
                                <img
                                    src={photoUrl}
                                    alt='photoPreview'
                                    className='object-contain'
                                />
                            </div>
                        )}
                    </div>
                    <button
                        className='btn estates__btn'
                        style={{ justifySelf: 'start' }}
                    >
                        <span>
                            <IoMdAdd />
                        </span>{' '}
                        Add Estate
                    </button>
                </section>
            </form>
        </div>
    )
}

export default EstateManager