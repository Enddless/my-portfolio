import './NavLink.scss';

interface NavLinkProps {
  label: string;
  onClick: () => void;
}

function NavLink({ label, onClick }: NavLinkProps) {
  return (
    <button className='nav-link' data-hover={label} onClick={onClick} type='button'>
      {label}
    </button>
  );
}

export default NavLink;