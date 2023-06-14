import Root46 from './Root46';
import Root46Left from './components/Root46Left';
import Root46Right from './components/Root46Right';

export { Root46, Root46Left, Root46Right };

export const ComposedRoot46 = () => {
  return (
    <Root46>
      <Root46Left />
      <Root46Right />
    </Root46>
  );
};
