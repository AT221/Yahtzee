class DiceCreator{

    constructor(die, roll, value, clicked, y){
        this.roll = Math.floor(Math.random() * 6)+1;
        this.die = `die${die}`;
        this.value = 0;
        this.clicked = 0;
        this.y = false;
    };

    get dieClicked(){
        return this.clicked;
    };
    set altClickedValue(z){
        this.clicked = z;
    };
    set clickedValue(z){
        this.clicked = z++;
    };
    get booleanValue() {
        return this.y;
    };
    set boolean(x) {
        this.y = x;
    };
   
    roll_die(die){
        if(die.booleanValue=== false){            
           this.roll = Math.floor(Math.random() * 6)+1;                
        }else if (die.booleanValue === true){       
            this.value= this.roll;               
        };
    };

    nextPlayer(die){
        if(player.rollTimesClicked === 0 && player.changePlayer === false){
            document.getElementById("rollCount").innerHTML = "Player 1: Rolls 1/3";
        }else if(player.rollTimesClicked === 1 && player.changePlayer === false){
            document.getElementById("rollCount").innerHTML = "Player 1: Rolls 2/3";
            die.altClickedValue = 0;
        }else if(player.rollTimesClicked === 2 && player.changePlayer === false){
            document.getElementById("rollCount").innerHTML = "Player 1: Rolls 3/3";
            document.getElementById("nextPlayer").innerHTML = "Player 2's Turn.";
            die.boolean = false;  
            player.changePlayer = true;  
            document.querySelector(`.keep_${this.die}`).style.backgroundColor="#e3e3e3";  
        }else if(player.rollTimesClicked === 0 && player.changePlayer === true){
            document.getElementById("rollCount").innerHTML = "Player 2:  Rolls 1/3";
        }else if(player.rollTimesClicked === 1 && player.changePlayer === true){
            document.getElementById("rollCount").innerHTML = "Player 2: Rolls 2/3";
            die.altClickedValue = 0;
        }else if(player.rollTimesClicked === 2 && player.changePlayer === true){
            document.getElementById("rollCount").innerHTML =  "Player 2:  Rolls 3/3";
            document.getElementById("nextPlayer").innerHTML = "Player 1's Turn.";
            die.boolean = false;
            player.changePlayer = false;
            document.querySelector(`.keep_${this.die}`).style.backgroundColor="#e3e3e3";
        }
    };

    die_pic(){
        if(this.roll === 1){
            document.getElementById(this.die).src="https://img.icons8.com/windows/160/000000/dice-one.png";
        }else if(this.roll === 2){
            document.getElementById(this.die).src="https://img.icons8.com/windows/160/000000/dice-two.png";
        }else if(this.roll === 3){
            document.getElementById(this.die).src="https://img.icons8.com/windows/160/000000/dice-three.png";
        }else if(this.roll ===4){
            document.getElementById(this.die).src="https://img.icons8.com/windows/160/000000/dice-four.png";
        }else if (this.roll === 5){
            document.getElementById(this.die).src="https://img.icons8.com/windows/160/000000/dice-five.png";
        }else if (this.roll ===  6){
            document.getElementById(this.die).src="https://img.icons8.com/windows/160/000000/dice-six.png";
        };
    };

    keepColor(die){
        die.clickedValue = die.dieClicked +1;
        if(die.dieClicked % 2 === 1){
            die.boolean = true;
            document.querySelector(`.keep_${this.die}`).style.backgroundColor="#2bd600"; 
        }else if(die.dieClicked % 2 === 0){
            die.boolean = false;
            document.querySelector(`.keep_${this.die}`).style.backgroundColor="#e3e3e3";  
        }
    };
 };

//New Die Creation
var die1 = new DiceCreator(1);
var die2 = new DiceCreator(2);
var die3 = new DiceCreator(3);
var die4 = new DiceCreator(4);
var die5 = new DiceCreator(5);

