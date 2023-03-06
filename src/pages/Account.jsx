import React from 'react';
import SavedMovies from '../components/SavedMovies';

const Account = () => {
    return (
        <>
            <div>
                <img
                    className="w-full h-[200px] lg:h-[400px] object-cover"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/759dc829-d242-41b3-b2ec-25d2e4602268/VN-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="/"
                />
                <div className="w-full h-[550px] bg-gradient-to-b from-black fixed top-0 left-0"></div>
            </div>
            <div className="absolute top-[10%] lg:top-[20%] p-4 ml-12">
                <p className="text-3xl font-bold">My Movies</p>
            </div>
            <SavedMovies />
        </>
    );
};

export default Account;
