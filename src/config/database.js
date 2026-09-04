import { Sequelize } from "sequelize";
 
export const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

export const starBD = async () => {
    try {
         
        await sequelize.authenticate();
        await sequelize.sync({force: false})
        console.log("Se sincronizo y se conecto la BD!!!");
    } catch{
        console.log("X Error al intentar conectarse a la BD");
    }
}