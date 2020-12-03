import React, { useEffect, useState } from 'react';
import Routes from "./Routes";
import Nav from './components/Nav';
import { useLocation } from 'react-router-dom'

const App = () => {
    const [isLogin, setIsLogin] = useState(true);

    const location = useLocation();

    useEffect(() => {
        if(!(location.pathname === '/')) {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location]);

    return (
        <div>{
            !isLogin ?
                <div className="App">
                    <div>
                        <Nav />
                    </div>
                    <div>
                        <Routes />
                    </div>
                </div>
                : <div className="App">
                    <Routes />
                </div>
        }
        </div>
    );
}

export default App;
