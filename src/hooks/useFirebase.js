import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init'

// calling the initial authentication as initAuthentication function to run the authentication related firebase code
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    // const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
                //save user to the database
                const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT');
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // Sign up or Registration
    const processSignup = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // //save user to the database
                // saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then((result) => {
                        setUser(result.user);
                    })
                    .catch((error) => {
                        setAuthError(error.message);
                    });
                navigate.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Sign in or login
    const processLogin = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // alert('successfully logged in');
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    //log out functionality
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };
    //     fetch('https://hidden-ravine-16154.herokuapp.com/myProfile/', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()
    // }

    // useEffect(() => {
    //     fetch(`https://hidden-ravine-16154.herokuapp.com/myProfile`)
    //         .then(res => res.json())
    //         .then(data => setAdmin(data.admin));
    // }, [user.email])


    return {
        user,
        setUser,
        // admin,
        authError,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        processSignup,
        processLogin,
        logOut,
    }
};

export default useFirebase;