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
      {
        cssClass: 'greetings',
        text: 'greetings',
        value: '2'
      },
      {
        cssClass: 'answer',
        text: 'answer',
        value: '3'
      },
      {
        cssClass: 'word-of-the-day',
        text: 'word-of-the-day',
        value: '4'
      },
      {
        cssClass: 'report-skill',
        text: 'report-skill',
        value: '5'
      },
      {
        cssClass: 'radio',
        text: 'radio',
        value: '6'
      },
      {
        cssClass: 'clock',
        text: 'clock',
        value: '7'
      },
      {
        cssClass: 'surprises-date',
        text: 'surprises-date',
        value: '8'
      },
      {
        cssClass: 'settings',
        text: 'settings',
        value: '9'
      },
      {
        cssClass: 'circuit-saver',
        text: 'circuit-saver',
        value: '10'
      },
      {
        cssClass: 'introductions',
        text: 'introductions',
        value: '11'
      },
      {
        cssClass: 'photos',
        text: 'photos',
        value: '12'
      },
      {
        cssClass: 'gallery',
        text: 'gallery',
        value: '13'
      },
      {
        cssClass: 'exercise',
        text: 'exercise',
        value: '14'
      },
      {
        cssClass: 'who-am-i',
        text: 'who-am-i',
        value: '15'
      },
      {
        cssClass: 'bot-basics',
        text: 'bot-basics',
        value: '16'
      },
    ]
  });