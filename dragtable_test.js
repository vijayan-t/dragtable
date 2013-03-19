steal('funcunit',function(){

module("dragtable", { 
	setup: function(){
		S.open("demo.htm");
	}
});

test("dragtable test", function(){
	/*
	 * drag col change
	 */
	S('#one th[data-header=first_name]').drag('+100 +0', function(){
		ok( S('#one th[data-header=last_name]').next().attr('data-header') == 'first_name', 'order changed')
	})
	//reverse
	S('#one th[data-header=first_name]').drag('-150 +0', function(){
		ok( S('#one th[data-header=first_name]').next().attr('data-header') == 'last_name', ' reverse order changed')
	})
	
	/*
	 * check table boundary
	 */
	S('#one th[data-header=color]').drag('-500 +0', function(){
		ok( S('#one th:first').attr('data-header') == 'id', 'cant be dragged past boundary')
		
		ok( S('#one th:first').next().attr('data-header') == 'color', 'tried to drag past boundary, is next to it')
	})
	
	
	/*
	 * handle
	 */
	S('#one th[data-header=phone_number] .dragtable-drag-handle').drag('-500 +0', function(){
		ok( S('#one th:first').attr('data-header') == 'id', 'cant be dragged past boundary')
		
		ok( S('#one th:first').next().attr('data-header') == 'phone_number', 'tried to drag past boundary, is next to it')
	})
	
	
	/*
	 * parent offset scroll
	 */
	
	
});


});