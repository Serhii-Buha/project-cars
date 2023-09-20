import { useState } from 'react';
import { useGetCarsQuery } from 'redux/carsApi';
import { Button } from '../button/Button';

import {
  Container,
  LabelText,
  SelectText,
  OptionText,
  InputText,
  CustomLabel,
  SelectImg,
} from './ChooseForm.styled';
import Arrow from '../../images/icons/arrow.svg';

export const ChooseForm = ({ setFilter }) => {
  const { data } = useGetCarsQuery();
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const makes = [...new Set(data?.map(item => item.make))].sort();
  const priceRange = [
    ...new Set(
      data?.map(item => +item.rentalPrice.slice(1)).sort((a, b) => a - b)
    ),
  ];

  const handleSubmit = e => {
    e.preventDefault();
    const filter = {
      brand: model,
      price,
      from,
      to,
    };
    setFilter(filter);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <label style={{ position: 'relative' }}>
        <LabelText>Car brand</LabelText>

        <SelectImg alt={'arrow'} src={Arrow} />

        <SelectText name="cars" onChange={e => setModel(e.target.value)}>
          <OptionText value={''}>Choose a brand</OptionText>

          {makes?.map(make => (
            <OptionText key={make} value={make}>
              {make}
            </OptionText>
          ))}
        </SelectText>
      </label>

      <label style={{ position: 'relative' }}>
        <LabelText>Price per hour</LabelText>

        <SelectImg alt={'arrow'} src={Arrow} />

        <SelectText name="price" onChange={e => setPrice(e.target.value)}>
          <OptionText value={''}>max price</OptionText>
          {priceRange?.map(price => (
            <OptionText key={price} value={price}>
              {price}
            </OptionText>
          ))}
        </SelectText>
      </label>

      <CustomLabel>
        <LabelText>Car mileage / km</LabelText>

        <InputText
          name="from"
          type="number"
          value={from}
          onChange={e => setFrom(e.target.value)}
          min="0"
          max="999999"
        />

        <InputText
          name="to"
          type="number"
          value={to}
          onChange={e => setTo(e.target.value)}
          min="0"
          max="999999"
        />
      </CustomLabel>

      <Button type={'submit'} text={'Search'} />
    </Container>
  );
};
