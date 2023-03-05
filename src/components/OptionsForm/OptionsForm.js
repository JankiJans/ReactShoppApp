import OptionColors from '../OptionColors/OptionColors';
import OptionSizes from '../OptionSizes/OptionSizes';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import styles from './OptionsForm.module.scss';

const OptionForm = (props) => {
  return (
    <div>
      <OptionSizes sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} setCurrentPrice={props.setCurrentPrice} />
      <OptionColors colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button className={styles.button} action={props.Summary}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </div>
  );
};

OptionForm.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentPrice: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    Summary: PropTypes.func.isRequired,
};
export default OptionForm;
