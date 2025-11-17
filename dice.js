$(document).ready(function () {
  const positions = {
    1: [[50, 50]],
    2: [[25, 25], [75, 75]],
    3: [[25, 25], [50, 50], [75, 75]],
    4: [[25, 25], [25, 75], [75, 25], [75, 75]],
    5: [[25, 25], [25, 75], [75, 25], [75, 75], [50, 50]],
    6: [[25, 25], [25, 75], [75, 25], [75, 75], [25, 50], [75, 50]]
  };

  function renderDots($die, value) {
    $die.find('.dot').remove();
    const pos = positions[value] || positions[6];
    pos.forEach(([top, left]) => {
      const $dot = $('<div class="dot"></div>');
      $dot.css({ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -50%)' });
      $die.append($dot);
    });
    $die.attr('data-value', value).attr('aria-label', 'dice showing ' + value);
  }

  // Initialize dice (render 6 for each existing die)
  if ($('#dice-board .die').length === 0) {
    // If dice aren't present yet, create 5 dice (matches yatzy)
    for (let i = 0; i < 5; i++) {
      $('#dice-board').append(`<div class="die" data-index="${i}" data-value="6" aria-live="polite" aria-label="dice showing six"></div>`);
    }
  }
  $('#dice-board .die').each(function () { renderDots($(this), 6); });

  // click to toggle keep
  $('#dice-board').on('click', '.die', function () {
    $(this).toggleClass('kept');
  });

  // Roll button handler (uses #roll-btn in your page)
  $('#roll-btn').on('click', function () {
    const $btn = $(this);
    $btn.prop('disabled', true);
    $('#message').text('Rolling...');
    const $toRoll = $('.die').not('.kept');
    $toRoll.addClass('rolling');

    // prepare random results for non-kept dice
    const results = [];
    $toRoll.each(() => results.push(Math.floor(Math.random() * 6) + 1));

    // Wait for animation to complete, then update dots
    setTimeout(() => {
      $toRoll.each(function (i) {
        const $d = $(this);
        const val = results[i] || 6;
        renderDots($d, val);
      });
      $toRoll.removeClass('rolling');
      $('#message').text('Roll complete.');
      $btn.prop('disabled', false);
    }, 700);
  });
});