	$('#btn-reset').on('click', function() {
	  $('#builder').queryBuilder('reset');
	});

	$('#builder').on('getRules.queryBuilder.filter', function(e) {
	});

	$('#btn-get-sql').on('click', function() {
	  var result = $('#builder').queryBuilder('getSQL');
	if (result.sql.length) {
	    var finalsql ="SELECT * FROM T_TP_RULES WHERE "+ result.sql + ";";
	    document.getElementById("sql").innerHTML=finalsql;
	  }
	});
