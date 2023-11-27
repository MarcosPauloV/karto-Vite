import ProductCard from '@components/ProductCard';
import { Box, Modal } from '@mui/material';
import { Input } from '@shared/Input';
import { ICard } from 'app/(empress)/dashboard/products/page';
import { useState } from 'react';

interface IProductModalCardDashBoard {
  card: ICard;
}

const ProductModalCardDashBoard = ({card}: IProductModalCardDashBoard) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      console.log(`Você selecionou o arquivo: ${selectedFile.name}`);
    }
  };

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
            <div className='flex gap-2 flex-col'>
              <Input placeholder='Nome do produto' />
              <Input placeholder='Descrição' />
              <Input placeholder='Valor' />
              <div>
                <label
                  htmlFor="file-upload"
                  className="block text-center cursor-pointer border border-black text-black rounded py-2 px-4 "
                >
              Imagem
                </label>
                <input
                  type="file"
                  id="file-upload"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className='flex gap-8'>
              <button className='px-5 py-3 bg-yellow-400 rounded'>
              Editar
              </button>
              <button className='p-3 bg-red-500 rounded'>
              Remover
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ProductModalCardDashBoard;