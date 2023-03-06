import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp } = UserAuth();

    const nav = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            nav('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className="w-full h-screen">
                <img
                    className="hidden sm:block absolute w-full h-full object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/759dc829-d242-41b3-b2ec-25d2e4602268/VN-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="/"
                />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
                <div className="fixed w-full px-4 py-24 z-50">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 rounded text-white">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <form onSubmit={handleSubmit}>
                                <input
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="p-2 my-2 w-full rounded-sm"
                                    type={'email'}
                                    placeholder="Enter email ..."
                                ></input>
                                <input
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="p-2 my-2 w-full rounded-sm"
                                    type={'password'}
                                    placeholder="Enter password ..."
                                ></input>
                                <button className="bg-red-600 p-2 rounded-sm hover:opacity-80 font-bold w-full mt-4">
                                    Sign Up
                                </button>
                                <div className="flex mt-4">
                                    <p>Already have account?</p>
                                    <Link to={'/Login'} className={'ml-2 hover:underline'}>
                                        <p>Sign In</p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
