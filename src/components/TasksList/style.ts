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
    grid-template-columns: max(60px) repeat(2, 1fr) max(170px) max(60px);
    margin: 0.5rem 0;
    padding: 1rem 0;
    align-items: center;
    box-shadow: 0 1px 0px #ddd;

    .checkField {
      width: 100%;
    }

    :first-child {
      box-shadow: 0 1px 0px #000;
      background: none;
      border-radius: 0;
    }

    :last-child {
      box-shadow: none;
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
      transition: 0.2s;
    }
  }

  .levelPriority,
  .trashField {
    margin: 0 auto;
  }

  .checkField,
  .trashField {
    text-align: center;
    cursor: pointer;
  }

  .mirrorClass {
    transform: scaleY(-1);
  }

  .completed {
    background: #ccc;
    border-radius: 0.5rem;
    box-shadow: none;
  }
`;
