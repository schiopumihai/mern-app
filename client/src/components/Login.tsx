import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { Dialog } from './Dialog';
import { Input } from './Input';
import { Button } from './Button';

export const Login: React.FC = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: any): Promise<any> => {
    const token = await axios.post('http://localhost:5000/auth/logIn', data);

    console.log({ token });
  };

  return (
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
          render={({ field }) => <Input label="Password" {...field} />}
        />
      </Dialog.Content>
      <Dialog.Actions>
        <Button className="w-[100%]" onClick={handleSubmit(onSubmit)}>
          Continue
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};
