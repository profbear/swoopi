# swoopi
swoopi = SWAPI + loopback

# swapi
datasource
service

Usage:
  lb4 app [<name>] [options]

Options:
  -h,   --help             # Print the generator's options and usage
        --skip-cache       # Do not remember prompt answers                                Default: false
        --skip-install     # Do not automatically install dependencies                     Default: false
        --force-install    # Fail on install dependencies error                            Default: false
        --applicationName  # Application class name
        --repositories     # Include repository imports and RepositoryMixin
        --services         # Include service-proxy imports and ServiceMixin
        --description      # Description for the application
        --outdir           # Project root directory for the application
        --tslint           # Enable tslint
        --prettier         # Enable prettier
        --mocha            # Enable mocha
        --loopbackBuild    # Use @loopback/build
        --vscode           # Use preconfigured VSCode settings
        --private          # Mark the project private (excluded from npm publish)
  -c,   --config           # JSON file name or value to configure options
  -y,   --yes              # Skip all confirmation prompts with default or provided value
        --format           # Format generated code using npm run lint:fix

Arguments:
  name  # Project name for the application  Type: String  Required: false

Available commands:
  lb4 app
  lb4 extension
  lb4 controller
  lb4 datasource
  lb4 model
  lb4 repository
  lb4 service
  lb4 example
  lb4 openapi
