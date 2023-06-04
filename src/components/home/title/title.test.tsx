import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';
import Title from '.';

test('test home page', async () => {
  // ARRANGE
  const component = renderer.create(
    <Title />,
  );
  let tree = component.toJSON()!;
  expect(tree).toMatchSnapshot();

  // re-rendering
  (tree as any) = component.toJSON();
  expect(tree).toMatchSnapshot();
})


