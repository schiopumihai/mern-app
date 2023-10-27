import React from 'react';
import { Login } from './components/Login';
import { NavBar } from './components/NavBar';
import { useAuth } from './hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { Layout } from './components/Layout';
import classNames from 'classnames';
import { useGetAllUsersQuery } from './app/service/usersService';
import { selectToken } from './features/user/userSlice';
import { useSelector } from 'react-redux';

const styles = {
  container: classNames('flex', 'flex-col', 'h-screen'),
};

const Message: React.FC = () => <div>Message</div>;
const Friends: React.FC = () => <div>Friends</div>;
const Notifications: React.FC = () => <div>Notifications</div>;
const Main: React.FC = () => {
  const { data, isLoading } = useGetAllUsersQuery();

  return <div>{isLoading || data?.map((item: any) => <div key={item?._id}>{item.username}</div>)}</div>;
};

const App: React.FC = () => {
  const access = useSelector(selectToken);
  console.log({ access });

  return (
    <div className={styles.container}>
      {access && <NavBar />}
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
