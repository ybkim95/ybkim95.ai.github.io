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
    res = "ℹ️ Message saved in reminder";
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
    delay: 1000,
    content: "You have 1 message 📩 from Central Boston Elder Services",
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
  return botui.message.bot({
    delay: 3000,
    human: true,
    content: message(res.text)
  });
});