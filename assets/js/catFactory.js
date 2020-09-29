//Random color
function getColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor
}

function genColors() {
  var colors = []
  for (var i = 10; i < 99; i++) {
    var color = getColor()
    colors[i] = color
  }
  return colors
}


//GAAN NOG DINGEN MIS MET DE RANDOMIZER, GETALLEN GROTER DAN 100 KOMEN ERUIT + ER ZIT EEN GEKKE LOOP IN ERGENS

//This function code needs to modified so that it works with Your cat code.
function headColor(color, code) {
  $('.head, .body').css('background', '#' + color) //This changes the color of the cat
  $('#headcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat

}

function randomHeadColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = color[code]
  //var color = allColors.code[color]


  $('.head, .body').css('background', '#' + colorcode) //This changes the color of the cat
  $('#headcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat


  //lol dit is gek zonder console log doet ie het niet ......
}

function hatColor(color, code) {
  $('.hat, .hatinside').css('background', '#' + color) //This changes the color of the cat
  $('#hatcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnahat').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function randomHatColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = color[code]
  $('.hat, .hatinside').css('background', '#' + colorcode) //This changes the color of the cat
  $('#hatcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnahat').html(code) //This updates the body color part of the DNA that is displayed below the cat


}

function eyesColor(color, code) {
  $('.eye1, .eye2').css('background', '#' + color) //This changes the color of the cat
  $('#eyescode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function randomEyesColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = color[code]
  $('.eye1, .eye2').css('background', '#' + colorcode) //This changes the color of the cat
  $('#eyescode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnaeyes').html(code) //This updates the body color part of the DNA that is displayed below the cat

}

function earColor(color, code) {
  $('.ear').css('background', '#' + color) //This changes the color of the cat

  $('#earcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function randomEarColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = color[code]
  $('.ear').css('background', '#' + colorcode) //This changes the color of the cat
  $('#earcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnaears').html(code) //This updates the body color part of the DNA that is displayed below the cat

}


function armsLegsColor(color, code) {
  $('.armsleft, .armsright,  .legleft, .legright').css('background', '#' + color) //This changes the color of the cat
  $('#armslegscode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnaarmslegs').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function randomArmsLegsColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = color[code]
  $('.armsleft, .armsright,  .legleft, .legright').css('background', '#' + colorcode) //This changes the color of the cat
  $('#armslegscode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnaarmslegs').html(code) //This updates the body color part of the DNA that is displayed below the cat

}


function bellyColor(color, code) {
  $('.bodyinner').css('background', '#' + color) //This changes the color of the cat
  $('#bellycode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnabelly').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function randomBellyColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = color[code]
  $('.bodyinner').css('background', '#' + colorcode) //This changes the color of the cat
  $('#bellycode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnabelly').html(code) //This updates the body color part of the DNA that is displayed below the cat



  //lol dit is gek zonder dit doet ie het niet ...... en hij is zowieso niet random doet steeds dezelfde kleuren IEDEREN CODE IS DEZELFDE KLEUR
}


function tailColor(color, code) {
  $('.catTail span').css('background', '#' + color) //This changes the color of the cat
  $('#tailcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnatail').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function randomTailColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = color[code]

  $('.catTail span').css('background', '#' + colorcode) //This changes the color of the cat
  $('#tailcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnatail').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function trunkColor(color, code) {
  let colorTrunk = color
  $('.trunk, .left-branch, .right-branch').css('background', '#' + color) //This changes the color of the cat\
  //$('.left_ear').css({"box-shadow": "#" + color})
  $('.right_ear').css({
    "box-shadow": "#" + color
  })
  // manier 1 EARS HIER AANSPREKEN $('.trunk, .left-branch, .right-branch').css('background', '#' + color)
  //    $('.left_ear').css({ "box-shadow": '#' + color})
  $('#trunkcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnatrunk').html(code) //This updates the body color part of the DNA that is displayed below the cat

  return colorTrunk
}

function randomTrunkColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = color[code]

  $('.trunk, .left-branch, .right-branch').css('background', '#' + colorcode) //This changes the color of the cat\
  $('.left_ear').css({
    "box-shadow": "5px 25px 25px -9px #" + color
  })
  $('.right_ear').css({
    "box-shadow": "3px -25px 18px -8px #" + color
  })
  // manier 1 EARS HIER AANSPREKEN $('.trunk, .left-branch, .right-branch').css('background', '#' + color)
  //    $('.left_ear').css({ "box-shadow": '#' + color})
  $('#trunkcode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnatrunk').html(code) //This updates the body color part of the DNA that is displayed below the cat


}

function vaseColor(color, code) {
  $('.vase').css('color', '#' + color) //This changes the color of the cat
  $('.vase').css('border-top-color', '#' + color) //This changes the color of the cat
  $('#vasecode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnavase').html(code) //This updates the body color part of the DNA that is displayed below the cat
}

function randomVaseColor(color, code) {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = color[code]

  $('.vase').css('color', '#' + colorcode) //This changes the color of the cat
  $('.vase').css('border-top-color', '#' + colorcode) //This changes the color of the cat
  $('#vasecode').html('code: ' + code) //This updates text of the badge next to the slider
  $('#dnavase').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
//###################################################
//Functions below will be used later on in the project
//###################################################
//function hatDnaCode(color, code) {

//$('#hatdnscode').html('code: ' + vaseColor.code)

//}

function eyeVariation(num) {

  $('#dnaeyeshape').html(num)

  switch (num) {
    case 1:
     $('#eyeName').html('Plain')
      normalEyes()
            break

    case 2:
      normalEyes()
      $('#eyeName').html('Tear left')
      eyesType1()
      break

    case 3:
      normalEyes()
      $('#eyeName').html('Tear right')
      eyesType2()
      break

    case 4:
      normalEyes()
      $('#eyeName').html('Tears')
      eyesType3()
      break

    case 5:
      normalEyes()
      $('#eyeName').html('Tears right')
      eyesType4()
      break

    case 6:
      normalEyes()
      $('#eyeName').html('Freaky')
      eyesType5()
      break

  }
}

function randomEyeVariation(num) {
  var num = filterOnetoSix(num);

  $('#dnaeyeshape').html(num)

  switch (num) {
    case 1:
      normalEyes()
      $('#eyeName').html('Plain')
      break

    case 2:
      normalEyes()
      $('#eyeName').html('Tear left')
      eyesType1()
      break

    case 3:
      normalEyes()
      $('#eyeName').html('Tear right')
      eyesType2()
      break

    case 4:
      normalEyes()
      $('#eyeName').html('Tears')
      eyesType3()
      break

    case 5:
      normalEyes()
      $('#eyeName').html('Tears right')
      eyesType4()
      break

    case 6:
      normalEyes()
      $('#eyeName').html('Freaky')
      eyesType5()
      break

  }
}

function decorationNailVariation(num) {
  $('#dnanaildecoration').html(num)
  resetNails()
  console.log(num);
  switch (num) {
    case 1:
      $('#nailName').html('Miaaaauwwwww')
      resetNails()
      normalNails()

      break


    case 2:

      $('#nailName').html('Defense')
      nails1()
      break

    case 3:

      $('#nailName').html('Ninja Fighter Cat')
      nails2()
      break



  }
}

function randomDecorationNailVariation(num) {
  var num = filterOnetoFive(num);

  $('#dnanaildecoration').html(num)

  resetNails()
  console.log(num);
  switch (num) {

    case 1:
      normalNails()
      $('#nailName').html('Miaaaauwwwww')
      break

    case 2:
      $('#nailName').html('Ouch failed nails')
      nails1()
      break

    case 3:

      $('#nailName').html('Power')
      nails2()
      break
    case 4:

      $('#nailName').html('Defense')
      nails3()
      break

    case 5:

      $('#nailName').html('Ninja Fighter Cat')
      nails4()
      break

  }
}

function decorationWings(num) {
  $('#dnawings').html(num)
  resetWings()
  switch (num) {
    case 1:
      resetWings()
      $('#wingNames').html('No Wings')
      normalWings()



    case 2:

      resetWings()
      $('#wingNames').html('Failed Wings')
      normalWings()

      wings1()
      break


    case 3:
      resetWings()
      $('#wingNames').html('Wingy Miaauw')
      normalWings()


      wings2()
      break


    case 4:
      resetWings()
      $('#wingNames').html('Flying Cat')
      normalWings()

      wings3()
      break

    case 5:
      resetWings()
      $('#wingNames').html('Dark Angel')
      normalWings()

      wings4()
      break
  }

}

function randomDecorationWings(num) {
  var num = filterOnetoFive(num);

  $('#dnawings').html(num)

  switch (num) {
    case 1:
      $('#wingNames').html('No Wings')
      normalWings()



    case 2:
      $('#wingNames').html('Failed Wings')
      normalWings()
      wings1()
      break


    case 3:
      $('#wingNames').html('Wingy Miaauw')
      normalWings()
      wings2()
      break


    case 4:
      $('#wingNames').html('Flying Cat')
      normalWings()

      wings3()
      break

    case 5:
      $('#wingNames').html('Dark Angel')
      normalWings()
      wings4()
      break
  }
}


function normalEyes() {
  $('.eye1, .eye2').find('div').css('border', 'none')
}

function eyesType1() {
  $('.eye1').find('div').css('border-top', '10px solid')
}

function eyesType2() {
  $('.eye2').find('div').css('border-top', '10px solid')
}

function eyesType3() {
  $('.eye1,.eye2').find('div').css('border-top', '10px solid')
}

function eyesType4() {
  $('.eye1,.eye2').find('div').css('border-left', '13px solid')
}

function eyesType5() {
  $('.eye1,.eye2').find('div').css('border-top', ' 36px solid')
  $('.eye1,.eye2').find('div').css('border-bottom', ' 36px solid')
}

function normalNails() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style

  $('.armsleftinside').css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    "height": "11px",
    "width": "8px",
    "left": "21px",
    "top": "20px",
    "position": "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "2"
  })
  $('.armsrighttinside').css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    "height": "11px",
    "width": "8px",
    "left": "24px",
    "top": "19px",
    "position": "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "55"

  })


  $('.armsleftinside2').css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    "height": "11px",
    "width": "8px",
    "left": "11px",
    "top": "11px",
    "position": "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "2",
    "transform": "rotate(0deg)"
  })


  $('.armsrightinside2').css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    "height": "11px",
    "width": "8px",
    "left": "14px",
    "top": "12px",
    "position": "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "55",
    "transform": "rotate(0deg)"
  })
  $('.armsleftinside3').css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    "height": "11px",
    "width": "8px",
    "left": "1px",
    "top": "-3px",
    "position": "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "2"
  })
  $('.armsrightinside3').css({
    "background-color": "black",
    "border-radius": "50% 40% 40% 40%",
    "height": "11px",
    "width": "8px",
    "left": "3px",
    "top": "-1px",
    "position": "relative",
    "border-style": "solid",
    "border-color": "black",
    "z-index": "5"
  })



}



