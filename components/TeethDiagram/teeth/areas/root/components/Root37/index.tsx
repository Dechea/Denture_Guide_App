import Root37 from './Root37';
import Root37Left from './components/Root37Left';
import Root37Right from './components/Root37Right';

export { Root37, Root37Left, Root37Right };

export const ComposedRoot37 = () => {
  return (
    <Root37>
      <Root37Left />
      <Root37Right />
    </Root37>
  );
};
