import React from 'react';
import jQuery from 'jquery';
import $ from 'jquery'; 

var header = $('.stats__header');
var bar  = $('.stats__item-bar');
var nums = $('.stats__item-num');
var overlay = $('.stats__overlay');
var back = $('.stats__overlay-back');
var isOpen = false;

var vYear = $('#year');
var vAvg = $('#avg');
var vGames = $('#games');
var vGoal = $('#goals');

jQuery(document).on('ready', function($){
    entrance();
  });  

bar.on('click', showOverlay);
back.on('click');

function entrance() {
  bar.addClass('active');
  header.addClass('active');
  header.on('transitionend webkitTransitionend', function() {
    nums.css('opacity', '1');
    bar.css('transition-delay', '0');
    header.off('transitionend webkitTransitionend');
  });
}

function showOverlay() {
  if (!isOpen) {
    overlay.addClass('active').removeAttr('style');
    bar.css('transition', 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)')
    .removeClass('active');
    header.removeClass('active');
    nums.css('opacity', '0');
    isOpen = true;
    
   updateInfo($(this).parent().index());
  } else {
    overlay.css('transition', 'all 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06)').removeClass('active');
    bar.addClass('active').removeAttr('style');
    header.addClass('active');
    nums.css('opacity', '1');
    isOpen = false;
  }
}

var data = [
  {
    year: '2007-2008',
    goals: '65',
    games: '82',
    avg: '0.79'
    
  },
  {
    year: '2008-2009',
    goals: '56',
    games: '79',
    avg: '0.7'
    
  },
  {
    year: '2009-2010',
    goals: '50',
    games: '72',
    avg: '0.69'
    
  },
  {
    year: '2010-2011',
    goals: '32',
    games: '79',
    avg: '0.40'
    
  },
  {
    year: '2011-2012',
    goals: '38',
    games: '78',
    avg: '0.48'
    
  },
  {
    year: '2012-2013',
    goals: '32',
    games: '48',
    avg: '0.66'
    
  },
  {
    year: '2013-2014',
    goals: '51',
    games: '78',
    avg: '0.65'
    
  },
  {
    year: '2014-2015',
    goals: '50',
    games: '76',
    avg: '0.66'
    
  }
];

function updateInfo(index) {
  vYear.text(data[index].year);
  vAvg.text(data[index].avg);
  vGoal.text(data[index].goals);
  vGames.text(data[index].games);
}

class Tracker extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";

  }
    render() {
        return (

          <main class="stats">
  <header class="stats__header">
    <div class="stats__header-num">
      <p>8</p>
    </div>
    <div class="stats__header-name">
      <p>Alex<span>Ovechkin</span></p>
    </div>
  </header>
  <ul class="stats__list">
    <li class="stats__item">
      <p class="stats__item-num">65</p>
      <div class="stats__item-bar"></div>
    </li>
    <li class="stats__item">
      <p class="stats__item-num">56</p>
      <div class="stats__item-bar"></div>
    </li>
    <li class="stats__item">
      <p class="stats__item-num">50</p>
      <div class="stats__item-bar"></div>
    </li>
    <li class="stats__item">
      <p class="stats__item-num">32</p>
      <div class="stats__item-bar"></div>
    </li>
    <li class="stats__item">
      <p class="stats__item-num">38</p>
      <div class="stats__item-bar"></div>
    </li>
    <li class="stats__item">
      <p class="stats__item-num">32</p>
      <div class="stats__item-bar"></div>
    </li>
    <li class="stats__item">
      <p class="stats__item-num">51</p>
      <div class="stats__item-bar"></div>
    </li>
    <li class="stats__item">
      <p class="stats__item-num">50</p>
      <div class="stats__item-bar"></div>
    </li>
  </ul>
  <div class="stats__overlay">
    <div class="stats__overlay-back">
      <svg fill="white" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M30 16.5H11.74l8.38-8.38L18 6 6 18l12 12 2.12-2.12-8.38-8.38H30v-3z"></path></svg>
      <p id="year">2009-2010</p>
    </div>
    <div class="stats__overlay-avg">
      <p class="avg" id="avg">0.69</p>
      <p>Goals per game</p>
    </div>
    <div class="stats__overlay-info">
      <div class="stats__overlay-info-half">
        <p id="goals">50</p>
        <p>Goals</p>
      </div>
      <div class="stats__overlay-info-half">
        <p id="games">71</p>
        <p>Games</p>
      </div>
    </div>
  </div>
</main>
          );
    }
}

export default Tracker;
