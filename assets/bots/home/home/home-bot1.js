// Create a new bot with the default settings.

var botui = new BotUI('botui-app'), // give it the id of container
            todo_list = [];

botui.message.bot({ // show first message
  delay: 200,
  photo: '/assets/img/11.png',
  content: 'Greetings!',
}).then(function () {
  return botui.message.add({ // second one
    delay: 1000, // wait 1 sec.
    photo: '/assets/img/11.png',
    content: "I'm your companion robot Jibo. How can I help you? ![product image](/assets/img/jibo.png)",
  });
})

botui.action.button({ // let user do something
    _delay: 1000,
    get delay() {
      return this._delay;
    },
    set delay(value) {
      this._delay = value;
    },
    action: [
      {
        cssClass: 'chitchat',
        text: 'chitchat',
        value: '1',
      },
      // {
      //   cssClass: 'greetings',
      //   text: 'greetings',
      //   value: '2'
      // },
      {
        cssClass: 'answer',
        text: 'q & a',
        value: '3'
      },
      // {
      //   cssClass: 'word-of-the-day',
      //   text: 'word-of-the-day',
      //   value: '4'
      // },
      {
        cssClass: 'report-skill',
        text: 'report-skill',
        value: '5'
      },
      // {
      //   cssClass: 'radio',
      //   text: 'radio',
      //   value: '6'
      // },
      {
        cssClass: 'clock',
        text: 'clock',
        value: '7'
      },
      // {
      //   cssClass: 'surprises-date',
      //   text: 'surprises-date',
      //   value: '8'
      // },
      // {
      //   cssClass: 'settings',
      //   text: 'settings',
      //   value: '9'
      // },
      // {
      //   cssClass: 'circuit-saver',
      //   text: 'circuit-saver',
      //   value: '10'
      // },
      // {
      //   cssClass: 'introductions',
      //   text: 'introductions',
      //   value: '11'
      // },
      // {
      //   cssClass: 'photos',
      //   text: 'photos',
      //   value: '12'
      // },
      {
        cssClass: 'gallery',
        text: 'gallery',
        value: '13'
      },
      // {
      //   cssClass: 'exercise',
      //   text: 'exercise',
      //   value: '14'
      // },
      {
        cssClass: 'who-am-i',
        text: 'who-am-i',
        value: '15'
      },
      // {
      //   cssClass: 'bot-basics',
      //   text: 'bot-basics',
      //   value: '16'
      // },
    ]
  }
).then(function (res) {
  // (1) CHITCHAT
  if (res.value==1) {
    chitchat();
  }
  // (2) GREETINGS
  else if (res.value==2) {
    return botui.message.add({ // second one
      delay: 1000, // wait 1 sec.
      // human: true,
      // photo: '/assets/img/human.png',
      photo: '/assets/img/11.png',
      content: "Hello, How are you feeling?",
      value: '2'
    });
  }

  // (3) ANSWER
  else if (res.value==3) {
    answer();
  }

  // (5) REPORT SKILL
  else if (res.value==5) {
    report_skill();
  }
  // (7) CLOCK
  else if (res.value==7) {
    clock();
  }
  // (13) GALLERY
  else if (res.value==13) {
      gallery();
  }
  // (15) WHO-AM-I
  else if (res.value==15) {
    aboutme();
  }
})


// Chatbot System
var count = 0;
// var reply = null;

var chitchat = function () {
  if (count == 0) {
    botui.message.bot({
        delay: 500,
        content: 'Hello!',
        photo: '/assets/img/11.png',
    })
  }
  count = count + 1;

  var ans = new RiveScript();
  ans.loadFile(["/assets/brain/hellobot.rive"], on_load_success, on_load_error);

  // window.location.href = '../chitchat/';

  botui.action.text({
      delay: 1000,
      action: {
        placeholder: 'Some texts'
      }
    }).then(function (res) {
    botui.message
      .bot({
        delay: 500,
        content: bot.reply("local-user", res.value),// res.value,
        photo: '/assets/img/11.png',
      });
    }).then(chitchat);
}

var report_skill = function () {
  window.location.href = '../report-skill/';
}

var clock = function () {
  window.location.href = '../clock/';
}

var aboutme = function () {
  window.location.href = '../jibo_aboutme/';
}

var gallery = function () {
  window.location.href = '../gallery/';
}

