/*********************************************************************
 *
 * 
 * This program is a quiz that evaluates
 * Whether  user selected anwers to the quiz 
 * question have been answered correctly,
 * counts the score and gives extra information
 * if the user has answered incorrect to an option
 *
 *     https://github.com/Stefany93/js-quiz
 *
 * Copyright 2013 Stefany Dimitrova Dyulgerova
 * stefany.dyulgerova@gmail.com
 * www.dyulgerova.info
 *
 * This program is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see http://www.gnu.org/licenses/.
 *
 ********************************************************************/
// Execute the program after the page loads.
window.onload = function(){
// Getting the submit button into a variable
	var submit_button = document.getElementById('submit');
// When the submit button is clicked, execute the function.
	submit_button.onclick = function(){
// We create an empty array that will later store
// the answers from our quiz.
	var answers = new Array();
// The parent element of the radio button 
// that has been checked will be stored in this array.
	var elements = new Array();
// An array that holds the values of the radio buttons
// that are correct answers.
	var correct_answers = new Array('a', 'e', 'j', 'p', 'q', 'v', 'y', '5', '7');
// When the user selects the wrong answer
// we shall explain to them why their
// answer was wrong and give addional historial info.
	var correct_explanation  = new Array(
								'The war erupted in 1861 after the Confederate general P.G.T. Beauregard fired on the Union fort in Southern territory, ft. Sumter.',
								'The Federal army wore blue uniforms, while the Confederates were grey.',
								'North Carolina was the most un-interested state to secede.',
								'South Carolina seceded on the 20th of December 1860, giving the courage of other Southern states to declare their independance.',
								'The main army of the Union in the Eastern Front of the war was the Army of the Potomac created by George McClellan when he took command of the previously named Army of Virginia.',
								'John Pope was called from the Western Front to lead the old Army of Virginia when McClellan lost the Penninsula campaign. Second Manassas ended with disaster for the Union.',
								'Lee was a native Virginian and when the Confederacy was formed, he said he would fight for the side Virginia choose. Virginia chose to secede because she did not want to fight her sister gulf states and so Lee resigned his commission as a colonel in the United States Army and joined the Confederacy where he was made general.',
								'James Longstreet was Lee\'s second-in-command and most trusted commander. Lee called him "hist old war horse", even tho Lee was 14 years older than Longstreet.',
								'Jeb Stuart, the best cavalry commander in Lee\'s Army of Northern Virginia was mortally wounded during the battle of Yellow Tavern in 1864 against the newly arrived from the West Union cavalry commander, his parents Irish, Philip Sheridan.'
								);
// Number of correct answers will be stored here.
	var correct_answers_chosen = 0;
// Get the length of all elements with the element name of 'input'
// and loop through them. 
		for(var x = 0; x < document.getElementsByTagName('input').length; x++){
// If one of our radio buttons has been checked,
// put their value in the answers array we declared earlier.
			if(document.getElementsByTagName('input')[x].checked){
				answers.push(document.getElementsByTagName('input')[x].value);
// The the name of the parent element that holds the radio button.
				elements.push(document.getElementsByTagName('input')[x].parentNode);
			}
			}
// All answers are stored in the answers array. Loop through them
// and in each iteration, check whether they match the correct_answers array.
// If it does, increment the correct_answers_chose variable plus one.
// That means the option the user has chosen is the correct one. 
// Also, add the parent element the class name of "correct_answer"
// that will color it gree and it will add the 'Correct' word next to it.
			for(var i = 0; i < answers.length; i++){
				if(answers[i] == correct_answers[i]){
					correct_answers_chosen++;
					elements[i].innerHTML += ' Correct!';  
					elements[i].className = 'correct_answer';
				}else{
// If the answer given is wrong, do not increment the correct_answers_chose 
// variable and give the parent element of that particular radio button 
// the class name of "wrong_answer" that will color it red and it will
// give addional infor with the innerHTML property that is stored in the
// correct_explanation array.
					elements[i].innerHTML += '<br /> ' + correct_explanation[i]; 
					elements[i].className = 'wrong_answer';
				}
			}
// Display the number of correct answers in the above H2 header
// out of all questions.
			quiz_results.innerHTML = 'You answered correcty to ' + correct_answers_chosen + ' questions out of ' + correct_answers.length;
// We set the correct_answers_chosen variable equal to 0 and we disable the submit button
// since we do not
// want the variable to keep incrementing if the user clicks the submit button
// like a crazy duck.
			correct_answers_chosen = 0;
			submit_button.disabled = true;
// We also make the "Take this quiz again" button on the 
// right of the screen visible as well
// so that the user won't wonder where the hell to click
// if he/she wants to take the quiz again because it is awesome.
		reload_quiz.style.display = 'inline';
	}
// We make it so that when the user clicks the "Take this quiz again"
// the page reloads.
		reload_quiz.onclick = function(){
			location.reload();
		}
	}
// __END__