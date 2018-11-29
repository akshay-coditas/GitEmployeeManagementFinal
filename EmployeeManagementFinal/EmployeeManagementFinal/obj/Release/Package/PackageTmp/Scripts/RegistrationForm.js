$(document).ready(function () {     

    var emailaddressregex = /^([A-Za-z0-9_\-\.])+[@]{1}([A-Za-z_\-\.])+[.]{1}([A-Za-z]{2,4})$/;
    var phonenumberregex = /^[+]{1}[0-9]{12}$/;

    $("#firstName").on('keypress', function (e) {
        var regex = /^[A-Za-z*.$ ]*$/;
        var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        if (regex.test(str)) {
            return true;
        }
        else {
            e.preventDefault();
            return false;
        }
    });

    $('#lastName').on('keypress', function (e) {
         var regex = /^[A-Za-z*.$ ]*$/;
         var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
         if (regex.test(str)) {
            return true;
         }
         else {
            e.preventDefault();
            return false;
         }   
    });    

    $("#phoneNumber").on('keypress', function (m) {
        var regex1 = /^[+\*\.\$]*[0-9\*\.\$]*$/;
        var str1 = String.fromCharCode(!m.charCode ? m.which : m.charCode);
        if (regex1.test(str1)) {
            return true;
        }
        else {
            m.preventDefault();
            return false;
        }
    });

    $("#UserId").focusout(function () {
        var loginuseridvalue = $("#UserId").val();
        if (loginuseridvalue === "" || !emailaddressregex.test(loginuseridvalue)) {
            $("#UserId").css("border-color", "red");
        }
        else {
            $("#UserId").css("border-color", "black");
        }    
    });

    $("#UserPassword").focusout(function () {
        var loginuserpasswordvalue = $("#UserPassword").val();  
        if (loginuserpasswordvalue === "") {
            $("#UserPassword").css("border-color", "red");
        }
        else {
            $("#UserPassword").css("border-color", "black");
        }
    });

    $("#firstName").focusout(function () {
        var textboxfirstnamevalue = $("#firstName").val();
        if (textboxfirstnamevalue === "") {
            $("#firstName").css("border-color", "red");
        }
        else {
            $("#firstName").css("border-color", "black");
        }
    });

    $("#lastName").focusout(function () {
        var textboxlastnamevalue = $("#lastName").val();
        if (textboxlastnamevalue === "") {
            $("#lastName").css("border-color", "red");
        }
        else {
            $("#lastName").css("border-color", "black");
        }
    });

    $("#dateOfBirth").focusout(function () {
        var datepickerboxvalue = $("#dateOfBirth").val();
        if (datepickerboxvalue === "") {
            $("#dateOfBirth").css("border-color", "red");
        }
        else {
            $("#dateOfBirth").css("border-color", "black");
        }
    });

    $("#emailAddress").focusout(function () {
        var textboxemailaddressvalue = $("#emailAddress").val();
        
        if (textboxemailaddressvalue === "" || !emailaddressregex.test(textboxemailaddressvalue)) {
            $("#emailAddress").css("border-color", "red");
        }
        else {
            $("#emailAddress").css("border-color", "black");
        }
    });

    $("#phoneNumber").focusout(function () {
        var textboxphonenumbervalue = $("#phoneNumber").val(); 
        
        if (textboxphonenumbervalue === "" || !phonenumberregex.test(textboxphonenumbervalue)) {
            $("#phoneNumber").css("border-color", "red");
        }
        else {
            $("#phoneNumber").css("border-color", "black");
        }
    });

    $("#textAreaAddress").focusout(function () {
        var textareaaddressvalue = $("#textAreaAddress").val();
        if (textareaaddressvalue === "") {
            $("#textAreaAddress").css("border-color", "red");
        }
        else {
            $("#textAreaAddress").css("border-color", "black");
        }
    });

    $("#loginId").focusout(function () {
        var textuseridvalue = $("#loginId").val();
        if (textuseridvalue === "" || !emailaddressregex.test(textuseridvalue)) {
            $("#loginId").css("border-color", "red");
        }
        else {
            $("#loginId").css("border-color", "black");
        }
    });

    $("#loginPassWord").focusout(function () {
        var textuserpasswordvalue = $("#loginPassWord").val();
        if (textuserpasswordvalue === "") {
            $("#loginPassWord").css("border-color", "red");
        }
        else {
            $("#loginPassWord").css("border-color", "black");
        }
    });    

    $("#loginConfirmPassword").focusout(function () {
        var textuserpasswordvalue = $("#loginPassWord").val();
        var textuserconfirmpasswordvalue = $("#loginConfirmPassword").val();
        if (textuserconfirmpasswordvalue === "" || textuserpasswordvalue !== textuserconfirmpasswordvalue) {
            $("#loginConfirmPassword").css("border-color", "red");
        }
        else {
            $("#loginConfirmPassword").css("border-color", "black");
        }
    });

    $("#btnsubmit").click(function (btnclick) { 

        var textboxfirstnamevalue = $("#firstName").val();
        var textboxlastnamevalue = $("#lastName").val();
        var datepickerboxvalue = $("#dateOfBirth").val();
        var textboxemailaddressvalue = $("#emailAddress").val();
        var textboxphonenumbervalue = $("#phoneNumber").val();
        var textareaaddressvalue = $("#textAreaAddress").val();
        var gendermalechecked = $("#radioBtnGenderMale").prop('checked');
        var genderfemalechecked = $("#radioBtnGenderFemale").prop('checked');
        var genderotherchecked = $("#radioBtnGenderOther").prop('checked');
        var textuseridvalue = $("#loginId").val();
        var textuserpasswordvalue = $("#loginPassWord").val();
        var textuserconfirmpasswordvalue = $("#loginConfirmPassword").val();      

        if (textboxfirstnamevalue !== "")
        {
            $("#firstName").css("border-color", "black");
        }
        else {
            btnclick.preventDefault();
            $("#firstName").css("border-color", "red");
        }

        if (textboxlastnamevalue !== "") {
            $("#lastName").css("border-color", "black");
        }
        else {
            btnclick.preventDefault();
            $("#lastName").css("border-color", "red");
        }

        if (datepickerboxvalue !== "") {
            $("#dateOfBirth").css("border-color", "black");
        }
        else {
            btnclick.preventDefault();
            $("#dateOfBirth").css("border-color", "red");
        }

        if (textboxemailaddressvalue !== "" && emailaddressregex.test(textboxemailaddressvalue)) {
            $("#emailAddress").css("border-color", "black");
        }
        else {
            btnclick.preventDefault();
            $("#emailAddress").css("border-color", "red");
        }

        if (textboxphonenumbervalue !== "" && phonenumberregex.test(textboxphonenumbervalue)) {
            $("#phoneNumber").css("border-color", "black");
        }
        else {
            btnclick.preventDefault();
            $("#phoneNumber").css("border-color", "red");
        }

        if (textareaaddressvalue !== "") {
            $("#textAreaAddress").css("border-color", "black");
        }
        else {
            btnclick.preventDefault();
            $("#textAreaAddress").css("border-color", "red");
        }

        if (!gendermalechecked && !genderfemalechecked && !genderotherchecked) {
            btnclick.preventDefault();
        }        

        if (textuseridvalue !== "" && emailaddressregex.test(textuseridvalue)) {
            $("#loginId").css("border-color", "black");
        }
        else {
            btnclick.preventDefault();
            $("#loginId").css("border-color", "red");
        }

        if (textuserpasswordvalue !== "") {
            $("#loginPassWord").css("border-color", "black");
        }
        else {
            btnclick.preventDefault();
            $("#loginPassWord").css("border-color", "red");
        }

        if (textuserconfirmpasswordvalue !== "" && textuserpasswordvalue === textuserconfirmpasswordvalue) {
            $("#loginConfirmPassword").css("border-color", "black");
        }
        else {
            btnclick.preventDefault();
            $("#loginConfirmPassword").css("border-color", "red");
        }

        //if (textboxfirstnamevalue !== "" && textboxlastnamevalue !== "" && datepickerboxvalue !== "" && textboxemailaddressvalue !== "" && textboxphonenumbervalue !== "" && textareaaddressvalue !== "" && textareaaddressvalue !== "" && textuseridvalue !== "" && textuserpasswordvalue !== "" && textuserconfirmpasswordvalue !== "") {

        //    $(".pop-up").css("display", "block");
        //}

        //if ($('.pop-up').css('display') === 'block') {
        //    $('.pop-up').fadeOut(3500);
        //}
    });

    $("#btnLogin").click(function (btnLoginClick) {

        var loginuseridvalue = $("#UserId").val();
        var loginuserpasswordvalue = $("#UserPassword").val();  
     
        if (loginuseridvalue === "" || !emailaddressregex.test(loginuseridvalue)) {
            btnLoginClick.preventDefault();
            $("#UserId").css("border-color", "red");
        }
        else {
            $("#UserId").css("border-color", "black");
        }

        if (loginuserpasswordvalue === "" ) {
            btnLoginClick.preventDefault();
            $("#UserPassword").css("border-color", "red");
        }
        else {
            $("#UserPassword").css("border-color", "black");
        }

    });
        

});


