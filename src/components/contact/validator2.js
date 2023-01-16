// Đối tượng validator
export default function Validator(options) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }


    var selectorRules = {};
    
    // hàm thực hiện validate 
    function validate(inputE, rule) {
        var errorE = getParent(inputE, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage;
        
        //Lấy ra các rule của selector
        var rules = selectorRules[rule.selector];

        //Lặp qua từng rule và kiểm tra
        //nếu có lỗi thì dừng ktra
        for(var i=0; i<rules.length; i++) {
            switch (inputE.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formE.querySelector(rule.selector + ':checked')
                    );

                    break;
                default:
                    errorMessage = rules[i](inputE.value);
            }
            if (errorMessage) break;
        }

        if(errorMessage) {
            errorE.innerText = errorMessage;
            getParent(inputE, options.formGroupSelector).classList.add('valid')
        } else {
            errorE.innerText = '';
            getParent(inputE, options.formGroupSelector).classList.remove('valid')
        }

        //trả về giá trị true false cho hàm validate
        return !errorMessage;
    }
    
    // lấy Element của form cần validate
    var formE = document.querySelector(options.form);
    if (formE) {
        formE.onsubmit = function(e) {
            e.preventDefault(); 

            var isFormValid = true;
             // lặp qua từng rule và validate
            options.rules.forEach(function(rule) {
                var inputE = formE.querySelector(rule.selector);
                var isValid = validate(inputE, rule);
                if(!isValid) {
                    isFormValid = false;
                }
            });   

            if(isFormValid) {
                //Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {

                    var EnableInput = formE.querySelectorAll('[name]:not([disable])');

                    var formValue = Array.from(EnableInput).reduce(function(values, input) {
                        
                        switch(input.type) {
                            case 'radio':
                                values[input.name] = formE.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;    
                            case 'checkbox':
                                if(input.matches(':checked')) {
                                    values[input.name] = [];
                                    return values;
                                }
                                if(!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                } 
                                values[input.name].push(input.value)
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});
                    options.onSubmit(formValue);

                //trường hợp submit với hành vi mặc định
                } else {
                    formE.submit();
                }
            }
        }

       

        // xử lý lặp qua  mỗi rule (lắng nghe sự kiện )
        options.rules.forEach(function(rule) {

            // Lưu lại các rule cho mỗi input
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            


            var inputEs = formE.querySelectorAll(rule.selector);

            Array.from(inputEs).forEach(function(inputE) {
                inputE.onblur = function () {
                    validate(inputE, rule)
                }

                // Xử lý trường hợp đang nhập input
                inputE.oninput = function() {
                    var errorE = getParent(inputE, options.formGroupSelector).querySelector(options.errorSelector)
                    errorE.innerText = '';
                    getParent(inputE, options.formGroupSelector).classList.remove('valid')
                }
            })

            
        });
        
    }
}

//Định nghĩa các rules
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    };
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự `;
        }
    };
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector ,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}