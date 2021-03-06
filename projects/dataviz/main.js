let data = [
  {
    text: "[THURSDAY] BEGIN NEW CYCLE.", 
    timestamp: 0,
    type: 1,
    color: "white",
  },
  {
    text: "[THURSDAY, 12:00 AM] Join KAUS, CAPH, HEZE, ATIK, and AZHA; start chatting over a study session.", 
    timestamp: 1,
    type: 1,
    color: "white",
  },
  {
    text: "[THURSDAY, 1:30 AM] Head back to my dorm.", 
    timestamp: 2,
    type: 1,
    color: "white",
  },
  {
    text: "[THURSDAY, 4:00 PM] Start a FaceTime call with SOLARIS.", 
    timestamp: 4,
    type: 1,
    color: "white",
  },
  {
    text: "SOLARIS: My professors won't stop giving me new assignments... I'm not sure what I should do.", 
    timestamp: 5,
    type: 2,
    color: "yellow",
  },
  {
    text: "SHERRY: Are you still picking up extra shifts at work?", 
    timestamp: 6,
    type: 3,
    color: "white",
  },
  {
    text: "[THURSDAY, 6:30 PM] Briefly attend a thirty-minute work meeting.", 
    timestamp: 7,
    type: 1,
    color: "white",
  },
  { 
    text: "[THURSDAY, 9:00 PM] Go on a boba run with KAUS, CAPH, HEZE, and ATIK.", 
    timestamp: 9,
    type: 1,
    color: "white",
  },
  {
    text: "[THURSDAY, 10:00 PM] Return back to my dorm.", 
    timestamp: 10,
    type: 1,
    color: "white",
  },
  {
    text: "[FRIDAY, 11:15 AM] Start chatting while walking downtown with ANTARES.", 
    timestamp: 12,
    type: 1,
    color: "white",
  },
  {
    text: "SHERRY: I'm a bit scarred by your navigational skills... remember that time we ended up in the middle of nowhere?", 
    timestamp: 13,
    type: 3,
    color: "white",
  },
  {
    text: "[FRIDAY, 3:15 PM] Return from downtown; say bye to ANTARES.", 
    timestamp: 14,
    type: 1,
    color: "white",
  },
  {
    text: "[FRIDAY, 7:15 PM] Grab dinner with ANTARES, LYNX, and CYGNUS.", 
    timestamp: 15,
    type: 1,
    color: "white",
  }, 
  {
    text: "[FRIDAY, 8:15 PM] Return from dinner; start a FaceTime call with POLARIS.", 
    timestamp: 16,
    type: 1,
    color: "white",
  },
  {
    text: "POLARIS: We've been trying to watch this movie for so long and now you say you're \"busy\"... SMH.", 
    timestamp: 17,
    type: 2,
    color: "lightgreen",
  },
  {
    text: "SHERRY: Not my fault I got homework... guess you're just my last priority.", 
    timestamp: 18,
    type: 3,
    color: "white",
  },
  {
    text: "[FRIDAY, 8:15 PM] End call; wish POLARIS good night.", 
    timestamp: 19,
    type: 1,
    color: "white",
  },
  {
    text: "[SATURDAY, 12:15 PM] Hang out with ANTARES and LYNX at a college event.", 
    timestamp: 22,
    type: 1,
    color: "white",
  },
  {
    text: "[SATURDAY, 2:00 PM] Leave the event to go talk to a TA in office hours.", 
    timestamp: 23,
    type: 1,
    color: "white",
  },
    {
    text: "[SATURDAY, 2:00 PM] Head to a festival with ANTARES.", 
    timestamp: 24,
    type: 1,
    color: "white",
  },
  {
    text: "[SATURDAY, 7:15 PM] Grab dinner after the festival with ANTARES; then head back to my dorm.", 
    timestamp: 26,
    type: 1,
    color: "white",
  },
  {
    text: "[SUNDAY, 11:45 AM] Head downtown to a convention with ANTARES.", 
    timestamp: 29,
    type: 1,
    color: "white",
  },
  {
    text: "[SUNDAY, 1:30 PM] Chat with numerous strangers at the convention.", 
    timestamp: 30,
    type: 1,
    color: "white",
  },
  {
    text: "SHERRY: My friend's been dying to meet you for years... this is the most uncomposed I've ever seen her!", 
    timestamp: 31,
    type: 3,
    color: "white",
  },
  {
    text: "[SUNDAY, 5:30 PM] Return from the convention; call my mom briefly before getting dinner with ANTARES.", 
    timestamp: 32,
    type: 1,
    color: "white",
  },
  {
    text: "[SUNDAY, 8:00 PM] Join a brief club meeting over Zoom.",
    timestamp: 33,
    type: 1,
    color: "white",
  }, 
  {
    text: "[SUNDAY, 10:15 PM] Join KAUS, CAPH, HEZE, ATIK, and AZHA and chat over a study session.",
    timestamp: 34,
    type: 1,
    color: "white",
  },
  {
    text: "[MONDAY, 3:30 AM] Head back to my dorm.",
    timestamp: 36,
    type: 1,
    color: "white",
  },
  {
    text: "[MONDAY, 12:45 PM] Call my mom for fifteen minutes.",
    timestamp: 39,
    type: 1,
    color: "white",
  },
  {
    text: "[MONDAY, 5:00 PM] Briefly chat with KEID after class.",
    timestamp: 40,
    type: 1,
    color: "white",
  },
  {
    text: "[MONDAY, 6:30 PM] Grab dinner with KAUS and RIGEL.",
    timestamp: 41,
    type: 1,
    color: "white",
  },
  {
    text: "[MONDAY, 7:30 PM] Sit down with KAUS, CAPH, HEZE, ATIK, and AZHA to study.",
    timestamp: 42,
    type: 1,
    color: "white",
  },
  {
    text: "KAUS: We're gonna go get dinner at Wawa if any of you guys want to come with?",
    timestamp: 45,
    type: 2,
    color: "hotpink",
  },
  {
    text: "AZHA: There's no such thing as dinner at 1 AM... you have got to start eating more in the day.",
    timestamp: 46,
    type: 2,
    color: "orange",
  },
  {
    text: "[TUESDAY, 2:45 AM] Wish KAUS, CAPH, HEZE, ATIK, and AZHA good night; head back to my dorm.",
    timestamp: 47,
    type: 1,
    color: "white",
  },
  {
    text: "[TUESDAY, 12:35 PM] Catch up with BATEN over lunch for two hours.",
    timestamp: 48,
    type: 1,
    color: "white",
  },
  {
    text: "[TUESDAY, 8:00 PM] Start a FaceTime call with POLARIS.",
    timestamp: 50,
    type: 1,
    color: "white",
  },
  {
    text: "[TUESDAY, 10:40 PM] End the call with POLARIS; take a walk and chat with KEID.",
    timestamp: 51,
    type: 1,
    color: "white",
  },
  {
    text: "SHERRY: I think you're actually a really nice person.",
    timestamp: 52,
    type: 3,
    color: "white",
  },
  {
    text: "[WEDNESDAY, 1:30 AM] Say good night to KEID; sit down with KAUS, CAPH, HEZE, ATIK, and AZHA for three hours.",
    timestamp: 53,
    type: 1,
    color: "white",
  },
  {
    text: "[WEDNESDAY, 5:00 PM] Start a FaceTime call with SOLARIS.",
    timestamp: 58,
    type: 1,
    color: "white",
  },
    {
    text: "[WEDNESDAY, 7:30 PM] Sit down and eat dinner with ANTARES.",
    timestamp: 59,
    type: 1,
    color: "white",
  },

];

