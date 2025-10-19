// Content Extraction Script for Portfolio Migration
// This script extracts content from reference pages for reuse

const fs = require('fs');
const path = require('path');

// Create timestamp for backup
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const backupDir = `recycle-bin/backup-${timestamp}`;

// Ensure backup directory exists
if (!fs.existsSync('recycle-bin')) {
    fs.mkdirSync('recycle-bin');
}
if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
}

// Content extraction functions
function extractTextContent(htmlContent) {
    // Remove HTML tags and extract text content
    return htmlContent
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function extractStructuredContent(htmlContent, filename) {
    const content = {
        filename: filename,
        extractedAt: new Date().toISOString(),
        textContent: extractTextContent(htmlContent),
        htmlContent: htmlContent,
        metadata: {
            title: '',
            description: '',
            keywords: []
        }
    };

    // Extract title
    const titleMatch = htmlContent.match(/<title[^>]*>([^<]*)<\/title>/i);
    if (titleMatch) {
        content.metadata.title = titleMatch[1].trim();
    }

    // Extract meta description
    const descMatch = htmlContent.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i);
    if (descMatch) {
        content.metadata.description = descMatch[1].trim();
    }

    return content;
}

// Main extraction process
console.log(`Starting content extraction - Backup: ${timestamp}`);

// Create content inventory
const contentInventory = {
    extractedAt: new Date().toISOString(),
    backupLocation: backupDir,
    files: []
};

// Process reference pages
const referencePagesDir = 'reference-pages';
if (fs.existsSync(referencePagesDir)) {
    const files = fs.readdirSync(referencePagesDir, { recursive: true });
    
    files.forEach(file => {
        const filePath = path.join(referencePagesDir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isFile() && path.extname(file) === '.html') {
            try {
                const htmlContent = fs.readFileSync(filePath, 'utf8');
                const extractedContent = extractStructuredContent(htmlContent, file);
                
                // Save extracted content
                const outputPath = path.join(backupDir, `${path.basename(file, '.html')}-content.json`);
                fs.writeFileSync(outputPath, JSON.stringify(extractedContent, null, 2));
                
                // Add to inventory
                contentInventory.files.push({
                    originalPath: filePath,
                    extractedPath: outputPath,
                    title: extractedContent.metadata.title,
                    size: stats.size,
                    modified: stats.mtime
                });
                
                console.log(`✓ Extracted: ${file}`);
            } catch (error) {
                console.error(`✗ Error processing ${file}:`, error.message);
            }
        }
    });
}

// Save content inventory
fs.writeFileSync(path.join(backupDir, 'content-inventory.json'), JSON.stringify(contentInventory, null, 2));

console.log(`\n✅ Content extraction completed!`);
console.log(`📁 Backup location: ${backupDir}`);
console.log(`📄 Files processed: ${contentInventory.files.length}`);
console.log(`\nNext steps:`);
console.log(`1. Review extracted content in ${backupDir}`);
console.log(`2. Use content for React component development`);
console.log(`3. Keep backup for reference during development`);