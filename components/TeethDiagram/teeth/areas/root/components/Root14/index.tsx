import Root14 from './Root14';
import Root14Left from './components/Root14Left';
import Root14Right from './components/Root14Right';

export { Root14, Root14Left, Root14Right };

export const ComposedRoot14 = () => {
  return (
    <Root14>
      <Root14Right />
      <Root14Left />
    </Root14>
  );
};
