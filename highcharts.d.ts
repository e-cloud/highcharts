
// Type definitions for Highcharts 6.1.0
// Project: https://github.com/Highcharts/Highcharts
// Definitions by: e-cloud <https://github.com/e-cloud>
// Definitions: https://github.com/Highcharts/Highcharts

/**
 * The Highcharts object is the placeholder for all other members, and various
 * utility functions. The most important member of the namespace would be the
 * chart constructor.
 * @example
 * var chart = Highcharts.chart('container', { ... });
 * @namespace Highcharts
 */
declare namespace Highcharts {
    /**
     * @typedef {Object} AjaxSettings
     * @property {String} url - The URL to call
     * @property {('get'|'post'|'update'|'delete')} type - The verb to use
     * @property {('json'|'xml'|'text'|'octet')} dataType - The data type expected
     * @property {Function} success - Function to call on success
     * @property {Function} error - Function to call on error
     * @property {Object} data - The payload to send
     * @property {Object} headers - The headers; keyed on header name
     */
    type AjaxSettings = {
        url: string;
        type: "get" | "post" | "update" | "delete";
        dataType: "json" | "xml" | "text" | "octet";
        success: ()=>any;
        error: ()=>any;
        data: any;
        headers: any;
    };

    /**
     * An object which denotes an anchor position
     * @typedef {Object} AnchorPosition
     * @property {Number} x
     * @property {Number} y
     * @property {Number} height
     * @property {Number} width
     */
    type AnchorPosition = {
        x: number;
        y: number;
        height: number;
        width: number;
    };

    /**
     * @typedef {SVGElement} ClipRect - A clipping rectangle that can be applied
     * to one or more {@link SVGElement} instances. It is instanciated with the
     * {@link SVGRenderer#clipRect} function and applied with the {@link
     * SVGElement#clip} function.
     * @example
     * var circle = renderer.circle(100, 100, 100)
     *     .attr({ fill: 'red' })
     *     .add();
     * var clipRect = renderer.clipRect(100, 100, 100, 100);
     * // Leave only the lower right quarter visible
     * circle.clip(clipRect);
     */
    type ClipRect = SVGElement;

    /**
     * @typedef {string} ColorString
     * A valid color to be parsed and handled by Highcharts. Highcharts internally
     * supports hex colors like `#ffffff`, rgb colors like `rgb(255,255,255)` and
     * rgba colors like `rgba(255,255,255,1)`. Other colors may be supported by the
     * browsers and displayed correctly, but Highcharts is not able to process them
     * and apply concepts like opacity and brightening.
     */
    type ColorString = string;

    /**
     * @typedef {Object} CSSObject - A style object with camel case property names.
     * The properties can be whatever styles are supported on the given SVG or HTML
     * element.
     * @example
     * {
     *    fontFamily: 'monospace',
     *    fontSize: '1.2em'
     * }
     */
    type CSSObject = {
    };

    /**
     * The returned object literal from the {@link Highcharts.Axis#getExtremes}
     * function.
     * @typedef  {Object} Extremes
     * @property {Number} dataMax
     *           The maximum value of the axis' associated series.
     * @property {Number} dataMin
     *           The minimum value of the axis' associated series.
     * @property {Number} max
     *           The maximum axis value, either automatic or set manually. If
     *           the `max` option is not set, `maxPadding` is 0 and `endOnTick`
     *           is false, this value will be the same as `dataMax`.
     * @property {Number} min
     *           The minimum axis value, either automatic or set manually. If
     *           the `min` option is not set, `minPadding` is 0 and
     *           `startOnTick` is false, this value will be the same
     *           as `dataMin`.
     */
    type Extremes = {
        dataMax: number;
        dataMin: number;
        max: number;
        min: number;
    };

    /**
     * A static shader mimicing axis translation functions found in parts/Axis
     * @typedef {Function} GLShader
     * @param {WebGLRenderingContext} gl - the context in which the shader is active
     */
    type GLShader = (gl: WebGLRenderingContext)=>void;

    /**
     * @typedef {Object} GradientOptions
     * @property {Object} linearGradient Holds an object that defines the start
     *    position and the end position relative to the shape.
     * @property {Number} linearGradient.x1 Start horizontal position of the
     *    gradient. Ranges 0-1.
     * @property {Number} linearGradient.x2 End horizontal position of the
     *    gradient. Ranges 0-1.
     * @property {Number} linearGradient.y1 Start vertical position of the
     *    gradient. Ranges 0-1.
     * @property {Number} linearGradient.y2 End vertical position of the
     *    gradient. Ranges 0-1.
     * @property {Object} radialGradient Holds an object that defines the center
     *    position and the radius.
     * @property {Number} radialGradient.cx Center horizontal position relative
     *    to the shape. Ranges 0-1.
     * @property {Number} radialGradient.cy Center vertical position relative
     *    to the shape. Ranges 0-1.
     * @property {Number} radialGradient.r Radius relative to the shape. Ranges
     *    0-1.
     * @property {Array<Array<Number|String>>} stops The first item in each
     *    tuple is the position in the gradient, where 0 is the start of the
     *    gradient and 1 is the end of the gradient. Multiple stops can be
     *    applied. The second item is the color for each stop. This color can
     *    also be given in the rgba format.
     * @example
     * // Linear gradient used as a color option
     * color: {
     *     linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
     *         stops: [
     *             [0, '#003399'], // start
     *             [0.5, '#ffffff'], // middle
     *             [1, '#3366AA'] // end
     *         ]
     *     }
     * }
     */
    type GradientOptions = {
        linearGradient: {
            x1: number;
            x2: number;
            y1: number;
            y2: number;
        };
        radialGradient: {
            cx: number;
            cy: number;
            r: number;
        };
        stops: ((number | string)[])[];
    };

    interface AccessibilityOptions {
        describeSingleSeries: boolean;
        enabled: boolean;
        keyboardNavigation: AccessibilityOptionsKeyboardNavigation;
        onTableAnchorClick: ()=>any;
        pointDateFormat: string;
        pointDateFormatter: ()=>any;
        pointDescriptionFormatter: ()=>any;
        pointDescriptionThreshold: number | boolean;
        screenReaderSectionFormatter: ()=>any;
        seriesDescriptionFormatter: ()=>any;
    }

    interface AccessibilityOptionsKeyboardNavigation {
        enabled: boolean;
        focusBorder: AccessibilityOptionsKeyboardNavigationFocusBorder;
        mode: string;
        skipNullPoints: boolean;
    }

    interface AccessibilityOptionsKeyboardNavigationFocusBorder {
        enabled: boolean;
        hideBrowserFocusOutline: boolean;
        margin: number;
        style: AccessibilityOptionsKeyboardNavigationFocusBorderStyle;
    }

    interface AccessibilityOptionsKeyboardNavigationFocusBorderStyle {
        borderRadius: number;
        color: ColorString;
        lineWidth: number;
    }

    /**
     * Old IE polyfill for addEventListener, called from inside the addEvent
     * function.
     */
    function addEventListenerPolyfill(): void;

    /**
     * An animation configuration. Animation configurations can also be defined as
     * booleans, where `false` turns off animation and `true` defaults to a duration
     * of 500ms.
     * @typedef {Object} AnimationOptions
     * @memberof Highcharts
     * @property {Number} duration - The animation duration in milliseconds.
     * @property {String} [easing] - The name of an easing function as defined on
     *     the `Math` object.
     * @property {Function} [complete] - A callback function to exectute when the
     *     animation finishes.
     * @property {Function} [step] - A callback function to execute on each step of
     *     each attribute or CSS property that's being animated. The first argument
     *     contains information about the animation and progress.
     */
    type AnimationOptions = {
        duration: number;
        easing?: string;
        complete?: ()=>any;
        step?: ()=>any;
    };

    /**
     * An annotation class which serves as a container for items like labels or
     * shapes. Created items are positioned on the chart either by linking them to
     * existing points or created mock points
     * @class Annotation
     * @memberOf Highcharts
     * @param {Chart} chart - the chart object
     * @param {AnnotationsOptions} userOptions - the options object
     */
    class Annotation {
        constructor(chart: Chart, userOptions: AnnotationsOptions);

        /**
         * The chart that the annotation belongs to.
         * @name chart
         * @memberOf Highcharts.Annotation#
         * @type {Chart}
         */
        chart: Chart;

        /**
         * Destroy the annotation. This function does not touch the chart
         * that the annotation belongs to (all annotations are kept in
         * the chart.annotations array) - it is recommended to use
         * {@link Highcharts.Chart#removeAnnotation} instead.
         */
        destroy(): void;

        /**
         * Initialize the annotation.
         */
        init(): void;

        /**
         * The array of labels which belong to the annotation.
         * @name labels
         * @memberOf Highcharts.Annotation#
         * @type {Array<Highcharts.SVGElement>}
         */
        labels: (SVGElement)[];

        /**
         * The user options for the annotations.
         * @name options
         * @memberOf Highcharts.Annotation#
         * @type {AnnotationOptions}
         */
        options: any;

        /**
         * Main method for drawing an annotation.
         */
        redraw(): void;

        /**
         * Render the annotation.
         */
        render(): void;

        /**
         * Set the annotation's visibility.
         * @param {Boolean} [visibility] - Whether to show or hide an annotation.
         * If the param is omitted, the annotation's visibility is toggled.
         */
        setVisible(visibility?: boolean): void;

        /**
         * The array of shapes which belong to the annotation.
         * @name shapes
         * @memberOf Highcharts.Annotation#
         * @type {Array<Highcharts.SVGElement>}
         */
        shapes: (SVGElement)[];

    }

    interface AnnotationsOptions {
        labelOptions: AnnotationsOptionsLabelOptions;
        labels: (AnnotationsOptionsLabels)[];
        shapeOptions: AnnotationsOptionsShapeOptions;
        shapes: (AnnotationsOptionsShapes)[];
        visible: boolean;
        zIndex: number;
    }

    interface AnnotationsOptionsLabelOptions {
        align: string;
        allowOverlap: boolean;
        backgroundColor: ColorString;
        borderColor: ColorString;
        borderRadius: number;
        borderWidth: number;
        className: string;
        crop: boolean;
        distance: number;
        format: string;
        formatter: ()=>any;
        overflow: string;
        padding: number;
        shadow: boolean | any;
        shape: string;
        style: AnnotationsOptionsLabelOptionsStyle;
        text: string;
        useHTML: boolean;
        verticalAlign: string;
        x: number;
        y: number;
    }

    interface AnnotationsOptionsLabelOptionsStyle {
        color: string;
        fontSize: string;
        fontWeight: string;
    }

    interface AnnotationsOptionsLabels extends AnnotationsOptionsLabelOptions{
        point: AnnotationsOptionsLabelsPoint;
    }

    interface AnnotationsOptionsLabelsPoint {
        x: number;
        xAxis: number | string;
        y: number;
        yAxis: number | string;
    }

    interface AnnotationsOptionsShapeOptions {
        fill: ColorString;
        height: number;
        r: number;
        stroke: ColorString;
        strokeWidth: number;
        type: string;
        width: number;
    }

    interface AnnotationsOptionsShapes extends AnnotationsOptionsShapeOptions{
        markerEnd: string;
        markerStart: string;
        point: AnnotationsOptionsShapesPoint;
        points: any[];
    }

    interface AnnotationsOptionsShapesPoint extends AnnotationsOptionsLabelsPoint{
    }

    /**
     * Define the available approximation types. The data grouping
     * approximations takes an array or numbers as the first parameter. In case
     * of ohlc, four arrays are sent in as four parameters. Each array consists
     * only of numbers. In case null values belong to the group, the property
     * .hasNulls will be set to true on the array.
     * @name approximations
     * @memberof Highcharts
     * @namespace
     * @chart-private
     */
    namespace approximations {
        /**
         * @param {number[]} arr
         * @return {number}
         */
        function average(arr: number[]): number;

        /**
         * The same as average, but for series with multiple values, like area ranges.
         * @param {...number[]} args
         * @return {number[]}
         */
        function averages(...args: (number[])[]): number[];

        /**
         * @param {number[]} arr
         * @return {number}
         */
        function close(arr: number[]): number;

        /**
         * @param {number[]} arr
         * @return {number}
         */
        function high(arr: number[]): number;

        /**
         * @param {number[]} arr
         * @return {number}
         */
        function low(arr: number[]): number;

        /**
         * ohlc and range are special cases where a multidimensional array is
         * input and an array is output
         * @param {number[]} open
         * @param {number[]} high
         * @param {number[]} low
         * @param {number[]} close
         * @return {number[]}
         */
        function ohlc(open: number[], high: number[], low: number[], close: number[]): number[];

        /**
         * @param {number[]} arr
         * @return {number}
         */
        function open(arr: number[]): number;

        /**
         * @param {number[]} high
         * @param {number[]} low
         * @return {number[]}
         */
        function range(high: number[], low: number[]): number[];

        /**
         * @param {number[]} arr
         * @return {number}
         */
        function sum(arr: number[]): number;

    }

    /**
     * Create a new axis object. Called internally when instanciating a new chart or
     * adding axes by {@link Highcharts.Chart#addAxis}.
     * A chart can have from 0 axes (pie chart) to multiples. In a normal, single
     * series cartesian chart, there is one X axis and one Y axis.
     * The X axis or axes are referenced by {@link Highcharts.Chart.xAxis}, which is
     * an array of Axis objects. If there is only one axis, it can be referenced
     * through `chart.xAxis[0]`, and multiple axes have increasing indices. The same
     * pattern goes for Y axes.
     * If you need to get the axes from a series object, use the `series.xAxis` and
     * `series.yAxis` properties. These are not arrays, as one series can only be
     * associated to one X and one Y axis.
     * A third way to reference the axis programmatically is by `id`. Add an `id` in
     * the axis configuration options, and get the axis by
     * {@link Highcharts.Chart#get}.
     * Configuration options for the axes are given in options.xAxis and
     * options.yAxis.
     * @class Highcharts.Axis
     * @memberOf Highcharts
     * @param {Highcharts.Chart} chart - The Chart instance to apply the axis on.
     * @param {Object} options - Axis options
     */
    class Axis {
        constructor(chart: Chart, options: any);

        /**
         * Add a plot band after render time.
         * @param  {AxisPlotBandsOptions} options
         *         A configuration object for the plot band, as defined in {@link
         *         https://api.highcharts.com/highcharts/xAxis.plotBands|
         *         xAxis.plotBands}.
         * @return {Object}
         *         The added plot band.
         * @sample highcharts/members/axis-addplotband/
         *         Toggle the plot band from a button
         */
        addPlotBand(options: any): any;

        /**
         * Add a plot line after render time.
         * @param  {AxisPlotLinesOptions} options
         *         A configuration object for the plot line, as defined in {@link
         *         https://api.highcharts.com/highcharts/xAxis.plotLines|
         *         xAxis.plotLines}.
         * @return {Object}
         *         The added plot line.
         * @sample highcharts/members/axis-addplotline/
         *         Toggle the plot line from a button
         */
        addPlotLine(options: any): any;

        /**
         * Adds the title defined in axis.options.title.
         * @param {Boolean} display - whether or not to display the title
         */
        addTitle(display: boolean): void;

        /**
         * Add logic to pad each axis with the amount of pixels
         * necessary to avoid the bubbles to overflow.
         */
        beforePadding(): void;

        /**
         * Calculate the ordinal positions before tick positions are calculated.
         */
        beforeSetTickPositions(): void;

        /**
         * Build the stacks from top down
         */
        buildStacks(): void;

        /**
         * The Chart that the axis belongs to.
         * @name     chart
         * @memberOf Axis
         * @type     {Chart}
         * @instance
         */
        chart: Chart;

        /**
         * The collection where the axis belongs, for example `xAxis`, `yAxis`
         * or `colorAxis`. Corresponds to properties on Chart, for example
         * {@link Chart.xAxis}.
         * @name     coll
         * @memberOf Axis
         * @type     {String}
         * @instance
         */
        coll: string;

        /**
         * The processed crosshair options.
         * @name     crosshair
         * @memberOf Axis
         * @type     {AxisCrosshairOptions}
         * @instance
         */
        crosshair: any;

        /**
         * Internal function to draw a crosshair.
         * @param  {PointerEvent} [e]
         *         The event arguments from the modified pointer event, extended
         *         with `chartX` and `chartY`
         * @param  {Point} [point]
         *         The Point object if the crosshair snaps to points.
         */
        drawCrosshair(e?: PointerEvent, point?: Point): void;

        /**
         * Drill down to a given category. This is the same as clicking on an axis
         * label.
         */
        drilldownCategory(): void;

        /**
         * Return drillable points for this specific X value
         */
        getDDPoints(): void;

        /**
         * Get the ordinal positions for the entire data set. This is necessary in chart panning
         * because we need to find out what points or data groups are available outside the
         * visible range. When a panning operation starts, if an index for the given grouping
         * does not exists, it is created and cached. This index is deleted on updated data, so
         * it will be regenerated the next time a panning operation starts.
         */
        getExtendedPositions(): void;

        /**
         * Get the current extremes for the axis.
         * @returns {Extremes}
         *          An object containing extremes information.
         * @sample  highcharts/members/axis-getextremes/
         *          Report extremes by click on a button
         * @sample  maps/members/axis-getextremes/
         *          Get extremes in Highmaps
         */
        getExtremes(): Extremes;

        /**
         * Find the factor to estimate how wide the plot area would have been if ordinal
         * gaps were included. This value is used to compute an imagined plot width in order
         * to establish the data grouping interval.
         * A real world case is the intraday-candlestick
         * example. Without this logic, it would show the correct data grouping when viewing
         * a range within each day, but once moving the range to include the gap between two
         * days, the interval would include the cut-away night hours and the data grouping
         * would be wrong. So the below method tries to compensate by identifying the most
         * common point interval, in this case days.
         * An opposite case is presented in issue #718. We have a long array of daily data,
         * then one point is appended one hour after the last point. We expect the data grouping
         * not to change.
         * In the future, if we find cases where this estimation doesn't work optimally, we
         * might need to add a second pass to the data grouping logic, where we do another run
         * with a greater interval if the number of data groups is more than a certain fraction
         * of the desired group count.
         */
        getGroupIntervalFactor(): void;

        /**
         * Get the data grouping pixel width based on the greatest defined individual
         * width
         * of the axis' series, and if whether one of the axes need grouping.
         */
        getGroupPixelWidth(): void;

        /**
         * Internal function to et the tick positions of a linear axis to round
         * values like whole tens or every five.
         * @param  {Number} tickInterval
         *         The normalized tick interval
         * @param  {Number} min
         *         Axis minimum.
         * @param  {Number} max
         *         Axis maximum.
         * @return {Array<Number>}
         *         An array of axis values where ticks should be placed.
         */
        getLinearTickPositions(tickInterval: number, min: number, max: number): number[];

        /**
         * Internal function to get the path for the axis line. Extended for polar
         * charts.
         * @param  {Number} lineWidth
         *         The line width in pixels.
         * @return {Array}
         *         The SVG path definition in array form.
         */
        getLinePath(lineWidth: number): any[];

        /**
         * Set the tick positions of a logarithmic axis
         */
        getLogTickPositions(): void;

        /**
         * Resolve the new minorTicks/minorTickInterval options into the legacy
         * loosely typed minorTickInterval option.
         */
        getMinorTickInterval(): void;

        /**
         * Internal function to return the minor tick positions. For logarithmic
         * axes, the same logic as for major ticks is reused.
         * @return {Array<Number>}
         *         An array of axis values where ticks should be placed.
         */
        getMinorTickPositions(): number[];

        /**
         * Internal function to create the SVG path definition for a plot band.
         * @param  {Number} from
         *         The axis value to start from.
         * @param  {Number} to
         *         The axis value to end on.
         * @return {Array<String|Number>}
         *         The SVG path definition in array form.
         */
        getPlotBandPath(from: number, to: number): (string | number)[];

        /**
         * Create the path for a plot line that goes from the given value on
         * this axis, across the plot to the opposite side. Also used internally for
         * grid lines and crosshairs.
         * @param  {Number} value
         *         Axis value.
         * @param  {Number} [lineWidth=1]
         *         Used for calculation crisp line coordinates.
         * @param  {Boolean} [old=false]
         *         Use old coordinates (for resizing and rescaling).
         * @param  {Boolean} [force=false]
         *         If `false`, the function will return null when it falls outside
         *         the axis bounds.
         * @param  {Number} [translatedValue]
         *         If given, return the plot line path of a pixel position on the
         *         axis.
         * @return {Array<String|Number>}
         *         The SVG path definition for the plot line.
         */
        getPlotLinePath(value: number, lineWidth?: number, old?: boolean, force?: boolean, translatedValue?: number): (string | number)[];

        /**
         * Get the zero plane either based on zero or on the min or max value.
         * Used in bar and area plots.
         * @param  {Number} threshold
         *         The threshold in axis values.
         * @return {Number}
         *         The translated threshold position in terms of pixels, and
         *         corrected to stay within the axis bounds.
         */
        getThreshold(threshold: number): number;

        /**
         * Set the tick positions to a time unit that makes sense, for example
         * on the first of each month or on every Monday. Return an array
         * with the time positions. Used in datetime axes as well as for grouping
         * data on a datetime axis.
         * @param {Object} normalizedInterval
         *        The interval in axis values (ms) and thecount
         * @param {Number} min The minimum in axis values
         * @param {Number} max The maximum in axis values
         * @param {Number} startOfWeek
         */
        getTimeTicks(normalizedInterval: any, min: number, max: number, startOfWeek: number): void;

        /**
         * Return true if the axis has associated data.
         * @return {Boolean}
         *         True if the axis has associated visible series and those series
         *         have either valid data points or explicit `min` and `max`
         *         settings.
         */
        hasData(): boolean;

        /**
         *    Hide the crosshair if visible.
         */
        hideCrosshair(): void;

        /**
         * Whether the axis is horizontal.
         * @name     horiz
         * @memberOf Axis
         * @type     {Boolean}
         * @instance
         */
        horiz: boolean;

        /**
         * Overrideable function to initialize the axis.
         * @see {@link Axis}
         */
        init(): void;

        /**
         * Translate from linear (internal) to axis value
         * @param {Number} val The linear abstracted value
         * @param {Boolean} fromIndex Translate from an index in the ordinal positions rather than a value
         */
        lin2val(val: number, fromIndex: boolean): void;

        /**
         * The maximum value of the axis. In a logarithmic axis, this is the
         * logarithm of the real value, and the real value can be obtained from
         * {@link Axis#getExtremes}.
         * @name     max
         * @memberOf Axis
         * @type     {Number}
         * @instance
         */
        max: number;

        /**
         * The minimum value of the axis. In a logarithmic axis, this is the
         * logarithm of the real value, and the real value can be obtained from
         * {@link Axis#getExtremes}.
         * @name     min
         * @memberOf Axis
         * @type     {Number}
         * @instance
         */
        min: number;

        /**
         * Get the axis min value based on the range option and the current max. For
         * stock charts this is extended via the {@link RangeSelector} so that if the
         * selected range is a multiple of months or years, it is compensated for
         * various month lengths.
         * @return {number} The new minimum value.
         */
        minFromRange(): number;

        /**
         * Get a normalized tick interval for dates. Returns a configuration object with
         * unit range (interval), count and name. Used to prepare data for getTimeTicks.
         * Previously this logic was part of getTimeTicks, but as getTimeTicks now runs
         * of segments in stock charts, the normalizing logic was extracted in order to
         * prevent it for running over again for each segment having the same interval.
         * #662, #697.
         */
        normalizeTimeTickInterval(): void;

        /**
         * Make the tick intervals closer because the ordinal gaps make the ticks spread out or cluster
         */
        postProcessTickInterval(): void;

        /**
         * Remove the axis from the chart.
         * @param {Boolean} [redraw=true] Whether to redraw the chart following the
         * remove.
         * @sample highcharts/members/chart-addaxis/ Add and remove axes
         */
        remove(redraw?: boolean): void;

        /**
         * Remove a plot band by its id.
         * @param  {String} id
         *         The plot band's `id` as given in the original configuration
         *         object or in the `addPlotBand` option.
         * @sample highcharts/members/axis-removeplotband/
         *         Remove plot band by id
         * @sample highcharts/members/axis-addplotband/
         *         Toggle the plot band from a button
         */
        removePlotBand(id: string): void;

        /**
         * Remove a plot line by its id.
         * @param  {String} id
         *         The plot line's `id` as given in the original configuration
         *         object or in the `addPlotLine` option.
         * @sample highcharts/xaxis/plotlines-id/
         *         Remove plot line by id
         * @sample highcharts/members/axis-addplotline/
         *         Toggle the plot line from a button
         */
        removePlotLine(id: string): void;

        /**
         * Render the axis line. Called internally when rendering and redrawing the
         * axis.
         */
        renderLine(): void;

        /**
         * Render a minor tick into the given position. If a minor tick already
         * exists in this position, move it.
         * @param  {number} pos
         *         The position in axis values.
         */
        renderMinorTick(pos: number): void;

        /**
         * Render a major tick into the given position. If a tick already exists
         * in this position, move it.
         * @param  {number} pos
         *         The position in axis values.
         * @param  {number} i
         *         The tick index.
         */
        renderTick(pos: number, i: number): void;

        /**
         * Set all the stacks to initial states and destroy unused ones.
         */
        resetStacks(): void;

        /**
         * Whether the axis is reversed. Based on the `axis.reversed`,
         * option, but inverted charts have reversed xAxis by default.
         * @name     reversed
         * @memberOf Axis
         * @type     {Boolean}
         * @instance
         */
        reversed: boolean;

        /**
         * All series associated to the axis.
         * @name     series
         * @memberOf Axis
         * @type     {Array<Series>}
         * @instance
         */
        series: (Series)[];

        /**
         * Set new axis categories and optionally redraw.
         * @param {Array<String>} categories - The new categories.
         * @param {Boolean} [redraw=true] - Whether to redraw the chart.
         * @sample highcharts/members/axis-setcategories/ Set categories by click on
         * a button
         */
        setCategories(categories: string[], redraw?: boolean): void;

        /**
         * Highstock only. Set the compare mode on all series belonging to an Y axis
         * after render time.
         * @param  {String} compare
         *         The compare mode. Can be one of `null`, `"value"` or `"percent"`.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart or to wait for a later call to {@link
         *         Chart#redraw},
         * @function setCompare
         * @memberOf Axis.prototype
         * @see    {@link https://api.highcharts.com/highstock/series.plotOptions.compare|
         *         series.plotOptions.compare}
         * @sample stock/members/axis-setcompare/
         *         Set compoare
         */
        setCompare(compare: string, redraw?: boolean): void;

        /**
         * Highstock only. Force data grouping on all the axis' series.
         * @param  {SeriesDatagroupingOptions} [dataGrouping]
         *         A `dataGrouping` configuration. Use `false` to disable data grouping
         *         dynamically.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart or wait for a later call to {@link
         *         Chart#redraw}.
         * @function setDataGrouping
         * @memberOf Axis.prototype
         */
        setDataGrouping(dataGrouping?: any, redraw?: boolean): void;

        /**
         * Set the minimum and maximum of the axes after render time. If the
         * `startOnTick` and `endOnTick` options are true, the minimum and maximum
         * values are rounded off to the nearest tick. To prevent this, these
         * options can be set to false before calling setExtremes. Also, setExtremes
         * will not allow a range lower than the `minRange` option, which by default
         * is the range of five points.
         * @param  {Number} [newMin]
         *         The new minimum value.
         * @param  {Number} [newMax]
         *         The new maximum value.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart or wait for an explicit call to
         *         {@link Highcharts.Chart#redraw}
         * @param  {AnimationOptions} [animation=true]
         *         Enable or modify animations.
         * @param  {Object} [eventArguments]
         *         Arguments to be accessed in event handler.
         * @sample highcharts/members/axis-setextremes/
         *         Set extremes from a button
         * @sample highcharts/members/axis-setextremes-datetime/
         *         Set extremes on a datetime axis
         * @sample highcharts/members/axis-setextremes-off-ticks/
         *         Set extremes off ticks
         * @sample stock/members/axis-setextremes/
         *         Set extremes in Highstock
         * @sample maps/members/axis-setextremes/
         *         Set extremes in Highmaps
         */
        setExtremes(newMin?: number, newMax?: number, redraw?: boolean, animation?: AnimationOptions, eventArguments?: any): void;

        /**
         * Set predefined left+width and top+height (inverted) for yAxes. This
         * method modifies options param.
         * @param  {Array} axisPosition
         *         ['left', 'width', 'height', 'top'] or
         *         ['top', 'height', 'width', 'left'] for an inverted chart.
         * @param  {Object} options {@link Highcharts.Axis#options}.
         */
        setParallelPosition(axisPosition: any[], options: any): void;

        /**
         * Now we have computed the normalized tickInterval, get the tick positions
         */
        setTickPositions(): void;

        /**
         * Update the axis title by options after render time.
         * @param  {TitleOptions} titleOptions
         *         The additional title options.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart after setting the title.
         * @sample highcharts/members/axis-settitle/ Set a new Y axis title
         */
        setTitle(titleOptions: TitleOptions, redraw?: boolean): void;

        /**
         * The side on which the axis is rendered. 0 is top, 1 is right, 2 is
         * bottom and 3 is left.
         * @name     side
         * @memberOf Axis
         * @type     {Number}
         * @instance
         */
        side: number;

        /**
         * Add logic to normalize the zoomed range in order to preserve the pressed
         * state of range selector buttons
         */
        toFixedRange(): void;

        /**
         * Translate a value in terms of axis units into pixels within the chart.
         * @param  {Number} value
         *         A value in terms of axis units.
         * @param  {Boolean} paneCoordinates
         *         Whether to return the pixel coordinate relative to the chart or
         *         just the axis/pane itself.
         * @return {Number} Pixel position of the value on the chart or axis.
         */
        toPixels(value: number, paneCoordinates: boolean): number;

        /**
         * Translate a pixel position along the axis to a value in terms of axis
         * units.
         * @param  {Number} pixel
         *         The pixel value coordinate.
         * @param  {Boolean} paneCoordiantes
         *         Whether the input pixel is relative to the chart or just the
         *         axis/pane itself.
         * @return {Number} The axis value.
         */
        toValue(pixel: number, paneCoordiantes: boolean): number;

        /**
         * Update an axis object with a new set of options. The options are merged
         * with the existing options, so only new or altered options need to be
         * specified.
         * @param  {Object} options
         *         The new options that will be merged in with existing options on
         *         the axis.
         * @sample highcharts/members/axis-update/ Axis update demo
         */
        update(options: any): void;

        /**
         * Translate from a linear axis value to the corresponding ordinal axis position. If there
         * are no gaps in the ordinal axis this will be the same. The translated value is the value
         * that the point would have if the axis were linear, using the same min and max.
         * @param {Number} val The axis value
         * @param {Boolean} toIndex Whether to return the index in the ordinalPositions or the new value
         */
        val2lin(val: number, toIndex: boolean): void;

    }

    /**
     * The AxisResizer class.
     * @param {Object} axis - main axis for the AxisResizer.
     * @class
     */
    class AxisResizer {
        constructor(axis: any);

        /**
         * Set up the mouse and touch events for the control line.
         */
        addMouseEvents(): void;

        /**
         * Destroy AxisResizer. Clear outside references, clear events,
         * destroy elements, nullify properties.
         */
        destroy(): void;

        /**
         * Initiate the AxisResizer object.
         * @param {Object} axis - main axis for the AxisResizer.
         */
        init(axis: any): void;

        /**
         * Mousedown on a control line.
         * Will store necessary information for drag&drop.
         */
        onMouseDown(): void;

        /**
         * Mouse move event based on x/y mouse position.
         * @param {Object} e  - mouse event.
         */
        onMouseMove(e: any): void;

        /**
         * Mouse up event based on x/y mouse position.
         * @param {Object} e - mouse event.
         */
        onMouseUp(e: any): void;

        /**
         * Render the AxisResizer
         */
        render(): void;

        /**
         * Update all connected axes after a change of control line position
         */
        updateAxes(): void;

    }

    interface BoostOptions {
        allowForce: boolean;
        debug: BoostOptionsDebug;
        enabled: boolean;
        seriesThreshold: number;
        useGPUTranslations: boolean;
    }

    interface BoostOptionsDebug {
        showSkipSummary: boolean;
        timeBufferCopy: boolean;
        timeKDTree: boolean;
        timeRendering: boolean;
        timeSeriesProcessing: boolean;
        timeSetup: boolean;
    }

    /**
     * centered series mixin
     * @mixin
     * @name CenteredSeriesMixin
     * @memberof Highcharts
     */
    interface CenteredSeriesMixin {
        /**
         * Get the center of the pie based on the size and center options relative
         * to the plot area. Borrowed by the polar and gauge series types.
         */
        getCenter(): void;
        /**
         * getStartAndEndRadians - Calculates start and end angles in radians.
         * Used in series types such as pie and sunburst.
         * @param  {Number} start Start angle in degrees.
         * @param  {Number} end Start angle in degrees.
         * @return {object} Returns an object containing start and end angles as
         * radians.
         */
        getStartAndEndRadians(start: number, end: number): object;
    }

    /**
     * The Chart class. The recommended constructor is {@link Highcharts#chart}.
     * @class Highcharts.Chart
     * @param  {String|HTMLDOMElement} renderTo
     *         The DOM element to render to, or its id.
     * @param  {Options} options
     *         The chart options structure.
     * @param  {Function} [callback]
     *         Function to run when the chart has loaded and and all external images
     *         are loaded. Defining a [chart.event.load](
     *         https://api.highcharts.com/highcharts/chart.events.load) handler is
     *         equivalent.
     * @example
     * var chart = Highcharts.chart('container', {
     *        title: {
     *               text: 'My chart'
     *        },
     *        series: [{
     *            data: [1, 3, 2, 4]
     *        }]
     * })
     */
    class Chart {
        constructor(renderTo: string | HTMLDOMElement, options: Options, callback?: ()=>any);

        /**
         * Returns true if there are data points within the plot area now
         * @function #hasData
         * @memberOf Highcharts.Chart
         * @instance
         */
        hasData(): void;

        /**
         * Hide no-data message
         * @function #hideNoData
         * @memberOf Highcharts.Chart
         * @instance
         */
        hideNoData(): void;

        /**
         * Display a no-data message.
         * @function #showNoData
         * @memberOf Highcharts.Chart
         * @instance
         * @param {String} str An optional message to show in place of the default one
         */
        showNoData(str: string): void;

        /**
         * Add an annotation to the chart after render time.
         * @param  {AnnotationsOptions} options
         *         The series options for the new, detailed series.
         * @return {Highcharts.Annotation} - The newly generated annotation.
         */
        addAnnotation(options: AnnotationsOptions): Annotation;

        /**
         * Add an axis to the chart after render time. Note that this method should
         * never be used when adding data synchronously at chart render time, as it
         * adds expense to the calculations and rendering. When adding data at the
         * same time as the chart is initialized, add the axis as a configuration
         * option instead.
         * @param  {AxisOptions} options
         *         The axis options.
         * @param  {Boolean} [isX=false]
         *         Whether it is an X axis or a value axis.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart after adding.
         * @param  {AnimationOptions} [animation=true]
         *         Whether and how to apply animation in the redraw.
         * @sample highcharts/members/chart-addaxis/ Add and remove axes
         * @return {Axis}
         *         The newly generated Axis object.
         */
        addAxis(options: any, isX?: boolean, redraw?: boolean, animation?: AnimationOptions): Axis;

        /**
         * Set a new credits label for the chart.
         * @param  {CreditsOptions} options
         *         A configuration object for the new credits.
         * @sample highcharts/credits/credits-update/ Add and update credits
         */
        addCredits(options: CreditsOptions): void;

        /**
         * Add a series to the chart after render time. Note that this method should
         * never be used when adding data synchronously at chart render time, as it
         * adds expense to the calculations and rendering. When adding data at the
         * same time as the chart is initialized, add the series as a configuration
         * option instead. With multiple axes, the `offset` is dynamically adjusted.
         * @param  {SeriesOptions} options
         *         The config options for the series.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart after adding.
         * @param  {AnimationOptions} [animation]
         *         Whether to apply animation, and optionally animation
         *         configuration.
         * @return {Highcharts.Series}
         *         The newly created series object.
         * @sample highcharts/members/chart-addseries/
         *         Add a series from a button
         * @sample stock/members/chart-addseries/
         *         Add a series in Highstock
         */
        addSeries(options: SeriesOptions, redraw?: boolean, animation?: AnimationOptions): Series;

        /**
         * Add a series to the chart as drilldown from a specific point in the parent
         * series. This method is used for async drilldown, when clicking a point in a
         * series should result in loading and displaying a more high-resolution series.
         * When not async, the setup is simpler using the {@link
         * https://api.highcharts.com/highcharts/drilldown.series|drilldown.series}
         * options structure.
         * @memberOf Highcharts.Chart
         * @function #addSeriesAsDrilldown
         * @param  {Highcharts.Point} point
         *         The point from which the drilldown will start.
         * @param  {SeriesOptions} options
         *         The series options for the new, detailed series.
         * @sample highcharts/drilldown/async/ Async drilldown
         */
        addSeriesAsDrilldown(point: Point, options: SeriesOptions): void;

        /**
         * All the axes in the chart.
         * @memberof Highcharts.Chart
         * @name axes
         * @see  Highcharts.Chart.xAxis
         * @see  Highcharts.Chart.yAxis
         * @type {Array.<Highcharts.Axis>}
         * @instance
         */
        axes: (Axis)[];

        /**
         * The current pixel height of the chart.
         * @name chartHeight
         * @memberOf Chart
         * @type {Number}
         * @instance
         */
        chartHeight: number;

        /**
         * The current pixel width of the chart.
         * @name chartWidth
         * @memberOf Chart
         * @type {Number}
         * @instance
         */
        chartWidth: number;

        /**
         * The containing HTML element of the chart. The container is
         * dynamically inserted into the element given as the `renderTo`
         * parameterin the {@link Highcharts#chart} constructor.
         * @name container
         * @memberOf Highcharts.Chart
         * @type {HTMLDOMElement}
         * @instance
         */
        container: HTMLDOMElement;

        /**
         * The chart's credits label. The label has an `update` method that
         * allows setting new options as per the {@link
         * https://api.highcharts.com/highcharts/credits|
         * credits options set}.
         * @memberof Highcharts.Chart
         * @name credits
         * @type {Highcharts.SVGElement}
         * @instance
         */
        credits: SVGElement;

        /**
         * Get the current values for a given set of options. Used before we update
         * the chart with a new responsiveness rule.
         * TODO: Restore axis options (by id?)
         */
        currentOptions(): void;

        /**
         * Remove the chart and purge memory. This method is called internally
         * before adding a second chart into the same container, as well as on
         * window unload to prevent leaks.
         * @sample highcharts/members/chart-destroy/
         *         Destroy the chart from a button
         * @sample stock/members/chart-destroy/
         *         Destroy with Highstock
         */
        destroy(): void;

        /**
         * The main initiator method that runs on chart level after initiation and
         * redraw. It runs in  a timeout to prevent locking, and loops over all series,
         * taking all series and labels into account when placing the labels.
         */
        drawSeriesLabels(): void;

        /**
         * When the chart is drilled down to a child series, calling `chart.drillUp()`
         * will drill up to the parent series. Requires the drilldown module.
         * @memberOf Chart
         * @instance
         */
        drillUp(): void;

        /**
         * Exporting module required. Submit an SVG version of the chart to a server
         * along with some parameters for conversion.
         * @param  {Object} exportingOptions
         *         Exporting options in addition to those defined in {@link
         *         https://api.highcharts.com/highcharts/exporting|exporting}.
         * @param  {String} exportingOptions.filename
         *         The file name for the export without extension.
         * @param  {String} exportingOptions.url
         *         The URL for the server module to do the conversion.
         * @param  {Number} exportingOptions.width
         *         The width of the PNG or JPG image generated on the server.
         * @param  {String} exportingOptions.type
         *         The MIME type of the converted image.
         * @param  {Number} exportingOptions.sourceWidth
         *         The pixel width of the source (in-page) chart.
         * @param  {Number} exportingOptions.sourceHeight
         *         The pixel height of the source (in-page) chart.
         * @param  {Options} chartOptions
         *         Additional chart options for the exported chart. For example a
         *         different background color can be added here, or `dataLabels`
         *         for export only.
         * @sample highcharts/members/chart-exportchart/
         *         Export with no options
         * @sample highcharts/members/chart-exportchart-filename/
         *         PDF type and custom filename
         * @sample highcharts/members/chart-exportchart-custom-background/
         *         Different chart background in export
         * @sample stock/members/chart-exportchart/
         *         Export with Highstock
         */
        exportChart(exportingOptions: {
            filename: string;
            url: string;
            width: number;
            type: string;
            sourceWidth: number;
            sourceHeight: number;
        }, chartOptions: Options): void;

        /**
         * Exporting and offline-exporting modules required. Export a chart to an image
         * locally in the user's browser.
         * @param  {Object} exportingOptions
         *         Exporting options, the same as in {@link
         *         Highcharts.Chart#exportChart}.
         * @param  {Options} chartOptions
         *         Additional chart options for the exported chart. For example a
         *         different background color can be added here, or `dataLabels`
         *         for export only.
         */
        exportChartLocal(exportingOptions: any, chartOptions: Options): void;

        /**
         * Highmaps only. Get chart coordinates from latitude/longitude. Returns an
         * object with x and y values corresponding to the `xAxis` and `yAxis`.
         * @function fromLatLonToPoint
         * @memberOf Chart.prototype
         * @param  {Object} latLon
         *         Coordinates.
         * @param  {Number} latLon.lat
         *         The latitude.
         * @param  {Number} latLon.lon
         *         The longitude.
         * @sample maps/series/latlon-to-point/
         *         Find a point from lat/lon
         * @return {Object}
         *         X and Y coordinates in terms of chart axis values.
         */
        fromLatLonToPoint(latLon: {
            lat: number;
            lon: number;
        }): any;

        /**
         * Highmaps only. Calculate latitude/longitude values for a point. Returns an
         * object with the numeric properties `lat` and `lon`.
         * @function fromPointToLatLon
         * @memberOf Chart.prototype
         * @param  {Point|Object} point
         *         A `Point` instance or anything containing `x` and `y` properties
         *         with numeric values
         * @return {Object}
         *         An object with `lat` and `lon` properties.
         * @sample maps/demo/latlon-advanced/
         *         Advanced lat/lon demo
         */
        fromPointToLatLon(point: Point | any): any;

        /**
         * Get an axis, series or point object by `id` as given in the configuration
         * options. Returns `undefined` if no item is found.
         * @param {String} id The id as given in the configuration options.
         * @return {Highcharts.Axis|Highcharts.Series|Highcharts.Point|undefined}
         *         The retrieved item.
         * @sample highcharts/plotoptions/series-id/
         *         Get series by id
         */
        get(id: string): Axis | Series | Point | undefined;

        /**
         * Get the clip rectangle for a target, either a series or the chart. For the
         * chart, we need to consider the maximum extent of its Y axes, in case of
         * Highstock panes and navigator.
         */
        getBoostClipRect(): void;

        /**
         * Return the unfiltered innerHTML of the chart container. Used as hook for
         * plugins. In styled mode, it also takes care of inlining CSS style rules.
         * @see  Chart#getSVG
         * @returns {String}
         *          The unfiltered SVG of the chart.
         */
        getChartHTML(): string;

        /**
         * Internal function to get the chart width and height according to options
         * and container size. Sets {@link Chart.chartWidth} and {@link
         * Chart.chartHeight}.
         */
        getChartSize(): void;

        /**
         * Export-data module required. Returns the current chart data as a CSV string.
         * @param  {Boolean} useLocalDecimalPoint
         *         Whether to use the local decimal point as detected from the browser.
         *         This makes it easier to export data to Excel in the same locale as
         *         the user is.
         * @returns {String}
         *          CSV representation of the data
         */
        getCSV(useLocalDecimalPoint: boolean): string;

        /**
         * Export-data module required. Returns a two-dimensional array containing the
         * current chart data.
         * @param  {Boolean} multiLevelHeaders
         *            Use multilevel headers for the rows by default. Adds an extra row
         *            with top level headers. If a custom columnHeaderFormatter is
         *            defined, this can override the behavior.
         * @returns {Array<Array<Number|String>>}
         *          The current chart data
         */
        getDataRows(multiLevelHeaders: boolean): ((number | string)[])[];

        /**
         * Returns an array of all currently selected points in the chart. Points
         * can be selected by clicking or programmatically by the {@link
         * Highcharts.Point#select} function.
         * @return {Array<Point>}
         *         The currently selected points.
         * @sample highcharts/plotoptions/series-allowpointselect-line/
         *         Get selected points
         */
        getSelectedPoints(): (Point)[];

        /**
         * Returns an array of all currently selected series in the chart. Series
         * can be selected either programmatically by the {@link
         * Highcharts.Series#select} function or by checking the checkbox next to
         * the legend item if {@link
         * https://api.highcharts.com/highcharts/plotOptions.series.showCheckbox|
         * series.showCheckBox} is true.
         * @return {Array<Series>}
         *         The currently selected series.
         * @sample highcharts/members/chart-getselectedseries/
         *         Get selected series
         */
        getSelectedSeries(): (Series)[];

        /**
         * Generate stacks for each series and calculate stacks total values
         */
        getStacks(): void;

        /**
         * Return an SVG representation of the chart.
         * @param {Options} chartOptions
         *         Additional chart options for the generated SVG representation.
         *         For collections like `xAxis`, `yAxis` or `series`, the additional
         *         options is either merged in to the orininal item of the same
         *         `id`, or to the first item if a common id is not found.
         * @return {String}
         *         The SVG representation of the rendered chart.
         * @sample highcharts/members/chart-getsvg/
         *         View the SVG from a button
         */
        getSVG(chartOptions: Options): string;

        /**
         * Export-data module required. Build a HTML table with the chart's current
         * data.
         * @sample  highcharts/export-data/viewdata/
         *          View the data from the export menu
         * @returns {String}
         *          HTML representation of the data.
         */
        getTable(): string;

        /**
         * Flag used in parallel coordinates plot to check if chart has ||-coords.
         * @name hasParallelCoordinates
         * @memberOf Chart
         * @type {Boolean}
         * @instance
         */
        hasParallelCoordinates: boolean;

        /**
         * Hide the loading layer.
         * @see    Highcharts.Chart#showLoading
         * @sample highcharts/members/chart-hideloading/
         *         Show and hide loading from a button
         * @sample stock/members/chart-show-hide-loading/
         *         Toggle loading in Highstock
         */
        hideLoading(): void;

        /**
         * Hide overlapping labels. Labels are moved and faded in and out on zoom to
         * provide a smooth visual imression.
         */
        hideOverlappingLabels(): void;

        /**
         * Further sanitize the mock-SVG that is generated when exporting charts in
         * oldIE.
         */
        ieSanitizeSVG(): void;

        /**
         * Overridable function that initializes the chart. The constructor's
         * arguments are passed on directly.
         */
        init(): void;

        /**
         * Analyze inherited styles from stylesheets and add them inline
         * @todo: What are the border styles for text about? In general, text has a lot
         * of properties.
         * @todo: Make it work with IE9 and IE10.
         */
        inlineStyles(): void;

        /**
         * Returns true if the chart is in series boost mode
         * @returns {Boolean} - true if the chart is in series boost mode
         */
        isChartSeriesBoosting(): boolean;

        /**
         * Check whether a given point is within the plot area.
         * @param  {Number} plotX
         *         Pixel x relative to the plot area.
         * @param  {Number} plotY
         *         Pixel y relative to the plot area.
         * @param  {Boolean} inverted
         *         Whether the chart is inverted.
         * @return {Boolean}
         *         Returns true if the given point is inside the plot area.
         */
        isInsidePlot(plotX: number, plotY: number, inverted: boolean): boolean;

        /**
         * Apply context to a format string from lang options of the chart.
         * @param  {string} langKey Key (using dot notation) into lang option structure
         * @param  {object} context Context to apply to the format string
         * @return {string} The formatted string
         */
        langFormat(langKey: string, context: object): string;

        /**
         * Highmaps only. Zoom in or out of the map. See also {@link Point#zoomTo}.
         * See {@link Chart#fromLatLonToPoint} for how to get the `centerX` and
         * `centerY` parameters for a geographic location.
         * @param  {Number} [howMuch]
         *         How much to zoom the map. Values less than 1 zooms in. 0.5 zooms
         *         in to half the current view. 2 zooms to twice the current view.
         *         If omitted, the zoom is reset.
         * @param  {Number} [centerX]
         *         The X axis position to center around if available space.
         * @param  {Number} [centerY]
         *         The Y axis position to center around if available space.
         * @param  {Number} [mouseX]
         *         Fix the zoom to this position if possible. This is used for
         *         example in mousewheel events, where the area under the mouse
         *         should be fixed as we zoom in.
         * @param  {Number} [mouseY]
         *         Fix the zoom to this position if possible.
         */
        mapZoom(howMuch?: number, centerX?: number, centerY?: number, mouseX?: number, mouseY?: number): void;

        /**
         * Handle a single responsiveness rule
         */
        matchResponsiveRule(): void;

        /**
         * Experimental function to send a chart's config to the Cloud for editing.
         * Limitations
         * - All functions (formatters and callbacks) are removed since they're not
         *   JSON.
         * @todo
         * - Let the Cloud throw a friendly warning about unsupported structures like
         *   formatters.
         * - Dynamically updated charts probably fail, we need a generic
         *   Chart.getOptions function that returns all non-default options. Should also
         *   be used by the export module.
         */
        openInCloud(): void;

        /**
         * The options structure for the chart. It contains members for
         * the sub elements like series, legend, tooltip etc.
         * @memberof Highcharts.Chart
         * @name options
         * @type {Options}
         * @instance
         */
        options: Options;

        /**
         * The current height of the plot area in pixels.
         * @name plotHeight
         * @memberOf Chart
         * @type {Number}
         * @instance
         */
        plotHeight: number;

        /**
         * The current left position of the plot area in pixels.
         * @name plotLeft
         * @memberOf Chart
         * @type {Number}
         * @instance
         */
        plotLeft: number;

        /**
         * The current top position of the plot area in pixels.
         * @name plotTop
         * @memberOf Chart
         * @type {Number}
         * @instance
         */
        plotTop: number;

        /**
         * The current width of the plot area in pixels.
         * @name plotWidth
         * @memberOf Chart
         * @type {Number}
         * @instance
         */
        plotWidth: number;

        /**
         * The Pointer that keeps track of mouse and touch interaction.
         * @memberof Chart
         * @name pointer
         * @type Pointer
         * @instance
         */
        pointer: Pointer;

        /**
         * Exporting module required. Clears away other elements in the page and
         * prints the chart as it is displayed. By default, when the exporting
         * module is enabled, a context button with a drop down menu in the upper
         * right corner accesses this function.
         * @sample highcharts/members/chart-print/
         *         Print from a HTML button
         */
        print(): void;

        /**
         * These properties cause isDirtyBox to be set to true when updating. Can be
         * extended from plugins.
         */
        propsRequireDirtyBox: string[];

        /**
         * These properties cause all series to be updated when updating. Can be
         * extended from plugins.
         */
        propsRequireUpdateSeries: string[];

        /**
         * Redraw the chart after changes have been done to the data, axis extremes
         * chart size or chart elements. All methods for updating axes, series or
         * points have a parameter for redrawing the chart. This is `true` by
         * default. But in many cases you want to do more than one operation on the
         * chart before redrawing, for example add a number of points. In those
         * cases it is a waste of resources to redraw the chart for each new point
         * added. So you add the points and call `chart.redraw()` after.
         * @param  {AnimationOptions} animation
         *         If or how to apply animation to the redraw.
         */
        redraw(animation: AnimationOptions): void;

        /**
         * Reflows the chart to its container. By default, the chart reflows
         * automatically to its container following a `window.resize` event, as per
         * the {@link https://api.highcharts/highcharts/chart.reflow|chart.reflow}
         * option. However, there are no reliable events for div resize, so if the
         * container is resized without a window resize event, this must be called
         * explicitly.
         * @param  {Object} e
         *         Event arguments. Used primarily when the function is called
         *         internally as a response to window resize.
         * @sample highcharts/members/chart-reflow/
         *         Resize div and reflow
         * @sample highcharts/chart/events-container/
         *         Pop up and reflow
         */
        reflow(e: any): void;

        /**
         * Remove an annotation from the chart.
         * @param {String} id - The annotation's id.
         */
        removeAnnotation(id: string): void;

        /**
         * The renderer instance of the chart. Each chart instance has only one
         * associated renderer.
         * @type {SVGRenderer}
         * @name renderer
         * @memberOf Chart
         * @instance
         */
        renderer: SVGRenderer;

        /**
         * All the current series in the chart.
         * @memberof Highcharts.Chart
         * @name series
         * @type {Array.<Highcharts.Series>}
         * @instance
         */
        series: (Series)[];

        /**
         * Set the {@link Chart.container|chart container's} class name, in
         * addition to `highcharts-container`.
         */
        setClassName(): void;

        /**
         * Define how many parellel axes we have according to the longest  dataset
         * This is quite heavy - loop over all series and check series.data.length
         * Consider:
         * - make this an option, so user needs to set this to get better
         *      performance
         * - check only first series for number of points and assume the rest is the
         *      same
         * @param {Object} options User options
         */
        setParallelInfo(options: any): void;

        /**
         * Update the chart based on the current chart/document size and options for
         * responsiveness.
         */
        setResponsive(): void;

        /**
         * Resize the chart to a given width and height. In order to set the width
         * only, the height argument may be skipped. To set the height only, pass
         * `undefined` for the width.
         * @param  {Number|undefined|null} [width]
         *         The new pixel width of the chart. Since v4.2.6, the argument can
         *         be `undefined` in order to preserve the current value (when
         *         setting height only), or `null` to adapt to the width of the
         *         containing element.
         * @param  {Number|undefined|null} [height]
         *         The new pixel height of the chart. Since v4.2.6, the argument can
         *         be `undefined` in order to preserve the current value, or `null`
         *         in order to adapt to the height of the containing element.
         * @param  {AnimationOptions} [animation=true]
         *         Whether and how to apply animation.
         * @sample highcharts/members/chart-setsize-button/
         *         Test resizing from buttons
         * @sample highcharts/members/chart-setsize-jquery-resizable/
         *         Add a jQuery UI resizable
         * @sample stock/members/chart-setsize/
         *         Highstock with UI resizable
         */
        setSize(width?: number | undefined | null, height?: number | undefined | null, animation?: AnimationOptions): void;

        /**
         * Shortcut to set the subtitle options. This can also be done from {@link
         * Chart#update} or {@link Chart#setTitle}.
         * @param  {SubtitleOptions} options
         *         New subtitle options. The subtitle text itself is set by the
         *         `options.text` property.
         */
        setSubtitle(options: SubtitleOptions): void;

        /**
         * Set a new title or subtitle for the chart.
         * @param {TitleOptions}  titleOptions
         *         New title options. The title text itself is set by the
         *         `titleOptions.text` property.
         * @param {SubtitleOptions}  subtitleOptions
         *         New subtitle options. The subtitle text itself is set by the
         *         `subtitleOptions.text` property.
         * @param  {Boolean} redraw
         *         Whether to redraw the chart or wait for a later call to
         *         `chart.redraw()`.
         * @sample highcharts/members/chart-settitle/ Set title text and styles
         */
        setTitle(titleOptions: TitleOptions, subtitleOptions: SubtitleOptions, redraw: boolean): void;

        /**
         * Dim the chart and show a loading text or symbol. Options for the loading
         * screen are defined in {@link
         * https://api.highcharts.com/highcharts/loading|the loading options}.
         * @param  {String} str
         *         An optional text to show in the loading label instead of the
         *         default one. The default text is set in {@link
         *         http://api.highcharts.com/highcharts/lang.loading|lang.loading}.
         * @sample highcharts/members/chart-hideloading/
         *         Show and hide loading from a button
         * @sample highcharts/members/chart-showloading/
         *         Apply different text labels
         * @sample stock/members/chart-show-hide-loading/
         *         Toggle loading in Highstock
         */
        showLoading(str: string): void;

        /**
         * The chart subtitle. The subtitle has an `update` method that
         * allows modifying the options directly or indirectly via
         * `chart.update`.
         * @memberof Highcharts.Chart
         * @name subtitle
         * @type Object
         * @instance
         */
        subtitle: any;

        /**
         * The `Time` object associated with the chart. Since v6.0.5,
         * time settings can be applied individually for each chart. If
         * no individual settings apply, the `Time` object is shared by
         * all instances.
         * @memberof Highcharts.Chart
         * @name time
         * @type Highcharts.Time
         * @instance
         */
        time: Time;

        /**
         * The chart title. The title has an `update` method that allows
         * modifying the options directly or indirectly via
         * `chart.update`.
         * @memberof Highcharts.Chart
         * @name title
         * @type Object
         * @instance
         * @sample highcharts/members/title-update/
         *         Updating titles
         */
        title: any;

        /**
         * Highmaps only. Get point from latitude and longitude using specified
         * transform definition.
         * @function transformFromLatLon
         * @memberOf Chart.prototype
         * @param  {Object} latLon
         *         A latitude/longitude object.
         * @param  {Number} latLon.lat
         *         The latitude.
         * @param  {Number} latLon.lon
         *         The longitude.
         * @param  {Object} transform
         *         The transform definition to use as explained in the {@link
         *         https://www.highcharts.com/docs/maps/latlon|documentation}.
         * @return {Object}
         *         An object with `x` and `y` properties.
         * @sample maps/series/latlon-transform/
         *         Use specific transformation for lat/lon
         */
        transformFromLatLon(latLon: {
            lat: number;
            lon: number;
        }, transform: any): any;

        /**
         * Highmaps only. Get latLon from point using specified transform definition.
         * The method returns an object with the numeric properties `lat` and `lon`.
         * @function transformToLatLon
         * @memberOf Chart.prototype
         * @param  {Point|Object} point
         *         A `Point` instance, or or any object containing the properties `x`
         *         and `y` with numeric values.
         * @param  {Object} transform
         *         The transform definition to use as explained in the {@link
         *         https://www.highcharts.com/docs/maps/latlon|documentation}.
         * @return {Object}
         *         An object with `lat` and `lon` properties.
         * @sample maps/series/latlon-transform/
         *         Use specific transformation for lat/lon
         */
        transformToLatLon(point: Point | any, transform: any): any;

        /**
         * A generic function to update any element of the chart. Elements can be
         * enabled and disabled, moved, re-styled, re-formatted etc.
         * A special case is configuration objects that take arrays, for example
         * {@link https://api.highcharts.com/highcharts/xAxis|xAxis},
         * {@link https://api.highcharts.com/highcharts/yAxis|yAxis} or
         * {@link https://api.highcharts.com/highcharts/series|series}. For these
         * collections, an `id` option is used to map the new option set to an
         * existing object. If an existing object of the same id is not found, the
         * corresponding item is updated. So for example, running `chart.update`
         * with a series item without an id, will cause the existing chart's series
         * with the same index in the series array to be updated. When the
         * `oneToOne` parameter is true, `chart.update` will also take care of
         * adding and removing items from the collection. Read more under the
         * parameter description below.
         * See also the {@link https://api.highcharts.com/highcharts/responsive|
         * responsive option set}. Switching between `responsive.rules` basically
         * runs `chart.update` under the hood.
         * @param  {Options} options
         *         A configuration object for the new chart options.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart.
         * @param  {Boolean} [oneToOne=false]
         *         When `true`, the `series`, `xAxis` and `yAxis` collections will
         *         be updated one to one, and items will be either added or removed
         *         to match the new updated options. For example, if the chart has
         *         two series and we call `chart.update` with a configuration
         *         containing three series, one will be added. If we call
         *         `chart.update` with one series, one will be removed. Setting an
         *         empty `series` array will remove all series, but leaving out the
         *         `series` property will leave all series untouched. If the series
         *         have id's, the new series options will be matched by id, and the
         *         remaining ones removed.
         * @param  {AnimationOptions} [animation=true]
         *         Whether to apply animation, and optionally animation
         *         configuration.
         * @sample highcharts/members/chart-update/
         *         Update chart geometry
         */
        update(options: Options, redraw?: boolean, oneToOne?: boolean, animation?: AnimationOptions): void;

        /**
         * Export-data module required. View the data in a table below the chart.
         */
        viewData(): void;

        /**
         * A collection of the X axes in the chart.
         * @type {Array<Axis>}
         * @name xAxis
         * @memberOf Highcharts.Chart
         * @instance
         */
        xAxis: (Axis)[];

        /**
         * A collection of the Y axes in the chart.
         * @type {Array<Axis>}
         * @name yAxis
         * @memberOf Highcharts.Chart
         * @instance
         */
        yAxis: (Axis)[];

    }

    /**
     * @type {number}
     */
    const chartCount: number;

    interface ChartOptions {
        alignTicks: boolean;
        animation: boolean | any;
        backgroundColor: ColorString;
        borderColor: ColorString;
        borderRadius: number;
        borderWidth: number;
        className: string;
        colorCount: number;
        defaultSeriesType: string;
        description: string;
        events: ChartOptionsEvents;
        height: number | string;
        ignoreHiddenSeries: boolean;
        inverted: boolean;
        map: string | any[];
        mapTransforms: any;
        margin: any[];
        marginBottom: number;
        marginLeft: number;
        marginRight: number;
        marginTop: number;
        options3d: ChartOptionsOptions3d;
        panKey: string;
        panning: boolean;
        parallelAxes: ChartOptionsParallelAxes;
        parallelCoordinates: boolean;
        pinchType: string;
        plotBackgroundColor: ColorString;
        plotBackgroundImage: string;
        plotBorderColor: ColorString;
        plotBorderWidth: number;
        plotShadow: boolean | any;
        polar: boolean;
        reflow: boolean;
        renderTo: string | any;
        resetZoomButton: ChartOptionsResetZoomButton;
        scrollablePlotArea: ChartOptionsScrollablePlotArea;
        selectionMarkerFill: ColorString;
        shadow: boolean | any;
        showAxes: boolean;
        spacing: number[];
        spacingBottom: number;
        spacingLeft: number;
        spacingRight: number;
        spacingTop: number;
        style: CSSObject;
        type: string;
        typeDescription: string;
        width: number;
        zoomType: string;
    }

    interface ChartOptionsEvents {
        addSeries: ()=>any;
        afterPrint: ()=>any;
        beforePrint: ()=>any;
        click: ()=>any;
        drilldown: ()=>any;
        drillup: ()=>any;
        drillupall: ()=>any;
        load: ()=>any;
        redraw: ()=>any;
        render: ()=>any;
        selection: ()=>any;
    }

    interface ChartOptionsOptions3d {
        alpha: number;
        axisLabelPosition: string;
        beta: number;
        depth: number;
        enabled: boolean;
        fitToPlot: boolean;
        frame: ChartOptionsOptions3dFrame;
        viewDistance: number;
    }

    interface ChartOptionsOptions3dFrame {
        back: ChartOptionsOptions3dFrameBack;
        bottom: ChartOptionsOptions3dFrameBottom;
        front: ChartOptionsOptions3dFrameFront;
        left: ChartOptionsOptions3dFrameLeft;
        right: ChartOptionsOptions3dFrameRight;
        side: ChartOptionsOptions3dFrameSide;
        size: number;
        top: ChartOptionsOptions3dFrameTop;
        visible: string;
    }

    interface ChartOptionsOptions3dFrameBack extends ChartOptionsOptions3dFrameBottom{
    }

    interface ChartOptionsOptions3dFrameBottom {
        color: ColorString;
        size: number;
        visible: boolean | string;
    }

    interface ChartOptionsOptions3dFrameFront extends ChartOptionsOptions3dFrameBottom{
    }

    interface ChartOptionsOptions3dFrameLeft extends ChartOptionsOptions3dFrameBottom{
    }

    interface ChartOptionsOptions3dFrameRight extends ChartOptionsOptions3dFrameBottom{
    }

    interface ChartOptionsOptions3dFrameSide {
        color: ColorString;
        size: number;
    }

    interface ChartOptionsOptions3dFrameTop extends ChartOptionsOptions3dFrameBottom{
    }

    interface ChartOptionsParallelAxes extends YAxisOptions{
        labels: ChartOptionsParallelAxesLabels;
        lineWidth: number;
        offset: number;
        title: ChartOptionsParallelAxesTitle;
    }

    interface ChartOptionsParallelAxesLabels {
        align: string;
        reserveSpace: boolean;
        x: number;
        y: number;
    }

    interface ChartOptionsParallelAxesTitle {
        reserveSpace: boolean;
        text: string;
    }

    interface ChartOptionsResetZoomButton {
        position: ChartOptionsResetZoomButtonPosition;
        relativeTo: string;
        theme: ChartOptionsResetZoomButtonTheme;
    }

    interface ChartOptionsResetZoomButtonPosition {
        align: string;
        verticalAlign: string;
        x: number;
        y: number;
    }

    interface ChartOptionsResetZoomButtonTheme {
        zIndex: number;
    }

    interface ChartOptionsScrollablePlotArea {
        minWidth: number;
        scrollPositionX: number;
    }

    /**
     * An array containing the current chart objects in the page. A chart's
     * position in the array is preserved throughout the page's lifetime. When
     * a chart is destroyed, the array item becomes `undefined`.
     * @type {Array<Chart>}
     * @memberOf Highcharts
     */
    const charts: (Chart)[];

    /**
     * Handle color operations. The object methods are chainable.
     * @class
     * @chart-private
     * @param {String} input The input color in either rbga or hex format
     */
    class Color {
        constructor(input: string);

        /**
         * Brighten the color
         * @param {Number} alpha
         */
        brighten(alpha: number): void;

        /**
         * Return the color a specified format
         * @param {String} format
         */
        get(format: string): void;

        /**
         * Parse the input color to rgba array
         * @param {String} input
         */
        init(input: string): void;

        /**
         * Set the color's opacity to a given alpha value
         * @param {Number} alpha
         */
        setOpacity(alpha: number): void;

    }

    /**
     * The ColorAxis object for inclusion in gradient legends
     * @class H.ColorAxis
     * @extends H.Axis
     */
    class ColorAxis extends Axis {
        /**
         * The color axis appears inside the legend and has its own legend
         * symbol
         */
        drawLegendSymbol(): void;

        /**
         * Get the legend item symbols for data classes
         */
        getDataClassLegendSymbols(): void;

        /**
         * Override the getOffset method to add the whole axis groups inside
         * the legend.
         */
        getOffset(): void;

        /**
         * Initialize the color axis
         */
        init(): void;

        /**
         * Extend basic axis remove by also removing the legend item.
         */
        remove(): void;

        /**
         * Create the color gradient
         */
        setLegendColor(): void;

        /**
         * Extend the setOptions method to process extreme colors and color
         * stops.
         */
        setOptions(): void;

        /**
         * Fool the legend
         */
        setState(): void;

        /**
         * Override so that ticks are not added in data class axes (#6914)
         */
        setTickPositions(): void;

        /**
         * Translate from a value to a color
         */
        toColor(): void;

    }

    interface ColorAxisOptions extends XAxisOptions{
        allowDecimals: boolean;
        dataClassColor: string;
        dataClasses: (ColorAxisOptionsDataClasses)[];
        endOnTick: boolean;
        events: ColorAxisOptionsEvents;
        gridLineColor: ColorString;
        gridLineWidth: number;
        labels: ColorAxisOptionsLabels;
        marker: ColorAxisOptionsMarker;
        max: number;
        maxColor: ColorString;
        maxPadding: number;
        min: number;
        minColor: ColorString;
        minPadding: number;
        reversed: boolean;
        showInLegend: boolean;
        startOnTick: boolean;
        stops: (any[])[];
        tickInterval: number;
        tickLength: number;
        tickPixelInterval: number;
        type: string;
    }

    interface ColorAxisOptionsDataClasses {
        color: ColorString;
        from: number;
        name: string;
        to: number;
    }

    interface ColorAxisOptionsEvents {
        legendItemClick: ()=>any;
    }

    interface ColorAxisOptionsLabels extends XAxisOptionsLabels{
        overflow: string;
        rotation: number;
    }

    interface ColorAxisOptionsMarker {
        animation: ColorAxisOptionsMarkerAnimation;
        color: ColorString;
    }

    interface ColorAxisOptionsMarkerAnimation {
        duration: number;
    }

    /**
     * Mixin for maps and heatmaps
     * @mixin
     * @name colorPointMixin
     * @memberof Highcharts
     */
    interface colorPointMixin {
        /**
         * Color points have a value option that determines whether or not it is
         * a null point
         */
        isValid(): void;
        /**
         * Set the visibility of a single point
         */
        setVisible(): void;
    }

    /**
     * color series mixin
     * @mixin
     * @name colorSeriesMixin
     * @memberof Highcharts
     */
    interface colorSeriesMixin {
        /**
         * Get the color attibutes to apply on the graphic
         */
        colorAttribs(): void;
        /**
         * In choropleth maps, the color is a result of the value, so this needs
         * translation too
         */
        translateColors(): void;
    }

    interface CreditsOptions {
        enabled: boolean;
        href: string;
        mapText: string;
        mapTextFull: string;
        position: CreditsOptionsPosition;
        style: CreditsOptionsStyle;
        text: string;
    }

    interface CreditsOptionsPosition {
        align: string;
        verticalAlign: string;
        x: number;
        y: number;
    }

    interface CreditsOptionsStyle {
        color: string;
        cursor: string;
        fontSize: string;
    }

    /**
     * @param options
     * @param chartOptions
     */
    function data(options: any, chartOptions: any): void;

    /**
     * The Data constructor
     * @param dataOptions
     * @param chartOptions
     * @param chart
     * @constructor
     * @chart-private
     * @memberof Highcharts
     */
    class Data {
        constructor(dataOptions: any, chartOptions: any, chart: any);

        /**
         * If a complete callback function is provided in the options, interpret the
         * columns into a Highcharts options object.
         */
        complete(): void;

        /**
         * When the data is parsed into columns, either by CSV, table, GS or direct
         * input, continue with other operations.
         */
        dataFound(): void;

        /**
         * A collection of available date formats, extendable from the outside to
         * support custom date formats.
         */
        dateFormats: object;

        /**
         * Fetch or refetch live data
         */
        fetchLiveData(): void;

        /**
         * Get the column distribution. For example, a line series takes a single
         * column for Y values. A range series takes two columns for low and high
         * values respectively, and an OHLC series takes four columns.
         */
        getColumnDistribution(): void;

        /**
         * Initialize the Data object with the given options
         */
        init(): void;

        /**
         * Load an SVG file and extract the paths
         * @param {Object} url
         */
        loadSVG(url: any): void;

        /**
         * Parse a single column. Set properties like .isDatetime and .isNumeric.
         */
        parseColumn(): void;

        /**
         * Parse a CSV input string
         */
        parseCSV(): void;

        /**
         * A hook for working directly on the parsed columns
         */
        parsed(): void;

        /**
         * Parse a date and return it as a number. Overridable through
         * `options.parseDate`.
         */
        parseDate(): void;

        /**
         * Parse a Google spreadsheet.
         */
        parseGoogleSpreadsheet(): void;

        /**
         * Parse a HTML table
         */
        parseTable(): void;

        /**
         * Parse numeric cells in to number types and date types in to true dates.
         */
        parseTypes(): void;

        /**
         * Parse an SVG path into a simplified array that Highcharts can read
         */
        pathToArray(): void;

        /**
         * Join the path back to a string for compression
         */
        pathToString(): void;

        /**
         * Scale the path to fit within a given box and round all numbers
         */
        roundPaths(): void;

        /**
         * Reorganize rows into columns
         */
        rowsToColumns(): void;

        /**
         * Trim a string from whitespace
         */
        trim(): void;

    }

    interface DataOptions {
        beforeParse: ()=>any;
        columns: (any[])[];
        columnsURL: string;
        complete: ()=>any;
        csv: string;
        csvURL: string;
        dataRefreshRate: number;
        dateFormat: string;
        decimalPoint: string;
        enablePolling: boolean;
        endColumn: number;
        endRow: number;
        firstRowAsNames: boolean;
        googleSpreadsheetKey: string;
        googleSpreadsheetWorksheet: string;
        itemDelimiter: string;
        lineDelimiter: string;
        parsed: ()=>any;
        parseDate: ()=>any;
        rows: (any[])[];
        rowsURL: string;
        seriesMapping: any[];
        startColumn: number;
        startRow: number;
        switchRowsAndColumns: boolean;
        table: string | HTMLElement;
    }

    /**
     * A hook for defining additional date format specifiers. New
     * specifiers are defined as key-value pairs by using the
     * specifier as key, and a function which takes the timestamp as
     * value. This function returns the formatted portion of the
     * date.
     * @type {Object}
     * @name dateFormats
     * @memberOf Highcharts
     * @sample highcharts/global/dateformats/
     *         Adding support for week
     * number
     */
    const dateFormats: any;

    /**
     * @name defaultDataGroupingUnits
     * @memberof Highcharts
     * @static
     */
    const defaultDataGroupingUnits: any;

    /**
     * Series defaults
     */
    const defaultPlotOptions: any;

    /**
     * @type {number}
     */
    const deg2rad: number;

    /**
     * Provides methods for auto setting/updating series data based on the based
     * series data.
     * @mixin
     * @memberof Highcharts
     */
    interface derivedSeriesMixin {
        /**
         * Adds events to the base series - it required for recalculating the data in
         * the series if the base series is updated / removed / etc.
         * @returns {undefined}
         */
        addBaseSeriesEvents(): undefined;
        /**
         * Adds events for the series
         * @returns {undefined}
         */
        addEvents(): undefined;
        /**
         * Destroys the series
         * @returns {undefined}
         */
        destroy(): undefined;
        /**
         * Initialise series
         * returns {undefined}
         */
        init(): void;
        /**
         * Sets base series for the series
         * returns {undefined}
         */
        setBaseSeries(): void;
        /**
         * Method to be implemented - inside the method the series has already access
         * to the base series via m `this.baseSeries` and the bases data is
         * initialised. It should return data in the format accepted by
         * `Series.setData()` method
         * @function
         * @returns {Array} - an array of data
         */
        setDerivedData(): any[];
    }

    /**
     * General distribution algorithm for distributing labels of differing size
     * along a confined length in two dimensions. The algorithm takes an array of
     * objects containing a size, a target and a rank. It will place the labels as
     * close as possible to their targets, skipping the lowest ranked labels if
     * necessary.
     */
    function distribute(): void;

    /**
     * @type {Document}
     */
    const doc: Document;

    /**
     * Get data URL to an image of an SVG and call download on it
     * options object:
     * - filename: Name of resulting downloaded file without extension
     * - type: File type of resulting download
     * - scale: Scaling factor of downloaded image compared to source
     * - libURL: URL pointing to location of dependency scripts to download on
     *   demand
     */
    function downloadSVGLocal(): void;

    interface DrilldownOptions {
        activeAxisLabelStyle: DrilldownOptionsActiveAxisLabelStyle;
        activeDataLabelStyle: DrilldownOptionsActiveDataLabelStyle;
        allowPointDrilldown: boolean;
        animation: DrilldownOptionsAnimation;
        drillUpButton: DrilldownOptionsDrillUpButton;
        series: any[];
    }

    interface DrilldownOptionsActiveAxisLabelStyle {
        color: string;
        cursor: string;
        fontWeight: string;
        textDecoration: string;
    }

    interface DrilldownOptionsActiveDataLabelStyle {
        color: string;
        cursor: string;
        fontWeight: string;
        textDecoration: string;
    }

    interface DrilldownOptionsAnimation {
        duration: number | string;
    }

    interface DrilldownOptionsDrillUpButton {
        position: DrilldownOptionsDrillUpButtonPosition;
        relativeTo: string;
        theme: any;
    }

    interface DrilldownOptionsDrillUpButtonPosition {
        align: string;
        verticalAlign: string;
        x: number;
        y: number;
    }

    /**
     * An "async" foreach loop. Uses a setTimeout to keep the loop from blocking the
     * UI thread.
     * @param {Array} arr - the array to loop through
     * @param {Function} fn - the callback to call for each item
     * @param {Function} finalFunc - the callback to call when done
     * @param {Number} chunkSize - the number of iterations per timeout
     * @param {Number} i - the current index
     * @param {Boolean} noTimeout - set to true to skip timeouts
     */
    function eachAsync(arr: any[], fn: ()=>any, finalFunc: ()=>any, chunkSize: number, i: number, noTimeout: boolean): void;

    interface ExportingOptions {
        allowHTML: boolean;
        buttons: ExportingOptionsButtons;
        chartOptions: any;
        csv: ExportingOptionsCsv;
        enabled: boolean;
        error: ()=>any;
        fallbackToExportServer: boolean;
        filename: string;
        formAttributes: any;
        libURL: string;
        menuItemDefinitions: any;
        printMaxWidth: number;
        scale: number;
        showTable: boolean;
        sourceHeight: number;
        sourceWidth: number;
        tableCaption: boolean | string;
        type: string;
        url: string;
        useMultiLevelHeaders: boolean;
        useRowspanHeaders: boolean;
        width: number;
    }

    interface ExportingOptionsButtons {
        contextButton: ExportingOptionsButtonsContextButton;
    }

    interface ExportingOptionsButtonsContextButton extends NavigationOptionsButtonOptions{
        _titleKey: string;
        className: string;
        menuClassName: string;
        menuItems: string[] | any[];
        onclick: ()=>any;
        symbol: string;
        symbolFill: ColorString;
        x: number;
    }

    interface ExportingOptionsCsv {
        columnHeaderFormatter: (()=>any) | null;
        dateFormat: string;
        decimalPoint: string;
        itemDelimiter: string;
        lineDelimiter: string;
    }

    /**
     * Get the updated default options. Until 3.0.7, merely exposing defaultOptions
     * for outside modules wasn't enough because the setOptions method created a new
     * object.
     */
    function getOptions(): void;

    interface GlobalOptions {
        canvasToolsURL: string;
        Date: any;
        getTimezoneOffset: ()=>any;
        timezone: string;
        timezoneOffset: number;
        useUTC: boolean;
        VMLRadialGradientURL: string;
    }

    /**
     * @type {boolean}
     */
    const hasBidiBug: boolean;

    /**
     * @type {boolean}
     */
    const hasTouch: boolean;

    /**
     * Returns true if the current browser supports webgl
     */
    function hasWebGLSupport(): void;

    /**
     * Augmented methods for the x axis in order to hide it completely, used for
     * the X axis in gauges
     * @mixin
     * @memberof Highcharts
     */
    interface hiddenAxisMixin {
    }

    /**
     * A HTML DOM element.
     * @typedef {HTMLElement} HTMLDOMElement
     * @memberof H
     */
    type HTMLDOMElement = HTMLElement;

    /**
     * i18n formatting function. Extends H.format() functionality by also handling
     * arrays and plural conditionals. Arrays can be indexed as follows:
     *  Format: 'This is the first index: {myArray[0]}. The last: {myArray[-1]}.'
     *  Context: { myArray: [0, 1, 2, 3, 4, 5] }
     *  Result: 'This is the first index: 0. The last: 5.'
     * They can also be iterated using the #each() function. This will repeat the
     * contents of the bracket expression for each element. Example:
     *  Format: 'List contains: {#each(myArray)cm }'
     *  Context: { myArray: [0, 1, 2] }
     *  Result: 'List contains: 0cm 1cm 2cm '
     * The #each() function optionally takes a length parameter. If positive, this
     * parameter specifies the max number of elements to iterate through. If
     * negative, the function will subtract the number from the length of the array.
     * Use this to stop iterating before the array ends. Example:
     *  Format: 'List contains: {#each(myArray, -1), }and {myArray[-1]}.'
     *  Context: { myArray: [0, 1, 2, 3] }
     *  Result: 'List contains: 0, 1, 2, and 3.'
     * Use the #plural() function to pick a string depending on whether or not a
     * context object is 1. Arguments are #plural(obj, plural, singular). Example:
     *  Format: 'Has {numPoints} {#plural(numPoints, points, point}.'
     *  Context: { numPoints: 5 }
     *  Result: 'Has 5 points.'
     * Optionally there are additional parameters for dual and none:
     *  #plural(obj,plural,singular,dual,none)
     * Example:
     *  Format: 'Has {#plural(numPoints, many points, one point, two points, none}.'
     *  Context: { numPoints: 2 }
     *  Result: 'Has two points.'
     * The dual or none parameters will take precedence if they are supplied.
     * @param   {string} formatString The string to format.
     * @param   {object} context Context to apply to the format string.
     * @param   {Time} time A `Time` instance for date formatting, passed on to
     *                 H.format().
     * @return  {string} The formatted string.
     */
    function i18nFormat(formatString: string, context: object, time: Time): string;

    /**
     * @type {boolean}
     */
    const isChrome: boolean;

    /**
     * @type {boolean}
     */
    const isFirefox: boolean;

    /**
     * @type {boolean}
     */
    const isMS: boolean;

    /**
     * @type {boolean}
     */
    const isSafari: boolean;

    /**
     * @type {boolean}
     */
    const isTouchDevice: boolean;

    /**
     * @type {boolean}
     */
    const isWebKit: boolean;

    interface LabelsOptions {
        items: (LabelsOptionsItems)[];
        style: LabelsOptionsStyle;
    }

    interface LabelsOptionsItems {
        html: string;
        style: CSSObject;
    }

    interface LabelsOptionsStyle {
        color: string;
        position: string;
    }

    interface LangOptions {
        accessibility: LangOptionsAccessibility;
        contextButtonTitle: string;
        decimalPoint: string;
        downloadCSV: string;
        downloadJPEG: string;
        downloadPDF: string;
        downloadPNG: string;
        downloadSVG: string;
        downloadXLS: string;
        drillUpText: string;
        invalidDate: string;
        loading: string;
        months: string[];
        noData: string;
        numericSymbolMagnitude: number;
        numericSymbols: string[];
        openInCloud: string;
        printChart: string;
        rangeSelectorFrom: string;
        rangeSelectorTo: string;
        rangeSelectorZoom: string;
        resetZoom: string;
        resetZoomTitle: string;
        shortMonths: string[];
        shortWeekdays: string[];
        thousandsSep: string;
        viewData: string;
        weekdays: string[];
        zoomIn: string;
        zoomOut: string;
    }

    interface LangOptionsAccessibility {
        axis: LangOptionsAccessibilityAxis;
        chartContainerLabel: string;
        chartHeading: string;
        chartTypes: LangOptionsAccessibilityChartTypes;
        defaultChartTitle: string;
        exporting: LangOptionsAccessibilityExporting;
        legendItem: string;
        longDescriptionHeading: string;
        mapZoomIn: string;
        mapZoomOut: string;
        navigationHint: string;
        noDescription: string;
        rangeSelectorButton: string;
        rangeSelectorMaxInput: string;
        rangeSelectorMinInput: string;
        screenReaderRegionLabel: string;
        series: LangOptionsAccessibilitySeries;
        seriesTypeDescriptions: LangOptionsAccessibilitySeriesTypeDescriptions;
        structureHeading: string;
        svgContainerTitle: string;
        tableSummary: string;
        viewAsDataTable: string;
    }

    interface LangOptionsAccessibilityAxis {
        xAxisDescriptionPlural: string;
        xAxisDescriptionSingular: string;
        yAxisDescriptionPlural: string;
        yAxisDescriptionSingular: string;
    }

    interface LangOptionsAccessibilityChartTypes {
        barMultiple: string;
        barSingle: string;
        boxplotMultiple: string;
        boxplotSingle: string;
        bubbleMultiple: string;
        bubbleSingle: string;
        columnMultiple: string;
        columnSingle: string;
        combinationChart: string;
        defaultMultiple: string;
        defaultSingle: string;
        emptyChart: string;
        lineMultiple: string;
        lineSingle: string;
        mapTypeDescription: string;
        pieMultiple: string;
        pieSingle: string;
        scatterMultiple: string;
        scatterSingle: string;
        splineMultiple: string;
        splineSingle: string;
        unknownMap: string;
    }

    interface LangOptionsAccessibilityExporting {
        chartMenuLabel: string;
        exportRegionLabel: string;
        menuButtonLabel: string;
    }

    interface LangOptionsAccessibilitySeries {
        description: string;
        summary: LangOptionsAccessibilitySeriesSummary;
        xAxisDescription: string;
        yAxisDescription: string;
    }

    interface LangOptionsAccessibilitySeriesSummary {
        bar: string;
        barCombination: string;
        boxplot: string;
        boxplotCombination: string;
        bubble: string;
        bubbleCombination: string;
        column: string;
        columnCombination: string;
        default: string;
        defaultCombination: string;
        line: string;
        lineCombination: string;
        map: string;
        mapbubble: string;
        mapbubbleCombination: string;
        mapCombination: string;
        mapline: string;
        maplineCombination: string;
        pie: string;
        pieCombination: string;
        scatter: string;
        scatterCombination: string;
        spline: string;
        splineCombination: string;
    }

    interface LangOptionsAccessibilitySeriesTypeDescriptions {
        arearange: string;
        areasplinerange: string;
        boxplot: string;
        bubble: string;
        columnrange: string;
        errorbar: string;
        funnel: string;
        pyramid: string;
        waterfall: string;
    }

    /**
     * The overview of the chart's series. The legend object is instanciated
     * internally in the chart constructor, and available from `chart.legend`. Each
     * chart has only one legend.
     * @class
     */
    class Legend {
        /**
         * Destroy the legend. Used internally. To reflow objects, `chart.redraw`
         * must be called after destruction.
         */
        destroy(): void;

        /**
         * Destroy a single legend item, used internally on removing series items.
         * @param {Series|Point} item
         *        The item to remove
         */
        destroyItem(item: Series | Point): void;

        /**
         * Get all items, which is one item per series for most series and one
         * item per point for pie series and its derivatives.
         * @return {Array<Series|Point>}
         *         The current items in the legend.
         */
        getAllItems(): (Series | Point)[];

        /**
         * Render the legend. This method can be called both before and after
         * `chart.render`. If called after, it will only rearrange items instead
         * of creating new ones. Called internally on initial render and after
         * redraws.
         */
        render(): void;

        /**
         * Scroll the legend by a number of pages.
         * @param  {Number} scrollBy
         *         The number of pages to scroll.
         * @param  {AnimationOptions} animation
         *         Whether and how to apply animation.
         */
        scroll(scrollBy: number, animation: AnimationOptions): void;

        /**
         * Set the legend item text.
         * @param  {Series|Point} item
         *         The item for which to update the text in the legend.
         */
        setText(item: Series | Point): void;

        /**
         * Update the legend with new options. Equivalent to running `chart.update`
         * with a legend configuration option.
         * @param  {LegendOptions} options
         *         Legend options.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart.
         * @sample highcharts/legend/legend-update/
         *         Legend update
         */
        update(options: LegendOptions, redraw?: boolean): void;

    }

    interface LegendOptions {
        align: string;
        alignColumns: boolean;
        backgroundColor: ColorString;
        borderColor: ColorString;
        borderRadius: number;
        borderWidth: number;
        enabled: boolean;
        floating: boolean;
        itemCheckboxStyle: LegendOptionsItemCheckboxStyle;
        itemDistance: number;
        itemHiddenStyle: LegendOptionsItemHiddenStyle;
        itemHoverStyle: LegendOptionsItemHoverStyle;
        itemMarginBottom: number;
        itemMarginTop: number;
        itemStyle: LegendOptionsItemStyle;
        itemWidth: number;
        keyboardNavigation: LegendOptionsKeyboardNavigation;
        labelFormat: string;
        labelFormatter: ()=>any;
        layout: string;
        lineHeight: number;
        margin: number;
        maxHeight: number;
        navigation: LegendOptionsNavigation;
        padding: number;
        reversed: boolean;
        rtl: boolean;
        shadow: boolean | any;
        squareSymbol: boolean;
        style: CSSObject;
        symbolHeight: number;
        symbolPadding: number;
        symbolRadius: number;
        symbolWidth: number;
        title: LegendOptionsTitle;
        useHTML: boolean;
        verticalAlign: string;
        width: number;
        x: number;
        y: number;
    }

    interface LegendOptionsItemCheckboxStyle {
        height: string;
        position: string;
        width: string;
    }

    interface LegendOptionsItemHiddenStyle {
        color: string;
    }

    interface LegendOptionsItemHoverStyle {
        color: string;
    }

    interface LegendOptionsItemStyle {
        color: string;
        fontSize: string;
        fontWeight: string;
        textOverflow: string;
    }

    interface LegendOptionsKeyboardNavigation {
        enabled: boolean;
    }

    interface LegendOptionsNavigation {
        activeColor: ColorString;
        animation: boolean | any;
        arrowSize: number;
        enabled: boolean;
        inactiveColor: ColorString;
        style: CSSObject;
    }

    interface LegendOptionsTitle {
        style: LegendOptionsTitleStyle;
        text: string;
    }

    interface LegendOptionsTitleStyle {
        fontWeight: string;
    }

    /**
     * LegendSymbolMixin
     * @mixin
     * @chart-private
     * @name LegendSymbolMixin
     * @memberof Highcharts
     */
    interface LegendSymbolMixin {
        /**
         * Get the series' symbol in the legend. This method should be overridable
         * to create custom symbols through
         * Highcharts.seriesTypes[type].prototype.drawLegendSymbols.
         * @param {Object} legend The legend object
         */
        drawLineMarker(legend: any): void;
        /**
         * Get the series' symbol in the legend
         * @param {Object} legend The legend object
         * @param {Object} item The series (this) or point
         */
        drawRectangle(legend: any, item: any): void;
    }

    interface LoadingOptions {
        hideDuration: number;
        labelStyle: LoadingOptionsLabelStyle;
        showDuration: number;
        style: LoadingOptionsStyle;
    }

    interface LoadingOptionsLabelStyle {
        fontWeight: string;
        position: string;
        top: string;
    }

    interface LoadingOptionsStyle {
        backgroundColor: string;
        opacity: number;
        position: string;
        textAlign: string;
    }

    /**
     * The MapNavigation handles buttons for navigation in addition to mousewheel
     * and doubleclick handlers for chart zooming.
     * @interface
     * @chart-private
     * @memberof H
     * @param {Chart} chart The Chart instance.
     */
    interface MapNavigation {
        /**
         * @name     chart
         * @memberOf MapNavigation
         * @type     {Chart}
         * @instance
         */
        chart: Chart;
        /**
         * Initiator function.
         * @param  {Chart} chart The Chart instance.
         */
        init(chart: Chart): void;
        /**
         * Update the map navigation with new options. Calling this is the same as
         * calling `chart.update({ mapNavigation: {} })`.
         * @param  {Object} options New options for the map navigation.
         */
        update(options: any): void;
        /**
         * Update events, called internally from the update function. Add new event
         * handlers, or unbinds events if disabled.
         * @param  {Object} options Options for map navigation.
         */
        updateEvents(options: any): void;
    }

    interface MapNavigationOptions {
        buttonOptions: MapNavigationOptionsButtonOptions;
        buttons: MapNavigationOptionsButtons;
        enableButtons: boolean;
        enabled: boolean;
        enableDoubleClickZoom: boolean;
        enableDoubleClickZoomTo: boolean;
        enableMouseWheelZoom: boolean;
        enableTouchZoom: boolean;
        mouseWheelSensitivity: number;
    }

    interface MapNavigationOptionsButtonOptions {
        align: string;
        alignTo: string;
        height: number;
        padding: number;
        style: MapNavigationOptionsButtonOptionsStyle;
        theme: any;
        verticalAlign: string;
        width: number;
        x: number;
    }

    interface MapNavigationOptionsButtonOptionsStyle {
        fontSize: string;
        fontWeight: string;
    }

    interface MapNavigationOptionsButtons {
        zoomIn: MapNavigationOptionsButtonsZoomIn;
        zoomOut: MapNavigationOptionsButtonsZoomOut;
    }

    interface MapNavigationOptionsButtonsZoomIn extends MapNavigationOptionsButtonOptions{
        onclick: ()=>any;
        text: string;
        y: number;
    }

    interface MapNavigationOptionsButtonsZoomOut extends MapNavigationOptionsButtonOptions{
        onclick: ()=>any;
        text: string;
        y: number;
    }

    /**
     * @type {string[]}
     */
    const marginNames: string[];

    interface NavigationOptions {
        buttonOptions: NavigationOptionsButtonOptions;
        menuItemHoverStyle: NavigationOptionsMenuItemHoverStyle;
        menuItemStyle: NavigationOptionsMenuItemStyle;
        menuStyle: NavigationOptionsMenuStyle;
    }

    interface NavigationOptionsButtonOptions {
        align: string;
        buttonSpacing: number;
        enabled: boolean;
        height: number;
        symbolFill: ColorString;
        symbolSize: number;
        symbolStroke: ColorString;
        symbolStrokeWidth: number;
        symbolX: number;
        symbolY: number;
        text: string;
        theme: NavigationOptionsButtonOptionsTheme;
        verticalAlign: string;
        width: number;
        y: number;
    }

    interface NavigationOptionsButtonOptionsTheme {
        fill: string;
        padding: number;
        stroke: string;
    }

    interface NavigationOptionsMenuItemHoverStyle {
        background: string;
        color: string;
    }

    interface NavigationOptionsMenuItemStyle {
        background: string;
        color: string;
        fontSize: string;
        padding: string;
        transition: string;
    }

    interface NavigationOptionsMenuStyle {
        background: string;
        border: string;
        padding: string;
    }

    /**
     * The Navigator class
     * @param {Object} chart - Chart object
     * @class
     * @memberof Highcharts
     */
    class Navigator {
        constructor(chart: any);

        /**
         * Add data events.
         * For example when main series is updated we need to recalculate extremes
         */
        addBaseSeriesEvents(): void;

        /**
         * Add chart events, like redrawing navigator, when chart requires that.
         */
        addChartEvents(): void;

        /**
         * Set up the mouse and touch events for the navigator
         */
        addMouseEvents(): void;

        /**
         * Destroys allocated elements.
         */
        destroy(): void;

        /**
         * Draw one of the handles on the side of the zoomed range in the navigator
         * @param {Number} x The x center for the handle
         * @param {Number} index 0 for left and 1 for right
         * @param {Boolean} inverted flag for chart.inverted
         * @param {String} verb use 'animate' or 'attr'
         */
        drawHandle(x: number, index: number, inverted: boolean, verb: string): void;

        /**
         * Render outline around the zoomed range
         * @param {Number} zoomedMin in pixels position where zoomed range starts
         * @param {Number} zoomedMax in pixels position where zoomed range ends
         * @param {Boolean} inverted flag if chart is inverted
         * @param {String} verb use 'animate' or 'attr'
         */
        drawMasks(zoomedMin: number, zoomedMax: number, inverted: boolean, verb: string): void;

        /**
         * Render outline around the zoomed range
         * @param {Number} zoomedMin in pixels position where zoomed range starts
         * @param {Number} zoomedMax in pixels position where zoomed range ends
         * @param {Boolean} inverted flag if chart is inverted
         * @param {String} verb use 'animate' or 'attr'
         */
        drawOutline(zoomedMin: number, zoomedMax: number, inverted: boolean, verb: string): void;

        /**
         * Generate events for handles and masks
         * @param {String} eventName Event name handler, 'mousedown' or 'touchstart'
         * @returns {Array} An array of arrays: [DOMElement, eventName, callback].
         */
        getPartsEvents(eventName: string): any[];

        /**
         * Get the union data extremes of the chart - the outer data extremes of the
         * base X axis and the navigator axis.
         * @param {boolean} returnFalseOnNoBaseSeries - as the param says.
         */
        getUnionExtremes(returnFalseOnNoBaseSeries: boolean): void;

        /**
         * Mousedown on a handle mask.
         * Will store necessary information for drag&drop.
         * @param {Object} e Mouse event
         * @param {Number} index Index of a handle in Navigator.handles array
         */
        handlesMousedown(e: any, index: number): void;

        /**
         * Initiate the Navigator object
         */
        init(): void;

        /**
         * Hook to modify the base axis extremes with information from the Navigator
         */
        modifyBaseAxisExtremes(): void;

        /**
         * Set the navigator x axis extremes to reflect the total. The navigator
         * extremes should always be the extremes of the union of all series in the
         * chart as well as the navigator series.
         */
        modifyNavigatorAxisExtremes(): void;

        /**
         * Mouse move event based on x/y mouse position.
         * @param {Object} e Mouse event
         */
        onMouseMove(e: any): void;

        /**
         * Mouse up event based on x/y mouse position.
         * @param {Object} e Mouse event
         */
        onMouseUp(e: any): void;

        /**
         * Remove data events.
         */
        removeBaseSeriesEvents(): void;

        /**
         * Removes the event handlers attached previously with addEvents.
         */
        removeEvents(): void;

        /**
         * Render the navigator
         * @param {Number} min X axis value minimum
         * @param {Number} max X axis value maximum
         * @param {Number} pxMin Pixel value minimum
         * @param {Number} pxMax Pixel value maximum
         */
        render(min: number, max: number, pxMin: number, pxMax: number): void;

        /**
         * Generate DOM elements for a navigator:
         * - main navigator group
         * - all shades
         * - outline
         * - handles
         */
        renderElements(): void;

        /**
         * Set the base series and update the navigator series from this. With a bit
         * of modification we should be able to make this an API method to be called
         * from the outside
         * @param  {Object} baseSeriesOptions
         *         Additional series options for a navigator
         * @param  {Boolean} [redraw]
         *         Whether to redraw after update.
         */
        setBaseSeries(baseSeriesOptions: any, redraw?: boolean): void;

        /**
         * Mousedown on a shaded mask, either:
         * - will be stored for future drag&drop
         * - will directly shift to a new range
         * @param {Object} e Mouse event
         * @param {Number} index Index of a mask in Navigator.shades array
         */
        shadesMousedown(e: any, index: number): void;

        /**
         * Update navigator
         * @param {Object} options Options to merge in when updating navigator
         */
        update(options: any): void;

        /**
         * Handler for updated data on the base series. When data is modified, the
         * navigator series must reflect it. This is called from the Chart.redraw
         * function before axis and series extremes are computed.
         */
        updatedDataHandler(): void;

    }

    interface NavigatorOptions {
        adaptToUpdatedData: boolean;
        baseSeries: any;
        enabled: boolean;
        handles: NavigatorOptionsHandles;
        height: number;
        margin: number;
        maskFill: ColorString;
        maskInside: boolean;
        opposite: boolean;
        outlineColor: ColorString;
        outlineWidth: number;
        series: NavigatorOptionsSeries;
        xAxis: NavigatorOptionsXAxis;
        yAxis: NavigatorOptionsYAxis;
    }

    interface NavigatorOptionsHandles {
        backgroundColor: ColorString;
        borderColor: ColorString;
        enabled: boolean;
        height: number;
        lineWidth: number;
        symbols: any[];
        width: number;
    }

    interface NavigatorOptionsSeries {
        className: string;
        dataGrouping: NavigatorOptionsSeriesDataGrouping;
        dataLabels: NavigatorOptionsSeriesDataLabels;
        fillOpacity: number;
        id: string;
        lineColor: ColorString;
        lineWidth: number;
        marker: NavigatorOptionsSeriesMarker;
        pointRange: number;
        threshold: number;
        type: string;
    }

    interface NavigatorOptionsSeriesDataGrouping extends PlotOptionsSeriesDataGrouping{
        approximation: string;
        enabled: boolean;
        groupPixelWidth: number;
        smoothed: boolean;
        units: any;
    }

    interface NavigatorOptionsSeriesDataLabels extends PlotOptionsSeriesDataLabels{
        enabled: boolean;
        zIndex: number;
    }

    interface NavigatorOptionsSeriesMarker {
        enabled: boolean;
    }

    interface NavigatorOptionsXAxis extends XAxisOptions{
        className: string;
        crosshair: boolean;
        gridLineColor: string;
        gridLineWidth: number;
        labels: NavigatorOptionsXAxisLabels;
        lineWidth: number;
        overscroll: number;
        tickLength: number;
        tickPixelInterval: number;
    }

    interface NavigatorOptionsXAxisLabels {
        align: string;
        style: NavigatorOptionsXAxisLabelsStyle;
        x: number;
        y: number;
    }

    interface NavigatorOptionsXAxisLabelsStyle {
        color: string;
    }

    interface NavigatorOptionsYAxis extends YAxisOptions{
        className: string;
        crosshair: boolean;
        endOnTick: boolean;
        gridLineWidth: number;
        labels: NavigatorOptionsYAxisLabels;
        maxPadding: number;
        minPadding: number;
        startOnTick: boolean;
        tickLength: number;
        tickWidth: number;
        title: NavigatorOptionsYAxisTitle;
    }

    interface NavigatorOptionsYAxisLabels {
        enabled: boolean;
    }

    interface NavigatorOptionsYAxisTitle {
        text: any;
    }

    interface NoDataOptions {
        attr: any;
        position: NoDataOptionsPosition;
        style: NoDataOptionsStyle;
        useHTML: boolean;
    }

    interface NoDataOptionsPosition {
        align: string;
        verticalAlign: string;
        x: number;
        y: number;
    }

    interface NoDataOptionsStyle {
        color: string;
        fontSize: string;
        fontWeight: string;
    }

    /**
     * @type {Function}
     */
    function noop(): void;

    /**
     * onseries mixin
     * @mixin
     * @memberof Highcharts
     */
    interface onSeriesMixin {
        /**
         * Override getPlotBox. If the onSeries option is valid, return the plot box
         * of the onSeries, otherwise proceed as usual.
         */
        getPlotBox(): void;
        /**
         * Extend the translate method by placing the point on the related series
         */
        translate(): void;
    }

    /**
     * The overall highcharts options interface
     * @interface
     * @chart-private
     * @name Options
     * @memberof Highcharts
     */
    interface Options {
        accessibility: AccessibilityOptions;
        annotations: (AnnotationsOptions)[];
        boost: BoostOptions;
        chart: ChartOptions;
        colorAxis: ColorAxisOptions;
        colors: (ColorString)[];
        credits: CreditsOptions;
        data: DataOptions;
        defs: any;
        drilldown: DrilldownOptions;
        exporting: ExportingOptions;
        global: GlobalOptions;
        labels: LabelsOptions;
        lang: LangOptions;
        legend: LegendOptions;
        loading: LoadingOptions;
        mapNavigation: MapNavigationOptions;
        navigation: NavigationOptions;
        navigator: NavigatorOptions;
        noData: NoDataOptions;
        pane: PaneOptions;
        plotOptions: PlotOptions;
        rangeSelector: RangeSelectorOptions;
        responsive: ResponsiveOptions;
        scrollbar: ScrollbarOptions;
        series: SeriesOptions;
        subtitle: SubtitleOptions;
        time: TimeOptions;
        title: TitleOptions;
        tooltip: TooltipOptions;
        xAxis: XAxisOptions;
        yAxis: YAxisOptions;
        zAxis: ZAxisOptions;
    }

    /**
     * The Pane object allows options that are common to a set of X and Y axes.
     * In the future, this can be extended to basic Highcharts and Highstock.
     * @class Pane
     * @memberof H
     */
    class Pane {
        /**
         * Initiate the Pane object
         */
        init(): void;

        /**
         * Render the pane with its backgrounds.
         */
        render(): void;

        /**
         * Render an individual pane background.
         * @param  {Object} backgroundOptions Background options
         * @param  {number} i The index of the background in this.backgrounds
         */
        renderBackground(backgroundOptions: any, i: number): void;

        /**
         * Update the pane item with new options
         * @param  {Object} options New pane options
         */
        update(options: any): void;

        /**
         * Gets the center for the pane and its axis.
         */
        updateCenter(): void;

    }

    interface PaneOptions {
        background: (PaneOptionsBackground)[];
        center: (string | number)[];
        endAngle: number;
        size: number | string;
        startAngle: number;
    }

    interface PaneOptionsBackground {
        backgroundColor: PaneOptionsBackgroundBackgroundColor;
        borderColor: ColorString;
        borderWidth: number;
        className: string;
        innerRadius: number | string;
        outerRadius: number | string;
        shape: string;
    }

    interface PaneOptionsBackgroundBackgroundColor {
        linearGradient: PaneOptionsBackgroundBackgroundColorLinearGradient;
        stops: (any[])[];
    }

    interface PaneOptionsBackgroundBackgroundColorLinearGradient {
        x1: number;
        x2: number;
        y1: number;
        y2: number;
    }

    /**
     * Transforms a given array of points according to the angles in chart.options.
     * Parameters:
     *        - points: the array of points
     *        - chart: the chart
     *        - insidePlotArea: wether to verifiy the points are inside the plotArea
     * Returns:
     *        - an array of transformed points
     */
    function perspective(): void;

    /**
     * The object wrapper for plot lines and plot bands
     * @param {Object} axis
     * @param {Object} options
     * @constructor
     * @chart-private
     */
    class PlotLineOrBand {
        constructor(axis: any, options: any);

        /**
         * Remove the plot line or band
         */
        destroy(): void;

        /**
         * Render the plot line or plot band. If it is already existing,
         * move it.
         */
        render(): void;

        /**
         * Render and align label for plot line or band.
         */
        renderLabel(): void;

    }

    interface PlotOptions {
        ad: PlotOptionsAd;
        area: PlotOptionsArea;
        arearange: PlotOptionsArearange;
        areaspline: PlotOptionsAreaspline;
        areasplinerange: PlotOptionsAreasplinerange;
        atr: PlotOptionsAtr;
        bar: PlotOptionsBar;
        bb: PlotOptionsBb;
        bellcurve: PlotOptionsBellcurve;
        boxplot: PlotOptionsBoxplot;
        bubble: PlotOptionsBubble;
        bullet: PlotOptionsBullet;
        candlestick: PlotOptionsCandlestick;
        cci: PlotOptionsCci;
        cmf: PlotOptionsCmf;
        column: PlotOptionsColumn;
        columnrange: PlotOptionsColumnrange;
        ema: PlotOptionsEma;
        errorbar: PlotOptionsErrorbar;
        flags: PlotOptionsFlags;
        funnel: PlotOptionsFunnel;
        gauge: PlotOptionsGauge;
        heatmap: PlotOptionsHeatmap;
        histogram: PlotOptionsHistogram;
        ikh: PlotOptionsIkh;
        line: PlotOptionsLine;
        macd: PlotOptionsMacd;
        map: PlotOptionsMap;
        mapbubble: PlotOptionsMapbubble;
        mapline: PlotOptionsMapline;
        mappoint: PlotOptionsMappoint;
        mfi: PlotOptionsMfi;
        momentum: PlotOptionsMomentum;
        ohlc: PlotOptionsOhlc;
        pareto: PlotOptionsPareto;
        pie: PlotOptionsPie;
        pivotpoints: PlotOptionsPivotpoints;
        polygon: PlotOptionsPolygon;
        priceenvelopes: PlotOptionsPriceenvelopes;
        psar: PlotOptionsPsar;
        pyramid: PlotOptionsPyramid;
        roc: PlotOptionsRoc;
        rsi: PlotOptionsRsi;
        sankey: PlotOptionsSankey;
        scatter: PlotOptionsScatter;
        scatter3d: PlotOptionsScatter3d;
        series: PlotOptionsSeries;
        sma: PlotOptionsSma;
        solidgauge: PlotOptionsSolidgauge;
        spline: PlotOptionsSpline;
        stochastic: PlotOptionsStochastic;
        streamgraph: PlotOptionsStreamgraph;
        sunburst: PlotOptionsSunburst;
        tilemap: PlotOptionsTilemap;
        treemap: PlotOptionsTreemap;
        variablepie: PlotOptionsVariablepie;
        variwide: PlotOptionsVariwide;
        vbp: PlotOptionsVbp;
        vector: PlotOptionsVector;
        vwap: PlotOptionsVwap;
        waterfall: PlotOptionsWaterfall;
        windbarb: PlotOptionsWindbarb;
        wma: PlotOptionsWma;
        wordcloud: PlotOptionsWordcloud;
        xrange: PlotOptionsXrange;
        zigzag: PlotOptionsZigzag;
    }

    interface PlotOptionsAd extends PlotOptionsSma{
        params: PlotOptionsAdParams;
    }

    interface PlotOptionsAdParams {
        volumeSeriesID: string;
    }

    interface PlotOptionsArea extends PlotOptionsLine{
        fillColor: ColorString;
        fillOpacity: number;
        lineColor: ColorString;
        negativeFillColor: ColorString;
        softThreshold: boolean;
        threshold: number;
        trackByArea: boolean;
    }

    interface PlotOptionsArearange extends PlotOptionsArea{
        dataLabels: PlotOptionsArearangeDataLabels;
        lineWidth: number;
        shadow: boolean | any;
        threshold: any;
        tooltip: PlotOptionsArearangeTooltip;
        trackByArea: boolean;
    }

    interface PlotOptionsArearangeDataLabels extends PlotOptionsSeriesDataLabels{
        align: any;
        verticalAlign: any;
        xHigh: number;
        xLow: number;
        yHigh: number | string;
        yLow: number | string;
    }

    interface PlotOptionsArearangeTooltip {
        pointFormat: string;
    }

    interface PlotOptionsAreaspline extends PlotOptionsArea{
    }

    interface PlotOptionsAreasplinerange extends PlotOptionsArearange{
    }

    interface PlotOptionsAtr extends PlotOptionsSma{
        params: PlotOptionsAtrParams;
    }

    interface PlotOptionsAtrParams {
        period: number;
    }

    interface PlotOptionsBar extends PlotOptionsColumn{
        dataLabels: PlotOptionsBarDataLabels;
    }

    interface PlotOptionsBarDataLabels {
        align: string;
        x: number;
    }

    interface PlotOptionsBb extends PlotOptionsSma{
        bottomLine: PlotOptionsBbBottomLine;
        dataGrouping: PlotOptionsBbDataGrouping;
        marker: PlotOptionsBbMarker;
        name: string;
        params: PlotOptionsBbParams;
        tooltip: PlotOptionsBbTooltip;
        topLine: PlotOptionsBbTopLine;
    }

    interface PlotOptionsBbBottomLine {
        styles: PlotOptionsBbBottomLineStyles;
    }

    interface PlotOptionsBbBottomLineStyles {
        lineColor: string;
        lineWidth: number;
    }

    interface PlotOptionsBbDataGrouping {
        approximation: string;
    }

    interface PlotOptionsBbMarker {
        enabled: boolean;
    }

    interface PlotOptionsBbParams {
        index: number;
        period: number;
        standardDeviation: number;
    }

    interface PlotOptionsBbTooltip {
        pointFormat: string;
    }

    interface PlotOptionsBbTopLine extends PlotOptionsBbBottomLine{
        styles: PlotOptionsBbTopLineStyles;
    }

    interface PlotOptionsBbTopLineStyles {
        lineColor: any;
        lineWidth: number;
    }

    interface PlotOptionsBellcurve extends PlotOptionsAreaspline{
        intervals: number;
        marker: PlotOptionsBellcurveMarker;
        pointsInInterval: number;
    }

    interface PlotOptionsBellcurveMarker {
        enabled: boolean;
    }

    interface PlotOptionsBoxplot extends PlotOptionsColumn{
        fillColor: ColorString;
        lineWidth: number;
        medianColor: ColorString;
        medianWidth: number;
        stemColor: ColorString;
        stemDashStyle: string;
        stemWidth: number;
        threshold: any;
        tooltip: PlotOptionsBoxplotTooltip;
        whiskerColor: ColorString;
        whiskerLength: number | string;
        whiskerWidth: number;
    }

    interface PlotOptionsBoxplotTooltip {
        pointFormat: string;
    }

    interface PlotOptionsBubble extends PlotOptionsScatter{
        animationLimit: number;
        dataLabels: PlotOptionsBubbleDataLabels;
        displayNegative: boolean;
        marker: PlotOptionsBubbleMarker;
        maxSize: number | string;
        minSize: number | string;
        negativeColor: ColorString;
        sizeBy: string;
        sizeByAbsoluteValue: boolean;
        softThreshold: boolean;
        states: PlotOptionsBubbleStates;
        tooltip: PlotOptionsBubbleTooltip;
        turboThreshold: number;
        zMax: number;
        zMin: number;
        zoneAxis: string;
        zThreshold: number;
    }

    interface PlotOptionsBubbleDataLabels {
        formatter: any;
        inside: boolean;
        verticalAlign: string;
    }

    interface PlotOptionsBubbleMarker extends PlotOptionsSeriesMarker{
        fillOpacity: number;
        lineColor: any;
        lineWidth: number;
        states: PlotOptionsBubbleMarkerStates;
        symbol: string;
    }

    interface PlotOptionsBubbleMarkerStates {
        hover: PlotOptionsBubbleMarkerStatesHover;
    }

    interface PlotOptionsBubbleMarkerStatesHover {
        radiusPlus: number;
    }

    interface PlotOptionsBubbleStates {
        hover: PlotOptionsBubbleStatesHover;
    }

    interface PlotOptionsBubbleStatesHover {
        halo: PlotOptionsBubbleStatesHoverHalo;
    }

    interface PlotOptionsBubbleStatesHoverHalo {
        size: number;
    }

    interface PlotOptionsBubbleTooltip {
        pointFormat: string;
    }

    interface PlotOptionsBullet extends PlotOptionsColumn{
        targetOptions: PlotOptionsBulletTargetOptions;
        tooltip: PlotOptionsBulletTooltip;
    }

    interface PlotOptionsBulletTargetOptions {
        borderColor: ColorString;
        borderWidth: number;
        color: ColorString;
        height: number;
        width: number | string;
    }

    interface PlotOptionsBulletTooltip {
        pointFormat: string;
    }

    interface PlotOptionsCandlestick extends PlotOptionsOhlc{
        dataGrouping: PlotOptionsCandlestickDataGrouping;
        lineColor: ColorString;
        lineWidth: number;
        states: PlotOptionsCandlestickStates;
        stickyTracking: boolean;
        threshold: any;
        tooltip: PlotOptionsCandlestickTooltip;
        upColor: ColorString;
        upLineColor: ColorString;
    }

    interface PlotOptionsCandlestickDataGrouping {
        approximation: string;
    }

    interface PlotOptionsCandlestickStates {
        hover: PlotOptionsCandlestickStatesHover;
    }

    interface PlotOptionsCandlestickStatesHover extends PlotOptionsColumnStatesHover{
        lineWidth: number;
    }

    interface PlotOptionsCandlestickTooltip extends PlotOptionsOhlcTooltip{
    }

    interface PlotOptionsCci extends PlotOptionsSma{
        params: PlotOptionsCciParams;
    }

    interface PlotOptionsCciParams {
        period: number;
    }

    interface PlotOptionsCmf extends PlotOptionsSma{
        params: PlotOptionsCmfParams;
    }

    interface PlotOptionsCmfParams {
        period: number;
        volumeSeriesID: string;
    }

    interface PlotOptionsColumn extends PlotOptionsLine{
        borderColor: ColorString;
        borderRadius: number;
        borderWidth: number;
        colorByPoint: boolean;
        colors: (ColorString)[];
        crisp: boolean;
        cropThreshold: number;
        dataGrouping: PlotOptionsColumnDataGrouping;
        dataLabels: PlotOptionsColumnDataLabels;
        depth: number;
        edgeColor: ColorString;
        edgeWidth: number;
        grouping: boolean;
        groupPadding: number;
        groupZPadding: number;
        maxPointWidth: number;
        minPointLength: number;
        pointPadding: number;
        pointRange: number;
        pointWidth: number;
        softThreshold: boolean;
        states: PlotOptionsColumnStates;
        stickyTracking: boolean;
        threshold: number;
        tooltip: PlotOptionsColumnTooltip;
    }

    interface PlotOptionsColumnDataGrouping {
        groupPixelWidth: number;
    }

    interface PlotOptionsColumnDataLabels {
        align: any;
        verticalAlign: any;
        y: any;
    }

    interface PlotOptionsColumnrange extends PlotOptionsColumn{
        dataLabels: PlotOptionsColumnrangeDataLabels;
        pointRange: any;
        states: PlotOptionsColumnrangeStates;
    }

    interface PlotOptionsColumnrangeDataLabels extends PlotOptionsArearangeDataLabels{
    }

    interface PlotOptionsColumnrangeStates {
        hover: any;
    }

    interface PlotOptionsColumnStates {
        hover: PlotOptionsColumnStatesHover;
        select: PlotOptionsColumnStatesSelect;
    }

    interface PlotOptionsColumnStatesHover extends PlotOptionsSeriesStatesHover{
        borderColor: ColorString;
        brightness: number;
        color: ColorString;
    }

    interface PlotOptionsColumnStatesSelect {
        borderColor: ColorString;
        color: ColorString;
    }

    interface PlotOptionsColumnTooltip {
        distance: number;
    }

    interface PlotOptionsEma extends PlotOptionsSma{
        params: PlotOptionsEmaParams;
    }

    interface PlotOptionsEmaParams {
        index: number;
        period: number;
    }

    interface PlotOptionsErrorbar extends PlotOptionsBoxplot{
        color: ColorString;
        grouping: boolean;
        linkedTo: string;
        tooltip: PlotOptionsErrorbarTooltip;
        whiskerWidth: number;
    }

    interface PlotOptionsErrorbarTooltip {
        pointFormat: string;
    }

    interface PlotOptionsFlags extends PlotOptionsColumn{
        allowOverlapX: boolean;
        fillColor: ColorString;
        lineColor: ColorString;
        lineWidth: number;
        onKey: string;
        onSeries: string;
        pointRange: number;
        shape: string;
        stackDistance: number;
        states: PlotOptionsFlagsStates;
        style: PlotOptionsFlagsStyle;
        textAlign: string;
        threshold: any;
        title: string;
        tooltip: PlotOptionsFlagsTooltip;
        useHTML: boolean;
        y: number;
    }

    interface PlotOptionsFlagsStates {
        hover: PlotOptionsFlagsStatesHover;
    }

    interface PlotOptionsFlagsStatesHover extends PlotOptionsColumnStatesHover{
        fillColor: ColorString;
        lineColor: ColorString;
    }

    interface PlotOptionsFlagsStyle {
        fontSize: string;
        fontWeight: string;
    }

    interface PlotOptionsFlagsTooltip extends PlotOptionsSeriesTooltip{
        pointFormat: string;
    }

    interface PlotOptionsFunnel extends PlotOptionsPie{
        animation: boolean;
        center: (string | number)[];
        dataLabels: PlotOptionsFunnelDataLabels;
        height: number | string;
        neckHeight: number | string;
        neckWidth: number | string;
        reversed: boolean;
        states: PlotOptionsFunnelStates;
        width: number | string;
    }

    interface PlotOptionsFunnelDataLabels {
        connectorWidth: number;
    }

    interface PlotOptionsFunnelStates {
        hover: any;
        select: PlotOptionsFunnelStatesSelect;
    }

    interface PlotOptionsFunnelStatesSelect {
        borderColor: ColorString;
        color: ColorString;
    }

    interface PlotOptionsGauge extends PlotOptionsLine{
        dataLabels: PlotOptionsGaugeDataLabels;
        dial: PlotOptionsGaugeDial;
        overshoot: number;
        pivot: PlotOptionsGaugePivot;
        showInLegend: boolean;
        tooltip: PlotOptionsGaugeTooltip;
        wrap: boolean;
    }

    interface PlotOptionsGaugeDataLabels extends PlotOptionsSeriesDataLabels{
        borderColor: ColorString;
        borderRadius: number;
        borderWidth: number;
        crop: boolean;
        defer: boolean;
        enabled: boolean;
        verticalAlign: string;
        y: number;
        zIndex: number;
    }

    interface PlotOptionsGaugeDial {
        backgroundColor: ColorString;
        baseLength: string;
        baseWidth: number;
        borderColor: ColorString;
        borderWidth: number;
        radius: string;
        rearLength: string;
        topWidth: number;
    }

    interface PlotOptionsGaugePivot {
        backgroundColor: ColorString;
        borderColor: ColorString;
        borderWidth: number;
        radius: number;
    }

    interface PlotOptionsGaugeTooltip {
        headerFormat: string;
    }

    interface PlotOptionsHeatmap extends PlotOptionsScatter{
        animation: boolean | any;
        borderWidth: number;
        color: ColorString;
        colsize: number;
        dataLabels: PlotOptionsHeatmapDataLabels;
        nullColor: ColorString;
        pointPadding: number;
        rowsize: number;
        states: PlotOptionsHeatmapStates;
        tooltip: PlotOptionsHeatmapTooltip;
    }

    interface PlotOptionsHeatmapDataLabels {
        crop: boolean;
        formatter: any;
        inside: boolean;
        overflow: boolean;
        padding: number;
        verticalAlign: string;
    }

    interface PlotOptionsHeatmapStates {
        hover: PlotOptionsHeatmapStatesHover;
    }

    interface PlotOptionsHeatmapStatesHover {
        brightness: number;
    }

    interface PlotOptionsHeatmapTooltip {
        pointFormat: string;
    }

    interface PlotOptionsHistogram extends PlotOptionsColumn{
        binsNumber: string | number | (()=>any);
        binWidth: number;
        grouping: boolean;
        groupPadding: number;
        pointPadding: number;
        pointPlacement: string;
        tooltip: PlotOptionsHistogramTooltip;
    }

    interface PlotOptionsHistogramTooltip {
        headerFormat: string;
        pointFormat: string;
    }

    interface PlotOptionsIkh extends PlotOptionsSma{
        chikouLine: PlotOptionsIkhChikouLine;
        dataGrouping: PlotOptionsIkhDataGrouping;
        kijunLine: PlotOptionsIkhKijunLine;
        marker: PlotOptionsIkhMarker;
        params: PlotOptionsIkhParams;
        senkouSpan: PlotOptionsIkhSenkouSpan;
        senkouSpanA: PlotOptionsIkhSenkouSpanA;
        senkouSpanB: PlotOptionsIkhSenkouSpanB;
        tenkanLine: PlotOptionsIkhTenkanLine;
        tooltip: PlotOptionsIkhTooltip;
    }

    interface PlotOptionsIkhChikouLine {
        styles: PlotOptionsIkhChikouLineStyles;
    }

    interface PlotOptionsIkhChikouLineStyles {
        lineColor: number;
        lineWidth: number;
    }

    interface PlotOptionsIkhDataGrouping {
        approximation: string;
    }

    interface PlotOptionsIkhKijunLine {
        styles: PlotOptionsIkhKijunLineStyles;
    }

    interface PlotOptionsIkhKijunLineStyles {
        lineColor: number;
        lineWidth: number;
    }

    interface PlotOptionsIkhMarker {
        enabled: boolean;
    }

    interface PlotOptionsIkhParams {
        period: number;
        periodSenkouSpanB: number;
        periodTenkan: number;
    }

    interface PlotOptionsIkhSenkouSpan {
        styles: PlotOptionsIkhSenkouSpanStyles;
    }

    interface PlotOptionsIkhSenkouSpanA {
        styles: PlotOptionsIkhSenkouSpanAStyles;
    }

    interface PlotOptionsIkhSenkouSpanAStyles {
        lineColor: number;
        lineWidth: number;
    }

    interface PlotOptionsIkhSenkouSpanB {
        styles: PlotOptionsIkhSenkouSpanBStyles;
    }

    interface PlotOptionsIkhSenkouSpanBStyles {
        lineColor: number;
        lineWidth: number;
    }

    interface PlotOptionsIkhSenkouSpanStyles {
        fill: number;
    }

    interface PlotOptionsIkhTenkanLine {
        styles: PlotOptionsIkhTenkanLineStyles;
    }

    interface PlotOptionsIkhTenkanLineStyles {
        lineColor: number;
        lineWidth: number;
    }

    interface PlotOptionsIkhTooltip {
        pointFormat: string;
    }

    interface PlotOptionsLine extends PlotOptionsSeries{
        linecap: string;
    }

    interface PlotOptionsMacd extends PlotOptionsSma{
        dataGrouping: PlotOptionsMacdDataGrouping;
        groupPadding: number;
        macdLine: PlotOptionsMacdMacdLine;
        minPointLength: number;
        params: PlotOptionsMacdParams;
        pointPadding: number;
        signalLine: PlotOptionsMacdSignalLine;
        states: PlotOptionsMacdStates;
        threshold: number;
        tooltip: PlotOptionsMacdTooltip;
    }

    interface PlotOptionsMacdDataGrouping {
        approximation: string;
    }

    interface PlotOptionsMacdMacdLine {
        styles: PlotOptionsMacdMacdLineStyles;
        zones: PlotOptionsMacdMacdLineZones;
    }

    interface PlotOptionsMacdMacdLineStyles {
        lineColor: number;
        lineWidth: number;
    }

    interface PlotOptionsMacdMacdLineZones {
    }

    interface PlotOptionsMacdParams {
        longPeriod: number;
        period: number;
        shortPeriod: number;
        signalPeriod: number;
    }

    interface PlotOptionsMacdSignalLine {
        styles: PlotOptionsMacdSignalLineStyles;
        zones: PlotOptionsMacdSignalLineZones;
    }

    interface PlotOptionsMacdSignalLineStyles {
        lineColor: number;
        lineWidth: number;
    }

    interface PlotOptionsMacdSignalLineZones {
    }

    interface PlotOptionsMacdStates {
        hover: PlotOptionsMacdStatesHover;
    }

    interface PlotOptionsMacdStatesHover {
        halo: PlotOptionsMacdStatesHoverHalo;
    }

    interface PlotOptionsMacdStatesHoverHalo {
        size: number;
    }

    interface PlotOptionsMacdTooltip {
        pointFormat: string;
    }

    interface PlotOptionsMap extends PlotOptionsScatter{
        allAreas: boolean;
        animation: boolean;
        borderColor: string;
        borderWidth: number;
        dataLabels: PlotOptionsMapDataLabels;
        joinBy: string;
        nullColor: ColorString;
        nullInteraction: boolean;
        states: PlotOptionsMapStates;
        stickyTracking: boolean;
        tooltip: PlotOptionsMapTooltip;
    }

    interface PlotOptionsMapbubble extends PlotOptionsBubble{
        animationLimit: number;
        color: ColorString;
        displayNegative: boolean;
        maxSize: any;
        minSize: any;
        negativeColor: ColorString;
        sizeBy: string;
        sizeByAbsoluteValue: boolean;
        tooltip: PlotOptionsMapbubbleTooltip;
        zMax: number;
        zMin: number;
        zThreshold: number;
    }

    interface PlotOptionsMapbubbleTooltip {
        pointFormat: string;
    }

    interface PlotOptionsMapDataLabels {
        crop: boolean;
        formatter: any;
        inside: boolean;
        overflow: boolean;
        padding: number;
        verticalAlign: string;
    }

    interface PlotOptionsMapline extends PlotOptionsMap{
        fillColor: ColorString;
        lineWidth: number;
    }

    interface PlotOptionsMappoint extends PlotOptionsScatter{
        dataLabels: PlotOptionsMappointDataLabels;
    }

    interface PlotOptionsMappointDataLabels {
        crop: boolean;
        defer: boolean;
        enabled: boolean;
        format: string;
        formatter: any;
        overflow: boolean;
        style: PlotOptionsMappointDataLabelsStyle;
    }

    interface PlotOptionsMappointDataLabelsStyle {
        color: string;
    }

    interface PlotOptionsMapStates {
        hover: PlotOptionsMapStatesHover;
        normal: PlotOptionsMapStatesNormal;
        select: PlotOptionsMapStatesSelect;
    }

    interface PlotOptionsMapStatesHover {
        brightness: number;
        halo: any;
    }

    interface PlotOptionsMapStatesNormal {
        animation: boolean;
    }

    interface PlotOptionsMapStatesSelect {
        color: string;
    }

    interface PlotOptionsMapTooltip {
        followPointer: boolean;
        pointFormat: string;
    }

    interface PlotOptionsMfi extends PlotOptionsSma{
        params: PlotOptionsMfiParams;
    }

    interface PlotOptionsMfiParams {
        decimals: number;
        period: number;
        volumeSeriesID: string;
    }

    interface PlotOptionsMomentum extends PlotOptionsSma{
        params: PlotOptionsMomentumParams;
    }

    interface PlotOptionsMomentumParams {
        period: number;
    }

    interface PlotOptionsOhlc extends PlotOptionsColumn{
        dataGrouping: PlotOptionsOhlcDataGrouping;
        lineWidth: number;
        pointValKey: string;
        states: PlotOptionsOhlcStates;
        stickyTracking: boolean;
        threshold: any;
        tooltip: PlotOptionsOhlcTooltip;
        upColor: ColorString;
    }

    interface PlotOptionsOhlcDataGrouping {
        groupPixelWidth: number;
    }

    interface PlotOptionsOhlcStates {
        hover: PlotOptionsOhlcStatesHover;
    }

    interface PlotOptionsOhlcStatesHover extends PlotOptionsColumnStatesHover{
        lineWidth: number;
    }

    interface PlotOptionsOhlcTooltip {
        pointFormat: string;
    }

    interface PlotOptionsPareto extends PlotOptionsLine{
        zIndex: number;
    }

    interface PlotOptionsPie extends PlotOptionsLine{
        borderColor: ColorString;
        borderWidth: number;
        center: (string | number)[];
        clip: boolean;
        colors: (ColorString)[];
        dataLabels: PlotOptionsPieDataLabels;
        depth: number;
        endAngle: number;
        events: PlotOptionsPieEvents;
        ignoreHiddenPoint: boolean;
        innerSize: string | number;
        minSize: number;
        point: PlotOptionsPiePoint;
        showInLegend: boolean;
        size: string | number;
        slicedOffset: number;
        startAngle: number;
        states: PlotOptionsPieStates;
        stickyTracking: boolean;
        tooltip: PlotOptionsPieTooltip;
    }

    interface PlotOptionsPieDataLabels extends PlotOptionsSeriesDataLabels{
        connectorColor: string;
        connectorPadding: number;
        connectorWidth: number;
        distance: number;
        enabled: boolean;
        formatter: any;
        softConnector: number;
        style: any;
        x: number;
    }

    interface PlotOptionsPieEvents {
        checkboxClick: ()=>any;
        legendItemClick: ()=>any;
    }

    interface PlotOptionsPiePoint {
        events: PlotOptionsPiePointEvents;
    }

    interface PlotOptionsPiePointEvents {
        legendItemClick: ()=>any;
    }

    interface PlotOptionsPieStates {
        hover: PlotOptionsPieStatesHover;
    }

    interface PlotOptionsPieStatesHover extends PlotOptionsSeriesStatesHover{
        brightness: number;
    }

    interface PlotOptionsPieTooltip {
        followPointer: boolean;
    }

    interface PlotOptionsPivotpoints extends PlotOptionsSma{
        dataGrouping: PlotOptionsPivotpointsDataGrouping;
        dataLabels: PlotOptionsPivotpointsDataLabels;
        enableMouseTracking: boolean;
        marker: PlotOptionsPivotpointsMarker;
        params: PlotOptionsPivotpointsParams;
    }

    interface PlotOptionsPivotpointsDataGrouping {
        approximation: string;
    }

    interface PlotOptionsPivotpointsDataLabels {
        enabled: boolean;
        format: string;
    }

    interface PlotOptionsPivotpointsMarker {
        enabled: boolean;
    }

    interface PlotOptionsPivotpointsParams {
        algorithm: string;
        period: number;
    }

    interface PlotOptionsPolygon extends PlotOptionsScatter{
        marker: PlotOptionsPolygonMarker;
        stickyTracking: boolean;
        tooltip: PlotOptionsPolygonTooltip;
        trackByArea: boolean;
    }

    interface PlotOptionsPolygonMarker {
        enabled: boolean;
        states: PlotOptionsPolygonMarkerStates;
    }

    interface PlotOptionsPolygonMarkerStates {
        hover: PlotOptionsPolygonMarkerStatesHover;
    }

    interface PlotOptionsPolygonMarkerStatesHover {
        enabled: boolean;
    }

    interface PlotOptionsPolygonTooltip {
        followPointer: boolean;
        pointFormat: string;
    }

    interface PlotOptionsPriceenvelopes extends PlotOptionsSma{
        bottomLine: PlotOptionsPriceenvelopesBottomLine;
        dataGrouping: PlotOptionsPriceenvelopesDataGrouping;
        marker: PlotOptionsPriceenvelopesMarker;
        params: PlotOptionsPriceenvelopesParams;
        tooltip: PlotOptionsPriceenvelopesTooltip;
        topLine: PlotOptionsPriceenvelopesTopLine;
    }

    interface PlotOptionsPriceenvelopesBottomLine {
        styles: PlotOptionsPriceenvelopesBottomLineStyles;
    }

    interface PlotOptionsPriceenvelopesBottomLineStyles {
        lineColor: string;
        lineWidth: number;
    }

    interface PlotOptionsPriceenvelopesDataGrouping {
        approximation: string;
    }

    interface PlotOptionsPriceenvelopesMarker {
        enabled: boolean;
    }

    interface PlotOptionsPriceenvelopesParams {
        bottomBand: number;
        period: number;
        topBand: number;
    }

    interface PlotOptionsPriceenvelopesTooltip {
        pointFormat: string;
    }

    interface PlotOptionsPriceenvelopesTopLine extends PlotOptionsPriceenvelopesBottomLine{
        styles: PlotOptionsPriceenvelopesTopLineStyles;
    }

    interface PlotOptionsPriceenvelopesTopLineStyles {
        lineWidth: number;
    }

    interface PlotOptionsPsar extends PlotOptionsSma{
        lineWidth: number;
        marker: PlotOptionsPsarMarker;
        params: PlotOptionsPsarParams;
        states: PlotOptionsPsarStates;
    }

    interface PlotOptionsPsarMarker {
        enabled: boolean;
    }

    interface PlotOptionsPsarParams {
        decimals: number;
        increment: number;
        index: number;
        initialAccelerationFactor: number;
        maxAccelerationFactor: number;
    }

    interface PlotOptionsPsarStates {
        hover: PlotOptionsPsarStatesHover;
    }

    interface PlotOptionsPsarStatesHover {
        lineWidthPlus: number;
    }

    interface PlotOptionsPyramid extends PlotOptionsFunnel{
        neckHeight: string;
        neckWidth: string;
        reversed: boolean;
    }

    interface PlotOptionsRoc extends PlotOptionsSma{
        name: string;
        params: PlotOptionsRocParams;
    }

    interface PlotOptionsRocParams {
        index: number;
        period: number;
    }

    interface PlotOptionsRsi extends PlotOptionsSma{
        params: PlotOptionsRsiParams;
    }

    interface PlotOptionsRsiParams {
        decimals: number;
        period: number;
    }

    interface PlotOptionsSankey extends PlotOptionsColumn{
        colorByPoint: boolean;
        curveFactor: number;
        dataLabels: PlotOptionsSankeyDataLabels;
        linkOpacity: number;
        nodePadding: number;
        nodeWidth: number;
        showInLegend: boolean;
        states: PlotOptionsSankeyStates;
        tooltip: PlotOptionsSankeyTooltip;
    }

    interface PlotOptionsSankeyDataLabels {
        backgroundColor: string;
        crop: boolean;
        enabled: boolean;
        format: any;
        formatter: any;
        inside: boolean;
        nodeFormat: string;
        nodeFormatter: ()=>any;
    }

    interface PlotOptionsSankeyStates {
        hover: PlotOptionsSankeyStatesHover;
    }

    interface PlotOptionsSankeyStatesHover {
        linkOpacity: number;
    }

    interface PlotOptionsSankeyTooltip {
        followPointer: boolean;
        headerFormat: string;
        nodeFormat: string;
        nodeFormatter: ()=>any;
        pointFormat: string;
    }

    interface PlotOptionsScatter extends PlotOptionsLine{
        findNearestPointBy: string;
        lineWidth: number;
        marker: PlotOptionsScatterMarker;
        stickyTracking: boolean;
        tooltip: PlotOptionsScatterTooltip;
    }

    interface PlotOptionsScatter3d extends PlotOptionsScatter{
        tooltip: PlotOptionsScatter3dTooltip;
    }

    interface PlotOptionsScatter3dTooltip {
        pointFormat: string;
    }

    interface PlotOptionsScatterMarker {
        enabled: boolean;
    }

    interface PlotOptionsScatterTooltip {
        headerFormat: string;
        pointFormat: string;
    }

    interface PlotOptionsSeries {
        allAreas: boolean;
        allowPointSelect: boolean;
        animation: PlotOptionsSeriesAnimation;
        animationLimit: number;
        boostThreshold: number;
        borderColor: ColorString;
        borderWidth: any;
        className: string;
        color: ColorString;
        colorAxis: boolean;
        colorIndex: number;
        compare: string;
        compareBase: number;
        compareStart: boolean;
        connectEnds: boolean;
        connectNulls: boolean;
        cropThreshold: number;
        cursor: string;
        dashStyle: string;
        dataGrouping: PlotOptionsSeriesDataGrouping;
        dataLabels: PlotOptionsSeriesDataLabels;
        description: string;
        enableMouseTracking: boolean;
        events: PlotOptionsSeriesEvents;
        exposeElementToA11y: boolean;
        findNearestPointBy: string;
        gapSize: number;
        gapUnit: string;
        getExtremesFromAll: boolean;
        joinBy: string | string[];
        keys: string[];
        label: PlotOptionsSeriesLabel;
        linecap: string;
        lineWidth: number;
        linkedTo: string;
        marker: PlotOptionsSeriesMarker;
        navigatorOptions: any;
        negativeColor: ColorString;
        point: PlotOptionsSeriesPoint;
        pointDescriptionFormatter: ()=>any;
        pointInterval: number;
        pointIntervalUnit: string;
        pointPlacement: string | number;
        pointRange: number;
        pointStart: number;
        selected: boolean;
        shadow: boolean | any;
        showCheckbox: boolean;
        showInLegend: boolean;
        showInNavigator: boolean;
        skipKeyboardNavigation: boolean;
        softThreshold: boolean;
        stacking: string;
        states: PlotOptionsSeriesStates;
        step: string;
        stickyTracking: boolean;
        threshold: number;
        tooltip: PlotOptionsSeriesTooltip;
        turboThreshold: number;
        visible: boolean;
        zIndex: number;
        zoneAxis: string;
        zones: any[];
    }

    interface PlotOptionsSeriesAnimation {
        duration: number;
    }

    interface PlotOptionsSeriesDataGrouping {
        approximation: string | (()=>any);
        dateTimeLabelFormats: any;
        enabled: boolean;
        forced: boolean;
        groupAll: boolean;
        groupPixelWidth: number;
        smoothed: boolean;
        units: any[];
    }

    interface PlotOptionsSeriesDataLabels {
        align: string;
        allowOverlap: boolean;
        backgroundColor: ColorString;
        borderColor: ColorString;
        borderRadius: number;
        borderWidth: number;
        className: string;
        color: ColorString;
        crop: boolean;
        defer: boolean;
        enabled: boolean;
        filter: PlotOptionsSeriesDataLabelsFilter;
        format: string;
        formatter: ()=>any;
        inside: boolean;
        overflow: string;
        padding: number;
        rotation: number;
        shadow: boolean | any;
        shape: string;
        style: PlotOptionsSeriesDataLabelsStyle;
        useHTML: boolean;
        verticalAlign: string;
        x: number;
        y: number;
        zIndex: number;
    }

    interface PlotOptionsSeriesDataLabelsFilter {
        operator: string;
        property: string;
        value: any;
    }

    interface PlotOptionsSeriesDataLabelsStyle {
        color: string;
        fontSize: string;
        fontWeight: string;
        textOutline: string;
    }

    interface PlotOptionsSeriesEvents {
        afterAnimate: ()=>any;
        checkboxClick: ()=>any;
        click: ()=>any;
        hide: ()=>any;
        legendItemClick: ()=>any;
        mouseOut: ()=>any;
        mouseOver: ()=>any;
        show: ()=>any;
    }

    interface PlotOptionsSeriesLabel {
        boxesToAvoid: any[];
        connectorAllowed: boolean;
        connectorNeighbourDistance: number;
        enabled: boolean;
        maxFontSize: number;
        minFontSize: number;
        onArea: boolean;
        style: PlotOptionsSeriesLabelStyle;
    }

    interface PlotOptionsSeriesLabelStyle {
        fontWeight: string;
    }

    interface PlotOptionsSeriesMarker {
        enabled: boolean;
        enabledThreshold: number;
        fillColor: ColorString;
        height: number;
        lineColor: ColorString;
        lineWidth: number;
        radius: number;
        states: PlotOptionsSeriesMarkerStates;
        symbol: string;
        width: number;
    }

    interface PlotOptionsSeriesMarkerStates {
        hover: PlotOptionsSeriesMarkerStatesHover;
        normal: PlotOptionsSeriesMarkerStatesNormal;
        select: PlotOptionsSeriesMarkerStatesSelect;
    }

    interface PlotOptionsSeriesMarkerStatesHover {
        animation: PlotOptionsSeriesMarkerStatesHoverAnimation;
        enabled: boolean;
        fillColor: ColorString;
        lineColor: ColorString;
        lineWidth: number;
        lineWidthPlus: number;
        radius: number;
        radiusPlus: number;
    }

    interface PlotOptionsSeriesMarkerStatesHoverAnimation {
        duration: number;
    }

    interface PlotOptionsSeriesMarkerStatesNormal {
        animation: boolean | any;
    }

    interface PlotOptionsSeriesMarkerStatesSelect {
        enabled: boolean;
        fillColor: ColorString;
        lineColor: ColorString;
        lineWidth: number;
        radius: number;
    }

    interface PlotOptionsSeriesPoint {
        events: PlotOptionsSeriesPointEvents;
    }

    interface PlotOptionsSeriesPointEvents {
        click: ()=>any;
        mouseOut: ()=>any;
        mouseOver: ()=>any;
        remove: ()=>any;
        select: ()=>any;
        unselect: ()=>any;
        update: ()=>any;
    }

    interface PlotOptionsSeriesStates {
        hover: PlotOptionsSeriesStatesHover;
        normal: PlotOptionsSeriesStatesNormal;
        select: PlotOptionsSeriesStatesSelect;
    }

    interface PlotOptionsSeriesStatesHover {
        animation: PlotOptionsSeriesStatesHoverAnimation;
        borderColor: ColorString;
        borderWidth: number;
        brightness: number;
        color: ColorString;
        enabled: boolean;
        halo: PlotOptionsSeriesStatesHoverHalo;
        lineWidth: number;
        lineWidthPlus: number;
        marker: PlotOptionsSeriesStatesHoverMarker;
    }

    interface PlotOptionsSeriesStatesHoverAnimation {
        duration: number;
    }

    interface PlotOptionsSeriesStatesHoverHalo {
        attributes: any;
        opacity: number;
        size: number;
    }

    interface PlotOptionsSeriesStatesHoverMarker extends PlotOptionsSeriesMarker{
    }

    interface PlotOptionsSeriesStatesNormal {
        animation: any | boolean;
    }

    interface PlotOptionsSeriesStatesSelect extends PlotOptionsSeriesStatesHover{
        marker: any;
    }

    interface PlotOptionsSeriesTooltip extends TooltipOptions{
    }

    interface PlotOptionsSeriesZones {
        className: string;
        color: ColorString;
        dashStyle: string;
        fillColor: ColorString;
        value: number;
    }

    interface PlotOptionsSma extends PlotOptionsLine{
        linkedTo: string;
        name: string;
        params: PlotOptionsSmaParams;
        tooltip: PlotOptionsSmaTooltip;
    }

    interface PlotOptionsSmaParams {
        index: number;
        period: number;
    }

    interface PlotOptionsSmaTooltip {
        valueDecimals: number;
    }

    interface PlotOptionsSolidgauge extends PlotOptionsGauge{
        colorByPoint: boolean;
        linecap: string;
        overshoot: number;
        rounded: boolean;
        threshold: number;
    }

    interface PlotOptionsSpline extends PlotOptionsSeries{
    }

    interface PlotOptionsStochastic extends PlotOptionsSma{
        dataGrouping: PlotOptionsStochasticDataGrouping;
        marker: PlotOptionsStochasticMarker;
        name: string;
        params: PlotOptionsStochasticParams;
        smoothedLine: PlotOptionsStochasticSmoothedLine;
        tooltip: PlotOptionsStochasticTooltip;
    }

    interface PlotOptionsStochasticDataGrouping {
        approximation: string;
    }

    interface PlotOptionsStochasticMarker {
        enabled: boolean;
    }

    interface PlotOptionsStochasticParams {
        periods: any[];
    }

    interface PlotOptionsStochasticSmoothedLine {
        styles: PlotOptionsStochasticSmoothedLineStyles;
    }

    interface PlotOptionsStochasticSmoothedLineStyles {
        lineColor: string;
        lineWidth: number;
    }

    interface PlotOptionsStochasticTooltip {
        pointFormat: string;
    }

    interface PlotOptionsStreamgraph extends PlotOptionsAreaspline{
        fillOpacity: number;
        lineWidth: number;
        marker: PlotOptionsStreamgraphMarker;
        stacking: string;
    }

    interface PlotOptionsStreamgraphMarker {
        enabled: boolean;
    }

    interface PlotOptionsSunburst extends PlotOptionsPie{
        allowDrillToNode: boolean;
        center: (string | number)[];
        colorByPoint: boolean;
        dataLabels: PlotOptionsSunburstDataLabels;
        levelIsConstant: boolean;
        levels: (PlotOptionsSunburstLevels)[];
        levelSize: PlotOptionsSunburstLevelSize;
        rootId: string | undefined;
        slicedOffset: number;
    }

    interface PlotOptionsSunburstDataLabels extends PlotOptionsSeriesDataLabels{
        defer: boolean;
        rotationMode: string;
        style: PlotOptionsSunburstDataLabelsStyle;
    }

    interface PlotOptionsSunburstDataLabelsStyle {
        textOverflow: string;
    }

    interface PlotOptionsSunburstLevels {
        borderColor: ColorString;
        borderDashStyle: string;
        borderWidth: number;
        color: ColorString;
        colorVariation: PlotOptionsSunburstLevelsColorVariation;
        dataLabels: any;
        levelSize: any;
        rotation: number;
        rotationMode: string;
    }

    interface PlotOptionsSunburstLevelsColorVariation {
        key: string;
        to: number;
    }

    interface PlotOptionsSunburstLevelSize {
        unit: string;
        value: number;
    }

    interface PlotOptionsTilemap extends PlotOptionsHeatmap{
        colsize: number;
        data: PlotOptionsTilemapData;
        pointPadding: number;
        rowsize: number;
        states: PlotOptionsTilemapStates;
        tileShape: string;
    }

    interface PlotOptionsTilemapData {
        color: ColorString;
        x: number;
        y: number;
    }

    interface PlotOptionsTilemapStates {
        hover: PlotOptionsTilemapStatesHover;
    }

    interface PlotOptionsTilemapStatesHover {
        halo: PlotOptionsTilemapStatesHoverHalo;
    }

    interface PlotOptionsTilemapStatesHoverHalo {
        attributes: PlotOptionsTilemapStatesHoverHaloAttributes;
        enabled: boolean;
        opacity: number;
        size: number;
    }

    interface PlotOptionsTilemapStatesHoverHaloAttributes {
        zIndex: number;
    }

    interface PlotOptionsTreemap extends PlotOptionsScatter{
        allowDrillToNode: boolean;
        alternateStartingDirection: boolean;
        borderColor: ColorString;
        borderWidth: number;
        colorByPoint: boolean;
        colors: (ColorString)[];
        cropThreshold: number;
        dataLabels: PlotOptionsTreemapDataLabels;
        drillUpButton: PlotOptionsTreemapDrillUpButton;
        ignoreHiddenPoint: boolean;
        interactByLeaf: boolean;
        layoutAlgorithm: string;
        layoutStartingDirection: string;
        levelIsConstant: boolean;
        levels: (PlotOptionsTreemapLevels)[];
        opacity: number;
        showInLegend: boolean;
        sortIndex: number;
        states: PlotOptionsTreemapStates;
        tooltip: PlotOptionsTreemapTooltip;
    }

    interface PlotOptionsTreemapDataLabels extends PlotOptionsHeatmapDataLabels{
        defer: boolean;
        enabled: boolean;
        formatter: any;
        inside: boolean;
        verticalAlign: string;
    }

    interface PlotOptionsTreemapDrillUpButton {
        position: PlotOptionsTreemapDrillUpButtonPosition;
    }

    interface PlotOptionsTreemapDrillUpButtonPosition {
        align: string;
        verticalAlign: string;
        x: number;
        y: number;
    }

    interface PlotOptionsTreemapLevels {
        borderColor: ColorString;
        borderDashStyle: string;
        borderWidth: number;
        color: ColorString;
        colorVariation: PlotOptionsTreemapLevelsColorVariation;
        dataLabels: any;
        layoutAlgorithm: string;
        layoutStartingDirection: string;
        level: number;
    }

    interface PlotOptionsTreemapLevelsColorVariation {
        key: string;
        to: number;
    }

    interface PlotOptionsTreemapStates extends PlotOptionsHeatmapStates{
        hover: PlotOptionsTreemapStatesHover;
    }

    interface PlotOptionsTreemapStatesHover extends PlotOptionsHeatmapStatesHover{
        borderColor: string;
        brightness: number;
        halo: PlotOptionsTreemapStatesHoverHalo;
        opacity: number;
        shadow: boolean;
    }

    interface PlotOptionsTreemapStatesHoverHalo {
    }

    interface PlotOptionsTreemapTooltip {
        headerFormat: string;
        pointFormat: string;
    }

    interface PlotOptionsVariablepie extends PlotOptionsPie{
        maxPointSize: string | number;
        minPointSize: string | number;
        sizeBy: string;
        tooltip: PlotOptionsVariablepieTooltip;
        zMax: number;
        zMin: number;
    }

    interface PlotOptionsVariablepieTooltip {
        pointFormat: string;
    }

    interface PlotOptionsVariwide extends PlotOptionsColumn{
        groupPadding: number;
        pointPadding: number;
    }

    interface PlotOptionsVbp extends PlotOptionsSma{
        animationLimit: number;
        crisp: boolean;
        dataGrouping: PlotOptionsVbpDataGrouping;
        dataLabels: PlotOptionsVbpDataLabels;
        enableMouseTracking: boolean;
        params: PlotOptionsVbpParams;
        pointPadding: number;
        volumeDivision: PlotOptionsVbpVolumeDivision;
        zIndex: number;
        zoneLines: PlotOptionsVbpZoneLines;
    }

    interface PlotOptionsVbpDataGrouping {
        enabled: boolean;
    }

    interface PlotOptionsVbpDataLabels {
        allowOverlap: boolean;
        enabled: boolean;
        format: string;
        padding: number;
        style: PlotOptionsVbpDataLabelsStyle;
        verticalAlign: string;
    }

    interface PlotOptionsVbpDataLabelsStyle {
        fontSize: string;
    }

    interface PlotOptionsVbpParams {
        ranges: number;
        volumeSeriesID: string;
    }

    interface PlotOptionsVbpVolumeDivision {
        enabled: boolean;
        styles: PlotOptionsVbpVolumeDivisionStyles;
    }

    interface PlotOptionsVbpVolumeDivisionStyles {
        negativeColor: ColorString;
        positiveColor: ColorString;
    }

    interface PlotOptionsVbpZoneLines {
        enabled: boolean;
        styles: PlotOptionsVbpZoneLinesStyles;
    }

    interface PlotOptionsVbpZoneLinesStyles {
        color: ColorString;
        dashStyle: string;
        lineWidth: number;
    }

    interface PlotOptionsVector extends PlotOptionsScatter{
        lineWidth: number;
        rotationOrigin: string;
        states: PlotOptionsVectorStates;
        tooltip: PlotOptionsVectorTooltip;
        vectorLength: number;
    }

    interface PlotOptionsVectorStates {
        hover: PlotOptionsVectorStatesHover;
    }

    interface PlotOptionsVectorStatesHover {
        lineWidthPlus: number;
    }

    interface PlotOptionsVectorTooltip {
        pointFormat: string;
    }

    interface PlotOptionsVwap extends PlotOptionsSma{
        params: PlotOptionsVwapParams;
    }

    interface PlotOptionsVwapParams {
        period: number;
        volumeSeriesID: string;
    }

    interface PlotOptionsWaterfall extends PlotOptionsColumn{
        borderColor: ColorString;
        dashStyle: string;
        dataLabels: PlotOptionsWaterfallDataLabels;
        lineColor: ColorString;
        lineWidth: number;
        states: PlotOptionsWaterfallStates;
        upColor: ColorString;
    }

    interface PlotOptionsWaterfallDataLabels {
        inside: boolean;
    }

    interface PlotOptionsWaterfallStates {
        hover: PlotOptionsWaterfallStatesHover;
    }

    interface PlotOptionsWaterfallStatesHover {
        lineWidthPlus: number;
    }

    interface PlotOptionsWindbarb extends PlotOptionsColumn{
        lineWidth: number;
        onSeries: string | null;
        states: PlotOptionsWindbarbStates;
        tooltip: PlotOptionsWindbarbTooltip;
        vectorLength: number;
        xOffset: number;
        yOffset: number;
    }

    interface PlotOptionsWindbarbStates {
        hover: PlotOptionsWindbarbStatesHover;
    }

    interface PlotOptionsWindbarbStatesHover {
        lineWidthPlus: number;
    }

    interface PlotOptionsWindbarbTooltip {
        pointFormat: string;
    }

    interface PlotOptionsWma extends PlotOptionsSma{
        params: PlotOptionsWmaParams;
    }

    interface PlotOptionsWmaParams {
        index: number;
        period: number;
    }

    interface PlotOptionsWordcloud extends PlotOptionsColumn{
        animation: PlotOptionsWordcloudAnimation;
        borderWidth: number;
        clip: boolean;
        colorByPoint: boolean;
        maxFontSize: number;
        minFontSize: number;
        placementStrategy: string;
        rotation: PlotOptionsWordcloudRotation;
        showInLegend: boolean;
        spiral: string;
        style: PlotOptionsWordcloudStyle;
        tooltip: PlotOptionsWordcloudTooltip;
    }

    interface PlotOptionsWordcloudAnimation {
        duration: number;
    }

    interface PlotOptionsWordcloudRotation {
        from: number;
        orientations: number;
        to: number;
    }

    interface PlotOptionsWordcloudStyle {
        fontFamily: string;
        fontWeight: number | string;
    }

    interface PlotOptionsWordcloudTooltip {
        followPointer: boolean;
        pointFormat: string;
    }

    interface PlotOptionsXrange extends PlotOptionsColumn{
        borderRadius: number;
        colorByPoint: boolean;
        data: PlotOptionsXrangeData;
        dataLabels: PlotOptionsXrangeDataLabels;
        partialFill: PlotOptionsXrangePartialFill;
        pointRange: number;
        tooltip: PlotOptionsXrangeTooltip;
    }

    interface PlotOptionsXrangeData {
        partialFill: PlotOptionsXrangeDataPartialFill;
        x2: number;
    }

    interface PlotOptionsXrangeDataLabels {
        formatter: any;
        inside: boolean;
        verticalAlign: string;
    }

    interface PlotOptionsXrangeDataPartialFill {
        amount: number;
        fill: ColorString;
    }

    interface PlotOptionsXrangePartialFill {
        fill: ColorString;
    }

    interface PlotOptionsXrangeTooltip {
        headerFormat: string;
        pointFormat: string;
    }

    interface PlotOptionsZigzag extends PlotOptionsSma{
        params: PlotOptionsZigzagParams;
    }

    interface PlotOptionsZigzagParams {
        deviation: number;
        highIndex: number;
        lowIndex: number;
    }

    /**
     * The Point object. The point objects are generated from the `series.data`
     * configuration objects or raw numbers. They can be accessed from the
     * `Series.points` array. Other ways to instantiate points are through {@link
     * Highcharts.Series#addPoint} or {@link Highcharts.Series#setData}.
     * @class
     */
    class Point {
        /**
         * Set dimensions on pattern from point. This function will set internal
         * pattern._width/_height properties if width and height are not both already
         * set. We only do this on image patterns. The _width/_height properties are
         * set to the size of the bounding box of the point, optionally taking aspect
         * ratio into account. If only one of width or height are supplied as options,
         * the undefined option is calculated as above.
         * @param {Object} pattern The pattern to set dimensions on.
         */
        calculatePatternDimensions(pattern: any): void;

        /**
         * For categorized axes this property holds the category name for the
         * point. For other axes it holds the X value.
         * @name category
         * @memberOf Highcharts.Point
         * @type {String|Number}
         * @instance
         */
        category: string | number;

        /**
         * The point's current color.
         * @name color
         * @memberof Highcharts.Point
         * @type {ColorString}
         * @instance
         */
        color: ColorString;

        /**
         * The point's current color index, used in styled mode instead of
         * `color`. The color index is inserted in class names used for styling.
         * @name colorIndex
         * @memberof Highcharts.Point
         * @type {Number}
         * @instance
         */
        colorIndex: number;

        /**
         * Highstock only. If a point object is created by data
         * grouping, it doesn't reflect actual points in the raw data.
         * In this case, the `dataGroup` property holds information
         * that points back to the raw data.
         * - `dataGroup.start` is the index of the first raw data point
         * in the group.
         * - `dataGroup.length` is the amount of points in the group.
         * @name dataGroup
         * @memberOf Point
         * @type {Object}
         * @instance
         */
        dataGroup: any;

        /**
         * Get the CSS class names for individual points. Used internally where the
         * returned value is set on every point.
         * @returns {String} The class names.
         */
        getClassName(): string;

        /**
         * Return the configuration hash needed for the data label and tooltip
         * formatters.
         * @returns {Object}
         *          Abstract object used in formatters and formats.
         */
        getLabelConfig(): any;

        /**
         * In a series with `zones`, return the zone that the point belongs to.
         * @return {Object}
         *         The zone item.
         */
        getZone(): any;

        /**
         * The graphic representation of the point. Typically
         * this is a simple shape, like a `rect` for column
         * charts or `path` for line markers, but for some
         * complex series types like boxplot or 3D charts, the
         * graphic may be a `g` element containing other shapes.
         * The graphic is generated the first time {@link
         * Series#drawPoints} runs, and updated and moved on
         * subsequent runs.
         * @memberof Point
         * @name graphic
         * @type {SVGElement}
         * @instance
         */
        graphic: SVGElement;

        /**
         * Get the path definition for the halo, which is usually a shadow-like
         * circle around the currently hovered point.
         * @param  {Number} size
         *         The radius of the circular halo.
         * @return {Array} The path definition
         */
        haloPath(size: number): any[];

        /**
         * Initialize the point. Called internally based on the `series.data`
         * option.
         * @param  {Series} series
         *         The series object containing this point.
         * @param  {Number|Array|Object} options
         *         The data in either number, array or object format.
         * @param  {Number} x Optionally, the X value of the point.
         * @return {Point} The Point instance.
         */
        init(series: Series, options: number | any[] | any, x: number): Point;

        /**
         * The name of the point. The name can be given as the first position of the
         * point configuration array, or as a `name` property in the configuration:
         * @example
         * // Array config
         * data: [
         *     ['John', 1],
         *     ['Jane', 2]
         * ]
         * // Object config
         * data: [{
         *        name: 'John',
         *        y: 1
         * }, {
         *     name: 'Jane',
         *     y: 2
         * }]
         * @name name
         * @memberOf Highcharts.Point
         * @type {String}
         * @instance
         */
        name: string;

        /**
         * Runs on mouse out from the point. Called internally from mouse and touch
         * events.
         */
        onMouseOut(): void;

        /**
         * Runs on mouse over the point. Called internally from mouse and touch
         * events.
         * @param {Object} e The event arguments
         */
        onMouseOver(e: any): void;

        /**
         * Transform number or array configs into objects. Used internally to unify
         * the different configuration formats for points. For example, a simple
         * number `10` in a line series will be transformed to `{ y: 10 }`, and an
         * array config like `[1, 10]` in a scatter series will be transformed to
         * `{ x: 1, y: 10 }`.
         * @param  {Number|Array|Object} options
         *         The input options
         * @return {Object} Transformed options.
         */
        optionsToObject(options: number | any[] | any): any;

        /**
         * The percentage for points in a stacked series or pies.
         * @name percentage
         * @memberOf Highcharts.Point
         * @type {Number}
         * @instance
         */
        percentage: number;

        /**
         * In Highmaps, when data is loaded from GeoJSON, the GeoJSON
         * item's properies are copied over here.
         * @name #properties
         * @memberOf Point
         * @type {Object}
         */
        properties: any;

        /**
         * Remove a point and optionally redraw the series and if necessary the axes
         * @param  {Boolean} redraw
         *         Whether to redraw the chart or wait for an explicit call. When
         *         doing more operations on the chart, for example running
         *         `point.remove()` in a loop, it is best practice to set `redraw`
         *         to false and call `chart.redraw()` after.
         * @param  {AnimationOptions} [animation=false]
         *         Whether to apply animation, and optionally animation
         *         configuration.
         * @sample highcharts/plotoptions/series-point-events-remove/
         *         Remove point and confirm
         * @sample highcharts/members/point-remove/
         *         Remove pie slice
         * @sample maps/members/point-remove/
         *         Remove selected points in Highmaps
         */
        remove(redraw: boolean, animation?: AnimationOptions): void;

        /**
         * Toggle the selection status of a point.
         * @param  {Boolean} [selected]
         *         When `true`, the point is selected. When `false`, the point is
         *         unselected. When `null` or `undefined`, the selection state is
         *         toggled.
         * @param  {Boolean} [accumulate=false]
         *         When `true`, the selection is added to other selected points.
         *         When `false`, other selected points are deselected. Internally in
         *         Highcharts, when {@link http://api.highcharts.com/highcharts/plotOptions.series.allowPointSelect|allowPointSelect}
         *         is `true`, selected points are accumulated on Control, Shift or
         *         Cmd clicking the point.
         * @see    Highcharts.Chart#getSelectedPoints
         * @sample highcharts/members/point-select/
         *         Select a point from a button
         * @sample highcharts/chart/events-selection-points/
         *         Select a range of points through a drag selection
         * @sample maps/series/data-id/
         *         Select a point in Highmaps
         */
        select(selected?: boolean, accumulate?: boolean): void;

        /**
         * Whether the point is selected or not.
         * @see Point#select
         * @see Chart#getSelectedPoints
         * @memberof Point
         * @name selected
         * @type {Boolean}
         * @instance
         */
        selected: boolean;

        /**
         * The series object associated with the point.
         * @name series
         * @memberof Highcharts.Point
         * @type Highcharts.Series
         * @instance
         */
        series: Series;

        /**
         * Set a value in an object, on the property defined by key. The key
         * supports nested properties using dot notation. The function modifies the
         * input object and does not make a copy.
         * @param  {Object} object The object to set the value on.
         * @param  {Mixed} value The value to set.
         * @param  {String} key Key to the property to set.
         * @return {Object} The modified object.
         */
        setNestedProperty(object: any, value: any, key: string): any;

        /**
         * Set the point's state.
         * @param  {String} [state]
         *         The new state, can be one of `''` (an empty string), `hover` or
         *         `select`.
         */
        setState(state?: string): void;

        /**
         * Extend the tooltip formatter by adding support for the point.change variable
         * as well as the changeDecimals option
         */
        tooltipFormatter(): void;

        /**
         * The total of values in either a stack for stacked series, or a pie in a pie
         * series.
         * @name total
         * @memberOf Highcharts.Point
         * @type {Number}
         * @instance
         */
        total: number;

        /**
         * Update point with new options (typically x/y data) and optionally redraw
         * the series.
         * @param  {Object} options
         *         The point options. Point options are handled as described under
         *         the `series.type.data` item for each series type. For example
         *         for a line series, if options is a single number, the point will
         *         be given that number as the main y value. If it is an array, it
         *         will be interpreted as x and y values respectively. If it is an
         *         object, advanced options are applied.
         * @param  {Boolean} [redraw=true]
         *          Whether to redraw the chart after the point is updated. If doing
         *          more operations on the chart, it is best practice to set
         *          `redraw` to false and call `chart.redraw()` after.
         * @param  {AnimationOptions} [animation=true]
         *         Whether to apply animation, and optionally animation
         *         configuration.
         * @sample highcharts/members/point-update-column/
         *         Update column value
         * @sample highcharts/members/point-update-pie/
         *         Update pie slice
         * @sample maps/members/point-update/
         *         Update map area value in Highmaps
         */
        update(options: any, redraw?: boolean, animation?: AnimationOptions): void;

        /**
         * For certain series types, like pie charts, where individual points can
         * be shown or hidden.
         * @name visible
         * @memberOf Highcharts.Point
         * @type {Boolean}
         * @instance
         */
        visible: boolean;

        /**
         * The x value of the point.
         * @name x
         * @memberOf Highcharts.Point
         * @type {Number}
         * @instance
         */
        x: number;

        /**
         * The y value of the point.
         * @name y
         * @memberOf Highcharts.Point
         * @type {Number}
         * @instance
         */
        y: number;

        /**
         * Highmaps only. Zoom in on the point using the global animation.
         * @function #zoomTo
         * @memberOf Point
         * @sample maps/members/point-zoomto/
         *         Zoom to points from butons
         */
        zoomTo(): void;

    }

    /**
     * Calculate a distance from camera to points - made for calculating zIndex of
     * scatter points.
     * Parameters:
     *        - coordinates: The coordinates of the specific point
     *        - chart: the chart
     * Returns:
     *        - a distance from camera to point
     */
    function pointCameraDistance(): void;

    /**
     * The mouse and touch tracker object. Each {@link Chart} item has one
     * assosiated Pointer item that can be accessed from the  {@link Chart.pointer}
     * property.
     * @class
     * @param  {Chart} chart
     *         The Chart instance.
     * @param  {Options} options
     *         The root options object. The pointer uses options from the chart and
     *         tooltip structures.
     */
    class Pointer {
        constructor(chart: Chart, options: Options);

        /**
         * Add or remove the MS Pointer specific events
         */
        batchMSEvents(): void;

        /**
         * Destroys the Pointer object and disconnects DOM events.
         */
        destroy(): void;

        /**
         * Finds the closest point to a set of coordinates, using the k-d-tree
         * algorithm.
         * @param  {Array<Series>} series
         *         All the series to search in.
         * @param  {boolean} shared
         *         Whether it is a shared tooltip or not.
         * @param  {object} coordinates
         *         Chart coordinates of the pointer.
         * @param  {number} coordinates.chartX
         * @param  {number} coordinates.chartY
         * @return {Point|undefined} The point closest to given coordinates.
         */
        findNearestKDPoint(series: (Series)[], shared: boolean, coordinates: {
            chartX: number;
            chartY: number;
        }): Point | undefined;

        /**
         * Get the click position in terms of axis values.
         * @param  {PointerEvent} e
         *         A pointer event, extended with `chartX` and `chartY`
         *         properties.
         */
        getCoordinates(e: PointerEvent): void;

        /**
         * Utility to detect whether an element has, or has a parent with, a
         * specificclass name. Used on detection of tracker objects and on deciding
         * whether hovering the tooltip should cause the active series to mouse out.
         * @param  {SVGDOMElement|HTMLDOMElement} element
         *         The element to investigate.
         * @param  {String} className
         *         The class name to look for.
         * @return {Boolean}
         *         True if either the element or one of its parents has the given
         *         class name.
         */
        inClass(element: SVGDOMElement | HTMLDOMElement, className: string): boolean;

        /**
         * Old IE override for pointer normalize, adds chartX and chartY to event
         * arguments.
         */
        normalize(): void;

        /**
         * The event handler for the doubleclick event
         */
        onContainerDblClick(): void;

        /**
         * The event handler for the mouse scroll event
         */
        onContainerMouseWheel(): void;

        /**
         * Handle touch events with two touches
         */
        pinch(): void;

        /**
         * Run translation operations
         */
        pinchTranslate(): void;

        /**
         * Run translation operations for each direction (horizontal and vertical)
         * independently
         */
        pinchTranslateDirection(): void;

        /**
         * Reset the tracking by hiding the tooltip, the hover series state and the
         * hover point
         * @param {Boolean} allowMove
         *        Instead of destroying the tooltip altogether, allow moving it if
         *        possible.
         */
        reset(allowMove: boolean): void;

        /**
         * General touch handler shared by touchstart and touchmove.
         */
        touch(): void;

    }

    /**
     * @memberof Highcharts
     * @typedef  {Object} PointerEvent
     *           A native browser mouse or touch event, extended with position
     *           information relative to the {@link Chart.container}.
     * @property {Number} chartX
     *           The X coordinate of the pointer interaction relative to the
     *           chart.
     * @property {Number} chartY
     *           The Y coordinate of the pointer interaction relative to the
     *           chart.
     */
    type PointerEvent = {
        chartX: number;
        chartY: number;
    };

    /**
     * @type {string}
     */
    const product: string;

    /**
     * Augmented methods for the value axis
     * @mixin
     * @memberof Highcharts
     */
    interface radialAxisMixin {
        /**
         * In case of auto connect, add one closestPointRange to the max value
         * right before tickPositions are computed, so that ticks will extend
         * passed the real max.
         */
        beforeSetTickPositions(): void;
        /**
         * The default options extend defaultYAxisOptions
         */
        defaultRadialGaugeOptions: object;
        /**
         * Get the path for the axis line. This method is also referenced in the
         * getPlotLinePath method.
         */
        getLinePath(): void;
        /**
         * Wrap the getOffset method to return zero offset for title or labels
         * in a radial axis
         */
        getOffset(): void;
        /**
         * Find the path for plot bands along the radial axis
         */
        getPlotBandPath(): void;
        /**
         * Find the path for plot lines perpendicular to the radial axis.
         */
        getPlotLinePath(): void;
        /**
         * Returns the x, y coordinate of a point given by a value and a pixel
         * distance from center
         */
        getPosition(): void;
        /**
         * Find the position for the axis title, by default inside the gauge
         */
        getTitlePosition(): void;
        /**
         * Translate from intermediate plotX (angle), plotY (axis.len - radius)
         * to final chart coordinates.
         */
        postTranslate(): void;
        /**
         * Override the setAxisSize method to use the arc's circumference as
         * length. This allows tickPixelInterval to apply to pixel lengths along
         * the perimeter
         */
        setAxisSize(): void;
        /**
         * Override setAxisTranslation by setting the translation to the
         * difference in rotation. This allows the translate method to return
         * angle for any given value.
         */
        setAxisTranslation(): void;
        /**
         * Merge and set options
         */
        setOptions(): void;
    }

    /**
     * The range selector.
     * @class
     * @memberof Highcharts
     * @param {Object} chart
     */
    class RangeSelector {
        constructor(chart: any);

        /**
         * The method to run when one of the buttons in the range selectors is
         * clicked
         * @param {Number} i The index of the button
         * @param {Object} rangeOptions
         * @param {Boolean} redraw
         */
        clickButton(i: number, rangeOptions: any, redraw: boolean): void;

        /**
         * Compute and cache the range for an individual button
         */
        computeButtonRange(): void;

        /**
         * The default buttons for pre-selecting time frames
         */
        defaultButtons: object[];

        /**
         * Destroys allocated elements.
         */
        destroy(): void;

        /**
         * Draw either the 'from' or the 'to' HTML input box of the range selector
         * @param {Object} name
         */
        drawInput(name: any): void;

        /**
         * Extracts height of range selector
         * @return {Number} Returns rangeSelector height
         */
        getHeight(): number;

        /**
         * Get the position of the range selector buttons and inputs. This can be
         * overridden from outside for custom positioning.
         */
        getPosition(): void;

        /**
         * Get the extremes of YTD.
         * Will choose dataMax if its value is lower than the current timestamp.
         * Will choose dataMin if its value is higher than the timestamp for
         *     the start of current year.
         * @param  {number} dataMax
         * @param  {number} dataMin
         * @return {object} Returns min and max for the YTD
         */
        getYTDExtremes(dataMax: number, dataMin: number): object;

        /**
         * Initialize the range selector
         */
        init(): void;

        /**
         * Render the range selector including the buttons and the inputs. The first
         * time render is called, the elements are created and positioned. On
         * subsequent calls, they are moved and updated.
         * @param {Number} min X axis minimum
         * @param {Number} max X axis maximum
         */
        render(min: number, max: number): void;

        /**
         * Set the internal and displayed value of a HTML input for the dates
         * @param {String} name
         * @param {Number} inputTime
         */
        setInputValue(name: string, inputTime: number): void;

        /**
         * Set the selected option. This method only sets the internal flag, it
         * doesn't update the buttons or the actual zoomed range.
         */
        setSelected(): void;

        /**
         * Detect collision with title or subtitle
         * @param {object} chart
         * @return {Boolean} Returns collision status
         */
        titleCollision(chart: object): boolean;

        /**
         * Update the range selector with new options
         * @param {object} options
         */
        update(options: object): void;

        /**
         * Dynamically update the range selector buttons after a new range has been
         * set
         */
        updateButtonStates(): void;

    }

    interface RangeSelectorOptions {
        allButtonsEnabled: boolean;
        buttonPosition: RangeSelectorOptionsButtonPosition;
        buttons: (RangeSelectorOptionsButtons)[];
        buttonSpacing: number;
        buttonTheme: RangeSelectorOptionsButtonTheme;
        enabled: boolean;
        floating: boolean;
        height: number;
        inputBoxBorderColor: ColorString;
        inputBoxHeight: number;
        inputBoxStyle: CSSObject;
        inputBoxWidth: number;
        inputDateFormat: string;
        inputDateParser: ()=>any;
        inputEditDateFormat: string;
        inputEnabled: boolean;
        inputPosition: RangeSelectorOptionsInputPosition;
        inputStyle: CSSObject;
        labelStyle: RangeSelectorOptionsLabelStyle;
        selected: number;
        verticalAlign: string;
        x: number;
        y: number;
    }

    interface RangeSelectorOptionsButtonPosition {
        align: string;
        x: number;
        y: number;
    }

    interface RangeSelectorOptionsButtons {
        count: number;
        dataGrouping: RangeSelectorOptionsButtonsDataGrouping;
        events: RangeSelectorOptionsButtonsEvents;
        offsetMax: number;
        offsetMin: number;
        text: string;
        type: string;
    }

    interface RangeSelectorOptionsButtonsDataGrouping extends PlotOptionsSeriesDataGrouping{
    }

    interface RangeSelectorOptionsButtonsEvents {
        click: ()=>any;
    }

    interface RangeSelectorOptionsButtonTheme {
        height: number;
        padding: number;
        width: number;
        zIndex: number;
    }

    interface RangeSelectorOptionsInputPosition {
        align: string;
        x: number;
        y: number;
    }

    interface RangeSelectorOptionsLabelStyle {
        color: string;
    }

    /**
     * Old IE polyfill for removeEventListener, called from inside the addEvent
     * function.
     */
    function removeEventListenerPolyfill(): void;

    /**
     * general renderer
     * @typedef {SVGRenderer} Renderer
     * @memberOf H
     */
    type Renderer = SVGRenderer;

    interface ResponsiveOptions {
        rules: (ResponsiveOptionsRules)[];
    }

    interface ResponsiveOptionsRules {
        chartOptions: any;
        condition: ResponsiveOptionsRulesCondition;
    }

    interface ResponsiveOptionsRulesCondition {
        callback: ()=>any;
        maxHeight: number;
        maxWidth: number;
        minHeight: number;
        minWidth: number;
    }

    /**
     * A reusable scrollbar, internally used in Highstock's navigator and optionally
     * on individual axes.
     * @class
     * @memberof Highcharts
     * @param {Object} renderer
     * @param {Object} options
     * @param {Object} chart
     */
    class Scrollbar {
        constructor(renderer: any, options: any, chart: any);

        /**
         * Set up the mouse and touch events for the Scrollbar
         */
        addEvents(): void;

        /**
         * Get normalized (0-1) cursor position over the scrollbar
         * @param {Event} normalizedEvent - normalized event, with chartX and chartY values
         * @return {Object} Local position {chartX, chartY}
         */
        cursorToScrollbarPosition(normalizedEvent: Event): any;

        /**
         * Destroys allocated elements.
         */
        destroy(): void;

        /**
         * Draw the scrollbar buttons with arrows
         * @param {Number} index 0 is left, 1 is right
         */
        drawScrollbarButton(index: number): void;

        /**
         * Init events methods, so we have an access to the Scrollbar itself
         */
        initEvents(): void;

        /**
         * @function mouseDownHandler
         * @memberOf Scrollbar
         * @instance
         * @param {MouseEvent} e
         */
        mouseDownHandler(e: MouseEvent): void;

        /**
         * Event handler for the mouse move event.
         * @function mouseMoveHandler
         * @memberOf Scrollbar
         * @instance
         * @param {MouseEvent} e
         */
        mouseMoveHandler(e: MouseEvent): void;

        /**
         * Event handler for the mouse up event.
         * @function mouseUpHandler
         * @memberOf Scrollbar
         * @instance
         * @param {MouseEvent} e
         */
        mouseUpHandler(e: MouseEvent): void;

        /**
         * Position the scrollbar, method called from a parent with defined dimensions
         * @param {Number} x - x-position on the chart
         * @param {Number} y - y-position on the chart
         * @param {Number} width - width of the scrollbar
         * @param {Number} height - height of the scorllbar
         */
        position(x: number, y: number, width: number, height: number): void;

        /**
         * Removes the event handlers attached previously with addEvents.
         */
        removeEvents(): void;

        /**
         * Render scrollbar with all required items.
         */
        render(): void;

        /**
         * Set scrollbar size, with a given scale.
         * @param {Number} from - scale (0-1) where bar should start
         * @param {Number} to - scale (0-1) where bar should end
         */
        setRange(from: number, to: number): void;

        /**
         * Update the scrollbar with new options
         */
        update(): void;

        /**
         * Update position option in the Scrollbar, with normalized 0-1 scale
         */
        updatePosition(): void;

    }

    interface ScrollbarOptions {
        barBackgroundColor: ColorString;
        barBorderColor: ColorString;
        barBorderRadius: number;
        barBorderWidth: number;
        buttonArrowColor: ColorString;
        buttonBackgroundColor: ColorString;
        buttonBorderColor: ColorString;
        buttonBorderRadius: number;
        buttonBorderWidth: number;
        enabled: boolean;
        height: number;
        liveRedraw: boolean;
        margin: number;
        minWidth: number;
        rifleColor: ColorString;
        showFull: boolean;
        step: number;
        trackBackgroundColor: ColorString;
        trackBorderColor: ColorString;
        trackBorderRadius: number;
        trackBorderWidth: number;
        zIndex: number;
    }

    /**
     * This is the base series prototype that all other series types inherit from.
     * A new series is initialized either through the
     * {@link https://api.highcharts.com/highcharts/series|series} option structure,
     * or after the chart is initialized, through
     * {@link Highcharts.Chart#addSeries}.
     * The object can be accessed in a number of ways. All series and point event
     * handlers give a reference to the `series` object. The chart object has a
     * {@link Highcharts.Chart.series|series} property that is a collection of all
     * the chart's series. The point objects and axis objects also have the same
     * reference.
     * Another way to reference the series programmatically is by `id`. Add an id
     * in the series configuration options, and get the series object by {@link
     * Highcharts.Chart#get}.
     * Configuration options for the series are given in three levels. Options for
     * all series in a chart are given in the
     * {@link https://api.highcharts.com/highcharts/plotOptions.series|
     * plotOptions.series} object. Then options for all series of a specific type
     * are given in the plotOptions of that type, for example `plotOptions.line`.
     * Next, options for one single series are given in the series array, or as
     * arguements to `chart.addSeries`.
     * The data in the series is stored in various arrays.
     * - First, `series.options.data` contains all the original config options for
     * each point whether added by options or methods like `series.addPoint`.
     * - Next, `series.data` contains those values converted to points, but in case
     * the series data length exceeds the `cropThreshold`, or if the data is
     * grouped, `series.data` doesn't contain all the points. It only contains the
     * points that have been created on demand.
     * - Then there's `series.points` that contains all currently visible point
     * objects. In case of cropping, the cropped-away points are not part of this
     * array. The `series.points` array starts at `series.cropStart` compared to
     * `series.data` and `series.options.data`. If however the series data is
     * grouped, these can't be correlated one to one.
     * - `series.xData` and `series.processedXData` contain clean x values,
     * equivalent to `series.data` and `series.points`.
     * - `series.yData` and `series.processedYData` contain clean y values,
     * equivalent to `series.data` and `series.points`.
     * @class Highcharts.Series
     * @param  {Highcharts.Chart} chart
     *         The chart instance.
     * @param  {Options.plotOptions.series} options
     *         The series options.
     */
    class Series {
        constructor(chart: Chart, options: any);

        /**
         * Destroy the grouped data points. #622, #740
         * @function #destroyGroupedData
         * @memberOf Highcharts.Series.prototype
         */
        destroyGroupedData(): void;

        /**
         * Override the generatePoints method by adding a reference to grouped data
         * @function #generatePoints
         * @memberOf Highcharts.Series.prototype
         */
        generatePoints(): void;

        /**
         * Takes parallel arrays of x and y data and groups the data into intervals
         * defined by groupPositions, a collection of starting x values for each group.
         * @function #groupData
         * @memberOf Highcharts.Series.prototype
         */
        groupData(): void;

        /**
         * Search a k-d tree by the point angle, used for shared tooltips in polar
         * charts
         * @function #searchPointByAngle
         * @memberOf Highcharts.Series.prototype
         */
        searchPointByAngle(): void;

        /**
         * Translate a point's plotX and plotY from the internal angle and radius
         * measures to true plotX, plotY coordinates
         * @function #toXY
         * @memberOf Highcharts.Series.prototype
         */
        toXY(): void;

        /**
         * Add a point to the series after render time. The point can be added at
         * the end, or by giving it an X value, to the start or in the middle of the
         * series.
         * @param  {Number|Array|Object} options
         *         The point options. If options is a single number, a point with
         *         that y value is appended to the series.If it is an array, it will
         *         be interpreted as x and y values respectively. If it is an
         *         object, advanced options as outlined under `series.data` are
         *         applied.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart after the point is added. When adding
         *         more than one point, it is highly recommended that the redraw
         *         option be set to false, and instead {@link Chart#redraw}
         *         is explicitly called after the adding of points is finished.
         *         Otherwise, the chart will redraw after adding each point.
         * @param  {Boolean} [shift=false]
         *         If true, a point is shifted off the start of the series as one is
         *         appended to the end.
         * @param  {AnimationOptions} [animation]
         *         Whether to apply animation, and optionally animation
         *         configuration.
         * @sample highcharts/members/series-addpoint-append/
         *         Append point
         * @sample highcharts/members/series-addpoint-append-and-shift/
         *         Append and shift
         * @sample highcharts/members/series-addpoint-x-and-y/
         *         Both X and Y values given
         * @sample highcharts/members/series-addpoint-pie/
         *         Append pie slice
         * @sample stock/members/series-addpoint/
         *         Append 100 points in Highstock
         * @sample stock/members/series-addpoint-shift/
         *         Append and shift in Highstock
         * @sample maps/members/series-addpoint/
         *         Add a point in Highmaps
         */
        addPoint(options: number | any[] | any, redraw?: boolean, shift?: boolean, animation?: AnimationOptions): void;

        /**
         * Align each individual data label
         */
        alignDataLabel(): void;

        /**
         * Animate in the series. Called internally twice. First with the `init`
         * parameter set to true, which sets up the initial state of the animation.
         * Then when ready, it is called with the `init` parameter undefined, in
         * order to perform the actual animation. After the second run, the function
         * is removed.
         * @param  {Boolean} init
         *         Initialize the animation.
         */
        animate(init: boolean): void;

        /**
         * Read only. The chart that the series belongs to.
         * @readonly
         * @name chart
         * @memberOf Series
         * @type {Chart}
         * @instance
         */
        readonly chart: Chart;

        /**
         * Check whether a proposed label position is clear of other elements
         */
        checkClearPoint(): void;

        /**
         * Read only. An array containing those values converted to points.
         * In case the series data length exceeds the `cropThreshold`, or if the
         * data is grouped, `series.data` doesn't contain all the points. Also,
         * in case a series is hidden, the `data` array may be empty. To access
         * raw values, `series.options.data` will always be up to date.
         * `Series.data` only contains the points that have been created on
         * demand. To modify the data, use {@link Highcharts.Series#setData} or
         * {@link Highcharts.Point#update}.
         * @readonly
         * @name data
         * @memberOf Highcharts.Series
         * @see  Series.points
         * @type {Array.<Highcharts.Point>}
         * @instance
         */
        readonly data: (Point)[];

        /**
         * If implemented in the core, parts of this can probably be
         * shared with other similar methods in Highcharts.
         */
        destroyGraphics(): void;

        /**
         * Draw the data labels
         */
        drawDataLabels(): void;

        /**
         * Draw the graph. Called internally when rendering line-like series types.
         * The first time it generates the `series.graph` item and optionally other
         * series-wide items like `series.area` for area charts. On subsequent calls
         * these items are updated with new positions and attributes.
         */
        drawGraph(): void;

        /**
         * Draw the markers for line-like series types, and columns or other
         * graphical representation for {@link Point} objects for other series
         * types. The resulting element is typically stored as {@link
         * Point.graphic}, and is created on the first call and updated and moved on
         * subsequent calls.
         */
        drawPoints(): void;

        /**
         * Enter boost mode and apply boost-specific properties.
         */
        enterBoost(): void;

        /**
         * Exit from boost mode and restore non-boost properties.
         */
        exitBoost(): void;

        /**
         * Extend getGraphPath by identifying gaps in the data so that we can draw a gap
         * in the line or area. This was moved from ordinal axis module to broken axis
         * module as of #5045.
         */
        gappedPath(): void;

        /**
         * #6212 Calculate connectors for spline series in polar chart.
         * @function getConnectors
         * @memberOf Highcharts.Series.prototype
         * @param {Array<Point>} segment
         * @param {number} index
         * @param {Boolean} calculateNeighbours
         *        Check if connectors should be calculated for neighbour points as
         *        well allows short recurence
         * @param {boolean} connectEnds
         */
        getConnectors(segment: (Point)[], index: number, calculateNeighbours: boolean, connectEnds: boolean): void;

        /**
         * Calculate Y extremes for the visible data. The result is set as
         * `dataMin` and `dataMax` on the Series item.
         * @param  {Array<Number>} [yData]
         *         The data to inspect. Defaults to the current data within the
         *         visible range.
         */
        getExtremes(yData?: number[]): void;

        /**
         * Return series name in "Series {Number}" format or the one defined by a
         * user. This method can be simply overridden as series name format can
         * vary (e.g. technical indicators).
         * @return  {String} The series name.
         */
        getName(): string;

        /**
         * Get the translation and scale for the plot area of this series.
         */
        getPlotBox(): void;

        /**
         * Return a full Point object based on the index.
         * The boost module uses stripped point objects for performance reasons.
         * @param   {Number} boostPoint A stripped-down point object
         * @returns {Object} A Point object as per http://api.highcharts.com/highcharts#Point
         */
        getPoint(boostPoint: number): any;

        /**
         * Points to avoid. In addition to actual data points, the label should avoid
         * interpolated positions.
         */
        getPointsOnGraph(): void;

        /**
         * Get stack indicator, according to it's x-value, to determine points with the
         * same x-value
         */
        getStackIndicator(): void;

        /**
         * Get the series' symbol based on either the options or pulled from global
         * options.
         */
        getSymbol(): void;

        /**
         * Return the series points with null points filtered out.
         * @param  {Array<Point>} [points]
         *         The points to inspect, defaults to {@link Series.points}.
         * @param  {Boolean} [insideOnly=false]
         *         Whether to inspect only the points that are inside the visible
         *         view.
         * @return {Array<Point>}
         *         The valid points.
         */
        getValidPoints(points?: (Point)[], insideOnly?: boolean): (Point)[];

        /**
         * Define hasData functions for series. These return true if there are data
         * points on this series within the plot area.
         */
        hasData(): void;

        /**
         * Hide the series if visible. If the {@link
         * https://api.highcharts.com/highcharts/chart.ignoreHiddenSeries|
         * chart.ignoreHiddenSeries} option is true, the chart is redrawn without
         * this series.
         * @sample highcharts/members/series-hide/
         *         Toggle visibility from a button
         */
        hide(): void;

        /**
         * Extend series.init by adding a method to modify the y value used for plotting
         * on the y axis. This method is called both from the axis when finding dataMin
         * and dataMax, and from the series.translate method.
         * @function init
         * @memberOf Highcharts.Series.prototype
         */
        init(): void;

        /**
         * If data labels fall partly outside the plot area, align them back in, in a
         * way that doesn't hide the point.
         */
        justifyDataLabel(): void;

        /**
         * Overridable function to return series-specific font sizes for the labels. By
         * default it returns bigger font sizes for series with the greater sum of y
         * values.
         */
        labelFontSize(): void;

        /**
         * Get non-presentational attributes for a point. Used internally for both
         * styled mode and classic. Can be overridden for different series types.
         * @see    Series#pointAttribs
         * @param  {Point} point
         *         The Point to inspect.
         * @param  {String} [state]
         *         The state, can be either `hover`, `select` or undefined.
         * @return {SVGAttributes}
         *         A hash containing those attributes that are not settable from
         *         CSS.
         */
        markerAttribs(point: Point, state?: string): SVGAttributes;

        /**
         * Iterate over all stacks and compute the absolute values to percent
         */
        modifyStacks(): void;

        /**
         * The series name as given in the options. Defaults to
         * "Series {n}".
         * @name name
         * @memberOf Series
         * @type {String}
         * @instance
         */
        name: string;

        /**
         * Runs on mouse out of the series graphical items.
         */
        onMouseOut(): void;

        /**
         * Runs on mouse over the series graphical items.
         */
        onMouseOver(): void;

        /**
         * Read only. The series' current options. To update, use {@link
         * Series#update}.
         * @readonly
         * @name options
         * @memberOf Series
         * @type SeriesOptions
         * @instance
         */
        readonly options: SeriesOptions;

        /**
         * Modifier function for percent stacks. Blows up the stack to 100%.
         */
        percentStacker(): void;

        /**
         * Internal function to get presentational attributes for each point. Unlike
         * {@link Series#markerAttribs}, this function should return those
         * attributes that can also be set in CSS. In styled mode, `pointAttribs`
         * won't be called.
         * @param  {Point} point
         *         The point instance to inspect.
         * @param  {String} [state]
         *         The point state, can be either `hover`, `select` or undefined for
         *         normal state.
         * @return {SVGAttributes}
         *         The presentational attributes to be set on the point.
         */
        pointAttribs(point: Point, state?: string): SVGAttributes;

        /**
         * An array containing all currently visible point objects. In case of
         * cropping, the cropped-away points are not part of this array. The
         * `series.points` array starts at `series.cropStart` compared to
         * `series.data` and `series.options.data`. If however the series data
         * is grouped, these can't be correlated one to one. To
         * modify the data, use {@link Highcharts.Series#setData} or {@link
         * Highcharts.Point#update}.
         * @name points
         * @memberof Series
         * @type {Array.<Point>}
         * @instance
         */
        points: (Point)[];

        /**
         * Remove a series and optionally redraw the chart.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart or wait for an explicit call to
         *         {@link Highcharts.Chart#redraw}.
         * @param  {AnimationOptions} [animation]
         *         Whether to apply animation, and optionally animation
         *         configuration
         * @param  {Boolean} [withEvent=true]
         *         Used internally, whether to fire the series `remove` event.
         * @sample highcharts/members/series-remove/
         *         Remove first series from a button
         */
        remove(redraw?: boolean, animation?: AnimationOptions, withEvent?: boolean): void;

        /**
         * Remove a point from the series. Unlike the
         * {@link Highcharts.Point#remove} method, this can also be done on a point
         * that is not instanciated because it is outside the view or subject to
         * Highstock data grouping.
         * @param  {Number} i
         *         The index of the point in the {@link Highcharts.Series.data|data}
         *         array.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart after the point is added. When
         *         removing more than one point, it is highly recommended that the
         *         `redraw` option be set to `false`, and instead {@link
         *         Highcharts.Chart#redraw} is explicitly called after the adding of
         *         points is finished.
         * @param  {AnimationOptions} [animation]
         *         Whether and optionally how the series should be animated.
         * @sample highcharts/members/series-removepoint/
         *         Remove cropped point
         */
        removePoint(i: number, redraw?: boolean, animation?: AnimationOptions): void;

        /**
         * Render the graph and markers. Called internally when first rendering and
         * later when redrawing the chart. This function can be extended in plugins,
         * but normally shouldn't be called directly.
         */
        render(): void;

        /**
         * Select or unselect the series. This means its {@link
         * Highcharts.Series.selected|selected} property is set, the checkbox in the
         * legend is toggled and when selected, the series is returned by the
         * {@link Highcharts.Chart#getSelectedSeries} function.
         * @param  {Boolean} [selected]
         *         True to select the series, false to unselect. If undefined, the
         *         selection state is toggled.
         * @sample highcharts/members/series-select/
         *         Select a series from a button
         */
        select(selected?: boolean): void;

        /**
         * Read only. The series' selected state as set by {@link
         * Highcharts.Series#select}.
         * @readonly
         * @name selected
         * @memberOf Series
         * @type {Boolean}
         * @instance
         */
        readonly selected: boolean;

        /**
         * Highstock only. Set the {@link
         * http://api.highcharts.com/highstock/plotOptions.series.compare|
         * compare} mode of the series after render time. In most cases it is more
         * useful running {@link Axis#setCompare} on the X axis to update all its
         * series.
         * @function setCompare
         * @memberOf Highcharts.Series.prototype
         * @param  {String} compare
         *         Can be one of `null`, `"percent"` or `"value"`.
         */
        setCompare(compare: string): void;

        /**
         * Apply a new set of data to the series and optionally redraw it. The new
         * data array is passed by reference (except in case of `updatePoints`), and
         * may later be mutated when updating the chart data.
         * Note the difference in behaviour when setting the same amount of points,
         * or a different amount of points, as handled by the `updatePoints`
         * parameter.
         * @param  {SeriesDataOptions} data
         *         Takes an array of data in the same format as described under
         *         `series.typedata` for the given series type.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart after the series is altered. If doing
         *         more operations on the chart, it is a good idea to set redraw to
         *         false and call {@link Chart#redraw} after.
         * @param  {AnimationOptions} [animation]
         *         When the updated data is the same length as the existing data,
         *         points will be updated by default, and animation visualizes how
         *         the points are changed. Set false to disable animation, or a
         *         configuration object to set duration or easing.
         * @param  {Boolean} [updatePoints=true]
         *         When the updated data is the same length as the existing data, or
         *         points can be matched by X values, points will be updated instead
         *         of replaced. This allows updating with animation and performs
         *         better. In this case, the original array is not passed by
         *         reference. Set `false` to prevent.
         * @sample highcharts/members/series-setdata/
         *         Set new data from a button
         * @sample highcharts/members/series-setdata-pie/
         *         Set data in a pie
         * @sample stock/members/series-setdata/
         *         Set new data in Highstock
         * @sample maps/members/series-setdata/
         *         Set new data in Highmaps
         */
        setData(data: any, redraw?: boolean, animation?: AnimationOptions, updatePoints?: boolean): void;

        /**
         * Set the series options by merging from the options tree. Called
         * internally on initiating and updating series. This function will not
         * redraw the series. For API usage, use {@link Series#update}.
         * @param  {Options.plotOptions.series} itemOptions
         *         The series options.
         */
        setOptions(itemOptions: any): void;

        /**
         * Adds series' points value to corresponding stack
         */
        setStackedPoints(): void;

        /**
         * Set the state of the series. Called internally on mouse interaction
         * operations, but it can also be called directly to visually
         * highlight a series.
         * @param  {String} [state]
         *         Can be either `hover` or undefined to set to normal
         *         state.
         */
        setState(state?: string): void;

        /**
         * Show or hide the series.
         * @param  {Boolean} [visible]
         *         True to show the series, false to hide. If undefined, the
         *         visibility is toggled.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart after the series is altered. If doing
         *         more operations on the chart, it is a good idea to set redraw to
         *         false and call {@link Chart#redraw|chart.redraw()} after.
         */
        setVisible(visible?: boolean, redraw?: boolean): void;

        /**
         * Show the series if hidden.
         * @sample highcharts/members/series-hide/
         *         Toggle visibility from a button
         */
        show(): void;

        /**
         * Translate data points from raw data values to chart specific positioning
         * data needed later in the `drawPoints` and `drawGraph` functions. This
         * function can be overridden in plugins and custom series type
         * implementations.
         */
        translate(): void;

        /**
         * Translate the plotX, plotY properties and add plotZ.
         */
        translate3dPoints(): void;

        /**
         * Read only. The series' type, like "line", "area", "column" etc. The
         * type in the series options anc can be altered using {@link
         * Series#update}.
         * @readonly
         * @name type
         * @memberOf Series
         * @type String
         * @instance
         */
        readonly type: string;

        /**
         * Update the series with a new set of options. For a clean and precise
         * handling of new options, all methods and elements from the series are
         * removed, and it is initiated from scratch. Therefore, this method is more
         * performance expensive than some other utility methods like {@link
         * Series#setData} or {@link Series#setVisible}.
         * @param  {SeriesOptions} options
         *         New options that will be merged with the series' existing
         *         options.
         * @param  {Boolean} [redraw=true]
         *         Whether to redraw the chart after the series is altered. If doing
         *         more operations on the chart, it is a good idea to set redraw to
         *         false and call {@link Chart#redraw} after.
         * @sample highcharts/members/series-update/
         *         Updating series options
         * @sample maps/members/series-update/
         *         Update series options in Highmaps
         */
        update(options: SeriesOptions, redraw?: boolean): void;

        /**
         * Read only. The series' visibility state as set by {@link
         * Series#show}, {@link Series#hide}, or in the initial
         * configuration.
         * @readonly
         * @name visible
         * @memberOf Series
         * @type {Boolean}
         * @instance
         */
        readonly visible: boolean;

        /**
         * Read only. The unique xAxis object associated with the
         * series.
         * @readonly
         * @name xAxis
         * @memberOf Series
         * @type Axis
         * @instance
         */
        readonly xAxis: Axis;

        /**
         * Read only. The unique yAxis object associated with the
         * series.
         * @readonly
         * @name yAxis
         * @memberOf Series
         * @type Axis
         * @instance
         */
        readonly yAxis: Axis;

    }

    interface SeriesOptions {
        ad: SeriesOptionsAd;
        area: SeriesOptionsArea;
        arearange: SeriesOptionsArearange;
        areaspline: SeriesOptionsAreaspline;
        areasplinerange: SeriesOptionsAreasplinerange;
        atr: SeriesOptionsAtr;
        bar: SeriesOptionsBar;
        bb: SeriesOptionsBb;
        bellcurve: SeriesOptionsBellcurve;
        boxplot: SeriesOptionsBoxplot;
        bubble: SeriesOptionsBubble;
        bullet: SeriesOptionsBullet;
        candlestick: SeriesOptionsCandlestick;
        cci: SeriesOptionsCci;
        cmf: SeriesOptionsCmf;
        column: SeriesOptionsColumn;
        columnrange: SeriesOptionsColumnrange;
        ema: SeriesOptionsEma;
        errorbar: SeriesOptionsErrorbar;
        flags: SeriesOptionsFlags;
        funnel: SeriesOptionsFunnel;
        gauge: SeriesOptionsGauge;
        heatmap: SeriesOptionsHeatmap;
        histogram: SeriesOptionsHistogram;
        id: string;
        ikh: SeriesOptionsIkh;
        index: number;
        legendIndex: number;
        line: SeriesOptionsLine;
        macd: SeriesOptionsMacd;
        map: SeriesOptionsMap;
        mapbubble: SeriesOptionsMapbubble;
        mapData: any[];
        mapline: SeriesOptionsMapline;
        mappoint: SeriesOptionsMappoint;
        mfi: SeriesOptionsMfi;
        momentum: SeriesOptionsMomentum;
        name: string;
        ohlc: SeriesOptionsOhlc;
        pareto: SeriesOptionsPareto;
        pie: SeriesOptionsPie;
        pivotpoints: SeriesOptionsPivotpoints;
        polygon: SeriesOptionsPolygon;
        priceenvelopes: SeriesOptionsPriceenvelopes;
        psar: SeriesOptionsPsar;
        pyramid: SeriesOptionsPyramid;
        roc: SeriesOptionsRoc;
        rsi: SeriesOptionsRsi;
        sankey: SeriesOptionsSankey;
        scatter: SeriesOptionsScatter;
        scatter3d: SeriesOptionsScatter3d;
        sma: SeriesOptionsSma;
        solidgauge: SeriesOptionsSolidgauge;
        spline: SeriesOptionsSpline;
        stack: string;
        stochastic: SeriesOptionsStochastic;
        streamgraph: SeriesOptionsStreamgraph;
        sunburst: SeriesOptionsSunburst;
        tilemap: SeriesOptionsTilemap;
        treemap: SeriesOptionsTreemap;
        type: string;
        variablepie: SeriesOptionsVariablepie;
        variwide: SeriesOptionsVariwide;
        vbp: SeriesOptionsVbp;
        vector: SeriesOptionsVector;
        vwap: SeriesOptionsVwap;
        waterfall: SeriesOptionsWaterfall;
        windbarb: SeriesOptionsWindbarb;
        wma: SeriesOptionsWma;
        wordcloud: SeriesOptionsWordcloud;
        xAxis: number | string;
        xrange: SeriesOptionsXrange;
        yAxis: number | string;
        zigzag: SeriesOptionsZigzag;
        zIndex: number;
    }

    interface SeriesOptionsAd extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsAdData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsArea extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsAreaData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsArearange extends SeriesOptions{
        data: any[];
        dataLabels: any;
    }

    interface SeriesOptionsArearangeData extends SeriesOptionsLineData{
        high: number;
        low: number;
    }

    interface SeriesOptionsAreaspline extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsAreasplineData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsAreasplinerange extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsAreasplinerangeData extends SeriesOptionsArearangeData{
    }

    interface SeriesOptionsAtr extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsAtrData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsBar extends SeriesOptions{
        data: any[];
        states: SeriesOptionsBarStates;
    }

    interface SeriesOptionsBarData extends SeriesOptionsColumnData{
    }

    interface SeriesOptionsBarStates {
        hover: any;
        select: any;
    }

    interface SeriesOptionsBb extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsBbData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsBellcurve extends SeriesOptions{
        baseSeries: number | string;
        data: any[];
    }

    interface SeriesOptionsBellcurveData extends SeriesOptionsAreasplineData{
    }

    interface SeriesOptionsBoxplot extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsBoxplotData extends SeriesOptionsLineData{
        high: number;
        low: number;
        median: number;
        q1: number;
        q3: number;
    }

    interface SeriesOptionsBubble extends SeriesOptions{
        data: any[];
        marker: any;
    }

    interface SeriesOptionsBubbleData extends SeriesOptionsLineData{
        z: number;
    }

    interface SeriesOptionsBullet extends SeriesOptions{
        data: any[];
        states: SeriesOptionsBulletStates;
    }

    interface SeriesOptionsBulletData extends SeriesOptionsColumnData{
        target: number;
        targetOptions: SeriesOptionsBulletDataTargetOptions;
    }

    interface SeriesOptionsBulletDataTargetOptions extends PlotOptionsBulletTargetOptions{
    }

    interface SeriesOptionsBulletStates {
        hover: any;
        select: any;
    }

    interface SeriesOptionsCandlestick extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsCandlestickData extends SeriesOptionsOhlcData{
    }

    interface SeriesOptionsCci extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsCciData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsCmf extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsCmfData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsColumn extends SeriesOptions{
        data: any[];
        states: SeriesOptionsColumnStates;
    }

    interface SeriesOptionsColumnData extends SeriesOptionsLineData{
        borderColor: ColorString;
        borderWidth: number;
    }

    interface SeriesOptionsColumnrange extends SeriesOptions{
        data: any[];
        states: SeriesOptionsColumnrangeStates;
    }

    interface SeriesOptionsColumnrangeData extends SeriesOptionsArearangeData{
    }

    interface SeriesOptionsColumnrangeStates {
        hover: any;
        select: any;
    }

    interface SeriesOptionsColumnStates {
        hover: any;
        select: any;
    }

    interface SeriesOptionsEma extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsEmaData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsErrorbar extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsErrorbarData extends SeriesOptionsArearangeData{
    }

    interface SeriesOptionsFlags extends SeriesOptions{
        data: (SeriesOptionsFlagsData)[];
    }

    interface SeriesOptionsFlagsData extends SeriesOptionsLineData{
        fillColor: ColorString;
        text: string;
        title: string;
    }

    interface SeriesOptionsFunnel extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsFunnelData extends SeriesOptionsPieData{
    }

    interface SeriesOptionsGauge extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsGaugeData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsHeatmap extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsHeatmapData extends SeriesOptionsLineData{
        color: ColorString;
        pointPadding: number;
        value: number;
        x: number;
        y: number;
    }

    interface SeriesOptionsHistogram extends SeriesOptions{
        baseSeries: number | string;
        data: any[];
    }

    interface SeriesOptionsHistogramData extends SeriesOptionsColumnData{
    }

    interface SeriesOptionsIkh extends SeriesOptions{
        data: SeriesOptionsIkhData;
    }

    interface SeriesOptionsIkhData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsLine extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsLineData {
        className: string;
        color: ColorString;
        colorIndex: number;
        dataLabels: any;
        description: string;
        drilldown: string;
        events: SeriesOptionsLineDataEvents;
        id: string;
        labelrank: number;
        marker: SeriesOptionsLineDataMarker;
        name: string;
        selected: boolean;
        x: number;
        y: number;
    }

    interface SeriesOptionsLineDataEvents extends PlotOptionsSeriesPointEvents{
    }

    interface SeriesOptionsLineDataMarker extends PlotOptionsSeriesMarker{
    }

    interface SeriesOptionsMacd extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsMacdData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsMap extends SeriesOptions{
        data: (SeriesOptionsMapData)[];
    }

    interface SeriesOptionsMapbubble extends SeriesOptions{
        data: any[];
        marker: any;
    }

    interface SeriesOptionsMapbubbleData extends SeriesOptionsMappointData{
        z: number;
    }

    interface SeriesOptionsMapData {
        color: ColorString;
        dataLabels: any;
        drilldown: string;
        events: SeriesOptionsMapDataEvents;
        id: string;
        labelrank: number;
        middleX: number;
        middleY: number;
        name: string;
        path: string;
        value: number;
    }

    interface SeriesOptionsMapDataEvents extends PlotOptionsSeriesPointEvents{
    }

    interface SeriesOptionsMapline extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsMappoint extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsMappointData extends SeriesOptionsMapData{
        lat: number;
        lon: number;
        x: number;
        y: number;
    }

    interface SeriesOptionsMfi extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsMfiData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsMomentum extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsMomentumData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsOhlc extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsOhlcData extends SeriesOptionsArearangeData{
        close: number;
        open: number;
    }

    interface SeriesOptionsPareto extends SeriesOptions{
        baseSeries: number | string;
        data: any[];
    }

    interface SeriesOptionsParetoData extends SeriesOptionsColumnData{
    }

    interface SeriesOptionsPie extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsPieData extends SeriesOptionsLineData{
        legendIndex: number;
        sliced: boolean;
    }

    interface SeriesOptionsPivotpoints extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsPivotpointsData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsPolygon extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsPolygonData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsPriceenvelopes extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsPriceenvelopesData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsPsar extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsPsarData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsPyramid extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsPyramidData extends SeriesOptionsPieData{
    }

    interface SeriesOptionsRoc extends SeriesOptions{
        data: SeriesOptionsRocData;
    }

    interface SeriesOptionsRocData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsRsi extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsRsiData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsSankey extends SeriesOptions{
        data: any[];
        nodes: (SeriesOptionsSankeyNodes)[];
    }

    interface SeriesOptionsSankeyData extends SeriesOptionsLineData{
        color: string;
        from: string;
        outgoing: boolean;
        to: string;
        weight: number;
    }

    interface SeriesOptionsSankeyNodes {
        color: ColorString;
        colorIndex: number;
        column: undefined | number;
        id: string;
        name: string;
        offset: number;
    }

    interface SeriesOptionsScatter extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsScatter3d extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsScatter3dData extends SeriesOptionsScatterData{
        z: number;
    }

    interface SeriesOptionsScatterData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsSma extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsSmaData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsSolidgauge extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsSolidgaugeData extends SeriesOptionsGaugeData{
        innerRadius: number | string;
        radius: number | string;
    }

    interface SeriesOptionsSpline extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsSplineData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsStochastic extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsStochasticData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsStreamgraph extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsStreamgraphData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsSunburst extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsSunburstData extends SeriesOptionsTreemapData{
        name: string;
        sliced: boolean;
        value: number;
        weight: number;
    }

    interface SeriesOptionsTilemap extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsTilemapData extends SeriesOptionsHeatmapData{
    }

    interface SeriesOptionsTreemap extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsTreemapData extends SeriesOptionsHeatmapData{
        colorValue: number;
        parent: string;
        value: number;
    }

    interface SeriesOptionsVariablepie extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsVariablepieData extends SeriesOptionsPieData{
    }

    interface SeriesOptionsVariwide extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsVariwideData extends SeriesOptionsLineData{
        z: number;
    }

    interface SeriesOptionsVbp extends SeriesOptions{
        data: SeriesOptionsVbpData;
    }

    interface SeriesOptionsVbpData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsVector extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsVectorData extends SeriesOptionsLineData{
        direction: number;
        length: number;
    }

    interface SeriesOptionsVwap extends SeriesOptions{
        data: SeriesOptionsVwapData;
    }

    interface SeriesOptionsVwapData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsWaterfall extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsWaterfallData extends SeriesOptionsLineData{
        isIntermediateSum: boolean;
        isSum: boolean;
    }

    interface SeriesOptionsWindbarb extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsWindbarbData extends SeriesOptionsLineData{
        direction: number;
        value: number;
    }

    interface SeriesOptionsWma extends SeriesOptions{
        data: SeriesOptionsWmaData;
    }

    interface SeriesOptionsWmaData extends SeriesOptionsSmaData{
    }

    interface SeriesOptionsWordcloud extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsWordcloudData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsXrange extends SeriesOptions{
        data: any[];
    }

    interface SeriesOptionsXrangeData extends SeriesOptionsLineData{
    }

    interface SeriesOptionsZigzag extends SeriesOptions{
        data: SeriesOptionsZigzagData;
    }

    interface SeriesOptionsZigzagData extends SeriesOptionsSmaData{
    }

    /**
     * @namespace
     * @chart-private
     */
    namespace seriesTypes {
        /**
         * The AD series type.
         * @constructor seriesTypes.ad
         * @augments seriesTypes.sma
         */
        class ad extends sma {
        }

        /**
         * Area series type.
         * @constructor seriesTypes.area
         * @augments seriesTypes.line
         */
        class area extends line {
            /**
             * Draw the graph and the underlying area. This method calls the Series base
             * function and adds the area. The areaPath is calculated in the
             * getSegmentPath method called from Series.prototype.drawGraph.
             */
            drawGraph(): void;

            /**
             * Return an array of stacked points, where null and missing points are
             * replaced by dummy points in order for gaps to be drawn correctly
             * in stacks.
             */
            getStackPoints(): void;

        }

        /**
         * The arearange series type.
         * @constructor seriesTypes.arearange
         * @augments seriesTypes.area
         */
        class arearange extends area {
            /**
             * Extend the basic drawDataLabels method by running it for both lower
             * and higher values.
             */
            drawDataLabels(): void;

            /**
             * Extend the line series' getSegmentPath method by applying the segment
             * path to both lower and higher values of the range
             */
            getGraphPath(): void;

            /**
             * Translate a point's plotHigh from the internal angle and radius
             * measures to true plotHigh coordinates. This is an addition of the
             * toXY method found in Polar.js, because it runs too early for
             * arearanges to be considered (#3419).
             */
            highToXY(): void;

            /**
             * Translate data points from raw values x and y to plotX and plotY
             */
            translate(): void;

        }

        /**
         * The areaspline series type.
         * @constructor seriesTypes.areaspline
         * @augments seriesTypes.spline
         */
        class areaspline extends spline {
        }

        /**
         * The areasplinerange series type.
         * @constructor seriesTypes.areasplinerange
         * @augments seriesTypes.arearange
         */
        class areasplinerange extends arearange {
        }

        /**
         * The ATR series type.
         * @constructor seriesTypes.atr
         * @augments seriesTypes.sma
         */
        class atr extends sma {
        }

        /**
         * The Bar series class
         * @constructor seriesTypes.bar
         * @augments seriesTypes.column
         */
        class bar extends column {
        }

        /**
         * The bb series type.
         * @constructor seriesTypes.bb
         * @augments seriesTypes.sma
         */
        class bb extends sma {
        }

        /**
         * Bell curve class
         * @constructor seriesTypes.bellcurve
         * @augments seriesTypes.areaspline
         * @mixes derivedSeriesMixin
         */
        class bellcurve extends areaspline implements derivedSeriesMixin {
            /**
             * Adds events to the base series - it required for recalculating the data in
             * the series if the base series is updated / removed / etc.
             * @returns {undefined}
             */
            addBaseSeriesEvents(): undefined;

            /**
             * Adds events for the series
             * @returns {undefined}
             */
            addEvents(): undefined;

            /**
             * Destroys the series
             * @returns {undefined}
             */
            destroy(): undefined;

            /**
             * Initialise series
             * returns {undefined}
             */
            init(): void;

            /**
             * Sets base series for the series
             * returns {undefined}
             */
            setBaseSeries(): void;

            /**
             * Method to be implemented - inside the method the series has already access
             * to the base series via m `this.baseSeries` and the bases data is
             * initialised. It should return data in the format accepted by
             * `Series.setData()` method
             * @function
             * @returns {Array} - an array of data
             */
            setDerivedData(): any[];

        }

        /**
         * The boxplot series type.
         * @constructor seriesTypes.boxplot
         * @augments seriesTypes.column
         */
        class boxplot extends column {
            /**
             * Disable data labels for box plot
             */
            drawDataLabels: any;

            /**
             * Draw the data points
             */
            drawPoints(): void;

            /**
             * Get presentational attributes
             */
            pointAttribs(): void;

            /**
             * Translate data points from raw values x and y to plotX and plotY
             */
            translate(): void;

        }

        /**
         * The bubble series type.
         * @constructor seriesTypes.bubble
         * @augments seriesTypes.scatter
         */
        class bubble extends scatter {
            /**
             * Perform animation on the bubbles
             */
            animate(): void;

            /**
             * Get the radius for each point based on the minSize, maxSize and each
             * point's Z value. This must be done prior to Series.translate because
             * the axis needs to add padding in accordance with the point sizes.
             */
            getRadii(): void;

            /**
             * Extend the base translate method to handle bubble size
             */
            translate(): void;

        }

        /**
         * The bullet series type.
         * @constructor seriesTypes.bullet
         * @augments seriesTypes.column
         */
        class bullet extends column {
            /**
             * Draws the targets. For inverted chart, the `series.group` is rotated,
             * so the same coordinates apply. This method is based on
             * column series drawPoints function.
             */
            drawPoints(): void;

            /**
             * Includes target values to extend extremes from y values.
             */
            getExtremes(): void;

        }

        /**
         * The candlestick series type.
         * @constructor seriesTypes.candlestick
         * @augments seriesTypes.ohlc
         */
        class candlestick extends ohlc {
            /**
             * Draw the data points
             */
            drawPoints(): void;

            /**
             * Postprocess mapping between options and SVG attributes
             */
            pointAttribs(): void;

        }

        /**
         * The CCI series type.
         * @constructor seriesTypes.cci
         * @augments seriesTypes.sma
         */
        class cci extends sma {
        }

        /**
         * The cmf series type.
         * @constructor seriesTypes.cmf
         * @augments seriesTypes.sma
         */
        class cmf extends sma {
            /**
             * @static
             * @param {Number[]} xData x timestamp values
             * @param {Number[]} seriesYData yData of basic series
             * @param {Number[]} volumeSeriesYData yData of volume series
             * @param {Number} period indicator's param
             * @returns {Values} object containing computed money flow data
             */
            getMoneyFlow(xData: number[], seriesYData: number[], volumeSeriesYData: number[], period: number): Values;

            /**
             * Returns indicator's data
             * @returns {false | Values}
             *          Returns false if the indicator is not valid, otherwise
             *          returns Values object
             */
            getValues(): false | Values;

            /**
             * Checks if the series and volumeSeries are accessible, number of
             * points.x is longer than period, is series has OHLC data
             * @returns {Boolean}
             *          true if series is valid and can be computed, otherwise false
             */
            isValid(): boolean;

        }

        /**
         * The column series type.
         * @constructor seriesTypes.column
         * @augments    seriesTypes.line
         */
        class column extends line {
            /**
             * Override the basic data label alignment by adjusting for the position of
             * the column
             */
            alignDataLabel(): void;

            /**
             * Animate the column heights one by one from zero
             * @param {Boolean} init Whether to initialize the animation or run it
             */
            animate(init: boolean): void;

            /**
             * @function animateDrilldown
             * @memberOf seriesTypes.column
             * @instance
             */
            animateDrilldown(): void;

            /**
             * When drilling up, pull out the individual point graphics from the lower
             * series and animate them into the origin point in the upper series.
             * @function animateDrillupFrom
             * @memberOf seriesTypes.column
             * @instance
             */
            animateDrillupFrom(): void;

            /**
             * When drilling up, keep the upper series invisible until the lower series has
             * moved into
             * @function animateDrillupTo
             * @memberOf seriesTypes.column
             * @instance
             */
            animateDrillupTo(): void;

            /**
             * Make the columns crisp. The edges are rounded to the nearest full pixel.
             */
            crispCol(): void;

            /**
             * Columns have no graph
             */
            drawGraph(): void;

            /**
             * Use a solid rectangle like the area series types
             */
            drawLegendSymbol: any;

            /**
             * Draw the columns. For bars, the series.group is rotated, so the same
             * coordinates apply for columns and bars. This method is inherited by
             * scatter series.
             */
            drawPoints(): void;

            /**
             * Return the width and x offset of the columns adjusted for grouping,
             * groupPadding, pointPadding, pointWidth etc.
             */
            getColumnMetrics(): void;

            /**
             * Initialize the series. Extends the basic Series.init method by
             * marking other series of the same type as dirty.
             * @function #init
             * @memberOf seriesTypes.column
             */
            init(): void;

            /**
             * Get presentational attributes
             */
            pointAttribs(): void;

            /**
             * @function polarArc
             * @memberOf seriesTypes.column.prototype
             */
            polarArc(): void;

            /**
             * Remove this series from the chart
             */
            remove(): void;

            /**
             * Translate each point to the plot area coordinate system and find shape
             * positions
             */
            translate(): void;

        }

        /**
         * The columnrange series type.
         * @constructor seriesTypes.columnrange
         * @augments seriesTypes.arearange
         */
        class columnrange extends arearange {
            /**
             * Translate data points from raw values x and y to plotX and plotY
             */
            translate(): void;

        }

        /**
         * The EMA series type.
         * @constructor seriesTypes.ema
         * @augments seriesTypes.sma
         */
        class ema extends sma {
        }

        /**
         * The errorbar series type.
         * @constructor seriesTypes.errorbar
         * @augments seriesTypes.boxplot
         */
        class errorbar extends boxplot {
            /**
             * Get the width and X offset, either on top of the linked series column
             * or standalone
             */
            getColumnMetrics(): void;

        }

        /**
         * The Flags series.
         * @constructor seriesTypes.flags
         * @augments seriesTypes.column
         */
        class flags extends column {
            /**
             * Draw the markers
             */
            drawPoints(): void;

            /**
             * Extend the column trackers with listeners to expand and contract stacks
             */
            drawTracker(): void;

            /**
             * Inherit the initialization from base Series.
             */
            init: any;

            /**
             * Don't invert the flag marker group (#4960)
             */
            invertGroups: any;

            /**
             * Get presentational attributes
             */
            pointAttribs(): void;

        }

        /**
         * The funnel series type.
         * @constructor seriesTypes.funnel
         * @augments seriesTypes.pie
         */
        class funnel extends pie {
            /**
             * Extend the pie data label method
             */
            drawDataLabels(): void;

            /**
             * Funnel items don't have angles (#2289)
             */
            sortByAngle(): void;

            /**
             * Overrides the pie translate method
             */
            translate(): void;

        }

        /**
         * The gauge series type.
         * @constructor seriesTypes.gauge
         * @augments seriesTypes.line
         */
        class gauge extends line {
            /**
             * Animate the arrow up from startAngle
             */
            animate(): void;

            /**
             * Draw the points where each point is one needle
             */
            drawPoints(): void;

            /**
             * If the tracking module is loaded, add the point tracker
             */
            drawTracker: boolean;

            /**
             * Extend the basic setData method by running processData and generatePoints
             * immediately, in order to access the points from the legend.
             */
            setData(): void;

            /**
             * Calculate paths etc
             */
            translate(): void;

        }

        /**
         * The heatmap series type.
         * @constructor seriesTypes.heatmap
         * @augments seriesTypes.scatter
         * @mixes colorSeriesMixin
         */
        class heatmap extends scatter implements colorSeriesMixin {
            /**
             * Override the init method to add point ranges on both axes.
             */
            init(): void;

            /**
             * Get the color attibutes to apply on the graphic
             */
            colorAttribs(): void;

            /**
             * In choropleth maps, the color is a result of the value, so this needs
             * translation too
             */
            translateColors(): void;

        }

        /**
         * The histogram series type.
         * @constructor seriesTypes.histogram
         * @augments seriesTypes.column
         * @mixes derivedSeriesMixin
         */
        class histogram extends column implements derivedSeriesMixin {
            /**
             * Adds events to the base series - it required for recalculating the data in
             * the series if the base series is updated / removed / etc.
             * @returns {undefined}
             */
            addBaseSeriesEvents(): undefined;

            /**
             * Adds events for the series
             * @returns {undefined}
             */
            addEvents(): undefined;

            /**
             * Destroys the series
             * @returns {undefined}
             */
            destroy(): undefined;

            /**
             * Initialise series
             * returns {undefined}
             */
            init(): void;

            /**
             * Sets base series for the series
             * returns {undefined}
             */
            setBaseSeries(): void;

            /**
             * Method to be implemented - inside the method the series has already access
             * to the base series via m `this.baseSeries` and the bases data is
             * initialised. It should return data in the format accepted by
             * `Series.setData()` method
             * @function
             * @returns {Array} - an array of data
             */
            setDerivedData(): any[];

        }

        /**
         * The IKH series type.
         * @constructor seriesTypes.ikh
         * @augments seriesTypes.sma
         */
        class ikh extends sma {
        }

        /**
         * The item series type.
         * @constructor seriesTypes.item
         * @augments seriesTypes.column
         */
        class item extends column {
        }

        /**
         * @chart-private
         * @class seriesTypes.line
         * @extends Highcharts.Series
         */
        class line extends Series {
        }

        /**
         * The MACD series type.
         * @constructor seriesTypes.macd
         * @augments seriesTypes.sma
         */
        class macd extends sma {
        }

        /**
         * The map series type.
         * @chart-private
         * @constructor seriesTypes.map
         * @augments seriesTypes.scatter
         * @mixes colorSeriesMixin
         */
        class map extends scatter implements colorSeriesMixin {
            /**
             * The initial animation for the map series. By default, animation is
             * disabled. Animation of map shapes is not at all supported in VML
             * browsers.
             */
            animate(): void;

            /**
             * Animate in the new series from the clicked point in the old series.
             * Depends on the drilldown.js module
             */
            animateDrilldown(): void;

            /**
             * When drilling up, pull out the individual point graphics from the lower
             * series and animate them into the origin point in the upper series.
             */
            animateDrillupFrom(): void;

            /**
             * When drilling up, keep the upper series invisible until the lower series
             * has moved into place
             */
            animateDrillupTo(): void;

            /**
             * Allow a quick redraw by just translating the area group. Used for zooming
             * and panning in capable browsers.
             */
            doFullTranslate(): void;

            /**
             * We need the points' bounding boxes in order to draw the data labels, so
             * we skip it now and call it from drawPoints instead.
             */
            drawDataLabels: any;

            /**
             * No graph for the map series
             */
            drawGraph: any;

            /**
             * Draw the data labels. Special for maps is the time that the data labels
             * are drawn (after points), and the clipping of the dataLabelsGroup.
             */
            drawMapDataLabels(): void;

            /**
             * Use the drawPoints method of column, that is able to handle simple
             * shapeArgs. Extend it by assigning the tooltip position.
             */
            drawPoints(): void;

            /**
             * Get the bounding box of all paths in the map combined.
             */
            getBox(): void;

            /**
             * Get presentational attributes. In the maps series this runs in both
             * styled and non-styled mode, because colors hold data when a colorAxis
             * is used.
             */
            pointAttribs(): void;

            /**
             * Override render to throw in an async call in IE8. Otherwise it chokes on
             * the US counties demo.
             */
            render(): void;

            /**
             * Extend setData to join in mapData. If the allAreas option is true, all
             * areas from the mapData are used, and those that don't correspond to a
             * data value are given null values.
             */
            setData(): void;

            /**
             * Add the path option for data points. Find the max value for color
             * calculation.
             */
            translate(): void;

            /**
             * Translate the path so that it automatically fits into the plot area box
             * @param {Object} path
             */
            translatePath(path: any): void;

            /**
             * Get the color attibutes to apply on the graphic
             */
            colorAttribs(): void;

            /**
             * In choropleth maps, the color is a result of the value, so this needs
             * translation too
             */
            translateColors(): void;

        }

        /**
         * The mapbubble series type.
         * @constructor seriesTypes.mapbubble
         * @augments seriesTypes.bubble
         */
        class mapbubble extends bubble {
        }

        /**
         * The mapline series type.
         * @constructor seriesTypes.mapline
         * @augments seriesTypes.map
         */
        class mapline extends map {
            /**
             * Get presentational attributes
             */
            pointAttribs(): void;

        }

        /**
         * The mappoint series type.
         * @constructor seriesTypes.mappoint
         * @augments seriesTypes.scatter
         */
        class mappoint extends scatter {
        }

        /**
         * The MFI series type.
         * @constructor seriesTypes.mfi
         * @augments seriesTypes.sma
         */
        class mfi extends sma {
        }

        /**
         * The Momentum series type.
         * @constructor seriesTypes.momentum
         * @augments seriesTypes.sma
         */
        class momentum extends sma {
        }

        /**
         * The ohlc series type.
         * @constructor seriesTypes.ohlc
         * @augments seriesTypes.column
         */
        class ohlc extends column {
            /**
             * Draw the data points
             */
            drawPoints(): void;

            /**
             * Postprocess mapping between options and SVG attributes
             */
            pointAttribs(): void;

            /**
             * Translate data points from raw values x and y to plotX and plotY
             */
            translate(): void;

        }

        /**
         * The pareto series type.
         * @constructor seriesTypes.pareto
         * @augments seriesTypes.line
         * @mixes derivedSeriesMixin
         */
        class pareto extends line implements derivedSeriesMixin {
            /**
             * calculate sum and return percent points
             * @return {Array} Returns array of points [x,y]
             */
            setDerivedData(): any[];

            /**
             * calculate y sum and each percent point
             * @param  {Array} yValues y values
             * @param  {Array} xValues x values
             * @param  {Number} sum of all y values
             * @param  {Boolean} isSum declares if calculate sum of all points
             * @return {Array} Returns sum of points or array of points [x,y]
             */
            sumPointsPercents(yValues: any[], xValues: any[], sum: number, isSum: boolean): any[];

            /**
             * Adds events to the base series - it required for recalculating the data in
             * the series if the base series is updated / removed / etc.
             * @returns {undefined}
             */
            addBaseSeriesEvents(): undefined;

            /**
             * Adds events for the series
             * @returns {undefined}
             */
            addEvents(): undefined;

            /**
             * Destroys the series
             * @returns {undefined}
             */
            destroy(): undefined;

            /**
             * Initialise series
             * returns {undefined}
             */
            init(): void;

            /**
             * Sets base series for the series
             * returns {undefined}
             */
            setBaseSeries(): void;

            /**
             * Method to be implemented - inside the method the series has already access
             * to the base series via m `this.baseSeries` and the bases data is
             * initialised. It should return data in the format accepted by
             * `Series.setData()` method
             * @function
             * @returns {Array} - an array of data
             */
            setDerivedData(): any[];

        }

        /**
         * The pie series type.
         * @constructor seriesTypes.pie
         * @augments seriesTypes.line
         */
        class pie extends line {
            /**
             * Animate the pies in
             */
            animate(): void;

            /**
             * Extendable method for getting the path of the connector between the data
             * label and the pie slice.
             */
            connectorPath(): void;

            /**
             * Use a simple symbol from LegendSymbolMixin
             */
            drawLegendSymbol: any;

            /**
             * Draw the data points
             */
            drawPoints(): void;

            /**
             * Extend the generatePoints method by adding total and percentage properties to each point
             */
            generatePoints(): void;

            /**
             * Use the getCenter method from drawLegendSymbol
             */
            getCenter: any;

            /**
             * Pies don't have point marker symbols
             */
            getSymbol: any;

            /**
             * Perform the final placement of the data labels after we have verified
             * that they fall within the plot area.
             */
            placeDataLabels(): void;

            /**
             * Utility for sorting data labels
             */
            sortByAngle(): void;

            /**
             * Do translation for pie slices
             */
            translate(): void;

            /**
             * Recompute total chart sum and update percentages of points.
             */
            updateTotals(): void;

            /**
             * Verify whether the data labels are allowed to draw, or we should run more
             * translation and data label positioning to keep them inside the plot area.
             * Returns true when data labels are ready to draw.
             */
            verifyDataLabelOverflow(): void;

        }

        /**
         * The pivotpoints series type.
         * @constructor seriesTypes.pivotpoints
         * @augments seriesTypes.sma
         */
        class pivotpoints extends sma {
        }

        /**
         * The plotband series type.
         * @constructor seriesTypes.plotband
         * @augments seriesTypes.column
         */
        class plotband extends column {
        }

        /**
         * The polygon series type.
         * @constructor seriesTypes.polygon
         * @augments seriesTypes.scatter
         */
        class polygon extends scatter {
        }

        /**
         * The priceenvelopes series type.
         * @constructor seriesTypes.priceenvelopes
         * @augments seriesTypes.sma
         */
        class priceenvelopes extends sma {
        }

        /**
         * The Parabolic SAR series type.
         * @constructor seriesTypes.psar
         * @augments seriesTypes.sma
         */
        class psar extends sma {
        }

        /**
         * The Pyramid series type.
         * @constructor seriesTypes.pyramid
         * @augments seriesTypes.funnel
         */
        class pyramid extends funnel {
        }

        /**
         * The ROC series type.
         * @constructor seriesTypes.roc
         * @augments seriesTypes.sma
         */
        class roc extends sma {
        }

        /**
         * The rsi series type.
         * @constructor seriesTypes.rsi
         * @augments seriesTypes.sma
         */
        class rsi extends sma {
        }

        /**
         * The sankey series type.
         * @constructor seriesTypes.sankey
         * @augments seriesTypes.column
         */
        class sankey extends column {
            /**
             * Create a single node that holds information on incoming and outgoing
             * links.
             */
            createNode(): void;

            /**
             * Create a node column.
             */
            createNodeColumn(): void;

            /**
             * Create node columns by analyzing the nodes and the relations between
             * incoming and outgoing links.
             */
            createNodeColumns(): void;

            /**
             * Extend generatePoints by adding the nodes, which are Point objects
             * but pushed to the this.nodes array.
             */
            generatePoints(): void;

            /**
             * Return the presentational attributes.
             */
            pointAttribs(): void;

            /**
             * Extend the render function to also render this.nodes together with
             * the points.
             */
            render(): void;

            /**
             * Run pre-translation by generating the nodeColumns.
             */
            translate(): void;

        }

        /**
         * The scatter series type.
         * @constructor seriesTypes.scatter
         * @augments seriesTypes.line
         */
        class scatter extends line {
        }

        /**
         * The scatter3d series type.
         * @constructor seriesTypes.scatter3d
         * @augments seriesTypes.scatter
         */
        class scatter3d extends scatter {
        }

        /**
         * The SMA series type.
         * @constructor seriesTypes.sma
         * @augments seriesTypes.line
         */
        class sma extends line {
        }

        /**
         * The solidgauge series type.
         * @constructor seriesTypes.solidgauge
         * @augments seriesTypes.gauge
         */
        class solidgauge extends gauge {
            /**
             * Extend the pie slice animation by animating from start angle and up
             */
            animate(): void;

            /**
             * Draw the points where each point is one needle
             */
            drawPoints(): void;

            /**
             * Extend the translate function to extend the Y axis with the necessary
             * decoration (#5895).
             */
            translate(): void;

        }

        /**
         * Spline series type.
         * @constructor seriesTypes.spline
         * @extends     seriesTypes.line
         */
        class spline extends line {
            /**
             * Get the spline segment from a given point's previous neighbour to the
             * given point
             */
            getPointSpline(): void;

        }

        /**
         * The stochastic series type.
         * @constructor seriesTypes.stochastic
         * @augments seriesTypes.sma
         */
        class stochastic extends sma {
        }

        /**
         * The streamgraph series type.
         * @constructor seriesTypes.streamgraph
         * @augments seriesTypes.areaspline
         */
        class streamgraph extends areaspline {
            /**
             * Modifier function for stream stacks. It simply moves the point up or down
             * in order to center the full stack vertically.
             */
            streamStacker(): void;

        }

        /**
         * The sunburst series type.
         * @constructor seriesTypes.sunburst
         * @augments seriesTypes.treemap
         */
        class sunburst extends treemap {
            /**
             * Animate the slices in. Similar to the animation of polar charts.
             */
            animate(): void;

        }

        /**
         * The tilemap series type.
         * @constructor seriesTypes.tilemap
         * @augments seriesTypes.heatmap
         */
        class tilemap extends heatmap {
        }

        /**
         * The treemap series type.
         * @constructor seriesTypes.treemap
         * @augments seriesTypes.scatter
         */
        class treemap extends scatter {
            /**
             * Over the alignment method by setting z index
             */
            alignDataLabel(): void;

            /**
             * Recursive function which calculates the area for all children of a node.
             * @param {Object} node The node which is parent to the children.
             * @param {Object} area The rectangular area of the parent.
             */
            calculateChildrenAreas(node: any, area: any): void;

            /**
             * Extend drawDataLabels with logic to handle custom options related to the
             * treemap series:
             * - Points which is not a leaf node, has dataLabels disabled by default.
             * - Options set on series.levels is merged in.
             * - Width of the dataLabel is set to match the width of the point shape.
             */
            drawDataLabels(): void;

            /**
             * Extending ColumnSeries drawPoints
             */
            drawPoints(): void;

            /**
             * Finds the drill id for a parent node.
             * Returns false if point should not have a click event
             * @param {Object} point
             * @return {String|Boolean} Drill to id or false when point should not have a
             *         click event
             */
            drillToByGroup(point: any): string | boolean;

            /**
             * Finds the drill id for a leaf node.
             * Returns false if point should not have a click event
             * @param {Object} point
             * @return {String|Boolean} Drill to id or false when point should not have a
             *         click event
             */
            drillToByLeaf(point: any): string | boolean;

            /**
             * Creates an object map from parent id to childrens index.
             * @param {Array} data List of points set in options.
             * @param {string} data.parent Parent id of point.
             * @param {Array} ids List of all point ids.
             * @return {Object} Map from parent id to children index in data.
             */
            getListOfParents(data: {
                parent: string;
            }, ids: any[]): any;

            /**
             * Creates a tree structured object from the series points
             */
            getTree(): void;

            /**
             * Add drilling on the suitable points
             */
            onClickDrillToNode(): void;

            /**
             * Get presentational attributes
             */
            pointAttribs(): void;

            /**
             * Set the node's color recursively, from the parent down.
             */
            setColorRecursive(): void;

        }

        /**
         * The variablepie series type.
         * @constructor seriesTypes.variablepie
         * @augments seriesTypes.pie
         */
        class variablepie extends pie {
            /**
             * Extend tranlate by updating radius for each pie slice instead of
             * using one global radius.
             */
            translate(): void;

        }

        /**
         * The variwide series type.
         * @constructor seriesTypes.variwide
         * @augments seriesTypes.column
         */
        class variwide extends column {
            /**
             * Translate an x value inside a given category index into the distorted
             * axis translation.
             * @param  {Number} index The category index
             * @param  {Number} x The X pixel position in undistorted axis pixels
             * @return {Number}   Distorted X position
             */
            postTranslate(index: number, x: number): number;

            /**
             * Extend translation by distoring X position based on Z.
             */
            translate(): void;

        }

        /**
         * The Volume By Price (VBP) series type.
         * @constructor seriesTypes.vbp
         * @augments seriesTypes.vbp
         */
        class vbp extends vbp {
        }

        /**
         * The vector series type.
         * @constructor seriesTypes.vector
         * @augments seriesTypes.scatter
         */
        class vector extends scatter {
            /**
             * Fade in the arrows on initiating series.
             */
            animate(): void;

            /**
             * Create a single arrow. It is later rotated around the zero
             * centerpoint.
             */
            arrow(): void;

            /**
             * Get presentational attributes.
             */
            pointAttribs(): void;

        }

        /**
         * The Volume Weighted Average Price (VWAP) series type.
         * @constructor seriesTypes.vwap
         * @augments seriesTypes.sma
         */
        class vwap extends sma {
            /**
             * Main algorithm used to calculate Volume Weighted Average Price (VWAP)
             * values
             * @param {Boolean} isOHLC says if data has OHLC format
             * @param {Array} xValues array of timestamps
             * @param {Array} yValues
             *        array of yValues, can be an array of a four arrays (OHLC) or
             *        array of values (line)
             * @param {Array} volumeSeries volume series
             * @param {Number} period number of points to be calculated
             * @returns {Object} Object contains computed VWAP
             */
            calculateVWAPValues(isOHLC: boolean, xValues: any[], yValues: any[], volumeSeries: any[], period: number): any;

            /**
             * Returns the final values of the indicator ready to be presented on a
             * chart
             * @returns {Object} Object containing computed VWAP
             */
            getValues(): any;

        }

        /**
         * The waterfall series type.
         * @constructor seriesTypes.waterfall
         * @augments seriesTypes.column
         */
        class waterfall extends column {
            /**
             * The graph is initally drawn with an empty definition, then updated with
             * crisp rendering.
             */
            drawGraph(): void;

            /**
             * After generating points, set y-values for all sums.
             */
            generatePoints(): void;

            /**
             * Draw columns' connector lines
             */
            getCrispPath(): void;

            /**
             * Extremes for a non-stacked series are recorded in processData.
             * In case of stacking, use Series.stackedYData to calculate extremes.
             */
            getExtremes(): void;

            /**
             * Return an empty path initially, because we need to know the
             * stroke-width in order to set the final path.
             */
            getGraphPath(): void;

            /**
             * Postprocess mapping between options and SVG attributes
             */
            pointAttribs(): void;

            /**
             * Call default processData then override yData to reflect
             * waterfall's extremes on yAxis
             */
            processData(): void;

            /**
             * Waterfall has stacking along the x-values too.
             */
            setStackedPoints(): void;

            /**
             * Property needed to prevent lines between the columns from disappearing
             * when negativeColor is used.
             */
            showLine: boolean;

            /**
             * Return y value or string if point is sum
             */
            toYData(): void;

            /**
             * Translate data points from raw values
             */
            translate(): void;

        }

        /**
         * The windbarb series type.
         * @constructor seriesTypes.windbarb
         * @augments seriesTypes.column
         */
        class windbarb extends column {
            /**
             * Fade in the arrows on initiating series.
             */
            animate(): void;

            /**
             * Don't invert the marker group (#4960)
             */
            invertGroups: any;

            /**
             * Get presentational attributes.
             */
            pointAttribs(): void;

            /**
             * Create a single wind arrow. It is later rotated around the zero
             * centerpoint.
             */
            windArrow(): void;

        }

        /**
         * The SMA series type.
         * @constructor seriesTypes.wma
         * @augments seriesTypes.sma
         */
        class wma extends sma {
        }

        /**
         * The wordcloud series type.
         * @constructor seriesTypes.wordcloud
         * @augments seriesTypes.column
         */
        class wordcloud extends column {
            /**
             * deriveFontSize - Calculates the fontSize of a word based on its weight.
             * @param {number} [relativeWeight] The weight of the word, on a scale 0-1.
             * Defaults to 0.
             * @param {number} [maxFontSize] The maximum font size of a word. Defaults
             * to 1.
             * @param {number} [minFontSize] The minimum font size of a word. Defaults
             * to 1.
             * @returns {number} Returns the resulting fontSize of a word. If
             * minFontSize is larger then maxFontSize the result will equal minFontSize.
             */
            deriveFontSize(relativeWeight?: number, maxFontSize?: number, minFontSize?: number): number;

            /**
             * Strategies used for deciding rotation and initial position of a word.
             * To implement a custom strategy, have a look at the function
             *     randomPlacement for example.
             */
            placementStrategy: object;

            /**
             * Spirals used for placing a word after the inital position experienced a
             *     collision with either another word or the borders.
             * To implement a custom spiral, look at the function archimedeanSpiral for
             *    example.
             */
            spirals: object;

        }

        /**
         * The xrange series type.
         * @constructor seriesTypes.xrange
         * @augments seriesTypes.column
         */
        class xrange extends column {
            /**
             * Override cropData to show a point where x or x2 is outside visible range,
             * but one of them is inside.
             */
            cropData(): void;

            /**
             * Draws a single point in the series. Needed for partial fill.
             * This override turns point.graphic into a group containing the original
             * graphic and an overlay displaying the partial fill.
             * @param   {Object} point an instance of Point in the series
             * @param   {string} verb 'animate' (animates changes) or 'attr' (sets
             *                   options)
             * @returns {void}
             */
            drawPoint(point: any, verb: string): void;

            /**
             * Returns "animate", or "attr" if the number of points is above the
             * animation limit.
             * @returns {String}
             */
            getAnimationVerb(): string;

            /**
             * Borrow the column series metrics, but with swapped axes. This gives free
             * access to features like groupPadding, grouping, pointWidth etc.
             */
            getColumnMetrics(): void;

        }

        /**
         * The Zig Zag series type.
         * @constructor seriesTypes.zigzag
         * @augments seriesTypes.sma
         */
        class zigzag extends sma {
        }

    }

    /**
     * Calculate area of a 2D polygon using Shoelace algorithm
     * http://en.wikipedia.org/wiki/Shoelace_formula
     */
    function shapeArea(): void;

    /**
     * Calculate area of a 3D polygon after perspective projection
     */
    function shapeArea3d(): void;

    /**
     * Utility for reading SVG paths directly.
     */
    function splitPath(): void;

    /**
     * The class for stacks. Each stack, on a specific X value and either negative
     * or positive, has its own stack item.
     * @class
     */
    class StackItem {
        /**
         * Renders the stack total label and adds it to the stack label group.
         */
        render(): void;

        /**
         * Sets the offset that the stack has from the x value and repositions the
         * label.
         */
        setOffset(): void;

    }

    interface SubtitleOptions {
        align: string;
        floating: boolean;
        style: CSSObject;
        text: string;
        useHTML: boolean;
        verticalAlign: string;
        widthAdjust: number;
        x: number;
        y: number;
    }

    /**
     * @type {Function}
     */
    const svg: ()=>any;

    /**
     * @type {string}
     */
    const SVG_NS: string;

    /**
     * @typedef {Window.SVGElement} SVGDOMElement - An SVG DOM element.
     * @memberof H
     */
    type SVGDOMElement = Window.SVGElement;

    /**
     * The SVGElement prototype is a JavaScript wrapper for SVG elements used in the
     * rendering layer of Highcharts. Combined with the {@link
     * Highcharts.SVGRenderer} object, these prototypes allow freeform annotation
     * in the charts or even in HTML pages without instanciating a chart. The
     * SVGElement can also wrap HTML labels, when `text` or `label` elements are
     * created with the `useHTML` parameter.
     * The SVGElement instances are created through factory functions on the
     * {@link Highcharts.SVGRenderer} object, like
     * [rect]{@link Highcharts.SVGRenderer#rect}, [path]{@link
     * Highcharts.SVGRenderer#path}, [text]{@link Highcharts.SVGRenderer#text},
     * [label]{@link Highcharts.SVGRenderer#label}, [g]{@link
     * Highcharts.SVGRenderer#g} and more.
     * @class Highcharts.SVGElement
     */
    class SVGElement {
        /**
         * Add the element to the DOM. All elements must be added this way.
         * @param {SVGElement|SVGDOMElement} [parent] The parent item to add it to.
         *   If undefined, the element is added to the {@link
         *   Highcharts.SVGRenderer.box}.
         * @returns {SVGElement} Returns the SVGElement for chaining.
         * @sample highcharts/members/renderer-g - Elements added to a group
         */
        add(parent?: SVGElement | SVGDOMElement): SVGElement;

        /**
         * Add a class name to an element.
         * @param {string} className - The new class name to add.
         * @param {boolean} [replace=false] - When true, the existing class name(s)
         *    will be overwritten with the new one. When false, the new one is
         *    added.
         * @returns {SVGElement} Return the SVG element for chainability.
         */
        addClass(className: string, replace?: boolean): SVGElement;

        /**
         * Align the element relative to the chart or another box.
         * @param {Object} [alignOptions] The alignment options. The function can be
         *   called without this parameter in order to re-align an element after the
         *   box has been updated.
         * @param {string} [alignOptions.align=left] Horizontal alignment. Can be
         *   one of `left`, `center` and `right`.
         * @param {string} [alignOptions.verticalAlign=top] Vertical alignment. Can
         *   be one of `top`, `middle` and `bottom`.
         * @param {number} [alignOptions.x=0] Horizontal pixel offset from
         *   alignment.
         * @param {number} [alignOptions.y=0] Vertical pixel offset from alignment.
         * @param {Boolean} [alignByTranslate=false] Use the `transform` attribute
         *   with translateX and translateY custom attributes to align this elements
         *   rather than `x` and `y` attributes.
         * @param {String|Object} [box] The box to align to, needs a width and height.
         *   When the box is a string, it refers to an object in the Renderer. For
         *   example, when box is `spacingBox`, it refers to `Renderer.spacingBox`
         *   which holds `width`, `height`, `x` and `y` properties.
         * @returns {SVGElement} Returns the SVGElement for chaining.
         */
        align(alignOptions?: {
            align?: string;
            verticalAlign?: string;
            x?: number;
            y?: number;
        }, alignByTranslate?: boolean, box?: string | any): SVGElement;

        /**
         * Animate to given attributes or CSS properties.
         * @param {SVGAttributes} params SVG attributes or CSS to animate.
         * @param {AnimationOptions} [options] Animation options.
         * @param {Function} [complete] Function to perform at the end of animation.
         * @sample highcharts/members/element-on/
         *         Setting some attributes by animation
         * @returns {SVGElement} Returns the SVGElement for chaining.
         */
        animate(params: SVGAttributes, options?: AnimationOptions, complete?: ()=>any): SVGElement;

        /**
         * Apply native and custom attributes to the SVG elements.
         * In order to set the rotation center for rotation, set x and y to 0 and
         * use `translateX` and `translateY` attributes to position the element
         * instead.
         * Attributes frequently used in Highcharts are `fill`, `stroke`,
         * `stroke-width`.
         * @param {SVGAttributes|String} hash - The native and custom SVG
         *    attributes.
         * @param {string} [val] - If the type of the first argument is `string`,
         *    the second can be a value, which will serve as a single attribute
         *    setter. If the first argument is a string and the second is undefined,
         *    the function serves as a getter and the current value of the property
         *    is returned.
         * @param {Function} [complete] - A callback function to execute after
         *    setting the attributes. This makes the function compliant and
         *    interchangeable with the {@link SVGElement#animate} function.
         * @param {boolean} [continueAnimation=true] Used internally when `.attr` is
         *    called as part of an animation step. Otherwise, calling `.attr` for an
         *    attribute will stop animation for that attribute.
         * @returns {SVGElement|string|number} If used as a setter, it returns the
         *    current {@link SVGElement} so the calls can be chained. If used as a
         *    getter, the current value of the attribute is returned.
         * @sample highcharts/members/renderer-rect/
         *         Setting some attributes
         * @example
         * // Set multiple attributes
         * element.attr({
         *     stroke: 'red',
         *     fill: 'blue',
         *     x: 10,
         *     y: 10
         * });
         * // Set a single attribute
         * element.attr('stroke', 'red');
         * // Get an attribute
         * element.attr('stroke'); // => 'red'
         */
        attr(hash: SVGAttributes | string, val?: string, complete?: ()=>any, continueAnimation?: boolean): SVGElement | string | number;

        /**
         * Apply a clipping rectangle to this element.
         * @param {ClipRect} [clipRect] - The clipping rectangle. If skipped, the
         *    current clip is removed.
         * @returns {SVGElement} Returns the SVG element to allow chaining.
         */
        clip(clipRect?: ClipRect): SVGElement;

        /**
         * Calculate the coordinates needed for drawing a rectangle crisply and
         * return the calculated attributes.
         * @param {Object} rect - A rectangle.
         * @param {number} rect.x - The x position.
         * @param {number} rect.y - The y position.
         * @param {number} rect.width - The width.
         * @param {number} rect.height - The height.
         * @param {number} [strokeWidth] - The stroke width to consider when
         *    computing crisp positioning. It can also be set directly on the rect
         *    parameter.
         * @returns {{x: Number, y: Number, width: Number, height: Number}} The
         *    modified rectangle arguments.
         */
        crisp(rect: {
            x: number;
            y: number;
            width: number;
            height: number;
        }, strokeWidth?: number): any;

        /**
         * Set styles for the element. In addition to CSS styles supported by
         * native SVG and HTML elements, there are also some custom made for
         * Highcharts, like `width`, `ellipsis` and `textOverflow` for SVG text
         * elements.
         * @param {CSSObject} styles The new CSS styles.
         * @returns {SVGElement} Return the SVG element for chaining.
         * @sample highcharts/members/renderer-text-on-chart/
         *         Styled text
         */
        css(styles: CSSObject): SVGElement;

        /**
         * Destroy the element and element wrapper and clear up the DOM and event
         * hooks.
         */
        destroy(): void;

        /**
         * The primary DOM node. Each `SVGElement` instance wraps a main DOM
         * node, but may also represent more nodes.
         * @name  element
         * @memberOf SVGElement
         * @type {SVGDOMElement|HTMLDOMElement}
         * @instance
         */
        element: SVGDOMElement | HTMLDOMElement;

        /**
         * Fade out an element by animating its opacity down to 0, and hide it on
         * complete. Used internally for the tooltip.
         * @param {number} [duration=150] The fade duration in milliseconds.
         */
        fadeOut(duration?: number): void;

        /**
         * Get the bounding box (width, height, x and y) for the element. Generally
         * used to get rendered text size. Since this is called a lot in charts,
         * the results are cached based on text properties, in order to save DOM
         * traffic. The returned bounding box includes the rotation, so for example
         * a single text line of rotation 90 will report a greater height, and a
         * width corresponding to the line-height.
         * @param {boolean} [reload] Skip the cache and get the updated DOM bouding
         *   box.
         * @param {number} [rot] Override the element's rotation. This is internally
         *   used on axis labels with a value of 0 to find out what the bounding box
         *   would be have been if it were not rotated.
         * @returns {Object} The bounding box with `x`, `y`, `width` and `height`
         * properties.
         * @sample highcharts/members/renderer-on-chart/
         *         Draw a rectangle based on a text's bounding box
         */
        getBBox(reload?: boolean, rot?: number): any;

        /**
         * Get the correction in X and Y positioning as the element is rotated.
         */
        getSpanCorrection(): void;

        /**
         * Get the computed style. Only in styled mode.
         * @param {string} prop - The property name to check for.
         * @returns {string} The current computed value.
         * @example
         * chart.series[0].points[0].graphic.getStyle('stroke-width'); // => '1px'
         */
        getStyle(prop: string): string;

        /**
         * Check if an element has the given class name.
         * @param  {string} className
         *         The class name to check for.
         * @return {Boolean}
         *         Whether the class name is found.
         */
        hasClass(className: string): boolean;

        /**
         * Hide the element, equivalent to setting the `visibility` attribute to
         * `hidden`.
         * @returns {SVGElement} Returns the SVGElement for chaining.
         */
        hide(): SVGElement;

        /**
         * Apply CSS to HTML elements. This is used in text within SVG rendering and
         * by the VML renderer
         * @param {CSSObject} styles
         * @return {SVGElement}
         */
        htmlCss(styles: CSSObject): SVGElement;

        /**
         * VML and useHTML method for calculating the bounding box based on offsets
         * @param {Boolean} refresh Whether to force a fresh value from the DOM or
         * to use the cached value.
         * @return {Object} A hash containing values for x, y, width and height
         */
        htmlGetBBox(refresh: boolean): any;

        /**
         * VML override private method to update elements based on internal
         * properties based on SVG transform
         */
        htmlUpdateTransform(): void;

        /**
         * Initialize the SVG element. This function only exists to make the
         * initiation process overridable. It should not be called directly.
         * @param  {SVGRenderer} renderer
         *         The SVGRenderer instance to initialize to.
         * @param  {String} nodeName
         *         The SVG node name.
         */
        init(renderer: SVGRenderer, nodeName: string): void;

        /**
         * Invert a group, rotate and flip. This is used internally on inverted
         * charts, where the points and graphs are drawn as if not inverted, then
         * the series group elements are inverted.
         * @param  {boolean} inverted
         *         Whether to invert or not. An inverted shape can be un-inverted by
         *         setting it to false.
         * @return {SVGElement}
         *         Return the SVGElement for chaining.
         */
        invert(inverted: boolean): SVGElement;

        /**
         * Add an event listener. This is a simple setter that replaces all other
         * events of the same type, opposed to the {@link Highcharts#addEvent}
         * function.
         * @param {string} eventType - The event type. If the type is `click`,
         *    Highcharts will internally translate it to a `touchstart` event on
         *    touch devices, to prevent the browser from waiting for a click event
         *    from firing.
         * @param {Function} handler - The handler callback.
         * @returns {SVGElement} The SVGElement for chaining.
         * @sample highcharts/members/element-on/
         *         A clickable rectangle
         */
        on(eventType: string, handler: ()=>any): SVGElement;

        /**
         * Remove a class name from the element.
         * @param  {String|RegExp} className The class name to remove.
         * @return {SVGElement} Returns the SVG element for chainability.
         */
        removeClass(className: string | RegExp): SVGElement;

        /**
         * The renderer that the SVGElement belongs to.
         * @name renderer
         * @memberOf SVGElement
         * @type {SVGRenderer}
         * @instance
         */
        renderer: SVGRenderer;

        /**
         * Set the coordinates needed to draw a consistent radial gradient across
         * a shape regardless of positioning inside the chart. Used on pie slices
         * to make all the slices have the same radial reference point.
         * @param {Array} coordinates The center reference. The format is
         *    `[centerX, centerY, diameter]` in pixels.
         * @returns {SVGElement} Returns the SVGElement for chaining.
         */
        setRadialReference(coordinates: any[]): SVGElement;

        /**
         * Set the rotation of an individual HTML span
         */
        setSpanRotation(): void;

        /**
         * Add a shadow to the element. Must be called after the element is added to
         * the DOM. In styled mode, this method is not used, instead use `defs` and
         * filters.
         * @param {boolean|ShadowOptions} shadowOptions The shadow options. If
         *    `true`, the default options are applied. If `false`, the current
         *    shadow will be removed.
         * @param {SVGElement} [group] The SVG group element where the shadows will
         *    be applied. The default is to add it to the same parent as the current
         *    element. Internally, this is ised for pie slices, where all the
         *    shadows are added to an element behind all the slices.
         * @param {boolean} [cutOff] Used internally for column shadows.
         * @returns {SVGElement} Returns the SVGElement for chaining.
         * @example
         * renderer.rect(10, 100, 100, 100)
         *     .attr({ fill: 'red' })
         *     .shadow(true);
         */
        shadow(shadowOptions: boolean | ShadowOptions, group?: SVGElement, cutOff?: boolean): SVGElement;

        /**
         * Show the element after it has been hidden.
         * @param {boolean} [inherit=false] Set the visibility attribute to
         * `inherit` rather than `visible`. The difference is that an element with
         * `visibility="visible"` will be visible even if the parent is hidden.
         * @returns {SVGElement} Returns the SVGElement for chaining.
         */
        show(inherit?: boolean): SVGElement;

        /**
         * Get the computed stroke width in pixel values. This is used extensively
         * when drawing shapes to ensure the shapes are rendered crisp and
         * positioned correctly relative to each other. Using
         * `shape-rendering: crispEdges` leaves us less control over positioning,
         * for example when we want to stack columns next to each other, or position
         * things pixel-perfectly within the plot box.
         * The common pattern when placing a shape is:
         * * Create the SVGElement and add it to the DOM. In styled mode, it will
         *   now receive a stroke width from the style sheet. In classic mode we
         *   will add the `stroke-width` attribute.
         * * Read the computed `elem.strokeWidth()`.
         * * Place it based on the stroke width.
         * @returns {Number} The stroke width in pixels. Even if the given stroke
         * widtch (in CSS or by attributes) is based on `em` or other units, the
         * pixel size is returned.
         */
        strokeWidth(): number;

        /**
         * Bring the element to the front. Alternatively, a new zIndex can be set.
         * @returns {SVGElement} Returns the SVGElement for chaining.
         * @sample highcharts/members/element-tofront/
         *         Click an element to bring it to front
         */
        toFront(): SVGElement;

        /**
         * Move an object and its children by x and y values.
         * @param {number} x - The x value.
         * @param {number} y - The y value.
         */
        translate(x: number, y: number): void;

    }

    /**
     * Allows direct access to the Highcharts rendering layer in order to draw
     * primitive shapes like circles, rectangles, paths or text directly on a chart,
     * or independent from any chart. The SVGRenderer represents a wrapper object
     * for SVG in modern browsers. Through the VMLRenderer, part of the `oldie.js`
     * module, it also brings vector graphics to IE <= 8.
     * An existing chart's renderer can be accessed through {@link Chart.renderer}.
     * The renderer can also be used completely decoupled from a chart.
     * @param {HTMLDOMElement} container - Where to put the SVG in the web page.
     * @param {number} width - The width of the SVG.
     * @param {number} height - The height of the SVG.
     * @param {boolean} [forExport=false] - Whether the rendered content is intended
     *   for export.
     * @param {boolean} [allowHTML=true] - Whether the renderer is allowed to
     *   include HTML text, which will be projected on top of the SVG.
     * @example
     * // Use directly without a chart object.
     * var renderer = new Highcharts.Renderer(parentNode, 600, 400);
     * @sample highcharts/members/renderer-on-chart
     *         Annotating a chart programmatically.
     * @sample highcharts/members/renderer-basic
     *         Independent SVG drawing.
     * @class Highcharts.SVGRenderer
     */
    class SVGRenderer {
        constructor(container: HTMLDOMElement, width: number, height: number, forExport?: boolean, allowHTML?: boolean);

        /**
         * Draw and return an arc.
         * @param {number} [x=0] Center X position.
         * @param {number} [y=0] Center Y position.
         * @param {number} [r=0] The outer radius of the arc.
         * @param {number} [innerR=0] Inner radius like used in donut charts.
         * @param {number} [start=0] The starting angle of the arc in radians, where
         *    0 is to the right and `-Math.PI/2` is up.
         * @param {number} [end=0] The ending angle of the arc in radians, where 0
         *    is to the right and `-Math.PI/2` is up.
         * @returns {SVGElement} The generated wrapper element.
         * @sample highcharts/members/renderer-arc/
         *         Drawing an arc
         */
        arc(x?: number, y?: number, r?: number, innerR?: number, start?: number, end?: number): SVGElement;

        /**
         * Generate the paths required to draw a 3D arc
         */
        arc3dPath(): void;

        /**
         * The root `svg` node of the renderer.
         * @name box
         * @memberOf SVGRenderer
         * @type {SVGDOMElement}
         * @instance
         */
        box: SVGDOMElement;

        /**
         * The wrapper for the root `svg` node of the renderer.
         * @name boxWrapper
         * @memberOf SVGRenderer
         * @type {SVGElement}
         * @instance
         */
        boxWrapper: SVGElement;

        /**
         * Create a button with preset states.
         * @param {string} text - The text or HTML to draw.
         * @param {number} x - The x position of the button's left side.
         * @param {number} y - The y position of the button's top side.
         * @param {Function} callback - The function to execute on button click or
         *    touch.
         * @param {SVGAttributes} [normalState] - SVG attributes for the normal
         *    state.
         * @param {SVGAttributes} [hoverState] - SVG attributes for the hover state.
         * @param {SVGAttributes} [pressedState] - SVG attributes for the pressed
         *    state.
         * @param {SVGAttributes} [disabledState] - SVG attributes for the disabled
         *    state.
         * @param {Symbol} [shape=rect] - The shape type.
         * @returns {SVGRenderer} The button element.
         */
        button(text: string, x: number, y: number, callback: ()=>any, normalState?: SVGAttributes, hoverState?: SVGAttributes, pressedState?: SVGAttributes, disabledState?: SVGAttributes, shape?: Symbol): SVGRenderer;

        /**
         * Draw a circle, wraps the SVG `circle` element.
         * @param {SVGAttributes} [attribs] The initial attributes.
         * @returns {SVGElement} The generated wrapper element.
         */
        circle(attribs?: SVGAttributes): SVGElement;

        /**
         * Define a clipping rectangle. The clipping rectangle is later applied
         * to {@link SVGElement} objects through the {@link SVGElement#clip}
         * function.
         * @param {String} id
         * @param {number} x
         * @param {number} y
         * @param {number} width
         * @param {number} height
         * @returns {ClipRect} A clipping rectangle.
         * @example
         * var circle = renderer.circle(100, 100, 100)
         *     .attr({ fill: 'red' })
         *     .add();
         * var clipRect = renderer.clipRect(100, 100, 100, 100);
         * // Leave only the lower right quarter visible
         * circle.clip(clipRect);
         */
        clipRect(id: string, x: number, y: number, width: number, height: number): ClipRect;

        /**
         * Create a wrapper for an SVG element. Serves as a factory for
         * {@link SVGElement}, but this function is itself mostly called from
         * primitive factories like {@link SVGRenderer#path}, {@link
         * SVGRenderer#rect} or {@link SVGRenderer#text}.
         * @param {string} nodeName - The node name, for example `rect`, `g` etc.
         * @returns {SVGElement} The generated SVGElement.
         */
        createElement(nodeName: string): SVGElement;

        /**
         * Make a straight line crisper by not spilling out to neighbour pixels.
         * @param {Array} points - The original points on the format
         *                       `['M', 0, 0, 'L', 100, 0]`.
         * @param {number} width - The width of the line.
         * @returns {Array} The original points array, but modified to render
         * crisply.
         */
        crispLine(points: any[], width: number): any[];

        /**
         *    Generates a cuboid
         */
        cuboidPath(): void;

        /**
         * General method for adding a definition to the SVG `defs` tag. Can be used
         *   for gradients, fills, filters etc. Styled mode only. A hook for adding
         *   general definitions to the SVG's defs tag. Definitions can be
         *   referenced from the CSS by its `id`. Read more in
         *   [gradients, shadows and patterns]{@link http://www.highcharts.com/docs/
         *   chart-design-and-style/gradients-shadows-and-patterns}.
         *   Styled mode only.
         * @param {Object} def - A serialized form of an SVG definition, including
         *   children
         * @return {SVGElement} The inserted node.
         */
        definition(def: any): SVGElement;

        /**
         * A pointer to the `defs` node of the root SVG.
         * @type {SVGElement}
         * @name defs
         * @memberOf SVGRenderer
         * @instance
         */
        defs: SVGElement;

        /**
         * Destroys the renderer and its allocated members.
         */
        destroy(): void;

        /**
         * Dummy function for plugins, called every time the renderer is updated.
         * Prior to Highcharts 5, this was used for the canvg renderer.
         * @function
         */
        draw(): void;

        /**
         * A pointer to the renderer's associated Element class. The VMLRenderer
         * will have a pointer to VMLElement here.
         * @type {SVGElement}
         */
        Element: SVGElement;

        /**
         * A collection of characters mapped to HTML entities. When `useHTML` on an
         * element is true, these entities will be rendered correctly by HTML. In
         * the SVG pseudo-HTML, they need to be unescaped back to simple characters,
         * so for example `&lt;` will render as `<`.
         * @example
         * // Add support for unescaping quotes
         * Highcharts.SVGRenderer.prototype.escapes['"'] = '&quot;';
         * @type {Object}
         */
        escapes: any;

        /**
         * A 3-D Face is defined by it's 3D vertexes, and is only
         * visible if it's vertexes are counter-clockwise (Back-face culling).
         * It is used as a polyhedron Element
         */
        face3d(): void;

        /**
         * Utility to return the baseline offset and total line height from the font
         * size.
         * @param {?string} fontSize The current font size to inspect. If not given,
         *   the font size will be found from the DOM element.
         * @param {SVGElement|SVGDOMElement} [elem] The element to inspect for a
         *   current font size.
         * @returns {Object} An object containing `h`: the line height, `b`: the
         * baseline relative to the top of the box, and `f`: the font size.
         */
        fontMetrics(fontSize: string, elem?: SVGElement | SVGDOMElement): any;

        /**
         * Create and return an svg group element. Child
         * {@link Highcharts.SVGElement} objects are added to the group by using the
         * group as the first parameter
         * in {@link Highcharts.SVGElement#add|add()}.
         * @param {string} [name] The group will be given a class name of
         * `highcharts-{name}`. This can be used for styling and scripting.
         * @returns {SVGElement} The generated wrapper element.
         * @sample highcharts/members/renderer-g/
         *         Show and hide grouped objects
         */
        g(name?: string): SVGElement;

        /**
         * Returns white for dark colors and black for bright colors.
         * @param {ColorString} rgba - The color to get the contrast for.
         * @returns {string} The contrast color, either `#000000` or `#FFFFFF`.
         */
        getContrast(rgba: ColorString): string;

        /**
         * Create HTML text node. This is used by the VML renderer as well as the
         * SVG renderer through the useHTML option.
         * @param {String} str
         * @param {Number} x
         * @param {Number} y
         */
        html(str: string, x: number, y: number): void;

        /**
         * Display an image.
         * @param {string} src The image source.
         * @param {number} [x] The X position.
         * @param {number} [y] The Y position.
         * @param {number} [width] The image width. If omitted, it defaults to the
         *    image file width.
         * @param {number} [height] The image height. If omitted it defaults to the
         *    image file height.
         * @param {function} [onload] Event handler for image load.
         * @returns {SVGElement} The generated wrapper element.
         * @sample highcharts/members/renderer-image-on-chart/
         *         Add an image in a chart
         * @sample highcharts/members/renderer-image/
         *         Add an image independent of a chart
         */
        image(src: string, x?: number, y?: number, width?: number, height?: number, onload?: ()=>any): SVGElement;

        /**
         * Initialize the SVGRenderer. Overridable initiator function that takes
         * the same parameters as the constructor.
         * @param {HTMLElement} container
         * @param {number} width
         * @param {number} height
         * @param {CSSObject} style
         * @param {boolean} forExport
         * @param {boolean} allowHTML
         */
        init(container: HTMLElement, width: number, height: number, style: CSSObject, forExport: boolean, allowHTML: boolean): void;

        /**
         * Detect whether the renderer is hidden. This happens when one of the
         * parent elements has `display: none`. Used internally to detect when we
         * needto render preliminarily in another div to get the text bounding boxes
         * right.
         * @returns {boolean} True if it is hidden.
         */
        isHidden(): boolean;

        /**
         * Draw a label, which is an extended text element with support for border
         * and background. Highcharts creates a `g` element with a text and a `path`
         * or `rect` inside, to make it behave somewhat like a HTML div. Border and
         * background are set through `stroke`, `stroke-width` and `fill` attributes
         * using the {@link Highcharts.SVGElement#attr|attr} method. To update the
         * text after render, run `label.attr({ text: 'New text' })`.
         * @param  {string} str
         *         The initial text string or (subset) HTML to render.
         * @param  {number} x
         *         The x position of the label's left side.
         * @param  {number} y
         *         The y position of the label's top side or baseline, depending on
         *         the `baseline` parameter.
         * @param  {String} shape
         *         The shape of the label's border/background, if any. Defaults to
         *         `rect`. Other possible values are `callout` or other shapes
         *         defined in {@link Highcharts.SVGRenderer#symbols}.
         * @param  {number} anchorX
         *         In case the `shape` has a pointer, like a flag, this is the
         *         coordinates it should be pinned to.
         * @param  {number} anchorY
         *         In case the `shape` has a pointer, like a flag, this is the
         *         coordinates it should be pinned to.
         * @param  {Boolean} baseline
         *         Whether to position the label relative to the text baseline,
         *         like {@link Highcharts.SVGRenderer#text|renderer.text}, or to the
         *         upper border of the rectangle.
         * @param  {String} className
         *         Class name for the group.
         * @return {SVGElement}
         *         The generated label.
         * @sample highcharts/members/renderer-label-on-chart/
         *         A label on the chart
         */
        label(str: string, x: number, y: number, shape: string, anchorX: number, anchorY: number, baseline: boolean, className: string): SVGElement;

        /**
         * This method is used with exporting in old IE, when emulating SVG (see #2314)
         */
        measureSpanWidth(): void;

        /**
         * Draw a path, wraps the SVG `path` element.
         * @param {Array} [path] An SVG path definition in array form.
         * @example
         * var path = renderer.path(['M', 10, 10, 'L', 30, 30, 'z'])
         *     .attr({ stroke: '#ff00ff' })
         *     .add();
         * @returns {SVGElement} The generated wrapper element.
         * @sample highcharts/members/renderer-path-on-chart/
         *         Draw a path in a chart
         * @sample highcharts/members/renderer-path/
         *         Draw a path independent from a chart
         */
        path(path?: any[]): SVGElement;

        /**
         * A Polyhedron is a handy way of defining a group of 3-D faces. It's only
         * attribute is `faces`, an array of attributes of each one of it's Face3D
         * instances.
         */
        polyhedron(): void;

        /**
         * Draw and return a rectangle.
         * @param  {SVGAttributes} [attributes]
         *         General SVG attributes for the rectangle.
         * @return {SVGElement}
         *         The generated wrapper element.
         * @sample highcharts/members/renderer-rect-on-chart/
         *         Draw a rectangle in a chart
         * @sample highcharts/members/renderer-rect/
         *         Draw a rectangle independent from a chart
         */
        rect(attributes?: SVGAttributes): SVGElement;

        /**
         * Resize the {@link SVGRenderer#box} and re-align all aligned child
         * elements.
         * @param  {number} width
         *         The new pixel width.
         * @param  {number} height
         *         The new pixel height.
         * @param  {Boolean|AnimationOptions} [animate=true]
         *         Whether and how to animate.
         */
        setSize(width: number, height: number, animate?: boolean | AnimationOptions): void;

        /**
         * Apply the global style on the renderer, mixed with the default styles.
         * @param {CSSObject} style - CSS to apply.
         */
        setStyle(style: CSSObject): void;

        /**
         * Draw a symbol out of pre-defined shape paths from
         * {@link SVGRenderer#symbols}.
         * It is used in Highcharts for point makers, which cake a `symbol` option,
         * and label and button backgrounds like in the tooltip and stock flags.
         * @param {Symbol} symbol - The symbol name.
         * @param {number} x - The X coordinate for the top left position.
         * @param {number} y - The Y coordinate for the top left position.
         * @param {number} width - The pixel width.
         * @param {number} height - The pixel height.
         * @param {Object} [options] - Additional options, depending on the actual
         *    symbol drawn.
         * @param {number} [options.anchorX] - The anchor X position for the
         *    `callout` symbol. This is where the chevron points to.
         * @param {number} [options.anchorY] - The anchor Y position for the
         *    `callout` symbol. This is where the chevron points to.
         * @param {number} [options.end] - The end angle of an `arc` symbol.
         * @param {boolean} [options.open] - Whether to draw `arc` symbol open or
         *    closed.
         * @param {number} [options.r] - The radius of an `arc` symbol, or the
         *    border radius for the `callout` symbol.
         * @param {number} [options.start] - The start angle of an `arc` symbol.
         * @return {SVGElement}
         */
        symbol(symbol: Symbol, x: number, y: number, width: number, height: number, options?: {
            anchorX?: number;
            anchorY?: number;
            end?: number;
            open?: boolean;
            r?: number;
            start?: number;
        }): SVGElement;

        /**
         * An extendable collection of functions for defining symbol paths.
         */
        symbols: object;

        /**
         * Draw text. The text can contain a subset of HTML, like spans and anchors
         * and some basic text styling of these. For more advanced features like
         * border and background, use {@link Highcharts.SVGRenderer#label} instead.
         * To update the text after render, run `text.attr({ text: 'New text' })`.
         * @param  {String} str
         *         The text of (subset) HTML to draw.
         * @param  {number} x
         *         The x position of the text's lower left corner.
         * @param  {number} y
         *         The y position of the text's lower left corner.
         * @param  {Boolean} [useHTML=false]
         *         Use HTML to render the text.
         * @return {SVGElement} The text object.
         * @sample highcharts/members/renderer-text-on-chart/
         *         Annotate the chart freely
         * @sample highcharts/members/renderer-on-chart/
         *         Annotate with a border and in response to the data
         * @sample highcharts/members/renderer-text/
         *         Formatted text
         */
        text(str: string, x: number, y: number, useHTML?: boolean): SVGElement;

    }

    /**
     * When we have vertical scrollbar, rifles and arrow in buttons should be rotated.
     * The same method is used in Navigator's handles, to rotate them.
     * @param {Array} path - path to be rotated
     * @param {Boolean} vertical - if vertical scrollbar, swap x-y values
     * @return {Array}
     */
    function swapXY(path: any[], vertical: boolean): any[];

    /**
     * Can be one of `arc`, `callout`, `circle`, `diamond`, `square`,
     * `triangle`, `triangle-down`. Symbols are used internally for point
     * markers, button and label borders and backgrounds, or custom shapes.
     * Extendable by adding to {@link SVGRenderer#symbols}.
     * @typedef {string} Symbol
     * @memberof Highcharts
     */
    type Symbol = string;

    /**
     * @type {Object}
     */
    const symbolSizes: any;

    /**
     * The Tick class
     * @class
     */
    class Tick {
        /**
         * Write the tick label
         */
        addLabel(): void;

        /**
         * Destructor for the tick prototype
         */
        destroy(): void;

        /**
         * Make a tick label drillable, or remove drilling on update
         */
        drillable(): void;

        /**
         * Get the x, y position of the tick label
         */
        getLabelPosition(): void;

        /**
         * Get the offset height or width of the label
         */
        getLabelSize(): void;

        /**
         * Extendible method to return the path of the marker
         */
        getMarkPath(): void;

        /**
         * Get the x and y position for ticks and labels
         */
        getPosition(): void;

        /**
         * Handle the label overflow by adjusting the labels to the left and right
         * edge, or hide them if they collide into the neighbour label.
         */
        handleOverflow(): void;

        /**
         * Put everything in place
         * @param {Number} index
         * @param {Boolean} old Use old coordinates to prepare an animation into new
         *                      position
         */
        render(index: number, old: boolean): void;

        /**
         * Renders the gridLine.
         * @param  {Boolean} old         Whether or not the tick is old
         * @param  {number} opacity      The opacity of the grid line
         * @param  {number} reverseCrisp Modifier for avoiding overlapping 1 or -1
         * @return {undefined}
         */
        renderGridLine(old: boolean, opacity: number, reverseCrisp: number): undefined;

        /**
         * Renders the tick label.
         * Note: The label should already be created in init(), so it should only
         * have to be moved into place.
         * @param  {Object} xy      The position vector of the label
         * @param  {number} xy.x    The x position of the label
         * @param  {number} xy.y    The y position of the label
         * @param  {Boolean} old    Whether or not the tick is old
         * @param  {number} opacity The opacity of the label
         * @param  {number} index   The index of the tick
         * @return {undefined}
         */
        renderLabel(xy: {
            x: number;
            y: number;
        }, old: boolean, opacity: number, index: number): undefined;

        /**
         * Renders the tick mark.
         * @param  {Object} xy           The position vector of the mark
         * @param  {number} xy.x         The x position of the mark
         * @param  {number} xy.y         The y position of the mark
         * @param  {number} opacity      The opacity of the mark
         * @param  {number} reverseCrisp Modifier for avoiding overlapping 1 or -1
         * @return {undefined}
         */
        renderMark(xy: {
            x: number;
            y: number;
        }, opacity: number, reverseCrisp: number): undefined;

    }

    /**
     * @type {Object}
     */
    const tileShapeTypes: any;

    /**
     * The Time class. Time settings are applied in general for each page using
     * `Highcharts.setOptions`, or individually for each Chart item through the
     * [time](https://api.highcharts.com/highcharts/time) options set.
     * The Time object is available from
     * [Chart.time](http://api.highcharts.com/class-reference/Highcharts.Chart#.time),
     * which refers to  `Highcharts.time` if no individual time settings are
     * applied.
     * @example
     * // Apply time settings globally
     * Highcharts.setOptions({
     *     time: {
     *         timezone: 'Europe/London'
     *     }
     * });
     * // Apply time settings by instance
     * var chart = Highcharts.chart('container', {
     *     time: {
     *         timezone: 'America/New_York'
     *     },
     *     series: [{
     *         data: [1, 4, 3, 5]
     *     }]
     * });
     * // Use the Time object
     * console.log(
     *        'Current time in New York',
     *        chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())
     * );
     * @param  {Object} options
     *         Time options as defined in [chart.options.time](/highcharts/time).
     * @since  6.0.5
     * @class
     */
    class Time {
        constructor(options: any);

        /**
         * Formats a JavaScript date timestamp (milliseconds since Jan 1st 1970)
         * into a human readable date string. The format is a subset of the formats
         * for PHP's [strftime](http://www.php.net/manual/en/function.strftime.php)
         * function. Additional formats can be given in the
         * {@link Highcharts.dateFormats} hook.
         * @param {String} format
         *        The desired format where various time
         *        representations are prefixed with %.
         * @param {Number} timestamp
         *        The JavaScript timestamp.
         * @param {Boolean} [capitalize=false]
         *        Upper case first letter in the return.
         * @returns {String} The formatted date.
         */
        dateFormat(format: string, timestamp: number, capitalize?: boolean): string;

        /**
         * Return an array with time positions distributed on round time values
         * right and right after min and max. Used in datetime axes as well as for
         * grouping data on a datetime axis.
         * @param {Object} normalizedInterval
         *        The interval in axis values (ms) and thecount
         * @param {Number} min The minimum in axis values
         * @param {Number} max The maximum in axis values
         * @param {Number} startOfWeek
         */
        getTimeTicks(normalizedInterval: any, min: number, max: number, startOfWeek: number): void;

        /**
         * Get the time zone offset based on the current timezone information as
         * set in the global options.
         * @function #getTimezoneOffset
         * @memberOf Highcharts.Time
         * @param  {Number} timestamp
         *         The JavaScript timestamp to inspect.
         * @return {Number}
         *         The timezone offset in minutes compared to UTC.
         */
        getTimezoneOffset(timestamp: number): number;

        /**
         * Make a time and returns milliseconds. Interprets the inputs as UTC time,
         * local time or a specific timezone time depending on the current time
         * settings.
         * @param  {Number} year
         *         The year
         * @param  {Number} month
         *         The month. Zero-based, so January is 0.
         * @param  {Number} date
         *         The day of the month
         * @param  {Number} hours
         *         The hour of the day, 0-23.
         * @param  {Number} minutes
         *         The minutes
         * @param  {Number} seconds
         *         The seconds
         * @return {Number}
         *         The time in milliseconds since January 1st 1970.
         */
        makeTime(year: number, month: number, date: number, hours: number, minutes: number, seconds: number): number;

    }

    /**
     * Time utilities
     */
    const time: any;

    interface TimeOptions {
        Date: any;
        getTimezoneOffset: ()=>any;
        timezone: string;
        timezoneOffset: number;
        useUTC: boolean;
    }

    /**
     * The time unit lookup
     */
    const timeUnits: object;

    interface TitleOptions {
        align: string;
        floating: boolean;
        margin: number;
        style: CSSObject;
        text: string;
        useHTML: boolean;
        verticalAlign: string;
        widthAdjust: number;
        x: number;
        y: number;
    }

    /**
     * The tooltip object
     * @param {Object} chart The chart instance
     * @param {Object} options Tooltip options
     * @class
     */
    class Tooltip {
        constructor(chart: any, options: any);

        /**
         * In styled mode, apply the default filter for the tooltip drop-shadow. It
         * needs to have an id specific to the chart, otherwise there will be issues
         * when one tooltip adopts the filter of a different chart, specifically one
         * where the container is hidden.
         */
        applyFilter(): void;

        /**
         * Build the body (lines) of the tooltip by iterating over the items and
         * returning one entry for each item, abstracting this functionality allows
         * to easily overwrite and extend it.
         */
        bodyFormatter(): void;

        /**
         * Destroy the single tooltips in a split tooltip.
         * If the tooltip is active then it is not destroyed, unless forced to.
         * @param  {boolean} force Force destroy all tooltips.
         * @return {undefined}
         */
        cleanSplit(force: boolean): undefined;

        /**
         * In case no user defined formatter is given, this will be used. Note that
         * the context here is an object holding point, series, x, y etc.
         * @returns {String|Array<String>}
         */
        defaultFormatter(): string | string[];

        /**
         * Destroy the tooltip and its elements.
         */
        destroy(): void;

        /**
         * Extendable method to get the anchor position of the tooltip
         * from a point or set of points
         */
        getAnchor(): void;

        /**
         * Get the optimal date format for a point, based on a range.
         * @param  {number} range - The time range
         * @param  {number|Date} date - The date of the point in question
         * @param  {number} startOfWeek - An integer representing the first day of
         * the week, where 0 is Sunday
         * @param  {Object} dateTimeLabelFormats - A map of time units to formats
         * @return {string} - the optimal date format for a point
         */
        getDateFormat(range: number, date: number | Date, startOfWeek: number, dateTimeLabelFormats: any): string;

        /**
         * Create the Tooltip label element if it doesn't exist, then return the
         * label.
         */
        getLabel(): void;

        /**
         * Place the tooltip in a chart without spilling over
         * and not covering the point it self.
         */
        getPosition(): void;

        /**
         * Get the best X date format based on the closest point range on the axis.
         */
        getXDateFormat(): void;

        /**
         * Hide the tooltip
         */
        hide(): void;

        /**
         * Refresh the tooltip's text and position.
         * @param {Object|Array} pointOrPoints Rither a point or an array of points
         */
        refresh(pointOrPoints: any | any[]): void;

        /**
         * Render the split tooltip. Loops over each point's text and adds
         * a label next to the point, then uses the distribute function to
         * find best non-overlapping positions.
         */
        renderSplit(): void;

        /**
         * Format the footer/header of the tooltip
         * #3397: abstraction to enable formatting of footer and header
         */
        tooltipFooterHeaderFormatter(): void;

        /**
         * Find the new position and perform the move
         */
        updatePosition(): void;

    }

    interface TooltipOptions {
        animation: boolean;
        backgroundColor: ColorString;
        borderColor: ColorString;
        borderRadius: number;
        borderWidth: number;
        changeDecimals: number;
        crosshairs: any;
        dateTimeLabelFormats: TooltipOptionsDateTimeLabelFormats;
        enabled: boolean;
        followPointer: boolean;
        followTouchMove: boolean;
        footerFormat: string;
        formatter: ()=>any;
        headerFormat: string;
        hideDelay: number;
        padding: number;
        pointFormat: string;
        pointFormatter: ()=>any;
        positioner: ()=>any;
        shadow: boolean;
        shape: string;
        shared: boolean;
        snap: number;
        split: boolean;
        style: TooltipOptionsStyle;
        useHTML: boolean;
        valueDecimals: number;
        valuePrefix: string;
        valueSuffix: string;
        xDateFormat: string;
    }

    interface TooltipOptionsDateTimeLabelFormats {
        day: string;
        hour: string;
        millisecond: string;
        minute: string;
        month: string;
        second: string;
        week: string;
        year: string;
    }

    interface TooltipOptionsStyle {
        color: string;
        cursor: string;
        fontSize: string;
        pointerEvents: string;
        whiteSpace: string;
    }

    /**
     * TrackerMixin for points and graphs.
     * @mixin
     * @chart-private
     * @name TrackerMixin
     * @memberof Highcharts
     */
    interface TrackerMixin {
        /**
         * Draw the tracker object that sits above all data labels and markers to
         * track mouse events on the graph or points. For the line type charts
         * the tracker uses the same graphPath, but with a greater stroke width
         * for better control.
         */
        drawTrackerGraph(): void;
        /**
         * Draw the tracker for a point.
         */
        drawTrackerPoint(): void;
    }

    /**
     * @type {string}
     */
    const version: string;

    /**
     * The VML element wrapper.
     * @class VMLElement
     * @extends H.SVGElement
     * @memberOf H
     * @borrows SVGElement#htmlCss as VMLElement#css
     * @borrows SVGElement#htmlUpdateTransform as VMLElement#updateTransform
     */
    class VMLElement extends SVGElement {
        /**
         * Add the node to the given parent
         * @memberOf VMLElement
         * @instance
         * @param {VMLElement} parent
         * @return {VMLElement}
         */
        add(parent: VMLElement): VMLElement;

        /**
         * Set the element's clipping to a predefined rectangle
         * @memberOf VMLElement
         * @instance
         * @param {ClipRect} clipRect The id of the clip rectangle
         * @return {VMLElement}
         */
        clip(clipRect: ClipRect): VMLElement;

        /**
         * Set styles for the element
         * @memberOf VMLElement
         * @instance
         * @param {Object} styles
         */
        css: any;

        /**
         * In stacked columns, cut off the shadows so that they don't overlap
         * @memberOf VMLElement
         * @instance
         */
        cutOffPath(): void;

        /**
         * Extend element.destroy by removing it from the clip members array
         * @memberOf VMLElement
         * @instance
         */
        destroy(): void;

        /**
         * Get the positioning correction for the span after rotating.
         * @memberOf VMLElement
         * @instance
         */
        getSpanCorrection(): void;

        /**
         * Initialize a new VML element wrapper. It builds the markup as a
         * string to minimize DOM traffic.
         * @memberOf VMLElement
         * @instance
         * @param {SVGRenderer} renderer
         * @param {String} nodeName
         */
        init(renderer: SVGRenderer, nodeName: string): void;

        /**
         * Add an event listener. VML override for normalizing event parameters.
         * @memberOf VMLElement
         * @instance
         * @param {String} eventType
         * @param {Function} handler
         * @returns {VMLElement}
         */
        on(eventType: string, handler: ()=>any): VMLElement;

        /**
         * Converts a subset of an SVG path definition to its VML counterpart.
         * Takes an array as the parameter and returns a string.
         * @memberOf VMLElement
         * @instance
         */
        pathToVML(): void;

        /**
         * Removes a child either by removeChild or move to garbageBin.
         * Issue 490; in VML removeChild results in Orphaned nodes according to
         * sIEve, discardElement does not.
         * @memberOf VMLElement
         * @instance
         */
        safeRemoveChild(): void;

        /**
         * Set the rotation of a span with oldIE's filter
         * @memberOf VMLElement
         * @instance
         */
        setSpanRotation(): void;

        /**
         * Apply a drop shadow by copying elements and giving them different
         * strokes
         * @memberOf VMLElement
         * @instance
         * @param {Boolean|ShadowOptions} shadowOptions
         * @returns {VMLElement}
         */
        shadow(shadowOptions: boolean | ShadowOptions): VMLElement;

        /**
         * VML always uses htmlUpdateTransform
         * @memberOf VMLElement
         * @instance
         */
        updateTransform: any;

    }

    /**
     * @class VMLRenderer
     * @memberOf H
     * @extends SVGRenderer
     * @mixes VMLRendererExtension
     */
    class VMLRenderer extends SVGRenderer implements VMLRendererExtension {
        /**
         * Create and return a circle element. In VML circles are implemented as
         * shapes, which is faster than v:oval
         * @instance
         * @param {Number} x
         * @param {Number} y
         * @param {Number} r
         * @return {SVGElement}
         */
        circle(x: number, y: number, r: number): SVGElement;

        /**
         * Define a clipping rectangle. In VML it is accomplished by storing the
         * values for setting the CSS style to all associated members.
         * @instance
         * @param {Number} x
         * @param {Number} y
         * @param {Number} width
         * @param {Number} height
         * @return {VMLElement}
         */
        clipRect(x: number, y: number, width: number, height: number): VMLElement;

        /**
         * Take a color and return it if it's a string, make it a gradient if
         * it's a gradient configuration object, and apply opacity.
         * @instance
         * @param {Object} color The color or config object
         * @param elem
         * @param prop
         * @param wrapper
         */
        color(color: any, elem: any, prop: any, wrapper: any): void;

        /**
         * For rectangles, VML uses a shape for rect to overcome bugs and
         * rotation problems
         * @instance
         * @return {VMLElement}
         */
        createElement(): VMLElement;

        /**
         * Create a group using an outer div and an inner v:group to allow
         * rotating and flipping. A simple v:group would have problems with
         * positioning child HTML elements and CSS clip.
         * @instance
         * @param {String} name The name of the group
         * @return {VMLElement}
         */
        g(name: string): VMLElement;

        /**
         * VML override to create a regular HTML image
         * @instance
         * @param {String} src
         * @param {Number} x
         * @param {Number} y
         * @param {Number} width
         * @param {Number} height
         * @return {VMLElement}
         */
        image(src: string, x: number, y: number, width: number, height: number): VMLElement;

        /**
         * Initialize the VMLRenderer
         * @instance
         * @param {Object} container
         * @param {Number} width
         * @param {Number} height
         */
        init(container: any, width: number, height: number): void;

        /**
         * In the VML renderer, each child of an inverted div (group) is
         * inverted
         * @instance
         * @param {Object} element
         * @param {Object} parentNode
         */
        invertChild(element: any, parentNode: any): void;

        /**
         * Detect whether the renderer is hidden. This happens when one of the
         * parent elements has display: none
         * @instance
         * @return {boolean}
         */
        isHidden(): boolean;

        /**
         * Create and return a path element
         * @instance
         * @param {Array} path
         * @returns {VMLElement}
         */
        path(path: any[]): VMLElement;

        /**
         * Take a VML string and prepare it for either IE8 or IE6/IE7.
         * @instance
         * @param {Array} markup A string array of the VML markup to prepare
         */
        prepVML(markup: any[]): void;

        /**
         * Symbol definitions that override the parent SVG renderer's symbols
         * @instance
         */
        symbols: object;

        /**
         * Create rotated and aligned text
         * @instance
         * @param {String} str
         * @param {Number} x
         * @param {Number} y
         */
        text: any;

    }

    /**
     * VMLRendererExtension
     * @mixin
     * @memberOf H
     * @borrows SVGRenderer#html as VMLRendererExtension#text
     */
    interface VMLRendererExtension {
        /**
         * Create and return a circle element. In VML circles are implemented as
         * shapes, which is faster than v:oval
         * @instance
         * @param {Number} x
         * @param {Number} y
         * @param {Number} r
         * @return {SVGElement}
         */
        circle(x: number, y: number, r: number): SVGElement;
        /**
         * Define a clipping rectangle. In VML it is accomplished by storing the
         * values for setting the CSS style to all associated members.
         * @instance
         * @param {Number} x
         * @param {Number} y
         * @param {Number} width
         * @param {Number} height
         * @return {VMLElement}
         */
        clipRect(x: number, y: number, width: number, height: number): VMLElement;
        /**
         * Take a color and return it if it's a string, make it a gradient if
         * it's a gradient configuration object, and apply opacity.
         * @instance
         * @param {Object} color The color or config object
         * @param elem
         * @param prop
         * @param wrapper
         */
        color(color: any, elem: any, prop: any, wrapper: any): void;
        /**
         * For rectangles, VML uses a shape for rect to overcome bugs and
         * rotation problems
         * @instance
         * @return {VMLElement}
         */
        createElement(): VMLElement;
        /**
         * Create a group using an outer div and an inner v:group to allow
         * rotating and flipping. A simple v:group would have problems with
         * positioning child HTML elements and CSS clip.
         * @instance
         * @param {String} name The name of the group
         * @return {VMLElement}
         */
        g(name: string): VMLElement;
        /**
         * VML override to create a regular HTML image
         * @instance
         * @param {String} src
         * @param {Number} x
         * @param {Number} y
         * @param {Number} width
         * @param {Number} height
         * @return {VMLElement}
         */
        image(src: string, x: number, y: number, width: number, height: number): VMLElement;
        /**
         * Initialize the VMLRenderer
         * @instance
         * @param {Object} container
         * @param {Number} width
         * @param {Number} height
         */
        init(container: any, width: number, height: number): void;
        /**
         * In the VML renderer, each child of an inverted div (group) is
         * inverted
         * @instance
         * @param {Object} element
         * @param {Object} parentNode
         */
        invertChild(element: any, parentNode: any): void;
        /**
         * Detect whether the renderer is hidden. This happens when one of the
         * parent elements has display: none
         * @instance
         * @return {boolean}
         */
        isHidden(): boolean;
        /**
         * Create and return a path element
         * @instance
         * @param {Array} path
         * @returns {VMLElement}
         */
        path(path: any[]): VMLElement;
        /**
         * Take a VML string and prepare it for either IE8 or IE6/IE7.
         * @instance
         * @param {Array} markup A string array of the VML markup to prepare
         */
        prepVML(markup: any[]): void;
        /**
         * Symbol definitions that override the parent SVG renderer's symbols
         * @instance
         */
        symbols: object;
        /**
         * Create rotated and aligned text
         * @instance
         * @param {String} str
         * @param {Number} x
         * @param {Number} y
         */
        text: any;
    }

    /**
     * @type {Window}
     */
    const win: Window;

    interface XAxisOptions {
        alignTicks: boolean;
        allowDecimals: boolean;
        alternateGridColor: ColorString;
        breaks: any[];
        categories: string[];
        ceiling: number;
        className: string;
        crosshair: XAxisOptionsCrosshair;
        dateTimeLabelFormats: XAxisOptionsDateTimeLabelFormats;
        description: string;
        endOnTick: boolean;
        events: XAxisOptionsEvents;
        floor: number;
        gridLineColor: ColorString;
        gridLineDashStyle: string;
        gridLineWidth: number;
        gridZIndex: number;
        id: string;
        labels: XAxisOptionsLabels;
        lineColor: ColorString;
        lineWidth: number;
        linkedTo: number;
        max: number;
        maxPadding: number;
        maxRange: number;
        maxZoom: number;
        min: number;
        minorGridLineColor: ColorString;
        minorGridLineDashStyle: string;
        minorGridLineWidth: number;
        minorTickColor: ColorString;
        minorTickInterval: number | string;
        minorTickLength: number;
        minorTickPosition: string;
        minorTicks: boolean;
        minorTickWidth: number;
        minPadding: number;
        minRange: number;
        minTickInterval: number;
        offset: number;
        opposite: boolean;
        ordinal: boolean;
        overscroll: number;
        pane: number;
        plotBands: (XAxisOptionsPlotBands)[];
        plotLines: (XAxisOptionsPlotLines)[];
        range: number;
        reversed: boolean;
        reversedStacks: boolean;
        scrollbar: XAxisOptionsScrollbar;
        showEmpty: boolean;
        showFirstLabel: boolean;
        showLastLabel: boolean;
        softMax: number;
        softMin: number;
        startOfWeek: number;
        startOnTick: boolean;
        tickAmount: number;
        tickColor: ColorString;
        tickInterval: number;
        tickLength: number;
        tickmarkPlacement: string;
        tickPixelInterval: number;
        tickPosition: string;
        tickPositioner: ()=>any;
        tickPositions: number[];
        tickWidth: number;
        title: XAxisOptionsTitle;
        type: string;
        uniqueNames: boolean;
        units: any[];
        visible: boolean;
    }

    interface XAxisOptionsBreaks {
        breakSize: number;
        from: number;
        repeat: number;
        to: number;
    }

    interface XAxisOptionsCrosshair {
        className: string;
        color: ColorString;
        dashStyle: string;
        label: XAxisOptionsCrosshairLabel;
        snap: boolean;
        width: number;
        zIndex: number;
    }

    interface XAxisOptionsCrosshairLabel {
        align: string;
        backgroundColor: ColorString;
        borderColor: ColorString;
        borderRadius: number;
        borderWidth: number;
        format: string;
        formatter: ()=>any;
        padding: number;
        shape: string;
        style: CSSObject;
    }

    interface XAxisOptionsDateTimeLabelFormats {
        day: string;
        hour: string;
        millisecond: string;
        minute: string;
        month: string;
        second: string;
        week: string;
        year: string;
    }

    interface XAxisOptionsEvents {
        afterBreaks: ()=>any;
        afterSetExtremes: ()=>any;
        pointBreak: ()=>any;
        pointInBreak: ()=>any;
        setExtremes: ()=>any;
    }

    interface XAxisOptionsLabels {
        align: string;
        autoRotation: number[];
        autoRotationLimit: number;
        distance: number;
        enabled: boolean;
        format: string;
        formatter: ()=>any;
        maxStaggerLines: number;
        overflow: string;
        padding: number;
        position3d: string;
        reserveSpace: boolean;
        rotation: number;
        skew3d: boolean;
        staggerLines: number;
        step: number;
        style: XAxisOptionsLabelsStyle;
        useHTML: boolean;
        x: number;
        y: number;
        zIndex: number;
    }

    interface XAxisOptionsLabelsStyle {
        color: string;
        cursor: string;
        fontSize: string;
    }

    interface XAxisOptionsPlotBands {
        borderColor: ColorString;
        borderWidth: number;
        className: string;
        color: ColorString;
        events: any;
        from: number;
        id: string;
        label: XAxisOptionsPlotBandsLabel;
        to: number;
        zIndex: number;
    }

    interface XAxisOptionsPlotBandsLabel {
        align: string;
        rotation: number;
        style: any;
        text: string;
        textAlign: string;
        useHTML: boolean;
        verticalAlign: string;
        x: number;
        y: number;
    }

    interface XAxisOptionsPlotLines {
        className: string;
        color: ColorString;
        dashStyle: string;
        events: any;
        id: string;
        label: XAxisOptionsPlotLinesLabel;
        value: number;
        width: number;
        zIndex: number;
    }

    interface XAxisOptionsPlotLinesLabel {
        align: string;
        rotation: number;
        style: any;
        text: string;
        textAlign: string;
        useHTML: boolean;
        verticalAlign: string;
        x: number;
        y: number;
    }

    interface XAxisOptionsScrollbar extends ScrollbarOptions{
    }

    interface XAxisOptionsTitle {
        align: string;
        enabled: string;
        margin: number;
        offset: number;
        position3d: string;
        reserveSpace: boolean;
        rotation: number;
        skew3d: boolean;
        style: XAxisOptionsTitleStyle;
        text: string;
        useHTML: boolean;
        x: number;
        y: number;
    }

    interface XAxisOptionsTitleStyle {
        color: string;
    }

    interface YAxisOptions extends XAxisOptions{
        angle: number;
        endOnTick: boolean;
        gridLineInterpolation: string;
        gridLineWidth: number;
        height: number | string;
        labels: YAxisOptionsLabels;
        lineColor: any;
        lineWidth: number;
        max: any;
        maxColor: ColorString;
        maxLength: string | number;
        maxPadding: number;
        min: any;
        minColor: ColorString;
        minLength: number | string;
        minPadding: number;
        opposite: any;
        plotBands: (YAxisOptionsPlotBands)[];
        plotLines: (YAxisOptionsPlotLines)[];
        resize: YAxisOptionsResize;
        reversedStacks: boolean;
        scrollbar: YAxisOptionsScrollbar;
        showLastLabel: boolean;
        softMax: number;
        softMin: number;
        stackLabels: YAxisOptionsStackLabels;
        startOnTick: boolean;
        stops: (any[])[];
        tickPixelInterval: number;
        tickWidth: number;
        title: YAxisOptionsTitle;
        tooltipValueFormat: string;
        top: number | string;
    }

    interface YAxisOptionsLabels extends XAxisOptionsLabels{
        align: string;
        distance: number;
        x: number;
        y: number;
    }

    interface YAxisOptionsPlotBands extends XAxisOptionsPlotBands{
        innerRadius: number | string;
        outerRadius: number | string;
        thickness: number | string;
    }

    interface YAxisOptionsPlotLines extends XAxisOptionsPlotLines{
    }

    interface YAxisOptionsResize {
        controlledAxis: YAxisOptionsResizeControlledAxis;
        cursor: string;
        enabled: boolean;
        lineColor: ColorString;
        lineDashStyle: string;
        lineWidth: number;
        x: number;
        y: number;
    }

    interface YAxisOptionsResizeControlledAxis {
        next: (string | number)[];
        prev: (string | number)[];
    }

    interface YAxisOptionsScrollbar extends ScrollbarOptions{
        enabled: boolean;
        margin: number;
        showFull: boolean;
        size: number;
        zIndex: number;
    }

    interface YAxisOptionsStackLabels {
        align: string;
        allowOverlap: boolean;
        enabled: boolean;
        format: string;
        formatter: ()=>any;
        rotation: number;
        style: YAxisOptionsStackLabelsStyle;
        textAlign: string;
        useHTML: boolean;
        verticalAlign: string;
        x: number;
        y: number;
    }

    interface YAxisOptionsStackLabelsStyle {
        color: string;
        fontSize: string;
        fontWeight: string;
        textOutline: string;
    }

    interface YAxisOptionsTitle extends XAxisOptionsTitle{
        margin: number;
        rotation: number;
        text: string;
    }

    /**
     * @class H.ZAxis
     * @extends H.Axis
     */
    class ZAxis extends Axis {
    }

    interface ZAxisOptions extends XAxisOptions{
    }

    /**
     * Add an event listener.
     * @function #addEvent
     * @memberOf Highcharts
     * @param {Object} el - The element or object to add a listener to. It can be a
     *        {@link HTMLDOMElement}, an {@link SVGElement} or any other object.
     * @param {String} type - The event type.
     * @param {Function} fn - The function callback to execute when the event is
     *        fired.
     * @param {Object} options
     *        Event options
     * @param {Number} options.order
     *        The order the event handler should be called. This opens for having
     *        one handler be called before another, independent of in which order
     *        they were added.
     * @returns {Function} A callback function to remove the added event.
     */
    function addEvent(el: any, type: string, fn: ()=>any, options: {
        order: number;
    }): ()=>any;

    /**
     * Perform an Ajax call.
     * @function #ajax
     * @memberof Highcharts
     * @param {AjaxSettings} attr - The Ajax settings to use
     */
    function ajax(attr: AjaxSettings): void;

    /**
     * The global animate method, which uses Fx to create individual animators.
     * @function #animate
     * @memberOf Highcharts
     * @param {HTMLDOMElement|SVGElement} el - The element to animate.
     * @param {Object} params - An object containing key-value pairs of the
     *        properties to animate. Supports numeric as pixel-based CSS properties
     *        for HTML objects and attributes for SVGElements.
     * @param {AnimationOptions} [opt] - Animation options.
     */
    function animate(el: HTMLDOMElement | SVGElement, params: any, opt?: AnimationOptions): void;

    /**
     * Get the animation in object form, where a disabled animation is always
     * returned as `{ duration: 0 }`.
     * @function #animObject
     * @memberOf Highcharts
     * @param {Boolean|AnimationOptions} animation - An animation setting. Can be an
     *        object with duration, complete and easing properties, or a boolean to
     *        enable or disable.
     * @returns {AnimationOptions} An object with at least a duration property.
     */
    function animObject(animation: boolean | AnimationOptions): AnimationOptions;

    /**
     * Non-recursive method to find the lowest member of an array. `Math.max` raises
     * a maximum call stack size exceeded error in Chrome when trying to apply more
     * than 150.000 points. This method is slightly slower, but safe.
     * @function #arrayMax
     * @memberOf  Highcharts
     * @param {Array} data - An array of numbers.
     * @returns {Number} The highest number.
     */
    function arrayMax(data: any[]): number;

    /**
     * Non-recursive method to find the lowest member of an array. `Math.min` raises
     * a maximum call stack size exceeded error in Chrome when trying to apply more
     * than 150.000 points. This method is slightly slower, but safe.
     * @function #arrayMin
     * @memberOf  Highcharts
     * @param {Array} data An array of numbers.
     * @returns {Number} The lowest number.
     */
    function arrayMin(data: any[]): number;

    /**
     * Set or get an attribute or an object of attributes. To use as a setter, pass
     * a key and a value, or let the second argument be a collection of keys and
     * values. To use as a getter, pass only a string as the second argument.
     * @function #attr
     * @memberOf Highcharts
     * @param {Object} elem - The DOM element to receive the attribute(s).
     * @param {String|Object} [prop] - The property or an object of key-value pairs.
     * @param {String} [value] - The value if a single property is set.
     * @returns {*} When used as a getter, return the value.
     */
    function attr(elem: any, prop?: string | any, value?: string): any;

    /**
     * Factory function for basic charts.
     * @function #chart
     * @memberOf Highcharts
     * @param  {String|HTMLDOMElement} renderTo - The DOM element to render to, or
     * its id.
     * @param  {Options} options - The chart options structure.
     * @param  {Function} [callback] - Function to run when the chart has loaded and
     * and all external images are loaded. Defining a {@link
     * https://api.highcharts.com/highcharts/chart.events.load|chart.event.load}
     * handler is equivalent.
     * @return {Highcharts.Chart} - Returns the Chart object.
     * @example
     * // Render a chart in to div#container
     * var chart = Highcharts.chart('container', {
     *     title: {
     *         text: 'My chart'
     *     },
     *     series: [{
     *         data: [1, 3, 2, 4]
     *     }]
     * });
     */
    function chart(renderTo: string | HTMLDOMElement, options: Options, callback?: ()=>any): Chart;

    /**
     * Internal clear timeout. The function checks that the `id` was not removed
     * (e.g. by `chart.destroy()`). For the details see
     * [issue #7901](https://github.com/highcharts/highcharts/issues/7901).
     * @function #clearTimeout
     * @memberOf Highcharts
     * @param   {Number}   id - id of a timeout.
     */
    function clearTimeout(id: number): void;

    /**
     * Fix JS round off float errors.
     * @function #correctFloat
     * @memberOf Highcharts
     * @param {Number} num - A float number to fix.
     * @param {Number} [prec=14] - The precision.
     * @returns {Number} The corrected float number.
     */
    function correctFloat(num: number, prec?: number): number;

    /**
     * Utility function to create an HTML element with attributes and styles.
     * @function #createElement
     * @memberOf Highcharts
     * @param {String} tag - The HTML tag.
     * @param {Object} [attribs] - Attributes as an object of key-value pairs.
     * @param {CSSObject} [styles] - Styles as an object of key-value pairs.
     * @param {Object} [parent] - The parent HTML object.
     * @param {Boolean} [nopad=false] - If true, remove all padding, border and
     *    margin.
     * @returns {HTMLDOMElement} The created DOM element.
     */
    function createElement(tag: string, attribs?: any, styles?: CSSObject, parent?: any, nopad?: boolean): HTMLDOMElement;

    /**
     * Set CSS on a given element.
     * @function #css
     * @memberOf Highcharts
     * @param {HTMLDOMElement} el - A HTML DOM element.
     * @param {CSSObject} styles - Style object with camel case property names.
     */
    function css(el: HTMLDOMElement, styles: CSSObject): void;

    /**
     * Formats a JavaScript date timestamp (milliseconds since Jan 1st 1970) into a
     * human readable date string. The format is a subset of the formats for PHP's
     * [strftime]{@link
     * http://www.php.net/manual/en/function.strftime.php} function. Additional
     * formats can be given in the {@link Highcharts.dateFormats} hook.
     * Since v6.0.5, all internal dates are formatted through the
     * [Chart.time](Chart#time) instance to respect chart-level time settings. The
     * `Highcharts.dateFormat` function only reflects global time settings set with
     * `setOptions`.
     * @function #dateFormat
     * @memberOf Highcharts
     * @param {String} format - The desired format where various time
     *        representations are prefixed with %.
     * @param {Number} timestamp - The JavaScript timestamp.
     * @param {Boolean} [capitalize=false] - Upper case first letter in the return.
     * @returns {String} The formatted date.
     */
    function dateFormat(format: string, timestamp: number, capitalize?: boolean): string;

    /**
     * Check if an object is null or undefined.
     * @function #defined
     * @memberOf Highcharts
     * @param {Object} obj - The object to check.
     * @returns {Boolean} - False if the object is null or undefined, otherwise
     *        true.
     */
    function defined(obj: any): boolean;

    /**
     * Utility method that destroys any SVGElement instances that are properties on
     * the given object. It loops all properties and invokes destroy if there is a
     * destroy method. The property is then delete.
     * @function #destroyObjectProperties
     * @memberOf Highcharts
     * @param {Object} obj - The object to destroy properties on.
     * @param {Object} [except] - Exception, do not destroy this property, only
     *    delete it.
     */
    function destroyObjectProperties(obj: any, except?: any): void;

    /**
     * Discard a HTML element by moving it to the bin and delete.
     * @function #discardElement
     * @memberOf Highcharts
     * @param {HTMLDOMElement} element - The HTML node to discard.
     */
    function discardElement(element: HTMLDOMElement): void;

    /**
     * Iterate over an array.
     * @function #each
     * @memberOf Highcharts
     * @param {Array} arr - The array to iterate over.
     * @param {Function} fn - The iterator callback. It passes three arguments:
     * * item - The array item.
     * * index - The item's index in the array.
     * * arr - The array that each is being applied to.
     * @param {Object} [ctx] The context.
     */
    function each(arr: any[], fn: ()=>any, ctx?: any): void;

    /**
     * Remove the last occurence of an item from an array.
     * @function #erase
     * @memberOf Highcharts
     * @param {Array} arr - The array.
     * @param {*} item - The item to remove.
     */
    function erase(arr: any[], item: any): void;

    /**
     * Provide error messages for debugging, with links to online explanation. This
     * function can be overridden to provide custom error handling.
     * @function #error
     * @memberOf Highcharts
     * @param {Number|String} code - The error code. See [errors.xml]{@link
     *     https://github.com/highcharts/highcharts/blob/master/errors/errors.xml}
     *     for available codes. If it is a string, the error message is printed
     *     directly in the console.
     * @param {Boolean} [stop=false] - Whether to throw an error or just log a
     *     warning in the console.
     * @sample highcharts/chart/highcharts-error/ Custom error handler
     */
    function error(code: number | string, stop?: boolean): void;

    /**
     * Utility function to extend an object with the members of another.
     * @function #extend
     * @memberOf Highcharts
     * @param {Object} a - The object to be extended.
     * @param {Object} b - The object to add to the first one.
     * @returns {Object} Object a, the original object.
     */
    function extend(a: any, b: any): any;

    /**
     * Extend a prototyped class by new members.
     * @function #extendClass
     * @memberOf Highcharts
     * @param {Object} parent - The parent prototype to inherit.
     * @param {Object} members - A collection of prototype members to add or
     *        override compared to the parent prototype.
     * @returns {Object} A new prototype.
     */
    function extendClass(parent: any, members: any): any;

    /**
     * Return the value of the first element in the array that satisfies the
     * provided testing function.
     * @function #find
     * @memberOf Highcharts
     * @param {Array} arr - The array to test.
     * @param {Function} callback - The callback function. The function receives the
     *        item as the first argument. Return `true` if this item satisfies the
     *        condition.
     * @returns {Mixed} - The value of the element.
     */
    function find(arr: any[], callback: ()=>any): any;

    /**
     * Fire an event that was registered with {@link Highcharts#addEvent}.
     * @function #fireEvent
     * @memberOf Highcharts
     * @param {Object} el - The object to fire the event on. It can be a
     *        {@link HTMLDOMElement}, an {@link SVGElement} or any other object.
     * @param {String} type - The type of event.
     * @param {Object} [eventArguments] - Custom event arguments that are passed on
     *        as an argument to the event handler.
     * @param {Function} [defaultFunction] - The default function to execute if the
     *        other listeners haven't returned false.
     */
    function fireEvent(el: any, type: string, eventArguments?: any, defaultFunction?: ()=>any): void;

    /**
     * Format a string according to a subset of the rules of Python's String.format
     * method.
     * @function #format
     * @memberOf Highcharts
     * @param {String} str
     *        The string to format.
     * @param {Object} ctx
     *        The context, a collection of key-value pairs where each key is
     *        replaced by its value.
     * @param {Time}   [time]
     *        A `Time` instance that determines the date formatting, for example for
     *        applying time zone corrections to the formatted date.
     * @returns {String} The formatted string.
     * @example
     * var s = Highcharts.format(
     *     'The {color} fox was {len:.2f} feet long',
     *     { color: 'red', len: Math.PI }
     * );
     * // => The red fox was 3.14 feet long
     */
    function format(str: string, ctx: any, time?: Time): string;

    /**
     * Format a single variable. Similar to sprintf, without the % prefix.
     * @example
     * formatSingle('.2f', 5); // => '5.00'.
     * @function #formatSingle
     * @memberOf Highcharts
     * @param {String} format The format string.
     * @param {*} val The value.
     * @param {Time}   [time]
     *        A `Time` instance that determines the date formatting, for example for
     *        applying time zone corrections to the formatted date.
     * @returns {String} The formatted representation of the value.
     */
    function formatSingle(format: string, val: any, time?: Time): string;

    /**
     * Highmaps only. Restructure a GeoJSON object in preparation to be read
     * directly by the {@link
     * https://api.highcharts.com/highmaps/plotOptions.series.mapData|
     * series.mapData} option. The GeoJSON will be broken down to fit a specific
     * Highcharts type, either `map`, `mapline` or `mappoint`. Meta data in
     * GeoJSON's properties object will be copied directly over to
     * {@link Point.properties} in Highmaps.
     * @function #geojson
     * @memberOf Highcharts
     * @param  {Object} geojson
     *         The GeoJSON structure to parse, represented as a JavaScript object
     *         rather than a JSON string.
     * @param  {String} [hType=map]
     *         The Highmaps series type to prepare for. Setting "map" will return
     *         GeoJSON polygons and multipolygons. Setting "mapline" will return
     *         GeoJSON linestrings and multilinestrings. Setting "mappoint" will
     *         return GeoJSON points and multipoints.
     * @return {Object}
     *         An object ready for the `mapData` option.
     * @sample maps/demo/geojson/
     *         Simple areas
     * @sample maps/demo/geojson-multiple-types/
     *         Multiple types
     */
    function geojson(geojson: any, hType?: string): any;

    /**
     * Get the magnitude of a number.
     * @function #getMagnitude
     * @memberOf Highcharts
     * @param {Number} number The number.
     * @returns {Number} The magnitude, where 1-9 are magnitude 1, 10-99 magnitude 2
     *        etc.
     */
    function getMagnitude(number: number): number;

    /**
     * Get the computed CSS value for given element and property, only for numerical
     * properties. For width and height, the dimension of the inner box (excluding
     * padding) is returned. Used for fitting the chart within the container.
     * @function #getStyle
     * @memberOf Highcharts
     * @param {HTMLDOMElement} el - A HTML element.
     * @param {String} prop - The property name.
     * @param {Boolean} [toInt=true] - Parse to integer.
     * @returns {Number} - The numeric value.
     */
    function getStyle(el: HTMLDOMElement, prop: string, toInt?: boolean): number;

    /**
     * Filter an array by a callback.
     * @function #grep
     * @memberOf Highcharts
     * @param {Array} arr - The array to filter.
     * @param {Function} callback - The callback function. The function receives the
     *        item as the first argument. Return `true` if the item is to be
     *        preserved.
     * @returns {Array} - A new, filtered array.
     */
    function grep(arr: any[], callback: ()=>any): any[];

    /**
     * Search for an item in an array.
     * @function #inArray
     * @memberOf Highcharts
     * @param {*} item - The item to search for.
     * @param {Array} arr - The array or node collection to search in.
     * @param {Number} [fromIndex=0] - The index to start searching from.
     * @returns {Number} - The index within the array, or -1 if not found.
     */
    function inArray(item: any, arr: any[], fromIndex?: number): number;

    /**
     * Utility function to check if an item is an array.
     * @function #isArray
     * @memberOf Highcharts
     * @param {Object} obj - The item to check.
     * @returns {Boolean} - True if the argument is an array.
     */
    function isArray(obj: any): boolean;

    /**
     * Utility function to check if an Object is an class.
     * @function #isClass
     * @memberOf Highcharts
     * @param {Object} obj - The item to check.
     * @returns {Boolean} - True if the argument is an class.
     */
    function isClass(obj: any): boolean;

    /**
     * Utility function to check if an Object is a HTML Element.
     * @function #isDOMElement
     * @memberOf Highcharts
     * @param {Object} obj - The item to check.
     * @returns {Boolean} - True if the argument is a HTML Element.
     */
    function isDOMElement(obj: any): boolean;

    /**
     * Utility function to check if an item is a number and it is finite (not NaN,
     * Infinity or -Infinity).
     * @function #isNumber
     * @memberOf Highcharts
     * @param  {Object} n
     *         The item to check.
     * @return {Boolean}
     *         True if the item is a finite number
     */
    function isNumber(n: any): boolean;

    /**
     * Utility function to check if an item is of type object.
     * @function #isObject
     * @memberOf Highcharts
     * @param {Object} obj - The item to check.
     * @param {Boolean} [strict=false] - Also checks that the object is not an
     *    array.
     * @returns {Boolean} - True if the argument is an object.
     */
    function isObject(obj: any, strict?: boolean): boolean;

    /**
     * Utility function to check for string type.
     * @function #isString
     * @memberOf Highcharts
     * @param {Object} s - The item to check.
     * @returns {Boolean} - True if the argument is a string.
     */
    function isString(s: any): boolean;

    /**
     * Returns an array of a given object's own properties.
     * @function #keys
     * @memberOf Highcharts
     * @param {Object} obj - The object of which the properties are to be returned.
     * @returns {Array} - An array of strings that represents all the properties.
     */
    function keys(obj: any): any[];

    /**
     * Map an array by a callback.
     * @function #map
     * @memberOf Highcharts
     * @param {Array} arr - The array to map.
     * @param {Function} fn - The callback function. Return the new value for the
     *        new array.
     * @returns {Array} - A new array item with modified items.
     */
    function map(arr: any[], fn: ()=>any): any[];

    /**
     * The factory function for creating new map charts. Creates a new {@link
     * Chart|Chart} object with different default options than the basic Chart.
     * @function #mapChart
     * @memberOf Highcharts
     * @param  {String|HTMLDOMElement} renderTo
     *         The DOM element to render to, or its id.
     * @param  {Options} options
     *         The chart options structure as described in the {@link
     *         https://api.highcharts.com/highstock|options reference}.
     * @param  {Function} callback
     *         A function to execute when the chart object is finished loading and
     *         rendering. In most cases the chart is built in one thread, but in
     *         Internet Explorer version 8 or less the chart is sometimes
     *         initialized before the document is ready, and in these cases the
     *         chart object will not be finished synchronously. As a consequence,
     *         code that relies on the newly built Chart object should always run in
     *         the callback. Defining a
     *         {@link https://api.highcharts.com/highstock/chart.events.load|chart.event.load}
     *         handler is equivalent.
     * @return {Chart}
     *         The chart object.
     */
    function mapChart(renderTo: string | HTMLDOMElement, options: Options, callback: ()=>any): Chart;

    /**
     * Utility function to deep merge two or more objects and return a third object.
     * If the first argument is true, the contents of the second object is copied
     * into the first object. The merge function can also be used with a single
     * object argument to create a deep copy of an object.
     * @function #merge
     * @memberof Highcharts
     * @param {Boolean} [extend] - Whether to extend the left-side object (a) or
     * return a whole new object.
     * @param {Object} [a] - The first object to extend. When only this is given,
     *        the function returns a deep copy.
     * @param {...Object} n - An object to merge into the previous one.
     * @returns {Object} - The merged object. If the first argument is true, the
     * return is the same as the second argument.
     */
    function merge(extend?: boolean, a?: any, ...n: any[]): any;

    /**
     * A factory function for creating a mock point object
     * @class
     * @function #mockPoint
     * @memberOf Highcharts
     * @param {MockPointOptions} mockPointOptions
     * @return {MockPoint} a mock point
     */
    function mockPoint(mockPointOptions: MockPointOptions): any;

    /**
     * Take an interval and normalize it to multiples of round numbers.
     * @todo  Move this function to the Axis prototype. It is here only for
     *        historical reasons.
     * @function #normalizeTickInterval
     * @memberOf Highcharts
     * @param {Number} interval - The raw, un-rounded interval.
     * @param {Array} [multiples] - Allowed multiples.
     * @param {Number} [magnitude] - The magnitude of the number.
     * @param {Boolean} [allowDecimals] - Whether to allow decimals.
     * @param {Boolean} [hasTickAmount] - If it has tickAmount, avoid landing
     *        on tick intervals lower than original.
     * @returns {Number} The normalized interval.
     */
    function normalizeTickInterval(interval: number, multiples?: any[], magnitude?: number, allowDecimals?: boolean, hasTickAmount?: boolean): number;

    /**
     * Format a number and return a string based on input settings.
     * @function #numberFormat
     * @memberOf Highcharts
     * @param {Number} number - The input number to format.
     * @param {Number} decimals - The amount of decimals. A value of -1 preserves
     *        the amount in the input number.
     * @param {String} [decimalPoint] - The decimal point, defaults to the one given
     *        in the lang options, or a dot.
     * @param {String} [thousandsSep] - The thousands separator, defaults to the one
     *        given in the lang options, or a space character.
     * @returns {String} The formatted number.
     * @sample highcharts/members/highcharts-numberformat/ Custom number format
     */
    function numberFormat(number: number, decimals: number, decimalPoint?: string, thousandsSep?: string): string;

    /**
     * Iterate over object key pairs in an object.
     * @function #objectEach
     * @memberOf Highcharts
     * @param  {Object}   obj - The object to iterate over.
     * @param  {Function} fn  - The iterator callback. It passes three arguments:
     * * value - The property value.
     * * key - The property key.
     * * obj - The object that objectEach is being applied to.
     * @param  {Object}   ctx The context
     */
    function objectEach(obj: any, fn: ()=>any, ctx: any): void;

    /**
     * Get the element's offset position, corrected for `overflow: auto`.
     * @function #offset
     * @memberOf Highcharts
     * @param {HTMLDOMElement} el - The HTML element.
     * @returns {Object} An object containing `left` and `top` properties for the
     * position in the page.
     */
    function offset(el: HTMLDOMElement): any;

    /**
     * Left-pad a string to a given length by adding a character repetetively.
     * @function #pad
     * @memberOf Highcharts
     * @param {Number} number - The input string or number.
     * @param {Number} length - The desired string length.
     * @param {String} [padder=0] - The character to pad with.
     * @returns {String} The padded string.
     */
    function pad(number: number, length: number, padder?: string): string;

    /**
     * Return the first value that is not null or undefined.
     * @function #pick
     * @memberOf Highcharts
     * @param {...*} items - Variable number of arguments to inspect.
     * @returns {*} The value of the first argument that is not null or undefined.
     */
    function pick(...items: any[]): any;

    /**
     * Reduce an array to a single value.
     * @function #reduce
     * @memberOf Highcharts
     * @param {Array} arr - The array to reduce.
     * @param {Function} fn - The callback function. Return the reduced value.
     *  Receives 4 arguments: Accumulated/reduced value, current value, current
     *  array index, and the array.
     * @param {Mixed} initialValue - The initial value of the accumulator.
     * @returns {Mixed} - The reduced value.
     */
    function reduce(arr: any[], fn: ()=>any, initialValue: any): any;

    /**
     * Return a length based on either the integer value, or a percentage of a base.
     * @function #relativeLength
     * @memberOf Highcharts
     * @param  {RelativeSize} value
     *         A percentage string or a number.
     * @param  {number} base
     *         The full length that represents 100%.
     * @param  {number} [offset=0]
     *         A pixel offset to apply for percentage values. Used internally in
     *         axis positioning.
     * @return {number}
     *         The computed length.
     */
    function relativeLength(value: RelativeSize, base: number, offset?: number): number;

    /**
     * Remove an event that was added with {@link Highcharts#addEvent}.
     * @function #removeEvent
     * @memberOf Highcharts
     * @param {Object} el - The element to remove events on.
     * @param {String} [type] - The type of events to remove. If undefined, all
     *        events are removed from the element.
     * @param {Function} [fn] - The specific callback to remove. If undefined, all
     *        events that match the element and optionally the type are removed.
     */
    function removeEvent(el: any, type?: string, fn?: ()=>any): void;

    /**
     * Factory to create new series prototypes.
     * @function #seriesType
     * @memberOf Highcharts
     * @param {String} type - The series type name.
     * @param {String} parent - The parent series type name. Use `line` to inherit
     *        from the basic {@link Series} object.
     * @param {Object} options - The additional default options that is merged with
     *        the parent's options.
     * @param {Object} props - The properties (functions and primitives) to set on
     *        the new prototype.
     * @param {Object} [pointProps] - Members for a series-specific extension of the
     *        {@link Point} prototype if needed.
     * @returns {*} - The newly created prototype as extended from {@link Series}
     * or its derivatives.
     */
    function seriesType(type: string, parent: string, options: any, props: any, pointProps?: any): any;

    /**
     * Set the global animation to either a given value, or fall back to the given
     * chart's animation option.
     * @function #setAnimation
     * @memberOf Highcharts
     * @param {Boolean|AnimationOptions} animation - The animation object.
     * @param {Object} chart - The chart instance.
     * @todo This function always relates to a chart, and sets a property on the
     *        renderer, so it should be moved to the SVGRenderer.
     */
    function setAnimation(animation: boolean | AnimationOptions, chart: any): void;

    /**
     * Merge the default options with custom options and return the new options
     * structure. Commonly used for defining reusable templates.
     * @function #setOptions
     * @memberOf  Highcharts
     * @sample highcharts/global/useutc-false Setting a global option
     * @sample highcharts/members/setoptions Applying a global theme
     * @param {Object} options The new custom chart options.
     * @returns {Object} Updated options.
     */
    function setOptions(options: any): any;

    /**
     * Test whether at least one element in the array passes the test implemented by
     * the provided function.
     * @function #some
     * @memberOf Highcharts
     * @param  {Array}   arr  The array to test
     * @param  {Function} fn  The function to run on each item. Return truty to pass
     *                        the test. Receives arguments `currentValue`, `index`
     *                        and `array`.
     * @param  {Object}   ctx The context.
     */
    function some(arr: any[], fn: ()=>any, ctx: any): void;

    /**
     * Check if an element is an array, and if not, make it into an array.
     * @function #splat
     * @memberOf Highcharts
     * @param {*} obj - The object to splat.
     * @returns {Array} The produced or original array.
     */
    function splat(obj: any): any[];

    /**
     * Sort an object array and keep the order of equal items. The ECMAScript
     * standard does not specify the behaviour when items are equal.
     * @function #stableSort
     * @memberOf Highcharts
     * @param {Array} arr - The array to sort.
     * @param {Function} sortFunction - The function to sort it with, like with
     *        regular Array.prototype.sort.
     */
    function stableSort(arr: any[], sortFunction: ()=>any): void;

    /**
     * Factory function for creating new stock charts. Creates a new {@link Chart|
     * Chart} object with different default options than the basic Chart.
     * @function #stockChart
     * @memberOf Highcharts
     * @param  {String|HTMLDOMElement} renderTo
     *         The DOM element to render to, or its id.
     * @param  {Options} options
     *         The chart options structure as described in the {@link
     *         https://api.highcharts.com/highstock|options reference}.
     * @param  {Function} callback
     *         A function to execute when the chart object is finished loading and
     *         rendering. In most cases the chart is built in one thread, but in
     *         Internet Explorer version 8 or less the chart is sometimes
     *         initialized before the document is ready, and in these cases the
     *         chart object will not be finished synchronously. As a consequence,
     *         code that relies on the newly built Chart object should always run in
     *         the callback. Defining a {@link https://api.highcharts.com/highstock/chart.events.load|
     *         chart.event.load} handler is equivalent.
     * @return {Chart}
     *         The chart object.
     * @example
     * var chart = Highcharts.stockChart('container', {
     *     series: [{
     *         data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
     *         pointInterval: 24 * 60 * 60 * 1000
     *     }]
     * });
     */
    function stockChart(renderTo: string | HTMLDOMElement, options: Options, callback: ()=>any): Chart;

    /**
     * Stop running animation.
     * @todo A possible extension to this would be to stop a single property, when
     * we want to continue animating others. Then assign the prop to the timer
     * in the Fx.run method, and check for the prop here. This would be an
     * improvement in all cases where we stop the animation from .attr. Instead of
     * stopping everything, we can just stop the actual attributes we're setting.
     * @function #stop
     * @memberOf Highcharts
     * @param {SVGElement} el - The SVGElement to stop animation on.
     * @param {string} [prop] - The property to stop animating. If given, the stop
     *    method will stop a single property from animating, while others continue.
     */
    function stop(el: SVGElement, prop?: string): void;

    /**
     * Set a timeout if the delay is given, otherwise perform the function
     * synchronously.
     * @function #syncTimeout
     * @memberOf Highcharts
     * @param   {Function} fn - The function callback.
     * @param   {Number}   delay - Delay in milliseconds.
     * @param   {Object}   [context] - The context.
     * @returns {Number} An identifier for the timeout that can later be cleared
     * with H.clearTimeout.
     */
    function syncTimeout(fn: ()=>any, delay: number, context?: any): number;

    /**
     * Get a unique key for using in internal element id's and pointers. The key
     * is composed of a random hash specific to this Highcharts instance, and a
     * counter.
     * @function #uniqueKey
     * @memberOf Highcharts
     * @return {string} The key.
     * @example
     * var id = H.uniqueKey(); // => 'highcharts-x45f6hp-0'
     */
    function uniqueKey(): string;

    /**
     * Wrap a method with extended functionality, preserving the original function.
     * @function #wrap
     * @memberOf Highcharts
     * @param {Object} obj - The context object that the method belongs to. In real
     *        cases, this is often a prototype.
     * @param {String} method - The name of the method to extend.
     * @param {Function} func - A wrapper function callback. This function is called
     *        with the same arguments as the original function, except that the
     *        original function is unshifted and passed as the first argument.
     */
    function wrap(obj: any, method: string, func: ()=>any): void;

    /**
     * A mock point configuration.
     * @typedef {Object} MockPointOptions
     * @property {Number} x - x value for the point in xAxis scale or pixels
     * @property {Number} y - y value for the point in yAxis scale or pixels
     * @property {String|Number} [xAxis] - xAxis index or id
     * @property {String|Number} [yAxis] - yAxis index or id
     */
    type MockPointOptions = {
        x: number;
        y: number;
        xAxis?: string | number;
        yAxis?: string | number;
    };

    /**
     * @typedef {Object} PatternOptions
     * @property {Object} pattern Holds a pattern definition.
     * @property {String} pattern.image URL to an image to use as the pattern.
     * @property {Number} pattern.width Width of the pattern. For images this is
     *  automatically set to the width of the element bounding box if not supplied.
     *  For non-image patterns the default is 32px. Note that automatic resizing of
     *  image patterns to fill a bounding box dynamically is only supported for
     *  patterns with an automatically calculated ID.
     * @property {Number} pattern.height Analogous to pattern.width.
     * @property {Number} pattern.aspectRatio For automatically calculated width and
     *  height on images, it is possible to set an aspect ratio. The image will be
     *  zoomed to fill the bounding box, maintaining the aspect ratio defined.
     * @property {Number} pattern.x Horizontal offset of the pattern. Defaults to 0.
     * @property {Number} pattern.y Vertical offset of the pattern. Defaults to 0.
     * @property {Object|String} pattern.path Either an SVG path as string, or an
     *  object. As an object, supply the path string in the `path.d` property. Other
     *  supported properties are standard SVG attributes like `path.stroke` and
     *  `path.fill`. If a path is supplied for the pattern, the `image` property is
     *  ignored.
     * @property {String} pattern.color Pattern color, used as default path stroke.
     * @property {Number} pattern.opacity Opacity of the pattern as a float value
     *     from 0 to 1.
     * @property {String} pattern.id ID to assign to the pattern. This is
     *    automatically computed if not added, and identical patterns are reused. To
     *    refer to an existing pattern for a Highcharts color, use
     *    `color: "url(#pattern-id)"`.
     * @property {Object|Boolean} animation Animation options for the image pattern
     *  loading.
     * @example
     * // Pattern used as a color option
     * color: {
     *     pattern: {
     *            path: {
     *                 d: 'M 3 3 L 8 3 L 8 8 Z',
     *                fill: '#102045'
     *            },
     *            width: 12,
     *            height: 12,
     *            color: '#907000',
     *            opacity: 0.5
     *     }
     * }
     * @sample highcharts/series/pattern-fill-area/
     *         Define a custom path pattern
     * @sample highcharts/series/pattern-fill-pie/
     *         Default patterns and a custom image pattern
     * @sample maps/demo/pattern-fill-map/
     *         Custom images on map
     */
    type PatternOptions = {
        pattern: {
            image: string;
            width: number;
            height: number;
            aspectRatio: number;
            x: number;
            y: number;
            path: any | string;
            color: string;
            opacity: number;
            id: string;
        };
        animation: any | boolean;
    };

    /**
     * @typedef {Number|String} RelativeSize - If a number is given, it defines the
     *    pixel length. If a percentage string is given, like for example `'50%'`,
     *    the setting defines a length relative to a base size, for example the size
     *    of a container.
     */
    type RelativeSize = number | string;

    /**
     * @typedef {Object} ShadowOptions
     * @property {string} [color=#000000] The shadow color.
     * @property {number} [offsetX=1] The horizontal offset from the element.
     * @property {number} [offsetY=1] The vertical offset from the element.
     * @property {number} [opacity=0.15] The shadow opacity.
     * @property {number} [width=3] The shadow width or distance from the
     *    element.
     */
    type ShadowOptions = {
        color?: string;
        offsetX?: number;
        offsetY?: number;
        opacity?: number;
        width?: number;
    };

    /**
     * @typedef {Object} SVGAttributes An object of key-value pairs for SVG
     *   attributes. Attributes in Highcharts elements for the most parts
     *   correspond to SVG, but some are specific to Highcharts, like `zIndex`,
     *   `rotation`, `rotationOriginX`, `rotationOriginY`, `translateX`,
     *   `translateY`, `scaleX` and `scaleY`. SVG attributes containing a hyphen
     *   are _not_ camel-cased, they should be quoted to preserve the hyphen.
     * @example
     * {
     *     'stroke': '#ff0000', // basic
     *     'stroke-width': 2, // hyphenated
     *     'rotation': 45 // custom
     *     'd': ['M', 10, 10, 'L', 30, 30, 'z'] // path definition, note format
     * }
     */
    type SVGAttributes = {
    };

    /**
     * @typedef {Object} Values
     * @property {Number[][]} values
     *           Combined xData and yData values into a tuple
     * @property {Number[]} xData
     *           Values represent x timestamp values
     * @property {Number[]} yData
     *           Values represent y values
     */
    type Values = {
        values: (number[])[];
        xData: number[];
        yData: number[];
    };

}

/**
 * Creates a new SeriesBuilder. A SeriesBuilder consists of a number
 * of ColumnReaders that reads columns and give them a name.
 * Ex: A series builder can be constructed to read column 3 as 'x' and
 * column 7 and 8 as 'y1' and 'y2'.
 * The output would then be points/rows of the form {x: 11, y1: 22, y2: 33}
 * The name of the builder is taken from the second column. In the above
 * example it would be the column with index 7.
 * @constructor
 */
declare class SeriesBuilder {
    /**
     * Creates and adds ColumnReader from the given columnIndex and configName.
     * ColumnIndex can be undefined and in that case the reader will be given
     * an index when columns are populated.
     * @param {Number | undefined} columnIndex
     * @param configName
     */
    addColumnReader(columnIndex: number | undefined, configName: any): void;

    /**
     * Returns an array of column indexes that the builder will use when
     * reading data.
     * @returns {Array}
     */
    getReferencedColumnIndexes(): any[];

    /**
     * Returns true if the builder has a reader for the given configName.
     * @param configName
     * @returns {boolean}
     */
    hasReader(configName: any): boolean;

    /**
     * Populates readers with column indexes. A reader can be added without
     * a specific index and for those readers the index is taken sequentially
     * from the free columns (this is handled by the ColumnCursor instance).
     * @returns {boolean}
     */
    populateColumns(): boolean;

    /**
     * Reads a row from the dataset and returns a point or array depending
     * on the names of the readers.
     * @param columns
     * @param rowIndex
     * @returns {Array | Object}
     */
    read(columns: any, rowIndex: any): any[] | any;

}

