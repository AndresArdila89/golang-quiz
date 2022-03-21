// JS Main file

      var arr = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ];
      var computerGenerated
      var str = "";
      var strOut = ""
      var arry = new Array()
      var index = 0
      const start = document.getElementById("BtnStart");
      start.addEventListener("click", function () {
          setTimeout(alpha1, 100);
          setTimeout(alpha2, 500);
          setTimeout(alpha3, 900);
          setTimeout(alpha4, 1300);
          setTimeout(hide,1500);
          setTimeout(disable,1500);

        });
        function disable(){
          document.getElementById("BtnStart").disabled = true;
          var reset = document.getElementById("BtnRestart");
          reset.style.visibility = "visible";
        }
      
        function hide(){
          var div1 = document.getElementById("bubble1");
          div1.style.display = "none";
          var div2 = document.getElementById("bubble2");
          div2.style.display = "none";
          var div3 = document.getElementById("bubble3");
          div3.style.display = "none";
          var div4 = document.getElementById("bubble4");
          div4.style.display = "none";
        }
//------------------------------------------computer generated outputs-----------------------------
//-------------------------------------------------------------------------------------------------
      function alpha1() {
        fetch("/play")
          .then((response) => response.json())
          .then((data) => {
            var div1 = document.getElementById("bubble1");
            if (div1.style.display == "none") {
              div1.style.display = "block";
            } else {
              div1.style.display = "none";
            }
            arry[index] = arr[parseInt(data.rnd)];
            index++
            document.getElementById("cube1").innerHTML =
              arr[parseInt(data.rnd)];
          });
      }
      function alpha2() {
        fetch("/play")
          .then((response) => response.json())
          .then((data) => {
            var div2 = document.getElementById("bubble2");
            if (div2.style.display == "none") {
              div2.style.display = "block";
            } else {
              div2.style.display = "none";
            }
            arry[index] = arr[parseInt(data.rnd)];
            index++
            document.getElementById("cube2").innerHTML =
              arr[parseInt(data.rnd)];
          });
      }
      function alpha3() {
        fetch("/play")
          .then((response) => response.json())
          .then((data) => {
            var div3 = document.getElementById("bubble3");
            if (div3.style.display == "none") {
              div3.style.display = "block";
            } else {
              div3.style.display = "none";
            }
            arry[index] = arr[parseInt(data.rnd)];
            index++
            document.getElementById("cube3").innerHTML =
              arr[parseInt(data.rnd)];
          });
      }
      function alpha4() {
        fetch("/play")
          .then((response) => response.json())
          .then((data) => {
            var div4 = document.getElementById("bubble4");
            if (div4.style.display == "none") {
              div4.style.display = "block";
            } else {
              div4.style.display = "none";
            }
            arry[index] = arr[parseInt(data.rnd)];
            index++
            document.getElementById("cube4").innerHTML =
              arr[parseInt(data.rnd)];
          });
      }
      console.log(arry);


//-----------------------------------------user input----------------------------------------------
//-------------------------------------------------------------------------------------------------

      function choose(x) {
        if (str.length <= 3) {
          for (let i = 0; i < arr.length; i++) {
            if (x == i) {
              str += arr[i];
              break;
              
            }
          }
        document.getElementById("player_input").innerHTML = str;
         computerGenerated=convert(arry)
        console.log(computerGenerated)
        // document.getElementById("player_input").innerHTML = computerGenerated;
        }
        if(str.length >= 3){
          setTimeout(comparison,2500);
        }
      }
    function comparison(){
      
        if(computerGenerated == str){
          document.getElementById("answer").innerHTML = "You Won";
        }else{
          document.getElementById("answer").innerHTML = "You Loose";
        }
         
    }

    function convert(arr){
      var temp="";
      for (i=0;i<arr.length;i++){
          temp+=arr[i]
      }
      return temp
    }