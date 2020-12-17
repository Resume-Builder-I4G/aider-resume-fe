import styled from "styled-components";
import tw from "twin.macro";

const StyledHome = styled.main.attrs({
  className: "flex flex-col h-screen justify-center items-center bg-gray-100",
})`
  & {
    h1 {
      ${tw`bg-blue-500 text-center text-white`}
    }
  }
`;
export default StyledHome;
