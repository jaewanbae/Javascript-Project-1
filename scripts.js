const app = {};

//create a prompt that asks for username

//make next button hide the current scenario and show the next scenario with toggleClass

//when user inputs the wrong choice, create an alert telling them they've failed

//create a if/else statement for the number game. Try and create it so if they have 1 number right, they get an alert that their 1 number is correct.

//create an alert when the end button is pressed and return the site to the beginning with the introduction.

app.getName = () => {
    let playerName = prompt('Please enter your name');
    if(playerName !== null && playerName.trim()) {
        $('span.playerName').html(playerName);
        }else {
            alert('you forgot to enter your name')
            app.getName();
        }
        app.intro();
};

app.intro = () => {
    $('.introButton').on('click', (e) => {
        e.preventDefault();
        $('section.intro').toggleClass('show hide');
        $('section.scenarioOne').toggleClass('hide show');    
    });
    app.sceneOne();
}

app.sceneOne = () => {
    $('form.sceneOneForm').on('submit', (e) => {
        e.preventDefault();
        if($('input[name="destination"]:checked').attr('id') === 'correct'){
            alert('On your way to the hut, you find some berries to eat');
            $('section.scenarioOne').toggleClass('show hide');
            $('section.scenarioTwo').toggleClass('hide show');   
        }else if ($('input[name="destination"]:checked').attr('id') === 'wrong'){
            alert('As you climb the cliff, it starts to rain. You lose your grip and fall to your death');
        }else {
            alert('You must make a choice');
        }; 
    });
    app.sceneTwo();
};

app.sceneTwo = () => {
    const answerNumOne = 5;
    const answerNumTwo = 2;
    $('form.sceneTwoForm').on('submit', (e) => {
        e.preventDefault();
        const userInputOne = $('.textOne').val();
        const userInputTwo = $('.textTwo').val();
        if(userInputOne == answerNumOne && userInputTwo == answerNumTwo) {
            alert('After some vigorous shakes, the lock clicks open');
            $('section.scenarioTwo').toggleClass('show hide');
            $('section.scenarioThree').toggleClass('hide show');
        } else if(userInputOne == answerNumOne && userInputTwo !== answerNumTwo) {
            alert('The first lock opens.. but the second one remains locked');
        } else if (userInputOne !== answerNumTwo && userInputTwo == answerNumTwo) {
            alert (`First lock doesn't budge at all... however the second lock opens`);
        } else {
            alert(`Numbers must be wrong... Let's try a different number`);
        };
    });
    app.sceneThree();
};

app.sceneThree = () => {
    $('form.sceneThreeForm').on('submit', (e) => {
        e.preventDefault();
        if($('input[name="tunnel"]:checked').attr('id') === 'correct'){
            alert(`You start to make your way to the left tunnel, but at the last second, you change your mind`)
            $('section.scenarioThree').toggleClass('show hide');
            $('section.end').toggleClass('hide show');   
        }else if ($('input[name="tunnel"]:checked').attr('id') === 'wrong'){
            alert(`You've been walking in the tunnel endlessly.... you feel as if there is no exit... you think to yourself "this must be how it feels to be a real coder, never ending"... and eventually you pass out`);
        }else {
            alert('You must make a choice');
        }; 
    });
    app.theEnd();
};

app.theEnd = () => {
    $('.endButton').on('click', () => {
        alert(`You panic... What is happening? Is my Javascript course over already? I still have so many questions... Suddenly it hits you... Javascript is HELL.`)
    });
};


app.init = () => {
    app.getName();
};


$(() => {
//document ready
    app.init();
});