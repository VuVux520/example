# Headline
## 2ndHeadline
### Smallerheadline

**This is bold text**
__This is also bold text__

*This is italic text*
_This is also italic text_

~~Strike through~~

**This is _merge_ text**

***This is all type***

>to be or not to be quote

Some basic Git commands are:
```
git status
git add
git commit
```

This site was built using [GitHub Pages](https://pages.github.com/).

[Contribution guidelines for this project](docs/CONTRIBUTING.md)

- George Washington
- John Adams
- Thomas Jefferson

1. James Madison
2. James Monroe
3. John Quincy Adams

1. First list item
   - First nested list item
     - Second nested list item

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [x] Open a pull request

@github/support What do you think about these updates?

```
{"locations":[{"lat":40.744014,"lon":-73.990508}],"costing":"pedestrian","contours":[{"time":15,"color":"ff0000"}]}&id=Walk_From_Office
```

| Parameter | Description |
| :------------------ | :----------- |
| `date_time` | The local date and time at the location. These parameters apply only for multimodal requests and are not used with other costing methods.<ul><li>`type`<ul><li>0 - Current departure time for multimodal requests.</li><li>1 - Specified departure time for multimodal requests.</li><li>2 - Specified arrival time. Note: This is not yet implemented.</li></ul></li><li>`value` - the date and time specified in ISO 8601 format (YYYY-MM-DDThh:mm) in the local time zone of departure or arrival. For example, "2016-07-03T08:06"</li></ul> |
| `id` | Name of the isochrone request. If `id` is specified, the name is returned with the response. |
| `contours` | A JSON array of contour objects with the time in minutes or distance in kilometers and color to use for each isochrone contour. You can specify up to four contours (by default).<ul><li>`time` - A floating point value specifying the time in minutes for the contour.</li><li>`distance` - A floating point value specifying the distance in kilometers for the contour.</li><li>`color` - The color for the output of the contour. Specify it as a [Hex value](http://www.w3schools.com/colors/colors_hexadecimal.asp), but without the `#`, such as `"color":"ff0000"` for red. If no color is specified, the isochrone service will assign a default color to the output.</li></ul>You can only specify **one metric per contour**, i.e. `time` or `distance`.  |
| `polygons` | A Boolean value to determine whether to return geojson polygons or linestrings as the contours. The default is `false`, which returns lines; when `true`, polygons are returned. Note: When `polygons` is `true`, any contour that forms a ring is returned as a polygon. |
| `denoise` | A floating point value from `0` to `1` (default of `1`) which can be used to remove smaller contours. A value of `1` will only return the largest contour for a given time value. A value of `0.5` drops any contours that are less than half the area of the largest contour in the set of contours for that same time value. |
| `generalize` | A floating point value in meters used as the tolerance for [Douglas-Peucker](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm) generalization. Note: Generalization of contours can lead to self-intersections, as well as intersections of adjacent contours. |
| `show_locations` | A boolean indicating whether the input locations should be returned as MultiPoint features: one feature for the exact input coordinates and one feature for the coordinates of the network node it snapped to. Default false. 

[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]

```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```
## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[downloads-image]: https://img.shields.io/npm/dm/express.svg
[downloads-url]: https://npmcharts.com/compare/express?minimal=true
[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/express
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master
