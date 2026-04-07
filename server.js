#!/usr/bin/env node

const http = require('http');
const { exec, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 8080;

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
        const filePath = path.join(__dirname, 'ffconfigmaker.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading HTML');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
        return;
    }

    if (req.method === 'POST' && req.url === '/api/fastfetch') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const { config } = JSON.parse(body);
                
                const tmpDir = os.tmpdir();
                const configPath = path.join(tmpDir, `ffconfig-${Date.now()}.json`);
                fs.writeFileSync(configPath, config);

                const child = spawn('fastfetch', ['--config', configPath], {
                    shell: true,
                    env: { ...process.env, TERM: 'xterm-256color' }
                });

                let output = '';
                let errorOutput = '';

                child.stdout.on('data', (data) => {
                    output += data.toString();
                });

                child.stderr.on('data', (data) => {
                    errorOutput += data.toString();
                });

                child.on('close', (code) => {
                    fs.unlinkSync(configPath);
                    
                    let result = output;
                    if (errorOutput) {
                        result += '\n\n[STDERR]\n' + errorOutput;
                    }
                    
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(result);
                });

                child.on('error', (err) => {
                    fs.unlinkSync(configPath);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end(`Error running fastfetch: ${err.message}`);
                });

            } catch (e) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end(`Error: ${e.message}`);
            }
        });
        return;
    }

    if (req.url === '/api/list-logos') {
        exec('fastfetch --list-logos', (err, stdout) => {
            if (err) {
                res.writeHead(500);
                res.end('Error listing logos');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(stdout);
        });
        return;
    }

    if (req.url === '/api/list-presets') {
        exec('fastfetch --list-presets', (err, stdout) => {
            if (err) {
                res.writeHead(500);
                res.end('Error listing presets');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(stdout);
        });
        return;
    }

    res.writeHead(404);
    res.end('Not Found');
});

server.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════════════╗
║           Fastfetch Config Maker Server                    ║
╠══════════════════════════════════════════════════════════╣
║  Server running at: http://localhost:${PORT}                  ║
║  Or open directly: ffconfigmaker.html                     ║
║                                                            ║
║  Press Ctrl+C to stop                                     ║
╚══════════════════════════════════════════════════════════╝
`);
});
