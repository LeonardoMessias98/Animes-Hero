import styled from "styled-components";

export const Container = styled.div`
  .alice-carousel__stage {
    padding: 40px 20px !important;
  }
  .alice-carousel__prev-btn {
    left: 0;
  }

  .alice-carousel__next-btn {
    right: 0;
  }

  .alice-carousel__prev-btn,
  .alice-carousel__next-btn {
    position: absolute;
    width: max-content;
    background: none;
    top: 35%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: #ff006666;
      box-shadow: 0 0 10px 6px #ff00668c;

      border: 4px solid ${(props) => props.theme.colors.primary};
      border-radius: 50%;
      width: 5.375rem;
      height: 5.375rem;

      svg {
        font-size: 50px;
        color: #fff;
      }
    }
  }
`;
