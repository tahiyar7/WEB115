$(document).ready(function() {
    var numberOfTasks = 0;
  
    $("#add").on("click", addItem);
    $("#tasklist").on("click", ".d", deleteItem);
    $("#donelist").on("click", ".d", deleteItem);
    $("#clearAll").on("click", clearAll);
    $("#tasklist").on("click", ".checkbox", checkItem);
    $("#tasklist").sortable();
    $("#donelist").sortable();
  
    $(document).keypress(function(e) {
      if (e.which == 13) {
        addItem();
      }
    });
  
    function addItem() {
      var randomColor = 0;
      var text = $("#task").val();
      if (text === "") {
        alert("You cannot add an empty task");
      } else if (text === "snake") {
        window.location.href = "snake.html";
      } else {
        var textNoSpace = Math.random()
          .toString(36)
          .substring(7);
        numberOfTasks = numberOfTasks + 1;
  
        //To change the text which tells how many tasks are left
  
        tasksLeft();
  
        //This has to do with the item being added on
  
        $("#tasklist").append(
          '<li><div class="listItem"><p><input type ="checkbox" id="' +
            textNoSpace +
            'check" class = "checkbox" /> <label for="' +
            textNoSpace +
            'check"></label>' +
            text +
            '<button class="d md-button" id="' +
            textNoSpace +
            '">Delete</button></div></li>'
        );
  
        do {
          var randomColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        } while (randomColor < 100000);
  
        $("#" + textNoSpace).css("background-color", randomColor);
        $("#task").val("");
      }
    }
  
    function tasksLeft() {
      document.title = "To-Do (" + numberOfTasks + ")";
  
      if (numberOfTasks > 1) {
        $("#tasksleft").show();
        document.getElementById("tasksleft").innerHTML =
          "You have " + numberOfTasks + " tasks to complete.";
      } else if (numberOfTasks > 0 && numberOfTasks < 2) {
        $("#tasksleft").show();
        document.getElementById("tasksleft").innerHTML =
          "You have " + numberOfTasks + " task to complete.";
      } else {
        document.getElementById("tasksleft").innerHTML =
          "You have no tasks left!";
      }
    }
  
    function deleteItem() {
      $(this)
        .parent()
        .fadeOut(700);
      if (
        $(this)
          .parent()
          .hasClass("complete")
      ) {
      } else {
        numberOfTasks = numberOfTasks - 1;
      }
      tasksLeft();
    }
  
    function clearAll() {
      $(".complete")
        .parent()
        .fadeOut(700);
      tasksLeft();
    }
  
    function checkItem() {
      $(this)
        .parent()
        .addClass("complete");
      numberOfTasks = numberOfTasks - 1;
      tasksLeft();
      $("#donelist").append($(this).parent());
    }
  });
  
  
  var nav__label = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var text = "";
  var i;
  
  for (i = 0; i < nav__label.length; i++) {
    text += nav__label[i];
  }
  //For MONDAY
  var d = new Date();
  document.getElementById("current-date").innerHTML = d.toDateString();

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('current-time').innerHTML =
      h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  }  

  $(document).ready(function(e) {
    $('#add-todo').button({
      icons: {
        primary: "ui-icon-circle-plus"
      }
    }).click(function() {
      $('#new-todo').dialog('open');
    }); // end click .delay(5000).fadeout
    $('#new-todo').dialog({
      modal: true,
      autoOpen: false,
      close: function() {
        $('#new-todo input').val('');
      },
      buttons: {
        "Add": function() {
          var taskName = $('#task').val();
          var dueDate = $('#due-date').val();
          var time = $('#time').val();
          var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
          var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
          var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
          var endLi = '</li>';
          $('#todo-list').prepend(beginLi + taskLi + time, +endLi);
          $('#todo-list').hide().slideDown(250).find('li:first')
            .animate({
              'background-color': '#b3ffec',
            }, 250)
            .animate({
              'background-color': '#d9b3ff'
            }, 250).animate; // end animate
          $(this).dialog('close');
        },
        "Skip!": function() {
          $(this).dialog('close');
        }
      }
    });
    $('#todo-list').on('click', '.done', function(e) {
      var $taskItem = $(this).parent("li");
      // fade in/fadeout 
      var $copy = $taskItem.clone();
      $('#completed-list').prepend($copy);
      $copy.hide().slideDown();
      $taskItem.remove();
      $(".done").append("<div id='doneDialog'><br>Have a wonderful day!</div>");
    }); // end on
    $('#todo-list, #completed-list').on('click', '.delete', function(e) {
      $(this).parent("li").effect('puff', function() {
        $(this).remove();
      }); // end slideup
    }); // end on
    $('#todo-list').sortable();
  }); // end ready


  //For Tuesday
  var d = new Date();
            document.getElementById("current-date1").innerHTML = d.toDateString();

            function startTimeOne() {
              var today = new Date();
              var h = today.getHours();
              var m = today.getMinutes();
              var s = today.getSeconds();
              m = checkTime(m);
              s = checkTime(s);
              document.getElementById('current-time1').innerHTML =
                h + ":" + m + ":" + s;
              var t = setTimeout(startTimeOne, 500);
            }

            function checkTime(i) {
              if (i < 10) {
                i = "0" + i
              };
              return i;
            }

            

            var Nav = (function() {
                var
                  nav = $('.nav'),
                  burger = $('.burger'),
                  page = $('.page'),
                  section = $('.section'),
                  link = nav.find('.nav__link'),
                  navH = nav.innerHeight(),
                  isOpen = true,
                  hasT = false;
                var toggleNav = function() {
                  nav.toggleClass('nav--active');
                  burger.toggleClass('burger--close');
                  shiftPage();
                };
                var shiftPage = function() {
                  if (!isOpen) {
                    page.css({
                      'transform': 'translateY(' + navH + 'px)',
                      '-webkit-transform': 'translateY(' + navH + 'px)'
                    });
                    isOpen = true;
                  } else {
                    page.css({
                      'transform': 'none',
                      '-webkit-transform': 'none'
                    });
                    isOpen = false;
                  }
                };
                var switchPage = function(e) {
                  var self = $(this);
                  var i = self.parents('.nav__item').index();
                  var s = section.eq(i);
                  var a = $('section.section--active');
                  var t = $(e.target);
                  if (!hasT) {
                    if (i == a.index()) {
                      return false;
                    }
                    a
                      .addClass('section--hidden')
                      .removeClass('section--active');
                    s.addClass('section--active');
                    hasT = true;
                    a.on('transitionend webkitTransitionend', function() {
                      $(this).removeClass('section--hidden');
                      hasT = false;
                      a.off('transitionend webkitTransitionend');
                    });
                  }
                  return false;
                };
                var keyNav = function(e) {
                  var a = $('section.section--active');
                  var aNext = a.next();
                  var aPrev = a.prev();
                  var i = a.index();
                  if (!hasT) {
                    if (e.keyCode === 37) {
                      if (aPrev.length === 0) {
                        aPrev = section.last();
                      }
                      hasT = true;
                      aPrev.addClass('section--active');
                      a
                        .addClass('section--hidden')
                        .removeClass('section--active');
                      a.on('transitionend webkitTransitionend', function() {
                        a.removeClass('section--hidden');
                        hasT = false;
                        a.off('transitionend webkitTransitionend');
                      });
                    } else if (e.keyCode === 39) {
                      if (aNext.length === 0) {
                        aNext = section.eq(0)
                      }
                      aNext.addClass('section--active');
                      a
                        .addClass('section--hidden')
                        .removeClass('section--active');
                      hasT = true;
                      aNext.on('transitionend webkitTransitionend', function() {
                        a.removeClass('section--hidden');
                        hasT = false;
                        aNext.off('transitionend webkitTransitionend');
                      });
                    } else {
                      return
                    }
                  }
                };
                var bindActions = function() {
                  burger.on('click', toggleNav);
                  link.on('click', switchPage);
                  $(document).on('ready', function() {
                    page.css({
                      'transform': 'translateY(' + navH + 'px)',
                      '-webkit-transform': 'translateY(' + navH + 'px)'
                    });
                  });
                  $('body').on('keydown', keyNav);
                };
                var init = function() {
                  bindActions();
                };
                return {
                  init: init
                };
              }());
              Nav.init();

