define([], function(){
  'use strict';

  var report = (function(){
    var init = function(){

      console.log('load module: report');

      // var ctx = document.getElementById("Chart__LessonProgress--Require");
      // var Chart__CourseProgress = new Chart(ctx, {
      //   type: 'doughnut',
      //   data: {
      //     labels: ["Đã hoàn thành", "Chưa hoàn thành", "Chưa được mở"], 
      //     datasets: [{
      //       data: [10, 35, 55],
      //       backgroundColor: [
      //           'rgba(255, 99, 132, 0.2)',
      //           'rgba(54, 162, 235, 0.2)',
      //           'rgba(255, 206, 86, 0.2)',
      //           'rgba(75, 192, 192, 0.2)',
      //           'rgba(153, 102, 255, 0.2)',
      //           'rgba(255, 159, 64, 0.2)'
      //       ],
      //       borderColor: [
      //           'rgba(255, 99, 132, 1)',
      //           'rgba(54, 162, 235, 1)',
      //           'rgba(255, 206, 86, 1)',
      //           'rgba(75, 192, 192, 1)',
      //           'rgba(153, 102, 255, 1)',
      //           'rgba(255, 159, 64, 1)'
      //       ],
      //       borderWidth: 3
      //     }],
          
      //   },
      //   options: {
      //     layout: {
      //       padding: {
      //         left: 16,
      //         right: 16,
      //         top: 16,
      //         bottom: 16
      //       }
      //     },
      //     legend: {
      //       display: false,
      //     },
      //     title: {
      //       display: true,
      //       position: 'bottom',
      //       fontSize: '18',
      //       fontFamily: "'Open Sans', san-serif",
      //       fontColor: '#424242',
      //       fontStyle: '600',
      //       padding: 24,
      //       lineHeight: '1.25',
      //       text: 'Bắt buộc'
      //     }

      //   // responsive: false,

      //   }
      // });

      // var ctx2 = document.getElementById("Chart__LessonProgress--NotRequire");
      // var Chart__CourseProgress2 = new Chart(ctx2, {
      //   type: 'doughnut',
      //   data: {
      //     labels: ["Đã hoàn thành", "Chưa hoàn thành", "Chưa được mở"], 
      //     datasets: [{
      //       data: [20, 15, 15],
      //       backgroundColor: [
      //           'rgba(255, 99, 132, 0.2)',
      //           'rgba(54, 162, 235, 0.2)',
      //           'rgba(255, 206, 86, 0.2)',
      //           'rgba(75, 192, 192, 0.2)',
      //           'rgba(153, 102, 255, 0.2)',
      //           'rgba(255, 159, 64, 0.2)'
      //       ],
      //       borderColor: [
      //           'rgba(255, 99, 132, 1)',
      //           'rgba(54, 162, 235, 1)',
      //           'rgba(255, 206, 86, 1)',
      //           'rgba(75, 192, 192, 1)',
      //           'rgba(153, 102, 255, 1)',
      //           'rgba(255, 159, 64, 1)'
      //       ],
      //       borderWidth: 3
      //     }],
          
      //   },
      //   options: {
      //     layout: {
      //       padding: {
      //         left: 16,
      //         right: 16,
      //         top: 16,
      //         bottom: 16
      //       }
      //     },
      //     legend: {
      //       display: false,
      //     },
      //     title: {
      //       display: true,
      //       position: 'bottom',
      //       fontSize: '18',
      //       fontFamily: "'Open Sans', san-serif",
      //       fontColor: '#424242',
      //       fontStyle: '600',
      //       padding: 24,
      //       lineHeight: '1.25',
      //       text: 'Không bắt buộc'
      //     }
      //   }
      // });

      // var ctx3 = document.getElementById("Chart__LessonScore--EachLesson");
      // var Chart__CourseProgress3 = new Chart(ctx3, {
      //   type: 'horizontalBar',
      //   data: {
      //     labels: ["Toán học", "Tiếng Việt", "Lịch sử", "Địa lý", "Mỹ thuật", "Âm nhạc"], 
      //     datasets: [{
      //       data: [20, 15, 15, 80, 60, 100],
      //       backgroundColor: [
      //           'rgba(255, 99, 132, 0.2)',
      //           'rgba(54, 162, 235, 0.2)',
      //           'rgba(255, 206, 86, 0.2)',
      //           'rgba(75, 192, 192, 0.2)',
      //           'rgba(153, 102, 255, 0.2)',
      //           'rgba(255, 159, 64, 0.2)'
      //       ],
      //       borderColor: [
      //           'rgba(255, 99, 132, 1)',
      //           'rgba(54, 162, 235, 1)',
      //           'rgba(255, 206, 86, 1)',
      //           'rgba(75, 192, 192, 1)',
      //           'rgba(153, 102, 255, 1)',
      //           'rgba(255, 159, 64, 1)'
      //       ],
      //       borderWidth: 0
      //     }],
      //   },
      //   options: {
      //     layout: {
      //       padding: {
      //         left: 16,
      //         right: 16,
      //         top: 16,
      //         bottom: 16
      //       }
      //     },
      //     legend: {
      //       display: false,
      //     },
      //     title: {
      //       display: true,
      //       position: 'bottom',
      //       fontSize: '18',
      //       fontFamily: "'Open Sans', san-serif",
      //       fontColor: '#424242',
      //       fontStyle: '600',
      //       padding: 24,
      //       lineHeight: '1.25',
      //       text: 'Tỷ số điểm từng tiết học (*)'
      //     },
      //     scales: {
      //       xAxes: [{
      //         barPercentage: 1,
      //         categoryPercentage: 1,
      //         scaleLabel: {
      //           display: true,
      //           labelString: 'Tỷ số điểm',
      //           barPercentage: 1,
      //           categoryPercentage: 1
      //         },
      //         ticks: {
      //           beginAtZero: true,
      //           fixedStepSize: 10,
      //           max: 100,
      //           min: 0
      //         }
      //       }],
      //       yAxes: [{
      //         barPercentage: 1,
      //         categoryPercentage: 1,
      //         scaleLabel: {
      //           display: true,
      //           labelString: 'Tiết học',
      //         }
      //       }]
      //     },

      //   }
      // });




    };

    return{
      init: init
    };
  })();

  return report;
});

	
	