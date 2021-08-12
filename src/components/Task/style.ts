import styled from 'styled-components';

export const Container = styled.div`
  max-width: 860px;
  display: flex;
  flex-wrap: wrap;
  margin: -5rem auto 0;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  color: #333;

  .wrapper {
    box-sizing: initial;
    width: 100%;
    height: 2rem;
    display: grid;
    grid-template-columns: max(75px) repeat(2, 1fr) 1fr max(75px);
    border-bottom: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem 0;
    align-items: center;

    .checkField {
      width: 100%;
    }

    :first-child {
      border-bottom: 1px solid #000;
    }

    :last-child {
      border-bottom: none;
    }
  }

  .titles {
    font-weight: bolder;
    text-transform: uppercase;
  }

  .sortField {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: right;

    svg {
      cursor: pointer;
      transition: .2s;
    }
  }

  .levelPriority, .trashField {
    margin: 0 auto;
  }

  .checkField, .trashField {
    cursor: pointer;
  }

  .mirrorClass {
    transform: scaleY(-1);
  }

`;
