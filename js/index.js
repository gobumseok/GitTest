import { print911,Valeue111 } from "./fun.js";



function Add(num1,num2){
	var sum = num1 + num2;
	alert(sum);
}


function Add1(num1,num2,num3){
	var sum = num1 + num2 + num3;
	alert(sum);
}

//var result_text11 = document.querySelector(); 
var result_text = document.getElementById('result_text');

//test button event
var test_btn = document.getElementById('test_btn');


//test button event
var Day_btn = document.getElementById('Day_btn');
Day_btn.addEventListener("click",() =>{
	console.log('HA HA');
});


//test 
var test_url = document.querySelectorAll("#link_event");
for(let i = 0; i < test_url.length; i++){
	test_url[i].addEventListener("click",changrBg);
}

function changrBg(){

	let color = this.innerHTML;
	let result = document.querySelector('#result');
	result.style.backgroundColor = color;
	console.log(color);

}


let prog_img = document.getElementById('prog_img');
//document.getElementById('prog_img');
prog_img.addEventListener("mouseover",()=>{
	prog_img.src = "img/aa1.jpg";
});
prog_img.addEventListener("mouseover",()=>{
	//prog_img.src = "img/aa1.jpg";
	console.log('aasdasdasdasd');
});
prog_img.addEventListener("mouseout", ()=>{
	prog_img.src = "img/aa2.jpg";
});



test_btn.addEventListener("click",()=>{
	
	
	console.dir(navigator);



	// ES5
	var arr1 = [1,2,3];
	var pow1 = arr1.map(function (x) { // x는 요소값
		return x * x;
	});
	 
	console.log(pow1); // [ 1, 4, 9 ]
	
	// ES6
	const arr2 = [1, 2, 3];
	const pow2 = arr2.map((x) => x * x);
	
	console.log(pow2);// [ 1, 4, 9 ]
	

	const dataJson = {
		"index":1,
		"list_data":[1,2,3,4,5,6,7,8,],
		"flag" : true

	}

	console.log("dataJson: " + typeof(dataJson));


	var fff1 = [1,2,3,4,5,67,8,789,123];
	fff1.push("hhhhhhhhhhhhhhhhhh");
	console.log("fff1 data: " + fff1);



	var fff = new Array();
	fff.push(1);
	fff.push(1);
	fff.push(1);
	fff.push(1);
	fff.push(1);
	fff.push(1);
	fff.push(1);
	fff.push(1);
	fff.push(1);
	fff.push(1);
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");
	fff.push("1000");

	console.log("type: " + typeof(fff));

	var EEEE = new Array();
	EEEE.push(1000);
	EEEE.push(1000);
	EEEE.push(1000);
	EEEE.push(1000);
	EEEE.push(1000);
	EEEE.push(1000);
	EEEE.push(1000);
	EEEE.push(1000);
	EEEE.push(fff);


	console.log(fff[0]);

	console.log(EEEE);

	for(let i = 0; i < EEEE.length;i++){
		console.log(typeof(EEEE[i]));
	}

	//Add(12,23);
	//Add1(12,23,1);
	//var aaad = 0;
	//console.log( aaad++);
	//console.log( aaad++);
	//console.log( aaad++);
	//console.log( aaad++);
	//console.log( aaad++);
	//console.log( aaad++);
	//console.log( aaad++);
	

	//var arr = [50,50,50];
	//var sum = 0;
	//for(var i = 0 ; i < arr.length; i++){
	//	sum += arr[i];
	//}
	//console.log(sum);
	//var aaa = sum/3;
	//console.log(aaa);
	//console.log( 3=="3");
	//console.log( 3 === "3");
	//console.log( 3 != 12);
	//var input_num = parseInt(prompt("input Num:"));
	
	/*
	var input_num = 0;
	var sum = 0;
	document.write("input Number: ");
	
	for(;;){
		
		
		input_num = parseInt(prompt("input Num: "));
		
		if(input_num === -99){
			break;
		}

		document.write(" " + input_num);
		sum += input_num;
		
	}
	document.write("<br> Sum:" + sum);
	*/

});

//reset 
var rest_btn = document.getElementById('rest_btn');
rest_btn.addEventListener("click",Reset);

function Reset(){
	
	/* result_text.innerText = Valeue111();
	result_text.style.color = "black";
	Data.Reset();
	print911("데스트 어렵다");
	*/

}



