# BileMo API- Yohann Durand 

Welcome to Symfony BileMo by Yohann Durand !

This project is a student project for openclassrooms,
This website is a open-source with a Symfony architecture.

The bilemo API is a platform capable of managing B2B sales logistics for smartphones.

## Technology 

This architecture proposes a reutilisable code and easy to maintain. It also provides good practice like MVC layout and object oriented

The bilemo application works with the symfony framework.
API resources are available via API platform To have a standard on the Richardson model and for standardization.
The demonstration side is built with javascript and the React.js framework.

- Symfony
- Webpack Encore
- React.js
- API Platform
- Docker ( configure your environment)
- Ansible ( deploy with ansible folder)

### Use this project 

-  clone this project on your environment 
-  configure your variable environment
-  run `composer install`
-  run `yarn install`
-  run `php bin/console d:d:c`
-  run `php bin/console d:m:m`
-  run `php bin/console d:f:l`

-  You can run this project with docker containers ( docker-compose included in this repository )

##### For Docker run :
run this project with docker containers (docker-compose included in this repository )
```
docker-compose up -d
```
## Deployment

##### For Ansible, create your ansible/hosts.ini and ansible/templates/.env and run:
```
ansible-playbook ansible/playbook.yml -i ansible/hosts.ini --ask-vault-pass
```

##### This website is available in "yohanndurand.fr" 

## Testing 
For generate a coverage-html
```
php bin/phpunit --coverage-html public/data 
```
Testing Symfony Website
```
php bin/phpunit
```

If you use the project on a local server, 
Please check if your server is configured to send mail.

if you want to modify this project,
the following links you may be useful

1. https://symfony.com/doc/current/index.html#gsc.tab=0
2. https://api-platform.com/
3. https://www.docker.com/
4. https://docs.ansible.com/ansible/latest/index.html

## Other information 

The graphical data model is accessible in the SQL file. You can also find the UML shema in the respective file
License : Free

Standard :
1. PSR2 ( https://www.php-fig.org/psr/psr-2/ )






