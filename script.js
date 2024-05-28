var InputField = document.getElementById("InputField");

function Result() {
  let Text = InputField.value;

  if (
    Text[Text.length - 1] == "+" ||
    Text[Text.length - 1] == "-" ||
    Text[Text.length - 1] == "*"
  ) {
    Text = GetAllDataBefore(Text, Text.length - 1);
  }
  let Number1, Number2, Res;
  for (let i = 0; i < Text.length; i++) {
    if (Text[i] == "*") {
      Number1 = GetAllDataBefore(Text, i);
      Number2 = GetAllDataAfter(Text, i);

      let LastRonin1 = 0,
        LastRonin2 = 0;
      for (let a = 0; a < Number1.length; a++) {
        if (Number1[a] == "+" || Number1[a] == "*" || Number1[a] == "-") {
          LastRonin1 = a;
        }
      }
      for (let s = 0; s < Number2.length; s++) {
        if (Number2[s] == "+" || Number2[s] == "*" || Number2[s] == "-") {
          LastRonin2 = s;
          break;
        }
      }
      if (LastRonin1 != 0) {
        Number1 = GetAllDataAfter(Number1.toString(), LastRonin1);
      }
      if (LastRonin2 != 0) {
        Number2 = GetAllDataBefore(Number2.toString(), LastRonin2);
      }

      if (Res && Res != null) {
        Res = parseFloat(Res) * parseFloat(Number2);
      } else {
        Res = parseFloat(Number1) * parseFloat(Number2);
      }
      Text = Text.replace((Number1 + "*" + Number2).toString(), Res);
      InputField.value = Text;
      Number1 = null;
      Number2 = null;
      Res = null;
    }
  }

  for (let i = 0; i < Text.length; i++) {
    if (Text[i]) {
      if (Text[i] == "+") {
        Number1 = GetAllDataBefore(Text, i);
        Number2 = GetAllDataAfter(Text, i);

        if (Res && Res != null) {
          Res = parseFloat(Res) + parseFloat(Number2);
        } else {
          Res = parseFloat(Number1) + parseFloat(Number2);
        }
        InputField.value = Res;
      }
      if (Text[i] == "-" && i != 0) {
        Number1 = GetAllDataBefore(Text, i);
        Number2 = GetAllDataAfter(Text, i);

        if (Res && Res != null) {
          Res = parseFloat(Res) - parseFloat(Number2);
        } else {
          Res = parseFloat(Number1) - parseFloat(Number2);
        }
        InputField.value = Res;
      }
    }
  }
}

function GetAllDataAfter(Text, index) {
  let Num1 = "";

  for (let j = index + 1; j < Text.length; j++) {
    Num1 = Num1 + Text[j];
  }

  return Num1 + "";
}
function GetAllDataBefore(Text, index) {
  let Num1 = "";
  for (let j = 0; j < index; j++) {
    Num1 = Num1 + Text[j];
  }

  return Num1 + "";
}

function DisplayNumber(Num) {
  let Text = InputField.value;
  if (Text.length > 0 && Text != "0") {
    if (Num == "+" || Num == "-" || Num == "*") {
      if (
        Text[Text.length - 1] != "+" &&
        Text[Text.length - 1] != "-" &&
        Text[Text.length - 1] != "*"
      ) {
        Text = Text + Num;
        InputField.value = Text;
      } else {
        Text = GetAllDataBefore(Text, Text.length - 1);
        Text = Text + Num;
        InputField.value = Text;
      }
    } else {
      if (Num == ".") {
        if (Text[Text.length - 1] != ".") {
          Text = Text + Num;
          InputField.value = Text;
        }
      } else {
        Text = Text + Num;
        InputField.value = Text;
      }
    }
  } else {
    if (Num != "." && Num != "*" && Num != "+") {
      Text = Num;
      InputField.value = Text;
    } else {
      Text = Text + Num;
      InputField.value = Text;
    }
  }
}
function Clear() {
  InputField.value = "0";
}