document.querySelector('.roll').addEventListener('click', () =>{
    player.rollreset();

//Die Rolling
    die1.roll_die(die1);
    die2.roll_die(die2);
    die3.roll_die(die3);
    die4.roll_die(die4);
    die5.roll_die(die5);

//Die Picture Changing
    die1.die_pic(die1);
    die2.die_pic(die2);
    die3.die_pic(die3);
    die4.die_pic(die4);
    die5.die_pic(die5);

//Next Player Text
    die1.nextPlayer(die1);
    die2.nextPlayer(die2);
    die3.nextPlayer(die3);
    die4.nextPlayer(die4);
    die5.nextPlayer(die5);

//Sum Boxes
    onesCounter.addingNums(onesCounter);
    twosCounter.addingNums(twosCounter);
    threesCounter.addingNums(threesCounter);
    foursCounter.addingNums(foursCounter);
    fivesCounter.addingNums(fivesCounter);
    sixesCounter.addingNums(sixesCounter);

//Pushing Sum to Dropdown    
    threeOfP1.saveDrop(threeOfP1);
    fourOfP1.saveDrop(fourOfP1);
    chanceP1.saveDrop(chanceP1);
    threeOfP2.saveDrop(threeOfP2);
    fourOfP2.saveDrop(fourOfP2);
    chanceP2.saveDrop(chanceP2);

//Total Sumbox
    document.getElementById('total').innerHTML = die1.roll + die2.roll + die3.roll + die4.roll + die5.roll;
});

//Color of Keep Buttons Listener
document.querySelector('.keep_die1').addEventListener('click', () =>{die1.keepColor(die1);});
document.querySelector('.keep_die2').addEventListener('click', () =>{die2.keepColor(die2);});
document.querySelector('.keep_die3').addEventListener('click', () =>{die3.keepColor(die3);});
document.querySelector('.keep_die4').addEventListener('click', () =>{die4.keepColor(die4);});
document.querySelector('.keep_die5').addEventListener('click', () =>{die5.keepColor(die5);});

let player = {
    rollTimesClicked: -1,
    changePlayer: false,
    
    rollreset(){
        this.rollTimesClicked++;
        if(player.rollTimesClicked === 3){
            this.rollTimesClicked= 0;
        };
    },

    skipTurn(){
        if(this.changePlayer === false ){
            this.rollTimesClicked = 2;
        }else if (this.changePlayer === true){
            this.rollTimesClicked = 2;
        };
    },
    
};
//Skip Turn Listener
document.getElementById('pass').addEventListener('click', () =>{
    player.skipTurn();
    die1.nextPlayer(die1);
    die2.nextPlayer(die2);
    die3.nextPlayer(die3);
    die4.nextPlayer(die4);
    die5.nextPlayer(die5);
});

class CounterCreator{
    constructor(counterNum,counter){
        this.counterNum = `${counterNum}Total`;
        this.counter = 0;
    };

    get counterZero(){
        return this.counter;
    };

    set zero(x){
        this.counter = x;
    };

    addingNums(count){
        count.zero = 0;
        var diceArr =[die1.roll, die2.roll, die3.roll, die4.roll, die5.roll];      
        for(let x=0; x < diceArr.length; x++){
            if(diceArr[x] === 1 && this.counterNum === 'onesTotal'){
                this.counter++;
            }else if(diceArr[x] === 2 && this.counterNum === 'twosTotal'){       
                this.counter+=2;
            }else if(diceArr[x] === 3 && this.counterNum === 'threesTotal'){
                this.counter+=3;
            }else if(diceArr[x] === 4 && this.counterNum === 'foursTotal'){
                this.counter+=4;
            }else if(diceArr[x] === 5 && this.counterNum === 'fivesTotal'){
                this.counter+=5;
            }else if (diceArr[x] === 6 && this.counterNum === 'sixesTotal'){
                this.counter+=6;
            };
        };
        document.getElementById(this.counterNum).innerHTML= this.counter;
        if(count.counterZero === 0){
            document.querySelector(`#${this.counterNum}`).style.color="#E8E8E8";  
        }else{
            document.querySelector(`#${this.counterNum}`).style.color="#000000";  
        }
    };
};
//SumBox Creator
var onesCounter = new CounterCreator('ones');
var twosCounter = new CounterCreator('twos');
var threesCounter = new CounterCreator('threes');
var foursCounter = new CounterCreator('fours');
var fivesCounter = new CounterCreator('fives');
var sixesCounter = new CounterCreator('sixes');

