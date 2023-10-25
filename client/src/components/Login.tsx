import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Dialog } from './Dialog';
import { Input } from './Input';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import { useLogInMutation } from '../app/service/auth';

export const Login: React.FC = () => {
  const [test, {data}]= useLogInMutation()
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // console.log({data});
  

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate('/');
  //   }
  // }, [isSuccess, navigate]);

  const onSubmit = async (data: any): Promise<any> => {
    console.log({data});
    
    // await test(data);
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
