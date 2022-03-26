---
# layout: page
# title: Report of use
permalink: /calendar/
---

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
                data: getRandomData(10, 40, ["banana", "apple", "orange", "pear"]),
                start_monday: true,
                always_show_tooltip: true,
                month_names: ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sept', 'okt', 'nov', 'dec'],
                day_names: ['ma', 'wo', 'vr', 'zo'],
                colors: {
                    'default': '#eeeeee', // Default color
                    'apple': 'green',
                    'banana': 'yellow',
                    'orange': 'orange',
                    'pear': 'lightgreen'
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
    <h2>Calendar Yearview with Blocks</h2>
    <div id="calendar_yearview_blocks_chart_1"></div>
    <div class="seperate"></div>
    <div id="calendar_yearview_blocks_chart_2"></div>
    <div class="seperate"></div>
</body>
</html>