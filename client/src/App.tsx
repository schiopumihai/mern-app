import React from 'react';
import { Login } from './components/Login';
import classNames from 'classnames';
import { NavBar } from './components/NavBar';

const styles = {
  container: classNames('flex', 'flex-col', 'h-screen'),
};

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Login />
      </div>
    </>
  );
};

export default App;
