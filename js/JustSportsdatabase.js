var db;

function errorHandler(tx, error){
    console.error("SQL error: " + tx + " (" + error.code + ") -- " + error.message);
}

function successTransaction(){
    console.info("Success: Transaction is Successful");
}

var DB ={
    JSCreateDatabase: function(){
        var shortName = "justSports";
        var version = "1.0";
        var displayName = "DB for Just Sports Application";
        var dbSize = 2 * 1024 * 1024;

        console.info("Creating Database ....");
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);

        function dbCreateSuccess(){
            console.info("Success: Database creation successful");
        }
    },
    JSCreateTables: function(){
        function txFunction(tx) {
            var sql;
            var options = [];
            console.info("Dropping Table: sports");

            sql = "DROP TABLE IF EXISTS sports";
            tx.executeSql(sql, options, successCreate, errorHandler);

            console.info("Creating Table: sports");
            sql = "CREATE TABLE IF NOT EXISTS sports( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "sportName VARCHAR(20) NOT NULL);";
            tx.executeSql(sql, options, successCreate, errorHandler);

            console.info("Creating Table Row: soccer");
            sql = "INSERT INTO sports(sportName)" + "values('Soccer');";
            tx.executeSql(sql, options, successCreate, errorHandler);

            console.info("Creating Table Row: baseball");
            sql = "INSERT INTO sports(sportName)" + "values('Baseball');";
            tx.executeSql(sql, options, successCreate, errorHandler);

            console.info("Creating Table Row: football");
            sql = "INSERT INTO sports(sportName)" + "values('Flag Football');";
            tx.executeSql(sql, options, successCreate, errorHandler);

            console.info("Creating Table Row: volleyBall");
            sql = "INSERT INTO sports(sportName)" + "values('Volleyball');";
            tx.executeSql(sql, options, successCreate, errorHandler);

            console.info("Creating Table: player");
            sql = "CREATE TABLE IF NOT EXISTS player( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "fullName VARCHAR(30) NOT NULL," +
                "address VARCHAR(50) NOT NULL," +
                "phoneNumber VARCHAR(10) NOT NULL," +
                "city VARCHAR (20) NOT NULL," +
                "postalCode VARCHAR (6) NOT NULL," +
                "province VARCHAR (20) NOT NULL," +
                "country VARCHAR (20) NOT NULL," +
                "dateOfBirth DATE NOT NULL," +
                "medicalInformation VARCHAR (50)," +
				"sportCampID INTEGER NOT NULL," +
                "FOREIGN KEY(sportCampID) REFERENCES sports(id));";
            tx.executeSql(sql, options, successCreate, errorHandler);

            console.info("Creating Table: review");
            sql = "CREATE TABLE IF NOT EXISTS review( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "name VARCHAR(30) NOT NULL," +
                "review VARCHAR (100) NOT NULL," +
                "rating INTEGER);";

            tx.executeSql(sql, options, successCreate, errorHandler);
            function successCreate() {
                console.info("Success: table created successfully");
            }
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    JSdropTables: function(){
        function txFunction(tx){
            var options = [];
            var sql;

            console.info("Dropping table: player");
            sql = "DROP TABLE IF EXISTS player;";
            tx.executeSql(sql, options, NMsuccessDrop, errorHandler);

            console.info("Dropping table: review");
            sql = "DROP TABLE IF EXISTS review;";
            tx.executeSql(sql, options, NMsuccessDrop, errorHandler);

            console.info("Dropping table: sports");
            sql = "DROP TABLE IF EXISTS sports";
            tx.executeSql(sql, options, NMsuccessDrop, errorHandler);

            function NMsuccessDrop() {
                console.info("Success: dropping table successful");
            }
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