function nails1() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $('.armsleftinside, .armsrighttinside').css({
    "transform": "rotate( 0deg)",
    "height": "0px",
    "width": "0px",
    "top": "25px",
    "left": "12px"
  })
  $('.armsleftinside2, .armsrightinside2').css({
    "transform": "rotate(90deg)",
    "height": "172px",
    "width": "18px",
    "top": "-70px",
    "left": "8px",
    "background-color": "#a45656",
    "z-index": "5"
  })
  $('.armsleftinside3, .armsrightinside3').css({
    "transform": "rotate(0deg)",
    "height": "0px",
    "width": "0px",
    "top": "-28px",
    "left": "18px"
  })
}


function nails2() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $('.armsleftinside, .armsrighttinside').css({
    "transform": "rotate( 0deg)",
    "height": "10px",
    "width": "0px",
    "top": "-184px",
    "left": "14px",
    "background-color": "black",
    "border-color": "black"
  })
  $('.armsleftinside2, .armsrightinside2').css({
    "transform": "rotate(120deg)",
    "height": "155px",
    "width": "13px",
    "top": "-64px",
    "left": "10px",
    "background-color": "#a45656",
    "z-index": "125"
  })
  $('.armsleftinside3, .armsrightinside3').css({
    "transform": "rotate(0deg)",
    "height": "10px",
    "width": "0px",
    "top": "-317px",
    "left": "13px",
    "background-color": "black",
    "border-color": "black"
  })
}

