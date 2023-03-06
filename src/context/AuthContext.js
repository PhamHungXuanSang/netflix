import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

// Tao const context
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        // Khi đký user, auto set dữ liệu của doc là users có email vừa đký, gồm 1 arr savedMovies rỗng
        setDoc(doc(db, 'users', email), {
            savedMovies: [],
        });
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    });

    return <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>{children}</AuthContext.Provider>;
};

export function UserAuth() {
    return useContext(AuthContext);
}
