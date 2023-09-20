import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--overlay-color);
  z-index: 1200;
`;

export const Container = styled.div`
  width: 450px;
  background-color: white;
  border-radius: 24px;
  padding: 40px;
  position: relative;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;

  :hover,
  :focus {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Image = styled.div`
  height: 250px;
  overflow: hidden;
  background: #fff url(${props => props.src}) no-repeat center;
  background-size: cover;
  border-radius: 12px;
`;

export const Header = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 4px;
  margin-top: 12px;
`;

export const SemiTransparent = styled.span`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  color: var(--semi-transparent);
  margin-top: 4px;

  :not(:last-of-type):after {
    content: '';
    border-right: 1px solid;
    margin: 0 5px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 14px;
`;

export const SemiHeader = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 4px;
  margin-top: 24px;
`;

export const TextBG = styled.p`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  display: inline-block;
  padding: 7px 14px;
  background-color: var(--form-select-bg-color);
  border-radius: 35px;
  margin-right: 8px;
  margin-top: 8px;
`;

export const SpanBG = styled.span`
  color: var(--button-bg-color);
  font-weight: 600;
`;
