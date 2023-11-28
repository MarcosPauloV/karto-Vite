import ProductModalCardDashBoard from '@components/ProductModalCardDeshBoard';
import React from 'react';

import { useEffect, useState } from 'react';
import { data } from 'services/api/data';

export interface ICard {
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

const ProductList: React.FC = () => {

  const [apiData, setApiData] = useState<IEmpressData | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setApiData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main className='w-[87.2vw] h-[100vh] flex items-center justify-center flex-col bg-[#D8D9D8] gap-16'>
        {apiData ? (
          <>
            <div className="grid grid-cols-2 gap-2 w-[720px]">
              {apiData.cards.map((card, index) => (
                <>
                  <ProductModalCardDashBoard card={card} key={index} />
                </>
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

export default ProductList;