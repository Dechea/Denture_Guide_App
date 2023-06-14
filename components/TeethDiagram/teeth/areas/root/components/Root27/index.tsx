import Root27 from './Root27';
import Root27Left from './components/Root27Left';
import Root27Middle from './components/Root27Middle';
import Root27Right from './components/Root27Right';

export { Root27, Root27Left, Root27Middle, Root27Right };

export const ComposedRoot27 = () => {
  return (
    <Root27>
      <Root27Middle />
      <Root27Left />
      <Root27Right />
    </Root27>
  );
};
