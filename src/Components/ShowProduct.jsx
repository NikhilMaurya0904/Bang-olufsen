import React, { useCallback } from 'react';
import { GrClose } from 'react-icons/gr';
import Button from "../Components/Button"
const ShowProduct = React.memo(({ setopenProduct, openProduct, showproductdata }) => {
  const handleClose = useCallback(() => {
    setopenProduct(false);
  }, [setopenProduct]);

  return (
    <div
      className={`fixed h-screen z-[99] ${
        openProduct ? ' md:w-[35%]  w-full ' : 'w-0 '
      } top-0 transition-all overflow-hidden duration-1000 right-0 bg-[#fff]`}
    >
      <div className="w-full h-[15%] flex justify-end items-center px-10  ">
        <GrClose onClick={handleClose} className="text-2xl max-md:text-lg" />
      </div>
      <div className="w-full h-[85%] max-md:h-[60%] px-[5%]">
        <div className="w-full h-[75%] ">
          {showproductdata?.productImage && (
            <img
              className="w-full h-full object-cover"
              src={showproductdata.productImage}
              alt={showproductdata.title || 'Product Image'}
              loading="lazy"
            />
          )}
        </div>
        <h2 className="font-primary pt-2 uppercase">{showproductdata.title}</h2>
        <h4 className="text-2xl pt-1 font-Secondary">{showproductdata.des}</h4>
        <h5 className="text-sm font-primary">{showproductdata.price}</h5>

        <Button text={"Experience in Store"}/>
      </div>
    </div>
  );
});

export default ShowProduct;
