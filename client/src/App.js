import React, { useEffect, useState } from 'react'
import { Header } from './components';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { Dashboard, Music, Home, Login, MusicPlayer } from './components'
import { app } from './config/firebase.config'

import { getAuth } from 'firebase/auth'

import { AnimatePresence, motion } from 'framer-motion'
import { validateUser } from './api'
import { useStateValue } from './context/StateProvider'
import { actionType } from './context/reducer'

const App = () => {
    const firebaseAuth = getAuth(app);
    const navigate = useNavigate();
    const location = useLocation();

    const [{ user, isSongPlaying }, dispatch] = useStateValue();

    const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === "true");

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((userCred) => {
            if (userCred) {
                userCred.getIdToken().then((token) => {
                    validateUser(token).then((data) => {
                        dispatch({
                            type: actionType.SET_USER,
                            user: data,
                        });
                    });
                });
            } else {
                setAuth(false);
                window.localStorage.setItem("auth", "false");
                dispatch({
                    type: actionType.SET_USER,
                    user: null,
                });
                navigate("/login")
            }
        });
    }, []);

    return (
        <AnimatePresence exitBeforeEnter>
            <div className='h-auto min-w-[680px] bg-primary flex flex-col justify-center items-center'>
                {/* Hiển thị Header nếu không phải trang login */}
                {location.pathname !== "/login" && <Header />}

                <Routes>
                    <Route path='/login' element={<Login setAuth={setAuth} />} />
                    <Route path='/musics' element={<Music />} />
                    <Route path='/dashboard/*' element={<Dashboard />} />
                    <Route path='/*' element={<Home />} />
                </Routes>

                {isSongPlaying && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="fixed min-w-[700px] h-26 inset-x-0 bottom-0 bg-cardOverlay drop-shadow-2xl backdrop-blur-md flex items-center justify-center"
                    >
                        <MusicPlayer />
                    </motion.div>
                )}
            </div>
        </AnimatePresence>
    )
}

export default App;
