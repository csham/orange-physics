(function(Phaser) {
    var preload = function() {
        this.load.image('orange', 'assets/img/orange.png');
        this.load.image('title', 'assets/img/title-content.jpg');
    };

    var create = function() {
        this.matter.world.setBounds();
        this.matter.add.mouseSpring({ length: 1, stiffness: 0.6 });
        var screenCenterX = this.cameras.main.worldView.x + (this.cameras.main.width/2);
        var screenCenterY = this.cameras.main.worldView.y + (this.cameras.main.height/2);
        var title = this.matter.add.image(0, 0, 'title', null, { isStatic: true });
        title.setScale(0.5);
        title.setX(screenCenterX);
        title.setY(screenCenterY);

        var self = this;
        for ( var i = 0; i < 35; i++) {
            var xOffset = (i%4) * 250;
            setTimeout(function() {
                var orange = self.matter.add.image(screenCenterX, 0, 'orange');
                orange.setCircle();
                orange.setFriction(1);
                orange.setBounce(0.5);
                orange.setScale(.5);
            }, i * 50);
            
        }
    };

    var config = {
        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.RESIZE
        },
        parent: 'orange-video-animation',
        backgroundColor: '#fff2e8',
        physics: {
            default: 'matter',
            matter: {}
        },
        scene: {
            preload: preload,
            create: create
        }
    };

    var game = new Phaser.Game(config);

    
})(Phaser);