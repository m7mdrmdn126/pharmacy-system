const db = require('../db/conn')

async function get_it(id) {
    const sqlQuery = `select problem_id , done FROM it_problems WHERE problem_id = ${id} `;
    try {
        const result = await db.executeQuery(sqlQuery);
        console.log(result)
        return result;
    } catch (error) {
        console.error('Error in web request: ', error);
    }
}

/* UPDATE staff
    SET f_name = :newFirstName, l_name = :newLastName, salary = :newSalary
    WHERE staff_id = :id */


    async function update_it(id , done) {
        const sqlQuery = `UPDATE it_problems
        SET done = ${done}
        WHERE staff_id = ${id}`;
        try {
            const result = await db.executeQuery(sqlQuery);
            console.log(result)
            return result;
        } catch (error) {
            console.error('Error in web request: ', error);
        }
    }




    async function del_it(id) {
        const sqlQuery = `DELETE FROM it_problems WHERE problem_id = ${id} `;
        try {
            const result = await db.executeQuery(sqlQuery);
            console.log(result)
            return result;
        } catch (error) {
            console.error('Error in web request: ', error);
        }
    }
    
    
    
    


module.exports = {get_it, update_it, del_it};


