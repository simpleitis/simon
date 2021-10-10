var round = 1, count = 0, num = [], pnum = [];













function matching() {
    if (JSON.stringify(num) == JSON.stringify(pnum)) {
      round += 1;
      $("h1").text("Round " + round);
      pnum = [];
      setTimeout(function () {
        document.dispatchEvent(new KeyboardEvent("keypress", { key: "a" }));
      }, 1000);
      
    
    }
    else {
      round = 1; 
      count = 0;
      num = [];
      pnum = [];
      $("h1").text("Game over, press any key to restart");
      setTimeout(function () {
        document.dispatchEvent(new KeyboardEvent("keypress", { key: "a" }));
      }, 10000);
      var audio = new Audio(".sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 100);
      setTimeout(function () {
        document.dispatchEvent(new KeyboardEvent("keypress", { key: "a" }));
      }, 10000);
    }

  }


















$(".btn").click(function (event) {
  
  switch (event.target.id) {
    case "green":
      pnum.push(1);
      document.querySelector("#green").classList.add("pressed");
      setTimeout(function () {
        document.querySelector("#green").classList.remove("pressed");
      }, 100);
    var audio = new Audio("./sounds/green.mp3");
    audio.play();
    break;
    case "blue":
      pnum.push(2);
      document.querySelector("#blue").classList.add("pressed");
      setTimeout(function () {
        document.querySelector("#blue").classList.remove("pressed");
      }, 100);
      var audio = new Audio("./sounds/blue.mp3");
      audio.play();
      break;
      case "red":
        pnum.push(3);
        document.querySelector("#red").classList.add("pressed");
        setTimeout(function () {
          document.querySelector("#red").classList.remove("pressed");
        }, 100);
        var audio = new Audio("./sounds/red.mp3");
        audio.play();
        break;
        case "yellow":
          pnum.push(4);
          document.querySelector("#yellow").classList.add("pressed");
          setTimeout(function () {
            document.querySelector("#yellow").classList.remove("pressed");
      }, 100);
    var audio = new Audio("./sounds/yellow.mp3");
    audio.play();
    break;
  }
  
  
  if (num[count] == pnum[count]) {
    count = count + 1;
    if (count == round) {
      // document.dispatchEvent(new KeyboardEvent("keypress", { key: "a" }));
      count = 0;
      matching();
    }
  }
  else {
    round = 1;
    count = 0;
    num = [];
    pnum = [];
    $("h1").text("Game over, press any key to restart");
    var audio = new Audio(".sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 100);
    setTimeout(function () {
      document.dispatchEvent(new KeyboardEvent("keypress", { key: "a" }));
    }, 10000);
  }
});
  
















$("#startButton").click(function (event) {
  setTimeout(function () {
    game();
  }, 500);
});


$(document).keypress(function(event) {
  setTimeout(function () {
    game();
  }, 500);
});

function game() {
  $("h1").text("Round " + round);

  var n = Math.floor(Math.random() * 4 + 1);
  num.push(n);
  switch (n) {
    case 1:
      $("#green").animate({ opacity: 0.5 });
      setTimeout(function () {
        $("#green").animate({ opacity: 1 });
      }, 100);
      var audio = new Audio("./sounds/green.mp3");
      audio.play();
      break;
    case 2:
      $("#blue").animate({ opacity: 0.5 });
      setTimeout(function () {
        $("#blue").animate({ opacity: 1 });
      }, 100);
      var audio = new Audio("./sounds/blue.mp3");
      audio.play();
      break;















    case 3:
      $("#red").animate({ opacity: 0.5 });
      setTimeout(function () {
        $("#red").animate({ opacity: 1 });
      }, 100);
      var audio = new Audio("./sounds/red.mp3");
      audio.play();
      break;
    case 4:
      $("#yellow").animate({ opacity: 0.5 });
      setTimeout(function () {
        $("#yellow").animate({ opacity: 1 });
      }, 100);
      var audio = new Audio("./sounds/yellow.mp3");
      audio.play();
      break;
  }
}
  
  
  




