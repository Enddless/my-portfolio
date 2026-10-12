import type { ReactNode } from 'react';

export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'code'
  | 'deploy'
  | 'email'
  | 'gauge'
  | 'github'
  | 'layers'
  | 'moon'
  | 'phone'
  | 'shield'
  | 'sun'
  | 'telegram';

interface IconDefinition {
  viewBox: string;
  content: ReactNode;
}

const icons: Record<IconName, IconDefinition> = {
  'arrow-left': {
    viewBox: '0 0 24 24',
    content: (
      <path
        d='M15 4.5 7.5 12l7.5 7.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    )
  },
  'arrow-right': {
    viewBox: '0 0 24 24',
    content: (
      <path
        d='M9 4.5 16.5 12 9 19.5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    )
  },
  code: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path
          d='M8.5 8 4.5 12l4 4'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.5 8l4 4-4 4'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </>
    )
  },
  gauge: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path
          d='M4 17a8 8 0 1 1 16 0'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 13.5 16 9.5'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
        />
        <circle cx='12' cy='14' r='1.5' fill='currentColor' />
      </>
    )
  },
  layers: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path
          d='m12 3 9 5-9 5-9-5 9-5Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='m3 13 9 5 9-5'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </>
    )
  },
  shield: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path
          d='M12 3 5 6v5.5c0 4 2.9 7.7 7 9.5 4.1-1.8 7-5.5 7-9.5V6l-7-3Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='m9 12 2 2 4-4'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </>
    )
  },
  deploy: {
    viewBox: '0 0 24 24',
    content: (
      <>
        <path
          d='M6.5 17.5 17.5 6.5'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 6.5h9.5V16'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </>
    )
  },
  email: {
    viewBox: '0 0 40 40',
    content: (
      <>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M32.34 20.2954C32.34 19.3736 32.2573 18.4873 32.1036 17.6364H19.86V22.665H26.8563C26.555 24.29 25.6391 25.6668 24.2623 26.5886V29.8504H28.4636C30.9218 27.5873 32.34 24.2545 32.34 20.2954Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.8601 33C23.3701 33 26.3128 31.8359 28.4637 29.8505L24.2623 26.5886C23.0982 27.3686 21.6092 27.8295 19.8601 27.8295C16.4742 27.8295 13.6083 25.5427 12.586 22.47H8.2428V25.8382C10.3819 30.0868 14.7783 33 19.8601 33Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M12.5859 22.47C12.3259 21.69 12.1782 20.8568 12.1782 20C12.1782 19.1432 12.3259 18.31 12.5859 17.53V14.1618H8.24271C7.36226 15.9168 6.85999 17.9023 6.85999 20C6.85999 22.0977 7.36226 24.0832 8.24271 25.8382L12.5859 22.47Z'
          fill='currentColor'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M19.8601 12.1705C21.7687 12.1705 23.4823 12.8264 24.8296 14.1145L28.5582 10.3859C26.3069 8.28818 23.3642 7 19.8601 7C14.7783 7 10.3819 9.91318 8.2428 14.1618L12.586 17.53C13.6083 14.4573 16.4742 12.1705 19.8601 12.1705Z'
          fill='currentColor'
        />
      </>
    )
  },
  github: {
    viewBox: '0 0 28 28',
    content: (
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.995 0.700012C10.6921 0.701726 7.49758 1.87153 4.98254 4.00026C2.46751 6.12899 0.795998 9.07783 0.266897 12.3195C-0.262204 15.5612 0.385599 18.8843 2.09449 21.6946C3.80337 24.5049 6.4619 26.6192 9.5947 27.6594C10.2858 27.7877 10.5462 27.3594 10.5462 26.9951C10.5462 26.6309 10.5323 25.5749 10.5277 24.4204C6.65732 25.2565 5.83947 22.7871 5.83947 22.7871C5.20823 21.1836 4.29591 20.7621 4.29591 20.7621C3.03342 19.9054 4.39037 19.9214 4.39037 19.9214C5.78879 20.0199 6.52371 21.3485 6.52371 21.3485C7.76317 23.4629 9.779 22.8512 10.5715 22.4939C10.6959 21.5982 11.0576 20.9889 11.4562 20.643C8.36446 20.2948 5.11607 19.1082 5.11607 13.8075C5.09691 12.4328 5.60995 11.1033 6.54905 10.0942C6.40622 9.74605 5.92932 8.33955 6.68497 6.42909C6.68497 6.42909 7.85302 6.058 10.5116 7.84705C12.792 7.22698 15.198 7.22698 17.4784 7.84705C20.1347 6.058 21.3004 6.42909 21.3004 6.42909C22.0584 8.33497 21.5815 9.74147 21.4386 10.0942C22.3807 11.1035 22.8948 12.4353 22.8739 13.8121C22.8739 19.1242 19.6186 20.2948 16.5223 20.6361C17.0199 21.0668 17.4646 21.9075 17.4646 23.1994C17.4646 25.0503 17.4484 26.5393 17.4484 26.9951C17.4484 27.3639 17.6995 27.7946 18.4045 27.6594C21.5377 26.6191 24.1965 24.5044 25.9053 21.6936C27.6142 18.8828 28.2616 15.5592 27.7319 12.3172C27.2022 9.07527 25.5299 6.1264 23.014 3.99804C20.4982 1.86968 17.3029 0.70064 13.9996 0.700012H13.995Z'
        fill='currentColor'
      />
    )
  },
  moon: {
    viewBox: '0 0 20 20',
    content: (
      <path
        d='M14.06 12.991a5.487 5.487 0 0 1-4.174-1.611A5.487 5.487 0 0 1 8.27 7.475c0-.841.187-1.652.537-2.386a5.46 5.46 0 0 1 .562-.922c-.385.04-.754.121-1.114.233a5.855 5.855 0 0 0-4.088 5.582 5.85 5.85 0 0 0 10.957 2.852 5.204 5.204 0 0 1-1.064.157Z'
        fill='currentColor'
      />
    )
  },
  phone: {
    viewBox: '0 0 40 40',
    content: (
      <path
        d='M13.6796 12.3204L14.2929 11.7071C14.6834 11.3166 15.3166 11.3166 15.7071 11.7071L18.2929 14.2929C18.6834 14.6834 18.6834 15.3166 18.2929 15.7071L16.5005 17.4995C16.2016 17.7984 16.1275 18.255 16.3165 18.6331C17.4093 20.8186 19.1814 22.5907 21.3669 23.6835C21.745 23.8725 22.2016 23.7984 22.5005 23.4995L24.2929 21.7071C24.6834 21.3166 25.3166 21.3166 25.7071 21.7071L28.2929 24.2929C28.6834 24.6834 28.6834 25.3166 28.2929 25.7071L27.6796 26.3204C25.5683 28.4317 22.2257 28.6693 19.837 26.8777L18.6286 25.9714C16.885 24.6638 15.3362 23.115 14.0286 21.3714L13.1223 20.163C11.3307 17.7743 11.5683 14.4317 13.6796 12.3204Z'
        fill='currentColor'
      />
    )
  },
  sun: {
    viewBox: '0 0 20 20',
    content: (
      <path
        d='M9.994 2.502a.463.463 0 0 0-.059.015.468.468 0 0 0-.365.468V4.39a.468.468 0 1 0 .936 0V2.985a.468.468 0 0 0-.512-.483ZM5.019 4.565a.469.469 0 0 0-.278.805l.98.995a.476.476 0 0 0 .674-.673l-.995-.98a.468.468 0 0 0-.381-.147Zm9.935 0a.469.469 0 0 0-.278.147l-.995.98a.476.476 0 0 0 .673.674l.98-.995a.468.468 0 0 0-.336-.805h-.044Zm-4.916 1.697a3.757 3.757 0 0 0-3.746 3.746 3.757 3.757 0 0 0 3.746 3.746 3.757 3.757 0 0 0 3.746-3.746 3.757 3.757 0 0 0-3.746-3.746ZM2.926 9.54a.47.47 0 1 0 .088.937H4.42a.468.468 0 1 0 0-.937H2.926Zm12.643 0a.47.47 0 1 0 .087.937h1.405a.468.468 0 1 0 0-.937H15.57Zm-1.595 3.966a.469.469 0 0 0-.059.014.468.468 0 0 0-.234.805l.995-.98a.468.468 0 1 0 .658-.658l-.98-.995a.468.468 0 0 0-.38-.146Zm-7.975.014a.468.468 0 0 0-.278.132l-.98.995a.468.468 0 1 0 .658.658l.995-.98A.469.469 0 0 0 6 13.52Zm3.995 1.624a.466.466 0 0 0-.059.015.468.468 0 0 0-.366.468v1.405a.468.468 0 1 0 .937 0v-1.405a.468.468 0 0 0-.512-.483Z'
        fill='currentColor'
      />
    )
  },
  telegram: {
    viewBox: '0 0 40 40',
    content: (
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.05344 19.7889C14.8838 17.2487 18.7717 15.574 20.717 14.7649C26.2712 12.4547 27.4253 12.0534 28.1776 12.0402C28.343 12.0373 28.7129 12.0783 28.9526 12.2727C29.1549 12.4369 29.2106 12.6587 29.2372 12.8143C29.2639 12.97 29.297 13.3246 29.2707 13.6017C28.9697 16.7641 27.6673 24.4386 27.0047 27.9806C26.7244 29.4794 26.1724 29.9819 25.6379 30.0311C24.4765 30.138 23.5946 29.2635 22.4696 28.5261C20.7094 27.3723 19.7149 26.654 18.0063 25.528C16.0317 24.2268 17.3118 23.5116 18.4371 22.3428C18.7316 22.0369 23.8489 17.3823 23.948 16.96C23.9603 16.9072 23.9718 16.7104 23.8549 16.6065C23.738 16.5025 23.5654 16.5381 23.4408 16.5663C23.2643 16.6064 20.4522 18.465 15.0047 22.1423C14.2065 22.6904 13.4835 22.9574 12.8358 22.9434C12.1217 22.928 10.748 22.5397 9.72685 22.2077C8.47435 21.8006 7.47888 21.5853 7.56556 20.8939C7.61071 20.5337 8.10667 20.1654 9.05344 19.7889Z'
        fill='currentColor'
      />
    )
  }
};

interface IconProps {
  name: IconName;
  className?: string;
  title?: string;
}

function Icon({ name, className, title }: IconProps) {
  const icon = icons[name];

  return (
    <svg
      aria-hidden={title ? undefined : true}
      className={className ? `icon ${className}` : 'icon'}
      fill='none'
      height='100%'
      role={title ? 'img' : undefined}
      viewBox={icon.viewBox}
      width='100%'
      xmlns='http://www.w3.org/2000/svg'>
      {title ? <title>{title}</title> : null}
      {icon.content}
    </svg>
  );
}

export default Icon;