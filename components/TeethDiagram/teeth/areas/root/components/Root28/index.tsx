import Root28 from './Root28';
import Root28Left from './components/Root28Left';
import Root28Middle from './components/Root28Middle';
import Root28Right from './components/Root28Right';

export { Root28, Root28Left, Root28Middle, Root28Right };

export const ComposedRoot28 = () => {
  return (
    <Root28>
      <Root28Middle />
      <Root28Left />
      <Root28Right />
    </Root28>
  );
};