//For Tuesday
$(document).ready(function(e) {
    $('#add-todo1').button({
      icons: {
        primary: "ui-icon-circle-plus"
      }
    }).click(function() {
      $('#new-todo1').dialog('open');
    }); // end click .delay(5000).fadeout
    $('#new-todo1').dialog({
      modal: true,
      autoOpen: false,
      close: function() {
        $('#new-todo1 input').val('');
      },
      buttons: {
        "Add": function() {
          var taskName = $('#task1').val();
          var dueDate = $('#due-date1').val();
          var time = $('#time1').val();
          var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
          var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
          var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
          var endLi = '</li>';
          $('#todo-list1').prepend(beginLi + taskLi + time, +endLi);
          $('#todo-list1').hide().slideDown(250).find('li:first')
            .animate({
              'background-color': '#b3ffec',
            }, 250)
            .animate({
              'background-color': '#ffd480'
            }, 250).animate; // end animate
          $(this).dialog('close');
        },
        "Skip!": function() {
          $(this).dialog('close');
        }
      }
    });
    $('#todo-list1').on('click', '.done', function(e) {
      var $taskItem = $(this).parent("li");
      // fade in/fadeout 
      var $copy = $taskItem.clone();
      $('#completed-list1').prepend($copy);
      $copy.hide().slideDown();
      $taskItem.remove();
      $(".done").append("<div id='doneDialog1'><br>Thanks!</div>");
    }); // end on
    $('#todo-list1, #completed-list1').on('click', '.delete', function(e) {
      $(this).parent("li").effect('puff', function() {
        $(this).remove();
      }); // end slideup
    }); // end on
    $('#todo-list1').sortable();
  }); // end ready

  //For Wednesday
  var d = new Date();
  document.getElementById("current-date2").innerHTML = d.toDateString();

  function startTimeTwo() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('current-time2').innerHTML =
      h + ":" + m + ":" + s;
    var t = setTimeout(startTimeTwo, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  }

  $(document).ready(function(e) {
    $('#add-todo2').button({
      icons: {
        primary: "ui-icon-circle-plus"
      }
    }).click(function() {
      $('#new-todo2').dialog('open');
    }); 
    $('#new-todo2').dialog({
      modal: true,
      autoOpen: false,
      close: function() {
        $('#new-todo2 input').val('');
      },
      buttons: {
        "Add": function() {
          var taskName = $('#task2').val();
          var dueDate = $('#due-date2').val();
          var time = $('#time2').val();
          var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
          var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
          var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
          var endLi = '</li>';
          $('#todo-list2').prepend(beginLi + taskLi + time, +endLi);
          $('#todo-list2').hide().slideDown(250).find('li:first')
            .animate({
              'background-color': '#b3ffec',
            }, 250)
            .animate({
              'background-color': '#b3c6ff'
            }, 250).animate; // end animate
          $(this).dialog('close');
        },
        "Skip!": function() {
          $(this).dialog('close');
        }
      }
    });
    $('#todo-list2').on('click', '.done', function(e) {
      var $taskItem = $(this).parent("li");
      // fade in/fadeout 
      var $copy = $taskItem.clone();
      $('#completed-list2').prepend($copy);
      $copy.hide().slideDown();
      $taskItem.remove();
      $(".done").append("<div id='doneDialog2'><br>&nbsp; Great!<br>Thanks!</div>");
    }); 
    $('#todo-list2, #completed-list2').on('click', '.delete', function(e) {
      $(this).parent("li").effect('puff', function() {
        $(this).remove();
      }); 
    }); 
    $('#todo-list2').sortable();
  }); 

