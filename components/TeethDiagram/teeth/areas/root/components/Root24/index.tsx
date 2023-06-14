import Root24 from './Root24';
import Root24Left from './components/Root24Left';
import Root24Right from './components/Root24Right';

export { Root24, Root24Left, Root24Right };

export const ComposedRoot24 = () => {
  return (
    <Root24>
      <Root24Left />
      <Root24Right />
    </Root24>
  );
};
