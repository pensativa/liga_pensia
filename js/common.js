var path="https://ligapension.com/lib/ajax.php";

$(document).ready(function() {

	$(document).on('submit','.ajaxform',function(event) {
  		event.preventDefault();
		name=$(this).attr('name');
		url=$(this).attr('url');

//		$(this).find(".message").html('');

		var formData = new FormData(this);

		$(this).find("button[type=submit]").prop("disabled", true);

		$.ajax({ type: "POST", data: formData, url:path, cache: false, processData: false, contentType: false,
			success: function(data){

//				$("form[name="+name+"]").find(".message").html(data.substr(1));

				if (data[0]=="1") setTimeout(function(){ document.location.reload(); },1000); 
				if (data[0]=="3") document.location.href=url;
				if (data[0]=="2") {
					ad=data.split("~");
					alert(ad[1]);
				}	

				if (data[0]=="4") { $(".modal").hide(); setTimeout(function(){ document.location.href=url; },2000); }
				if (data[0]=="5") {
					$(".pay-body-step-1").removeClass("is-showing");
					$(".pay-body-step-2").addClass("is-showing");
					$(".tpay1").show();
					$(".tpay2").hide();
					ad=data.split("~");
					$("input[name=f22]").val(ad[1]);
					$("input[name=f23]").val(ad[2]);
					$("input[name=f24]").val(ad[3]);
					$("input[name=f21]").val(ad[4]);
					$("input[name=sum2]").val(ad[5]);
				}
				if (data[0]=="6") {
					$(".pay-body-step-1").removeClass("is-showing");
					$(".pay-body-step-2").addClass("is-showing");
					$(".tpay1").hide();
					$(".tpay2").show();
					ad=data.split("~");
					$("form[name=pay2]").find("*").removeAttr("data-tip");
					$("input[name=f21]").prop("readonly",false);
					$("input[name=f22]").prop("readonly",false);
					$("input[name=f23]").prop("readonly",false);
					$("input[name=f24]").prop("readonly",false);
					$("input[name=sum2]").val(ad[1]);
				}
				if (data[0]=="7") {
					ad=data.split("~");
					//window.open(ad[1],"payment","height=600,width=650");
					document.location.href=ad[1];
				}
			},
			error: function (e) {
                console.log("ERROR : ", e);
            }			
		});				
		event.stopImmediatePropagation();
		if (!event.isDefaultPrevented()){event.returnValue = false;}
	});

	$('.ajaxformcontract').validate({
		rules: {
			firstname: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				minlength: 18
			},
			terms: {
				required: true
			},
			presenceFile: {
				required: true
			}
		},
		messages: {
			firstname: {
				required: "Це поле є обов'язковим"
			},
			email: {
				required: "Це поле є обов'язковим",
				email: "Введіть коректну електронну адресу"
			},
			phone: {
				required: "Це поле є обов'язковим",
				minlength: "Введіть номер повністю"
			},
			terms: {
				required: "Ви повинні дати дозвіл"
			},
			presenceFile: {
				required: "Ви повинні додати файли"
			}
		},
		submitHandler: function(form) {
			var formData = new FormData(form);
			$("button.msf-nav-button").prop("disabled", true);
			$.ajax({ type: "POST", data: formData, url:path, cache: false, processData: false, contentType: false,
				success: function(data){
					
					$(".form_popup").addClass("show");
					setTimeout(function(){
						$(".form_popup").addClass("visible");
					},300);
					setTimeout(function(){
						$(".form_popup").removeClass("visible");
					},5000);
					setTimeout(function(){
						$(".form_popup").removeClass("show");
						$("button.msf-nav-button").prop("disabled", false);
						var form = $(".ajaxformcontract");
						form.trigger('reset');
					},5300);
				},
				error: function (e) {
					console.log("ERROR : ", e);
				}
			});
		}
	});

	$(document).on('click','.ajax',function(event) {
  		event.preventDefault();
		keys={'command':$(this).attr('command'),'id':$(this).attr('id') }
		$.ajax({ type: "POST", data: keys, url:	path, contentType: "application/x-www-form-urlencoded;charset=utf-8",
			success: function(data){ 
				if (data[0]=="2") location.reload();
				if (data[0]=="3") document.location.href=data.substr(1);
			} 
		});
		event.stopImmediatePropagation();
		if (!event.isDefaultPrevented()){event.returnValue = false;}		
	});

	$(document).on('click','.return-button',function(event) {
		$(".pay-body-step-1").addClass("is-showing");		
		$(".pay-body-step-2").removeClass("is-showing");
		$("form[name=pay1]").find("button[type=submit]").prop("disabled", false);
	});

	$(document).on('click','.vodafone',function() {
		$("form.ajaxform").hide();
		$("form.ajaxform[name=vodafone]").show();
		$(".email-item").show();		
	});
	
	$(document).on('click','.ks',function() {
		$("form.ajaxform").hide();
		$("form.ajaxform[name=ks]").show();
		$(".email-item").show();		
	});

	$(document).on('click','.email',function() {
		$("form.ajaxform").hide();
		$("form.ajaxform[name=reg]").show();
		$(".email-item").hide();
	});

	$(document).on('change','input[name=terms-address]',function(event) {
		$(".living").toggle();
	});


	$(document).on('change','input[name=contractterms]',function(event) {
		$(".smsform").show();
	});

	$(document).on('change','input[type=file]',function(event) {
		$(this).next().prop("checked",true);
	});

	$(document).on('click','.show-dialog', function(event) {
		$(".smsform .code-send").show();
		$(".smsform .code-dialog").hide();
		keys={'command':'sms','again':0 }
		$.ajax({ type: "POST", data: keys, url:	path, contentType: "application/x-www-form-urlencoded;charset=utf-8",
			success: function(data){
				if (data!='Номер телефона не найден, обратитесь к администратору') {
					$(".smsform .code-send").hide();
					$(".smsform .code-dialog").show();
				} else {
					$(".smsform .code-send").show();
					$(".smsform .code-dialog").hide();
				}
				alert(data);
			} 
		});
	});

	$(document).on('click','.smsagain', function(event) {
		keys={'command':'sms',"again":1}
		$.ajax({ type: "POST", data: keys, url:	path, contentType: "application/x-www-form-urlencoded;charset=utf-8",
			success: function(data) {
				alert(data);
			} 
		});
	});

	$(document).on('click','.code-dialog .btn-embossed', function(event) {
  		event.preventDefault();
  		$(".btn.msf-nav-button.eds").prop('disabled', true);
		keys={'command':'smscode'}
		$.ajax({ type: "POST", data: keys, url:	path, contentType: "application/x-www-form-urlencoded;charset=utf-8",
			success: function(data) {
				let code="";
				$("#form input").each(function(index) {
					code=code+$(this).val();
				});
				if (code.length==4) {
					if (code==data) {
						$(".code-wrapper.smsform").hide();
					} else {
						$(".code-wrapper.smsform").show();
						alert("Невірний код");
					}
				}
				$(".btn.msf-nav-button.eds").prop('disabled', !(code==data));
			} 
		});
		event.stopImmediatePropagation();
		if (!event.isDefaultPrevented()){event.returnValue = false;}		
	});

});

