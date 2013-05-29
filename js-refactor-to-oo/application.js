$(document).ready(function() {
  function Die(num_sides) {
    this.sides = num_sides;
    this.value = 0;
    
    this.roll = function() {
      this.value = Math.floor((Math.random()*6)+1);
      this.div.html(this.value);
    };
    this.render = function() {
      return '<div class="die">' + this.value + '</div>';
    };
    this.div = $(this.render());
    $('.dice').append(this.div);
  }

  function Init() {
    dice = [];
    $('#roller button.add').on('click', function() {      
      var d = new Die(6);
      dice.push(d);
    });

    $('#roller button.roll').on('click', function() {  
      for (var i=0; i < dice.length; i++) {
        dice[i].roll();
      }
    });
  }
  Init();
});

