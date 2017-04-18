
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("jumbotron").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("jumbotron").style.marginLeft = "0";
}

/****VALIDATION BELOW****/

/**this function is credited to https://jsfiddle.net/trixta/T29Kx/ */

(function () {
    webshim.setOptions('forms', {
        lazyCustomMessages: true,
        iVal: {
            sel: '.ws-validate',
            handleBubble: 'hide', // hide error bubble

            //add bootstrap specific classes
            errorMessageClass: 'help-block',
            successWrapperClass: 'has-success',
            errorWrapperClass: 'has-error',

            //add config to find right wrapper
            fieldWrapper: '.form-group'
        }
    });

    //load forms polyfill + iVal feature
    webshim.polyfill('forms');
})();


///*validate passwords to match***//
///****this function was created by Emily J******///
function matchpass() {
    var firstpass = document.f1.password1.value;
    var secondpass = document.f1.password2.value;
    
    if(firstpass == secondpass && firstpass.length>6) {
        return true;
    }if(firstpass.length<6 && secondpass.length<6){
        alert("password must be at least 6 chars");
        return false;
        
    }else{
        alert("Be sure to check your passwords. They do not match.");
        return false;
    }

}


