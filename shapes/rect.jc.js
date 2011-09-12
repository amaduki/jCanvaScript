jCanvaScript.Proto.Rect = function(x, y, width, height, lineColor, fillColor) {
    var options = x;
    if (typeof options != 'object')
        options = {x:x, y:y, width:width, height:height, lineColor:lineColor, fillColor:fillColor};
    options = jCanvaScript.checkDefaults(options, {width:0, height:0});
    jCanvaScript.Proto.Shape.call(this, options);
    this._width = options.width;
    this._height = options.height;
    this._proto = 'rect';
    return this;
};

jCanvaScript.Proto.Rect.prototype = Object.create(jCanvaScript.Proto.Shape.prototype);

jCanvaScript.Proto.Rect.prototype.draw = function(ctx) {
    ctx.rect(this._x, this._y, this._width, this._height);
};

jCanvaScript.Proto.Rect.prototype.getRect = function(type) {
    return jCanvaScript.getRect(this, {x:this._x, y:this._y, width:this._width, height:this._height}, type);
};