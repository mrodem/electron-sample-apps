const Application = require('spectron').Application;
const path = require('path');

const projectPath = path.join(__dirname, '..');
const app = new Application({
    path: path.join(projectPath, 'node_modules', '.bin', 'electron'),
    args: [projectPath],
});

app.start()
    .then(() => app.client.windowByIndex(0).click('a=About'))
    .then(() => app.client.waitUntilWindowLoaded())
    .then(() => app.client.windowByIndex(1).browserWindow.getTitle())
    .then(title => {
        console.log(title);
        return app.stop();
    });
