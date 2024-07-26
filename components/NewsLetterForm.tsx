"use client"
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'

const NewsLetterForm = () => {
    const { toast } = useToast();
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // if email is empty
        const emailInput = e.currentTarget[0] as HTMLInputElement;
        if (!emailInput.value) {
            return toast({
                title: 'Error',
                description: 'Email is required',
            })
        }
        else {
            toast({
                title: 'Success',
                description: 'Subscribed successfully',
            })
            router.push('/')
        }
    }
    return (
        <form className='flex gap-2'
            onSubmit={handleSubmit}
        >
            <Input placeholder='Enter your email' className='text-black' type='email' />
            <Button className='hover:bg-red-500'>Subscribe</Button>
        </form>
    )
}

export default NewsLetterForm