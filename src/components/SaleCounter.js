import React, { useState, useEffect } from 'react';

function SaleCounter() {
  const [saleNumber, setSaleNumber] = useState(0);

  useEffect(() => {
    const saleInterval = setInterval(() => {
      setSaleNumber((prevSaleNumber) => prevSaleNumber + 1);
    }, 50000); // Change the sale every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(saleInterval);
  }, []);

  return (
    <div>
      
      <p>SaleNumber: {saleNumber}</p>
    </div>
  );
}

export default SaleCounter;