//For Thursday
var d = new Date();
          document.getElementById("current-date3").innerHTML = d.toDateString();

          function startTimeThree() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('current-time3').innerHTML =
              h + ":" + m + ":" + s;
            var t = setTimeout(startTimeThree, 500);
          }

          function checkTime(i) {
            if (i < 10) {
              i = "0" + i
            };
            return i;
          }



          $(document).ready(function(e) {
            $('#add-todo3').button({
              icons: {
                primary: "ui-icon-circle-plus"
              }
            }).click(function() {
              $('#new-todo3').dialog('open');
            }); // end click .delay(5000).fadeout
            $('#new-todo3').dialog({
              modal: true,
              autoOpen: false,
              close: function() {
                $('#new-todo3 input').val('');
              },
              buttons: {
                "Add": function() {
                  var taskName = $('#task3').val();
                  var dueDate = $('#due-date3').val();
                  var time = $('#time3').val();
                  var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
                  var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
                  var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
                  var endLi = '</li>';
                  $('#todo-list3').prepend(beginLi + taskLi + time, +endLi);
                  $('#todo-list3').hide().slideDown(250).find('li:first')
                    .animate({
                      'background-color': '#b3ffec',
                    }, 250)
                    .animate({
                      'background-color': '#ff99c2'
                    }, 250).animate; // end animate
                  $(this).dialog('close');
                },
                "Skip!": function() {
                  $(this).dialog('close');
                }
              }
            });
            $('#todo-list3').on('click', '.done', function(e) {
              var $taskItem = $(this).parent("li");
              // fade in/fadeout 
              var $copy = $taskItem.clone();
              $('#completed-list3').prepend($copy);
              $copy.hide().slideDown();
              $taskItem.remove();
              $(".done").append("<div id='doneDialog3'><br>Great work!</div>");
            }); // end on
            $('#todo-list3, #completed-list3').on('click', '.delete', function(e) {
              $(this).parent("li").effect('puff', function() {
                $(this).remove();
              }); // end slideup
            }); // end on
            $('#todo-list3').sortable();
          }); 

