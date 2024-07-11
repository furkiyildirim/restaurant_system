const fs = require('fs');

const database_path = "C:\\Users\\Furkan\\Desktop\\Projects\\restaurant_system\\src\\model\\database.json"
// database class
const database = {
    /**
     * Reads data from the database JSON file and parses it.
     *
     * @return {Object} Parsed data from the database JSON file.
     */
    readData:() => {
        return JSON.parse(fs.readFileSync(database_path));
    },
    /**
     * Adds an order to the database.
     *
     * @param {Object} data - The order data to be added.
     * @return {Object} An object indicating the success of the operation.
     */
    addOrder: (data) => {
        try{
            const database_data = database.readData();
            database_data.orders.push(data);
            fs.writeFileSync(database_path, JSON.stringify(data));
            return {
                success: true
            }
        }
        catch(err){
            return {
                success: false
            }
        }
    },
    remove: (data) => {
        console.log(data);
    }
}

console.log(database.readData());
module.exports = database;

