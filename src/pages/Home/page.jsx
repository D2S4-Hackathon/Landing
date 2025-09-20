import styled, { keyframes } from "styled-components";
import { useEffect, useRef, useState } from "react";
import backgroundImage from "../../assets/images/background.png";
import background2Image from "../../assets/images/background2.png";
import background3Image from "../../assets/images/background3.png";
import onierImage from "../../assets/images/ONIER.png";
import onier2Image from "../../assets/images/ONier2.png";
import groupImage from "../../assets/images/Group.png";
import rectangleImage from "../../assets/images/Rectangle.png";
import userSoundIcon from "../../assets/images/UserSound.png";
import networkIcon from "../../assets/images/Network.png";
import broadcastIcon from "../../assets/images/Broadcast.png";
import PlugsIcon from "../../assets/images/PlugsConnected.png";
import Group2Icon from "../../assets/images/Group2.png";
import summationImage from "../../assets/images/summation.png";
import Group3Icon from "../../assets/images/Group3.png";
import Group4Icon from "../../assets/images/Group4.png";
import Group5Icon from "../../assets/images/Group5.png";

export default function Home() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <HeroSection ref={(el) => (sectionRefs.current.hero = el)} id="hero">
        <HeroBackground />
        <ONIERBackgroundImage />
        <ContentWrapper $isVisible={visibleSections.has("hero")}>
          <OurServiceText>Our Service</OurServiceText>
          <IntroWhiteLine />
          <ONIERText>ONIER</ONIERText>
          <SubtitleText>정보 탐색의 방식을 바꾸다</SubtitleText>
          <InstallButton>
            <ButtonText>온이어 설치하기</ButtonText>
            <CaretRightIcon />
          </InstallButton>
        </ContentWrapper>
      </HeroSection>

      <MainContainer ref={(el) => (sectionRefs.current.main = el)} id="main">
        <BackgroundImage />
        <ContentWrapper $isVisible={visibleSections.has("main")}>
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
        </ContentWrapper>
      </MainContainer>

      <ProblemSection ref={(el) => (sectionRefs.current.problem = el)} id="problem">
        <ProblemBackground />
        <ContentWrapper $isVisible={visibleSections.has("problem")}>
          <ProblemGroup>
            <ProblemBlackLine />
            <ProblemText>Problem</ProblemText>
          </ProblemGroup>
          <ProblemTitle>편의는 있었지만, 자유는 없었습니다</ProblemTitle>
          <ProblemDescription>
            <ParagraphSection>
              지금까지의 도구들은 대부분 비장애인의 시선에서 만들어졌습니다. <br />
              읽어주고, 대신 알려주고, "이 정도면 됐다"는 듯 멈춰버린 서비스들. <br />
              하지만 그것은 진짜 자유가 아니었습니다.
            </ParagraphSection>
            <ParagraphSection>
              그 길은 언제나 타인의 속도와 방식을 따르는 경험이었습니다. <br />
              시각장애인들이 원한 것은 단순했습니다.
            </ParagraphSection>
            <ParagraphSection>
              남이 아닌 내가 주도하는 탐색의 자유. <br />
              스스로 묻고, 듣고, 확인하며 선택하는 힘.
            </ParagraphSection>
          </ProblemDescription>
          <IconGroup>
            <GroupIcon />
          </IconGroup>
        </ContentWrapper>
      </ProblemSection>

      <SolutionSection ref={(el) => (sectionRefs.current.solution = el)} id="solution">
        <ContentWrapper $isVisible={visibleSections.has("solution")}>
          <SolutionGroup>
            <ProblemBlackLine />
            <SolutionText>Solution</SolutionText>
          </SolutionGroup>
          <SolutionTitle>
            그래서 우리는 <HighlightText>다르게</HighlightText> 시작했습니다
          </SolutionTitle>
          <ONIERLogo>
            <img src={onier2Image} alt="ONIER" />
          </ONIERLogo>
          <ONIERSubtitle>
            On (전원을 켜다, 따뜻하다) + Hear (들을 수 있는 음성) + er (사람/역할)
          </ONIERSubtitle>
          <SolutionDescription>
            ONier는 시각장애인 당사자의 목소리와 경험에서 출발했습니다. <br />
            이제 목소리 하나로 묻고, 즉시 요약된 답을 듣고, 필요하다면 다시 확인하며, <br />
            탐색의 과정을 스스로 남길 수 있습니다. <br />
            이것은 단순한 편의가 아니라, 정보 탐색을 '내 것'으로 되찾는 경험입니다.
          </SolutionDescription>
        </ContentWrapper>
      </SolutionSection>

      <FeatureSection ref={(el) => (sectionRefs.current.feature = el)} id="feature">
        <ContentWrapper $isVisible={visibleSections.has("feature")}>
          <FeatureDescription>
            말로 묻고, 요약으로 확인하고, 귀로 듣는 경험. <br />
            ONier는 누구에게나 쉽고 빠른 정보 접근을 가능하게 하는 대화형 탐색 도구입니다.
          </FeatureDescription>
          <FeatureTitle>
            ONier는 <HighlightText>4가지 방식</HighlightText>으로 탐색을 새롭게 만듭니다
          </FeatureTitle>
          <FeatureGroup>
            <FeatureBlackLine />
            <FeatureText>Main Feature</FeatureText>
          </FeatureGroup>
          <FeatureCardGrid>
            <FeatureCard>
              <FeatureNumber>01</FeatureNumber>
              <FeatureCardTitle>음성 대화형 검색</FeatureCardTitle>
              <FeatureUserSoundIcon />
              <FeatureCardDescription>
                복잡한 검색어 입력 대신 대화하듯 질문하세요. <br />
                필요한 정보가 즉시 제공됩니다.
              </FeatureCardDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureNumber>02</FeatureNumber>
              <FeatureCardTitle>페이지 요약</FeatureCardTitle>
              <FeatureNetworkIcon />
              <FeatureCardDescription>
                긴 글을 일일이 읽을 필요 없습니다. <br />
                버튼 한 번으로 페이지의 중요한 내용만 요약해드립니다.
              </FeatureCardDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureNumber>03</FeatureNumber>
              <FeatureCardTitle>추가 검색</FeatureCardTitle>
              <FeatureBroadcastIcon />
              <FeatureCardDescription>
                번거롭고 귀찮은 탐색 과정없이 <br />
                자동으로 사이트 이동까지 모두 가능합니다.
              </FeatureCardDescription>
            </FeatureCard>
            <FeatureCard>
              <FeatureNumber>04</FeatureNumber>
              <FeatureCardTitle>최적의 정보 제공</FeatureCardTitle>
              <PlugsConnectedIcon />
              <FeatureCardDescription>
                번거롭고 귀찮은 탐색 과정없이 <br />
                자동으로 사이트 이동까지 모두 가능합니다.
              </FeatureCardDescription>
            </FeatureCard>
          </FeatureCardGrid>
        </ContentWrapper>
      </FeatureSection>

      <FlowSection ref={(el) => (sectionRefs.current.flow = el)} id="flow">
        <ContentWrapper $isVisible={visibleSections.has("flow")}>
          <FlowWhiteLine />
          <FlowText>Service Flow</FlowText>
          <FlowTitle>ONier, 이렇게 작동합니다</FlowTitle>
          <FlowDescription>
            목소리로 시작해, 요약으로 확인하고, 귀로 다시 확신하는 과정. <br />
            누구나 따라올 수 있는 간단한 흐름으로 온전히 내 탐색을 완성합니다.
          </FlowDescription>
          <FlowIconGroup />
        </ContentWrapper>
      </FlowSection>

      <SummationSection ref={(el) => (sectionRefs.current.summation = el)} id="summation">
        <SummationImage />
        <ContentWrapper $isVisible={visibleSections.has("summation")}>
          <SummationGroup>
            <FeatureBlackLine />
            <SummationText>Technology</SummationText>
          </SummationGroup>
          <SummationTitle>AI로 더 빠르고, 더 정확하게, ONier의 핵심 기술</SummationTitle>
          <SummationDescription>
            AI가 검색 결과와 페이지 본문을 분석해 핵심만 요약하고, 이를 즉시 음성으로 제공합니다.{" "}
            <br />
            불필요한 내용에 시간을 낭비하지 않고, 필요한 답만 빠르게 얻을 수 있는 최적의 탐색 경험을
            제공합니다.
          </SummationDescription>
          <Group3Image />
        </ContentWrapper>
      </SummationSection>

      <QuestSection ref={(el) => (sectionRefs.current.quest = el)} id="quest">
        <ContentWrapper $isVisible={visibleSections.has("quest")}>
          <QuestTitle>새로운 탐색, 지금 확인하세요</QuestTitle>
          <Group4Image />
        </ContentWrapper>
      </QuestSection>
    </Layout>
  );
}

const slideUpAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Layout = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 콘텐츠만 애니메이션을 받는 래퍼
const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) => (props.$isVisible ? "translateY(0)" : "translateY(50px)")};
  animation: ${(props) => (props.$isVisible ? slideUpAnimation : "none")} 0.8s ease-out;
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

const IntroWhiteLine = styled.div`
  position: absolute;
  width: 31px;
  height: 9.5px;
  left: 950px;
  top: 37.5rem;
  background: #626262;
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
  color: #9c92ff;
  white-space: nowrap;
`;

// Hero Section Styles
const HeroSection = styled.div`
  position: relative;
  width: 1920px;
  height: 1226px;
  background: #000000;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  width: 1920px;
  height: 980px;
  left: 0px;
  top: 0px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${background2Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ONIERBackgroundImage = styled.div`
  position: absolute;
  width: 1720px;
  height: 1096px;
  left: calc(50% - 1720px / 2 + 0.5px);
  top: -355px;
  background-image: url(${onierImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
`;

const OurServiceText = styled.div`
  position: absolute;
  width: 100%;
  height: 42px;
  left: 0;
  top: 22rem;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 42px;
  text-align: center;
  color: #626262;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ONIERText = styled.div`
  position: absolute;
  width: 100%;
  height: 82px;
  left: 0;
  top: 26rem;
  font-family: "AppleSDGothicNeoEB00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 101.333px;
  line-height: 82px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubtitleText = styled.div`
  position: absolute;
  width: 100%;
  height: 82px;
  left: 0;
  top: 40.5rem;
  font-family: "AppleSDGothicNeoEB00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 101.333px;
  line-height: 82px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InstallButton = styled.div`
  position: absolute;
  width: 266px;
  height: 83px;
  left: calc(50% - 266px / 2);
  top: 1057px;
  background: #7667ff;
  border-radius: 37.395px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #5a4bff;
    transform: translateY(-2px);
  }
`;

const ButtonText = styled.div`
  font-family: "AppleSDGothicNeoSB00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 27px;
  line-height: 42px;
  text-align: center;
  color: #000000;
`;

const CaretRightIcon = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 1040px;
  top: 1173px;

  &::before {
    content: "";
    position: absolute;
    left: 34.37%;
    right: 28.12%;
    top: 15.62%;
    bottom: 15.62%;
    background: #000000;
    border: 0.5px solid #000000;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
  }
`;

// Problem Section Styles
const ProblemSection = styled.div`
  position: relative;
  width: 1920px;
  height: 1165px;
  background: #ffffff;
  overflow: hidden;
`;

const ProblemBackground = styled.div`
  position: absolute;
  width: 3443.13px;
  height: 1936.76px;
  left: -1300px;
  top: -300px;
  background-image: url(${background3Image});
  background-position: center;
  background-repeat: no-repeat;
`;

const ProblemGroup = styled.div`
  position: absolute;
  width: 94px;
  height: 53px;
  left: calc(50% - 94px / 2 + 20px);
  top: 150px;
`;

const ProblemBlackLine = styled.div`
  position: absolute;
  width: 22px;
  height: 5px;
  left: calc(50% - 22px / 2);
  top: 50px;
  background: #000000;
`;

const ProblemText = styled.div`
  position: absolute;
  width: 1289px;
  height: 42px;
  left: calc(50% - 1289px / 2 + 0.5px);
  top: 61px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 42px;
  text-align: center;
  color: #000000;
`;

const ProblemTitle = styled.div`
  position: absolute;
  width: 893px;
  height: 101px;
  left: calc(50% - 893px / 2 + 19.5px);
  top: 263px;
  font-family: "AppleSDGothicNeoH00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 63.6942px;
  line-height: 101px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

const ProblemDescription = styled.div`
  position: absolute;
  width: 1289px;
  height: 342px;
  left: calc(50% - 1289px / 2 + 0.5px);
  top: 392px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 42px;
  text-align: center;
  color: #000000;
`;

const IconGroup = styled.div`
  position: absolute;
  width: 563px;
  height: 154px;
  left: calc(50% - 563px / 2 + 0.5px);
  top: 822px;
`;

const GroupIcon = styled.div`
  position: absolute;
  width: 563px;
  height: 154px;
  left: 0px;
  top: 0px;
  background-image: url(${groupImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

// Solution Section Styles
const SolutionSection = styled.div`
  position: relative;
  width: 1920px;
  height: 1019px;
  background: #e4e4e4;
  overflow: hidden;
`;

const SolutionGroup = styled.div`
  position: absolute;
  width: 92px;
  height: 53px;
  left: calc(50% - 92px / 2 + 20px);
  top: 127px;
`;

const SolutionText = styled.div`
  position: absolute;
  width: 1289px;
  height: 42px;
  left: calc(50% - 1289px / 2 + 0.5px);
  top: 61px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 42px;
  text-align: center;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);'
`;

const SolutionTitle = styled.div`
  position: absolute;
  width: 877px;
  height: 101px;
  left: calc(50% - 877px / 2 + 19.5px);
  top: 243px;
  font-family: "AppleSDGothicNeoH00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 63.6942px;
  line-height: 101px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

const ONIERLogo = styled.div`
  position: absolute;
  width: 487px;
  height: 255px;
  left: 750px;
  top: 304px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ONIERSubtitle = styled.div`
  position: absolute;
  width: 200px;
  height: 70px;
  left: calc(50% - 820px / 2 + 9px);
  top: 520px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 70px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

const RectangleImage = styled.div`
  position: absolute;
  width: 582px;
  height: 75px;
  left: 678px;
  top: 447px;
  background-image: url(${rectangleImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HighlightText = styled.span`
  color: #4c00ff;
`;

const SolutionDescription = styled.div`
  position: absolute;
  width: 888px;
  height: 280px;
  left: calc(50% - 888px / 2);
  top: 651px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 70px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

const FeatureSection = styled.div`
  position: relative;
  width: 1920px;
  height: 1912px;
  background: #ffffff;
  overflow: hidden;
`;

const FeatureDescription = styled.div`
  position: absolute;
  width: 809px;
  height: 84px;
  left: calc(50% - 809px / 2 + 0.5px);
  top: 372px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 42px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

const FeatureTitle = styled.div`
  position: absolute;
  width: 1002px;
  height: 82px;
  left: calc(50% - 1002px / 2);
  top: 271px;
  font-family: "AppleSDGothicNeoH00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 51.8529px;
  line-height: 82px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

const FeatureGroup = styled.div`
  position: absolute;
  width: 148px;
  height: 53px;
  left: calc(50% - 148px / 2);
  top: 218px;
`;

const FeatureBlackLine = styled.div`
  position: absolute;
  width: 22px;
  height: 5px;
  left: calc(50% - 22px / 2);
  top: 0px;
  background: #000000;
`;

const FeatureText = styled.div`
  position: absolute;
  width: 148px;
  height: 42px;
  left: calc(50% - 148px / 2);
  top: 11px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 42px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

const FeatureCardGrid = styled.div`
  position: absolute;
  width: 1516px;
  height: 1141px;
  left: calc(50% - 1516px / 2);
  top: 546px;
  filter: drop-shadow(4px 9px 10px rgba(0, 0, 0, 0.05));
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px;
`;

const FeatureCard = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 739px;
  height: 553px;
  background: #f5f5f5;
  border: 1.12217px solid rgba(0, 0, 0, 0.19);
  border-radius: 16.8326px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
`;

const FeatureNumber = styled.div`
  position: absolute;
  width: 29px;
  height: 48px;
  left: 50%;
  top: 36px;
  transform: translateX(-50%);
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28.0543px;
  line-height: 47px;
  text-align: center;
  color: #747474;
`;

const FeatureCardTitle = styled.div`
  position: absolute;
  width: 229px;
  height: 59px;
  left: 50%;
  top: 96px;
  transform: translateX(-50%);
  font-family: "AppleSDGothicNeoEB00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34.7339px;
  line-height: 58px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

const FeatureCardDescription = styled.div`
  position: absolute;
  width: 100%;
  height: 97px;
  left: 50%;
  top: 391px;
  transform: translateX(-50%);
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28.0543px;
  line-height: 48px;
  text-align: center;
  color: #000000;
`;

const PlugsConnectedIcon = styled.div`
  position: absolute;
  width: 148px;
  height: 148px;
  left: 50%;
  top: 196px;
  transform: translateX(-50%);
  background-image: url(${PlugsIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FeatureUserSoundIcon = styled.div`
  position: absolute;
  width: 160.47px;
  height: 160.47px;
  left: 50%;
  top: 196px;
  transform: translateX(-50%);
  background-image: url(${userSoundIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FeatureNetworkIcon = styled.div`
  position: absolute;
  width: 145.88px;
  height: 145.88px;
  left: 50%;
  top: 203px;
  transform: translateX(-50%);
  background-image: url(${networkIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FeatureBroadcastIcon = styled.div`
  position: absolute;
  width: 145.88px;
  height: 145.88px;
  left: 50%;
  top: 196px;
  transform: translateX(-50%);
  background-image: url(${broadcastIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FlowSection = styled.div`
  position: relative;
  width: 1920px;
  height: 860px;
  background: #000000;
  overflow: hidden;
`;

const FlowWhiteLine = styled.div`
  position: absolute;
  width: 22px;
  height: 5px;
  left: calc(50% - 22px / 2);
  top: 81px;
  background: #ffffff;
`;

const FlowText = styled.div`
  position: absolute;
  width: 1289px;
  height: 42px;
  left: calc(50% - 1289px / 2);
  top: 92px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
`;

const FlowTitle = styled.div`
  position: absolute;
  width: 538px;
  height: 82px;
  left: calc(50% - 538px / 2);
  top: 144px;
  font-family: "AppleSDGothicNeoH00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 51.8529px;
  line-height: 82px;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
`;

const FlowDescription = styled.div`
  position: absolute;
  width: 684px;
  height: 84px;
  left: calc(50% - 684px / 2);
  top: 264px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 42px;
  text-align: center;
  color: #ffffff;
  white-space: nowrap;
`;

const FlowIconGroup = styled.div`
  position: absolute;
  width: 1485px;
  height: 311px;
  left: calc(50% - 1485px / 2 + 0.5px);
  top: 418px;
  background-image: url(${Group2Icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const SummationSection = styled.div`
  position: relative;
  width: 1920px;
  height: 1800px;
  background: #ffffff;
  overflow: hidden;
`;

const SummationGroup = styled.div`
  position: absolute;
  width: 94px;
  height: 53px;
  left: calc(50% - 94px / 2 + 20px);
  top: 74px;
`;

const SummationText = styled.div`
  position: absolute;
  width: 538px;
  height: 42px;
  left: calc(50% - 538px / 2);
  top: 11px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 42px;
  text-align: center;
  color: #000000;
`;

const SummationTitle = styled.div`
  position: absolute;
  width: 986px;
  height: 82px;
  left: calc(50% - 986px / 2 + 20px);
  top: 142px;
  font-family: "AppleSDGothicNeoH00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 51.8529px;
  line-height: 82px;
  text-align: center;
  color: #000000;
  white-space: nowrap;
`;

const SummationDescription = styled.div`
  position: absolute;
  width: 100%;
  height: 84px;
  top: 266px;
  font-family: "AppleSDGothicNeoM00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 42px;
  text-align: center;
  color: #000000;
`;

const SummationImage = styled.div`
  position: absolute;
  width: 1501px;
  height: 1423.6px;
  left: calc(50% - 1501px / 2 - 33.5px);
  top: 74px;
  background-image: url(${summationImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Group3Image = styled.div`
  position: absolute;
  width: 1501px;
  height: 400px;
  left: calc(50% - 1501px / 2 - 33.5px);
  top: 1200px;
  background-image: url(${Group3Icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const QuestSection = styled.div`
  position: relative;
  width: 1920px;
  height: auto;
  background: #ffffff;
  overflow: hidden;
`;

const QuestTitle = styled.div`
  position: absolute;
  color: #000;
  text-align: center;
  font-family: "AppleSDGothicNeoH00", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 90.743px;
  font-style: normal;
  font-weight: 600;
  line-height: 143.453px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  white-space: nowrap;
`;

const Group4Image = styled.div`
  position: relative;
  width: 1920px;
  height: 4900px;
  background-image: url(${Group4Icon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;
