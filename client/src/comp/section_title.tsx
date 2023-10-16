import { styled } from "styled-components";

export function SectionTitle(name: string) {
  return <H1>{name}</H1>;
}

const H1 = styled.h1`
  font-size: 3.5rem;
  padding-bottom: 40px;
  color: AppColor;
  font-weight: 800;
`;
