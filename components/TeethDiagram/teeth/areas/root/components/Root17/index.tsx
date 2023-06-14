import Root17 from './Root17';
import Root17Left from './components/Root17Left';
import Root17Middle from './components/Root17Middle';
import Root17Right from './components/Root17Right';

export { Root17, Root17Left, Root17Middle, Root17Right };

export const ComposedRoot17 = () => {
  return (
    <Root17>
      <Root17Middle />
      <Root17Left />
      <Root17Right />
    </Root17>
  );
};
