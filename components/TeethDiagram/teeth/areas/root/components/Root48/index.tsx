import Root48 from './Root48';
import Root48Left from './components/Root48Left';
import Root48Right from './components/Root48Right';

export { Root48, Root48Left, Root48Right };

export const ComposedRoot48 = () => {
  return (
    <Root48>
      <Root48Left />
      <Root48Right />
    </Root48>
  );
};
