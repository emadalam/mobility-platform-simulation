const envalid = require('envalid')
const {port, str, bool} = envalid

module.exports = envalid.cleanEnv(process.env, {
  NODE_ENV: str({
    default: 'development',
    choices: ['development', 'test', 'production'],
  }),
  PORT: port({default: 4000}),
  LOGGER_ENABLED: bool({
    default: true,
    devDefault: process.env.NODE_ENV !== 'test',
  }),
  DEPLOYMENT_ENV: str({
    default: 'development',
    choices: ['development', 'staging', 'production'],
  }),
  DB_CONNECTION_STRING: str({
    // this should not be committed as default
    // it should be injected as environment variables
    // committing the string for simplicity of development
    default:
      'mongodb+srv://simulation_user:simulation_pass@taxicluster-echcb.mongodb.net/mobility-platform-simulation?retryWrites=true',
  }),
})
