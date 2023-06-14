import Root36 from './Root36';
import Root36Left from './components/Root36Left';
import Root36Right from './components/Root36Right';

export { Root36, Root36Left, Root36Right };

export const ComposedRoot36 = () => {
  return (
    <Root36>
      <Root36Left />
      <Root36Right />
    </Root36>
  );
};
