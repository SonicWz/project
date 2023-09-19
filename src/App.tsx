import { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutLazy } from './pages/AboutLazy';
import { MainLazy } from './pages/MainLazy';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



const App = () => {
  const {theme, changeTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={changeTheme}>theme</button>

            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path={'/about'} element={<AboutLazy />}></Route>
                <Route path={'/'} element={<MainLazy />}></Route>
              </Routes>
            </Suspense>
        </div>
    );
};

export default App;
