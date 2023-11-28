import { Box, Modal } from "@mui/material";
import Button from "@shared/Button";
import { useState } from "react";

interface IBuyProps {
  image: string;
  title: string;
  description: string;
  value: number;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px'
};

const Buy = (props: IBuyProps) => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <a className=""></a>
      <section className="w-80 h-72">
        <article className="w-full h-full">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{props.title}</h2>
              <figure className="px-10 pt-10">
                <img src={props.image} alt='pizza' width={300} height={300} />
              </figure>
              <p className="font-medium text-base">R$ {props.value} /mês</p>
              <p className="text-base">{props.description}</p>
              <Button onClick={handleOpen}>Open modal</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} >
                  <div className='gap-4 flex items-center justify-center flex-col'>
                    <p>{props.description}</p>
                    <p>{props.value}</p>
                    <Button onClick={() => window.location.href = '/registrar'}>Assinar</Button>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </article>
      </section>;
    </>
  );
};

export default Buy;