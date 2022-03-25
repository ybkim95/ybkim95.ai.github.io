var program_ver = '2022.03.25';
var userPrompt = '';
var botPrompt = '\n[[b;#333;transparent]Jibo][[;#333;transparent] < ] ';

var bot = new RiveScript();
bot.loadFile(["/assets/brain/hellobot.rive"], on_load_success, on_load_error);

set_size();

$('.terminal').mousewheel(function(event) {
  console.log(event.deltaX, event.deltaY, event.deltaFactor);
});

$('.terminal').terminal(function(command, term) {
  var reply = null;
  if (command.length == 0) {
    return;
  }
  if (bot == null) {
    return;
  }
  if (command.toLowerCase() == '/help') {
    showHelp(term);
  } 
  else {
		term.pause();
    reply = bot.reply("local-user", command);
    botRespond(term, reply);
    term.resume();
  }
	//setTimeout(function() {
	//	term.resume();
	//}, 1000);

}, {
  prompt: '[[gb;#0c0;#000000]>_] ',
  name: 'Jibo',
  onResize: set_size,
  history: false,
  greetings: null,
  onInit: function(term) {
    term.set_prompt('[[;#236DB9;transparent]][[b;#333;transparent]' + userPrompt + '][[;#236DB9;transparent]User > ] '); // default promptName: YOU
    header(term); // display header/logo
    botInit(term); // initialize bot 1st conversation
  },
  onClear: function(term) {
    header(term);
  },
  onBlur: function(term) {
    // call function to start counting the timer
  },
  onFocus: function(term) {
    // call function to mention the away timer
  },
  onRPCError: function(term) {},
  processRPCResponse: function(object) {},
  exceptionHandler: function(e) {
    console.log("Exception handled: " + e);
  },
});

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
