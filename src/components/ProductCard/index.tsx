import React from 'react';

type Props = {
  img: string;
  title: string;
  description: string;
  value: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ProductCard: React.FC<Props> = ({img, title, description, value, ...props}) => {
  return (
    <>
      <button className='w-[350px] h-[160px] rounded-md flex items-center justify-center gap-2 bg-[#727272]' {...props}>
        <img className='w-[123px] h-[123px] rounded-full' width={123} height={123} src={img && img} alt={title + 'img'}/>
        <div className='flex flex-col gap-2 w-[160px]'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <p className='text-sm'>{description}</p>
          <p className='text-sm text-lime-500 font-bold'>Valor: {value} R$</p>
        </div>
      </button>
    </>
  );
};

export default ProductCard;