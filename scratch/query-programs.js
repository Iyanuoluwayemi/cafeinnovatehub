const { createClient } = require('next-sanity');
const client = createClient({ projectId: '3mh37foj', dataset: 'production', apiVersion: '2026-09-20', useCdn: false });
client.fetch("*[_type == 'program']").then(console.log);
