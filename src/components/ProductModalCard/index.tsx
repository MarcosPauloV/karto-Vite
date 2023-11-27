import ProductCard from '@components/ProductCard';
import { Box, Modal } from '@mui/material';
import { ICard } from 'app/(empress)/dashboard/products/page';
import Image from 'next/image';
import { useState } from 'react';

interface IProductModalCard {
  card: ICard;
}

const ProductModalCard = ({card}: IProductModalCard) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <ProductCard
        img={card.img} 
        description={card.description} 
        title={card.title} 
        value={card.value}
        onClick={handleOpen}
      />
      <Modal 
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className='w-full h-full flex flex-col items-center justify-center gap-3'>
            <div className='w-40 flex items-center justify-center flex-col gap-2'>
              <Image alt='' src={card.img} width={123} height={123}/>
              <p className='text-black'>{card.title}</p>
              <p className='text-black'>{card.description}</p>
              <p className='text-black'>{card.value}</p>
            </div>
            <button className='px-5 py-3 bg-yellow-400 rounded'>
              Comprar
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ProductModalCard;