import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Dialog } from './Dialog';
import { Input } from './Input';
import { Button } from './Button';
import { useLogInMutation } from '../app/service/auth';
import { setUser } from '@/features/user/userSlice';

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
    if (isSuccess && data?.accessToken) {
      dispatch(setUser({ accessToken: data?.accessToken }));
      navigate('/');
    }
  }, [data?.accessToken, dispatch, isSuccess, navigate]);

  const onSubmit = async (data: any): Promise<any> => {
    console.log({ data });

    await logIn(data);
  };

  return (
    <div className="h-[100%]">
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
          <Button className="w-[100%]" onClick={handleSubmit(onSubmit)}>
            {isLoading ? 'Loading...' : 'Continue'}
          </Button>
        </Dialog.Actions>
      </Dialog>
    </div>
  );
};
