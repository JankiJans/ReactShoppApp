import styles from './ProductImage.module.scss';

const ProductImage = (props) => {
    return (
        <div className={styles.imageContainer}>
            <img className={styles.image} alt={`${props.title} - ${props.color} - ${props.size}`} size={props.size} src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />
        </div>
    );
};

export default ProductImage;