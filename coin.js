/**
 * Created by Pawel on 2017-01-02.
 */
function Coin(x, y, radius, width) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.width = width;
    this.pitch = 0;
    this.roll = 0;

    this.show = function() {
        var cos_p = cos(this.pitch);
        var sin_p = sin(this.pitch);
        push();
        translate(this.x, this.y);
        rotate(this.roll);
        stroke(138, 43, 226);
        fill(138, 43, 226);
        ellipse(0, + (this.width / 2) * cos_p * sign(sin_p), 2 * this.radius, (2 * this.radius) * sin_p);
        rect( - this.radius, - this.width * cos_p / 2, 2 * this.radius, this.width * cos(this.pitch));
        fill(230, 230, 250);
        ellipse(0, - (this.width / 2) * cos_p * sign(sin_p), 2 * this.radius, (2 * this.radius) * sin_p);
        pop();
    }
}
