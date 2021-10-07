let timeline = [];

var head1 = {
    type: 'html-button-response',
    stimulus: '<p class="english-word">List 1<br></p>',
    choices: ['Continue']
}

var head2 = {
    type: 'html-button-response',
    stimulus: '<p class="english-word">List 2<br></p>',
    choices: ['Continue']
}

var head3 = {
    type: 'html-button-response',
    stimulus: '<p class="english-word">List 3<br></p>',
    choices: ['Continue']
}

var head4 = {
    type: 'html-button-response',
    stimulus: '<p class="english-word">List 4<br></p>',
    choices: ['Continue']
}

var start = {
    type: 'html-keyboard-response',
    stimulus: 'Please say your name, then press the right arrow to advance through the list items.<br>Once you begin, you can also use the left arrow to return to a previous word if you feel you\'d like to repeat it.<br><br>',
    choices: ['rightarrow']
}

var end = {
    type: 'html-keyboard-response',
    stimulus: 'That\'s the end of the list! If you\'d like, this would be a perfect time to get up, stretch your legs, and drink some water.<br>When you\'re ready, you can press the right arrow key to continue.',
    choices: ['rightarrow']
}

var thanks = {
    type: 'html-keyboard-response',
    stimulus: 'Recording is now complete.<br>Thank you for your time!'
}

timeline.push(head1, start, list1, end);
timeline.push(head2, start, list2, end);
timeline.push(head3, start, list3, end);
timeline.push(head4, start, list4, thanks);

timeline.push(thanks)

jsPsych.init({
    timeline: timeline,
    // show_progress_bar: true,
    // auto_update_progress_bar: true,
    // on_finish: function () {
    //     jsPsych.data.displayData('csv');
    // }
});