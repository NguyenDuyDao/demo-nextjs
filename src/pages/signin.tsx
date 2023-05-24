"use client";

import HeaderTitle from "@/components/HeaderTitle";
import Button from "@/components/Button";
import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'

const SignIn = () => {
    const router = useRouter()

    const handleSubmit = () => {
        // debugger
        console.log(router)
        router.push('/dashboard')
    };

    return (
        <div className="signin">
            <form className="signin-form" onSubmit={handleSubmit}>
                <HeaderTitle title="Sign In" />
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" />
                </div>
                <div className="button-container">
                    {/* <Button btnType="submit" text="Login" onClickEvent={() => router.push('/abc')} /> */}
                    <button type="submit">
                        Dashboard
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
