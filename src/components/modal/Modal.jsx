import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import X from '../../images/icons/x.svg';
import { Button } from '../button/Button';

import {
  Overlay,
  Container,
  CloseIcon,
  Image,
  Header,
  SemiTransparent,
  Text,
  SemiHeader,
  TextBG,
  SpanBG,
} from './Modal.styled';

export const Modal = ({ onClose, item }) => {
  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', keyDown);
    return () => window.removeEventListener('keydown', keyDown);
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onClose}>
      <Container className="card">
        <CloseIcon alt="X" src={X} onClick={onClose} />

        <Image src={item.img || item.photoLink} />

        <Header>
          {item.make}
          <span style={{ color: '#3470FF' }}> {item.model}, </span>
          {item.year}
        </Header>

        <SemiTransparent>
          {item.address.split(', ').slice(1).join(' | ')} | id: {item.id} |
          Year: {item.year} | Type: {item.type}
        </SemiTransparent>

        <SemiTransparent>
          Fuel Consumption: {item.fuelConsumption} | Engine Size:{' '}
          {item.engineSize}
        </SemiTransparent>

        <Text>{item.description}</Text>

        <SemiHeader>Accessories and functionalities:</SemiHeader>

        <SemiTransparent>{item.accessories.join(' | ')}</SemiTransparent>

        <SemiTransparent>{item.functionalities.join(' | ')}</SemiTransparent>

        <SemiHeader>Rental Conditions: </SemiHeader>

        <div style={{ marginBottom: '24px' }}>
          {item.rentalConditions.split('\n').map(cond =>
            !cond.includes(':') ? (
              <TextBG key={cond}>{cond}</TextBG>
            ) : (
              <TextBG key={cond}>
                {cond.split(':')[0]} : <SpanBG>{cond.split(':')[1]}</SpanBG>
              </TextBG>
            )
          )}

          <TextBG>
            Mileage :{' '}
            <SpanBG>
              {item.mileage.toString().split('').toSpliced(-3, 0, ',').join('')}
            </SpanBG>
          </TextBG>

          <TextBG>
            Price : <SpanBG>{item.rentalPrice.slice(1)}$</SpanBG>
          </TextBG>
        </div>

        <Button
          type={'button'}
          text={'Rent a car'}
          onClick={() => window.open('tel:+380730000000', '_self')}
        />
      </Container>
    </Overlay>,
    document.querySelector('#modal')
  );
};
