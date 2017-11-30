function JSClicksports(){
    $(location).prop('href', "#JSSports");
}

function JSclearDatabase(){
    JSClearDatabase();
}

function JSsaveDefault(){
    var email = $("#JSemail").val();
    localStorage.setItem("DefaultEmail", email);
    alert("The default email has been added to the local storage");
}

//function JSgetPlayers() {
//    $(location).prop('href', "#JSPlayers");
//}

function JSgoBack(){
    $(location).prop('href', "#JSReviews");
}

function JSUpdate(){
    JSupdatePlayer();
}

function JSDeletes(){
    JSdeletePlayer();
}

function JSsignUpPlayer(){
    JSaddPlayer();
}

function JSgoBackAbout(){
    $(location).prop('href', "#JSAbout");
}

function JSbackReview(){
    $(location).prop('href', "#JSReviews");
}

function JSsubmit(){
	JSaddReview();
}

function initDB(){
    console.info("Creating database...");
    try{
        DB.JSCreateDatabase();
        if (db) {
            console.info("Creating tables ...");
            DB.JSCreateTables();
        }
    } catch(e){
        console.error("Error: (Fatal) Error in initDB, can not proceed");
    }
}

function init(){
    $("#JStoSports").on("click", JSClicksports);
    $("#JSClearDatabase").on("click", JSclearDatabase);
    $("#JSsaveDefaults").on("click", JSsaveDefault);
    //$("#JSgetList").on("click", JSgetPlayers);
    $("#JSBack"). on("click", JSgoBack);
    $("#JSupdate"). on("click", JSUpdate);
    $("#JSDelete"). on("click", JSDeletes);
    $("#JSSignUp"). on("click", JSsignUpPlayer);
    $("#JSbackAbout").on("click", JSgoBackAbout);
    $("#JSBackReview").on("click", JSbackReview);
	$("#JSSubmit").on("click", JSsubmit);
	$(document).on("pageshow","#JSPlayers",function(){
	JSgetPlayers();
	});
}

$(document).ready(function () {
    initDB();
    init();
});
