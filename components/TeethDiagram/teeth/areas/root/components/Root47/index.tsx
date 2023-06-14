import Root47 from './Root47';
import Root47Left from './components/Root47Left';
import Root47Right from './components/Root47Right';

export { Root47, Root47Left, Root47Right };

export const ComposedRoot47 = () => {
  return (
    <Root47>
      <Root47Left />
      <Root47Right />
    </Root47>
  );
};