(function(a){'use string';a.pseudoElements={length:0};var b=function(c){if('object'==typeof c.argument||c.argument!==void 0&&c.property!==void 0){for(var d of c.elements.get()){d.pseudoElements||(d.pseudoElements={styleSheet:null,before:{index:null,properties:null},after:{index:null,properties:null},id:null});var e=function(){if(null!==d.pseudoElements.id)return+d.getAttribute('data-pe--id')!==d.pseudoElements.id&&d.setAttribute('data-pe--id',d.pseudoElements.id),'[data-pe--id="'+d.pseudoElements.id+'"]::'+c.pseudoElement;var k=a.pseudoElements.length;return a.pseudoElements.length++,d.pseudoElements.id=k,d.setAttribute('data-pe--id',k),'[data-pe--id="'+k+'"]::'+c.pseudoElement}();if(!d.pseudoElements.styleSheet)if(document.styleSheets[0])d.pseudoElements.styleSheet=document.styleSheets[0];else{var f=document.createElement('style');document.head.appendChild(f),d.pseudoElements.styleSheet=f.sheet}if(d.pseudoElements[c.pseudoElement].properties&&d.pseudoElements[c.pseudoElement].index&&d.pseudoElements.styleSheet.deleteRule(d.pseudoElements[c.pseudoElement].index),'object'==typeof c.argument){if(c.argument=a.extend({},c.argument),!d.pseudoElements[c.pseudoElement].properties&&!d.pseudoElements[c.pseudoElement].index){var g=d.pseudoElements.styleSheet.rules.length||d.pseudoElements.styleSheet.cssRules.length||d.pseudoElements.styleSheet.length;d.pseudoElements[c.pseudoElement].index=g,d.pseudoElements[c.pseudoElement].properties=c.argument}var h='';for(var i in c.argument)d.pseudoElements[c.pseudoElement].properties[i]='function'==typeof c.argument[i]?c.argument[i]():c.argument[i];for(var i in d.pseudoElements[c.pseudoElement].properties)h+=i+': '+d.pseudoElements[c.pseudoElement].properties[i]+' !important; ';d.pseudoElements.styleSheet.addRule(e,h,d.pseudoElements[c.pseudoElement].index)}else if(void 0!==c.argument&&void 0!==c.property){if(!d.pseudoElements[c.pseudoElement].properties&&!d.pseudoElements[c.pseudoElement].index){var g=d.pseudoElements.styleSheet.rules.length||d.pseudoElements.styleSheet.cssRules.length||d.pseudoElements.styleSheet.length;d.pseudoElements[c.pseudoElement].index=g,d.pseudoElements[c.pseudoElement].properties={}}d.pseudoElements[c.pseudoElement].properties[c.argument]='function'==typeof c.property?c.property():c.property;var h='';for(var i in d.pseudoElements[c.pseudoElement].properties)h+=i+': '+d.pseudoElements[c.pseudoElement].properties[i]+' !important; ';d.pseudoElements.styleSheet.addRule(e,h,d.pseudoElements[c.pseudoElement].index)}}return a(c.elements)}if(void 0!==c.argument&&void 0===c.property){var d=a(c.elements).get(0),j=window.getComputedStyle(d,'::'+c.pseudoElement).getPropertyValue(c.argument);return d.pseudoElements?a(c.elements).get(0).pseudoElements[c.pseudoElement].properties[c.argument]||j:j||null}return console.error('Invalid values!'),!1};a.fn.cssBefore=function(c,d){return b({elements:this,pseudoElement:'before',argument:c,property:d})},a.fn.cssAfter=function(c,d){return b({elements:this,pseudoElement:'after',argument:c,property:d})}})(jQuery);