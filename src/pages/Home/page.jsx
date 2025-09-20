import styled from "styled-components";
import backgroundImage from "../../assets/images/background.png";

export default function Home() {
  return (
    <Layout>
      <MainContainer>
        <BackgroundImage />
        <WhiteLine />
        <BackgroundText>Background</BackgroundText>
        <MainTitle>정보의 바다 앞에서, 누군가는 늘 멈춰야 했습니다.</MainTitle>
        <MainParagraph>
          <ParagraphSection>
            우리 주변에는 언제나 조금 더 오래 걸리는 사람들이 있습니다. <br />
            누구보다 먼저 움직이고 싶지만, 늘 한 발 늦게 도착할 수밖에 없는 사람들.
          </ParagraphSection>
          <ParagraphSection>
            세상이 쏟아내는 정보의 늪 속에서 그들은 원하는 답 하나를 얻기 위해 <br />
            수많은 단계를 거치고, 불필요한 길을 돌아야만 합니다. <br />
            그들은 바로 시각장애인입니다.
          </ParagraphSection>
          <ParagraphSection>
            검색 한 번, 클릭 한 번이 우리에게는 당연한 일상이지만, <br />
            그들에게는 끝이 없을 것 같은 고단한 여정이 됩니다.
          </ParagraphSection>
          <SubParagraph>그리고 그 여정 끝에 그들은 이렇게 묻습니다.</SubParagraph>
        </MainParagraph>
        <QuestionText>"왜 우리는 정보를 찾는 것조차 이렇게 힘들어야 합니까?"</QuestionText>
      </MainContainer>
    </Layout>
  );
}

const Layout = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
  background: #ffffff;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 1920px;
  height: 1080px;
  left: 0px;
  top: 0px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const WhiteLine = styled.div`
  position: absolute;
  width: 22px;
  height: 5px;
  left: 950px;
  top: 8.5rem;
  background: #ffffff;
`;

const BackgroundText = styled.div`
  position: absolute;
  width: 1289px;
  height: 42px;
  left: calc(50% - 1289px / 2 + 0.5px);
  top: 147px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
`;

const MainTitle = styled.div`
  position: absolute;
  width: 1006px;
  height: 82px;
  left: calc(50% - 1006px / 2);
  top: 195px;
  font-family: "AppleSDGothicNeoH00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 51.8529px;
  line-height: 82px;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
`;

const MainParagraph = styled.div`
  position: absolute;
  width: 1289px;
  height: 410px;
  left: calc(50% - 1289px / 2 + 0.5px);
  top: 401px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
`;

const SubParagraph = styled.div`
  position: absolute;
  width: 1289px;
  height: 410px;
  left: calc(50% - 1289px / 2 + 0.5px);
  top: 23.5rem;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
`;

const ParagraphSection = styled.div`
  margin-bottom: 1.5rem;
`;

const QuestionText = styled.div`
  position: absolute;
  width: 855px;
  height: 61px;
  left: calc(50% - 855px / 2 + 0.3px);
  top: 865px;
  font-family: "AppleSDGothicNeoH00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 38.27px;
  line-height: 61px;
  text-align: center;
  color: #00eeff;
  white-space: nowrap;
`;
