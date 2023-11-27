import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name = '', placeholder, ...props }, ref) => {
    Input.displayName = 'Input';
    return (
      <>
        <input
          className='bg-light border w-full py-2 px-3 border-black text-black placeholder-black rounded leading-tight focus:outline-none focus:shadow-outline'
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);
