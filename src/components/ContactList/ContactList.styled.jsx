import styled from "@emotion/styled";

export const Container = styled.div`
  margin: 20px;
`;

export const Menu = styled.ul`
list-style: none;
width: 400px;
padding: 20px;
margin: auto;

`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-style: normal;
  /* border: 0.2px solid blue; */
  padding: 0px;
  text-align: center;
  line-height: 5px;
  & svg {width: 24px;
    height: 24px;
    margin: auto
    
}
  &:hover {
  & svg {
    fill: #ff6b0a;
    width: 24px;
    height: 24px;
  }}
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #010101;
  padding:15px;
  
  `;