//Friday
        var d = new Date();
          document.getElementById("current-date4").innerHTML = d.toDateString();

          function startTimeFour() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('current-time4').innerHTML =
              h + ":" + m + ":" + s;
            var t = setTimeout(startTimeFour, 500);
          }

          function checkTime(i) {
            if (i < 10) {
              i = "0" + i
            };
            return i;
          }

          $(document).ready(function(e) {
            $('#add-todo4').button({
              icons: {
                primary: "ui-icon-circle-plus"
              }
            }).click(function() {
              $('#new-todo4').dialog('open');
            }); // end click .delay(5000).fadeout
            $('#new-todo4').dialog({
              modal: true,
              autoOpen: false,
              close: function() {
                $('#new-todo4 input').val('');
              },
              buttons: {
                "Add": function() {
                  var taskName = $('#task4').val();
                  var dueDate = $('#due-date4').val();
                  var time = $('#time4').val();
                  var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
                  var taskLi = '<span class="task" contenteditable> &nbsp;' + taskName + ' &nbsp; </span>';
                  var timeLi = '<span class="time" contenteditable>&nbsp;' + time + '&nbsp;</span>';
                  var endLi = '</li>';
                  $('#todo-list4').prepend(beginLi + taskLi + time, +endLi);
                  $('#todo-list4').hide().slideDown(250).find('li:first')
                    .animate({
                      'background-color': '#b3ffec',
                    }, 250)
                    .animate({
                      'background-color': '#bdc3c7'
                    }, 250).animate; // end animate
                  $(this).dialog('close');
                },
                "Skip!": function() {
                  $(this).dialog('close');
                }
              }
            });
            $('#todo-list4').on('click', '.done', function(e) {
              var $taskItem = $(this).parent("li");
              // fade in/fadeout 
              var $copy = $taskItem.clone();
              $('#completed-list4').prepend($copy);
              $copy.hide().slideDown();
              $taskItem.remove();
              $(".done").append("<div id='doneDialog4'><br>Thanks!</div>");
            }); // end on
            $('#todo-list4, #completed-list4').on('click', '.delete', function(e) {
              $(this).parent("li").effect('puff', function() {
                $(this).remove();
              }); // end slideup
            }); // end on
            $('#todo-list4').sortable();
          }); // end ready


