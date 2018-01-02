# MatchMedia Component

This component is a simple wrapper around the `window.matchMedia` functionality,
as such it will only work (as intended) in browsers at or above the versions from this
table: https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia.

## Example:

```Javascript
import MatchMedia from '@matthamlin/react-media';

const MyComponent = props => (
  <div>
    <MatchMedia media="(min-width: 400px)">
      {matches => matches ? (<MatchedComponent />) : (<NonMatchedComponent />)}
    </MatchMedia>
  </div>
);
```

## API:

MatchMedia accepts two props, the first being `media` which is a media query string, the
second is children which is a callback function that accepts one parameter that is a
boolean if the media query has matched or not.

## Contributing:

If you have found an issue or want to add features/tests feel free to open a PR
and explain what the PR is fixing/adding and I will work with you in getting that fix
merged into the master branch!

## Questions?

Feel free to open an issue and I will get back to you!
