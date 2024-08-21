import { Button, Container, Text } from '@app/Aplication/Components';
import { Textarea } from '@app/Aplication/Components/ui/textarea';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export const TextareaPrompt = () => {
  const [prompt, setPropmt] = useState('');

  const handleChangeText = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => setPropmt(value);

  return (
    <Container>
      <Text>Ingresa una descripción</Text>
      <Container row>
        <Textarea onChange={handleChangeText} value={prompt}></Textarea>
        <Button onClick={() => console.log('enviar')}>
          <FontAwesomeIcon icon={faSquareCheck} />
        </Button>
      </Container>
    </Container>
  );
};
