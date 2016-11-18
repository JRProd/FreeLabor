var config = {};

config.mysql_prod = {};
config.mysql_staging = {};
config.mysql_local = {};
config.cloudinary = {};

config.mysql_prod.user_name = "app_prod";
config.mysql_prod.password = "";

config.mysql_staging.user_name = "app_staging";
config.mysql_staging.password = "";

config.mysql_local.host = "localhost";
config.mysql_local.user_name = "app_dev";
config.mysql_local.password = "sunshine1";
config.mysql_local.schema = "freelabor";

//Cloudinary
config.cloudinary.cloud_name = "dyw3rk5j5";
config.cloudinary.key = "366922989149938";
config.cloudinary.secret = "rBvBvAnvSr_31OMZ82DywnoYcbA";

module.exports = config;
