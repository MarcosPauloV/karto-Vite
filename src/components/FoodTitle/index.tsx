import Image from 'next/image';
import React from 'react';

type Props = {
  img: string;
  title: string;
}

const FoodTitle: React.FC<Props> = ({img, title}) => {
  return (
    <>
      <article className='relative flex items-center justify-center'>
        <Image src={img} width={300} height={150} alt='' className='w-full h-auto'/> 
        <div className="w-[320px] absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white font-bold text-xl">
          {title}
        </div>
      </article>
    </>
  );
};

export default FoodTitle;