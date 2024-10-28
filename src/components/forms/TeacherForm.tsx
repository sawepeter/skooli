import React from 'react';
import InputField from '../InputField';
import { register } from 'module';

const TeacherForm = () => {
  return (
    <form action="" className='flex flex-col gap-8' onSubmit={onsubmit}>
        <h1 className='text-xl font-semibold'>Create a new teacher</h1>
        <span className='text-xs text-gray-400 font-medium'>Authentication Information</span>
        <div className='flex justify-between flex-wrap gap-4'>
            <InputField label='Username' name='username' defaultValue={data?.username} register={register} error={errors?.username} />
            <InputField label='Email' name='email' defaultValue={data?.email} register={register} error={errors?.email} />
            <InputField label='Password' name='password' defaultValue={data?.password} register={register} error={errors?.password} />
            <span className='text-xs text-gray-400 font-medium'>
                Personal Information
            </span>
            <div className='flex justify-between flex-wrap gap-4'>
            <InputField label='First Name' name='firstName' defaultValue={data?.firstName} register={register} error={errors?.firstName} />
            <InputField label='Last Name' name='lastName' defaultValue={data?.lastName} register={register} error={errors?.lastName} />
            <InputField label='Phone' name='phone' defaultValue={data?.phone} register={register} error={errors?.phone} />
            <InputField label='Address' name='address' defaultValue={data?.address} register={register} error={errors?.address} />
            <InputField label='Blood Type' name='bloodType' defaultValue={data?.bloodType} register={register} error={errors?.bloodType} />
            <InputField label='Birthday' name='birthday' defaultValue={data?.birthday} register={register} error={errors?.birthday} />
            

            </div>
        </div>

    </form>
  )
}

export default TeacherForm;