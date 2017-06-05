var database_length = 0;
var searchResults = {};

function SearchPage(url, title, keywords, description) {
  this.url = url;
  this.title = title;
  this.keywords = keywords;
  this.description = description;
  return this;
}

function SearchDatabase() {
  this[database_length++] = new SearchPage("index.html", "My Index Page", "design, javascript, html5, tutorial", "This is my web portfolio, get in touch with me");
  return this;
}
var searchDatabase = new SearchDatabase();
var searchPage = function() {
  var input = document.getElementById("searchinput");
  if ((input.value.length !== 0) || (input.value !== " ")) {
    var keywordVal = decodeURIComponent(input.value);
    keywordVal = keywordVal.toLowerCase();
    if (input.value === "") {
      alert('Enter value, please');
      return false;
    } else {
      var searchResults_length = 0;
      for (i = 0; i < database_length; i++) {
        var words = document.createElement('div');
        words.setAttribute('id', 'myresults');
        var slink = document.createElement('a');
        slink.href = searchDatabase[i].url;
        slink.textContent = searchDatabase[i].title;
        var cnt1 = document.createElement('p');
        cnt1.textContent = searchDatabase[i].description;
        var cnt2 = document.createElement('p');
        cnt2.textContent = searchDatabase[i].keywords;
        words.appendChild(slink);
        words.appendChild(cnt1);
        words.appendChild(cnt2);
        if (words.textContent.indexOf(keywordVal) != -1) {
          searchResults[searchResults_length++] = searchDatabase[i];
        }
      }
    }
	if ((searchResults_length === 0)) {
      alert('No results');
    } else {
      var left = (screen.width / 2) - (400 / 2);
      var top = (screen.height / 2) - (400 / 2);
      var newWin = window.open('myresults.html', 'Results', 'height=400,width=400, top=' + top + ', left=' + left + ' ');
      newWin.document.body.appendChild(words);
    }

  }
  return false;
}
document.getElementById("btnsearch").addEventListener("click", searchPage, false);