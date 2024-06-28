<a class="twitter-timeline"
 data-width="355" 
 data-height="550" 
 data-theme="light" 
 href="https://twitter.com/marumechanda?ref_src=twsrc%5Etfw">Tweets by มารุเมะจัง</a>
 <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<div id="tweets-container">
    <!-- Tweets will be dynamically added here -->
</div>

<script>
    // Function to fetch tweets from Twitter API
    function fetchTweets() {
        // Your Twitter API endpoint URL
        const apiUrl = 'https://api.twitter.com/2/users/marumechanda/tweets';

        // Your Twitter API bearer token
        const bearerToken = '******';

        // Fetch tweets
        fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        })
        .then(response => response.json())
        .then(data => {
            // Parse and display tweets
            const tweets = data.data;
            const tweetsContainer = document.getElementById('tweets-container');
            tweets.forEach(tweet => {
                const tweetCard = document.createElement('div');
                tweetCard.classList.add('tweet-card')
                tweetCard.textContent = tweet.text;
                tweetsContainer.appendChild(tweetCard);
            });
        })
        .catch(error => console.error('Error fetching tweets:', error));
    }

    // Call fetchTweets function when the page loads
    window.onload = fetchTweets;
</script>
