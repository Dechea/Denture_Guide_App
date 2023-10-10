import CartContainer from '../../../components/CartContainer';

export default function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <CartContainer>{children}</CartContainer>;
}
