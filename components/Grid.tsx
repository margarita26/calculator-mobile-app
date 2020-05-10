import React, { useEffect, useState } from "react";
import { Text, View, Button, Alert } from "react-native";
import { MyButton } from "./MyButton";

export const Grid: React.FC = () => {

  const [firstNum, setFirstNum] = useState<number>(0)
  const [symbol, setSymbol] = useState<string>('')
  const [secondNum, setSecondNum] = useState<number>(0)
  const [toShow, setToShow] = useState<string>('')
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [isPercent, setPercent] = useState<boolean>(false);

  useEffect(() => {
    if (isFirst) {
      setToShow(firstNum.toString());
    }
    else {
      setToShow(secondNum.toString());
    }
  }, [firstNum, secondNum]);

  const erase = () => {
    setFirstNum(0);
    setSecondNum(0);
    setSymbol('');
    setIsFirst(true);
    setPercent(false);
  };

  const addToNumber = (num: number) => {
    if (isFirst) {
      if (firstNum < 0) {
        num = num * -1;
      }
      setFirstNum((firstNum * 10) + num);
    }
    else {
      if (secondNum < 0) {
        num = num * -1;
      }
      setSecondNum((secondNum * 10) + num);
    }
  };

  const addSymbol = (sym: string) => {
    if (symbol != '') {
      doOperation();
    }
    else {
      setIsFirst(false);
    }
    setSymbol(sym);
  }

  const doOperation = () => {
    let temp = secondNum;

    if (isPercent) {
      if ((symbol == '+') || (symbol == '-')) {
        temp = firstNum * (secondNum / 100)
      }
      else {
        temp = (secondNum / 100)
      }
      setPercent(false);
    }

    switch (symbol) {
      case '+': {
        setFirstNum(firstNum + temp);
        break;
      }
      case '-': {
        setFirstNum(firstNum - temp);
        break;
      }
      case '*': {
        setFirstNum(firstNum * temp);
        break;
      }
      case '/': {
        setFirstNum(firstNum / temp);
        break;
      }
    }
    setIsFirst(true);
    setSecondNum(0);
    setSymbol('');
  };

  const toPercent = () => {
    if (isFirst) {
      setFirstNum(firstNum / 100);
    }
    else {
      setPercent(true);
    }
  };

  const changeSign = () => {
    if (isFirst) {
      setFirstNum(firstNum * -1);
    }
    else {
      setSecondNum(secondNum * -1);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        alignItems: "stretch",
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Text style={{ fontSize: 64, color: 'white', textAlign: 'right', marginRight: 20 }}>{toShow}</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          padding:10,
    
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <MyButton
            buttonColor={"grey"}
            textColor={"black"}
            content={"AC"}
            flex={1}
            onPress={() => erase()}
          />
          <MyButton
            buttonColor={"grey"}
            textColor={"black"}
            content={"+/-"}
            flex={1}
            onPress={() => changeSign()}
          />
          <MyButton
            buttonColor={"grey"}
            textColor={"black"}
            content={"%"}
            flex={1}
            onPress={() => toPercent()}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"÷"}
            flex={1}
            onPress={() => addSymbol("/")}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"7"}
            flex={1}
            onPress={() => addToNumber(7)}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"8"}
            flex={1}
            onPress={() => addToNumber(8)}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"9"}
            flex={1}
            onPress={() => addToNumber(9)}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"x"}
            flex={1}
            onPress={() => addSymbol("*")}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"4"}
            flex={1}
            onPress={() => addToNumber(4)}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"5"}
            flex={1}
            onPress={() => addToNumber(5)}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"6"}
            flex={1}
            onPress={() => addToNumber(6)}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"-"}
            flex={1}
            onPress={() => addSymbol('-')}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"1"}
            flex={1}
            onPress={() => addToNumber(1)}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"2"}
            flex={1}
            onPress={() => addToNumber(2)}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"3"}
            flex={1}
            onPress={() => addToNumber(3)}
          />
          <MyButton
            buttonColor={"orange"}
            textColor={"white"}
            content={"+"}
            flex={1}
            onPress={() => addSymbol("+")}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"0"}
            flex={2}
            onPress={() => addToNumber(0)}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"."}
            flex={1}
            onPress={() => Alert.alert(".")}
          />
          <MyButton
            buttonColor={"#414141"}
            textColor={"white"}
            content={"="}
            flex={1}
            onPress={() => doOperation()}
          />
        </View>
      </View>
    </View>
  );
};
