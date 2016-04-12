var articles = [];

function Article (opts) {
  // DONE: Use the js object passed in to complete this contructor function:
  // Save ALL the properties of `opts` into `this`.
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.data('title', this.title);
  $newArticle.data('category', this.category);
  $newArticle.data('author', this.author);
  $newArticle.data('authorUrl', this.authorUrl);
  $newArticle.data('publishedOn', this.publishedOn);
  $newArticle.data('body', this.body);

  // DONE: Use jQuery to fill in the template with properties
  // from this particular Article instance. We need to fill in:
  // the author name and url, the article title and body, and the
  // publication date.
  $newArticle.find('h1').html(this.title);
  $newArticle.find('a').html(this.author);
  $newArticle.find('a').attr('href', this.authorUrl);
  $newArticle.find('section.article-body').html(this.body);

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn)

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

  $newArticle.append('<hr>');

  // DONE: This cloned article is no longer a template, so we should remove that class...
  $newArticle.removeClass('template');
  return $newArticle;
}

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
})

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
