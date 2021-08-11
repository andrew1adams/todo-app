import styled from 'styled-components';

export const Container = styled.div`
  max-width: 860px;
  display: flex;
  flex-wrap: wrap;
  margin: -5rem auto 0;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem 2rem;

  .wrapperTask {
    box-sizing: initial;
    width: 100%;
    height: 2rem;
    display: grid;
    grid-template-columns: 75px repeat(2, 1fr) 100px 75px;
    border-bottom: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    align-items: center;

    .trashField,
    .checkField,
    .levelPriority {
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }

    .trashIcon {
      cursor: pointer;
            
    }

    :first-child {
      border-bottom: 1px solid #000;
    }

    :last-child {
      border-bottom: none;
    }
  }
`;
