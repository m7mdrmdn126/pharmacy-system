const db = require('../db/conn')

/*INSERT INTO RECORDS (RECORD_ID, RECORD_DATE, TOTAL, STAFF_ID, PATIENT_ID, PRODUCT_ID)
VALUES
  (1, TO_DATE('2024-01-01', 'YYYY-MM-DD'), 100, 1, 1, 1);*/

async function record(id, total, staff, patient , product) {
    const sqlQuery = `INSERT INTO RECORDS (RECORD_ID, RECORD_DATE, TOTAL, STAFF_ID, PATIENT_ID, PRODUCT_ID)
    VALUES
      (${id}, SYSDATE, ${total}, ${staff}, ${patient}, ${product}) `;

try {
    const result = await db.executeQuery(sqlQuery,  {autoCommit : true} );
    console.log(result);
    return result;
} catch (error) {
    console.error('Error in web request: ', error);
    throw error;
}
}



/*
UPDATE your_table_name
SET your_column_name = new_value
WHERE your_condition;
*/

async function update_amount(product) {
    const sqlQuery = `UPDATE PRODUCTS
    SET quantity = quantity - 1
    WHERE product_id = ${product} `;

try {
    const result = await db.executeQuery(sqlQuery,  {autoCommit : true} );
    console.log(result);
    return result;
} catch (error) {
    console.error('Error in web request: ', error);
    throw error;
}
}



async function get_name(product) {
    const sqlQuery = `select name from products WHERE product_id = ${product} `;

try {
    const result = await db.executeQuery(sqlQuery,  {autoCommit : true} );
    console.log(result);
    return result;
} catch (error) {
    console.error('Error in web request: ', error);
    throw error;
}
}



/*
async function get_amount(product) {
    const sqlQuery = `select amount from products WHERE product_id = ${product} `;

try {
    const result = await db.executeQuery(sqlQuery,  {autoCommit : true} );
    console.log(result);
    return result;
} catch (error) {
    console.error('Error in web request: ', error);
    throw error;
}
}
*/

async function get_price(product) {
    const sqlQuery = `select price from products WHERE product_id = ${product} `;

try {
    const result = await db.executeQuery(sqlQuery,  {autoCommit : true} );
    console.log(result);
    return result;
} catch (error) {
    console.error('Error in web request: ', error);
    throw error;
}
}




module.exports = {record , update_amount , get_price, get_name};


