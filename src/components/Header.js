import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.\
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });

    }

    return (
        <div className=' flex justify-between items-center w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img
                className='w-48'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='LOGO' />

            {user && <div className='flex'>
                <img className='w-8 h-8 mx-4' src='https://occ-0-3081-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
                    alt='userIcon' />
                {user?.displayName}
                <button onClick={handleSignOut} className='text-white'>Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;