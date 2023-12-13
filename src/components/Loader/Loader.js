import { Audio } from 'react-loader-spinner';
import { SpinnerCenter } from './Loader.styled';

export const Loader = () => (
  <SpinnerCenter>
    {/* <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    /> */}
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
    />
  </SpinnerCenter>
);
