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

  const {
    img,
    photoLink,
    make,
    model,
    year,
    fuelConsumption,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
    rentalPrice,
  } = item;

  return createPortal(
    <Overlay onClick={onClose}>
      <Container className="card">
        <CloseIcon alt="X" src={X} onClick={onClose} />

        <Image src={img || photoLink} />

        <Header>
          {make}
          <span style={{ color: '#3470FF' }}> {model}, </span>
          {year}
        </Header>

        <div>
          {[
            ...address.split(', ').slice(1),
            rentalCompany,
            `ID: ${id}`,
            `Year: ${year}`,
            `Type: ${type}`,
          ].map(i => (
            <SemiTransparent key={i}>{i}</SemiTransparent>
          ))}
        </div>

        <div>
          {[
            `Fuel Consumption: ${fuelConsumption}`,
            `Engine Size: ${engineSize}`,
          ].map(i => (
            <SemiTransparent key={i}>{i}</SemiTransparent>
          ))}
        </div>

        <Text>{description}</Text>

        <SemiHeader>Accessories and functionalities:</SemiHeader>

        {[...accessories, ...functionalities].map(i => (
          <SemiTransparent key={i}>{i}</SemiTransparent>
        ))}

        <SemiHeader>Rental Conditions: </SemiHeader>

        <div style={{ marginBottom: '24px' }}>
          {rentalConditions.split('\n').map(cond =>
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
              {mileage.toString().split('').toSpliced(-3, 0, ',').join('')}
            </SpanBG>
          </TextBG>

          <TextBG>
            Price : <SpanBG>{rentalPrice.slice(1)}$</SpanBG>
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
