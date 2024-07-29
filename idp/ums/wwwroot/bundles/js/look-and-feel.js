function dropDownListInitialization(e,t,a){new ejs.dropdowns.DropDownList({index:0,floatLabelType:"Never",placeholder:t,cssClass:"e-outline e-custom e-non-float",enablePersistence:!0,change:onDropDownListChange,query:new ej.data.Query,allowFiltering:a,filterType:"Contains"}).appendTo(e)}function onDropDownListChange(e){"enable-ssl"==e.element.id&&onBaseUrlChange(e),"fontfamily"==e.element.id&&onFontChange(),"application-theme"==e.element.id&&onApplicationThemeChange(),"mail-account"==e.element.id&&emailConfiguration()}function groupImportDropDownListInitialization(e,t){new ejs.dropdowns.DropDownList({index:0,floatLabelType:"Never",placeholder:t,change:ongroupImportchange,cssClass:"e-outline e-custom e-non-float",enablePersistence:!0}).appendTo(e)}function fontDropDownListInitialization(e,t,a,i){new ejs.dropdowns.DropDownList({index:0,floatLabelType:"Never",placeholder:t,change:onFontChange,cssClass:"e-outline e-custom e-non-float",enablePersistence:!0,query:new ej.data.Query,allowFiltering:a,filterType:"Contains"}).appendTo(e)}!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(h){h.extend(h.fn,{validate:function(e){var i;if(this.length)return(i=h.data(this[0],"validator"))||(this.attr("novalidate","novalidate"),i=new h.validator(e,this[0]),h.data(this[0],"validator",i),i.settings.onsubmit&&(this.on("click.validate",":submit",function(e){i.submitButton=e.currentTarget,h(this).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==h(this).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.on("submit.validate",function(a){function e(){var e,t;return i.submitButton&&(i.settings.submitHandler||i.formSubmitted)&&(e=h("<input type='hidden'/>").attr("name",i.submitButton.name).val(h(i.submitButton).val()).appendTo(i.currentForm)),!(i.settings.submitHandler&&!i.settings.debug)||(t=i.settings.submitHandler.call(i,i.currentForm,a),e&&e.remove(),void 0!==t&&t)}return i.settings.debug&&a.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,e()):i.form()?i.pendingRequest?!(i.formSubmitted=!0):e():(i.focusInvalid(),!1)})),i);e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.")},valid:function(){var e,t,a;return h(this[0]).is("form")?e=this.validate().form():(a=[],e=!0,t=h(this[0].form).validate(),this.each(function(){(e=t.element(this)&&e)||(a=a.concat(t.errorList))}),t.errorList=a),e},rules:function(e,t){var a,i,n,s,o,r=this[0],l=void 0!==this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=r&&(!r.form&&l&&(r.form=this.closest("form")[0],r.name=this.attr("name")),null!=r.form)){if(e)switch(a=h.data(r.form,"validator").settings,i=a.rules,n=h.validator.staticRules(r),e){case"add":h.extend(n,h.validator.normalizeRule(t)),delete n.messages,i[r.name]=n,t.messages&&(a.messages[r.name]=h.extend(a.messages[r.name],t.messages));break;case"remove":return t?(o={},h.each(t.split(/\s/),function(e,t){o[t]=n[t],delete n[t]}),o):(delete i[r.name],n)}return(l=h.validator.normalizeRules(h.extend({},h.validator.classRules(r),h.validator.attributeRules(r),h.validator.dataRules(r),h.validator.staticRules(r)),r)).required&&(s=l.required,delete l.required,l=h.extend({required:s},l)),l.remote&&(s=l.remote,delete l.remote,l=h.extend(l,{remote:s})),l}}});function t(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}var a;h.extend(h.expr.pseudos||h.expr[":"],{blank:function(e){return!t(""+h(e).val())},filled:function(e){e=h(e).val();return null!==e&&!!t(""+e)},unchecked:function(e){return!h(e).prop("checked")}}),h.validator=function(e,t){this.settings=h.extend(!0,{},h.validator.defaults,e),this.currentForm=t,this.init()},h.validator.format=function(a,e){return 1===arguments.length?function(){var e=h.makeArray(arguments);return e.unshift(a),h.validator.format.apply(this,e)}:(void 0===e||((e=2<arguments.length&&e.constructor!==Array?h.makeArray(arguments).slice(1):e).constructor!==Array&&(e=[e]),h.each(e,function(e,t){a=a.replace(new RegExp("\\{"+e+"\\}","g"),function(){return t})})),a)},h.extend(h.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:h([]),errorLabelContainer:h([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(e){this.lastActive=e,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,e,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(e)))},onfocusout:function(e){this.checkable(e)||!(e.name in this.submitted)&&this.optional(e)||this.element(e)},onkeyup:function(e,t){9===t.which&&""===this.elementValue(e)||-1!==h.inArray(t.keyCode,[16,17,18,20,35,36,37,38,39,40,45,144,225])||(e.name in this.submitted||e.name in this.invalid)&&this.element(e)},onclick:function(e){e.name in this.submitted?this.element(e):e.parentNode.name in this.submitted&&this.element(e.parentNode)},highlight:function(e,t,a){("radio"===e.type?this.findByName(e.name):h(e)).addClass(t).removeClass(a)},unhighlight:function(e,t,a){("radio"===e.type?this.findByName(e.name):h(e)).removeClass(t).addClass(a)}},setDefaults:function(e){h.extend(h.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:h.validator.format("Please enter no more than {0} characters."),minlength:h.validator.format("Please enter at least {0} characters."),rangelength:h.validator.format("Please enter a value between {0} and {1} characters long."),range:h.validator.format("Please enter a value between {0} and {1}."),max:h.validator.format("Please enter a value less than or equal to {0}."),min:h.validator.format("Please enter a value greater than or equal to {0}."),step:h.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var t,a,i=void 0!==h(this).attr("contenteditable")&&"false"!==h(this).attr("contenteditable");!this.form&&i&&(this.form=h(this).closest("form")[0],this.name=h(this).attr("name")),n===this.form&&(i=h.data(this.form,"validator"),t="on"+e.type.replace(/^validate/,""),(a=i.settings)[t])&&!h(this).is(a.ignore)&&a[t].call(i,this,e)}this.labelContainer=h(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||h(this.currentForm),this.containers=h(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var a,n=this.currentForm,i=this.groups={};h.each(this.settings.groups,function(a,e){"string"==typeof e&&(e=e.split(/\s/)),h.each(e,function(e,t){i[t]=a})}),a=this.settings.rules,h.each(a,function(e,t){a[e]=h.validator.normalizeRule(t)}),h(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",e).on("click.validate","select, option, [type='radio'], [type='checkbox']",e),this.settings.invalidHandler&&h(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),h.extend(this.submitted,this.errorMap),this.invalid=h.extend({},this.errorMap),this.valid()||h(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var e=0,t=this.currentElements=this.elements();t[e];e++)this.check(t[e]);return this.valid()},element:function(e){var t,a,i=this.clean(e),n=this.validationTargetFor(i),s=this,o=!0;return void 0===n?delete this.invalid[i.name]:(this.prepareElement(n),this.currentElements=h(n),(a=this.groups[n.name])&&h.each(this.groups,function(e,t){t===a&&e!==n.name&&(i=s.validationTargetFor(s.clean(s.findByName(e))))&&i.name in s.invalid&&(s.currentElements.push(i),o=s.check(i)&&o)}),t=!1!==this.check(n),o=o&&t,this.invalid[n.name]=!t,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),h(e).attr("aria-invalid",!t)),o},showErrors:function(t){var a;t&&(h.extend((a=this).errorMap,t),this.errorList=h.map(this.errorMap,function(e,t){return{message:e,element:a.findByName(t)[0]}}),this.successList=h.grep(this.successList,function(e){return!(e.name in t)})),this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){h.fn.resetForm&&h(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var e=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(e)},resetElements:function(e){var t;if(this.settings.unhighlight)for(t=0;e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,""),this.findByName(e[t].name).removeClass(this.settings.validClass);else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(e){var t,a=0;for(t in e)null!=e[t]&&!1!==e[t]&&a++;return a},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(e){e.not(this.containers).text(""),this.addWrapper(e).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{h(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(e){}},findLastActive:function(){var t=this.lastActive;return t&&1===h.grep(this.errorList,function(e){return e.element.name===t.name}).length&&t},elements:function(){var a=this,i={};return h(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var e=this.name||h(this).attr("name"),t=void 0!==h(this).attr("contenteditable")&&"false"!==h(this).attr("contenteditable");return!e&&a.settings.debug&&window.console&&console.error("%o has no name assigned",this),t&&(this.form=h(this).closest("form")[0],this.name=e),!(this.form!==a.currentForm||e in i||!a.objectLength(h(this).rules())||(i[e]=!0,0))})},clean:function(e){return h(e)[0]},errors:function(){var e=this.settings.errorClass.split(" ").join(".");return h(this.settings.errorElement+"."+e,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=h([]),this.toHide=h([])},reset:function(){this.resetInternals(),this.currentElements=h([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(e){this.reset(),this.toHide=this.errorsFor(e)},elementValue:function(e){var t=h(e),a=e.type,i=void 0!==t.attr("contenteditable")&&"false"!==t.attr("contenteditable");return"radio"===a||"checkbox"===a?this.findByName(e.name).filter(":checked").val():"number"===a&&void 0!==e.validity?e.validity.badInput?"NaN":t.val():(e=i?t.text():t.val(),"file"===a?"C:\\fakepath\\"===e.substr(0,12)?e.substr(12):0<=(i=e.lastIndexOf("/"))||0<=(i=e.lastIndexOf("\\"))?e.substr(i+1):e:"string"==typeof e?e.replace(/\r/g,""):e)},check:function(t){t=this.validationTargetFor(this.clean(t));var e,a,i,n,s=h(t).rules(),o=h.map(s,function(e,t){return t}).length,r=!1,l=this.elementValue(t);for(a in"function"==typeof s.normalizer?n=s.normalizer:"function"==typeof this.settings.normalizer&&(n=this.settings.normalizer),n&&(l=n.call(t,l),delete s.normalizer),s){i={method:a,parameters:s[a]};try{if("dependency-mismatch"===(e=h.validator.methods[a].call(this,l,t,i.parameters))&&1===o)r=!0;else{if(r=!1,"pending"===e)return void(this.toHide=this.toHide.not(this.errorsFor(t)));if(!e)return this.formatAndAdd(t,i),!1}}catch(e){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+t.id+", check the '"+i.method+"' method.",e),e instanceof TypeError&&(e.message+=".  Exception occurred when checking element "+t.id+", check the '"+i.method+"' method."),e}}if(!r)return this.objectLength(s)&&this.successList.push(t),!0},customDataMessage:function(e,t){return h(e).data("msg"+t.charAt(0).toUpperCase()+t.substring(1).toLowerCase())||h(e).data("msg")},customMessage:function(e,t){e=this.settings.messages[e];return e&&(e.constructor===String?e:e[t])},findDefined:function(){for(var e=0;e<arguments.length;e++)if(void 0!==arguments[e])return arguments[e]},defaultMessage:function(e,t){var a=this.findDefined(this.customMessage(e.name,(t="string"==typeof t?{method:t}:t).method),this.customDataMessage(e,t.method),!this.settings.ignoreTitle&&e.title||void 0,h.validator.messages[t.method],"<strong>Warning: No message defined for "+e.name+"</strong>"),i=/\$?\{(\d+)\}/g;return"function"==typeof a?a=a.call(this,t.parameters,e):i.test(a)&&(a=h.validator.format(a.replace(i,"{$1}"),t.parameters)),a},formatAndAdd:function(e,t){var a=this.defaultMessage(e,t);this.errorList.push({message:a,element:e,method:t.method}),this.errorMap[e.name]=a,this.submitted[e.name]=a},addWrapper:function(e){return e=this.settings.wrapper?e.add(e.parent(this.settings.wrapper)):e},defaultShowErrors:function(){for(var e,t,a=0;this.errorList[a];a++)t=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,t.element,this.settings.errorClass,this.settings.validClass),this.showLabel(t.element,t.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,e=this.validElements();e[a];a++)this.settings.unhighlight.call(this,e[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return h(this.errorList).map(function(){return this.element})},showLabel:function(e,t){var a,i,n,s=this.errorsFor(e),o=this.idOrName(e),r=h(e).attr("aria-describedby");s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(t)):(i=s=h("<"+this.settings.errorElement+">").attr("id",o+"-error").addClass(this.settings.errorClass).html(t||""),this.settings.wrapper&&(i=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(i):this.settings.errorPlacement?this.settings.errorPlacement.call(this,i,h(e)):i.insertAfter(e),s.is("label")?s.attr("for",o):0===s.parents("label[for='"+this.escapeCssMeta(o)+"']").length&&(i=s.attr("id"),r?r.match(new RegExp("\\b"+this.escapeCssMeta(i)+"\\b"))||(r+=" "+i):r=i,h(e).attr("aria-describedby",r),a=this.groups[e.name])&&h.each((n=this).groups,function(e,t){t===a&&h("[name='"+n.escapeCssMeta(e)+"']",n.currentForm).attr("aria-describedby",s.attr("id"))})),!t&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var t=this.escapeCssMeta(this.idOrName(e)),e=h(e).attr("aria-describedby"),t="label[for='"+t+"'], label[for='"+t+"'] *";return e&&(t=t+", #"+this.escapeCssMeta(e).replace(/\s+/g,", #")),this.errors().filter(t)},escapeCssMeta:function(e){return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(e){return this.groups[e.name]||!this.checkable(e)&&e.id||e.name},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name)),h(e).not(this.settings.ignore)[0]},checkable:function(e){return/radio|checkbox/i.test(e.type)},findByName:function(e){return h(this.currentForm).find("[name='"+this.escapeCssMeta(e)+"']")},getLength:function(e,t){switch(t.nodeName.toLowerCase()){case"select":return h("option:selected",t).length;case"input":if(this.checkable(t))return this.findByName(t.name).filter(":checked").length}return e.length},depend:function(e,t){return!this.dependTypes[typeof e]||this.dependTypes[typeof e](e,t)},dependTypes:{boolean:function(e){return e},string:function(e,t){return!!h(e,t.form).length},function:function(e,t){return e(t)}},optional:function(e){var t=this.elementValue(e);return!h.validator.methods.required.call(this,t,e)&&"dependency-mismatch"},startRequest:function(e){this.pending[e.name]||(this.pendingRequest++,h(e).addClass(this.settings.pendingClass),this.pending[e.name]=!0)},stopRequest:function(e,t){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],h(e).removeClass(this.settings.pendingClass),t&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(h(this.currentForm).submit(),this.submitButton&&h("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!t&&0===this.pendingRequest&&this.formSubmitted&&(h(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e,t){return t="string"==typeof t&&t||"remote",h.data(e,"previousValue")||h.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,{method:t})})},destroy:function(){this.resetForm(),h(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,t){e.constructor===String?this.classRuleSettings[e]=t:h.extend(this.classRuleSettings,e)},classRules:function(e){var t={},e=h(e).attr("class");return e&&h.each(e.split(" "),function(){this in h.validator.classRuleSettings&&h.extend(t,h.validator.classRuleSettings[this])}),t},normalizeAttributeRule:function(e,t,a,i){(i=/min|max|step/.test(a)&&(null===t||/number|range|text/.test(t))&&(i=Number(i),isNaN(i))?void 0:i)||0===i?e[a]=i:t===a&&"range"!==t&&(e[a]=!0)},attributeRules:function(e){var t,a,i={},n=h(e),s=e.getAttribute("type");for(t in h.validator.methods)a="required"===t?(a=e.getAttribute(t),""===a&&(a=!0),!!a):n.attr(t),this.normalizeAttributeRule(i,s,t,a);return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var t,a,i={},n=h(e),s=e.getAttribute("type");for(t in h.validator.methods)a=n.data("rule"+t.charAt(0).toUpperCase()+t.substring(1).toLowerCase()),""===a&&(a=!0),this.normalizeAttributeRule(i,s,t,a);return i},staticRules:function(e){var t={},a=h.data(e.form,"validator");return t=a.settings.rules?h.validator.normalizeRule(a.settings.rules[e.name])||{}:t},normalizeRules:function(i,n){return h.each(i,function(e,t){if(!1===t)delete i[e];else if(t.param||t.depends){var a=!0;switch(typeof t.depends){case"string":a=!!h(t.depends,n.form).length;break;case"function":a=t.depends.call(n,n)}a?i[e]=void 0===t.param||t.param:(h.data(n.form,"validator").resetElements(h(n)),delete i[e])}}),h.each(i,function(e,t){i[e]="function"==typeof t&&"normalizer"!==e?t(n):t}),h.each(["minlength","maxlength"],function(){i[this]&&(i[this]=Number(i[this]))}),h.each(["rangelength","range"],function(){var e;i[this]&&(Array.isArray(i[this])?i[this]=[Number(i[this][0]),Number(i[this][1])]:"string"==typeof i[this]&&(e=i[this].replace(/[\[\]]/g,"").split(/[\s,]+/),i[this]=[Number(e[0]),Number(e[1])]))}),h.validator.autoCreateRanges&&(null!=i.min&&null!=i.max&&(i.range=[i.min,i.max],delete i.min,delete i.max),null!=i.minlength)&&null!=i.maxlength&&(i.rangelength=[i.minlength,i.maxlength],delete i.minlength,delete i.maxlength),i},normalizeRule:function(e){var t;return"string"==typeof e&&(t={},h.each(e.split(/\s/),function(){t[this]=!0}),e=t),e},addMethod:function(e,t,a){h.validator.methods[e]=t,h.validator.messages[e]=void 0!==a?a:h.validator.messages[e],t.length<3&&h.validator.addClassRules(e,h.validator.normalizeRule(e))},methods:{required:function(e,t,a){return this.depend(a,t)?"select"===t.nodeName.toLowerCase()?(a=h(t).val())&&0<a.length:this.checkable(t)?0<this.getLength(e,t):null!=e&&0<e.length:"dependency-mismatch"},email:function(e,t){return this.optional(t)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)},url:function(e,t){return this.optional(t)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)},date:(a=!1,function(e,t){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(t)||!/Invalid|NaN/.test(new Date(e).toString())}),dateISO:function(e,t){return this.optional(t)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)},number:function(e,t){return this.optional(t)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)},digits:function(e,t){return this.optional(t)||/^\d+$/.test(e)},minlength:function(e,t,a){e=Array.isArray(e)?e.length:this.getLength(e,t);return this.optional(t)||a<=e},maxlength:function(e,t,a){e=Array.isArray(e)?e.length:this.getLength(e,t);return this.optional(t)||e<=a},rangelength:function(e,t,a){e=Array.isArray(e)?e.length:this.getLength(e,t);return this.optional(t)||e>=a[0]&&e<=a[1]},min:function(e,t,a){return this.optional(t)||a<=e},max:function(e,t,a){return this.optional(t)||e<=a},range:function(e,t,a){return this.optional(t)||e>=a[0]&&e<=a[1]},step:function(e,t,a){function i(e){return(e=(""+e).match(/(?:\.(\d+))?$/))&&e[1]?e[1].length:0}function n(e){return Math.round(e*Math.pow(10,s))}var s,o=h(t).attr("type"),r="Step attribute on input type "+o+" is not supported.",l=new RegExp("\\b"+o+"\\b"),d=!0;if(o&&!l.test(["text","number","range"].join()))throw new Error(r);return s=i(a),(i(e)>s||n(e)%n(a)!=0)&&(d=!1),this.optional(t)||d},equalTo:function(e,t,a){a=h(a);return this.settings.onfocusout&&a.not(".validate-equalTo-blur").length&&a.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){h(t).valid()}),e===a.val()},remote:function(i,n,e,s){if(this.optional(n))return"dependency-mismatch";s="string"==typeof s&&s||"remote";var o,t,r=this.previousValue(n,s);return this.settings.messages[n.name]||(this.settings.messages[n.name]={}),r.originalMessage=r.originalMessage||this.settings.messages[n.name][s],this.settings.messages[n.name][s]=r.message,t=h.param(h.extend({data:i},(e="string"==typeof e?{url:e}:e).data)),r.old===t?r.valid:(r.old=t,(o=this).startRequest(n),(t={})[n.name]=i,h.ajax(h.extend(!0,{mode:"abort",port:"validate"+n.name,dataType:"json",data:t,context:o.currentForm,success:function(e){var t,a=!0===e||"true"===e;o.settings.messages[n.name][s]=r.originalMessage,a?(t=o.formSubmitted,o.resetInternals(),o.toHide=o.errorsFor(n),o.formSubmitted=t,o.successList.push(n),o.invalid[n.name]=!1,o.showErrors()):(t={},e=e||o.defaultMessage(n,{method:s,parameters:i}),t[n.name]=r.message=e,o.invalid[n.name]=!0,o.showErrors(t)),r.valid=a,o.stopRequest(n,a)}},e)),"pending")}}});var i,n={};return h.ajaxPrefilter?h.ajaxPrefilter(function(e,t,a){var i=e.port;"abort"===e.mode&&(n[i]&&n[i].abort(),n[i]=a)}):(i=h.ajax,h.ajax=function(e){var t=("mode"in e?e:h.ajaxSettings).mode,e=("port"in e?e:h.ajaxSettings).port;return"abort"===t?(n[e]&&n[e].abort(),n[e]=i.apply(this,arguments),n[e]):i.apply(this,arguments)}),h});let additionalSpecialChar=/^[a-zA-Z_0-9`~!\$\^()=\-\.\{\} ]+$/,specialChar=/^[a-zA-Z0-9-_\s]*$/;function onFontChange(){var e=document.getElementById("fontfamily").ej2_instances[0].value;document.getElementsByClassName("font-ref")[0].href=fontReferenceUrl+"?family="+e}function onApplicationThemeChange(){var e="Default"===(e=document.getElementById("application-theme").ej2_instances[0].value)?$("input:radio[name=appearance]:checked").val():e;document.getElementsByClassName("application-theme-ref")[0].href=applicationThemeReferenceUrl+"?theme="+e}function onChangeTheme(e){document.getElementById("application-theme").ej2_instances[0].text="Default";var t="lighttheme.css",a=document.getElementsByClassName("theme-ref"),i=lightThemeIntergrity;"dark"===e&&(t="darktheme.css",i=darkThemeIntergrity),a[0].integrity=i,a[0].href=baseRootUrl+"bundles/css/"+t,document.getElementsByClassName("application-theme-ref")[0].href=applicationThemeReferenceUrl+"?theme="+e}function onUploadFontDialogClose(){$("#upload-font, #font-name").attr("disabled",!0),$("#font-name").val(""),$('input[type="file"]').val(null),$("#font-file-name").val(window.Server.App.LocalizationContent.BrowseFont),$(".validation").closest("div").removeClass("has-error"),$(".validation-message").css("display","none"),document.getElementById("font-upload-dialog").ej2_instances[0].hide()}function onUploadFontDialogOpen(){document.getElementById("font-upload-dialog").ej2_instances[0].show()}function onUploadApplicationThemeDialogOpen(){document.getElementById("application-theme-upload-dialog").ej2_instances[0].show()}function onUploadDashboardThemeDialogOpen(){document.getElementById("dashboard-theme-upload-dialog").ej2_instances[0].show()}function onUploadApplicationThemeDialogClose(){$("#upload-applicationtheme").attr("disabled",!0),$("#applicationtheme-name").val(""),$('input[type="file"]').val(null),$("#application-theme-file-name").val(""),$("#applicationtheme-file").closest("div").removeClass("has-error"),$(".validation").closest("div").removeClass("has-error"),$(".validation-message").html(""),$("#upload-applicationtheme,#applicationtheme-name").attr("disabled","disabled"),document.getElementById("application-theme-upload-dialog").ej2_instances[0].hide()}function onUploadDashboardThemeDialogClose(){$("#upload-dashboardtheme").attr("disabled",!0),$("#dashboardtheme-name").val(""),$('input[type="file"]').val(null),$("#dashboard-theme-file-name").val(""),$("#dashboardtheme-file").closest("div").removeClass("has-error"),$(".validation").closest("div").removeClass("has-error"),$(".validation-messages").html(""),$("#upload-dashboardtheme, #dashboardtheme-name").attr("disabled","disabled"),document.getElementById("dashboard-theme-upload-dialog").ej2_instances[0].hide()}function keyvalidation(e){var t=$(e).val(),a="#applicationtheme-name"===e?"#invalid-applicationtheme-name":"#invalid-dashboardtheme-name",i=document.getElementById("#applicationtheme-name"===e?"application-theme":"dashboard-theme").ej2_instances[0].getItems();if($(".validation-message").html(""),$(".upload-theme").attr("disabled","disabled"),""!=t)if(specialChar.test(t))for(var n=0;n<i.length;n++){if(t.toLowerCase().trim()===i[n].dataset.value.toLowerCase()||"light"==t.toLowerCase().trim()||"dark"==t.toLowerCase().trim()){$(e).closest("div").addClass("has-error"),$(a).html(window.Server.App.LocalizationContent.CssFileExist),$(".upload-theme").attr("disabled","disabled");break}""==t.trim()?$(".upload-theme").attr("disabled",!0):($(e).closest("div").removeClass("has-error"),$(".validation-message").html(""),$(".upload-theme").removeAttr("disabled"))}else $(e).closest("div").addClass("has-error"),$(a).html(window.Server.App.LocalizationContent.FileNameInvalid),$(".upload-theme").attr("disabled","disabled");else $(".upload-theme").attr("disabled","disabled")}function keyvalidationfontname(){""==$("#font-name").val().trim()?$("#upload-font").attr("disabled","disabled"):specialChar.test($("#font-name").val())?$("#upload-font").removeAttr("disabled"):($("#font-name").closest("div").addClass("has-error"),$("#invalid-font-name").html(window.Server.App.LocalizationContent.FileNameInvalid),$("#upload-font").attr("disabled","disabled"))}function uploadformValidation(){return $(".upload-form").valid()}$(document).ready(function(){$(document).on("click","#uploadFontLink",onUploadFontDialogOpen),$(document).on("click","#cancel-font-upload",onUploadFontDialogClose),$(document).on("click","#cancel-applicationtheme-upload",onUploadApplicationThemeDialogClose),$(document).on("click","#woff-upload",onUploadApplicationThemeDialogOpen),$(document).on("click","#woff-dashboard-upload",onUploadDashboardThemeDialogOpen),$(document).on("click","#cancel-dashboardtheme-upload",onUploadDashboardThemeDialogClose);var e=$("#Upload-application-fileform"),e=(e.length&&e.on("submit",function(e){uploadformValidation()||e.preventDefault()}),$("#upload-dashboard-fileform")),e=(e.length&&e.on("submit",function(e){uploadformValidation()||e.preventDefault()}),$("#upload-font-fileform"));e.length&&e.on("submit",function(e){uploadformValidation()||e.preventDefault()}),addPlacehoder("#font-upload-dialog"),new ejs.popups.Dialog({header:window.Server.App.LocalizationContent.UploadFont,showCloseIcon:!0,width:"472px",close:onUploadFontDialogClose,isModal:!0,visible:!1,animationSettings:{effect:"Zoom"}}).appendTo("#font-upload-dialog"),dropDownListInitialization("#fontfamily",window.Server.App.LocalizationContent.LookAndFeel,!0),null!=document.getElementById("fontfamily")&&(document.getElementById("fontfamily").ej2_instances[0].value=selectedFontValue,document.getElementById("fontfamily").ej2_instances[0].text=selectedFontText),dropDownListInitialization("#application-theme",window.Server.App.LocalizationContent.ApplicationTheme,!0),dropDownListInitialization("#dashboard-theme",window.Server.App.LocalizationContent.DashboardTheme,!0),null!=document.getElementById("application-theme")&&null!=document.getElementById("dashboard-theme")?(document.getElementById("application-theme").ej2_instances[0].value=selectedApplicationThemeValue,document.getElementById("application-theme").ej2_instances[0].text=selectedApplicationThemeText,document.getElementById("dashboard-theme").ej2_instances[0].value=selectedDashboardThemeValue,document.getElementById("dashboard-theme").ej2_instances[0].text=selectedDashboardThemeText):$(".font-section").addClass("remove-section"),new ejs.popups.Dialog({header:window.Server.App.LocalizationContent.ApplicationTheme,showCloseIcon:!0,width:"472px",close:onUploadApplicationThemeDialogClose,isModal:!0,visible:!1,animationSettings:{effect:"Zoom"}}).appendTo("#application-theme-upload-dialog"),new ejs.popups.Dialog({header:window.Server.App.LocalizationContent.DashboardTheme,showCloseIcon:!0,width:"472px",close:onUploadDashboardThemeDialogClose,isModal:!0,visible:!1,animationSettings:{effect:"Zoom"}}).appendTo("#dashboard-theme-upload-dialog"),$.validator.addMethod("additionalSpecialCharValidation",function(e){if(specialChar.test(e)||""===e)return!0},window.Server.App.LocalizationContent.AvoidSpecailCharacters),$.validator.addMethod("isRequired",function(e){return!isEmptyOrWhitespace(e)},window.Server.App.LocalizationContent.EnterName),$(".upload-form").validate({errorElement:"span",onkeyup:function(e,t){9!=t.keyCode&&(isKeyUp=!0,$(e).valid(),isKeyUp=!1)},onfocusout:function(e){$(e).valid()},rules:{filename:{isRequired:!0}},highlight:function(e){$(e).closest("div").addClass("has-error")},unhighlight:function(e){$(e).closest("div").removeClass("has-error"),$(e).closest("div").hasClass("upload-box")||$(e).closest("div").find("span").html("")},errorPlacement:function(e,t){$(t).closest("div").find("span").html(e.html()).css("display","block")}}),$(document).on("click",".upload-box",function(e){$('input[type="file"]').val(null),e.target.classList.contains("trigger-font-upload")&&$("#font-file").trigger("click"),e.target.classList.contains("trigger-app-theme-upload")&&$("#applicationtheme-file").trigger("click"),e.target.classList.contains("trigger-dash-theme-upload")&&$("#dashboardtheme-file").trigger("click")}),$(document).on("click","#update-lookandfeel-settings",function(){var e=null,t=null,e={FontFamily:e=null!=document.getElementById("fontfamily")?document.getElementById("fontfamily").ej2_instances[0].value:e,Theme:t=null!=document.getElementById("application-theme")?{Appearance:$("input:radio[name=appearance]:checked").val(),ApplicationTheme:document.getElementById("application-theme").ej2_instances[0].value,DashboardTheme:document.getElementById("dashboard-theme").ej2_instances[0].value}:t};showWaitingPopup("body"),$.ajax({type:"POST",url:updateFontThemeSettingsUrl,data:{updateSettings:e},success:function(e){e.status?(SuccessAlert(window.Server.App.LocalizationContent.LookAndFeelSettings,window.Server.App.LocalizationContent.LookAndFeelSettingsSuccess,7e3),setTimeout(function(){window.location.href=window.location.href},3e3)):WarningAlert(window.Server.App.LocalizationContent.LookAndFeelSettings,window.Server.App.LocalizationContent.LookAndFeelSettingsFailure,e.Message,7e3),hideWaitingPopup("body")}})}),$(document).on("click","#upload-font",function(){showWaitingPopup("body")})}),$(document).on("change","#font-file",function(e){var e=e.target.files[0].name,t=e.substring(0,e.indexOf("."));$("#font-file-name").val(e),$("#font-name").val(t),$("#font-file-name").closest("div").removeClass("has-error"),$(".validation-message").html(""),$("#upload-font, #font-name").attr("disabled",!0);var a=document.getElementById("fontfamily").ej2_instances[0].getItems();if(specialChar.test(t)){$("#upload-font, #font-name").attr("disabled",!1);for(var i=0;i<a.length;i++)t===a[i].dataset.value.toLowerCase()?($(".validation").closest("div").addClass("has-error"),$(".validation-message").css("display","block").text(window.Server.App.LocalizationContent.CssFileExist),$("#upload-font, #font-name").attr("disabled",!0)):keyvalidationfontname()}else $("#font-file-name").closest("div").addClass("has-error"),$("#invalid-file-name").html(window.Server.App.LocalizationContent.FileNameInvalid),$("#upload-font, #font-name").attr("disabled","disabled")}),$(document).on("change","input[name='appearance']",function(e){onChangeTheme($("input:radio[name=appearance]:checked").val())}),$(document).on("change","#applicationtheme-file",function(e){var e=e.target.files[0].name,t=e.substring(0,e.indexOf("."));$("#application-theme-file-name").val(e),$("#upload-applicationtheme").attr("disabled","disabled"),$(".validation-message").html("");e=document.getElementById("applicationtheme-file").value;if(/(\.css)$/i.exec(e))if(specialChar.test(t)){var a=document.getElementById("application-theme").ej2_instances[0].getItems();$("#applicationtheme-file").closest("div").removeClass("has-error"),$(".validation-message").html(""),$("#upload-applicationtheme,#applicationtheme-name").removeAttr("disabled"),$("#applicationtheme-name").closest("div").removeClass("has-error"),$("#applicationtheme-name").val(t);for(var i=0;i<a.length;i++)t.toLowerCase()===a[i].dataset.value?($("#applicationtheme-name").closest("div").addClass("has-error"),$("#invalid-applicationtheme-name").html(window.Server.App.LocalizationContent.CssFileExist),$("#upload-applicationtheme").attr("disabled","disabled")):keyvalidation("#applicationtheme-name")}else $("#applicationtheme-file").closest("div").addClass("has-error"),$("#invalid-applicationthemefile-name").html(window.Server.App.LocalizationContent.FileNameInvalid),$("#upload-applicationtheme,#applicationtheme-name").attr("disabled","disabled");else $("#applicationtheme-file").closest("div").addClass("has-error"),$("#invalid-applicationthemefile-name").html(window.Server.App.LocalizationContent.CssFile),$("#upload-applicationtheme,#applicationtheme-name").attr("disabled","disabled")}),$(document).on("change","#dashboardtheme-file",function(e){var e=e.target.files[0].name,t=e.substring(0,e.indexOf("."));$("#dashboard-theme-file-name").val(e),$("#upload-dashboardtheme").attr("disabled","disabled");e=document.getElementById("dashboardtheme-file").value;if(/(\.css)$/i.exec(e))if(specialChar.test(t)){var a=document.getElementById("dashboard-theme").ej2_instances[0].getItems();$("#dashboardtheme-file").closest("div").removeClass("has-error"),$("#upload-dashboardtheme").removeAttr("disabled"),$("#dashboardtheme-name").removeAttr("disabled"),$("#dashboardtheme-name").closest("div").removeClass("has-error"),$(".validation-message").html(""),$("#dashboardtheme-name").val(t);for(var i=0;i<a.length;i++)t.toLowerCase()===a[i].dataset.value?($("#dashboardtheme-name").closest("div").addClass("has-error"),$("#invalid-dashboardtheme-name").html(window.Server.App.LocalizationContent.CssFileExist),$("#upload-dashboardtheme").attr("disabled","disabled")):keyvalidation("#dashboardtheme-name")}else $("#dashboardtheme-file").closest("div").addClass("has-error"),$("#invalid-dashboardthemefile-name").html(window.Server.App.LocalizationContent.FileNameInvalid),$("#upload-dashboardtheme, #dashboardtheme-name").attr("disabled","disabled");else $("#applicationtheme-name").closest("div").addClass("has-error"),$("#invalid-applicationtheme-name").html(window.Server.App.LocalizationContent.AvoidSpecailCharacters),$(".upload-theme").attr("disabled","disabled"),$(".validation-message").html("")}),$(document).on("keydown keyup","#applicationtheme-name",function(){keyvalidation("#applicationtheme-name")}),$(document).on("keydown keyup","#dashboardtheme-name",function(){keyvalidation("#dashboardtheme-name")}),$(document).on("keydown keyup","#font-name",function(){keyvalidationfontname()}),$(document).ready(function(){$(document).on("click","#cancel-settings",function(){window.location.href=window.location.href})});