function start() {
  let newItem = document.createElement("div");
      let dataDiv = container.appendChild(newItem);
      newItem.classList.add("statusText");
      newItem.classList.add("statusText" + [i]);
      let startMessage = "BEGIN LOG...";
      dataDiv.innerHTML = startMessage;
      console.log(data);
}

let t = 0;

function updateClock() {
    var now = new Date(), // current date
    // t = now.getMilliseconds() % 672;
    t = now.getMinutes();
    // t = now.getSeconds();

    let item  = data.find(item => item.timestamp === t); 
    if (item != undefined) {
      let newItem = document.createElement("div");
      let dataDiv = container.appendChild(newItem);
      i++;
    
      if (item.type == 1) {
        newItem.classList.add("statusText");
        newItem.classList.add("statusText" + [i]);
      } 
      else if (item.type == 2) {
        newItem.classList.add("theirLine");
        newItem.classList.add("theirLine" + [i]);

        newItem.style.color = item.color;

      } else if (item.type == 3) {
        newItem.classList.add("myLine");
        newItem.classList.add("myLine" + [i]);
      }

      dataDiv.innerHTML = item.text;
      console.log(item);

      if (t >= 0 && t <= 9) {
        dayOfWeek.innerHTML = "DAY 1: THURSDAY";
      }
            if (t >= 10 && t <= 16) {
        dayOfWeek.innerHTML = "DAY 2: FRIDAY";
      }
            if (t >= 17 && t <= 25) {
        dayOfWeek.innerHTML = "DAY 3: SATURDAY";
      }
            if (t>=  26 && t <= 33) {
        dayOfWeek.innerHTML = "DAY 4: SUNDAY";
      }
            if (t>=  34&& t <= 42) {
        dayOfWeek.innerHTML = "DAY 5: MONDAY";
      }
            if (t>=  43&& t <= 51) {
        dayOfWeek.innerHTML = "DAY 6: TUESDAY";
      }
       if (t>=  52 && t <= 60) {
        dayOfWeek.innerHTML = "DAY 7: WEDNESDAY";
      }

    }
    // call this function again in 1000ms
    // setTimeout(updateClock, 1000);
    setTimeout(updateClock, 60000);
}

let container = document.querySelector(".container");
let i = 0;

function getTimestamp(data) {
  return data.timestamp;
}

start();
updateClock();
