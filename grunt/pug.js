module.exports = {
    // Production settings
    prod: {
        files: [{
            expand: true,
            cwd: 'src/pug',
            src: ['*.pug'],
            dest: 'dist/html',
            ext: '.html'
        }]
    }
};