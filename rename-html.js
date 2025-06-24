const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'dist/public');

function renameToHtml(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      renameToHtml(filePath);
    } else {
      // 확장자가 없고, 파일명이 200, 404가 아니면 .html로 변경
      if (!path.extname(file) && !['200', '404'].includes(file)) {
        fs.renameSync(filePath, filePath + '.html');
        console.log(`${file} → ${file}.html`);
      }
    }
  });
}

try {
  renameToHtml(targetDir);
  console.log('✅ 확장자 없는 파일을 .html로 변환 완료!');
} catch (error) {
  console.error('❌ 오류 발생:', error.message);
} 