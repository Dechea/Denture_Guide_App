import Root38 from './Root38';
import Root38Left from './components/Root38Left';
import Root38Right from './components/Root38Right';

export { Root38, Root38Left, Root38Right };

export const ComposedRoot38 = () => {
  return (
    <Root38>
      <Root38Left />
      <Root38Right />
    </Root38>
  );
};
