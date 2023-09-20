import Cars from '../../images/HomeCars.png';
import {
  HomeHeading,
  HomeText,
  HomeTitle,
  HomeWrapper,
  Img,
} from './Home.styled';

export const Home = () => {
  return (
    <>
      <HomeWrapper>
        <HomeTitle>Rent Your Dream Car</HomeTitle>
        <HomeText>
          Welcome to our car rental platform! With our wide selection of
          vehicles, you can find the perfect car for any occasion.
        </HomeText>

        <HomeHeading>Search by Make</HomeHeading>
        <HomeText>
          Easily filter our inventory by vehicle make to find the ideal model
          for your needs. We feature all the top brands including Audi, BMW,
          Mercedes, Porsche, and more.
        </HomeText>

        <HomeHeading>Affordable Hourly Rates</HomeHeading>
        <HomeText>
          Rent cars at competitive hourly rates. Only pay for the time you need.
          Great for short trips or running errands. Check rates per hour for the
          car you want.
        </HomeText>

        <HomeHeading>Flexible Mileage Options</HomeHeading>
        <HomeText>
          Choose unlimited mileage or set a mileage range that fits your
          itinerary. Perfect for road trips near and far. Select the mileage
          package that works for your plans.
        </HomeText>

        <HomeText>
          Join today and connect with our company at +38 (073) 000 00 00 to
          reserve your rental.
        </HomeText>
      </HomeWrapper>

      <Img src={Cars} alt="cars" />
    </>
  );
};
