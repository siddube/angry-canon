App = function()
{
    // this is where the WADE app is initialized
	this.init = function()
	{
        // load a scene
		wade.loadScene('scene1.wsc', true, function()
        {
            // the scene has been loaded, do something here
            var cannon = wade.getSceneObject('cannon');
            var displacement;
            var angle;
            
            wade.app.onMouseMove = function(data) {
                displacement = wade.vec2.sub(data.screenPosition, cannon.getPosition());
                angle = Math.atan2(displacement.y, displacement.x);
                cannon.setRotation(angle);
            };
            
            wade.app.onMouseUp = function() {
                var powerbar = wade.getSceneObject('powerbar').getSprite();
                var cannon = wade.getSceneObject('cannon');
                var rotation = cannon.getSprite().getRotation();
                var pos = wade.vec2.rotate({x:120,y:0}, rotation);
                var vel = wade.vec2.normalize(pos);
                wade.vec2.addInPlace(pos, cannon.getPosition());
                
                var ball = wade.getSceneObject('ball').clone();
                ball.setPosition(pos);
                wade.addSceneObject(ball, true);
                
                wade.vec2.scaleInPlace(vel, 2000 * powerbar.value);
                setTimeout(function() {
                    ball.setVelocity(vel);
                }, 0);
                
                powerbar.value = 0.0;
            
            };
        });
	};
};
