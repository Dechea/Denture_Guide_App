import CartContainer from '../../../components/CartContainer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CartContainer>{children}</CartContainer>;
}
