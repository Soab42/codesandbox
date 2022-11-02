import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useState } from "react";
export default function Test() {
  const [calc, setCalc] = useState();
  const [result, setResult] = useState();

  const calcplus = () => setResult(eval(calc));
  const joinadd = (x) => setCalc(...x, ..."+");
  const joinadd2 = () => setCalc("-");
  const joinadd3 = () => setCalc(1);
  const joinadd4 = () => setCalc(2);
  const joinadd5 = () => setCalc(3);
  const joinadd6 = () => setCalc(4);
  const joinadd7 = () => setCalc(5);
  const joinadd8 = () => setCalc(6);

  return (
    <ScrollView style={{ backgroundColor: "rgba(0,255,0,0.15)", height: 200 }}>
      <Text>Calculator</Text>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text
          style={{
            backgroundColor: "white",
            textAlign: "center",
            borderRadius: 25,
            borderWidth: 0.3,
            height: 40,
            paddingTop: 10,
            width: 200
          }}
        >
          {calc}
        </Text>
      </View>

      <Text
        style={{
          backgroundColor: "teal",
          color: "white",
          marginTop: 5,
          borderRadius: 15,
          paddingLeft: 15,
          paddingTop: 10,
          width: 200,
          height: 40
        }}
      >
        {"Result:  "} {result}
      </Text>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          paddingBottom: 10,
          justifyContent: "space-around",
          height: 30
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              width: 60,
              borderRadius: 15,
              height: 40,
              fontSize: 30,
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "pink"
            }}
            onPress={calcplus}
          >
            =
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 60,
              borderRadius: 15,
              height: 40,
              fontSize: 30,
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "pink"
            }}
            onPress={joinadd}
          >
            +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 60,
              borderRadius: 15,
              height: 40,
              fontSize: 30,
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "pink"
            }}
            onPress={joinadd2}
          >
            -
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 60,
              borderRadius: 15,
              height: 40,
              fontSize: 30,
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "pink"
            }}
            onPress={joinadd3}
          >
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 60,
              borderRadius: 15,
              height: 40,
              fontSize: 30,
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "pink"
            }}
            onPress={joinadd4}
          >
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 60,
              borderRadius: 15,
              height: 40,
              fontSize: 30,
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "pink"
            }}
            onPress={joinadd5}
          >
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 60,
              borderRadius: 15,
              height: 40,
              fontSize: 30,
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "pink"
            }}
            onPress={joinadd6}
          >
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 60,
              borderRadius: 15,
              height: 40,
              fontSize: 30,
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "pink"
            }}
            onPress={joinadd7}
          >
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              width: 60,
              borderRadius: 15,
              height: 40,
              fontSize: 30,
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "pink"
            }}
            onPress={joinadd8}
          >
            6
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
