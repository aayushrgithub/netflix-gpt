import React, { useContext, useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';
import DropDown from './DropDown';
import { toggleDown } from '../utils/toggleMenu';
import DropContext from '../utils/DropContext';


const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed up/signed in
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [])



    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.\
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });

    }

    const handleDropDown = () => {
        dispatch(toggleDown());
    }


    return (
        <div className=' flex justify-between items-center w-screen absolute px-4 md:px-8 md:py-2 bg-gradient-to-b from-black z-10'>
            <img
                className='w-36 md:w-48'
                src={LOGO}
                alt='LOGO'
            />

            {user && <div className='flex justify-between'>
                <img className='mx-8 w-6 h-6 md:w-8 md:h-8 md:mx-12 cursor-pointer' src={USER_AVATAR}
                    alt='userIcon'
                    onClick={() => handleDropDown()}
                />
                <button onClick={handleSignOut} className='text-white px-0 md:px-12 cursor-pointer'>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;