module.exports = function(grunt) {
        // Configuração do projeto
        grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        // Tarefa para compilar o LESS
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
        },
    
        // Tarefa para comprimir o JavaScript
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
        });
    
        // Carregar os plugins que fornecem as tarefas
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-uglify');
    
        // Tarefa padrão que será executada ao rodar 'grunt' no terminal
        grunt.registerTask('default', ['less', 'uglify']);
    };
    