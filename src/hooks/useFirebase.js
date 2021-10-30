import { useEffect, useState } from "react"
import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])



    // Google sign in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }




    // Sign Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user, setUser,
        logOut,
        signInUsingGoogle,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;