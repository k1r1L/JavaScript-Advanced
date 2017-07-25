function getArticleGenerator(articles) {
    let copyArticles = Object.assign([], articles);
    return function () {
        if (copyArticles.length > 0) {
            let article = $('<article>');
            article.append(`<p>${copyArticles.shift()}</p>`);
            $('#content').append(article);
        }
    }
}
