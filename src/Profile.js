import { Image, Text, View } from "react-native";
import Margin from "./Margin";
import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
`;

const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 0.4}px;
`;

const TextContainer = styled.View`
  justify-content: center;
  margin-left: 10px;
`;

const ProfileName = styled.Text`
  font-weight: ${(props) => (props.isMe ? "bold" : "normal")};
  font-size: ${(props) => (props.isMe ? 16 : 14)}px;
`;

const ProfileIntroduction = styled.Text`
  color: gray;
  font-size: ${(props) => (props.isMe ? 12 : 10)}px;
`;

export default (props) => {
  const size = props.isMe ? 50 : 40;
  return (
    <Container>
      <ProfileImage source={{ uri: props.uri }} size={size} />
      <TextContainer>
        <ProfileName isMe={props.isMe}>{props.name}</ProfileName>
        <Margin height={props.isMe ? 6 : 4} />
        <ProfileIntroduction isMe={props.isMe}>
          {props.introduction}
        </ProfileIntroduction>
      </TextContainer>
    </Container>
  );
};
