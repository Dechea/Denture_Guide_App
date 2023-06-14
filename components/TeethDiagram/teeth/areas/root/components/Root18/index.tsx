import Root18 from './Root18';
import Root18Left from './components/Root18Left';
import Root18Middle from './components/Root18Middle';
import Root18Right from './components/Root18Right';

export { Root18, Root18Left, Root18Middle, Root18Right };

export const ComposedRoot18 = () => {
  return (
    <Root18>
      <Root18Middle />
      <Root18Left />
      <Root18Right />
    </Root18>
  );
};
