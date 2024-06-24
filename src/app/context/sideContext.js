"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';

export const SideContext = createContext();

export const SideProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
        const storedNom = localStorage.getItem('nom');
        if (storedNom) {
            setNom(storedNom);
        }
    }, []);

    useEffect(() => {
        if (email) {
            localStorage.setItem('email', email);
        }
    }, [email]);

    useEffect(() => {
        // Save nom to localStorage whenever it changes
        if (nom) {
            localStorage.setItem('nom', nom);
        }
    }, [nom]);

    const handleEmail = (mail) => {
        setEmail(mail);
    };

    const handleNom = (name) => {
        setNom(name);
    };

    const handleSidebar = () => {
        setSidebar(!sidebar);
    };

    const value = {
        email,
        handleEmail,
        sidebar,
        setSidebar,
        handleSidebar,
        nom,
        handleNom,
        setNom,
    };

    return <SideContext.Provider value={value}>{children}</SideContext.Provider>;
};

export function useSide() {
    return useContext(SideContext);
}
