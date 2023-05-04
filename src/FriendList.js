import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import Margin from "./Margin";

export default (props) => {
  /**
   * 조건문
   */
  if (!props.isOpened) return null;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.data.map((item, index) => {
        return (
          <View key={index}>
            <Profile
              uri={item.uri}
              name={item.name}
              introduction={item.introduction}
            />
            <Margin height={8} />
          </View>
        );
      })}
    </ScrollView>
  );
  /**
   * 삼항 연산자
   */
  //   return props.isOpened ? (
  //     <ScrollView showsVerticalScrollIndicator={false}>
  //       {props.data.map((item, index) => {
  //         return (
  //           <View key={index}>
  //             <Profile
  //               uri={item.uri}
  //               name={item.name}
  //               introduction={item.introduction}
  //             />
  //             <Margin height={8} />
  //           </View>
  //         );
  //       })}
  //     </ScrollView>
  //   ) : null;
  /**
   * 논리 연산자
   */
  //   return (
  //     props.isOpened && (
  //       <ScrollView showsVerticalScrollIndicator={false}>
  //         {props.data.map((item, index) => {
  //           return (
  //             <View key={index}>
  //               <Profile
  //                 uri={item.uri}
  //                 name={item.name}
  //                 introduction={item.introduction}
  //               />
  //               <Margin height={8} />
  //             </View>
  //           );
  //         })}
  //       </ScrollView>
  //     )
  //   );
};
