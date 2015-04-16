function getGameData ( callback ){
	var data = [
	{ PId: 1, PType:'IMG', Catagory:'Animal', Question:'./img/bmw.jpg', 
			OptionType:'TEXT', "Opt1":'Dog', Opt2:'Cat', Opt3:'Snake', Opt4:'Owl', Answer:'Owl', Dificulty:'Dificult', Weight: 1000},
	{ PId: 2, PType:'IMG', Catagory:'Animal', Question:'./data/img/nividia-logo.jpg', 
			OptionType:'TEXT', "Opt1":'Dog', Opt2:'Cat', Opt3:'Snake', Opt4:'Owl', Answer:'Owl', Dificulty:'Dificult', Weight: 1000}
	];

	if( callback ){
		// fire ajax get the data and callback;
		callback( data );
	}else{
		return data;
	}
}