class checkBoxCreator{
    constructor(name, player, value, boolean, booleanV2){
        this.name = `${name}${player}`;
        this.player = player;
        this.value = 0;
        this.boolean = true;
        this.booleanV2 = true;
    };
    yahtzeeBonusAdded(){
        if(this.value <= 200 && this.boolean === true && this.booleanV2 === true){
            this.value += 100;
            this.booleanV2 =false;
            this.boolean = false;
        }else if(this.booleanV2===false && this.boolean === false){
            this.value -= 100;
            this.booleanV2= true;
            this.boolean = true;
        };
        if(this.player ==='P1'){
            let totalLowerP1 = threeOfP1.value + fourOfP1.value  + full_houseP1.value + sm_straightP1.value + lg_straightP1.value + yahtzeeP1.value + chanceP1.value + checkBoxOneP1.value +checkBoxTwoP1.value + checkBoxThreeP1.value; 
            document.getElementById("finalTotalLowerP1").innerHTML = totalLowerP1;
            let  finalP1 = totalUpperP1 + totalLowerP1 ;
            document.getElementById("finalP1").innerHTML = finalP1;
            document.getElementById(`bonus${this.player}`).innerHTML = checkBoxOneP1.value +checkBoxTwoP1.value + checkBoxThreeP1.value;
        }else if(this.player === 'P2'){
            let totalLowerP2 = threeOfP2.value + fourOfP2.value  + full_houseP2.value + sm_straightP2.value + lg_straightP2.value + yahtzeeP2.value + chanceP2.value + checkBoxOneP2.value +checkBoxTwoP2.value + checkBoxThreeP2.value; 
            document.getElementById("finalTotalLowerP2").innerHTML = totalLowerP2;
            let  finalP2 = totalUpperP2 + totalLowerP2 ;
            document.getElementById("finalP2").innerHTML = finalP2;
            document.getElementById(`bonus${this.player}`).innerHTML = checkBoxOneP2.value +checkBoxTwoP2.value + checkBoxThreeP2.value;
        };
}
};
//Bonus Checkbox Creator
var checkBoxOneP1 = new checkBoxCreator('checkBoxOne','P1');
var checkBoxTwoP1 = new checkBoxCreator('checkBoxTwo','P1');
var checkBoxThreeP1 = new checkBoxCreator('checkBoxThree','P1');
var checkBoxOneP2 = new checkBoxCreator('checkBoxOne','P2');
var checkBoxTwoP2 = new checkBoxCreator('checkBoxTwo','P2');
var checkBoxThreeP2 = new checkBoxCreator('checkBoxThree','P2');

//Player 1 CheckBox Listeners
document.querySelector('#checkBoxOneP1').addEventListener('click', () =>{checkBoxOneP1.yahtzeeBonusAdded();});
document.querySelector('#checkBoxTwoP1').addEventListener('click', () =>{checkBoxTwoP1.yahtzeeBonusAdded();});
document.querySelector('#checkBoxThreeP1').addEventListener('click', () =>{checkBoxThreeP1.yahtzeeBonusAdded();});

//Player 2 CheckBox Listeners
document.querySelector('#checkBoxOneP2').addEventListener('click', () =>{checkBoxOneP2.yahtzeeBonusAdded();});
document.querySelector('#checkBoxTwoP2').addEventListener('click', () =>{checkBoxTwoP2.yahtzeeBonusAdded();});
document.querySelector('#checkBoxThreeP2').addEventListener('click', () =>{checkBoxThreeP2.yahtzeeBonusAdded();});

class TotalCreator{
    constructor(name, player, value){
        this.name = `${name}${player}`;
        this.player = player;
        this.value = 0;
    };

