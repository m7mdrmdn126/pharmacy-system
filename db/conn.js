// db function excutes every query

const oracledb = require('oracledb');

const dbConfig = {
    user: 'pharmacy',
    password: 'hr',
    connectString: 'localhost:1521/xe'
};

async function executeQuery(query) {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        const result = await connection.execute(query);
        await connection.commit()
        return result.rows;

    } catch (err) {
        console.error('Error: ', err);
        throw err;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection: ', err);
            }
        }
    }
}

module.exports = {
    executeQuery
};
