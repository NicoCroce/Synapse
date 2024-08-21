import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink, NavLinkRenderProps } from 'react-router-dom';

const styleLink =
  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary';

export const NavBar = ({ className = '' }: { className?: string }) => {
  const isActiveLink = ({ isActive }: NavLinkRenderProps): string => {
    return isActive ? styleLink + ' bg-muted' : styleLink;
  };

  return (
    <nav className={`${className} navbar flex flex-col gap-2 md:p-4`}>
      <NavLink to="/" className={isActiveLink}>
        <FontAwesomeIcon icon={faUser} />
        Usuarios
      </NavLink>
      <NavLink to="/" className={isActiveLink}>
        <FontAwesomeIcon icon={faFile} />
        Productos
      </NavLink>
    </nav>
  );
};
