import styled from "styled-components";

const Wrapper = styled.header`
  border-bottom: 1px solid #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--white-100);
  z-index: 100;

  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);

  .leftUpperHeader span {
    font-size: 18px;
    font-weight: 700;
  }

  /* Right upper header */
  .rightUpperHeader {
    width: 30%;
  }

  .social-icons {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
  }

  .social-link-icon {
    width: 30px;
    height: 30px;
    color: #4caf50;
  }
`;
export default Wrapper;