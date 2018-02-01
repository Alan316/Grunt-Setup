module.exports = {
    // Production settings
    prod: {
        options: { pretty: true },
        files: [{
            expand: true,
            cwd: 'src/pug',
            src: ['*.pug'],
            dest: 'dist/html',
            ext: '.html'
        }]
    }
};