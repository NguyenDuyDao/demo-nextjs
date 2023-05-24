"use client";

// import SignIn from './(non-template)/signin/page'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
    const router = useRouter()
    // useEffect(() => {router.push('/signin')})

    return (
        <>
            {/* <SignIn /> */}
            { useEffect(() => {router.push('/signin')}) }
        </>
    )
}
