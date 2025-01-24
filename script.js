// Sharing Button Functionality
document.getElementById('shareButton').addEventListener('click', function () {
    const pageURL = window.location.href;
    const pageTitle = document.title;
  
    if (navigator.share) {
      navigator.share({
        title: pageTitle,
        text: "Check out this informative webpage about the environmental impacts of paper cups!",
        url: pageURL,
      })
      .then(() => console.log("Page shared successfully!"))
      .catch((error) => console.error("Error sharing the page:", error));
    } else {
      navigator.clipboard.writeText(pageURL)
        .then(() => alert("Page link copied to clipboard!"))
        .catch((error) => console.error("Error copying the link:", error));
    }
  });
  
  // Comment Form Submission
  document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const comment = document.getElementById('commentInput').value.trim();
    if (comment) {
      alert("Thank you for sharing your ideas!");
      document.getElementById('commentForm').reset();
    } else {
      alert("Please enter your ideas before submitting.");
    }
  });
  // Array of environment-related quotes
const quotes = [
    "The Earth does not belong to us, we belong to the Earth.",
    "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to our fellow man.",
    "The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share.",
    "The Earth is what we all have in common.",
    "We do not inherit the Earth from our ancestors, we borrow it from our children."
  ];
  
  // Function to get a daily quote based on the date
  function getDailyQuote() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % quotes.length;  // Ensure the quote loops after all quotes are used
    return quotes[quoteIndex];
  }
  
  // Event Listener for the Notification Icon
  document.getElementById('notificationButton').addEventListener('click', function () {
    const quote = getDailyQuote();
    alert(quote);  // Show the quote in an alert box
  });
  