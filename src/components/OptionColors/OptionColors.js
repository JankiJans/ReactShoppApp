import styles from './OptionColors.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColors = (props) => {

  const prepareColorClassName = (color) => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map((item) => (
          <li key={item}>
            <button
              type="button"
              className={clsx(prepareColorClassName(item), item === item && styles.active)}
              onClick={(e) => {
                e.preventDefault();
                props.setCurrentColor(item);
              }}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionColors.propTypes = {
    colors: PropTypes.array.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColors;
