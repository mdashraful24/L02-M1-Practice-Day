// ! Abstraction, the 3rd pillar of OOP

// * using interface

// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log("Playing music.......");
//     };

//     pause(): void {
//         console.log("Music paused.....");
//     };

//     stop(): void {
//         console.log("Music stopped.....");
//     };
// }

// const myPlayer = new MusicPlayer();
// myPlayer.play();


// * using abstract class

abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MyPlayer extends MediaPlayer {
    play(): void {
        console.log("Playing music.......");
    };

    pause(): void {
        console.log("Music paused.....");
    };

    stop(): void {
        console.log("Music stopped.....");
    };
}

const myMusicPlayer = new MyPlayer();
myMusicPlayer.pause();
