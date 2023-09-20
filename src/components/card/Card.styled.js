import styled from '@emotion/styled';

export const Container = styled.div`
  width: 274px;
  position: relative;
`;

export const Image = styled.div`
  height: 274px;
  overflow: hidden;
  background: #fff url(${props => props.src}) no-repeat center;
  background-size: cover;
  border-radius: 12px;
`;

export const Icon = styled.img`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;

  :hover,
  :focus {
    transform: scale(1.2);
  }
`;

export const Header = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 14px;
  margin-bottom: 8px;
  display: flex;
`;

export const SemiTransparent = styled.p`
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  color: var(--semi-transparent);
  margin-top: 4px;
  margin-bottom: 28px;
`;
