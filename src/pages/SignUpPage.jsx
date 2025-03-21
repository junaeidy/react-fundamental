import React from 'react'
import { Button, Card, CardBody, CardHeader, Divider, Input } from '@heroui/react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpFormSchema = z.object({
  email: z.string().email("Format email belum sesuai"),
  username: z.string().min(4, "Username harus memiliki minimal 4 karakter"),
  password: z.string().min(6, "Password harus memiliki minimal 6 karakter"),
});

const SignUpPage = () => {
  const form = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
    resolver: zodResolver(signUpFormSchema),
  });

const registerUser = (data) => {
    console.log(data);
}

  return (
    <div className='flex h-screen items-center justify-center'>
        <Card className='w-[300px]'>
            <CardHeader className='font-semibold text-lg'>Sign Up!</CardHeader>
            <Divider />
            <CardBody>
                <form onSubmit={form.handleSubmit(registerUser)} className='flex flex-col gap-4'>
                  <Controller
                    name='email'
                    control={form.control}
                    render={({field, fieldState}) => {
                      return <Input {...field} type='email' label="Email" size='sm' isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message}/>
                    }}
                  />
                  <Controller
                    name='username'
                    control={form.control}
                    render={({field, fieldState}) => {
                      return <Input {...field} label="Username" size='sm' isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message}/>
                    }}
                  />
                  <Controller
                    name='password'
                    control={form.control}
                    render={({field, fieldState}) => {
                      return <Input {...field} type='password' label="Password" size='sm' isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message}/>
                    }}
                  />
                  <Button type='submit' color='primary'>Sign Up</Button>
                </form>
            </CardBody>
        </Card>
    </div>
  )
}

export default SignUpPage
