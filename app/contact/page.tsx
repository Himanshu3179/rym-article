import ContactForm from '@/components/ContactForm'
import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center w-full
            py-10 
        '>
            <ContactForm
                heading={"Contact Us"}
            />
        </div>
    )
}

export default page