import React from 'react';
import { Login } from './features/auth/Login';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Layout } from './components/Layout';
import classNames from 'classnames';
import { Main } from './features/main/Main';

const styles = {
  container: classNames('flex', 'flex-col', 'h-screen'),
};

const Message: React.FC = () => <div>Message</div>;
const Friends: React.FC = () => <div>Friends</div>;
const Notifications: React.FC = () => <div>Notifications</div>;


const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <Layout>
        <Routes>
          <Route path="/signIn" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Main />} />
            <Route path="friends" element={<Friends />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="messages" element={<Message />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