function normalWings() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  
  $('.ear.left_ear').css({
    "box-shadow": ""
  })
  $('ear.right_ear').css({
    "box-shadow": ""
  })

}

function wings1() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = '#' + color[code]


  $('.left_ear').css({
    "box-shadow": "5px 25px 25px -9px",
    "color": colorcode
  })
  $('.right_ear').css({
    "box-shadow": "3px -25px 18px -8px",
    "color": colorcode
  })

}

function wings2() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = '#' + color[code]


  $('.left_ear').css({
    "box-shadow": "-75px 25px 3px 35px",
    "color": colorcode
  })
  $('.right_ear').css({
    "box-shadow": "60px -15px 3px 35px",
    "color": colorcode
  })

}

function wings3() {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = '#' + color[code]

  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $('.left_ear').css({
    "box-shadow": "-30px -22px 3px 35px",
    "color": colorcode
  })
  $('.right_ear').css({
    "box-shadow": "25px 25px 3px 35px",
    "color": colorcode
  })

}


function wings4() {
  var code = filterTentoHunderd(code);
  var color = allColors(code)
  var colorcode = '#' + color[code]

  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  //$('.left_ear').css({"box-shadow": "-10px -22px 3px 35px #e42e74", "transform": "rotate(30deg)" })
  $('.left_ear').css({
    "border-radius": "90% 0px% 90% 0%",
    "transform": "rotate(10deg) scale(-1, 1)",
    "height": "250px",
    "width": "150px",
    "box-shadow": "20px -25px 18px 18px",
    "left": "-70px",
    "color": colorcode
  })
  $('.right_ear').css({
    "border-radius": "90% 0p% 90% 0%",
    "transform": "rotate(40deg) scaleX(-1)",
    "height": "250px",
    "width": "150px",
    "box-shadow": "20px -25px 18px 18px",
    "left": "115px",
    "color": colorcode
  })
}

