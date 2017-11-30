var Feedback ={
    JSinsertPlayer: function (options){
        function txFuntion(tx) {
            var sql ="INSERT INTO player(fullName, address, phoneNumber, city, postalCode, province, country, dateOfBirth, medicalInformation, sportCampID) " + "values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
            function NMsuccessInsert(){
                console.info("Success: Inserted Successfully");
                alert("New record has been added");
            }
            tx.executeSql(sql, options, NMsuccessInsert, errorHandler);
        }
        db.transaction(txFuntion, errorHandler, successTransaction);
    },

    JSinsertReview: function (options){
        function txFuntion(tx) {
            var sql ="INSERT INTO review(name, review, rating) " + "values(?, ?, ?);";

            function NMsuccessInsert(){
                console.info("Success: Inserted Successfully");
                alert("New record has been added");
            }
            tx.executeSql(sql, options, NMsuccessInsert, errorHandler);
        }
        db.transaction(txFuntion, errorHandler, successTransaction);
    },

    JSselectPlayer: function (options, successSelectOne){
        function txFunction(tx){

            var sql = "SELECT * FROM player WHERE id=?;";

            tx.executeSql(sql, options, successSelectOne, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    JSselectAllPlayers: function (successSelectAll){
        function txFunction(tx) {
            var sql = "SELECT * FROM player;";
            var options = [];

            tx.executeSql(sql, options, successSelectAll, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    JSselectReview: function (options, successSelectOne){
        function txFunction(tx){

            var sql = "SELECT * FROM review WHERE id=?;";

            tx.executeSql(sql, options, successSelectOne, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },

    JSselectAllReview: function (successSelectAll){
        function txFunction(tx) {
            var sql = "SELECT * FROM type;";
            var options = [];
            tx.executeSql(sql, options, successSelectAll, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    JSupdate: function (options){
        function txFunction(tx){
            var sql = "UPDATE player " + "SET fullName=?, address=?, phoneNumber=?, city=?, postalCode=?, province=?, country=?, dateOfBirth=?, medicalInformation=?, sportCampID=? WHERE id=?";

            function successUpdate(){
                console.info("Success: Update successful");
                alert("Record has been updated successfully");
            }
            tx.executeSql(sql, options, successUpdate, errorHandler);
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    JSdelete: function (id) {
        function txFunction(tx) {
            var sql = "DELETE FROM player WHERE id=?;";

            function successDelete() {
                console.info("Success: Delete successful");
                alert("Record was deleted successfully");
            }

            tx.executeSql(sql, options, successDelete, errorHandler);
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};