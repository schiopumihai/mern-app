import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { Dialog } from './Dialog';
import { Input } from './Input';
import { Button } from './Button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: any): Promise<any> => {
    // const token = await axios.post('http://localhost:5000/auth/logIn', data);
    // console.log({ token });

    setAuth?.({ username: data?.username });
    navigate('/');
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
            Continue
          </Button>
        </Dialog.Actions>
      </Dialog>
    </div>
  );
};
