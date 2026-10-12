import Icon from '@/shared/ui/Icon';

import './LinkButton.scss';

export type LinkButtonIcon = 'deploy' | 'github';

interface LinkButtonProps {
  href: string;
  icon: LinkButtonIcon;
  label: string;
}

function LinkButton({ href, icon, label }: LinkButtonProps) {
  return (
    <a
      aria-label={label}
      className='link-button'
      href={href}
      rel='noopener noreferrer'
      role='button'
      target='_blank'>
      <Icon name={icon} />
    </a>
  );
}

export default LinkButton;