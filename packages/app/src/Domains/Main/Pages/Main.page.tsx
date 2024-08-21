import { Page } from '@app/Aplication';
import { TextareaPrompt } from '../Components';

export const MainPage = () => {
  return (
    <Page title="Synapse" size="small">
      <div></div>
      <TextareaPrompt />
    </Page>
  );
};
