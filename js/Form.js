class Form {
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Enter Your Name!");
        this.button = createButton('lets play!');
        this.greeting = createElement('h2');
    }
    
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        this.title.position(displayWidth/2 - 50,0);
        this.title.html("Space Encounter!");
        this.title.style('font-family','Brush Script MT');
        this.title.style('color','cyan');
        this.title.style('font-size','40px');

        this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);
        this.input.style('font-family','Brush Script MT');
        this.input.style('font-size','15px');
        this.input.style('width','200px');
        this.input.style('height','20px');
        this.input.style('background','lavender');
        this.input.style('color','skyBlue');

        this.button.position(displayWidth/2 + 30,displayHeight/2);
        this.button.style('font-family','Brush Script MT');
        this.button.style('font-size','20px');
        this.button.style('background','lightPink');
        this.button.style('width','200px');
        this.button.style('height','40px');
        this.button.style('color','purple');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hi! " + player.name);
            this.greeting.style('font-family','Brush Script MT');
            this.greeting.style('font-size','50px');
            this.greeting.style('color','maroon');
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        });
    }
    
}