---
layout: empty
permalink: /calendar/
---

<!-- 
<html>
<head>
    <title>Calendar Yearview with Blocks demo page</title>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script type="text/javascript" src="/assets/js/calendar_yearview_blocks.js"></script>
    <link href="/assets/css/calendar_yearview_blocks.css" media="all" rel="stylesheet"/>
    <script type="text/javascript">
        /* START DEMO PURPOSES */
        // Format string
        if (!String.prototype.formatString) {
            String.prototype.formatString = function () {
                var args = arguments;
                return this.replace(/{(\d+)}/g, function (match, number) {
                    return typeof args[number] !== 'undefined'
                        ? args[number]
                        : match
                        ;
                });
            };
        }
        // If the number less than 10, add a zero before it
        var prettyNumber = function (number) {
            return number < 10 ? '0' + number.toString() : number = number.toString();
        };
        var getDisplayDate = function (date_obj) {
            var pretty_month = prettyNumber(date_obj.getMonth() + 1);
            var pretty_date = prettyNumber(date_obj.getDate());
            return "{0}-{1}-{2}".formatString(date_obj.getFullYear(), pretty_month, pretty_date);
        };
        // Generate random number between min and max
        function randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function getRandomData(min, max, items) {
            var return_object = {};
            var entries = randomInt(min, max);
            for (var i = 0; i < entries; i++) {
                var day = new Date();
                var previous_date = randomInt(0, 365);
                day.setDate(day.getDate() - previous_date);
                var display_date = getDisplayDate(day);
                return_object[display_date] = {};
                return_object[display_date].items = [];
                var random_elements = randomInt(1,3);
                for (var j=0; j < random_elements; j++) {
                    var random_item = items[randomInt(0,items.length-1)];
                    if (!return_object[display_date].items.includes(random_item)) {
                        return_object[display_date].items.push(random_item);
                    }
                }
            }
            console.log(return_object);
            return JSON.stringify(return_object);
        }
        /* END DEMO PURPOSES */
        $(document).ready(function () {
            $('#calendar_yearview_blocks_chart_1').calendar_yearview_blocks({
                //data: '{"2020-08-01": {"items": ["banana", "apple"]}, "2020-05-05": {"items": ["apple"]}, "2020-05-01": {"items": ["banana"]}, "2020-05-03": {"items": ["banana", "apple", "orange"]}, "2020-05-22": {"items": ["banana", "apple", "orange", "pear"]}}',
                data: getRandomData(100, 200, ["chitchat", "greetings", "answer", "word-of-the-day"]),
                start_monday: true,
                always_show_tooltip: true,
                month_names: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
                day_names: ['mon', 'wed', 'fri', 'sun'],
                colors: {
                    'default': '#eeeeee', // Default color
                    'chitchat': 'red',
                    'greetings': 'orange',
                    'answer': 'purple',
                    'word-of-the-day': 'green'
                }
            });
        });
    </script>
</head>

<style type="text/css">
    .seperate {
        height: 20px;
    }
    body {
        padding: 50px;
        font-family: Helvetica;
    }
</style>

<body>
    <h2>Report Skill</h2>
    <div id="calendar_yearview_blocks_chart_1"></div>
    <div class="seperate"></div>
    <!-- <div id="calendar_yearview_blocks_chart_2"></div>
    <div class="seperate"></div> -->
<!--</body>
</html> -->

<style>
    /* h1 {
        text-align: center; 
        color: black;
        font: 50px sans-serif;
    } */
    .title {
        color: black;
        text-align: center; 
        font: 40px sans-serif;
      }
</style>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Dashboard - Dark Style</title>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link rel="stylesheet" href="/assets/css/style.css" />
  </head>
  <body>
    <br>
    <h1 class="title">Skill Report (2021-2022)</h1>
    <div id="wrapper">
      <div class="content-area">
        <div class="container-fluid">
          <div class="text-left mt-3 mb-3 d-fixed">
            <a
              href="../chatbot"
              class="btn btn-outline-warning mr-2"
            >
              <span class="btn-text">Reload</span>
            </a>
          </div>
          <div class="main">
            <!-- <div class="row sparkboxes mt-4">
              <div class="col-md-3">
                <div class="box box1">
                  <div class="details">
                    <h3>1213</h3>
                    <h4>CLICKS</h4>
                  </div>
                  <div id="spark1"></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box box2">
                  <div class="details">
                    <h3>422</h3>
                    <h4>VIEWS</h4>
                  </div>
                  <div id="spark2"></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box box3">
                  <div class="details">
                    <h3>311</h3>
                    <h4>LEADS</h4>
                  </div>
                  <div id="spark3"></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box box4">
                  <div class="details">
                    <h3>22</h3>
                    <h4>SALES</h4>
                  </div>
                  <div id="spark4"></div>
                </div>
              </div>
            </div> -->
            <div class="row mt-4">
              <div class="col-md-5">
                <div class="box shadow mt-4">
                  <div id="radialBarBottom"></div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="box shadow mt-4">
                  <div id="line-adwords" class=""></div>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-5">
                <div class="box shadow mt-4">
                  <div id="barchart"></div>
                </div>
              </div>
              <div class="col-md-7">
                <div class="box shadow mt-4">
                  <div id="areachart"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="/assets/js/scripts.js"></script>
  </body>
</html>
