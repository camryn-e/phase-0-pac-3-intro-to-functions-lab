function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
    let response = null;
    console.log(response, string);

    switch(string) {
      case string.toUpperCase():
        console.log("hit first case");
        response = "YES INDEED!";
        break;
      case string.toLowerCase():
        console.log("hit second case");
        response = "I can\'t hear you!";
        break;
      case "I love you, Grandma.":
        console.log("hit third case");
        response = "I love you, too.";
        break;
        default:
    }
    console.log(response);
    return response;
  }

