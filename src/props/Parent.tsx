import { ChildasFC } from './Child';

const Parent = () => {
  return (
  <ChildasFC color="red" onClick={() => console.log('clicked')}>
    ABC
  </ChildasFC>
  )
};

export default Parent;