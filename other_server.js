$(document).ready(function(){
	// First add Other option
	$('select#rcmloginhost').append('<option value="-1">'+rcmail.gettext('otherhost_other', 'other_server')+'</option>');
	$("#rcmloginhost").on('change', function(e){
		html = '<tr id="rcmotherhost">'+
		'			<td class="title">'+rcmail.gettext('otherhost_host', 'other_server')+'</td>'+
		'			<td class="input"><input type="text" id="rcmhost" name="_url" autocomplete="off" required="required"></input></td>'+
		'		</tr>'+
		'		<tr>'+
		'			<td class="title">'+rcmail.gettext('otherhost_port', 'other_server')+'</td>'+
		'			<td class="input"><input id="rcmport" autocomplete="off" required="required" value="993" type="text" name="_port"></input>'+
		'			<span class="protocolLabel">'+rcmail.gettext('otherhost_protocol', 'other_server')+'</span>'+
		'			<select name="_protocol" id="rcmprotocol">'+
		'				<option value="ssl">SSL</option>'+
		'				<option value="tls">TLS</option>'+
		'				<option value="">No TLS</option>'+
		'			</select></td>'+
		'		</tr>'+
		'		<tr>'+
		'		</tr>';
		// If Other option selected then add html code
		if($(this).val()=='-1'){
			$(this).closest('tbody').append(html);
			$("#rcmotherhost").nextAll().andSelf().hide().fadeIn(1000);
		}
		// Else then remove the related html code (rollback)
		else {
			$("#rcmotherhost").nextAll().andSelf().fadeOut(1000, function(){
				$(this).remove();
			});
		}
	});
	// Add default port numbers for SSL & TLS
	$('body').on('change', '#rcmprotocol', function(){
		if($(this).val()=='ssl')
			$('#rcmport').val(993);
		else if($(this).val()=='tls')
			$('#rcmport').val(143);
	});

});