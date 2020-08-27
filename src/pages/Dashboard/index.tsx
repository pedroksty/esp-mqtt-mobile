import React, { useCallback, useEffect } from 'react';
import { Alert } from 'react-native';

import api from '../../services/api';

import logo from '../../assets/logo-ura.png';

import { LogoImage, Container, SideContainer, StopButton } from './styles';

import Button from '../../components/Button/index';

const Dashboard: React.FC = () => {
  useEffect(() => {
    async function tryConection() {
      try {
        const response = await api.post('/sentido', {
          sentido: 'teste'
        });

        if (response.status === 200) {
          Alert.alert('Conexão bem sucedida');
        }
      } catch (err) {
        Alert.alert(`Falhar ao conectar com a API`);
      }
    }

    tryConection();
  }, []);

  const handleForward = useCallback(async () => {
    await api.post('/sentido', {
      sentido: 'f'
    });
  }, []);

  const handleRight = useCallback(async () => {
    await api.post('/sentido', {
      sentido: 'r'
    });
  }, []);

  const handleLeft = useCallback(async () => {
    await api.post('/sentido', {
      sentido: 'l'
    });
  }, []);

  const handleStop = useCallback(async () => {
    await api.post('/sentido', {
      sentido: 's'
    });
  }, []);

  return (
    <Container style={{ flex: 1, justifyContent: 'center' }}>
      <LogoImage source={logo} />
      <Button onPress={handleForward}>Frente</Button>
      <SideContainer>
        <Button onPress={handleLeft}>Esquerda</Button>
        <Button onPress={handleRight}>Direita</Button>
      </SideContainer>
      <StopButton onPress={handleStop}>Parar</StopButton>
    </Container>
  );
};

export default Dashboard;