//    //commented*
//            //var emailaddressregexonsubmit = /^([A-Za-z0-9_\-\.])+[@]{1}([A-Za-z_\-\.])+[.]{1}([A-Za-z]{2,4})$/;

//            //if (!emailaddressregexonsubmit.test(textboxemailaddressvalue) && textboxemailaddressvalue == "") {
//            //    $("#emailAddress").css("border-color", "red");
//            //}
//            //else {
//            //    $("#emailAddress").css("border-color", "black");
//            //}

//            // var dateval=$("#dt").val();
//            // if(dateval=="")
//            // {
//            // 	$("#dt").css("border-color","red");
//            // }
//            // else
//            // {
//            // $("#dt").css("border-color","black");
//            // }
//            //});
//            //$("#close").click(function () {
//            //    $("#modal").css("display", "none");
//            //});
//    //*commented

//        $("#btnsubmit").click(function () {

//            var textboxfirstnamevalue = $("#firstName").val();
//            var textboxlastnamevalue = $("#lastName").val();
//            var datepickerboxvalue = $("#dateOfBirth").val();
//            var textboxemailaddressvalue = $("#emailAddress").val();
//            var textboxphonenumbervalue = $("#phoneNumber").val();
//            var textareaaddressvalue = $("#textAreaAddress").val();
//            var gendermalechecked = $("#radioBtnGenderMale").prop('checked');
//            var genderfemalechecked = $("#radioBtnGenderFemale").prop('checked');
//            var genderotherchecked = $("#radioBtnGenderOther").prop('checked');

