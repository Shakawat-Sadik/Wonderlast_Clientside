import SignUp from '@/components/0_All/Session/Signup';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const SignupPage = () => {

    const handleForm = async (e) => {
        e.preventDefault;
        const formData = new formData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        console.log(user);
        
        // const { data, error } = await authClient.signUp.email({
        //         email, // user email address
        //         password, // user password -> min 8 characters by default
        //         name, // user display name
        //         image, // User image URL (optional)
        //         callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
        //     }, {
        //         onRequest: (ctx) => {
        //             //show loading
        //         },
        //         onSuccess: (ctx) => {
        //             //redirect to the dashboard or sign in page
        //         },
        //         onError: (ctx) => {
        //             // display the error message
        //             alert(ctx.error.message);
        //         },
        // });
    }

    return (
        <div className="flex flex-col gap-8 md:gap-14 lg:gap-22 justify-center items-center flex-1 h-full m-5 md:m-10 lg:m-20">
            <SignUp handleForm={handleForm} />
        </div>
    );
};

export default SignupPage;