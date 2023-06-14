import Root16 from './Root16';
import Root16Left from './components/Root16Left';
import Root16Middle from './components/Root16Middle';
import Root16Right from './components/Root16Right';

export { Root16, Root16Left, Root16Middle, Root16Right };

export const ComposedRoot16 = () => {
  return (
    <Root16>
      <Root16Middle />
      <Root16Left />
      <Root16Right />
    </Root16>
  );
};