var correct = 0;
var answer = function () {
  botui.message
    .bot({
      delay: 500,
      content: "Okay please answer to my question 👵",
      photo: '/assets/img/11.png',
    })
    .then(function () {
      botui.message.add({ // second one
        delay: 1000, // wait 1 sec.
        // human: true,
        // photo: '/assets/img/human.png',
        photo: '/assets/img/11.png',
        content: "What is the population of Newton, Massachusetts ?",
      });
    })
    
  botui.action.button({ // let user do something
    _delay: 1500,
    get delay() {
      return this._delay;
    },
    set delay(value) {
      this._delay = value;
    },
    action: [
      {
        // cssClass: 'chitchat',
        text: '88590',
        value: '88590',
      },
      {
        // cssClass: 'chitchat',
        text: '65280',
        value: '65280',
      },
    ]
  }).then(function (res) {
    if (res.value==88590) {
      botui.message
      .bot({
        photo: '/assets/img/11.png',
        delay: 500,
        content: 'Correct! the answer is 88590.'
      });
      correct = correct + 1;
    }  
    else {
      botui.message
      .bot({
        photo: '/assets/img/11.png',
        delay: 500,
        content: 'Wrong.. the answer was 88590.'
      })
    }
  }).then(function () {
    botui.message
    .bot({
      delay: 2000,
      content: "Next question! What is a Russian Ruble worth in American money?",
      photo: '/assets/img/11.png',
    })
    
    botui.action.button({ 
      _delay: 2500,
      get delay() {
        return this._delay;
      },
      set delay(value) {
        this._delay = value;
      },
      action: [
        {
          // cssClass: 'chitchat',
          text: '0.01$',
          value: '0.01',
        },
        {
          // cssClass: 'chitchat',
          text: '0.1$',
          value: '0.1',
        },
      ]
    }).then(function (res) {
      if (res.value==0.01) {
        botui.message
        .bot({
          photo: '/assets/img/11.png',
          delay: 500,
          content: 'Correct! the answer is 0.01$.'
        });
        correct = correct + 1;

        if (correct==2) {
          botui.message
          .bot({
            photo: '/assets/img/11.png',
            delay: 500,
            content: "Wow... you're so good at this!"
          });
        }
      }  
      else {
        botui.message
        .bot({
          photo: '/assets/img/11.png',
          delay: 500,
          content: 'Wrong.. the answer was 0.01$.'
        })
      }
    }).then(function () {
      botui.message
      .bot({
        delay: 2000,
        content: "Final question. What is a Matryoshka doll?",
        photo: '/assets/img/11.png',
      })
    
      botui.action.button({ 
        _delay: 2500,
        get delay() {
          return this._delay;
        },
        set delay(value) {
          this._delay = value;
        },
        action: [
          {
            // cssClass: 'chitchat',
            text: 'Nesting Doll',
            value: 'nesting',
          },
          {
            // cssClass: 'chitchat',
            text: 'Japanse Doll',
            value: 'japanese',
          },
        ]
      }).then(function (res) {
        if (res.value=="nesting") {
          botui.message
          .bot({
            photo: '/assets/img/11.png',
            delay: 500,
            content: 'Correct! a Matryoshka doll is also known as a Nesting Doll.'
          });
          correct = correct + 1;

          if (correct==3) {
            botui.message
            .bot({
              photo: '/assets/img/11.png',
              delay: 500,
              content: "Amazing! you corrected all the problems.."
            });
          }
        }  
        else {
          botui.message
          .bot({
            photo: '/assets/img/11.png',
            delay: 500,
            content: 'Wrong.. Matryoshka Doll has no relationship with Japan.'
          })
        }
      }).then(function (res) {
        botui.message
        .bot({
          photo: '/assets/img/11.png',
          delay: 2500,
          content: 'This is end of my Q&A. Well done!'
        });
      })
    })
  })

  





}

function set_size() {
    var height = $(window).height();
    var width = $(window).width();
    $('.inner-wrapper').height(height);
    $('.inner-wrapper').width(width);
    $('.terminal').height(height - 50);
}

function botRespond(term, text) {
  term.echo(botPrompt + '[[;#666;transparent]' + text + ']');
}

function header(term) {

  // term.echo(
  //   '[[b;#111;transparent]' +
  //   "================================ \n" +
  //   "      _     _     _         \n" +
  //   "      | |   (  )   |  |__        ___   \n" +
  //   "  _  | |   |  |   |    _  \\    /    _  \\  \n" +
  //   " | |_| |   |  |   |   |_)  |  |   (_)  | \n" +
  //   " \\___/   |_|   |__.__/   \\____/  v1.0.0"  + "\n" +
  //   "]" +
  //   '[[;#111;transparent]Companion Robot]\n\n' +
  //   "================================ \n"  
  // );
}

function botInit(term) {
  botRespond(term, 'Hello!');
}

function showHelp(term) {
  botRespond(term, 'Looking for help? Why not you just directly ask me.');
}

function on_load_success() {
  bot.sortReplies();
}

function on_load_error(err) {
  console.log("Loading error: " + err);
}
