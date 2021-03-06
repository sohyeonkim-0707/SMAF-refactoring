import styled from "@emotion/styled";

export const card = styled.div`
  width: 31rem;
  height: 24rem;
  background-color: white;
  overflow: hidden;
  border-radius: 16px 16px 16px 16px;
  /* border: 1px solid red; */
  cursor: pointer;
`;

export const Container = styled.div`
  width: 31rem;
  height: 24rem;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  :hover {
    transform: translateY(-100%);
  }
`;

// π 01 μ λ°μ€
export const box1 = styled.div`
  width: 31rem;
  height: 24rem;
  cursor: pointer;
  overflow: hidden;
`;

// νλ‘μ νΈμ¬μ§
export const ImgBox = styled.img`
  width: 31rem;
  height: 16rem;
`;

// νμ€νΈλ°μ€
export const TextBox = styled.div`
  width: 31rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0rem 0rem 1.6rem 1.6rem;
  padding: 1.4rem 2rem 1.9rem 2rem;
`;

// νλ‘μ νΈμ΄λ¦
export const MainTitle = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// νλ‘μ νΈμμ½
export const SubTitle = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #767676;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// π 02 μλ λ°μ€
export const box2 = styled.div`
  width: 310px;
  height: 240px;
  padding: 24px 20px;
  height: 24rem;
  border-radius: 16px 16px 16px 16px;
  cursor: pointer;
`;

// νλ‘μ νΈμ΄λ¦
export const Title01 = styled.div`
  width: 100%;
  height: 29px;
  font-weight: 700;
  font-size: 2rem;
  line-height: 29px;
  letter-spacing: -0.02em;
  margin-top: 18px;
  color: #111111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    font-size: 2.1rem;
  }
`;

// νλ‘μ νΈμμ½
export const Title02 = styled.div`
  width: 100%;
  height: 44px;
  margin-top: 4px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #111111;
`;

export const Date = styled.div`
  width: 16.3rem;
  height: 2rem;
  margin-top: 29px;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #767676;
`;
