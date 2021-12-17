# README

This README would normally document whatever steps are necessary to get the
application up and running.

- Ruby version
  Ruby 3.0.1 is using for this app

- System dependencies
  Javascript, nodejs

- Configuration
  install Ruby 3.0.1 using Ruby version manager (rvm) like this:
  rvm install 3.0.1
  rvm use 3.0.1

  Install Rails 6.1.4.1 like this:
  gem install rails -v=6.1.4.1

  Create a new Rails app with React and postgresql database via webpacker:
  rails new <appName> --webpack=react --database=postgresql

  bundle install // It helps to install the packages

- Database creation
  rails db:create

  create a model
  e.g rails g model <ModelName> <FieldsName>

- Database initialization
  Create a schema file
  rails db:migrate

  Import the data into table from seed file using below command
  rails db:seed

- Start the rails server using this command
  rails s
  Go to http://localhost:3000 to see the result:

- Deployment instructions
