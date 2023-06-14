import Root26 from './Root26';
import Root26Left from './components/Root26Left';
import Root26Middle from './components/Root26Middle';
import Root26Right from './components/Root26Right';

export { Root26, Root26Left, Root26Middle, Root26Right };

export const ComposedRoot26 = () => {
  return (
    <Root26>
      <Root26Middle />
      <Root26Left />
      <Root26Right />
    </Root26>
  );
};
