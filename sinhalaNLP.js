// sinhalaNLP.js

const natural = require('natural'); // Node.js NLP library
const tokenizer = new natural.WordTokenizer(); // For word tokenization

module.exports = {
  // Tokenize Sinhala Text into Words
  tokenizeSinhalaText: function (text) {
    return tokenizer.tokenize(text);
  },

  // Remove punctuation from Sinhala text
  removePunctuation: function (text) {
    return text.replace(/[^\w\s]/gi, ''); // Removes non-word characters (punctuation)
  },

  // Basic Stop Word Removal for Sinhala
  stopWords: [
    'අවසාන', 'ඇයි', 'නමුත්', 'ඔබ', 'මට', 'ඇතුළුව', 'එය', 'සඳහා', 'එසේ', 'ඔයාලට'
  ],
  
  removeStopWords: function (text) {
    let words = tokenizer.tokenize(text);
    words = words.filter(word => !this.stopWords.includes(word));  // Removes stop words
    return words.join(' ');
  },

  // Stem Sinhala words (Note: Basic stemming approach as advanced Sinhala stemmers are complex)
  stemSinhalaText: function (text) {
    let words = tokenizer.tokenize(text);
    // Simple stemming logic (you may need more advanced stemming based on your needs)
    let stemmedWords = words.map(word => this.simpleStemmer(word));
    return stemmedWords.join(' ');
  },

  // Simple stemming logic (just for illustration)
  simpleStemmer: function (word) {
    // For now, just an example of stemming - removing common suffixes (e.g., 'ක්', 'ව')
    const suffixes = ['ක්', 'ව', 'නවා', 'ඉ', 'ට'];
    for (let suffix of suffixes) {
      if (word.endsWith(suffix)) {
        return word.slice(0, -suffix.length);
      }
    }
    return word;
  },

  // Example function to calculate the sentiment (positive/negative) of a Sinhala text
  analyzeSentiment: function (text) {
    const positiveWords = ['හරි', 'ජය', 'සුභ', 'අවංක', 'සතුට'];
    const negativeWords = ['අවාසනාවෙන්', 'දුක්', 'නරක', 'අවලංගු', 'අසතුට'];

    let positiveCount = 0;
    let negativeCount = 0;

    let words = tokenizer.tokenize(text);

    words.forEach(word => {
      if (positiveWords.includes(word)) {
        positiveCount++;
      }
      if (negativeWords.includes(word)) {
        negativeCount++;
      }
    });

    // Simple sentiment analysis based on word frequency
    if (positiveCount > negativeCount) {
      return 'positive';
    } else if (negativeCount > positiveCount) {
      return 'negative';
    } else {
      return 'neutral';
    }
  }
};
