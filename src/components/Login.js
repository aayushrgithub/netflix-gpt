import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { CheckValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import DropDown from "./DropDown";


const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        const message = CheckValidData(email.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return;
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F30%2FReact_Logo_SVG.svg&tbnid=1YRCTmBnER_nsM&vet=12ahUKEwjal4nDwcCDAxU_hWMGHZQ4BAwQMygAegQIARBz..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_(software)&docid=Fiz1iGC5gm0AcM&w=800&h=728&q=react&ved=2ahUKEwjal4nDwcCDAxU_hWMGHZQ4BAwQMygAegQIARBzs"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                    }).catch((error) => {
                        // An error occurred
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }

        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }

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


            <form onSubmit={(e) => e.preventDefault()} className="w-[80%] my-72 p-16 md:w-1/4 absolute bg-black bg-opacity-75 md:p-12 md:my-36 mx-auto left-0 right-0 text-white">
                <h1 className="text-3xl font-bold">{isSignIn ? "Sign In" : "Sign up"}</h1>
                {isSignIn ? null : <input ref={name} className="py-2 mx-0 my-2 w-full px-2 bg-gray-700" type="text" placeholder="Name" />}
                <input ref={email} className="py-2 mx-0 my-2 w-full px-2 bg-gray-700" type="text" placeholder="Email Address" />
                <input ref={password} className="py-2 mx-0 my-2 w-full px-2 bg-gray-700" type="password" placeholder="Password" />
                <p className="text-red-500 font-bold pt-2">{errorMessage}</p>
                <button onClick={handleButtonClick} className="bg-red-700 my-4 py-2 w-full">{isSignIn ? "Sign In" : "Sign up"}</button>
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