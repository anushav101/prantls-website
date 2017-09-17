      $(function () {

        $("#container-graph").highcharts({

        title: {
        text: 'Popular Times for Shadyside'
        },

    

    xAxis: {
        title: {
            text: 'Times'
        },
        categories: ['7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm' ]
    },

    yAxis: {
        title: {
            text: 'Average people entering'
        }
    },

    //tooltip: {
    //  valueSuffix: 'hours per week (on average)'
    //},

    //legend: {
     //   layout: 'vertical',
      //  align: 'right',
       // verticalAlign: 'middle'
    //},

    //plotOptions: {
      //  series: {
        //    pointStart: 2010
        //}
    //},

    series: [{
        name: "(avg per day)",
        data: [10,8,24,5,7,32,16,18,27,39,32]
        }]

        });

      });



      $(function () {

        $("#container-graph2").highcharts({

        title: {
        text: 'Popular Times for Downtown'
        },

    

    xAxis: {
        title: {
            text: 'Times'
        },
        categories: ['7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm' ]
    },

    yAxis: {
        title: {
            text: 'Average people entering'
        }
    },

    //tooltip: {
    //  valueSuffix: 'hours per week (on average)'
    //},

    //legend: {
     //   layout: 'vertical',
      //  align: 'right',
       // verticalAlign: 'middle'
    //},

    //plotOptions: {
      //  series: {
        //    pointStart: 2010
        //}
    //},

    series: [{
        name: "(avg per day)",
        data: [24,12,16,8,11,19,15,18,13,21,35]
        }]

        });

      });





