import React from "react";
import {
  RowGray,
  RowHead,
  RowWhite,
  Title,
} from "../styled-components/showTable.style";
const ShowTable = (data) => {
  function isNegative(num) {
    if (Math.sign(num) === -1) {
      return true;
    }
    return false;
  }
  let grid = null;
  console.log(data);
  return (
    <>
      <Title>Comparative Analysis</Title>
      <RowHead>
        <div className="name">Nombre</div>
        <div>SKU</div>
        <div>% Presencia</div>
        <div>Av. Price</div>
        <div>Av. Position</div>
      </RowHead>
      {data !== undefined || data !== null ? (
        <>
          {data.data.map((items) => {
            console.log(isNegative(items.persistence));
            return grid === null || grid === false ? (
              <RowWhite>
                <div className="img">
                  <img src={items.productImage} alt="" />
                </div>
                <div className="nameProduct">{items.name}</div>
                <div>{items.sku}</div>
                <div
                  className={
                    isNegative(items.persistence * 100)
                      ? "negative"
                      : "positive"
                  }
                >
                  {items.persistence * 100}%
                </div>
                <div>${items.averagePrice.toFixed(2)}</div>
                <div>{items.averagePosition}</div>
                {(grid = true)}
              </RowWhite>
            ) : (
              <RowGray>
                <div className="img">
                  <img src={items.productImage} alt="" />
                </div>
                <div className="nameProduct">{items.name}</div>
                <div>{items.sku}</div>
                <div
                  className={
                    isNegative(items.persistence * 100)
                      ? "negative"
                      : "positive"
                  }
                >
                  {items.persistence * 100}%
                </div>
                <div>${items.averagePrice.toFixed(2)}</div>
                <div>{items.averagePosition}</div>
                {(grid = false)}
              </RowGray>
            );
          })}
        </>
      ) : (
        ""
      )}
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default ShowTable;
