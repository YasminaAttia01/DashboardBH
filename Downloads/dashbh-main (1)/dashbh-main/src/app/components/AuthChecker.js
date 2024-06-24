
"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import Cookies from 'js-cookie';

const AuthChecker = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated');
        console.log(authenticated);

        if (!authenticated && router.pathname !== '/') {
            router.push('/'); 
        } else if (authenticated ) {
            router.push('/Articles'); 
        }
    }, [router]); 

    return children;
};

export default AuthChecker;

