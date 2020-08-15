exports.templateHTML = (contents, body) => {
    return `<html>
    <head></head>
    <body>
    <h1><a href="/">WEB</a></h1>
    <ul>${contents}</ul>

    ${body}
    
    </body>
    </html>`
}

exports.templateList = (list) => {
    return list.map(item => 
        `<li><a href="/?id=${item.title}">${item.title}</a></li>`).join('');
}