    get getValue(){
        return this.value;
    };
    set newValue(x){
        this.value =  x;
    };

    saveDrop(x){
        var totaldie = die1.roll + die2.roll + die3.roll + die4.roll + die5.roll;
            document.getElementById(`${x.name}_Sum`).addEventListener('click', function() {
            if( document.getElementById(x.name).selectedIndex = "2" ){
                x.setValue = totaldie;
                document.getElementById(`${x.name}_Sum`).text = x.getValue;
                document.getElementById(`${x.name}_Sum`).value = x.getValue;
            }
            document.getElementById(`${x.name}_Sum`).text = totaldie;
            document.getElementById(`${x.name}_Sum`).value = totaldie;
        });
    };

    totalScore(boxValue){
        boxValue.newValue = parseInt(document.getElementById(this.name).value);
        if(this.player === 'P1'){
            totalUpperP1 = oneP1.value + twoP1.value + threeP1.value + fourP1.value + fiveP1.value + sixP1.value;
            document.getElementById('p1Total').innerHTML = totalUpperP1;
            document.getElementById('totalUpperP1').innerHTML = totalUpperP1;
            document.getElementById('finalTotalUpperP1').innerHTML = totalUpperP1;
            var totalLowerP1 = threeOfP1.value + fourOfP1.value  + full_houseP1.value + sm_straightP1.value + lg_straightP1.value + yahtzeeP1.value + chanceP1.value + checkBoxOneP1.value +checkBoxTwoP1.value + checkBoxThreeP1.value; 
            document.getElementById("finalTotalLowerP1").innerHTML = totalLowerP1;
             finalP1 = totalUpperP1 + totalLowerP1;
            document.getElementById("finalP1").innerHTML = finalP1;
        }else if (this.player === 'P2'){
            totalUpperP2 = oneP2.value + twoP2.value + threeP2.value + fourP2.value + fiveP2.value + sixP2.value; 
            document.getElementById('p2Total').innerHTML = totalUpperP2;
            document.getElementById('totalUpperP2').innerHTML = totalUpperP2;
            document.getElementById('finalTotalUpperP2').innerHTML = totalUpperP2;
            var totalLowerP2 = threeOfP2.value + fourOfP2.value + full_houseP2.value + sm_straightP2.value+ lg_straightP2.value + yahtzeeP2.value + chanceP2.value + checkBoxOneP2.value +checkBoxTwoP2.value + checkBoxThreeP2.value;
            document.getElementById("finalTotalLowerP2").innerHTML = totalLowerP2;
            finalP2 = totalUpperP2 + totalLowerP2;
            document.getElementById("finalP2").innerHTML = finalP2;
        };
 
        let playerOne = document.querySelector('#playerOne');
        let playerTwo = document.querySelector('#playerTwo');
        if (finalP1 > finalP2){
            playerOne.style.backgroundColor="rgba(9, 235, 5, 1.0)";
            playerTwo.style.backgroundColor="rgba(250, 20, 28, 1.0)";
        }else if (finalP1 < finalP2){
            playerTwo.style.backgroundColor="rgba(9, 235, 5, 1.0)";
            playerOne.style.backgroundColor="rgba(250, 20, 28, 1.0)";
        }else if(finalP1 === finalP2){
            playerOne.style.backgroundColor="rgba(251, 240, 40, 1.0)";
            playerTwo.style.backgroundColor="rgba(251, 240, 40, 1.0)";
        };

        if(totalUpperP1 >= 63){
            document.getElementById("add35P1").innerHTML = '35';
            totalUpperP1 = oneP1.value + twoP1.value + threeP1.value + fourP1.value + fiveP1.value + sixP1.value +35;
            document.getElementById('totalUpperP1').innerHTML = totalUpperP1;
            document.getElementById('finalTotalUpperP1').innerHTML = totalUpperP1;
            document.getElementById("finalP1").innerHTML = finalP1 + 35;
        }else if (totalUpperP1 < 63){
            document.getElementById("add35P1").innerHTML = '';
        };

        if(totalUpperP2 >= 63){
            document.getElementById("add35P2").innerHTML = '35';
            totalUpperP2 = oneP2.value + twoP2.value + threeP2.value + fourP2.value + fiveP2.value + sixP2.value +35;
            document.getElementById('totalUpperP2').innerHTML = totalUpperP2;
            document.getElementById('finalTotalUpperP2').innerHTML = totalUpperP2;
            document.getElementById("finalP2").innerHTML = finalP2 + 35;
        }else if (totalUpperP2 < 63){
            document.getElementById("add35P2").innerHTML = '';
        };
        
    };

};

