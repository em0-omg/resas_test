import { useMediaQuery } from 'react-responsive';

const useResponsive = () => {
  const isDesktop: boolean = useMediaQuery({ query: '(min-width: 768px)' });
  return { isDesktop };
};

export default useResponsive;
