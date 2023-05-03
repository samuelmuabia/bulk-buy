import React from "react";

const TweetEmbed = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I want to build other channels like beast gaming and beast reacts so I can run my main channel at a loss and grow as big as possible. And then use my main channel’s influence to one day open hundreds of homeless shelters/food banks and give away all the money.</p>&mdash; MrBeast (@MrBeast) <a href="https://twitter.com/MrBeast/status/1292818598424129536?ref_src=twsrc%5Etfw">August 10, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
      }}
    
    />
  );
};

export default TweetEmbed;