//Player 1 Total Upper Score Creator
var oneP1 = new TotalCreator('one','P1');
var twoP1 = new TotalCreator('two','P1');
var threeP1 = new TotalCreator('three','P1');
var fourP1 = new TotalCreator('four','P1');
var fiveP1 = new TotalCreator('five','P1');
var sixP1 = new TotalCreator('six','P1');
var add35P1 = new TotalCreator('add35','P1');

//Player 1 Total Lower Score Creator
var threeOfP1 = new TotalCreator('threeOf','P1');
var fourOfP1 = new TotalCreator('fourOf', 'P1');
var chanceP1 = new TotalCreator('chance', 'P1');
var full_houseP1 = new TotalCreator('full_house','P1');
var sm_straightP1 = new TotalCreator('sm_straight','P1');
var lg_straightP1 = new TotalCreator('lg_straight','P1');
var yahtzeeP1 = new TotalCreator('yahtzee','P1');

//Player 2 Total Upper Score Creator
var oneP2 = new TotalCreator('one','P2');
var twoP2 = new TotalCreator('two','P2');
var threeP2 = new TotalCreator('three','P2');
var fourP2 = new TotalCreator('four','P2');
var fiveP2 = new TotalCreator('five','P2');
var sixP2 = new TotalCreator('six','P2');
var add35P2 = new TotalCreator('add35','P2');

//Player 2 Total Lower Score Creator
var threeOfP2 = new TotalCreator('threeOf','P2');
var fourOfP2 = new TotalCreator('fourOf', 'P2');
var chanceP2 = new TotalCreator('chance', 'P2');
var full_houseP2 = new TotalCreator('full_house','P2');
var sm_straightP2 = new TotalCreator('sm_straight','P2');
var lg_straightP2 = new TotalCreator('lg_straight','P2');
var yahtzeeP2 = new TotalCreator('yahtzee','P2');

//Event Listener For Totals
let upperBoxArr = document.querySelectorAll(".scoreBox");
upperBoxArr.forEach(function(box) {
    box.addEventListener("click", function() {
//P1 Upper Total
        oneP1.totalScore(oneP1);
        twoP1.totalScore(twoP1);
        threeP1.totalScore(threeP1);
        fourP1.totalScore(fourP1);
        fiveP1.totalScore(fiveP1);
        sixP1.totalScore(sixP1);
//P2 Upper Total
        oneP2.totalScore(oneP2);
        twoP2.totalScore(twoP2);
        threeP2.totalScore(threeP2);
        fourP2.totalScore(fourP2);
        fiveP2.totalScore(fiveP2);
        sixP2.totalScore(sixP2);
        
//P1 Lower Total
        threeOfP1.totalScore(threeOfP1);
        fourOfP1.totalScore(fourOfP1);
        chanceP1.totalScore(chanceP1);
        full_houseP1.totalScore(full_houseP1);
        sm_straightP1.totalScore(sm_straightP1);
        lg_straightP1.totalScore(lg_straightP1);
        yahtzeeP1.totalScore(yahtzeeP1);
        
//P2 Lower Total
        threeOfP2.totalScore(threeOfP2);
        fourOfP2.totalScore(fourOfP2);
        chanceP2.totalScore(chanceP2);
        full_houseP2.totalScore(full_houseP2);
        sm_straightP2.totalScore(sm_straightP2);
        lg_straightP2.totalScore(lg_straightP2);
        yahtzeeP2.totalScore(yahtzeeP2);
    });
});