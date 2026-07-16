import { readFileSync, writeFileSync } from 'fs';

let c = readFileSync('d:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js', 'utf8');

// Fix import - remove PROJECT_PACKAGE_EXTENSION and buildProjectPackageBlob
c = c.replace(
    '    buildProjectPayload,\n    parseProjectFile,\n    PROJECT_FILE_EXTENSION,\n    PROJECT_PACKAGE_EXTENSION,\n    buildProjectPackageBlob,\n    triggerBlobDownload,',
    '    buildProjectPayload,\n    parseProjectFile,\n    PROJECT_FILE_EXTENSION,\n    triggerBlobDownload,'
);

// Replace uses of removed exports
c = c.replace(/PROJECT_PACKAGE_EXTENSION/g, "'.sspp'");
c = c.replace(/buildProjectPackageBlob/g, 'null');

writeFileSync('d:/3CREATIVE/Music to Picture/SEESOUND/SEESOUND v1.0/frontend/src/main.js', c);
console.log('Fixed imports');
