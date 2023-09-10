import React from 'react';
import { Login } from './components/Login';
import classNames from 'classnames';

const styles = {
  container: classNames('flex', 'flex-col', 'h-screen'),
};

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
};

export default App;
