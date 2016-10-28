var config = {};

config.mysql_prod = {};
config.mysql_staging = {};
config.mysql_local = {};

config.mysql_prod.user_name = "app_prod";
config.mysql_prod.password = "";

config.mysql_staging.user_name = "app_staging";
config.mysql_staging.password = "";

config.mysql_local.user_name = "app_dev"
config.mysql_local.password = "sunshine1"

module.exports = config;
