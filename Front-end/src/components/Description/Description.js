import React,{useState} from 'react'
import classes from './Description.module.css'

const Description = () => {

  return (
    <div className={classes.container}>
      <div className={classes.description_field}>
        <div>Description</div>
      <div className={classes.description}>
        <p>
          Elevate your style with the Euphoria Casual Luxe Linen Shirt, designed
          for those who value effortless sophistication. Crafted from premium,
          breathable linen fabric, this shirt combines comfort and elegance with
          a tailored yet relaxed fit. Featuring a classic point collar,
          button-front closure, and refined pleated cuffs, it's a versatile
          piece for any occasion. Whether paired with jeans for a casual vibe or
          chinos for a polished look, the Euphoria Linen Shirt ensures you stay
          stylish and comfortable. Available in a curated palette of soft,
          earthy tones, it's a timeless addition to your wardrobe.
        </p>
      </div>
      </div>

      <div className={classes.reviews_section}>
        <div>Reviews</div>

      <div className={classes.all_reviews}>
        <div className={classes.review}>
          <p className={classes.username}>Alex(⭐⭐⭐⭐⭐) </p>
          <p>
            "I'm absolutely in love with this shirt! The linen feels so soft and
            luxurious against my skin. It fits perfectly – not too loose, not
            too tight. I wore it to brunch last weekend, and everyone kept
            complimenting my look. Definitely buying more colors!"
          </p>
        </div>
        <div className={classes.review}>
          <p className={classes.username}>Peter(⭐⭐⭐⭐)</p>
          <p>
            "The design is clean and timeless, just how I like it. The shirt is
            lightweight and breathable, perfect for warm weather. My only
            suggestion would be to offer it in more bold color options, but
            other than that, it's a great buy!"
          </p>
        </div>
        <div className={classes.review}>
          <p className={classes.username}>Dunphy(⭐⭐⭐⭐⭐)</p>
          <p>
            "This is my go-to shirt now. It's so versatile! I've dressed it up
            with a blazer and worn it casually with shorts - it works both ways.
            The quality is superb, and you can tell it's built to last. Highly
            recommend!"
          </p>
        </div>
        <div className={classes.review}>
          <p className={classes.username}>Jesse pinkman (⭐⭐⭐⭐⭐)</p>
          <p>
            "Euphoria nailed it with this one. I travel a lot, and this shirt
            has become a staple in my suitcase. It doesn't wrinkle as much as
            other linen shirts I've tried, and it looks sharp even after a long
            day. Truly worth the investment."
          </p>
        </div>
        <div className={classes.review}>
          <p className={classes.username}>Claire(⭐⭐⭐⭐)</p>
          <p>
            "The feel and fit of this shirt are amazing. I appreciate the
            attention to detail in the stitching and design. The only reason I'm
            giving it four stars is that I found it runs slightly larger than
            expected. That said, I just sized down, and now it's perfect!"
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Description