import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const handleEvent = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="BGLogo" />
            </div>


            <form className="w-1/4 absolute bg-black bg-opacity-75 p-12 my-36 mx-auto left-0 right-0 text-white">
                <h1 className="text-3xl font-bold">{isSignIn ? "Sign In" : "Sign up"}</h1>
                {isSignIn ? null : <input className="py-2 mx-0 my-2 w-full px-2 bg-gray-700" type="text" placeholder="Name" />}
                <input className="py-2 mx-0 my-2 w-full px-2 bg-gray-700" type="text" placeholder="Email Address" />
                <input className="py-2 mx-0 my-2 w-full px-2 bg-gray-700" type="password" placeholder="Password" />
                <button className="bg-red-700 my-4 py-2 w-full">{isSignIn ? "Sign In" : "Sign up"}</button>
                <div className="flex justify-between">
                    <div className="">
                        <input className="mx-1" type="checkbox" />
                        <label className="text-base">Remember me</label>
                    </div>
                    <div>Need help?</div>
                </div>
                <p className="py-4 cursor-pointer" onClick={handleEvent}>{isSignIn ? "New to Netflix ? Sign up now" : "Already a user Sign In now"}</p>
            </form>




        </div>
    )
}

export default Login;