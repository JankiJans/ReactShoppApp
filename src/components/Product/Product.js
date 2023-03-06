import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import OptionsForm from '../OptionsForm/OptionsForm';
import { useMemo } from 'react';


const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

  console.log('currentColor: ', currentColor);
  console.log('currentSize: ', currentSize);
  console.log('currentPrice: ', currentPrice);

  const getPrice = () => {
    return props.basePrice + currentPrice;

  };

  const finalPrice = useMemo(() => getPrice(), [currentPrice]);


  const Summary = (e) => {
    e.preventDefault();
    console.log('=== Summary ===',
    'Name:', props.title,
    'Color:', currentColor,
    'Size:', currentSize,
    'price:', finalPrice
    );
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} color={currentColor} size={currentSize}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <form>
         <OptionsForm 
         sizes={props.sizes} 
         currentSize={currentSize} 
         currentColor={currentColor}
         setCurrentSize={setCurrentSize} 
         setCurrentPrice={setCurrentPrice} 
         colors={props.colors} 
         setCurrentColor={setCurrentColor}
         Summary={Summary}
         />
        </form>
      </div>
    </article>
  );
};


Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;
