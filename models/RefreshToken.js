
module.exports = (sequelize,DataType) => {
    const RefreshToken = sequelize.define('RefreshToken',{
        id: {
            type: DataType.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        token: {
            type: DataType.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        createdAt: {
            field: 'created_at',
            type: DataType.DATE,
            allowNull: false,
        },
        updatedAt: {
            field: 'updated_at',
            type: DataType.DATE,
            allowNull: false,
        }
    },
    {
        tableName: 'refresh_tokens',
        timestamps: true
    });

    return RefreshToken;
}