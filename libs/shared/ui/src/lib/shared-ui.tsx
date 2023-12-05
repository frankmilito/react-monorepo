import styles from './shared-ui.module.css';

/* eslint-disable-next-line */
export interface SharedUiProps {}

const Button = () => {
  return (
    <div
      style={{
        border: 'none',
        padding: '1rem',
        backgroundColor: 'lemonchiffon',
        color: 'black',
        fontSize: '24px',
        borderRadius: '10px',
        textTransform: 'capitalize',
        width: '200px',
        textAlign: 'center',
      }}
    >
      Pay
    </div>
  );
};

export function SharedUi(props: SharedUiProps) {
  return <Button />;
}

export default SharedUi;
