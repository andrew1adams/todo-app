import styled from 'styled-components';

export const Container = styled.div`
  max-width: 860px;
  display: flex;
  flex-wrap: wrap;
  margin: -5rem auto 0;
  background-color: #fff;
  border-radius: .5rem;
  padding: 1rem 2rem;
  
  .wrapperTask {
    box-sizing: initial;
    width: 100%;
    height: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid #000;
    margin: .5rem 0;
    padding: .5rem 0;
    align-items: center;

    &:last-child {
      border-bottom: none;
    }
  }
`;