function resetWings() {
  console.log("resetting wings");

  $('.left_ear').css({
    "box-shadow": ""
  })
  $('.right_ear').css({
    "box-shadow": ""
  })

}


function animationVariation(num) {
  $('#dnaanimation').html(num);
  resetAnimation();
  switch (num) {
    case 1:
      $('#animationName').html('Lame')
      animationType1();
      break;

    case 2:
      $('#animationName').html('Cat got some moves')
      animationType2();
      break;

    case 3:
      $('#animationName').html('Hajahiiii')
      animationType3();
      break;

    case 4:
      $('#animationName').html('Master Ninja Cat')
      animationType4();
      break;

    case 5:
      $('#animationName').html('Crazy Ears')
      animationType5();
      break;

    case 6:
      $('#animationName').html('Fly Away')
      animationType6();
      break;
  }

}


function randomAnimationVariation(num) {
  var num = filterOnetoFive(num);

  $('#dnaanimation').html(num);
  resetAnimation();
  switch (num) {
    case 1:
      $('#animationName').html('Lame')
      animationType1()

      break;

    case 2:
      $('#animationName').html('Cat got some moves')
      animationType2();
      break;

    case 3:
      $('#animationName').html('Hajahiiii')
      animationType3();
      break;

    case 4:
      $('#animationName').html('Master Ninja Cat')
      animationType4();
      break;


    case 5:
      $('#animationName').html('Crazy Ears')
      animationType5();
      break;

    case 6:
      $('#animationName').html('Fly Away')
      animationType6();
      break;

  }
}


function animationType1() {


  $(".armsleft").addClass("movingHead");
}

function animationType2() {


  $(".armsleft").addClass("movingStickRight");
}


function animationType3() {


  $(".armsleft").addClass("movingStickLeft");

}


function animationType4() {

  $(".armsleft").addClass("movingStickRight");
  $(".armsright").addClass("movingStickLeft");

}


function animationType5() {

  $(".left_ear").addClass("movingWings");
  $(".right_ear").addClass("movingWings");
}

function animationType6() {

  $(".left_ear").addClass("movingWings2");
  $(".right_ear").addClass("movingWings2");
}



function resetAnimation() {
  $(".armsleft").removeClass("movingHead movingStickRight movingStickLeft");
  $(".armsright").removeClass("movingStickLeft");
  $(".left_ear").removeClass("movingWings movingWings2");
  $(".right_ear").removeClass("movingWings movingWings2");
  //add any animation calls that you create
}

function resetNails() {

  $(".armsleft").removeAttr("style");
  $(".armsright").removeAttr("style");

  //add any animation calls that you create
}

function resetWings() {
  $(".ear.left_ear").removeAttr("style");
  $(".ear.right_ear").removeAttr("style");

  //add any animation calls that you create
}
