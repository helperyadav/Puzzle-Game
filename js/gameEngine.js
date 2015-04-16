// Game Engine 
/** This class can be used to store.. game levels, resources, data structures **/
GE = {
	
	CurrentPuzzleIndex	: -1,
	puzzles 			:[],
	
	getNextpuzzle : function (){
		GE.CurrentPuzzleIndex ++;
		return ( GE.puzzles[ GE.CurrentPuzzleIndex ] != undefined ) ? GE.puzzles[ GE.CurrentPuzzleIndex ] : null;
	},
	
	CurrentPuzzle 		: function(){
		return GE.puzzles[ GE.CurrentPuzzleIndex ];
	},
	
	isCorrect: function( optionText ){
		return optionText === GE.puzzles[ GE.CurrentPuzzleIndex ].Answer;
	},
	
	loadPuzzle : function(){
		// load puzzle animation should go here.
		var p = GE.getNextpuzzle();
		if( p ){
			// add puzzle image
			var target = $('.puzzleimg').position();
			var img = $('<img></img>')
				.attr('src', p.Question )
				.css({'position':'fixed', 'left':1000, 'right':1000 })
				.appendTo($('body'))
				.show();
			
			var tween = new TWEEN.Tween({left:1000,top:1000})
						.to(target, 1000)
						.onUpdate(function(a){
							$(img).css({'top': Math.floor(this.top) +'px', 'left': Math.floor(this.left) + 'px'});
						})
						.easing(TWEEN.Easing.Cubic.InOut)
						.delay(1000)
						.start();
			
			// add options
			var optPosition = $('.option').position();
			var opt1 = $('<button type="button" class="btn btn-primary">'+ p.Opt1 +'</button>')
							.css({'position':'fixed', 'top' : optPosition.top, 'left' : '-500px'})
							.click( GE.ansClicked )
							.appendTo($('.optionWrap'));
			var tweenOpt1 = new TWEEN.Tween({left:-500})
						.to(optPosition, 1000)
						.delay( 500 )
						.onUpdate(function(){
							$(opt1).css({ 'left': Math.floor(this.left) + 'px'});
						})
						.easing(TWEEN.Easing.Back.InOut)
						.start();
			
			
			var opt2Pos = $('.option').position(); //$(opt1).position();
			opt2Pos.top = opt2Pos.top + $(opt1).height() + 14 + 5;
			
			var opt2 = $('<button type="button" class="btn btn-primary">'+ p.Opt2 +'</button>')
							.css({'position':'fixed', 'top' : opt2Pos.top, 'left' : '-500px'})
							.click( GE.ansClicked )
							.appendTo($('.optionWrap'));
			var tweenOpt2 = new TWEEN.Tween({left:-100})
						.to(opt2Pos, 1000)
						.delay(700)
						.onUpdate(function(){
							$(opt2).css({ 'left': Math.floor(this.left) + 'px'});
						})
						.easing(TWEEN.Easing.Back.InOut)
						.start();
		
		}
	},
	ansClicked : function(){
		createjs.Sound.play('click');
	},
	
	animate :function ( time ) {
		requestAnimationFrame( GE.animate );
		TWEEN.update( time );
	}
}