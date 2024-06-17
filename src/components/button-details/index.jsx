import '../../styles/styles.scss';

function ButtonDetails({ text, id }) {
  const isLoupeIconButton = id === 'loupe';

  return (
    <button className='button' type='button'>
      {text}
      {isLoupeIconButton ? (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <circle cx='11' cy='11' r='6' stroke='#222222' />
          <path
            d='M11 8C10.606 8 10.2159 8.0776 9.85195 8.22836C9.48797 8.37913 9.15726 8.6001 8.87868 8.87868C8.6001 9.15726 8.37913 9.48797 8.22836 9.85195C8.0776 10.2159 8 10.606 8 11'
            stroke='#222222'
            strokeLinecap='round'
          />
          <path d='M20 20L17 17' stroke='#222222' strokeLinecap='round' />
        </svg>
      ) : (
        <svg
          width='21'
          height='20'
          viewBox='0 0 21 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z'
            fill='white'
          />
        </svg>
      )}
    </button>
  );
}

export default ButtonDetails;
