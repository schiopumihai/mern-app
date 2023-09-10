import React from 'react';
import { Dialog } from './Dialog';
import { Input } from './Input';
import { Button } from './Button';
import { useForm, Controller } from 'react-hook-form';

export const Login: React.FC = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any): any => {
    console.log({ data });
  };

  return (
    <Dialog>
      <Dialog.Title>LogIn</Dialog.Title>
      <Dialog.Content>
        <Controller
          control={control}
          name="email"
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