//Saturday
$(document).ready(function(e) {
    $('#add-todo5').button({
      icons: {
        primary: "ui-icon-circle-plus"
      }
    }).click(function() {
      $('#new-todo5').dialog('open');
    }); 
    $('#new-todo5').dialog({
      modal: true,
      autoOpen: false,
      close: function() {
        $('#new-todo5 input').val('');
      },
      buttons: {
        "Add": function() {
          var taskName = $('#task5').val();
          var dueDate = $('#due-date5').val();
          var time = $('#time5').val();
          var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
          var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
          var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
          var endLi = '</li>';
          $('#todo-list5').prepend(beginLi + taskLi + time, +endLi);
          $('#todo-list5').hide().slideDown(250).find('li:first')
            .animate({
              'background-color': '#b3ffec',
            }, 250)
            .animate({
              'background-color': '#ffa280'
            }, 250).animate; // end animate
          $(this).dialog('close');
        },
        "Skip!": function() {
          $(this).dialog('close');
        }
      }
    });
    $('#todo-list5').on('click', '.done', function(e) {
      var $taskItem = $(this).parent("li");
      
      var $copy = $taskItem.clone();
      $('#completed-list5').prepend($copy);
      $copy.hide().slideDown();
      $taskItem.remove();
      $(".done").append("<div id='doneDialog5'><br>Thanks!</div>");
    }); 
    $('#todo-list5, #completed-list5').on('click', '.delete', function(e) {
      $(this).parent("li").effect('puff', function() {
        $(this).remove();
      }); 
    }); 
    $('#todo-list5').sortable();
  }); 

  //Sunday
  var d = new Date();
  document.getElementById("current-date6").innerHTML = d.toDateString();

  function startTimeSix() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('current-time6').innerHTML =
      h + ":" + m + ":" + s;
    var t = setTimeout(startTimeSix, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    };
    return i;
  }

  $(document).ready(function(e) {
    $('#add-todo6').button({
      icons: {
        primary: "ui-icon-circle-plus"
      }
    }).click(function() {
      $('#new-todo6').dialog('open');
    }); 
    $('#new-todo6').dialog({
      modal: true,
      autoOpen: false,
      close: function() {
        $('#new-todo6 input').val('');
      },
      buttons: {
        "Add": function() {
          var taskName = $('#task6').val();
          var dueDate = $('#due-date6').val();
          var time = $('#time6').val();
          var beginLi = '<li><span style="cursor:pointer" class="done"><i class="fa fa-check"> </i></span><span  style="cursor:pointer" class="delete"><i class="fa fa-times"> </i></span>';
          var taskLi = '<span class="task"> &nbsp;' + taskName + ' &nbsp; </span>';
          var timeLi = '<span class="time">&nbsp;' + time + '&nbsp;</span>';
          var endLi = '</li>';
          $('#todo-list6').prepend(beginLi + taskLi + time, +endLi);
          $('#todo-list6').hide().slideDown(250).find('li:first')
            .animate({
              'background-color': '#ff99c2',
            }, 250)
            .animate({
              'background-color': '#b3ffec'
            }, 250).animate; 
          $(this).dialog('close');
        },
        "Skip!": function() {
          $(this).dialog('close');
        }
      }
    });
    $('#todo-list6').on('click', '.done', function(e) {
      var $taskItem = $(this).parent("li");
      
      var $copy = $taskItem.clone();
      $('#completed-list6').prepend($copy);
      $copy.hide().slideDown();
      $taskItem.remove();
      $(".done").append("<div id='doneDialog6'><br>Thanks!</div>");
    }); 
    $('#todo-list6, #completed-list6').on('click', '.delete', function(e) {
      $(this).parent("li").effect('puff', function() {
        $(this).remove();
      }); 
    }); 
    $('#todo-list6').sortable();
  }); 