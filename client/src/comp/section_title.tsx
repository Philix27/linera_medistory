import { styled } from "styled-components";

export function SectionTitle(name: string) {
  return (
    <Div>
      <h1>{name}</h1>
    </Div>
  );
}

const Div = styled.div`
  width: 80%;
  display: flex;
  padding: 20px 0;
  color: #ddb206;
`;
