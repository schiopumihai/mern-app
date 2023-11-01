import React from 'react';
import { Login } from './features/auth/Login';
import { NavBar } from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import classNames from '@/utils/classNames';
import { Feed } from './features/feed/Feed';

const styles = {
  container: classNames('flex', 'flex-col', 'h-screen'),
  content: classNames('pt-[18px]', 'h-full'),
};

const Message: React.FC = () => <div>Message</div>;
const Friends: React.FC = () => <div>Friends</div>;
const Notifications: React.FC = () => <div>Notifications</div>;

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      {localStorage.getItem('accessToken') && <NavBar />}
      <div className={styles.content}>
        <Routes>
          <Route path="/signIn" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Message />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
