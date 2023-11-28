import FoodTitle from '@components/FoodTitle';
import ProductModalCard from '@components/ProductModalCard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from 'services/api/data';
import { getTenant } from 'services/api/tenant.controller';

const Dynamic: React.FC = () => {

  const { slugId } = useParams();

  interface ICard {
    img: string;
    title: string;
    description: string;
    value: string;
  }

  interface IEmpressData {
    empressId: string;
    description: string;
    logo: string;
    cards: ICard[];
  }

  const [apiData, setApiData] = useState<IEmpressData | undefined>();

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.href = '/cardapio/login'
    }
  }, [])

  useEffect(() => {
    if (slugId != undefined) {
      // setApiData(getTenant(slugId));
    }

    setApiData(data)

  }, [])

  return (
    <>
      <main className='w-screen h-screen flex items-center justify-center flex-col bg-light gap-16'>
        {apiData ? (
          <>
            <FoodTitle img={apiData.logo} title={apiData.empressId} />
            <div className="grid grid-cols-2 gap-2 w-[720px]">
              {apiData.cards.map((card, index) => (
                <ProductModalCard card={card} key={index} />
              ))}
            </div>
          </>
        ) : (
          <p>Carregando dados...</p>
        )}
      </main>
    </>
  );
};

export default Dynamic;