import { Box, Modal, Typography } from "@mui/material";
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
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Buy = (props: IBuyProps) => {

  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <a className=""></a>
      <section className="w-[98vw] h-screen">
        <article className="w-96 h-96">
          <div className="card w-96 bg-base-100 shadow-xl">
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
                <Box sx={style}>
                  <p>{props.description}</p>
                  <p>{props.value}</p>
                  <Button >Assinar</Button>
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