/**
 * Created by Nmartin5895 on 3/29/2017.
 */

function JSshowPlayers(){
    function successSelectAll(tx,results){
        var html = "";

        for (var i = 0; i< results.rows.length; i++){
            var row = results.rows[i];
            console.info("id: " + row['id'] + "Full Name:" + row['fullName'] + "Date of Birth:" + row['dateOfBirth'] +
                "Sport:" + row['sportCampID']);

            html += "<li><a data-role='button' data-row-id=" + row['id'] +
                "href='#'>" +
                "<p>Name: " + row['fullName'] + "</p>" +
                "<p>Date of Birth: " + row['dateOfBirth'] + "</p>" +
                "<p>Sport Camp: " + row['sportCampID'] + "</a></li>"
        }
        var viewList = $("#JSseePlayerInfo");
        viewList = viewList.html(html);
        viewList.listview("refresh");
        $("#JSseePlayerInfo a").on("click", clickFunction);

        function clickFunction() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', "#JSSeePlayer");
        }
    }
    Feedback.JSselectAllPlayers(successSelectAll);
}

function JSshowPlayer(){
    var ID= localStorage.getItem("id");
    var options = [ID];
    Feedback.JSselectPlayer(options, successSelectOne);
    function successSelectOne(tx, results){
        var row = results.rows[0];
        console.info("id:" + row['id'] + "Full Name:" + row['fullName'] + "Address:" + row['address'] +
            "Phone Number:" + row['phoneNumber'] + "City:" + row['city'] +
            "Postal Code" + row['postalCode'] + "Province" + row['province'] + "Country" + row['country'] +
            "Date of Birth" + row['dateOfBirth'] + "medicalInformation:" + row['medicalInformation'] +
            "camp" + row['sportCampID']);
        $("#JSFullNameShow").val(row['fullName']);
        $("#JSAddressShow").val(row['address']);
        $("#JSPhoneNumberShow").val(row['phoneNumber']);
        $("#JSCityShow").val(row['city']);
        $("#JSPostalCodeShow").val(row['postalCode']);
        $("#JSProvinceShow").val(row['province']);
        $("#JSCountryShow").val(row['country']);
        $("#dobshow").val(row['dateOfBirth']);
        $("#JSmediacalShow").val(row['medicalInformation']);
        $("#JScampShow").val(row['sportCampID']);
    }
}
function JSshowreviews(){
    function successSelectAll(tx,results){
        var html = "";

        for (var i = 0; i< results.rows.length; i++){
            var row = results.rows[i];
            console.info("id:" + row['id'] + "name:" + row['name'] + "review:" + row['review'] +
                "rating:" + row['rating']);

            html += "<li><a data-role='button' data-row-id=" + row['id'] +
                "href='#'>" +
                "<p>Name: " + row['name'] + "</p>" +
                "<p>Review: " + row['review'] + "</p>" +
                "<p>Rating: " + row['rating'] + "</p>" + "</a></li>"
        }
        var viewList = $("#JSReviewList");
        viewList = viewList.html(html);
        viewList.listview("refresh");
        $("#JSReviewList a").on("click", clickFunction);

        function clickFunction() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', "#JSSeeReviews");
        }
    }
    Feedback.NMselectAllReview(successSelectAll);
}

function JSshowReview(){
    var ID= localStorage.getItem("id");
    var options = [ID];
    Feedback.NMselect(options, successSelectOne);
    function successSelectOne(tx, results){
        var row = results.rows[0];
        console.info("id:" + row['id'] + "name:" + row['name'] + "review:" + row['review'] +
            "rating:" + row['rating']);
        $("#JSreviewNameShow").val(row['name']);
        $("#JSCommentShow").val(row['review']);
        $("#JSRateShow").val(row['rating']);
    }
}

function JSupdatePlayer(){
    if (validate_playerForm()) {
        var id = localStorage.getItem("id");
        var fullName = $("#JSFullName").val();
        var address = $("#JSAddress").val();
        var phoneNumber = $("#JSPhoneNumber").val();
        var city = $("#JSCity").val();
        var postalCode = $("#JSPostalCode").val();
        var province = $("#JSProvince").val();
        var country = $("#JSCountry").val();
        var dateOfBirth = $("#DoB").val();
        var sportCampID = $("#JScamp").val();
        var medicalInformation = $("#JSmediacal");

        options = [fullName, address, phoneNumber, city, postalCode, province, country, dateOfBirth, medicalInformation, sportCampID];
    }
    else{
        console.error("Validation Failed");
    }
    Feedback.NMupdate();
    $(location).prop('href', "#JSPlayers");
}

function JSdeletePlayer(){
    var id = localStorage.getItem("id");
    var options = [id];
    Feedback.JSdelete(options);
    $(location).prop('href', "#JSPlayers");
}

function NMupdateTypesDropdown(){
    Feedback.NMselectAllType();
}

function JSaddPlayer(){
    if (validate_playerForm()){
        var options = [];
        var fullName = $("#JSFullName").val();
        var address = $("#JSAddress").val();
        var phoneNumber = $("#JSPhoneNumber").val();
        var city = $("#JSCity").val();
        var postalCode = $("#JSPostalCode").val();
        var province = $("#JSProvince").val();
        var country = $("#JSCountry").val();
        var dateOfBirth = $("#DoB").val();
        var sportCampID = $("#JScamp").val();
        var medicalInformation = $("#JSmediacal");

        options = [fullName, address, phoneNumber, city, postalCode, province, country, dateOfBirth, medicalInformation, sportCampID];

        Feedback.JSinsertPlayer(options);
    }
    else{
        console.error("Validation Failed");
    }
}

function JSaddReview(){
    if (validate_review()){
        var options = [];
        var name = $("#JSreviewName").val();
        var review = $("#JSComment").val();
        var rating = $("#JSRate").val();
        
        options = [name, review, rating];

        Feedback.JSinsertReview(options);
    }
    else{
        console.error("Validation Failed");
    }
}

function JSgetPlayers(){
	function successSelectAll(tx, results){
		var htmlCode = "";
		
		for (var i = 0; i < results.rows.length; i++){
			var row = results.rows[i];
			
			htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] +
                " href='#'>" +
                "<h3>Name: " + row['fullName'] + "</h3>" +
                "<p>Camp: " + row['sportCampID'] + "</p>" +
                "<p>Phone: " + row['phoneNumber'] + "</p>" +
                "</a></li>"
		}
	}
	
}

function JSClearDatabase(){
    var result = confirm("Do you really want to clear the database? All of the data will be lost");
    try{
        if (result){
            DB.JSdropTables();
            alert("Database has bee cleared");
        }
    }
    catch (e){
        alert(e);
    }
}