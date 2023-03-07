import styles from './OptionSizes.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const OptionSizes = (props) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size) => ( console.log(size),
          <li key={shortid()}>
            <button
              type="button"
              className={clsx(styles.size, size.name === props.currentSize && styles.active)}
              onClick={(e) => {
                e.preventDefault();
                props.setCurrentSize(size.name);
                props.setCurrentPrice(size.additionalPrice);
              }}
            >
              {size.name}
            </button>
          </li>         
        ))}
      </ul>
    </div>
  );
};

OptionSizes.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
};

export default OptionSizes;
