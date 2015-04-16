var game = {
	menu : {'height': '60'},
	viewport :{},
	
	init : function(){
		game.resetUI();
		game.loadGame();
	},
	
	resetUI : function(){
		game.viewport  = { h : $('body').outerHeight(), w : $('body').outerWidth() };
		console.log( game.viewport );
		$('.menuWrap').css('height' , '50px');
		$('.mainWrap').css({'height' : game.viewport.h - game.menu.height,
							'width'  : game.viewport.w });
		$('.imgWrap').css({'min-height' : game.viewport.h - game.menu.height});
		$('.optionWrap').css({'min-height' : game.viewport.h - game.menu.height});
	},
	
	loadGame : function(){
		
		createjs.Sound.addEventListener("fileload", handleLoadComplete);
		createjs.Sound.registerSound({src:"./sound/bk sound.wav", id:"sound"});
		createjs.Sound.registerSound({src:"./sound/ansClick.wav", id:"click"});
		
		function handleLoadComplete(event) {
			console.debug( event );
			createjs.Sound.play('click');
		}
		//call ajax etc here.. and then call loadded.
		getGameData( game.loaded );
		
	},
	
	loaded : function(data){
		// all resources loaded.. now work on UI.
		GE.puzzles = data;
		window.setTimeout( GE.loadPuzzle, 500 );
		
	}
	
}