//            var firstnameregexonsubmit = /^[A-Za-z]{2,20}$/;
//            var lastnameregexonsubmit = /^[A-Za-z]{3,20}$/;
//            var emailaddressregexonsubmit = /^([A-Za-z0-9_\-\.])+[@]{1}([A-Za-z_\-\.])+[.]{1}([A-Za-z]{2,4})$/;
//            var phonenumberregexonsubmit = /^[0-9]{10}$/;

//            if (textboxfirstnamevalue != "" && textboxlastnamevalue != "" && datepickerboxvalue != "" && textboxemailaddressvalue != "" && textboxphonenumbervalue != "" && (gendermalechecked || genderfemalechecked || genderotherchecked)) {

//                if (phonenumberregexonsubmit.test(textboxphonenumbervalue) && emailaddressregexonsubmit.test(textboxemailaddressvalue) && firstnameregexonsubmit.test(textboxfirstnamevalue) && lastnameregexonsubmit.test(textboxlastnamevalue)) {
//                    $("#modal").css("display", "block");
//                }
//                //commented*
//                //else {
//                //    if (phone1pat.test(t5) == false) {
//                //        $("#phone1lbl").text("your number should be 10 digit");
//                //    }


//                //    if (firstnameregexonsubmit.test(textboxfirstnamevalue) ) {
//                //        $("#firstName").css("border-color", "black");

//                //    }
//                //    else {
//                //        $("#firstName").css("border-color", "red");                    
//                //    }

//                //    if (lastnameregexonsubmit.test(t2) == false) {

//                //        $("#lname").css("border-color", "red");
//                //    }
//                //    else {

//                //        $("#lname").css("border-color", "black");
//                //    }

//                //    if (emailpat.test(t4) == false) {
//                //        $("#emailcheck").css("border-color", "red");
//                //    }
//                //}
//            }
//            //var firstnameregexonsubmit = /^[A-Za-z]{3,10}$/;
//            //var textboxfirstnamevalue = $("#FirstName").val();

//            //*commented
//            if (textboxfirstnamevalue == "") {
//                $("#firstName").css("border-color", "red");
//            }
//            else {
//                if (!firstnameregexonsubmit.test(textboxfirstnamevalue)) {
//                    $("#firstName").css("border-color", "red");
//                }
//                else {
//                    $("#firstName").css("border-color", "black");
//                }
//            }

//            if (textboxlastnamevalue == "") {
//                $("#lastName").css("border-color", "red");
//            }
//            else {
//                if (!lastnameregexonsubmit.test(textboxlastnamevalue)) {
//                    $("#lastName").css("border-color", "red");
//                }
//                else {
//                    $("#lastName").css("border-color", "black");
//                }
//            }

//            if (datepickerboxvalue == "") {
//                $("#dateOfBirth").css("border-color", "red");
//            }
//            else {
//                $("#dateOfBirth").css("border-color", "black");
//            }

//            if (textboxphonenumbervalue == "") {
//                $("#phoneNumber").css("border-color", "red");
//            }
//            else {
//                if (phonenumberregexonsubmit.test(textboxphonenumbervalue)) {
//                    $("#phoneNumber").css("border-color", "black");
//                }
//                else {
//                    $("#phoneNumber").css("border-color", "red");
//                }
//            }

//            if (textareaaddressvalue == "") {
//                $("#textAreaAddress").css("border-color", "red");
//            }
//            else {
//                $("#textAreaAddress").css("border-color", "black");
//            }

//            if (textboxemailaddressvalue == "") {
//                $("#emailAddress").css("border-color", "red");
//            }
//            else {
//                if (!emailaddressregexonsubmit.test(textboxemailaddressvalue)) {
//                    $("#emailAddress").css("border-color", "red");
//                }
//                else {

//                    $("#emailAddress").css("border-color", "black");
//                }
//            }

//            if (!gendermalechecked && !genderfemalechecked && !genderotherchecked) {
//                $("#errorspan").text("select gender");
//            }
//            else {
//                $("#errorspan").css("visibility", "hidden");
//            }
//        });
