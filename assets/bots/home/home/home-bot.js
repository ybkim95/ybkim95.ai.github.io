var botui = new BotUI('botui-app'), // give it the id of container
            todo_list = [];

function sentiment(input) {
  if (input == 'Good') {
    res = "I'm glad to hear that you're feeling okay! 😀";
  } else {
    res = "I'm sorry to hear that..";
  }
  return res;
}

function message(input) {
  if (input == 'Read') {
    res = '![image](/assets/img/poster.png)';
  } else {
    res = "ℹ️ Message save in reminder?";
  }
  return res;
}

botui.message.bot({ // show first message
  delay: 200,
  photo: '/assets/img/11.png',
  content: 'Hello',
}).then(function () {
  return botui.message.add({ // second one
    delay: 1000, // wait 1 sec.
    photo: '/assets/img/11.png',
    content: "I'm your companion robot Jibo. How're you feeling today? ![product image](/assets/img/11.png)",
  });
}).then(function () {
  return botui.action.button({ // let user do something
    _delay: 3500,
    get delay() {
      return this._delay;
    },
    set delay(value) {
      this._delay = value;
    },
    action: [
      {
        text: 'Good',
        value: 'okay'
      },
      {
        text: 'Bad',
        value: 'bad'
      }
    ]
  });
}).then(function (res) {
  return botui.message.bot({
    delay: 1000,
    content: sentiment(res.text),
    photo: '/assets/img/11.png'
  });
}).then(function (res) {
  return botui.message.bot({
    delay: 2500,
    content: "Yesterday, I got 1 message 📩 from Central Boston Elder Services.",
    photo: '/assets/img/11.png'
  });
}).then(function () {
  return botui.action.button({ // let user do something
    _delay: 1500,
    get delay() {
      return this._delay;
    },
    set delay(value) {
      this._delay = value;
    },
    action: [
      {
        text: 'Read',
        value: 'okay'
      },
      {
        text: 'Remind me later',
        value: 'bad'
      }
    ]
  });
}).then(function (res) {
  botui.message.bot({
    delay: 1500,
    photo: '/assets/img/11.png',
    content: message(res.text)
  });
}).then(function () {
  return botui.action.button({
    _delay: 5000,
    get delay() {
      return this._delay;
    },
    set delay(value) {
      this._delay = value;
    },
    action: [
      {
        text: 'Save',
        value: 'save'
      },
      {
        text: 'Done',
        value: 'done'
      }
    ]
  });
}).then(function (res) {
  if (res.value == 'save') {
    botui.message.bot({
      content: 'Successfully saved in Google Calendar!',
      delay: 1500,
      photo: '/assets/img/11.png'
  })
  };
}).then(function (res) {
  return botui.message.bot({
    delay: 2000,
    photo: '/assets/img/11.png',
    content: "Do you need anything else?",
  });
}).then(function () {
  return botui.action.button({
    _delay: 4000,
    get delay() {
      return this._delay;
    },
    set delay(value) {
      this._delay = value;
    },
    action: [
      {
        text: 'Yes',
        value: 'yes'
      },
      {
        text: 'No',
        value: 'no'
      }
    ]
  });
}).then(function (res) {
  if(res.value == 'yes') {
    showReminderInput();
  } else {
    return botui.message.bot({
      delay: 2000,
      photo: '/assets/img/11.png',
      content: "Next time, you can also enjoy with me with following contents. ![image](/assets/img/functionality.png)"
    });
  }
}).then(function (res) {
  if (res.value == 'reload') {
    location.reload()
  }
  else {
    return botui.action.button({
      delay: 3500,
      action: [
        {
          text: 'Reload',
          value: 'reload'
        },
      ]
    })
  }
}).then(function (res) {
  location.reload();
})

var showReminderInput = function (res) {
  botui.message
    .bot({
      delay: 1000,
      photo: '/assets/img/11.png',
      content: 'Write your request below:'
    })
    .then(function () {
      return botui.action.text({
        delay: 1000,
        action: {
          placeholder: 'Write "done" to exit.'
        }
      })
    }).then(function (res) {
        if (res.value == 'done') {
            botui.message.bot({
                delay: 2000,
                photo: '/assets/img/11.png',
                content: "Next time, you can also enjoy with me with following contents. ![image](/assets/img/functionality.png)"
            })
            botui.action.button({
              delay: 3500,
              action: [
                {
                  text: 'Reload',
                  value: 'reload'
                },
              ]
            }).then(window.reload())
        }
        else {botui.message.bot({
              delay: 500,
              photo: '/assets/img/11.png',
              content: 'Your request: ' + res.value + " Added!"
          });
          res = botui.action.button({
            delay: 1000,
            action: [
              {
                icon: 'plus',
                text: 'add another',
                value: 'yes'
              },
              {
                text: 'Done',
                value: 'done'
              },
            ]
          })
          showReminderInput(res);
        }
    })
  }