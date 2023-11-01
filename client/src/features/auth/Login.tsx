import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '../../components/Dialog';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useLogInMutation } from '../../app/service/authService';
import { setUser } from '@/features/user/userSlice';
import classNames from '@/utils/classNames';

const styles = {
  container: classNames('h-full'),
  button: classNames('w-full'),
};

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logIn, { data, isSuccess, isLoading }] = useLogInMutation();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
      navigate('/feed');
    }
  }, [data, dispatch, isSuccess, navigate]);

  const onSubmit = async (data: any): Promise<any> => {
    await logIn(data);
  };

  return (
    <div className={styles.container}>
      <Dialog>
        <Dialog.Title>LogIn</Dialog.Title>
        <Dialog.Content>
          <Controller
            control={control}
            name="username"
            render={({ field }) => <Input label="Email" {...field} />}
          />

          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <Input label="Password" type="password" {...field} />
            )}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button className={styles.button} onClick={handleSubmit(onSubmit)}>
            {isLoading ? 'Loading...' : 'Continue'}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </div>
  );
};
