import { useRouter } from 'next/router';
import { motion as m, AnimatePresence } from 'framer-motion';
import './global.css';

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    return (
        <AnimatePresence
            mode='wait'
            initial={false}
        >
            <m.div
                key={router.pathname}
            >
                <Component {...pageProps} />

                <m.div
                    className='slide-in'
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img src='/dog.png' className='dogdiv' />
                </m.div>
                <m.div
                    className='slide-out'
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img src='/dog.png' className='dogdiv'/>
                </m.div>
            </m.div>
        </AnimatePresence>
    )
}

export default App;
