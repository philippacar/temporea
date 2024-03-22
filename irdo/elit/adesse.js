const byteLength = Buffer.byteLength(bodyContent);
res.setHeader('Content-Range', \`*/\${byteLength}\`);
