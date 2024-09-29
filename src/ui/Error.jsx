import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div data-auto-id="error-section">
      <h1 data-auto-id="general-error">Something went wrong 😢</h1>
      <p data-auto-id="error-message">{error.data || error.message}</p>

      <LinkButton  to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
